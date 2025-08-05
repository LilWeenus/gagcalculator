/*
  Client-side logic for the modified Grow a Garden mutation calculator.

  In addition to the original functionality (mutation selection and value
  computation), this version introduces a crop selection search at the top
  of the form.  A list of crop names is displayed and can be filtered
  by typing in the search box.  Clicking on a crop highlights it.  The
  selected crop is not currently used in any calculations but is exposed
  for future enhancements.

  Environmental mutation data originates from the MutationHandler script
  in Grow a Garden and is ordered according to the in–game display order.
*/

// Ordered list of all environmental mutations.  Growth mutations (Golden and
// Rainbow) are handled separately in the <select> element.
const mutationOrder = [
  "Eclipsed",
  "Meteoric",
  "Fried",
  "Drenched",
  "Tempestuous",
  "Shocked",
  "Aurora",
  "Choc",
  "Bloodlit",
  "Spaghetti",
  "Sliced",
  "Verdant",
  "Infected",
  "AncientAmber",
  "Twisted",
  "Alienlike",
  "FoxfireChakra",
  "CorruptChakra",
  "Cooked",
  "Chilled",
  "Heavenly",
  "Radioactive",
  "Celestial",
  "Windstruck",
  "Burnt",
  "Wet",
  "Friendbound",
  "Paradisal",
  "Clay",
  "Amber",
  "Lightcycle",
  "HoneyGlazed",
  "Frozen",
  "Corrupt",
  "OldAmber",
  "Subzero",
  "Touchdown",
  "Disco",
  "Sandy",
  "Sauce",
  "Moonlit",
  "Jackpot",
  "Cloudtouched",
  "Toxic",
  "Tranquil",
  "Enlightened",
  "Meatball",
  "CorruptFoxfireChakra",
  "HarmonisedFoxfireChakra",
  "HarmonisedChakra",
  "Static",
  "Pasta",
  "Chakra",
  "Plasma",
  "Molten",
  "Dawnbound",
  "Ceramic",
  "Wiltproof",
  "Pollinated",
  "Zombified",
  "Blitzshock",
  "Sundried",
  "Voidtouched",
  "Galactic",
  "Acidic",
];

// Multipliers for each environmental mutation.  Missing values default to
// 1× (meaning no effect).  Growth mutations are not listed here.
const mutationMultipliers = {
  Eclipsed: 30,
  Meteoric: 125,
  Fried: 8,
  Drenched: 5,
  Tempestuous: 12,
  Shocked: 100,
  Aurora: 90,
  Choc: 2,
  Bloodlit: 4,
  Spaghetti: 15,
  Sliced: 50,
  Verdant: 4,
  Infected: 75,
  AncientAmber: 50,
  Twisted: 5,
  Alienlike: 100,
  FoxfireChakra: 90,
  CorruptChakra: 15,
  Cooked: 10,
  Chilled: 2,
  Heavenly: 5,
  Radioactive: 80,
  Celestial: 120,
  Windstruck: 2,
  Burnt: 4,
  Wet: 2,
  Friendbound: 70,
  Paradisal: 100,
  Clay: 5,
  Amber: 10,
  Lightcycle: 180,
  HoneyGlazed: 5,
  Frozen: 10,
  Corrupt: 20,
  OldAmber: 20,
  Subzero: 40,
  Touchdown: 105,
  Disco: 125,
  Sandy: 3,
  Sauce: 12,
  Moonlit: 2,
  Jackpot: 15,
  Cloudtouched: 5,
  Toxic: 12,
  Tranquil: 20,
  Enlightened: 120,
  Meatball: 18,
  CorruptFoxfireChakra: 25,
  HarmonisedFoxfireChakra: 190,
  HarmonisedChakra: 35,
  Static: 8,
  Pasta: 10,
  Chakra: 15,
  Plasma: 5,
  Molten: 25,
  Dawnbound: 150,
  Ceramic: 30,
  Wiltproof: 4,
  Pollinated: 3,
  Zombified: 25,
  Blitzshock: 50,
  Sundried: 85,
  Voidtouched: 135,
  Galactic: 120,
  Acidic: 6,
};

