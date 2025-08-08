import { mutationOrder, mutationMultipliers, mutationColors, unreleasedFlags, showUnreleasedDefault } from './data/mutations.js';
import { plants } from './data/plants.js';

// --- UI Logic --- hi

// Temperature mutations (exclusive group in UI)
const TEMPS = ["Wet", "Chilled", "Drenched", "Frozen"];

function getRgbStringForMutation(name) {
  const rgb = mutationColors?.[name];
  if (!rgb || !Array.isArray(rgb) || rgb.length !== 3) return null;
  const [r, g, b] = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}

// Tracks the last mutation the user actively clicked to guide exclusivity resolution
let lastMutationClicked = null;
let suppressLastClicked = false;

function isShowUnreleased() {
  const el = document.getElementById('toggleUnreleased');
  return el ? !!el.checked : !!showUnreleasedDefault;
}

// --- Growth mutation visuals (Golden/Rainbow) ---
let rainbowAnimId = null;
let rainbowHue = 0; // [0,1)

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

function stopRainbowAnimation() {
  if (rainbowAnimId != null) cancelAnimationFrame(rainbowAnimId);
  rainbowAnimId = null;
}

function startRainbowAnimation(targetEl) {
  stopRainbowAnimation();
  let lastTs = performance.now();
  function tick(now) {
    const dt = Math.max(0, (now - lastTs) / 1000);
    lastTs = now;
    // Match Roblox: hue += dt * 0.2 → 5s full cycle
    rainbowHue = (rainbowHue + dt * 0.2) % 1;
    const [r, g, b] = hsvToRgb(rainbowHue, 1, 1);
    targetEl.style.color = `rgb(${r}, ${g}, ${b})`;
    rainbowAnimId = requestAnimationFrame(tick);
  }
  rainbowAnimId = requestAnimationFrame(tick);
}

function applyGrowthVisuals() {
  const growthSelect = document.getElementById("growth");
  const value = growthSelect ? growthSelect.value : "none";
  const buttons = document.querySelectorAll(".growth-mutations .mutation-button");
  // Reset all button text colors and any animation
  stopRainbowAnimation();
  buttons.forEach(btn => { btn.style.color = ""; });
  const activeBtn = Array.from(buttons).find(b => b.classList.contains("active"));
  if (!activeBtn) return;
  if (value === "golden" || value === "gold") {
    // Static Gold
    activeBtn.style.color = "#FFD700";
  } else if (value === "rainbow") {
    // Animated Rainbow
    startRainbowAnimation(activeBtn);
  }
}

