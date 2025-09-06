import { Pets, Passives } from './pets_passives_db.js';

// Rarity mapping and order
const RARITY_ORDER = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythical', "divine", "prismatic"];

// Constants

// Helper function to normalize rarity
function normalizeRarity(rarity) {
  if (!rarity) return 'common';
  return rarity.toLowerCase();
}

// Toys → PASSIVE_BOOST entries for computePassive()
function getToyExtraBoosts() {
  const boosts = [];
  const smallOn  = document.getElementById('toySmall')?.classList.contains('active');
  const mediumOn = document.getElementById('toyMedium')?.classList.contains('active');
  if (smallOn)  boosts.push({ BoostType: 'PASSIVE_BOOST', BoostAmount: 0.10 });
  if (mediumOn) boosts.push({ BoostType: 'PASSIVE_BOOST', BoostAmount: 0.20 });
  return boosts;
}



// Utility functions

// Keep math in double precision; only round when formatting for UI.
function getInternalWeightKg(levelInput, weightUiInput) {
  const L = Math.max(1, Math.min(100, Number(levelInput) || 1));
  const wUi = Number(weightUiInput);
  if (!Number.isFinite(wUi) || wUi <= 0) return 0;

  // Reconstruct baseWeight from what the user typed/shows,
  // then rebuild W with full precision.
  const growth = 1 + 0.1 * L;
  const baseWeight = wUi / growth;
  return baseWeight * growth;
}

function formatNumber(num) {
  if (num === null || num === undefined) return 'N/A';
  if (typeof num === 'string') return num;
  return num.toLocaleString();
}

// Fixed-decimal formatter for weights and similar values
function formatFixed(num, digits = 2) {
  if (num === null || num === undefined || Number.isNaN(num)) return 'N/A';
  if (typeof num !== 'number') num = Number(num);
  return num.toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });
}

function parseAssetId(rbxasset) {
  if (!rbxasset || typeof rbxasset !== 'string') return null;
  const match = rbxasset.match(/\d+/);
  return match ? match[0] : null;
}

// Get local thumbnail path from asset ID and pet name
function getLocalThumbnailPath(assetId, petName) {
  if (!assetId || !petName) return null;
  
  // Convert pet name to lowercase and replace spaces with hyphens
  const normalizedName = petName.toLowerCase().replace(/\s+/g, '-');
  return `pet_thumbs/${normalizedName}-${assetId}.png`;
}

/**
 * Compute passive ability state values for a pet.
 * Mirrors the in-game logic:
 *   pre = Base + Scale * (level + offsets)
 *   if field === "Cooldown":   value = pre − Base * (boostFactor − 1)
 *   else (Amount/Chance/etc.): value = pre + Base * (boostFactor − 1)
 *   then clamp to Min/Max, and apply formatters (ColonTime/Percentage)
 *
 * @param {Object} passive  One passive entry from your DB.passives[passiveName]
 *   { Description?: string, States: { [fieldName]: { Base, Scale, Min?, Max?, Formatter? } } }
 * @param {number} level    Pet level (1..100)
 * @param {Object} [opts]
 * @param {"none"|"golden"|"rainbow"} [opts.mutation="none"]
 * @param {number} [opts.petPassiveBonus=0]      // optional level offset
 * @param {number} [opts.sprinklerPetBoost=0]    // optional level offset
 * @param {Array<{BoostType:string,BoostAmount:number}>} [opts.extraBoosts=[]]
 *        // any additional PASSIVE_BOOST sources to include (pet-specific boosts, etc.)
 * @param {boolean} [opts.renderDescription=true] // if true, returns a description with placeholders filled
 * @returns {{
 *   fields: Record<string,{ raw:number, formatted:string, formatter?:string, min?:number, max?:number }>,
 *   description?: string,
 *   boostFactor: number,
 *   effectiveLevel: number
 * }}
 */
