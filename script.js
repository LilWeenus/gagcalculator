import { mutationOrder, mutationMultipliers, mutationColors, unreleasedFlags, showUnreleasedDefault, mutationCombos, mutationPriorityGroups } from './data/mutations.js';
import { plants } from './data/plants.js';

// ================================================================
// CONFIGURATION AND CALCULATION ENGINE
// ================================================================
// Edit these values to modify game calculations and behavior

// --- Core Configuration ---
const CONFIG = {
  ANIMATION: {
    RAINBOW_CYCLE_SPEED: 0.2, // 5s full cycle (higher = faster)
    GOLDEN_COLOR: "#FFD700"
  },
  CALCULATION: {
    CAP_AT_1E12: false,        // Set to true to cap values at 1 trillion
    MIN_WEIGHT_RATIO: 0.95,    // Minimum weight multiplier (price floor)
    PRICE_FLOOR_RATIO: 0.95    // Default weight ratio for plants
  },
  GROWTH_MULTIPLIERS: { 
    none: 1, 
    golden: 20,
    rainbow: 50 
  },
  TEMPERATURE_MUTATIONS: ["Wet", "Chilled", "Drenched", "Frozen"]
};

// Legacy aliases for compatibility
const TEMPS = CONFIG.TEMPERATURE_MUTATIONS;
const CAP_AT_1E12 = CONFIG.CALCULATION.CAP_AT_1E12;

// --- Mutation Processing ---
// Convert multipliers to "stacks" = (multiplier - 1) for additive calculation
const stacksEnv = Object.fromEntries(
  Object.entries(mutationMultipliers).map(([name, multi]) => [name, (Number(multi) || 1) ])
);

// Split out temperature stacks for easy access
const stacksTemp = Object.fromEntries(
  TEMPS.map(t => [t, stacksEnv[t] || 0])
);

// --- Mutation Combo System ---
// Define how mutations combine and interact using imported data from mutations.js
const COMBO_RULES = {
  // Exclusive groups (derived from mutationPriorityGroups)
  exclusiveGroups: Object.values(mutationPriorityGroups),
  
  // Combination recipes: imported from mutationCombos
  combinations: mutationCombos.map(combo => ({
    requires: combo.requires,
    result: combo.name,
    removes: combo.removes
  }))
};

// --- Max Mutation Set Calculator ---
// Computes the optimal mutation selection for maximum value
function computeMaxMutationSet() {
  const result = new Set();
  
  // Add highest temperature by multiplier
  let bestTemp = null;
  let bestTempVal = -Infinity;
  for (const t of TEMPS) {
    if (unreleasedFlags?.[t] && !isShowUnreleased()) continue;
    const v = Number(mutationMultipliers[t]) || 0;
    if (v > bestTempVal) { bestTempVal = v; bestTemp = t; }
  }
  if (bestTemp) result.add(bestTemp);
  
  // Get all available mutations (excluding temps, handled above)
  const allMutations = mutationOrder.filter(name => {
    if (TEMPS.includes(name)) return false;
    if (unreleasedFlags?.[name] && !isShowUnreleased()) return false;
    return true;
  });
  
  // Build map of combo results to their components for smart selection
  const comboComponentMap = new Map(); // result -> [components]
  const comboResultMap = new Map();    // component -> result
  
  COMBO_RULES.combinations.forEach(combo => {
    // Skip if result is unreleased and we're not showing unreleased
    if (unreleasedFlags?.[combo.result] && !isShowUnreleased()) return;
    
    const components = combo.removes.filter(comp => allMutations.includes(comp));
    if (components.length > 0) {
      comboComponentMap.set(combo.result, components);
      components.forEach(comp => comboResultMap.set(comp, combo.result));
    }
  });
  
  // Smart mutation selection: prefer combo results if they're better than components
  const toAdd = new Set(allMutations);
  const toRemove = new Set();
  
  // For each combo, decide whether to use the combo result or individual components
  comboComponentMap.forEach((components, comboResult) => {
    if (!allMutations.includes(comboResult)) return;
    
    const comboValue = Number(mutationMultipliers[comboResult]) || 1;
    const componentValues = components.map(comp => Number(mutationMultipliers[comp]) || 1);
    const componentSum = componentValues.reduce((sum, val) => sum + val, 0);
    
    // If combo result is better than sum of components, use combo
    if (comboValue >= componentSum) {
      toAdd.add(comboResult);
      components.forEach(comp => toRemove.add(comp));
    }
    // Otherwise keep individual components and remove combo result
    else {
      toRemove.add(comboResult);
    }
  });
  
  // Apply the smart selections
  toAdd.forEach(mutation => {
    if (!toRemove.has(mutation)) result.add(mutation);
  });
  
  // Handle exclusive groups by picking the highest value from each group
  COMBO_RULES.exclusiveGroups.forEach(group => {
    const available = group.filter(name => {
      if (unreleasedFlags?.[name] && !isShowUnreleased()) return false;
      return allMutations.includes(name) || result.has(name);
    });
    
    if (available.length > 1) {
      // Find the highest value mutation in this group
      let best = null;
      let bestValue = -Infinity;
      available.forEach(name => {
        const value = Number(mutationMultipliers[name]) || 1;
        if (value > bestValue) {
          bestValue = value;
          best = name;
        }
      });
      
      // Remove all others from this group
      available.forEach(name => {
        if (name !== best) result.delete(name);
      });
      
      // Add the best one
      if (best) result.add(best);
    }
  });
  
  // Final combo processing to handle any remaining interactions
  return ComboProcessor.applyCombos(result);
}

// --- Helper Functions ---
function getActiveMutationsList(growth, temperature, envMutations) {
  const sortMode = Utils.getElement("mutationSort")?.value || "display";
  let orderList = getSortedMutationOrder(sortMode);
  if (mutationSortReversed) orderList = orderList.reverse();
  
  const selectedSet = new Set([...(temperature ? [temperature] : []), ...envMutations]);
  const orderedSelected = orderList.filter(n => selectedSet.has(n));
  
  const allMutations = [];
  if (growth !== "none") allMutations.push(growth === "golden" ? "Golden" : "Rainbow");
  allMutations.push(...orderedSelected);
  
  return allMutations;
}