/**
 * List of crops to display in the crop selection area.  This is a small
 * representative subset drawn from Grow a Garden.  In future versions this
 * list could be expanded or generated dynamically.
 */
const crops = [
  "Aloe Vera",
  "Amber Spine",
  "Apple",
  "Artichoke",
  "Avocado",
  "Bamboo",
  "Banana",
  "Beanstalk",
  "Bee Balm",
  "Bell Pepper",
  "Bendboo",
  "Blood Banana",
  "Blueberry",
  "Bone Blossom",
  "Boneboo",
  "Burning Bud",
  "Cacao",
  "Cactus",
];

/**
 * Initialise the mutation list when the DOM is ready.  Generates a checkbox
 * for each mutation in order.
 */
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

/**
 * Initialise the crop list and search box.  Renders buttons for each crop
 * and filters them as the user types.  Selecting a crop highlights it.
 */
function initCrops() {
  const listEl = document.getElementById("cropList");
  const searchEl = document.getElementById("cropSearch");
  let selected = null;

  function render(filter = "") {
    listEl.innerHTML = "";
    const lowerFilter = filter.trim().toLowerCase();
    const filtered = crops.filter((c) =>
      c.toLowerCase().includes(lowerFilter)
    );
    filtered.forEach((name) => {
      const div = document.createElement("div");
      div.className = "crop-item";
      div.textContent = name;
      div.addEventListener("click", () => {
        // Deselect previous selection
        if (selected) {
          selected.classList.remove("selected");
        }
        div.classList.add("selected");
        selected = div;
        // Additional logic could be added here, for example auto-filling
        // base values for the selected crop.
      });
      listEl.appendChild(div);
    });
  }
  // Initial render
  render();
  // Filter on input
  searchEl.addEventListener("input", (e) => {
    render(e.target.value);
  });
}

/**
 * Calculate and display the results when the form is submitted.
 * @param {Event} event
 */
function handleSubmit(event) {
  event.preventDefault();
  // Read numeric inputs
  const baseValue = parseFloat(document.getElementById("baseValue").value) || 0;
  const weight = parseFloat(document.getElementById("weight").value) || 0;
  const baseWeight =
    parseFloat(document.getElementById("baseWeight").value) || 1;
  const quantity = parseInt(document.getElementById("quantity").value, 10) || 1;
  const growthSelect = document.getElementById("growth");
  const growthMulti =
    parseFloat(growthSelect.selectedOptions[0].dataset.multi) || 1;

  // Gather selected environmental mutations
  const selectedMutations = [];
  mutationOrder.forEach((name) => {
    const checkbox = document.getElementById(`mut-${name}`);
    if (checkbox && checkbox.checked) {
      selectedMutations.push(name);
    }
  });

  // Compute ΣMutations and the count
  let sumMultipliers = 0;
  selectedMutations.forEach((name) => {
    sumMultipliers += mutationMultipliers[name] || 0;
  });
  const mutationCount = selectedMutations.length;

  // Mutation multiplier formula
  const mutationMultiplier = growthMulti * (1 + sumMultipliers - mutationCount);

  // Weighted crop value
  // Avoid division by zero: if baseWeight is zero treat weight ratio as zero
  let cropValue = 0;
  if (baseWeight > 0) {
    const weightRatio = weight / baseWeight;
    cropValue = baseValue * Math.pow(weightRatio, 2);
  }

  // Total price
  const totalPrice = cropValue * mutationMultiplier * quantity;

  // Format numbers
  function formatNumber(num) {
    return Number.isFinite(num)
      ? num.toLocaleString(undefined, { maximumFractionDigits: 2 })
      : "0";
  }

  // Build display line in correct order
  const displayLine = selectedMutations.join(" • ");

  // Update UI
  document.getElementById("mutationDisplay").textContent =
    displayLine || "(none)";
  document.getElementById("mutationMultiplier").textContent =
    formatNumber(mutationMultiplier);
  document.getElementById("cropValue").textContent = formatNumber(cropValue);
  document.getElementById("totalPrice").textContent = formatNumber(totalPrice);
  document.getElementById("results").hidden = false;
}

// Initialise and bind events on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  initCrops();
  initMutations();
  document.getElementById("calc-form").addEventListener("submit", handleSubmit);
});