function computePassive(passive, level, opts = {}) {
  const {
    mutation = "none",
    petPassiveBonus = 0,       // reserved, not used currently
    sprinklerPetBoost = 0,     // reserved, not used currently
    extraBoosts = [],
    renderDescription = true,
  } = opts;

  // Drivers: weight (if provided) else level (1..100)
  const L_age = Math.max(1, Math.min(100, Number(level) || 1));
  const currentWeightKg = opts.currentWeightKg;
  const L_weight = (currentWeightKg !== undefined && currentWeightKg !== null && Number.isFinite(Number(currentWeightKg)))
    ? Number(currentWeightKg)
    : L_age; // fallback to Age if kg not provided

  // PASSIVE_BOOST sources summed once
  const mutationBoost =
    mutation === "gold" ? 0.10 :
    mutation === "rainbow" ? 0.20 : 0.0;

  const extraSum = (Array.isArray(extraBoosts) ? extraBoosts : [])
    .filter(b => b && b.BoostType === "PASSIVE_BOOST")
    .reduce((s, b) => s + (Number(b.BoostAmount) || 0), 0);

  const boostFactor = 1 + mutationBoost + extraSum;

  // Compute each state with the same driver (matches game: driver = weightKg)
  const out = {};
  const states = passive && passive.States ? passive.States : {};
  for (const fieldName of Object.keys(states)) {
    const spec = states[fieldName] || {};
    const Base = Number(spec.Base) || 0;
    const Scale = Number(spec.Scale) || 0;
    const Min = spec.Min !== undefined ? Number(spec.Min) : undefined;
    const Max = spec.Max !== undefined ? Number(spec.Max) : undefined;
    const Formatter = spec.Formatter || undefined;

    // pre = Base + Scale × driver
    const pre = Base + Scale * L_weight;

    let val;
          // All stats including Boost use the same formula now
      if (fieldName === "Cooldown") {
        val = pre - Base * (boostFactor - 1);
        // (Optional debug for Shell Share cooldown)
        if (Base === 720 && Scale === -6.5) {
          console.log(`Shell Share Debug: Base=${Base}, Scale=${Scale}, driver=${L_weight}`);
          console.log(`pre = ${Base} + (${Scale}) × ${L_weight} = ${pre}`);
          console.log(`boostFactor = ${boostFactor} → Base×(bf−1)=${Base * (boostFactor - 1)}`);
          console.log(`value = ${pre} - ${Base * (boostFactor - 1)} = ${val}`);
        }
      } else {
        // Non-cooldowns add the Base slice
        val = pre + Base * (boostFactor - 1);
      }

    // Clamp after boost application
    if (Min !== undefined && Max !== undefined) {
      val = Math.min(Math.max(val, Min), Max);
    } else if (Min !== undefined) {
      val = Math.max(val, Min);
    } else if (Max !== undefined) {
      val = Math.min(val, Max);
    }

    out[fieldName] = {
      raw: val,
      formatted: formatField(val, Formatter),
      formatter: Formatter,
      ...(Min !== undefined ? { min: Min } : {}),
      ...(Max !== undefined ? { max: Max } : {}),
    };
  }

  // Description substitution
  let description;
  if (renderDescription && passive && typeof passive.Description === "string") {
    description = passive.Description;
    for (const [fieldName] of Object.entries(states)) {
      const token = `<${fieldName}>`;
      if (description.includes(token)) {
        const f = out[fieldName];
        description = description.split(token).join(f ? f.formatted : "");
      }
    }
  }

  // effectiveLevel now means the numeric driver used (weight if provided, else age)
  return { fields: out, description, boostFactor, effectiveLevel: L_weight };

  // Helpers
  function formatField(v, formatter) {
    if (!Number.isFinite(v)) return "NaN";
    if (formatter === "ColonTime") return secondsToMMSS(v);
    if (formatter === "Percentage") return ((v * 100).toFixed(2)) + "%";
    if (formatter === "Multiplier") return (v.toFixed(2)) + "x";
    if (formatter === "Chance") return (v.toFixed(2)) + "%";
    if (Math.abs(v - Math.round(v)) < 1e-9) return Math.round(v).toLocaleString();
    return Number(v.toFixed(2)).toLocaleString(undefined, { maximumFractionDigits: 2 });
  }
  function secondsToMMSS(sec) {
    const s = Math.max(0, Math.round(sec));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m + ":" + String(r).padStart(2, "0");
  }
}



// Weight calculations (spec): weight(L) = baseWeight * (1 + 0.1 * L)
function weightForward(baseWeight, level) {
  return (Number(baseWeight) || 1.5) * (1 + 0.1 * (Number(level) || 0));
}

function weightInverse(currentWeight, level) {
  return (Number(currentWeight) || 0) / (1 + 0.1 * (Number(level) || 0));
}

/**
 * XP needed to go from level L to L+1.
 * Defaults from game config: base=20, exponent=2.02, maxLevel=100.
 */