// Preview display always uses display order (not affected by sort option)
function getActiveMutationsListForPreview(growth, temperature, envMutations) {
  // Always use display order for preview, regardless of sort settings
  const orderList = getSortedMutationOrder("display");
  
  const selectedSet = new Set([...(temperature ? [temperature] : []), ...envMutations]);
  const orderedSelected = orderList.filter(n => selectedSet.has(n));
  
  const allMutations = [];
  if (growth !== "none") allMutations.push(growth === "golden" ? "Golden" : "Rainbow");
  allMutations.push(...orderedSelected);
  
  return allMutations;
}

function isShowUnreleased() {
  const el = document.getElementById('toggleUnreleased');
  return el ? !!el.checked : !!showUnreleasedDefault;
}

// --- Combo Processing Engine ---
// Unified combo processor that handles all mutation interactions
const ComboProcessor = {
  // Apply combos to a mutation set
  applyCombos(mutations, options = {}) {
    const { respectLastClicked = false, lastClicked = null, skipResults = new Set() } = options;
    
    // Apply exclusivity rules from priority groups
    COMBO_RULES.exclusiveGroups.forEach(group => {
      const present = group.filter(n => mutations.has(n));
      if (present.length > 1) {
        const keep = (respectLastClicked && lastClicked && present.includes(lastClicked)) ? lastClicked : present[0];
        group.forEach(n => { if (n !== keep) mutations.delete(n); });
      }
    });
    
    // Apply combination rules
    COMBO_RULES.combinations.forEach(combo => {
      if (skipResults.has(combo.result)) return;
      
      // If combo result is already present, remove conflicting components
      if (mutations.has(combo.result)) {
        combo.removes.forEach(n => mutations.delete(n));
        return;
      }
      
      // Check if all requirements are met
      const requirementsMet = combo.requires.every(reqGroup => 
        reqGroup.some(req => mutations.has(req))
      );
      
      if (requirementsMet) {
        combo.removes.forEach(n => mutations.delete(n));
        mutations.add(combo.result);
      }
    });
    
    return mutations;
  },
  
  // Get reverse combo rules for user interaction
  getReverseRules() {
    return COMBO_RULES.combinations.map(combo => ({
      result: combo.result,
      bases: combo.removes
    }));
  }
};

// --- Core Calculation Functions ---
// The main crop value calculation that matches in-game logic
function calculateCropValue({ baseValue, baseWeight, weightKg, growth, stacksAdditive, minWeight, numberOfMutations = 0 }) {
  const safeBaseWeight = Math.max(1e-9, Number(baseWeight) || 1);
  const minRatio = Math.max(0, Number(minWeight) ? (Number(minWeight) / safeBaseWeight) : CONFIG.CALCULATION.MIN_WEIGHT_RATIO);
  const ratio = Math.max((Number(weightKg) || 0) / safeBaseWeight, minRatio);
  const g = CONFIG.GROWTH_MULTIPLIERS[growth] ?? 1;
  const e = 1 + (Number(stacksAdditive) || 0) - (Number(numberOfMutations) || 0);
  const perCrop = (Number(baseValue) || 0) * g * e * ratio * ratio;
  return perCrop; // rounding happens after friend boost & quantity
}

// Plant management and calculation utilities
const PlantManager = {
  // Helper function to derive constants for plants
  getPlantConstants(plant) {
    const baseValue = Number(plant.baseValue) || 0;
    const baseWeight = Number(plant.baseWeight) || 1;
    const minWeight = baseWeight * CONFIG.CALCULATION.PRICE_FLOOR_RATIO;
    return { baseValue, baseWeight, minWeight };
  },

  // Set weight to price-floor weight for selected plant
  setDefaultWeight(plant) {
    const weightInput = Utils.getElement("weight");
    if (weightInput && plant) {
      const { baseWeight } = this.getPlantConstants(plant);
      const priceFloorWeight = baseWeight * CONFIG.CALCULATION.PRICE_FLOOR_RATIO;
      weightInput.value = priceFloorWeight.toFixed(2);
    }
  },

  // Calculate weight needed to achieve target value
  calculateWeightFromValue(targetValue, plantData, settings = {}) {
    if (!plantData) return 0;
    if (targetValue <= 0) return 0;

    // Get plant constants
    const { baseValue, baseWeight, minWeight } = this.getPlantConstants(plantData);

    // Process settings to match site calculator format
    const { quantity, friendBoost, growthMutation, mutations } = settings;
    
    // Split mutations into temperature and environmental
    const temperature = TEMPS.find(t => mutations.includes(t)) || null;
    const envMutations = mutations.filter(name => !TEMPS.includes(name));

    // Convert growth mutation to the format expected by calculation
    const growth = growthMutation || 'none';

    // Rebuild additive stacks and growth
    const growthMulti = CONFIG.GROWTH_MULTIPLIERS[growth] || 1;
    const tempStack = temperature ? (Number(stacksTemp[temperature]) || 0) : 0;
    const otherStacks = envMutations.reduce((sum, name) => sum + (Number(stacksEnv[name]) || 0), 0);
    const numberOfMutations = (temperature ? 1 : 0) + envMutations.length;
    const e = 1 + tempStack + otherStacks - numberOfMutations;
    const friendMulti = 1 + (Number(friendBoost) / 100);
    const qty = Math.max(1, Math.floor(Number(quantity) || 1));
    
    const perCropTarget = Math.max(1, targetValue / (friendMulti * qty));
    const baseFactor = baseValue * growthMulti * e;
    if (baseFactor <= 0) return 0;

    // perCrop = baseValue * g * e * (ratio^2)
    // ratio^2 = perCrop / (baseValue * g * e)
    const ratioSquared = perCropTarget / baseFactor;
    const ratio = Math.max(Math.sqrt(Math.max(0, ratioSquared)), CONFIG.CALCULATION.MIN_WEIGHT_RATIO);
    const weight = ratio * baseWeight;
    return Math.max(weight, minWeight);
  }
};

// --- Growth mutation visuals (Golden/Rainbow) ---
let rainbowHue = 0; // [0,1) shared across all animations
const rainbowAnimations = new Map(); // track multiple animations