// Compute the expected max-mutation selection set, based on current combo rules
function computeMaxMutationSet() {
  const result = new Set();
  // Highest temperature by multiplier
  let bestTemp = null;
  let bestTempVal = -Infinity;
  for (const t of TEMPS) {
    if (unreleasedFlags?.[t] && !isShowUnreleased()) continue;
    const v = Number(mutationMultipliers[t]) || 0;
    if (v > bestTempVal) { bestTempVal = v; bestTemp = t; }
  }
  if (bestTemp) result.add(bestTemp);
  // Start with all non-temp mutations
  for (const name of mutationOrder) {
    if (unreleasedFlags?.[name] && !isShowUnreleased()) continue;
    if (!TEMPS.includes(name)) result.add(name);
  }
  // Exclusivity groups → keep first
  for (const group of EXCLUSIVE_GROUPS) {
    const present = group.filter(n => result.has(n));
    if (present.length > 1) {
      const keep = present[0];
      group.forEach(n => { if (n !== keep) result.delete(n); });
    }
  }
  // Apply combos similar to enforceMutationCombos, simplified for max snapshot
  function hasAny(arr) { return arr.some(n => result.has(n)); }
  function req(groups) { return groups.every(g => hasAny(g)); }
  // Frozen
  if (req([["Drenched", "Wet"], ["Chilled"]])) {
    result.delete("Drenched"); result.delete("Wet"); result.delete("Chilled");
    result.add("Frozen");
  }
  // Paradisal
  if (req([["Verdant"], ["Sundried"]])) {
    result.delete("Verdant"); result.delete("Sundried");
    result.add("Paradisal");
  }
  // Clay
  if (req([["Drenched", "Wet"], ["Sandy"]])) {
    result.delete("Drenched"); result.delete("Wet"); result.delete("Sandy");
    result.add("Clay");
  }
  // Ceramic
  if (req([["Clay"], ["Burnt", "Fried", "Cooked", "Molten", "Sundried", "Meteoric", "Plasma"]])) {
    result.delete("Burnt"); result.delete("Fried"); result.delete("Cooked"); result.delete("Clay");
    result.add("Ceramic");
  }
  // Tempestuous
  if (req([["Windstruck"], ["Twisted"]])) {
    result.delete("Windstruck"); result.delete("Twisted");
    result.add("Tempestuous");
  }
  // Harmonised variants
  if (req([["Chakra"], ["CorruptChakra"]])) {
    result.delete("Chakra"); result.delete("CorruptChakra");
    result.add("HarmonisedChakra");
  }
  if (req([["FoxfireChakra"], ["CorruptFoxfireChakra"]])) {
    result.delete("FoxfireChakra"); result.delete("CorruptFoxfireChakra");
    result.add("HarmonisedFoxfireChakra");
  }
  // Spaghetti
  if (req([["Pasta"], ["Sauce"], ["Meatball"]])) {
    result.delete("Pasta"); result.delete("Sauce"); result.delete("Meatball");
    result.add("Spaghetti");
  }
  // For Max set, include Sandy alongside Ceramic so Max visually includes it
  if (result.has("Ceramic")) result.add("Sandy");
  return result;
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

// Convert multipliers to "stacks" = (multiplier - 1)
const stacksEnv = Object.fromEntries(
  Object.entries(mutationMultipliers).map(([name, multi]) => [name, (Number(multi) || 1) - 1])
);

// Split out temperature stacks
const stacksTemp = Object.fromEntries(
  TEMPS.map(t => [t, stacksEnv[t] || 0])
);

// Exclusive mutation groups (only one can be active)
const EXCLUSIVE_GROUPS = [
  ["AncientAmber", "OldAmber", "Amber"],
  ["Cooked", "Burnt"],
  // Temperature exclusivity now handled in main list
  ["Wet", "Chilled", "Drenched", "Frozen"]
];

// Cap behavior flag (set true if fruitVersion ≥ 1 should cap values)
const CAP_AT_1E12 = false;

// Runtime plant list (updated from plants.txt if available)
let runtimePlants = plants;

function getPlants() {
  return runtimePlants;
}

// Real in-game crop value calculation (additive stacks, clamp to price-floor ratio)
function calculateCropValue({ baseValue, baseWeight, weightKg, growth, stacksAdditive, minWeight }) {
  const safeBaseWeight = Math.max(1e-9, Number(baseWeight) || 1);
  const minRatio = Math.max(0, Number(minWeight) ? (Number(minWeight) / safeBaseWeight) : 0.95);
  const ratio = Math.max((Number(weightKg) || 0) / safeBaseWeight, minRatio);
  const growthMap = { none: 1, normal: 1, golden: 20, gold: 20, rainbow: 50 };
  const g = growthMap[growth] ?? 1;
  const e = 1 + (Number(stacksAdditive) || 0);
  const perCrop = (Number(baseValue) || 0) * g * e * ratio * ratio;
  return perCrop; // rounding happens after friend boost & quantity
}

// Helper function to derive k and minWeight for plants
function getPlantConstants(plant) {
  const baseValue = Number(plant.baseValue) || 0;
  const baseWeight = Number(plant.baseWeight) || 1;
  // Keep legacy keys out; new model only needs baseValue/baseWeight
  const minWeight = baseWeight * 0.95;
  return { baseValue, baseWeight, minWeight };
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
  const container = document.getElementById("mutations");
  if (!container) return;
  container.innerHTML = "";

  // Read toggle for unreleased visibility from a checkbox if present
  const unreleasedToggleEl = document.getElementById("toggleUnreleased");
  const showUnreleased = unreleasedToggleEl ? unreleasedToggleEl.checked : !!showUnreleasedDefault;

  orderArray.forEach((name) => {
    if (unreleasedFlags && unreleasedFlags[name] && !showUnreleased) return;
    const id = `mut-${name}`;
    const label = document.createElement("label");
    label.className = "mutation-item";
    label.dataset.name = name;
    label.tabIndex = 0;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.value = name;

    const nameSpan = document.createElement("span");
    nameSpan.className = "mut-name";
    nameSpan.textContent = name;

    const multiSpan = document.createElement("span");
    multiSpan.className = "mut-multi";
    multiSpan.textContent = ` (×${mutationMultipliers[name] || 1})`;

    label.appendChild(checkbox);
    label.appendChild(nameSpan);
    label.appendChild(multiSpan);
    container.appendChild(label);

    // Initialize selected style from current state
    label.classList.toggle("selected", checkbox.checked);
    // Color the name only when selected
    if (checkbox.checked) {
      const rgb = getRgbStringForMutation(name);
      if (rgb) nameSpan.style.color = rgb;
    }

    const toggle = () => {
      if (!suppressLastClicked) lastMutationClicked = name;
      // Never block user toggles, even if max is on
      checkbox.checked = !checkbox.checked;
      enforceMutationCombos();
      refreshMutationSelectionClasses();
      updateCalculation();
      updateMaxToggleVisual();
    };
    label.addEventListener("click", (e) => {
      // prevent double toggling when clicking the hidden input
      if (e.target.tagName.toLowerCase() === 'input') return;
      e.preventDefault();
      toggle();
    });
    label.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    // Also react to programmatic changes
    checkbox.addEventListener("change", () => { enforceMutationCombos(); refreshMutationSelectionClasses(); updateCalculation(); updateMaxToggleVisual(); });
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

// --- Combo/Restriction Engine (from MutationCombos.lua semantics) ---
function enforceMutationCombos() {
  const selected = new Set();
  const skipResults = new Set();
  // Build current selected set (environmentals + temps)
  const allNames = [...mutationOrder, ...TEMPS];
  allNames.forEach((name) => {
    const cb = document.getElementById(`mut-${name}`);
    if (cb && cb.checked) selected.add(name);
  });

  // Helper: enforce exclusivity within a group – if more than one selected,
  // prefer the last-changed one by looking at the focused element, otherwise keep first hit
  function enforceExclusive(order) {
    const present = order.filter(n => selected.has(n));
    if (present.length <= 1) return;
    // Keep the last user-clicked mutation within this group if available,
    // otherwise keep the highest-priority present (first in order)
    const preferLast = (!suppressLastClicked && lastMutationClicked && present.includes(lastMutationClicked)) ? lastMutationClicked : null;
    let keep = preferLast || present[0];
    order.forEach(n => { if (n !== keep) selected.delete(n); });
  }

  // Helper: if all require groups satisfied (each group OR), set result and
  // clear listed overwrites
  function applyCombo(requireGroups, result, overwriteList) {
    if (skipResults.has(result)) return;
    // If result already present, clear overwrites (Lua behavior when already set)
    let already = selected.has(result);
    if (already) {
      if (Array.isArray(overwriteList)) overwriteList.forEach((n) => selected.delete(n));
      return;
    }
    let ok = true;
    for (const group of requireGroups) {
      let groupOk = false;
      for (const name of group) {
        if (selected.has(name)) { groupOk = true; break; }
      }
      if (!groupOk) { ok = false; break; }
    }
    if (ok) {
      if (Array.isArray(overwriteList)) overwriteList.forEach((n) => selected.delete(n));
      selected.add(result);
    }
  }

  // Exclusivity enforcement
  EXCLUSIVE_GROUPS.forEach(enforceExclusive);

  // If the user just clicked a base for a known combo, drop the combined result (only if they select base while combo already present)
  if (!suppressLastClicked && lastMutationClicked) {
    const reverseCombos = [
      { result: "HarmonisedFoxfireChakra", bases: ["FoxfireChakra", "CorruptFoxfireChakra"] },
      { result: "HarmonisedChakra", bases: ["Chakra", "CorruptChakra"] },
      { result: "Spaghetti", bases: ["Pasta", "Sauce", "Meatball"] },
      { result: "Frozen", bases: ["Wet", "Drenched", "Chilled"] },
      { result: "Paradisal", bases: ["Verdant", "Sundried"] },
      { result: "Clay", bases: ["Sandy", "Drenched", "Wet"] },
      { result: "Ceramic", bases: ["Clay", "Burnt", "Fried", "Cooked", "Molten", "Sundried", "Meteoric", "Plasma"] },
      { result: "Tempestuous", bases: ["Windstruck", "Twisted"] },
    ];
    for (const rule of reverseCombos) {
      if (selected.has(rule.result) && rule.bases.includes(lastMutationClicked)) {
        selected.delete(rule.result);
        skipResults.add(rule.result);
      }
    }
  }

  // Resulting combos
  applyCombo([["Drenched", "Wet"], ["Chilled"]], "Frozen", ["Drenched", "Wet", "Chilled"]);
  applyCombo([["Verdant"], ["Sundried"]], "Paradisal", ["Verdant", "Sundried"]);
  // Form Clay when requirements are present
  applyCombo([["Drenched", "Wet"], ["Sandy"]], "Clay", ["Drenched", "Wet", "Sandy"]);
  applyCombo([["Clay"], ["Burnt", "Fried", "Cooked", "Molten", "Sundried", "Meteoric", "Plasma"]], "Ceramic", ["Burnt", "Fried", "Cooked", "Clay"]);
  applyCombo([["Windstruck"], ["Twisted"]], "Tempestuous", ["Windstruck", "Twisted"]);
  // For these combos, prefer the last clicked target if in the group
  applyCombo([["Chakra"], ["CorruptChakra"]], lastMutationClicked === "HarmonisedChakra" ? "HarmonisedChakra" : "HarmonisedChakra", ["Chakra", "CorruptChakra"]);
  applyCombo([["FoxfireChakra"], ["CorruptFoxfireChakra"]], lastMutationClicked === "HarmonisedFoxfireChakra" ? "HarmonisedFoxfireChakra" : "HarmonisedFoxfireChakra", ["FoxfireChakra", "CorruptFoxfireChakra"]);
  applyCombo([["Pasta"], ["Sauce"], ["Meatball"]], lastMutationClicked === "Spaghetti" ? "Spaghetti" : "Spaghetti", ["Pasta", "Sauce", "Meatball"]);

  // Note: Do NOT auto-add Sandy when Ceramic is present; Sandy should remain user-controlled

  // Write back to DOM (checkboxes)
  allNames.forEach((name) => {
    const cb = document.getElementById(`mut-${name}`);
    if (cb) cb.checked = selected.has(name);
  });

  // Temperatures are regular checkboxes now; no separate buttons to sync
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
      // Preserve current selections
      const selected = new Set(getSelectedMutations());
      let list = getSortedMutationOrder(sortSelect.value);
      if (mutationSortReversed) list = list.reverse();
      buildMutationItems(list);
      // Re-apply previous selections and listeners
      mutationOrder.forEach((name) => {
        const cb = document.getElementById(`mut-${name}`);
        if (cb) {
          cb.checked = selected.has(name);
          cb.addEventListener("change", () => { enforceMutationCombos(); updateCalculation(); updateMaxToggleVisual(); });
        }
      });
      enforceMutationCombos();
      updateCalculation();
    });
  }
  if (unreleasedToggleEl) {
    unreleasedToggleEl.checked = !!showUnreleasedDefault;
    unreleasedToggleEl.addEventListener("change", () => {
      const selected = new Set(getSelectedMutations());
      let list = getSortedMutationOrder(document.getElementById("mutationSort")?.value || "display");
      if (mutationSortReversed) list = list.reverse();
      buildMutationItems(list);
      mutationOrder.forEach((name) => {
        const cb = document.getElementById(`mut-${name}`);
        if (cb) {
          cb.checked = selected.has(name);
          cb.addEventListener("change", () => { enforceMutationCombos(); updateCalculation(); updateMaxToggleVisual(); });
        }
      });
      enforceMutationCombos();
      updateCalculation();
    });
  }
  const sortToggle = document.getElementById("mutationSortToggle");
  if (sortToggle) {
    sortToggle.addEventListener("click", () => {
      mutationSortReversed = !mutationSortReversed;
      const sortMode = document.getElementById("mutationSort")?.value || "display";
      const selected = new Set(getSelectedMutations());
      let list = getSortedMutationOrder(sortMode);
      if (mutationSortReversed) list = list.reverse();
      buildMutationItems(list);
      mutationOrder.forEach((name) => {
        const cb = document.getElementById(`mut-${name}`);
        if (cb) {
          cb.checked = selected.has(name);
          cb.addEventListener("change", () => { enforceMutationCombos(); updateCalculation(); updateMaxToggleVisual(); });
        }
      });
      enforceMutationCombos();
      updateCalculation();
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
        
        // Set weight to price-floor weight (95% of base weight, truncated to 2 decimals)
        const weightInput = document.getElementById("weight");
        if (weightInput && plant.baseWeight) {
          const priceFloorWeight = Math.floor(plant.baseWeight * 0.95 * 100) / 100;
          weightInput.value = priceFloorWeight.toFixed(2);
        }
        
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

// Moved formatNumber to global scope for reuse
function formatNumber(num) {
  if (!Number.isFinite(num)) return "0";
  
  // Format with commas for thousands separators
  return num.toLocaleString('en-US');
}

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

// Pure calculation function that can work with saved data
/**
 * Calculate the total value for a plant batch.
 *
 * Assumptions:
 * - Core value scales with the square of the weight ratio:
 *     CropValue = BaseValue * (Weight / BaseWeight) ** 2
 * - Growth mutations are multiplicative (none=1, golden=20, rainbow=50).
 * - Environmental mutations stack multiplicatively by default (product of each).
 * - Friend boost is a percentage (e.g., 15 => +15%).
 *
 * @param {Object} plantData
 * @param {number} plantData.baseValue     // value at base/average weight
 * @param {number} plantData.baseWeight    // average/base weight (kg)
 *
 * @param {Object} settings
 * @param {number} [settings.weight]             // actual item weight; defaults to baseWeight
 * @param {number} [settings.quantity=1]
 * @param {number} [settings.friendBoost=0]      // percent (e.g., 15 = +15%)
 * @param {"none"|"golden"|"rainbow"} [settings.growthMutation="none"]
 * @param {string[]} [settings.mutations=[]]     // list of mutation names
 * @param {Record<string, number>} [settings.mutationMultipliers] // map name -> factor (e.g., Rose Petals: 1.1)
 *
 * @param {Object} [options]
 * @param {"product"|"sumMinusCount"} [options.envStacking="product"]
 *
 * @returns {number} rounded total value (integer)
 */
function calculateCoreValue(plantData, settings = {}, options = {}) {
  if (!plantData) return 0;

  const {
    baseValue: rawBaseValue = 0,
    baseWeight: rawBaseWeight = 1
  } = plantData;

  // sanitize numeric inputs
  const baseValue  = Math.max(0, Number(rawBaseValue) || 0);
  const baseWeight = Math.max(1e-9, Number(rawBaseWeight) || 1); // avoid 0-div

  const {
    weight: rawWeight,
    quantity: rawQty = 1,
    friendBoost: rawFriend = 0,
    growthMutation = "none",
    mutations = [],
    mutationMultipliers: localMutationMap
  } = settings;

  const qty        = Math.max(0, Math.floor(Number(rawQty) || 1));
  const friendPct  = Number(rawFriend) || 0;

  // If no weight is provided, use baseWeight (so value = baseValue)
  const weight = Math.max(0, Number(rawWeight ?? baseWeight));

  // Growth mutation factor
  const growthMap = { none: 1, golden: 20, rainbow: 50 };
  const growthMulti = growthMap[growthMutation] ?? 1;

  // Resolve mutation multiplier map (allow passing via settings OR global)
  const mutationMap =
    localMutationMap ||
    (typeof mutationMultipliers !== "undefined" ? mutationMultipliers : {});

  // Environmental (non-growth) mutation stacking
  const { envStacking = "product" } = options;

  let environmentalMultiplier = 1;
  if (mutations.length > 0) {
    if (envStacking === "sumMinusCount") {
      // If your mutationMap stores factors like 1.20, 0.95, etc.,
      // sumMinusCount implements: 1 + (Σ factors) - (#mutations)
      // i.e., adds their deltas from 1.0 linearly.
      const sum = mutations.reduce(
        (acc, name) => acc + (Number(mutationMap[name]) || 1),
        0
      );
      environmentalMultiplier = Math.max(0, 1 + sum - mutations.length);
    } else {
      // Default/accurate: multiply all mutation factors
      environmentalMultiplier = mutations.reduce(
        (prod, name) => prod * (Number(mutationMap[name]) || 1),
        1
      );
    }
  }

  const mutationMultiplier = growthMulti * environmentalMultiplier;

  // Core crop value (quadratic weight scaling)
  const weightRatio = weight > 0 ? weight / baseWeight : 0;
  const cropValue = baseValue * Math.pow(weightRatio, 2);

  // Friend boost (percent)
  const friendMulti = 1 + (friendPct / 100);

  // Total (rounded to nearest integer)
  const total = cropValue * mutationMultiplier * friendMulti * qty;
  return Math.round(total);
}


function updateCalculation() {
  // Get elements with null checks
  const totalPriceEl = document.getElementById("totalPrice");
  const totalPriceThousandEl = document.getElementById("totalPriceThousand");
  const mutationMultiplierEl = document.getElementById("mutationMultiplier");
  const selectedPlantNameEl = document.getElementById("selectedPlantName");
  const displayWeightEl = document.getElementById("displayWeight");
  const plantWorthEl = document.getElementById("plantWorth");
  const plantIconEl = document.querySelector(".plant-icon");
  const activeMutationsListEl = document.getElementById("activeMutationsList");
  
  if (!selectedPlant) {
    // Set default display when no plant selected
    if (totalPriceEl) totalPriceEl.textContent = "0";
    if (totalPriceThousandEl) totalPriceThousandEl.textContent = "0";
    if (mutationMultiplierEl) mutationMultiplierEl.textContent = "x1";
    if (selectedPlantNameEl) selectedPlantNameEl.textContent = "Select a plant";
    if (displayWeightEl) displayWeightEl.textContent = "0";
    if (plantWorthEl) plantWorthEl.textContent = "0 Sheckles";
    if (activeMutationsListEl) activeMutationsListEl.textContent = "None";
    return;
  }
  
  // Get plant constants (base and minWeight)
  const plant = selectedPlant;
  const { baseValue, baseWeight, minWeight } = getPlantConstants(plant);
  
  // Get inputs from UI
  const { weight, quantity, friendBoost, growth, temperature, envMutations } = readCalculationInputs();

  // Make sure weight is a number
  const weightNum = Number(weight);
  
  // Build additive stacks from selected mutations
  const tempStack = temperature ? (Number(stacksTemp[temperature]) || 0) : 0;
  const otherStacks = envMutations.reduce((sum, name) => sum + (Number(stacksEnv[name]) || 0), 0);
  const stacksAdditive = tempStack + otherStacks;

  // Per‑crop value from in‑game logic
  let perCrop = calculateCropValue({
    baseValue,
    baseWeight,
    weightKg: weightNum,
    growth,
    stacksAdditive,
    minWeight
  });

  // Apply friend boost and quantity, then cap if needed
  const friendMulti = 1 + (Number(friendBoost) / 100);
  let totalValue = perCrop * friendMulti * Math.max(1, Number(quantity) || 1);
  totalValue = Math.round(totalValue);
  if (CAP_AT_1E12) totalValue = Math.min(totalValue, 1e12);
  
  // Update total price display
  if (totalPriceEl) totalPriceEl.textContent = formatNumber(totalValue);
  
  // Update formatted price display
  if (totalPriceThousandEl) {
    const n = totalValue;
    totalPriceThousandEl.textContent =
      n >= 1e12 ? `≈${(n/1e12).toFixed(3)} Trillion` :
      n >= 1e9  ? `≈${(n/1e9 ).toFixed(3)} Billion`  :
      n >= 1e6  ? `≈${(n/1e6 ).toFixed(3)} Million`  :
      n >= 1e3  ? `≈${(n/1e3 ).toFixed(3)} Thousand` :
      n.toString();
  }
  
  // Show "total multiplier" including friend boost (matches site display)
  const growthMap = { none: 1, golden: 20, rainbow: 50 };
  const growthMulti = growthMap[growth] ?? 1;
  const envMultiplier = 1 + stacksAdditive;
  const friendMultiDisplay = 1 + (friendBoost / 100);
  const totalMultiplier = growthMulti * envMultiplier * friendMultiDisplay;
  if (mutationMultiplierEl) mutationMultiplierEl.textContent = `x${formatThousands(totalMultiplier)}`;
  
  // Update plant name and weight
  if (selectedPlantNameEl) selectedPlantNameEl.textContent = selectedPlant.name;
  if (displayWeightEl) displayWeightEl.textContent = weight || "0";
  
  // Show fully multiplied value (to match top Total Value)
  if (plantWorthEl) {
    plantWorthEl.textContent = `${formatThousands(totalValue)} Sheckles`;
  }
  
  // Update plant icon with emoji
  if (plantIconEl) {
    plantIconEl.textContent = "🌱";
  }
  
  // Update active mutations list
  if (activeMutationsListEl) {
    // Get all active mutations
    const allMutations = [];
    
    // Add growth mutation if not "none"
    if (growth !== "none") {
      allMutations.push(growth === "golden" ? "Golden" : "Rainbow");
    }
    
    // Add temperature mutation if present
    if (temperature) {
      allMutations.push(temperature);
    }
    
    // Add environmental mutations
    allMutations.push(...envMutations);
    
    // Display the list or "None"
    activeMutationsListEl.textContent = allMutations.length > 0 
      ? allMutations.join(" + ") 
      : "None";
  }
  
  // Save current state to localStorage
  saveUserData();
  updateMaxToggleVisual();
}

// Helper functions for max mutations and reset
function applyMaxMutations() {
  // Apply the highest value mutations
  const sortedMutations = mutationOrder.slice().sort((a, b) => 
    (mutationMultipliers[b] || 0) - (mutationMultipliers[a] || 0)
  );
  suppressLastClicked = true;
  
  // Clear all first
  clearAllMutations();
  
  // Set growth to rainbow (highest value)
  document.getElementById("growth").value = "rainbow";
  
  // Update growth mutation buttons
  document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.value === "rainbow") {
      btn.classList.add("active");
    }
  });
  
  // Find highest value temperature mutation
  let highestTempMutation = null;
  let highestTempValue = 0;
  
  const temperatureMutations = ["Wet", "Chilled", "Drenched", "Frozen"];
  temperatureMutations.forEach(name => {
    const value = mutationMultipliers[name] || 0;
    if (value > highestTempValue) {
      highestTempValue = value;
      highestTempMutation = name;
    }
  });
  
  // Apply highest temperature mutation
  if (highestTempMutation) {
    const tempCheckbox = document.getElementById(`mut-${highestTempMutation}`);
    if (tempCheckbox) tempCheckbox.checked = true;
    
    const tempButton = document.getElementById(`temp-mut-${highestTempMutation}`);
    if (tempButton) tempButton.classList.add("active");
  }
  
  // Apply ALL other mutations (excluding temperature mutations)
  const tempMutationSet = new Set(temperatureMutations);
  let filteredMutations = sortedMutations.filter(name => !tempMutationSet.has(name));
  // Respect unreleased visibility
  filteredMutations = filteredMutations.filter(name => !(unreleasedFlags?.[name] && !isShowUnreleased()));

  // Bulk-select all non-temp mutations, including Sandy
  filteredMutations.forEach(name => {
    const checkbox = document.getElementById(`mut-${name}`);
    if (checkbox) checkbox.checked = true;
  });

  // Enforce exclusivity/combos after selecting all and refresh UI state
  enforceMutationCombos();
  // Ensure Sandy is included under Max when Ceramic present (nested availability)
  const ceramicCb = document.getElementById('mut-Ceramic');
  const sandyCb = document.getElementById('mut-Sandy');
  if (ceramicCb && ceramicCb.checked && sandyCb) {
    sandyCb.checked = true;
  }
  refreshMutationSelectionClasses();
  suppressLastClicked = false;
  updateMaxToggleVisual();
}

function clearAllMutations() {
  // Clear all mutation checkboxes
  mutationOrder.forEach((name) => {
    const checkbox = document.getElementById(`mut-${name}`);
    if (checkbox) checkbox.checked = false;
  });
  
  // Reset growth select
  document.getElementById("growth").value = "none";
  
  // Reset growth mutation buttons
  document.querySelectorAll(".growth-mutations .mutation-button").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById("growth-none").classList.add("active");
  
  // Reset temperature mutation buttons
  document.querySelectorAll("#temperature-mutations .mutation-button").forEach(btn => {
    btn.classList.remove("active");
  });

  // After clearing, refresh mutation UI selection state
  refreshMutationSelectionClasses();
  // Also clear any growth coloring/animation
  applyGrowthVisuals();
}

function resetAllControls() {
  // Reset weight to the selected plant's minimum (95% of base weight)
  const weightEl = document.getElementById("weight");
  if (selectedPlant && weightEl) {
    const { baseWeight } = getPlantConstants(selectedPlant);
    const priceFloorWeight = Math.floor(baseWeight * 0.95 * 100) / 100;
    weightEl.value = priceFloorWeight.toFixed(2);
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

function formatThousands(num) {
  if (!Number.isFinite(num)) return "0";
  
  if (num >= 1000000000000) {
    return "≈" + (num / 1000000000000).toFixed(3) + " Trillion";
  } else if (num >= 1000000000) {
    return "≈" + (num / 1000000000).toFixed(3) + " Billion";
  } else if (num >= 1000000) {
    return "≈" + (num / 1000000).toFixed(3) + " Million";
  } else if (num >= 1000) {
    return "≈" + (num / 1000).toFixed(3) + " Thousand";
  } else {
    return num.toFixed(0);
  }
}

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

// Helper to get selected mutations
function getSelectedMutations() {
  const selected = [];
  mutationOrder.forEach(name => {
    const checkbox = document.getElementById(`mut-${name}`);
    if (checkbox && checkbox.checked) {
      selected.push(name);
    }
  });
  return selected;
}

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
      const { baseValue, baseWeight } = getPlantConstants(plantData);
      const growth = save.settings.growthMutation || "none";
      const userMutations = Array.isArray(save.settings.mutations) ? save.settings.mutations : [];
      const temperature = TEMPS.find(t => userMutations.includes(t)) || null;
      const envMutations = userMutations.filter(name => !TEMPS.includes(name));
      const tempStack = temperature ? (Number(stacksTemp[temperature]) || 0) : 0;
      const otherStacks = envMutations.reduce((sum, name) => sum + (Number(stacksEnv[name]) || 0), 0);
      const stacksAdditive = tempStack + otherStacks;

      let perCrop = calculateCropValue({
        baseValue,
        baseWeight,
        weightKg: Number(save.settings.weight) || 0,
        growth,
        stacksAdditive,
        minWeight: baseWeight * 0.95
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

// Calculate weight from target value
function calculateWeightFromValue(targetValue, plantData, settings = {}) {
  if (!plantData) return 0;
  if (targetValue <= 0) return 0;

  // Get plant constants
  const { baseValue, baseWeight, minWeight } = getPlantConstants(plantData);

  // Process settings to match site calculator format
  const { quantity, friendBoost, growthMutation, mutations } = settings;
  
  // Split mutations into temperature and environmental
  const temperature = TEMPS.find(t => mutations.includes(t)) || null;
  const envMutations = mutations.filter(name => !TEMPS.includes(name));

  // Convert growth mutation to the format expected by calculateSiteAccurate
  const growth = growthMutation || 'none';

  // Rebuild additive stacks and growth
  const growthMap = { none: 1, golden: 20, rainbow: 50 };
  const growthMulti = growthMap[growth] || 1;
  const tempStack = temperature ? (Number(stacksTemp[temperature]) || 0) : 0;
  const otherStacks = envMutations.reduce((sum, name) => sum + (Number(stacksEnv[name]) || 0), 0);
  const e = 1 + tempStack + otherStacks;
  const friendMulti = 1 + (Number(friendBoost) / 100);
  const qty = Math.max(1, Math.floor(Number(quantity) || 1));

  const perCropTarget = Math.max(1, targetValue / (friendMulti * qty));
  const baseFactor = baseValue * growthMulti * e;
  if (baseFactor <= 0) return 0;

  // perCrop = baseValue * g * e * (ratio^2)
  // ratio^2 = perCrop / (baseValue * g * e)
  const ratioSquared = perCropTarget / baseFactor;
  const ratio = Math.max(Math.sqrt(Math.max(0, ratioSquared)), 0.95);
  const weight = ratio * baseWeight;
  return Math.max(weight, minWeight);
}

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

// Helper to get selected growth mutation
function getSelectedGrowthMutation() {
  const growthSelect = document.getElementById("growth");
  return growthSelect ? growthSelect.value : "none";
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
    mutationOrder.forEach((name) => {
      const checkbox = document.getElementById(`mut-${name}`);
      if (checkbox) {
    checkbox.addEventListener("change", () => { enforceMutationCombos(); updateCalculation(); updateMaxToggleVisual(); });
      }
    });

    // Add event listener to growth select
    const growthSelect = document.getElementById("growth");
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