function xpToNext(level, base = 20, exponent = 2.02, maxLevel = 100) {
  const L = Math.max(1, Math.floor(Number(level) || 1));
  if (L >= maxLevel) return 0;
  return Math.round(base * Math.pow(L, exponent));
}

// Get sorted pet list
function getPetListSorted(filterText = '', sortMode = 'rarity') {
  let pets = Object.entries(Pets);
  
  // Filter by search text
  if (filterText) {
    const searchLower = filterText.toLowerCase();
    pets = pets.filter(([id, pet]) => 
      pet.name.toLowerCase().includes(searchLower)
    );
  }
  
  // Sort
  if (sortMode === 'rarity') {
    pets.sort(([idA, petA], [idB, petB]) => {
      const rarityA = normalizeRarity(petA.rarity);
      const rarityB = normalizeRarity(petB.rarity);
      const orderA = RARITY_ORDER.indexOf(rarityA);
      const orderB = RARITY_ORDER.indexOf(rarityB);
      
      if (orderA !== orderB) {
        return orderA - orderB;
      }
      
      return petA.name.localeCompare(petB.name);
    });
  } else {
    pets.sort(([idA, petA], [idB, petB]) => petA.name.localeCompare(petB.name));
  }
  
  return pets;
}

// UI Functions
function createPetTile(petId, pet) {
  const tile = document.createElement('div');
  tile.className = 'pets-pet-tile';
  tile.dataset.id = petId;
  tile.dataset.rarity = normalizeRarity(pet.rarity);
  
  const assetId = parseAssetId(pet.icon);
  const thumbnailPath = getLocalThumbnailPath(assetId, pet.name);
  
  tile.innerHTML = `
    <div class="pets-pet-image">
      ${thumbnailPath ? `<img src="${thumbnailPath}" alt="${pet.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />` : ''}
      <div class="pets-skeleton" style="${thumbnailPath ? 'display: none;' : 'display: flex;'}">🐾</div>
    </div>
    <div class="pets-pet-info">
      <div class="pets-pet-name">${pet.name}</div>
    </div>
    <div class="pets-rarity-badge">
      <div class="pets-rarity-icon" style="background-image: url('../data/${normalizeRarity(pet.rarity)}.webp')"></div>
    </div>
  `;
  
  tile.addEventListener('click', () => {
    document.querySelectorAll('.pets-pet-tile').forEach(el => el.classList.remove('selected'));
    tile.classList.add('selected');
    selectPet(petId);
  });
  
  return tile;
}

function populatePetSelector() {
  const petList = document.getElementById('petList');
  const petSearch = document.getElementById('petSearch');
  const petSort = document.getElementById('petSort');
  
  if (!petList || !petSearch || !petSort) return;
  
  const searchTerm = petSearch.value;
  const sortMode = petSort.value;
  const pets = getPetListSorted(searchTerm, sortMode);
  
  petList.innerHTML = '';
  
  pets.forEach(([petId, pet]) => {
    const tile = createPetTile(petId, pet);
    petList.appendChild(tile);
  });
  
  // Auto-select first pet if none selected
  if (!document.querySelector('.pets-pet-tile.selected') && pets.length > 0) {
    pets[0][1].element = petList.firstElementChild;
    petList.firstElementChild.classList.add('selected');
    selectPet(pets[0][0]);
  }
}

function selectPet(petId) {
  const pet = Pets[petId];
  if (!pet) return;
  
  // Show infobox and simulate panels
  document.getElementById('petInfobox').style.display = 'block';
  document.getElementById('petSimulate').style.display = 'block';
  
  // Update infobox
  renderInfobox(pet);
  
  // Update simulate panel
  renderSimulate(pet);
  
  // Update URL
  updateURL();
}

// removed quick stats helpers (UI reverted)
function renderInfobox(pet) {
  // Header
  const assetId = parseAssetId(pet.icon);
  const thumbnailPath = getLocalThumbnailPath(assetId, pet.name);
  const infoboxImage = document.getElementById('infoboxImage');
  const infoboxName = document.getElementById('infoboxName');
  const infoboxRarity = document.getElementById('infoboxRarity');
  
  infoboxName.textContent = pet.name;
  infoboxRarity.innerHTML = `
    <div class="pets-rarity-icon" style="background-image: url('../data/${normalizeRarity(pet.rarity)}.webp')"></div>
  `;
  
  // Set thumbnail
  if (thumbnailPath) {
    infoboxImage.src = thumbnailPath;
    infoboxImage.alt = pet.name;
    infoboxImage.onerror = function() {
      this.style.display = 'none';
    };
  } else {
    infoboxImage.style.display = 'none';
  }
  
  // Compute current level/weight/mutation
  const level = parseInt(document.getElementById('simLevel')?.value) || 1;
  const weightInput = parseFloat(document.getElementById('simWeight')?.value);
  const baseWeight = Number.isFinite(weightInput) ? weightInverse(weightInput, level) : 1.5;
  const weightAtLevel = weightForward(baseWeight || 1.5, level);
  const xpNext = xpToNext(level);
  const hungerMax = pet.defaultHunger ?? 30000;
  
  const W = (window.storedWeightAtLevel1)
  ? weightForward(window.storedWeightAtLevel1, level)  // best: exact growth curve
  : getInternalWeightKg(level, weightInput); 

  // Description
  document.getElementById('infoboxDescription').textContent = pet.description || 'No description available.';
  
  // Passives list with token filling
  const passivesContainer = document.getElementById('infoboxPassives');
  passivesContainer.innerHTML = '';
  const mutation = getActiveMutation();

  
  if (pet.passives && pet.passives.length > 0) {
    pet.passives.forEach(passiveId => {
      const passive = Passives[passiveId];
      const wrap = document.createElement('div');
      wrap.className = 'pets-passive-item';
      if (!passive) {
        wrap.textContent = passiveId;
        passivesContainer.appendChild(wrap);
        return;
      }
      
      // Use the new computePassive function with current weight if available
      const result = computePassive(passive, level, { 
        mutation, 
        renderDescription: true,
        currentWeightKg: W,
        extraBoosts: getAllExtraBoosts()  
      });
      
      
      const desc = result.description || passiveId;
      
      wrap.innerHTML = `<div class="pets-passive-name">${passiveId}</div><div class="pets-passive-desc">${desc}</div>`;
      passivesContainer.appendChild(wrap);
    });
  } else {
    passivesContainer.innerHTML = '<div class="pets-passive-item">No passives</div>';
  }

  const statsBlock = document.createElement('div');
  statsBlock.className = 'pets-passive-item';
  statsBlock.innerHTML = `
    <table class="pets-stats-table">
      <tr><td>Weight</td><td>${formatFixed(weightAtLevel, 2)} KG</td></tr>
      <tr><td>Level</td><td>${level}</td></tr>
      <tr><td>XP to next</td><td>${formatNumber(xpNext)}</td></tr>
      <tr><td>Hunger</td><td>${formatFixed(hungerMax, 2)} HGR</td></tr>
    </table>
  `;
  passivesContainer.appendChild(statsBlock);
}

function renderSimulate(pet) {
  // Only populate weight table if it's visible (after Calculate is clicked)
  const weightTableContainer = document.getElementById('weightTableContainer');
  const weightTableBody = document.getElementById('weightTableBody');
  
  if (weightTableContainer && weightTableContainer.style.display !== 'none' && weightTableBody) {
    weightTableBody.innerHTML = '';
    
    const currentLevel = parseInt(document.getElementById('simLevel')?.value) || 1;
    let highlightedRow = null;
    
    // Use stored weight at level 1 from Calculate button
    const weightAtLevel1 = window.storedWeightAtLevel1 || 1.5;
    
    // Generate table rows for levels 1-100
    for (let level = 1; level <= 100; level++) {
      const weight = weightForward(weightAtLevel1, level);
      const row = document.createElement('tr');
      
      // Highlight current level
      if (level === currentLevel) {
        row.style.backgroundColor = '#444';
        row.style.fontWeight = 'bold';
        highlightedRow = row;
      }
      
      row.innerHTML = `
        <td>${level}</td>
        <td>${formatFixed(weight, 2)}</td>
      `;
      weightTableBody.appendChild(row);
    }
    
    // Scroll to the highlighted row within the table container only
    if (highlightedRow) {
      // Use setTimeout to ensure the DOM is fully updated
      setTimeout(() => {
        // Scroll the highlighted row into view within the table container
        const rowOffsetTop = highlightedRow.offsetTop;
        const containerHeight = weightTableContainer.clientHeight;
        const scrollTop = rowOffsetTop - (containerHeight / 2) + (highlightedRow.offsetHeight / 2);
        
        weightTableContainer.scrollTo({
          top: Math.max(0, scrollTop),
          behavior: 'smooth'
        });
      }, 100);
    }
  }
  
  // Update results
  updateSimulateResults(pet);
}

function updateSimulateResults(pet) {
  const resultsContainer = document.getElementById('simResultsContent');
  const level  = parseInt(document.getElementById('simLevel')?.value, 10) || 1;
  const weightUi = parseFloat(document.getElementById('simWeight')?.value) || 1.5;
  const mutation = getActiveMutation();

  // Use stored base-at-1 if available (set by Calculate); otherwise reconstruct from UI.
  const weightAtLevel1 = (typeof window.storedWeightAtLevel1 === 'number')
    ? window.storedWeightAtLevel1
    : weightInverse(weightUi, level);

  // Full-precision weights (no UI rounding)
  const weightAtCurrent = weightForward(weightAtLevel1, level);   // ← precise W for this level
  const weightAt100     = weightForward(weightAtLevel1, 100);

  if (!pet?.passives?.length) {
    resultsContainer.innerHTML = '<div class="pets-passive-item">No passives to simulate</div>';
    return;
  }

  let resultsHtml = '';

  // Summary card for weights and XP
  const xpNext = xpToNext(level);
  resultsHtml += `<div class="pets-passive-item">`;
  resultsHtml += '<table class="pets-stats-table">';
  resultsHtml += `<tr><td>Weight @ level 1</td><td>${formatFixed(weightAtLevel1, 2)} kg</td></tr>`;
  resultsHtml += `<tr><td>Weight @ level ${level}</td><td>${formatFixed(weightAtCurrent, 2)} kg</td></tr>`;
  resultsHtml += `<tr><td>Weight @ level 100</td><td>${formatFixed(weightAt100, 2)} kg</td></tr>`;
  resultsHtml += `<tr><td>XP to next</td><td>${formatNumber(xpNext)}</td></tr>`;
  resultsHtml += '</table></div>';

  // Extra boosts (toys + Σ niho) computed once for this view
  const extraBoosts = getAllExtraBoosts();

  pet.passives.forEach(passiveId => {
    const passive = Passives[passiveId];
    if (!passive || !passive.States) return;

    resultsHtml += `<div class="pets-passive-item">`;
    resultsHtml += `<div class="pets-passive-name">${passiveId}</div>`;
    resultsHtml += '<table class="pets-stats-table">';

    // CURRENT result (use precise driver = weightAtCurrent)
    const result = computePassive(passive, level, {
      mutation,
      renderDescription: false,
      currentWeightKg: weightAtCurrent,
      extraBoosts
    });

    // BASELINE result (same exact weight & extra boosts; mutation = none)
    const baseResult = mutation !== 'none'
      ? computePassive(passive, level, {
          mutation: 'none',
          renderDescription: false,
          currentWeightKg: weightAtCurrent,
          extraBoosts
        })
      : null;

    // Render each computed field
    Object.entries(result.fields).forEach(([fieldName, fieldData]) => {
      resultsHtml += `<tr><td>${fieldName}</td><td>${fieldData.formatted}</td></tr>`;

      // Show diff vs None if mutation is active
      if (baseResult && baseResult.fields[fieldName]) {
        const baseValue = Number(baseResult.fields[fieldName].raw);
        const currentValue = Number(fieldData.raw);
        if (Number.isFinite(baseValue) && Number.isFinite(currentValue) && baseValue !== 0) {
          const diff = currentValue - baseValue;
          const diffPercent = (diff / baseValue) * 100;
          const sign = diff > 0 ? '+' : '';
          resultsHtml += `<tr><td colspan="2" class="pets-diff-row">${sign}${formatNumber(diff)} (${sign}${diffPercent.toFixed(1)}%)</td></tr>`;
        }
      }
    });

    resultsHtml += '</table></div>';
  });

  resultsContainer.innerHTML = resultsHtml;
}

function getActiveMutation() {
  const activeBtn = document.querySelector('.pets-mutation-btn.active');
  return activeBtn ? activeBtn.dataset.value : 'none';
}

function updateURL() {
  // URL updating disabled - no longer updates parameters when changing selections
  return;
}

function readStateFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const petId = params.get('pet');
  const level = parseInt(params.get('lvl')) || 1;
  const weight = parseFloat(params.get('wt')) || 1.5;
  const mutation = params.get('mut') || 'none';
  
  // Set form values
  const simLevel = document.getElementById('simLevel');
  const simLevelRange = document.getElementById('simLevelRange');
  const simWeight = document.getElementById('simWeight');
  
  if (simLevel) simLevel.value = level;
  if (simLevelRange) simLevelRange.value = level;
  if (simWeight) simWeight.value = weight;
  
  // Set mutation
  document.querySelectorAll('.pets-mutation-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const mutationBtn = document.querySelector(`[data-value="${mutation}"]`);
  if (mutationBtn) mutationBtn.classList.add('active');
  
  // Select pet
  if (petId && Pets[petId]) {
    populatePetSelector();
    setTimeout(() => {
      const petTile = document.querySelector(`[data-id="${petId}"]`);
      if (petTile) {
        document.querySelectorAll('.pets-pet-tile').forEach(el => el.classList.remove('selected'));
        petTile.classList.add('selected');
        selectPet(petId);
      }
    }, 100);
  }
}

// Global saved pets array
let savedPets = [];

// Load saved pets from localStorage
function loadSavedPets() {
  try {
    const saved = localStorage.getItem('petCalcSavedPets');
    if (saved) {
      savedPets = JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error loading saved pets:', error);
    savedPets = [];
  }
}

// Save current pet setup
function saveCurrentSetup(name, existingSaveId = null) {
  const selectedPet = document.querySelector('.pets-pet-tile.selected');
  if (!selectedPet) {
    alert('Please select a pet first');
    return;
  }

  const petId = selectedPet.dataset.id;
  const pet = Pets[petId];
  if (!pet) return;

  const level = parseInt(document.getElementById('simLevel')?.value) || 1;
  const weight = parseFloat(document.getElementById('simWeight')?.value) || 1.5;
  const mutation = getActiveMutation();

  // Create save object
  const saveData = {
    id: existingSaveId || Date.now().toString(),
    name: name || `${pet.name} Setup`,
    date: new Date().toISOString(),
    pet: {
      id: petId,
      name: pet.name,
      rarity: pet.rarity
    },
    settings: {
      level: level,
      weight: weight,
      mutation: mutation
    }
  };

  if (existingSaveId) {
    // Update existing save
    const index = savedPets.findIndex(s => s.id === existingSaveId);
    if (index !== -1) {
      savedPets[index] = saveData;
    } else {
      savedPets.push(saveData);
    }
  } else {
    // Add new save
    savedPets.push(saveData);
  }

  // Save to localStorage
  localStorage.setItem('petCalcSavedPets', JSON.stringify(savedPets));

  // Update UI
  renderSavedPets();

  // Clear input
  document.getElementById('saveNameInput').value = '';
}

// Load a saved pet setup
function loadSavedSetup(id) {
  const save = savedPets.find(s => s.id === id);
  if (!save) return;

  // Find and select the pet
  const petTile = document.querySelector(`.pets-pet-tile[data-id="${save.pet.id}"]`);
  if (petTile) {
    // Clear current selection
    document.querySelectorAll('.pets-pet-tile').forEach(tile => tile.classList.remove('selected'));
    
    // Select the pet
    petTile.classList.add('selected');
    
    // Set the simulation values
    document.getElementById('simLevel').value = save.settings.level;
    document.getElementById('simWeight').value = save.settings.weight;
    document.getElementById('ageScale').value = save.settings.level;
    document.getElementById('ageScaleValue').textContent = save.settings.level;
    
    // Set mutation
    document.querySelectorAll('.pets-mutation-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.dataset.value === save.settings.mutation) {
        btn.classList.add('active');
      }
    });

    // Store the weight at level 1 based on loaded settings (needed for slider functionality)
    const currentLevel = save.settings.level;
    const currentWeight = save.settings.weight;
    window.storedWeightAtLevel1 = weightInverse(currentWeight, currentLevel);
    
    // Show the weight table (like clicking Calculate)
    const weightTableContainer = document.getElementById('weightTableContainer');
    if (weightTableContainer) {
      weightTableContainer.style.display = 'block';
    }
    
    // Render the pet info and populate weight table
    const pet = Pets[save.pet.id];
    if (pet) {
      renderInfobox(pet);
      renderSimulate(pet); // This will populate the weight table and scroll to current level
      updateSimulateResults(pet);
    }

    // Update URL
    updateURL();
  }
}

// Delete a saved setup
function deleteSavedSetup(id) {
  if (!confirm('Are you sure you want to delete this saved pet?')) return;
  
  savedPets = savedPets.filter(s => s.id !== id);
  localStorage.setItem('petCalcSavedPets', JSON.stringify(savedPets));
  renderSavedPets();
}

// Render saved pets in the sidebar
function renderSavedPets() {
  const container = document.getElementById('savedPetsList');
  if (!container) return;

  container.innerHTML = '';

  if (savedPets.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'empty-state';
    emptyState.textContent = 'No saved pets yet';
    container.appendChild(emptyState);
    return;
  }

  const template = document.getElementById('savedPetTemplate');
  if (!template) return;

  // Sort by date (newest first)
  const sortedSaves = [...savedPets].sort((a, b) => new Date(b.date) - new Date(a.date));

  sortedSaves.forEach(save => {
    const clone = document.importNode(template.content, true);
    
    // Set data
    clone.querySelector('.saved-pet-name').textContent = save.name;
    clone.querySelector('.saved-pet-info').textContent = 
      `Level ${save.settings.level} • ${save.settings.mutation} mutation`;
    clone.querySelector('.saved-pet-weight').textContent = `${save.settings.weight} kg`;

    // Set rarity color
    const item = clone.querySelector('.saved-pet-item');
    if (save.pet.rarity) {
      item.dataset.rarity = save.pet.rarity.toLowerCase();
    }

    // Set data-id
    item.dataset.saveId = save.id;

    // Set up buttons
    const loadBtn = clone.querySelector('.load-btn');
    loadBtn.addEventListener('click', () => loadSavedSetup(save.id));

    const updateBtn = clone.querySelector('.update-btn');
    updateBtn.addEventListener('click', () => {
      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        saveCurrentSetup(save.name, save.id);
      } else {
        alert('Please select a pet first');
      }
    });

    const deleteBtn = clone.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => deleteSavedSetup(save.id));

    container.appendChild(clone);
  });
}

// Export saved pets
function exportSavedPets() {
  if (savedPets.length === 0) {
    alert('No saved pets to export');
    return;
  }

  const dataStr = JSON.stringify(savedPets, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `pet-saves-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// Import saved pets
function importSavedPets(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const imported = JSON.parse(e.target.result);
      if (Array.isArray(imported)) {
        // Merge with existing saves (avoid duplicates by name)
        imported.forEach(importedSave => {
          const existingIndex = savedPets.findIndex(s => s.name === importedSave.name);
          if (existingIndex !== -1) {
            // Update existing
            savedPets[existingIndex] = { ...importedSave, id: savedPets[existingIndex].id };
          } else {
            // Add new
            savedPets.push({ ...importedSave, id: Date.now().toString() + Math.random().toString(36).substr(2, 9) });
          }
        });
        
        localStorage.setItem('petCalcSavedPets', JSON.stringify(savedPets));
        renderSavedPets();
        alert(`Imported ${imported.length} pet setups`);
      } else {
        alert('Invalid file format');
      }
    } catch (error) {
      alert('Error reading file: ' + error.message);
    }
  };
  reader.readAsText(file);
  
  // Clear the input
  event.target.value = '';
}