function hsvToRgb(h, s, v) {
  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);
  let r = 0, g = 0, b = 0;
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break;
    case 1: r = q; g = v; b = p; break;
    case 2: r = p; g = v; b = t; break;
    case 3: r = p; g = q; b = v; break;
    case 4: r = t; g = p; b = v; break;
    case 5: r = v; g = p; b = q; break;
  }
  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function createRainbowAnimation(targetEl, animationId) {
  // Stop existing animation for this ID
  if (rainbowAnimations.has(animationId)) {
    cancelAnimationFrame(rainbowAnimations.get(animationId));
  }
  
  let lastTs = performance.now();
  function tick(now) {
    const dt = Math.max(0, (now - lastTs) / 1000);
    lastTs = now;
    rainbowHue = (rainbowHue + dt * CONFIG.ANIMATION.RAINBOW_CYCLE_SPEED) % 1;
    const [r, g, b] = hsvToRgb(rainbowHue, 1, 1);
    targetEl.style.color = `rgb(${r}, ${g}, ${b})`;
    const frameId = requestAnimationFrame(tick);
    rainbowAnimations.set(animationId, frameId);
  }
  const frameId = requestAnimationFrame(tick);
  rainbowAnimations.set(animationId, frameId);
}

function stopRainbowAnimation(animationId) {
  if (rainbowAnimations.has(animationId)) {
    cancelAnimationFrame(rainbowAnimations.get(animationId));
    rainbowAnimations.delete(animationId);
  }
}



function applyGrowthVisuals() {
  const growthSelect = document.getElementById("growth");
  const value = growthSelect ? growthSelect.value : "none";
  const buttons = document.querySelectorAll(".growth-mutations .mutation-button");
  // Reset all button text colors and any animation
  stopRainbowAnimation('growth-button');
  buttons.forEach(btn => { btn.style.color = ""; });
  const activeBtn = Array.from(buttons).find(b => b.classList.contains("active"));
  if (!activeBtn) return;
  if (value === "golden" || value === "gold") {
    // Static Gold
    activeBtn.style.color = CONFIG.ANIMATION.GOLDEN_COLOR;
  } else if (value === "rainbow") {
    // Animated Rainbow
    createRainbowAnimation(activeBtn, 'growth-button');
  }
}



function updateMaxToggleVisual() {
  const toggle = document.getElementById("maxMutation");
  if (!toggle) return;
  const current = new Set(getSelectedMutations());
  const expected = computeMaxMutationSet();
  let equal = current.size === expected.size;
  if (equal) {
    for (const n of expected) { if (!current.has(n)) { equal = false; break; } }
  }
  toggle.checked = !!equal;
}



// ================================================================
// USER INTERFACE AND INTERACTION LOGIC
// ================================================================
// UI-related functions, event handlers, and display logic

// --- UI Helper Functions ---
function getRgbStringForMutation(name) {
  const rgb = mutationColors?.[name];
  if (!rgb || !Array.isArray(rgb) || rgb.length !== 3) return null;
  const [r, g, b] = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}

function renderColoredMutationToken(name) {
  const color = getRgbStringForMutation(name);
  const displayName = name;
  if (color) {
    return `<span class="overlay-mutation" data-name="${displayName}" style="color: ${color}">${displayName}</span>`;
  }
  return `<span class="overlay-mutation" data-name="${displayName}">${displayName}</span>`;
}

// Tracks the last mutation the user actively clicked to guide exclusivity resolution
let lastMutationClicked = null;
let suppressLastClicked = false;

// Legacy constants (moved to CONFIG)
// const CAP_AT_1E12 = CONFIG.CALCULATION.CAP_AT_1E12; // Already defined above

// Runtime plant list (updated from plants.txt if available)
let runtimePlants = plants;

function getPlants() {
  return runtimePlants;
}



// Helper function to read calculation inputs from UI
function readCalculationInputs() {
  // Required UI bindings
  const weightInput = document.getElementById('weight');
  const weight = weightInput ? Number(weightInput.value) || 0 : 0;
  
  const quantity = Math.max(1, parseInt(document.getElementById('quantity')?.value, 10) || 1);
  const friendBoost = Number(document.getElementById('friendBoost')?.value) || 0;
  const growth = (document.getElementById('growth')?.value || 'none'); // 'none'|'golden'|'rainbow'

  // Selected mutations from checkboxes
  const selectedMutations = mutationOrder.filter(name => {
    const cb = document.getElementById(`mut-${name}`);
    return cb && cb.checked;
  });

  // Pick at most one temperature (the one currently toggled in UI)
  const temperature = TEMPS.find(t => selectedMutations.includes(t)) || null;

  // All other (non-temperature) mutations
  const envMutations = selectedMutations.filter(name => !TEMPS.includes(name));

  return { weight, quantity, friendBoost, growth, temperature, envMutations };
}

function buildMutationItems(orderArray) {
  const container = Utils.getElement("mutations");
  if (!container) return;
  
  container.innerHTML = "";
  const showUnreleased = isShowUnreleased();

  orderArray.forEach((name) => {
    if (unreleasedFlags?.[name] && !showUnreleased) return;
    
    const label = document.createElement("label");
    Object.assign(label, {
      className: "mutation-item",
      tabIndex: 0
    });
    label.dataset.name = name;
    const multiplier = mutationMultipliers[name] || 1;
    
    label.innerHTML = `
      <input type="checkbox" id="mut-${name}" value="${name}">
      <span class="mut-name">${name}</span>
      <span class="mut-multi"> (×${multiplier})</span>
    `;

    const checkbox = label.querySelector('input');
    const toggle = () => {
      if (!suppressLastClicked) lastMutationClicked = name;
      checkbox.checked = !checkbox.checked;
      enforceMutationCombos();
      refreshMutationSelectionClasses();
          updateCalculation();
      updateMaxToggleVisual();
    };

    label.addEventListener("click", (e) => e.target.tagName !== 'INPUT' && (e.preventDefault(), toggle()));
    label.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), toggle()));
    checkbox.addEventListener("change", () => { enforceMutationCombos(); refreshMutationSelectionClasses(); updateCalculation(); updateMaxToggleVisual(); });
    
    container.appendChild(label);
  });
}

function getSortedMutationOrder(sortMode) {
  if (sortMode === "alpha") {
    return mutationOrder.slice().sort((a, b) => a.localeCompare(b));
  }
  if (sortMode === "multiplier") {
    // Ascending by multiplier: small -> big
    return mutationOrder.slice().sort((a, b) => (mutationMultipliers[a] || 0) - (mutationMultipliers[b] || 0) || a.localeCompare(b));
  }
  return mutationOrder.slice(); // display order (default)
}

