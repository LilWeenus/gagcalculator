import { mutationOrder, mutationMultipliers } from './data/mutations.js';
import { plants } from './data/plants.js';

// --- UI Logic ---

function initMutations() {
  const container = document.getElementById("mutations");
  mutationOrder.forEach((name) => {
    const id = `mut-${name}`;
    const label = document.createElement("label");
    label.className = "mutation-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.value = name;

    const span = document.createElement("span");
    span.textContent = `${name} (×${mutationMultipliers[name] || 1})`;

    label.appendChild(checkbox);
    label.appendChild(span);
    container.appendChild(label);
  });
}

let selectedPlant = null;

function initCrops() {
  const listEl = document.getElementById("cropList");
  const searchEl = document.getElementById("cropSearch");
  let selected = null;

  function render(filter = "") {
    listEl.innerHTML = "";
    const lowerFilter = filter.trim().toLowerCase();
    const filtered = plants.filter((plant) => 
      plant.name.toLowerCase().includes(lowerFilter) || 
      plant.tier.toLowerCase().includes(lowerFilter) ||
      (plant.shop && plant.shop.toLowerCase().includes(lowerFilter))
    );
    
    filtered.forEach((plant) => {
      const div = document.createElement("div");
      div.className = "crop-item";
      div.dataset.plantId = plant.id;
      
      if (plant.icon) {
        const img = document.createElement("img");
        img.src = `assets/icons/plants/${plant.icon}`;
        img.alt = plant.name;
        img.onerror = function() {
          // Fallback to a generic icon or hide the image
          this.style.display = 'none';
        };
        div.appendChild(img);
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
      });
      
      listEl.appendChild(div);
    });
  }
  
  render();
  searchEl.addEventListener("input", (e) => {
    render(e.target.value);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  
  if (!selectedPlant) {
    alert("Please select a plant first!");
    return;
  }
  
  const baseValue = selectedPlant.baseValue || 0;
  const baseWeight = selectedPlant.baseWeight || 1;
  const weight = parseFloat(document.getElementById("weight").value) || 0;
  const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;
  const growthSelect = document.getElementById("growth");
  const growthMulti = parseFloat(growthSelect.selectedOptions[0].dataset.multi) || 1;

  // Gather selected environmental mutations
  const selectedMutations = [];
  mutationOrder.forEach((name) => {
    const checkbox = document.getElementById(`mut-${name}`);
    if (checkbox && checkbox.checked) {
      selectedMutations.push(name);
    }
  });

  // Compute ΣMutations and the count - using the exact formula from reference site
  let sumMultipliers = 0;
  selectedMutations.forEach((name) => {
    sumMultipliers += mutationMultipliers[name] || 0;
  });
  const mutationCount = selectedMutations.length;

  // Mutation multiplier formula: Growth × (1 + ΣMutations - MutationCount)
  // This matches the reference site formula
  const environmentalMultiplier = mutationCount > 0 ? (1 + sumMultipliers - mutationCount) : 1;
  const mutationMultiplier = growthMulti * environmentalMultiplier;

  // Weighted crop value - using weight ratio squared formula
  let cropValue = 0;
  if (baseWeight > 0 && weight > 0) {
    const weightRatio = weight / baseWeight;
    cropValue = baseValue * Math.pow(weightRatio, 2);
  } else if (weight > 0) {
    // If no base weight specified, use linear scaling
    cropValue = baseValue * weight;
  } else {
    // If no weight specified, use base value
    cropValue = baseValue;
  }

  // Apply mutation multiplier to get final value
  const mutatedValue = cropValue * mutationMultiplier;
  
  // Total price with quantity
  const totalPrice = mutatedValue * quantity;

  function formatNumber(num) {
    if (!Number.isFinite(num)) return "0";
    
    // Format large numbers with appropriate suffixes
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + "B";
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + "K";
    } else {
      return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
    }
  }

  const displayLine = selectedMutations.join(" • ");

  document.getElementById("mutationDisplay").textContent = displayLine || "(none)";
  document.getElementById("mutationMultiplier").textContent = formatNumber(mutationMultiplier);
  document.getElementById("cropValue").textContent = formatNumber(mutatedValue);
  document.getElementById("totalPrice").textContent = formatNumber(totalPrice);
  document.getElementById("results").hidden = false;
}