function getAllExtraBoosts() {
  return [...getToyExtraBoosts()];
}

// Event Listeners
function initEventListeners() {
  // Pet search
  const petSearch = document.getElementById('petSearch');
  if (petSearch) {
    petSearch.addEventListener('input', populatePetSelector);
  }

  // Sort controls
  const petSort = document.getElementById('petSort');
  if (petSort) {
    petSort.addEventListener('change', populatePetSelector);
  }

  // Simulate controls
  const simLevel = document.getElementById('simLevel');
  const simWeight = document.getElementById('simWeight');
  const ageScale = document.getElementById('ageScale');
  const ageScaleValue = document.getElementById('ageScaleValue');

  // Age scale (primary controller) - updates level/weight inputs
  if (ageScale && simLevel && simWeight && ageScaleValue) {
    ageScale.addEventListener('input', () => {
      const level = parseInt(ageScale.value, 10) || 1;
      ageScaleValue.textContent = level;

      // Update level input
      simLevel.value = level;

      // Only update weight if we have stored weight@1 from Calculate
      if (window.storedWeightAtLevel1) {
        const newWeight = weightForward(window.storedWeightAtLevel1, level);
        simWeight.value = formatFixed(newWeight, 2);
      }

      // Update infobox + simulate sections
      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        const pet = Pets[selectedPet.dataset.id];
        if (pet) {
          renderInfobox(pet);
          renderSimulate(pet);        // updates table highlight & scroll
          updateSimulateResults(pet);
        }
      }
    });
  }

  // Level input -> updates age scale and re-renders
  if (simLevel && ageScale && ageScaleValue) {
    simLevel.addEventListener('input', () => {
      ageScale.value = simLevel.value;
      ageScaleValue.textContent = simLevel.value;

      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        const pet = Pets[selectedPet.dataset.id];
        if (pet) {
          renderInfobox(pet);
          updateSimulateFromControls();
        }
      }
    });
  }

  // Weight input -> updates infobox/simulate
  if (simWeight) {
    simWeight.addEventListener('input', () => {
      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        const pet = Pets[selectedPet.dataset.id];
        if (pet) {
          renderInfobox(pet);
          updateSimulateFromControls();
        }
      }
    });
  }

  // Mutation buttons
  document.querySelectorAll('.pets-mutation-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pets-mutation-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        const pet = Pets[selectedPet.dataset.id];
        if (pet) {
          renderInfobox(pet);
        }
      }
      updateSimulateFromControls();
    });
  });

  // Toy buttons (independent toggles)
  document.querySelectorAll('.pets-toy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');

      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        const pet = Pets[selectedPet.dataset.id];
        if (pet) renderInfobox(pet);
      }
      updateSimulateFromControls();
    });
  });



  // Calculate button - shows weight table and updates results
  const simRecalc = document.getElementById('simRecalc');
  if (simRecalc) {
    simRecalc.addEventListener('click', () => {
      const currentLevel = parseInt(simLevel?.value, 10) || 1;
      const currentWeight = parseFloat(simWeight?.value) || 1.5;
      window.storedWeightAtLevel1 = weightInverse(currentWeight, currentLevel);

      const weightTableContainer = document.getElementById('weightTableContainer');
      if (weightTableContainer) weightTableContainer.style.display = 'block';

      const selectedPet = document.querySelector('.pets-pet-tile.selected');
      if (selectedPet) {
        const pet = Pets[selectedPet.dataset.id];
        if (pet) renderInfobox(pet);
      }
      updateSimulateFromControls();
    });
  }

  // Copy URL button
  const copyUrl = document.getElementById('copyUrl');
  if (copyUrl) {
    copyUrl.addEventListener('click', () => {
      navigator.clipboard.writeText(window.location.href).then(() => {
        copyUrl.textContent = 'Copied!';
        setTimeout(() => { copyUrl.textContent = 'Copy results URL'; }, 2000);
      });
    });
  }

  // Save system
  const saveCurrentBtn = document.getElementById('saveCurrentBtn');
  if (saveCurrentBtn) {
    saveCurrentBtn.addEventListener('click', () => {
      const nameInput = document.getElementById('saveNameInput');
      const name = nameInput?.value?.trim();
      if (!name) {
        alert('Please enter a name for your pet setup');
        return;
      }
      saveCurrentSetup(name);
    });
  }

  const exportSavesBtn = document.getElementById('exportSavesBtn');
  if (exportSavesBtn) exportSavesBtn.addEventListener('click', exportSavedPets);

  const importSavesBtn = document.getElementById('importSavesBtn');
  const importFileInput = document.getElementById('importFileInput');
  if (importSavesBtn && importFileInput) {
    importSavesBtn.addEventListener('click', () => importFileInput.click());
    importFileInput.addEventListener('change', importSavedPets);
  }
}

function updateSimulateFromControls() {
  const selectedPet = document.querySelector('.pets-pet-tile.selected');
  if (!selectedPet) return;
  
  const petId = selectedPet.dataset.id;
  const pet = Pets[petId];
  if (!pet) return;
  
  renderSimulate(pet);
  updateURL();
}

// Initialize
function main() {
  // Set default mutation
  const noneBtn = document.querySelector('.pets-mutation-btn');
  if (noneBtn) noneBtn.classList.add('active');
  
  // Initialize save system
  loadSavedPets();
  renderSavedPets();
  
  // Initialize UI
  populatePetSelector();
  initEventListeners();
  readStateFromQuery();
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}