let mutationSortReversed = false;

// Enforce mutation combos and restrictions
function enforceMutationCombos() {
  // Get current selections
  const selected = new Set();
  [...mutationOrder, ...TEMPS].forEach((name) => {
    const cb = document.getElementById(`mut-${name}`);
    if (cb && cb.checked) selected.add(name);
  });

  // Handle reverse combos (user clicked base component of existing combo)
  const skipResults = new Set();
  if (!suppressLastClicked && lastMutationClicked) {
    ComboProcessor.getReverseRules().forEach(rule => {
      if (selected.has(rule.result) && rule.bases.includes(lastMutationClicked)) {
        selected.delete(rule.result);
        skipResults.add(rule.result);
      }
    });
  }

  // Apply combo system
  ComboProcessor.applyCombos(selected, {
    respectLastClicked: !suppressLastClicked,
    lastClicked: lastMutationClicked,
    skipResults
  });

  // Write back to DOM
  [...mutationOrder, ...TEMPS].forEach((name) => {
    const cb = document.getElementById(`mut-${name}`);
    if (cb) cb.checked = selected.has(name);
  });

  refreshMutationSelectionClasses();
  updateMaxToggleVisual();
}

function refreshMutationSelectionClasses() {
  mutationOrder.forEach((name) => {
    const label = document.querySelector(`label.mutation-item[data-name="${name}"]`);
    const cb = document.getElementById(`mut-${name}`);
    if (label && cb) {
      label.classList.toggle("selected", cb.checked);
      const span = label.querySelector('span.mut-name');
      if (span) {
        if (cb.checked) {
          const rgb = getRgbStringForMutation(name);
          span.style.color = rgb || '';
        } else {
          span.style.color = '';
        }
      }
    }
  });
}

function initMutations() {
  // Temperature mutations are now part of the main list; no separate UI
  
  // Initialize growth mutation buttons
  const growthButtons = document.querySelectorAll(".growth-mutations .mutation-button");
  growthButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      growthButtons.forEach(btn => btn.classList.remove("active"));
      
      // Add active class to clicked button
      button.classList.add("active");
      
      // Update the hidden select
      const growthSelect = document.getElementById("growth");
      if (growthSelect) {
        growthSelect.value = button.dataset.value;
        
        // Trigger calculation update
        const event = new Event("change");
        growthSelect.dispatchEvent(event);
        applyGrowthVisuals();
      }
    });
  });
  
  // Set default active growth button
  document.getElementById("growth-none").classList.add("active");
  applyGrowthVisuals();
  
  // Build initial list in display order
  buildMutationItems(getSortedMutationOrder("display"));

  // Sort dropdown behavior
  const sortSelect = document.getElementById("mutationSort");
  const unreleasedToggleEl = document.getElementById("toggleUnreleased");
  if (sortSelect) {
    sortSelect.addEventListener("change", () => {
      MutationManager.rebuildMutationList(sortSelect.value);
    });
  }
  if (unreleasedToggleEl) {
    unreleasedToggleEl.checked = !!showUnreleasedDefault;
    unreleasedToggleEl.addEventListener("change", () => {
      const sortMode = document.getElementById("mutationSort")?.value || "display";
      MutationManager.rebuildMutationList(sortMode);
    });
  }
  const sortToggle = document.getElementById("mutationSortToggle");
  if (sortToggle) {
    sortToggle.addEventListener("click", () => {
      mutationSortReversed = !mutationSortReversed;
      const sortMode = document.getElementById("mutationSort")?.value || "display";
      MutationManager.rebuildMutationList(sortMode);
    });
  }
  
  // No extra hidden checkboxes needed; temperatures use the same pattern
}

let selectedPlant = null;

function initCrops() {
  const listEl = document.getElementById("cropList");
  const searchEl = document.getElementById("cropSearch");
  let selected = null;

  function render(filter = "") {
    listEl.innerHTML = "";
    const lowerFilter = filter.trim().toLowerCase();
    const filtered = getPlants().filter((plant) => 
      plant.name.toLowerCase().includes(lowerFilter) || 
      plant.tier.toLowerCase().includes(lowerFilter) ||
      (plant.shop && plant.shop.toLowerCase().includes(lowerFilter))
    );
    
    filtered.forEach((plant) => {
      const div = document.createElement("div");
      div.className = "crop-item";
      div.dataset.plantId = plant.id;
      // Expose tier as data attribute for CSS targeting
      if (plant.tier) {
        div.dataset.tier = String(plant.tier).toLowerCase();
      }
      
      const span = document.createElement("span");
      span.textContent = plant.name;
      div.appendChild(span);
      
      // Add tier indicator
      const tierSpan = document.createElement("span");
      tierSpan.className = "tier-indicator";
      tierSpan.textContent = plant.tier;
      div.appendChild(tierSpan);
      
      div.addEventListener("click", () => {
        if (selected) selected.classList.remove("selected");
        div.classList.add("selected");
        selected = div;
        
        // Store selected plant data
        selectedPlant = plant;
        
        // Set weight to price-floor weight
        PlantManager.setDefaultWeight(plant);
        
        // Update calculation immediately when plant is selected
        updateCalculation();
      });
      
      listEl.appendChild(div);
    });
  }
  
  render();
  searchEl.addEventListener("input", (e) => {
    render(e.target.value);
  });
}

// --- Utility Functions ---
const Utils = {
  // Format numbers with commas and scale indicators
  formatNumber(num) {
  if (!Number.isFinite(num)) return "0";
  return num.toLocaleString('en-US');
  },

  formatWithScale(num) {
    if (!Number.isFinite(num)) return "0";
    
    if (num >= 1e12) return `≈${(num/1e12).toFixed(3)} Trillion`;
    if (num >= 1e9) return `≈${(num/1e9).toFixed(3)} Billion`;
    if (num >= 1e6) return `≈${(num/1e6).toFixed(3)} Million`;
    if (num >= 1e3) return `≈${(num/1e3).toFixed(3)} Thousand`;
    return num.toFixed(0);
  },

  // Get element safely with null check
  getElement(id) {
    return document.getElementById(id);
  },

  // Set element text content safely
  setElementText(id, text) {
    const el = this.getElement(id);
    if (el) el.textContent = text;
  },

  // Set element HTML safely
  setElementHTML(id, html) {
    const el = this.getElement(id);
    if (el) el.innerHTML = html;
  }
};