// Add friend boost functionality
function addFriendBoostSupport() {
  const form = document.getElementById("calc-form");
  const friendBoostGroup = document.createElement("div");
  friendBoostGroup.className = "form-group";
  
  const label = document.createElement("label");
  label.setAttribute("for", "friendBoost");
  label.textContent = "Friend Boost:";
  
  const select = document.createElement("select");
  select.id = "friendBoost";
  
  // Add friend boost options (0% to 100%)
  for (let i = 0; i <= 100; i += 10) {
    const option = document.createElement("option");
    option.value = i / 100;
    option.textContent = `${i}%`;
    if (i === 0) option.selected = true;
    select.appendChild(option);
  }
  
  friendBoostGroup.appendChild(label);
  friendBoostGroup.appendChild(select);
  
  // Insert before the calculate button
  const calcButton = form.querySelector(".calc-btn");
  form.insertBefore(friendBoostGroup, calcButton);
}

// Update the calculation to include friend boost
function updateCalculationWithFriendBoost() {
  const originalHandleSubmit = handleSubmit;
  
  window.handleSubmit = function(event) {
    event.preventDefault();
    
    if (!selectedPlant) {
      alert("Please select a plant first!");
      return;
    }
    
    const baseValue = selectedPlant.baseValue || 0;
    const baseWeight = selectedPlant.baseWeight || 1;
    const weight = parseFloat(document.getElementById("weight").value) || 0;
    const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;
    const growthSelect = document.getElementById("growth");
    const growthMulti = parseFloat(growthSelect.selectedOptions[0].dataset.multi) || 1;
    const friendBoost = parseFloat(document.getElementById("friendBoost")?.value) || 0;

    // Gather selected environmental mutations
    const selectedMutations = [];
    mutationOrder.forEach((name) => {
      const checkbox = document.getElementById(`mut-${name}`);
      if (checkbox && checkbox.checked) {
        selectedMutations.push(name);
      }
    });

    // Compute mutation multiplier
    let sumMultipliers = 0;
    selectedMutations.forEach((name) => {
      sumMultipliers += mutationMultipliers[name] || 0;
    });
    const mutationCount = selectedMutations.length;
    const environmentalMultiplier = mutationCount > 0 ? (1 + sumMultipliers - mutationCount) : 1;
    const mutationMultiplier = growthMulti * environmentalMultiplier;

    // Calculate crop value
    let cropValue = 0;
    if (baseWeight > 0 && weight > 0) {
      const weightRatio = weight / baseWeight;
      cropValue = baseValue * Math.pow(weightRatio, 2);
    } else if (weight > 0) {
      cropValue = baseValue * weight;
    } else {
      cropValue = baseValue;
    }

    // Apply mutation and friend boost multipliers
    const mutatedValue = cropValue * mutationMultiplier;
    const friendBoostedValue = mutatedValue * (1 + friendBoost);
    const totalPrice = friendBoostedValue * quantity;

    function formatNumber(num) {
      if (!Number.isFinite(num)) return "0";
      
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(2) + "B";
      } else if (num >= 1000000) {
        return (num / 1000000).toFixed(2) + "M";
      } else if (num >= 1000) {
        return (num / 1000).toFixed(2) + "K";
      } else {
        return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
      }
    }

    const displayLine = selectedMutations.join(" • ");
    document.getElementById("mutationDisplay").textContent = displayLine || "(none)";
    document.getElementById("mutationMultiplier").textContent = formatNumber(mutationMultiplier);
    document.getElementById("cropValue").textContent = formatNumber(friendBoostedValue);
    document.getElementById("totalPrice").textContent = formatNumber(totalPrice);
    document.getElementById("results").hidden = false;
  };
}

document.addEventListener("DOMContentLoaded", () => {
  initCrops();
  initMutations();
  addFriendBoostSupport();
  updateCalculationWithFriendBoost();
  document.getElementById("calc-form").addEventListener("submit", window.handleSubmit || handleSubmit);
});
