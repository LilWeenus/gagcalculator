export const mutationOrder = [
  "Eclipsed", "Meteoric", "Fried", "Drenched", "Tempestuous", "Shocked", "Aurora", "Choc", "Bloodlit", "Spaghetti", 
  "Sliced", "Verdant", "Infected", "Junkshock", "AncientAmber", "Twisted", "Alienlike", "FoxfireChakra", 
  "CorruptChakra", "Cooked", "Chilled", "Heavenly", "Radioactive", "Aromatic", "Boil", "Celestial", "Windstruck", 
  "Burnt", "Wet", "Friendbound", "Paradisal", "Lightcycle", "Clay", "Amber", "Subzero", "HoneyGlazed", "Frozen", 
  "Corrupt", "OldAmber", "Touchdown", "Disco", "Jackpot", "Sandy", "Sauce", "Moonlit", "Oil", "Cloudtouched", 
  "Toxic", "Tranquil", "Enlightened", "Meatball", "CorruptFoxfireChakra", "HarmonisedFoxfireChakra", "HarmonisedChakra", 
  "Static", "Pasta", "Chakra", "Plasma", "Molten", "Dawnbound", "Ceramic", "Wiltproof", "Pollinated", 
  "Zombified", "Blitzshock", "Sundried", "Voidtouched", "Galactic", "Acidic"
];

export const mutationMultipliers = {
  Eclipsed: 30, Meteoric: 125, Fried: 8, Drenched: 5, Tempestuous: 12, Shocked: 100,
  Aurora: 90, Choc: 2, Bloodlit: 4, Spaghetti: 15, Sliced: 50, Verdant: 4, Infected: 75,
  AncientAmber: 50, Twisted: 5, Alienlike: 100, FoxfireChakra: 90, CorruptChakra: 15,
  Cooked: 10, Chilled: 2, Heavenly: 5, Radioactive: 80, Celestial: 120, Windstruck: 2,
  Burnt: 4, Wet: 2, Friendbound: 70, Paradisal: 100, Clay: 5, Amber: 10, Lightcycle: 180,
  HoneyGlazed: 5, Frozen: 10, Corrupt: 20, OldAmber: 20, Subzero: 40, Touchdown: 105,
  Disco: 125, Sandy: 3, Sauce: 3, Moonlit: 2, Jackpot: 15, Cloudtouched: 5, Toxic: 12,
  Tranquil: 20, Enlightened: 120, Meatball: 3, CorruptFoxfireChakra: 25,
  HarmonisedFoxfireChakra: 190, HarmonisedChakra: 35, Static: 8, Pasta: 4, Chakra: 15,
  Plasma: 5, Molten: 25, Dawnbound: 150, Ceramic: 30, Wiltproof: 4, Pollinated: 3,
  Zombified: 25, Blitzshock: 50, Sundried: 85, Voidtouched: 135, Galactic: 120, Acidic: 6,
  Aromatic: 15, Boil: 15, Oil: 15, Junkshock: 45
};

// Optional: mark mutations as unreleased/hidden by default in the UI list.
// Set a mutation name to true to treat it as unreleased. Example:
// unreleasedFlags = { MythicalThing: true };
export const unreleasedFlags = {
  // "ExampleUnreleased": true,
  "Eclipsed": true,
  "Wiltproof": true,
  "Lightcycle": true,
  "Enlightened": true
  
};

// Default visibility for unreleased mutations in the UI
export const showUnreleasedDefault = false;

// Colors extracted from Roblox MutationHandler.lua (Color3.fromRGB values)
export const mutationColors = {
  Shocked: [255, 255, 100],
  Windstruck: [162, 185, 209],
  Dawnbound: [255, 213, 0],
  Twisted: [191, 191, 191],
  Cloudtouched: [225, 255, 255],
  Voidtouched: [225, 0, 255],
  Wet: [64, 164, 223],
  Fried: [223, 110, 34],
  Molten: [223, 100, 0],
  Sliced: [223, 223, 223],
  Alienlike: [0, 223, 197],
  Galactic: [243, 148, 255],
  Aurora: [99, 89, 175],
  Chilled: [135, 206, 250],
  Sundried: [207, 93, 0],
  Wiltproof: [0, 222, 155],
  Drenched: [0, 55, 228],
  Verdant: [34, 139, 34],
  Paradisal: [176, 240, 0],
  Frozen: [108, 184, 255],
  Disco: [255, 105, 180],
  Choc: [92, 64, 51],
  Plasma: [208, 43, 137],
  Heavenly: [255, 249, 160],
  Burnt: [40, 40, 40],
  Cooked: [210, 120, 60],
  Moonlit: [153, 141, 255],
  Bloodlit: [200, 0, 0],
  Zombified: [128, 199, 127],
  Celestial: [255, 0, 255],
  Meteoric: [73, 29, 193],
  HoneyGlazed: [255, 204, 0],
  Pollinated: [255, 170, 0],
  Amber: [255, 192, 0],
  OldAmber: [252, 106, 33],
  AncientAmber: [204, 68, 0],
  Sandy: [212, 191, 141],
  Clay: [147, 129, 122],
  Ceramic: [234, 184, 146],
  Friendbound: [255, 0, 127],
  Tempestuous: [143, 163, 180],
  Infected: [67, 167, 0],
  Radioactive: [98, 255, 0],
  Chakra: [255, 80, 65],
  FoxfireChakra: [255, 80, 65],
  CorruptChakra: [0, 85, 255],
  CorruptFoxfireChakra: [0, 0, 255],
  Static: [255, 255, 0],
  HarmonisedChakra: [170, 85, 255],
  HarmonisedFoxfireChakra: [170, 85, 255],
  Pasta: [255, 223, 128],
  Sauce: [200, 45, 35],
  Meatball: [139, 69, 19],
  Spaghetti: [255, 140, 70],
  Eclipsed: [44, 111, 162],
  Enlightened: [255, 255, 255],
  Tranquil: [255, 255, 255],
  Corrupt: [176, 23, 26],
  Toxic: [85, 255, 0],
  Acidic: [224, 245, 129],
  Jackpot: [132, 245, 112],
  Blitzshock: [0, 192, 245],
  Touchdown: [203, 95, 0],
  Subzero: [0, 255, 255],
  Lightcycle: [255, 255, 255]
};