// --- Mutation Management ---
const MutationManager = {
  // Add event listeners to mutation checkboxes
  addMutationEventListeners() {
    mutationOrder.forEach((name) => {
      const checkbox = Utils.getElement(`mut-${name}`);
      if (checkbox) {
        checkbox.addEventListener("change", () => {
          enforceMutationCombos();
          updateCalculation();
          updateMaxToggleVisual();
        });
      }
    });
  },

  // Get currently selected mutations
  getSelectedMutations() {
    const selected = [];
    mutationOrder.forEach(name => {
      const checkbox = Utils.getElement(`mut-${name}`);
      if (checkbox && checkbox.checked) {
        selected.push(name);
      }
    });
    return selected;
  },

  // Apply mutations from array
  applyMutations(mutations, clearFirst = false) {
    if (clearFirst) {
      this.clearAllMutations();
    }
    
    mutations.forEach(name => {
      const checkbox = Utils.getElement(`mut-${name}`);
      if (checkbox) checkbox.checked = true;
    });
    
    enforceMutationCombos();
    refreshMutationSelectionClasses();
  },

  // Clear all mutations
  clearAllMutations() {
    mutationOrder.forEach((name) => {
      const checkbox = Utils.getElement(`mut-${name}`);
      if (checkbox) checkbox.checked = false;
    });
    refreshMutationSelectionClasses();
  },

  // Rebuild mutation list with preserved selections
  rebuildMutationList(sortMode = "display", preserveSelections = true) {
    const selected = preserveSelections ? new Set(this.getSelectedMutations()) : new Set();
    let list = getSortedMutationOrder(sortMode);
    if (mutationSortReversed) list = list.reverse();
    
    buildMutationItems(list);
    
    // Restore selections if preserving
    if (preserveSelections) {
      mutationOrder.forEach((name) => {
        const cb = Utils.getElement(`mut-${name}`);
        if (cb) cb.checked = selected.has(name);
      });
    }
    
    this.addMutationEventListeners();
    enforceMutationCombos();
    updateCalculation();
  },

  // Apply max mutations (highest value mutations)
  applyMaxMutations() {
    suppressLastClicked = true;
    this.clearAllMutations();
    
    // Set growth to rainbow (highest value)
    Utils.getElement("growth").value = "rainbow";
    
    // Update growth mutation buttons
    document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
      btn.classList.remove("active");
      if (btn.dataset.value === "rainbow") {
        btn.classList.add("active");
      }
    });
    
    // Get the optimal mutation set from the same function used by the visual toggle
    const optimalMutations = computeMaxMutationSet();
    
    // Apply all mutations in the optimal set
    optimalMutations.forEach(name => {
      const checkbox = Utils.getElement(`mut-${name}`);
      if (checkbox) checkbox.checked = true;
    });
    
    refreshMutationSelectionClasses();
    suppressLastClicked = false;
    updateMaxToggleVisual();
  }
};

// Initialize new UI controls
function initNewControls() {
  // Friend boost slider
  const friendBoostSlider = document.getElementById("friendBoost");
  const sliderValue = document.querySelector(".slider-value");
  
  if (friendBoostSlider && sliderValue) {
    friendBoostSlider.addEventListener("input", (e) => {
      sliderValue.textContent = `${e.target.value} %`;
      updateCalculation();
    });
  }
  
  // Max mutation toggle
  const maxMutationToggle = document.getElementById("maxMutation");
  if (maxMutationToggle) {
    maxMutationToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        applyMaxMutations();
      } else {
        clearAllMutations();
      }
      updateCalculation();
      updateMaxToggleVisual();
      applyGrowthVisuals();
    });
  }
  // When unreleased toggle changes, the max-set equivalence must be recomputed
  const unreleasedToggleEl2 = document.getElementById("toggleUnreleased");
  if (unreleasedToggleEl2) {
    unreleasedToggleEl2.addEventListener("change", () => {
      updateMaxToggleVisual();
    });
  }
  
  // Reset button
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetAllControls();
      refreshMutationSelectionClasses();
    });
  }
  
  // Advanced toggle functionality removed - mutations are always visible now
  
  // Weight and quantity inputs - auto-calculate on change
  const weightInput = document.getElementById("weight");
  const quantityInput = document.getElementById("quantity");
  
  if (weightInput) {
    weightInput.addEventListener("input", updateCalculation);
  }
  if (quantityInput) {
    quantityInput.addEventListener("input", updateCalculation);
  }
}

// Note: calculateCoreValue was removed as dead code - the actual calculation uses calculateCropValue


// Helper to update display when no plant selected
function updateEmptyDisplay() {
  ["totalPrice", "totalPriceThousand", "mutationMultiplier", "displayWeight", "activeMutationsList", "hoverOverlayText"].forEach(id => Utils.setElementText(id, id === "mutationMultiplier" ? "x1" : "0"));
  Utils.setElementText("selectedPlantName", "Select a plant");
  Utils.setElementText("plantWorth", "0 Sheckles");
}

// Helper to get active mutations list


function updateCalculation() {
  if (!selectedPlant) return updateEmptyDisplay();
  
  const { baseValue, baseWeight, minWeight } = PlantManager.getPlantConstants(selectedPlant);
  const { weight, quantity, friendBoost, growth, temperature, envMutations } = readCalculationInputs();

  // Calculate stacks and value
  const tempStack = temperature ? (stacksTemp[temperature] || 0) : 0;
  const otherStacks = envMutations.reduce((sum, name) => sum + (stacksEnv[name] || 0), 0);
  const stacksAdditive = tempStack + otherStacks;

  // Count total number of mutations (temperature + environmental)
  const numberOfMutations = (temperature ? 1 : 0) + envMutations.length;

  let perCrop = calculateCropValue({ baseValue, baseWeight, weightKg: Number(weight), growth, stacksAdditive, minWeight, numberOfMutations });
  const friendMulti = 1 + (friendBoost / 100);
  let totalValue = Math.round(perCrop * friendMulti * Math.max(1, quantity || 1));
  if (CAP_AT_1E12) totalValue = Math.min(totalValue, 1e12);
  
  // Update displays
  Utils.setElementText("totalPrice", Utils.formatNumber(totalValue));
  Utils.setElementText("totalPriceThousand", Utils.formatWithScale(totalValue));
  Utils.setElementText("selectedPlantName", selectedPlant.name);
  Utils.setElementText("displayWeight", weight || "0");
  Utils.setElementText("plantWorth", `${Utils.formatWithScale(totalValue)} Sheckles`);
  
  const totalMultiplier = (CONFIG.GROWTH_MULTIPLIERS[growth] ?? 1) * (1 + stacksAdditive - numberOfMutations) * friendMulti;
  Utils.setElementText("mutationMultiplier", `x${Utils.formatWithScale(totalMultiplier)}`);
  
  // Update mutations display (both preview and overlay use display order)
  const previewMutations = getActiveMutationsListForPreview(growth, temperature, envMutations);
  
  Utils.setElementText("activeMutationsList", previewMutations.length ? previewMutations.join(" + ") : "None");

  // Update overlay (also uses display order)
  const hoverOverlayEl = Utils.getElement("hoverOverlayText");
  if (hoverOverlayEl) {
    const mutationHtml = previewMutations.length ? previewMutations.map(renderColoredMutationToken).join(" <span class=\"overlay-sep\">•</span> ") : "None";
    hoverOverlayEl.innerHTML = `<div class="overlay-plant-name">${selectedPlant.name}</div><div class="overlay-mutations">${mutationHtml}</div><div class="overlay-value">${Utils.formatWithScale(totalValue)}¢</div>`;
    
    // Apply growth visuals
    const growthToken = hoverOverlayEl.querySelector('.overlay-mutation[data-name="Golden"], .overlay-mutation[data-name="Rainbow"]');
    stopRainbowAnimation('overlay-token');
    if (growthToken) {
      if (growth === 'golden' || growth === 'gold') growthToken.style.color = CONFIG.ANIMATION.GOLDEN_COLOR;
      else if (growth === 'rainbow') createRainbowAnimation(growthToken, 'overlay-token');
    }
  }
  
  // Update plant icon
  const plantIconEl = document.querySelector(".plant-icon");
  if (plantIconEl) plantIconEl.textContent = "🌱";
  
  saveUserData();
  updateMaxToggleVisual();
}

// Legacy alias for compatibility
const applyMaxMutations = () => MutationManager.applyMaxMutations();

function clearAllMutations() {
  // Clear all mutation checkboxes
  MutationManager.clearAllMutations();
  
  // Reset growth select
  Utils.getElement("growth").value = "none";
  
  // Reset growth mutation buttons
  document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
    btn.classList.remove("active");
  });
  Utils.getElement("growth-none").classList.add("active");
  
  // Reset temperature mutation buttons
  document.querySelectorAll("#temperature-mutations .mutation-button").forEach(btn => {
    btn.classList.remove("active");
  });

  // Also clear any growth coloring/animation
  applyGrowthVisuals();
}

function resetAllControls() {
  // Reset weight to the selected plant's minimum
  if (selectedPlant) {
    PlantManager.setDefaultWeight(selectedPlant);
  }
  document.getElementById("quantity").value = "1";
  document.getElementById("friendBoost").value = "0";
  document.querySelector(".slider-value").textContent = "0 %";
  document.getElementById("maxMutation").checked = false;
  clearAllMutations();
  // Reset growth select and buttons
  const growthSelect = document.getElementById("growth");
  if (growthSelect) growthSelect.value = "none";
  document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
    btn.classList.remove("active");
  });
  const noneBtn = document.getElementById("growth-none");
  if (noneBtn) noneBtn.classList.add("active");
  applyGrowthVisuals();
  updateCalculation();
  
  // Clear localStorage data
  localStorage.removeItem("gardenCalcData");
}

// Legacy alias for compatibility
const formatNumber = Utils.formatNumber;
const formatThousands = Utils.formatWithScale;

// Save current session data to localStorage
function saveUserData() {
  // Don't save if nothing is selected
  if (!selectedPlant) return;
  
  const data = {
    selectedPlantId: selectedPlant.id,
    weight: document.getElementById("weight").value,
    quantity: document.getElementById("quantity").value,
    friendBoost: document.getElementById("friendBoost").value,
    selectedMutations: getSelectedMutations(),
    growthMutation: document.getElementById("growth").value,
    maxMutation: document.getElementById("maxMutation").checked
  };
  
  localStorage.setItem("gardenCalcData", JSON.stringify(data));
}

// Save system for multiple plant configurations
let savedPlants = [];

// Load saved plants from localStorage
function loadSavedPlants() {
  const savedData = localStorage.getItem("gardenCalcSavedPlants");
  if (savedData) {
    try {
      savedPlants = JSON.parse(savedData);
      renderSavedPlants();
    } catch (e) {
      console.error("Error loading saved plants:", e);
      savedPlants = [];
      localStorage.removeItem("gardenCalcSavedPlants");
    }
  }
}

// Save current configuration as a named setup
function saveCurrentSetup(name, existingSaveId = null) {
  if (!selectedPlant) {
    alert("Please select a plant first");
    return;
  }
  
  // Create a save object with all current settings
  const saveData = {
    id: existingSaveId || Date.now().toString(), // Use existing ID if overwriting
    name: name || `${selectedPlant.name} Setup`,
    date: new Date().toISOString(),
    plant: {
      id: selectedPlant.id,
      name: selectedPlant.name,
      tier: selectedPlant.tier
    },
    settings: {
      weight: parseFloat(document.getElementById("weight").value) || 0,
      quantity: parseInt(document.getElementById("quantity").value, 10) || 1,
      friendBoost: parseInt(document.getElementById("friendBoost").value, 10) || 0,
      growthMutation: document.getElementById("growth").value,
      maxMutation: document.getElementById("maxMutation").checked,
      mutations: getSelectedMutations()
    }
  };
  
  if (existingSaveId) {
    // Find and replace existing save
    const index = savedPlants.findIndex(s => s.id === existingSaveId);
    if (index !== -1) {
      savedPlants[index] = saveData;
    } else {
      // If not found (shouldn't happen), just add as new
      savedPlants.push(saveData);
    }
  } else {
    // Add as new save
    savedPlants.push(saveData);
  }
  
  // Save to localStorage
  localStorage.setItem("gardenCalcSavedPlants", JSON.stringify(savedPlants));
  
  // Update the UI
  renderSavedPlants();
  
  // Clear the input field
  document.getElementById("saveNameInput").value = "";
}

// Load data from localStorage
function loadUserData() {
  const savedData = localStorage.getItem("gardenCalcData");
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      
      // First restore mutations and other controls
      if (data.growthMutation) {
        document.getElementById("growth").value = data.growthMutation;
        
        // Update growth mutation buttons
        document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
          btn.classList.remove("active");
          if (btn.dataset.value === data.growthMutation) {
            btn.classList.add("active");
          }
        });
        applyGrowthVisuals();
      }
      
      // Restore mutations
      if (data.selectedMutations && Array.isArray(data.selectedMutations)) {
        // Set all requested mutations
        data.selectedMutations.forEach(name => {
          const checkbox = document.getElementById(`mut-${name}`);
          if (checkbox) checkbox.checked = true;
        });
        // Enforce exclusivity/combos and sync UI states including highlight/colors
        enforceMutationCombos();
      }
      
      // Restore max mutation toggle
      if (data.maxMutation) {
        document.getElementById("maxMutation").checked = data.maxMutation;
      }
      
      if (data.friendBoost) {
        document.getElementById("friendBoost").value = data.friendBoost;
        document.querySelector(".slider-value").textContent = `${data.friendBoost} %`;
      }
      
      if (data.quantity) document.getElementById("quantity").value = data.quantity;
      
      // Restore plant selection (this will set the default 70% weight)
      if (data.selectedPlantId) {
        const plantElement = document.querySelector(`.crop-item[data-plant-id="${data.selectedPlantId}"]`);
        if (plantElement) plantElement.click();
        
        // If we have a saved weight that's different from the default, restore it after plant selection
        if (data.weight) {
          // Small delay to ensure the plant selection has completed
          setTimeout(() => {
            document.getElementById("weight").value = data.weight;
            updateCalculation();
          }, 50);
        }
      }
    } catch (e) {
      console.error("Error loading saved data:", e);
      localStorage.removeItem("gardenCalcData");
    }
  }
}

// Legacy alias for compatibility
const getSelectedMutations = () => MutationManager.getSelectedMutations();

// Render saved plants in the sidebar
function renderSavedPlants() {
  const container = document.getElementById("savedPlantsList");
  if (!container) return;
  
  // Clear container
  container.innerHTML = "";
  
  if (savedPlants.length === 0) {
    const emptyState = document.createElement("div");
    emptyState.className = "empty-state";
    emptyState.textContent = "No saved plants yet";
    container.appendChild(emptyState);
    return;
  }
  
  // Get template
  const template = document.getElementById("savedPlantTemplate");
  if (!template) return;
  
  // Sort by date (newest first)
  const sortedSaves = [...savedPlants].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );
  
  // Create items for each saved plant
  sortedSaves.forEach(save => {
    // Clone template
    const clone = document.importNode(template.content, true);
    
    // Set data
    clone.querySelector(".saved-plant-name").textContent = save.name;
    clone.querySelector(".saved-plant-icon").textContent = "🌱";
    
    // Set info text
    const mutations = save.settings.mutations.length;
    const mutationText = mutations > 0 ? `${mutations} mutations` : "No mutations";
    const weightNumDisplay = Number(save.settings.weight) || 0;
    const weightDisplayStr = weightNumDisplay.toFixed(2);
    clone.querySelector(".saved-plant-info").textContent = 
      `${save.plant.name} (${weightDisplayStr} kg × ${save.settings.quantity})`;
    
    // Set value - recalc using in-game logic
    const plantData = getPlants().find(p => p.id === save.plant.id);
    if (plantData) {
      const { baseValue, baseWeight } = PlantManager.getPlantConstants(plantData);
      const growth = save.settings.growthMutation || "none";
      const userMutations = Array.isArray(save.settings.mutations) ? save.settings.mutations : [];
      const temperature = TEMPS.find(t => userMutations.includes(t)) || null;
      const envMutations = userMutations.filter(name => !TEMPS.includes(name));
      const tempStack = temperature ? (Number(stacksTemp[temperature]) || 0) : 0;
      const otherStacks = envMutations.reduce((sum, name) => sum + (Number(stacksEnv[name]) || 0), 0);
      const stacksAdditive = tempStack + otherStacks;
      const numberOfMutations = (temperature ? 1 : 0) + envMutations.length;

      let perCrop = calculateCropValue({
        baseValue,
        baseWeight,
        weightKg: Number(save.settings.weight) || 0,
        growth,
        stacksAdditive,
        minWeight: baseWeight * CONFIG.CALCULATION.PRICE_FLOOR_RATIO,
        numberOfMutations
      });
      let value = perCrop * (1 + (Number(save.settings.friendBoost) || 0) / 100) * Math.max(1, Number(save.settings.quantity) || 1);
      value = Math.round(value);
      if (CAP_AT_1E12) value = Math.min(value, 1e12);

    clone.querySelector(".saved-plant-value").textContent = 
        `${formatNumber(value)} (${formatThousands(value)})`;
    } else {
      clone.querySelector(".saved-plant-value").textContent = "0";
    }
    
    // Set tier color
    const item = clone.querySelector(".saved-plant-item");
    if (save.plant.tier) {
      item.dataset.tier = save.plant.tier.toLowerCase();
    }
    
    // Set data-id attribute for easy reference
    item.dataset.saveId = save.id;
    
    // Set up load button
    const loadBtn = clone.querySelector(".load-btn");
    loadBtn.addEventListener("click", () => loadSavedSetup(save.id));
    
    // Set up delete button
    const deleteBtn = clone.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => deleteSavedSetup(save.id));
    
    // Set up update/overwrite button
    const updateBtn = clone.querySelector(".update-btn");
    if (updateBtn) {
      updateBtn.addEventListener("click", () => {
        const name = save.name; // Keep the same name
        saveCurrentSetup(name, save.id);
      });
    }
    
    // Add to container
    container.appendChild(clone);
  });
}

// Legacy alias for compatibility
const calculateWeightFromValue = (targetValue, plantData, settings) => 
  PlantManager.calculateWeightFromValue(targetValue, plantData, settings);

// Load a saved setup
function loadSavedSetup(id) {
  const save = savedPlants.find(s => s.id === id);
  if (!save) return;
  
  // Find and click the plant
  const plantElement = document.querySelector(`.crop-item[data-plant-id="${save.plant.id}"]`);
  if (plantElement) {
    plantElement.click();
    
    // Set other values
    document.getElementById("weight").value = save.settings.weight;
    document.getElementById("quantity").value = save.settings.quantity;
    document.getElementById("friendBoost").value = save.settings.friendBoost;
    document.querySelector(".slider-value").textContent = `${save.settings.friendBoost} %`;
    document.getElementById("maxMutation").checked = save.settings.maxMutation;
    
    // Clear all mutations first
    clearAllMutations();
    
    // Set growth mutation (both select and buttons) AFTER clearing
    if (save.settings.growthMutation) {
      document.getElementById("growth").value = save.settings.growthMutation;
      document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
        btn.classList.remove("active");
        if (btn.dataset.value === save.settings.growthMutation) {
          btn.classList.add("active");
        }
      });
      applyGrowthVisuals();
    }
    
    // Set mutations
    if (save.settings.mutations && Array.isArray(save.settings.mutations)) {
      save.settings.mutations.forEach(name => {
        const checkbox = document.getElementById(`mut-${name}`);
        if (checkbox) checkbox.checked = true;
      });
      // Enforce combos and sync highlight/colors
      enforceMutationCombos();
    }
    
    // Update calculation
    updateCalculation();
  }
}

// Delete a saved setup
function deleteSavedSetup(id) {
  if (confirm("Are you sure you want to delete this saved setup?")) {
    savedPlants = savedPlants.filter(s => s.id !== id);
    localStorage.setItem("gardenCalcSavedPlants", JSON.stringify(savedPlants));
    renderSavedPlants();
  }
}

// Export all saved setups to a JSON file
function exportSavedSetups() {
  const dataStr = JSON.stringify(savedPlants, null, 2);
  const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);
  
  const exportName = "garden-calculator-saves-" + new Date().toISOString().split("T")[0] + ".json";
  
  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportName);
  linkElement.click();
}

// Import saved setups from a JSON file
function importSavedSetups(fileContent) {
  try {
    const importedData = JSON.parse(fileContent);
    
    if (Array.isArray(importedData)) {
      // Merge with existing saves, using ID as unique identifier
      const existingIds = new Set(savedPlants.map(s => s.id));
      
      importedData.forEach(save => {
        if (!existingIds.has(save.id)) {
          savedPlants.push(save);
        }
      });
      
      localStorage.setItem("gardenCalcSavedPlants", JSON.stringify(savedPlants));
      renderSavedPlants();
      
      alert(`Successfully imported ${importedData.length} saved setups.`);
    } else {
      throw new Error("Invalid import file format");
    }
  } catch (e) {
    console.error("Error importing saves:", e);
    alert("Error importing saves. Please check the file format.");
  }
}

// Initialize save system UI
function initSaveSystem() {
  // Save button
  const saveBtn = document.getElementById("saveCurrentBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => {
      const nameInput = document.getElementById("saveNameInput");
      saveCurrentSetup(nameInput.value);
    });
  }
  
  // Export button
  const exportBtn = document.getElementById("exportSavesBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportSavedSetups);
  }
  
  // Import button
  const importBtn = document.getElementById("importSavesBtn");
  const importInput = document.getElementById("importFileInput");
  
  if (importBtn && importInput) {
    importBtn.addEventListener("click", () => {
      importInput.click();
    });
    
    importInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        const file = e.target.files[0];
        const reader = new FileReader();
        
        reader.onload = (event) => {
          importSavedSetups(event.target.result);
        };
        
        reader.readAsText(file);
      }
    });
  }
  
  // Load saved plants
  loadSavedPlants();
}

// Initialize reverse calculator
function initReverseCalculator() {
  const calculateWeightBtn = document.getElementById("calculateWeightBtn");
  const targetValueInput = document.getElementById("targetValue");
  const requiredWeightEl = document.getElementById("requiredWeight");
  
  if (!calculateWeightBtn || !targetValueInput || !requiredWeightEl) return;
  
  calculateWeightBtn.addEventListener("click", function(e) {
    e.preventDefault();
    
    // Get the target value
    const targetValue = Number(targetValueInput.value);
    
    if (!selectedPlant || targetValue <= 0) {
      requiredWeightEl.textContent = "0";
      return;
    }
    
    // Get current settings from the UI using our helper function
    const { quantity, friendBoost, growth, temperature, envMutations } = readCalculationInputs();
    
    // Create settings object for the weight calculation
    const settings = {
      quantity,
      friendBoost,
      growthMutation: growth,
      mutations: temperature ? [...envMutations, temperature] : envMutations
    };
    
    // Calculate required weight (exact, no rounding)
    const requiredWeight = calculateWeightFromValue(targetValue, selectedPlant, settings);
    
    // Write exact value into the main Weight input and recalc
    const weightInput = document.getElementById("weight");
    if (weightInput) {
      // Set both value and valueAsNumber to ensure numeric inputs reflect change
      weightInput.value = String(requiredWeight);
      if ('valueAsNumber' in weightInput) {
        weightInput.valueAsNumber = Number(requiredWeight);
      }
      // Fire input/change for any listeners
      weightInput.dispatchEvent(new Event('input', { bubbles: true }));
      weightInput.dispatchEvent(new Event('change', { bubbles: true }));
      updateCalculation();
    }

    // Mirror the exact value in the reverse calc readout with full precision
    requiredWeightEl.textContent = String(requiredWeight);
  });
}



function initializeApp() {
  // Initialize core components first
  initCrops();
  initMutations();
  
  // Then initialize new controls
  initNewControls();
  
  // Initialize save system
  initSaveSystem();
  
  // Initialize reverse calculator
  initReverseCalculator();
  
  // Add direct event listener to weight input
  const weightInput = document.getElementById("weight");
  if (weightInput) {
    weightInput.addEventListener("input", function() { updateCalculation(); });
    weightInput.addEventListener("change", function() { updateCalculation(); });
  }
  
  // Add event listeners to mutation checkboxes after they're created
  setTimeout(() => {
    MutationManager.addMutationEventListeners();
    
    // Add event listener to growth select
    const growthSelect = Utils.getElement("growth");
    if (growthSelect) {
        growthSelect.addEventListener("change", () => { updateCalculation(); updateMaxToggleVisual(); applyGrowthVisuals(); });
      }
  }, 100);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeApp);
} else {
  initializeApp();
}
