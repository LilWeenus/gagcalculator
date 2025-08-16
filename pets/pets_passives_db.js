// Auto-generated from Roblox Lua registries: PassiveRegistry.lua & PetList.lua
// Fields preserved as closely as possible; cooldowns etc. are in SECONDS unless noted by Formatter.
export const DB = {
  "passives": {
    "Milk of the Land": {
      "Description": "All plants within <Range> studs grow <Multiplier>x faster!",
      "States": {
        "Range": {
          "Base": 10,
          "Scale": 0.1
        },
        "Multiplier": {
          "Base": 1.25,
          "Scale": 0.0125
        }
      }
    },
    "For the Blue Colony": {
      "Description": "<Chance>% chance harvested fruit duplicate! Rarer crops have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "For the Red Colony": {
      "Description": "<Chance>% chance harvested fruit duplicate! Rarer crops have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Base": 5,
          "Scale": 0.1
        }
      }
    },
    "Candy Harvester": {
      "Description": "<Chance>% extra chance for Candy type fruit to duplicate!",
      "States": {
        "Chance": {
          "Base": 5,
          "Scale": 0.15
        }
      }
    },
    "Slow and Steady": {
      "Description": "<Chance>% extra chance harvested plants drop seeds. Rarer plants have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Max": 10,
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Digging Buddy": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 60,
          "Scale": -1
        },
        "Chance": {
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Digging Friend": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 60,
          "Scale": -1
        },
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "Carrot Chomper": {
      "Description": "Every <Cooldown>s, eats a carrot for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 45,
          "Scale": -1
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.015
        }
      }
    },
    "Carrot Devourer": {
      "Description": "Every <Cooldown>s, eats a carrot for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 40,
          "Scale": -1
        },
        "Multiplier": {
          "Base": 3,
          "Scale": 0.03
        }
      }
    },
    "Cat Nap": {
      "Description": "Every <Cooldown>s, naps for <Duration>s. New fruit within <Range> studs will be <Multiplier>x larger!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 80,
          "Scale": -1
        },
        "Duration": {
          "Base": 10,
          "Scale": 0.1
        },
        "Range": {
          "Base": 10,
          "Scale": 0.1
        },
        "Multiplier": {
          "Base": 1.25,
          "Scale": 0.0025
        }
      }
    },
    "Lazy Nap": {
      "Description": "Every <Cooldown>s, naps for <Duration>s. New fruit within <Range> studs will be <Multiplier>x larger!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 90,
          "Scale": -1
        },
        "Duration": {
          "Base": 15,
          "Scale": 0.15
        },
        "Range": {
          "Base": 15,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.01
        }
      }
    },
    "Forester": {
      "Description": "<Chance>% chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Max": 5,
          "Base": 2.5,
          "Scale": 0.025
        }
      }
    },
    "Spotted Forester": {
      "Description": "<Chance>% chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Max": 10,
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Water Spray": {
      "Description": "Every <Cooldown>s, sprays water on a nearby plant.",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 30,
          "Scale": -1
        }
      }
    },
    "Eggcelerator": {
      "Description": "Increases egg hatch speed by <Multiplier>%!",
      "States": {
        "Multiplier": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "Better Eggcelerator": {
      "Description": "Increases egg hatch speed by <Multiplier>%!",
      "States": {
        "Multiplier": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Fertilizer Frenzy": {
      "Description": "Every <Cooldown>s, emits an aura for <Duration>s granting <Multiplier>x chance for new fruit to grow as variants within <Range> studs!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 120,
          "Scale": -1
        },
        "Duration": {
          "Base": 15,
          "Scale": 0.15
        },
        "Range": {
          "Base": 15,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 2,
          "Scale": 0.01
        }
      }
    },
    "Turtle Tinkerer": {
      "Description": "All Sprinklers last <Multiplier>% longer!",
      "States": {
        "Range": {
          "Base": 35,
          "Scale": 0.5
        },
        "Multiplier": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Cheeky Refund": {
      "Description": "<Chance>% chance to refund fruit back to your inventory. Rarer plants have lower chance to refund!",
      "States": {
        "Chance": {
          "Base": 2.5,
          "Scale": 0.025
        }
      }
    },
    "Premium Cheeky Refund": {
      "Description": "<Chance>% chance to refund fruit back to your inventory. Rarer plants have lower chance to refund!",
      "States": {
        "Chance": {
          "Base": 7.5,
          "Scale": 0.075
        }
      }
    },
    "Movement Variation": {
      "Description": " ",
      "States": {
        "Cooldown": {
          "Min": 8,
          "Base": 8,
          "Scale": 0
        }
      }
    },
    "Transmutation": {
      "Description": "Every <Cooldown>m, turns one random fruit gold!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 300,
          "Scale": -3,
          "Formatter": "ColonTime"
        }
      }
    },
    "Polar Express": {
      "Description": "Every <Cooldown>s, <Chance>% chance a nearby fruit becomes Chilled or Frozen!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 80,
          "Scale": -1
        },
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "Bamboozle": {
      "Description": "Every <Cooldown>m, eats bamboo for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 180,
          "Scale": -1,
          "Formatter": "ColonTime"
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.015
        }
      }
    },
    "Leaf Lover": {
      "Description": "Passive: All leafy plants grow <Multiplier>x faster!",
      "States": {
        "Range": {
          "Base": 25,
          "Scale": 0
        },
        "Multiplier": {
          "Base": 1.45,
          "Scale": 0.15
        }
      }
    },
    "Zen Zone": {
      "Description": "Every <Cooldown>s, prays for <Duration>s granting <Multiplier>x variant chance within <Range> studs!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 80,
          "Scale": -1
        },
        "Duration": {
          "Base": 10,
          "Scale": 0.1
        },
        "Range": {
          "Base": 10,
          "Scale": 0.1
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.005
        }
      }
    },
    "Prickly Lover": {
      "Description": "Grants prickly plants in <Range> studs a <Multiplier>x size bonus!",
      "States": {
        "Multiplier": {
          "Max": 2.2,
          "Base": 1.5,
          "Scale": 0.015
        },
        "Range": {
          "Base": 30,
          "Scale": 0.2
        }
      }
    },
    "Nocturnal Nursery": {
      "Description": "Every <Cooldown>s, goes to the egg with the highest hatch time, and reduces its hatch time by <Amount>s!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 60,
          "Scale": -1
        },
        "Amount": {
          "Base": 25,
          "Scale": 0.25
        }
      }
    },
    "Treasure Hunter": {
      "Description": "Every <Cooldown>s, digs down underground to find treasure. Can dig up gear or sheckles!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 80,
          "Scale": -1
        }
      }
    },
    "Croak": {
      "Description": "Every <Cooldown>m, croaks and a random nearby plant will advance growth by 24 hours!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 604.5,
          "Scale": -6,
          "Formatter": "ColonTime"
        }
      }
    },
    "Echo Croak": {
      "Description": "Every <Cooldown>m, croaks and a random nearby plant will advance growth by 24 hours!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 303,
          "Scale": -6,
          "Formatter": "ColonTime"
        }
      }
    },
    "Prince of the Night": {
      "Description": "All active pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 0.2,
          "Scale": 0.04
        }
      }
    },
    "King of the Night": {
      "Description": "All active pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 0.2,
          "Scale": 0.04
        }
      }
    },
    "Rascal": {
      "Description": "Every <Cooldown>m, goes to another player's plot and steals (duplicate) a random crop and gives it to you!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 904.5,
          "Scale": -4,
          "Formatter": "ColonTime"
        }
      }
    },
    "Whisker Wisdom": {
      "Description": "Every <Cooldown>m, gains additional <Amount> bonus experience!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 603,
          "Scale": -8,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 500,
          "Scale": 8
        }
      }
    },
    "Scamper": {
      "Description": "Grants additional <Chance>% increase to player movement speed!",
      "States": {
        "Chance": {
          "Base": 12,
          "Scale": 0.1
        }
      }
    },
    "Seed Stash": {
      "Description": "<Chance>% chance to not consume a use when using the Reclaimer!",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.3
        }
      }
    },
    "Nutty Apology": {
      "Description": "Gains an additional <Amount> xp per second!",
      "States": {
        "Amount": {
          "Max": 20,
          "Base": 3,
          "Scale": 0.3
        }
      }
    },
    "Whiskier Wisdom": {
      "Description": "Every <Cooldown>m, gains additional <Amount> bonus experience!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 503,
          "Scale": -7,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 750,
          "Scale": 11
        }
      }
    },
    "Cheese Hop": {
      "Description": "Grants additional <Chance>% increase to player jump height!",
      "States": {
        "Chance": {
          "Base": 12,
          "Scale": 0.1
        }
      }
    },
    "Fruit Harvester": {
      "Description": "<Chance>% extra chance for Fruit type crops to duplicate!",
      "States": {
        "Chance": {
          "Base": 5,
          "Scale": 0.1
        }
      }
    },
    "Scoundrel": {
      "Description": "Every <Cooldown>m, goes to another player's random crop tries to get a seed from it and gives it to you. If it succeeds it will try to steal again. Rarer seeds have less chance to succeed stealing!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 443,
          "Scale": -5,
          "Formatter": "ColonTime"
        }
      }
    },
    "Zombify": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Zombified!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 1600,
          "Scale": -18,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Crimson Cradle": {
      "Description": "Every <Cooldown>s, goes to the egg with the highest hatch time, and reduces its hatch time by <Amount>s!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 60,
          "Scale": -1
        },
        "Amount": {
          "Base": 45,
          "Scale": 0.45
        }
      }
    },
    "Monarch of Midnight": {
      "Description": "All active pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 0.5,
          "Scale": 0.08
        }
      }
    },
    "Sanguine Spike": {
      "Description": "Grants prickly plants in <Range> studs a <Multiplier>x size bonus!",
      "States": {
        "Multiplier": {
          "Max": 3.2,
          "Base": 2,
          "Scale": 0.02
        },
        "Range": {
          "Base": 30,
          "Scale": 0.2
        }
      }
    },
    "Prickly Blessing": {
      "Description": "Grants prickly plants in <Range> studs a <Multiplier>x variant chance bonus!",
      "States": {
        "Multiplier": {
          "Max": 2.2,
          "Base": 1.15,
          "Scale": 0.0115
        },
        "Range": {
          "Base": 22,
          "Scale": 0.2
        }
      }
    },
    "Moon Nap": {
      "Description": "Every <Cooldown>s, naps for <Duration>s. New fruit within <Range> studs will be <Multiplier>x larger!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 70,
          "Scale": -1
        },
        "Duration": {
          "Base": 20,
          "Scale": 0.2
        },
        "Range": {
          "Base": 20,
          "Scale": 0.2
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.01
        }
      }
    },
    "Moon Harvest": {
      "Description": "<Chance>% chance Night type fruit stays after harvest!",
      "States": {
        "Chance": {
          "Max": 25,
          "Base": 6,
          "Scale": 0.6
        }
      }
    },
    "Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and pollinates it, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1510,
          "Scale": -16,
          "Formatter": "ColonTime"
        }
      }
    },
    "Beeter Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and pollinates it, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1210,
          "Scale": -12,
          "Formatter": "ColonTime"
        }
      }
    },
    "Flower Harvest": {
      "Description": "<Chance>% chance Flower type fruit stays after harvest!",
      "States": {
        "Chance": {
          "Max": 5,
          "Base": 1,
          "Scale": 0.1
        }
      }
    },
    "Wanna-Bee": {
      "Description": "Every <Cooldown>m, goes to a nearby fruit and tries to pollinate it, but its not a bee so it fails and turns it to Honey Glazed instead :(",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1510,
          "Scale": -16,
          "Formatter": "ColonTime"
        }
      }
    },
    "Queen Pollinator": {
      "Description": "Every <Cooldown>m, a nearby fruit gets magically pollinated, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1220,
          "Scale": -16,
          "Formatter": "ColonTime"
        }
      }
    },
    "For the Queen": {
      "Description": "Every <Cooldown>m, the pet with the highest cooldown refreshes its ability!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1328,
          "Scale": -16,
          "Formatter": "ColonTime"
        }
      }
    },
    "Wasp Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and pollinates it, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1800,
          "Scale": -18,
          "Formatter": "ColonTime"
        }
      }
    },
    "Stinger": {
      "Description": "Every <Cooldown>m, stings a random pet and advances its ability cooldown by <Amount>s!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 602,
          "Scale": -6,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 60,
          "Scale": 0.6
        }
      }
    },
    "Tarantula Stinger": {
      "Description": "Every <Cooldown>m, stings a random pet and advances its ability cooldown by <Amount>s!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 302,
          "Scale": -3,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 80,
          "Scale": 0.8
        }
      }
    },
    "Silksong": {
      "Description": "Every <Cooldown>m, sings to a random pet and restores its hunger to 100%!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 763,
          "Scale": -7,
          "Formatter": "ColonTime"
        }
      }
    },
    "Rainbow Flutter": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit with 5+ mutations, removes all mutations from it and turns it Rainbow! Ignores favorited fruit.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 1808,
          "Scale": -18,
          "Formatter": "ColonTime"
        }
      }
    },
    "Disco Disco": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Disco!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 906,
          "Scale": -12,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Base": 14,
          "Scale": 1
        }
      }
    },
    "Let Him Cook": {
      "Description": "Every <Cooldown>m, <Chance>% chance to cook a nearby fruit. Usually Burnt, but occasionally Cooked!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 806,
          "Scale": -12,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.25
        }
      }
    },
    "King of the Grill": {
      "Description": "All active pets gain an additional <Chance> XP/s! Also very tasty!",
      "States": {
        "Chance": {
          "Base": 0.15,
          "Scale": 0.03
        }
      }
    },
    "Pack Bee": {
      "Description": "Increases player backpack size by <Chance>!",
      "States": {
        "Chance": {
          "Base": 30,
          "Scale": 1
        }
      }
    },
    "You\\'re a Star": {
      "Description": "Gains an additional <Amount> xp per second!",
      "States": {
        "Amount": {
          "Max": 25,
          "Base": 5,
          "Scale": 0.5
        }
      }
    },
    "Pinch Pocket": {
      "Description": "Every <Cooldown>m goes to another random player and pinches them for their money and grants you <Amount> - <AmountHigh> sheckles. Pinched player does not lose sheckles.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 378,
          "Scale": -4,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 225,
          "Scale": 25
        },
        "AmountHigh": {
          "Base": 425,
          "Scale": 25
        }
      }
    },
    "Scavenger": {
      "Description": "Shoveling plants have a <Chance>% chance to drop the equivalent seed! Does not work on fruit",
      "States": {
        "Chance": {
          "Max": 8,
          "Base": 3,
          "Scale": 0.3
        }
      }
    },
    "Tropical Lover": {
      "Description": "Grants all tropical plants within <Range> studs, a <Multiplier>x size bonus!",
      "States": {
        "Multiplier": {
          "Max": 2.1,
          "Base": 1.2,
          "Scale": 0.05
        },
        "Range": {
          "Base": 25,
          "Scale": 0.25
        }
      }
    },
    "Tropical Blessing": {
      "Description": "Grants all tropical plants within <Range> studs, a <Multiplier>x variant chance bonus!",
      "States": {
        "Multiplier": {
          "Max": 8,
          "Base": 1.15,
          "Scale": 0.1
        },
        "Range": {
          "Base": 25,
          "Scale": 0.25
        }
      }
    },
    "Flamboyance": {
      "Description": "Every <Cooldown>m, stands on one leg for <Duration>s. All plants and fruits within <Range> studs will grow <Multiplier>x faster!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 240,
          "Scale": -2,
          "Formatter": "ColonTime"
        },
        "Duration": {
          "Base": 15,
          "Scale": 0.5
        },
        "Range": {
          "Base": 13,
          "Scale": 0.3
        },
        "Multiplier": {
          "Base": 15,
          "Scale": 0.25
        }
      }
    },
    "Shell Share": {
      "Description": "Every <Cooldown>m, shares its wisdom with a random pet, granting <Amount> bonus experience!",
      "States": {
        "Cooldown": {
          "Min": 20,
          "Base": 720,
          "Scale": -6.5,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 990,
          "Scale": 14
        }
      }
    },
    "Water Splash": {
      "Description": "Every <Cooldown>s, splashes water at a nearby fruit and it has a <Chance>% chance to become Wet!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 164,
          "Scale": -3
        },
        "Chance": {
          "Base": 12,
          "Scale": 0.2
        }
      }
    },
    "Seal the Deal": {
      "Description": "Selling pets have a <Chance>% chance to get the pet back as its egg equivalent!",
      "States": {
        "Chance": {
          "Max": 8,
          "Base": 2.5,
          "Scale": 0.22
        }
      }
    },
    "Helping Hands": {
      "Description": "When crafting, each material used in the recipe has a <Chance>% chance to not get consumed!",
      "States": {
        "Chance": {
          "Max": 7,
          "Base": 3,
          "Scale": 0.33
        }
      }
    },
    "Eggsperience": {
      "Description": "Pets hatched from eggs have a bonus 1 - <Chance> age to their age value!",
      "States": {
        "Chance": {
          "Max": 10,
          "Base": 4.5,
          "Scale": 0.5
        }
      }
    },
    "Utter Beauty": {
      "Description": "Every <Cooldown>m, fans its feathers and all active pets within <Range> studs will advance cooldown for their abilities by <Amount>s!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 606,
          "Scale": -6,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 65,
          "Scale": 0.6
        },
        "Range": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Chill Zone": {
      "Description": "All pets within <Range> studs won't lose hunger and will gain <Amount> XP every second!",
      "States": {
        "Amount": {
          "Base": 3,
          "Scale": 0.3
        },
        "Range": {
          "Base": 14.5,
          "Scale": 0.25
        }
      }
    },
    "Verdant Bird": {
      "Description": "Every <Cooldown>m, <Chance>% chance to mutate a nearby fruit, applying the Verdant mutation",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 524,
          "Scale": -5,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.5
        }
      }
    },
    "Mimicry": {
      "Description": "Every <Cooldown>m, mimics and copies an ability from another pet and performs its ability!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 1212,
          "Scale": -12,
          "Formatter": "ColonTime"
        }
      }
    },
    "Coiled Commerce": {
      "Description": "Buying from the seed/gear shop has a <Chance>% chance to duplicate the bought item!",
      "States": {
        "Chance": {
          "Max": 6,
          "Base": 1,
          "Scale": 0.25
        }
      }
    },
    "Lookout": {
      "Description": "Every <Cooldown>m goes to another pet and does a lookout. That pet advances cooldown by <Amount>s! Has a <Chance>% chance to do it again after each lookout.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 444,
          "Scale": -4.4,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 20,
          "Scale": 0.5
        },
        "Chance": {
          "Max": 100,
          "Base": 15,
          "Scale": 0.25
        }
      }
    },
    "Summer Regeneration": {
      "Description": "<Chance>% chance Summer type fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Max": 13,
          "Base": 6,
          "Scale": 0.2
        }
      }
    },
    "Cloudtouched Bird": {
      "Description": "Every <Cooldown>m, <Chance>% chance to mutate a nearby fruit, applying the Cloudtouched mutation!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 486,
          "Scale": -4,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.5
        }
      }
    },
    "Sly": {
      "Description": "Every <Cooldown>m, goes to another player's random fruit, has a chance to copy 1 random mutation, and apply it to random fruit you own! The higher mutation multiplier the rarer chance to copy.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 1350,
          "Scale": -13,
          "Formatter": "ColonTime"
        }
      }
    },
    "Hamster Wheel": {
      "Description": "Every <Cooldown>m, runs in a hamster wheel and boosts crafting speed by <Amount>% for <Duration>s!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 188,
          "Scale": -1.5,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 30,
          "Scale": 0.3
        },
        "Duration": {
          "Base": 18,
          "Scale": 0.5
        }
      }
    },
    "Hamster": {
      "Description": "Crafting speed is increased by <Chance>%!",
      "States": {
        "Chance": {
          "Max": 25,
          "Base": 15,
          "Scale": 0.5
        }
      }
    },
    "Wings of Freedom": {
      "Description": "Every <Cooldown>m, takes flight and spreads its wings. All eggs advanced their hatch time by <Amount>s! There's a <Chance>% chance for the time advance to be multiplied by <Multiplier>.",
      "States": {
        "Cooldown": {
          "Min": 424,
          "Base": 424,
          "Scale": 0,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Max": 70.4,
          "Base": 70.4,
          "Scale": 0
        },
        "Chance": {
          "Max": 70.4,
          "Base": 70.4,
          "Scale": 0
        },
        "Multiplier": {
          "Base": 1.8,
          "Scale": 0.18
        }
      }
    },
    "Clever Claws": {
      "Description": "<Chance>% chance fruit gets Amber mutation after collecting! Rarer plants have lesser chance to mutate.",
      "States": {
        "Chance": {
          "Base": 2,
          "Scale": 0.2
        }
      }
    },
    "Raptor Dance": {
      "Description": "Grants additional <Chance>% increase to player movement speed!",
      "States": {
        "Chance": {
          "Base": 14,
          "Scale": 0.25
        }
      }
    },
    "Tri-Horn": {
      "Description": "Every <Cooldown>m, rams into <Amount> random plants and advance their growth by <GrowthAmount>m! Has a <Chance>% chance to do it again each time.",
      "States": {
        "Cooldown": {
          "Min": 213,
          "Base": 213,
          "Scale": 0,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Max": 3,
          "Base": 3,
          "Scale": 0
        },
        "GrowthAmount": {
          "Max": 2013,
          "Base": 2013,
          "Scale": 0,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.15
        }
      }
    },
    "Prehistoric Doubling": {
      "Description": "<Chance>% chance harvested fruit duplicates! Rarer crops have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Base": 8,
          "Scale": 0.15
        }
      }
    },
    "Prehistoric Harvester": {
      "Description": "<Chance>% extra chance for Prehistoric type fruit to duplicate!",
      "States": {
        "Chance": {
          "Base": 5,
          "Scale": 0.1
        }
      }
    },
    "Air Time": {
      "Description": "Grants additional <Chance>% increase to player jump height!",
      "States": {
        "Chance": {
          "Base": 14,
          "Scale": 0.25
        }
      }
    },
    "Giant Incubator": {
      "Description": "Pets hatched from eggs have a <Chance>% increase in base size and weight! This size bonus is capped at 30% per egg and does not apply to Brontosauruses.",
      "States": {
        "Chance": {
          "Max": 30,
          "Base": 5.25,
          "Scale": 0.1
        }
      }
    },
    "Sky Reptile": {
      "Description": "Every <Cooldown>m, flaps its wings and sends out ripples of wind, causing <Amount> random fruit to get Windstruck, with a <Chance>% chance for Twisted to be applied as well!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 666,
          "Scale": -6,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 3,
          "Scale": 0.15
        },
        "Chance": {
          "Base": 18.2,
          "Scale": 0.25
        }
      }
    },
    "Apex Predator": {
      "Description": "Every <Cooldown>m, devours a random mutation from your garden, then roars, spreading that mutation to <Amount> other random fruits in your garden!",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 1224,
          "Scale": -12,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 3,
          "Scale": 0.2
        }
      }
    },
    "Crowbar Head": {
      "Description": "Every <Cooldown>s, goes to the cosmetic crate with the highest open time, and reduces its open time by <Amount>s! There is a <Chance>% chance for open time reduction to be multiplied by <Multiplier>x",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 82,
          "Scale": -1.8
        },
        "Amount": {
          "Base": 80,
          "Scale": 0.65
        },
        "Chance": {
          "Base": 25.5,
          "Scale": 0.25
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.2
        }
      }
    },
    "Dino Herd": {
      "Description": "All active Dinosaur type pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 0.6,
          "Scale": 0.06
        }
      }
    },
    "Crafty Dome": {
      "Description": "Grants a <Chance>% chance to duplicate a crafted item!",
      "States": {
        "Chance": {
          "Max": 25,
          "Base": 6,
          "Scale": 0.3
        }
      }
    },
    "Frilled Reptile": {
      "Description": "Every <Cooldown>m opens its frills and spits out venom! The venom spreads to <Number> other random pets, advancing cooldown by <AmountCD> OR granting <AmountXP> xp!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 846,
          "Scale": -8.4,
          "Formatter": "ColonTime"
        },
        "Number": {
          "Max": 5,
          "Base": 3,
          "Scale": 0.2
        },
        "AmountCD": {
          "Max": 100,
          "Base": 40,
          "Scale": 0.25
        },
        "AmountXP": {
          "Max": 1500,
          "Base": 500,
          "Scale": 40
        }
      }
    },
    "Armored Defender": {
      "Description": "When another player steals fruit from you, grants a <Chance>% chance you get the stolen fruit as well!",
      "States": {
        "Chance": {
          "Max": 35,
          "Base": 18.7,
          "Scale": 0.25
        }
      }
    },
    "Food Chain": {
      "Description": "Every <Cooldown>m, devours a random mutation from <Amount> fruits in your garden each, then roars, spreading those mutations to 1 random fruit in your garden! Prioritizes applying mutations to a favorited fruit.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 1224,
          "Scale": -12,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 3,
          "Scale": 0.2
        }
      }
    },
    "Rainbow Crowbar Head": {
      "Description": "Every <Cooldown>s, goes to the cosmetic crate with the highest open time, and reduces its open time by <Amount>s! There is a <Chance>% chance for open time reduction to be multiplied by <Multiplier>x",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 41,
          "Scale": -0.9
        },
        "Amount": {
          "Base": 160,
          "Scale": 1.3
        },
        "Chance": {
          "Base": 51,
          "Scale": 0.5
        },
        "Multiplier": {
          "Base": 3,
          "Scale": 0.4
        }
      }
    },
    "Rainbow Dino Herd": {
      "Description": "All active Dinosaur type pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 1.2,
          "Scale": 0.12
        }
      }
    },
    "Rainbow Crafty Dome": {
      "Description": "Grants a <Chance>% chance to duplicate a crafted item!",
      "States": {
        "Chance": {
          "Max": 50,
          "Base": 12,
          "Scale": 0.6
        }
      }
    },
    "Rainbow Frilled Reptile": {
      "Description": "Every <Cooldown>m opens its frills and spits out venom! The venom spreads to <Number> other random pets, advancing cooldown by <AmountCD> OR granting <AmountXP> xp!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 643,
          "Scale": -6.4,
          "Formatter": "ColonTime"
        },
        "Number": {
          "Max": 10,
          "Base": 3,
          "Scale": 0.2
        },
        "AmountCD": {
          "Max": 160,
          "Base": 80,
          "Scale": 1
        },
        "AmountXP": {
          "Max": 5000,
          "Base": 1000,
          "Scale": 80
        }
      }
    },
    "Rainbow Armored Defender": {
      "Description": "When another player steals fruit from you, grants a <Chance>% chance you get the stolen fruit as well!",
      "States": {
        "Chance": {
          "Max": 60,
          "Base": 31.4,
          "Scale": 0.5
        }
      }
    },
    "Rainbow Food Chain": {
      "Description": "Every <Cooldown>m, devours a random mutation from <Amount> fruits in your garden each, then roars, spreading those mutations to 1 random fruit in your garden! Prioritizes applying mutations to a favorited fruit.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 912,
          "Scale": -6,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Base": 6,
          "Scale": 0.4
        }
      }
    },
    "Man\\'s Best Tomodachi": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 60,
          "Scale": -1
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.05
        }
      }
    },
    "Playmate": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 60,
          "Scale": -1
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.1
        }
      }
    },
    "Bathe Time": {
      "Description": "As long as you have a Hot Spring in your garden: The pet bathes in it and boosts all pets passive by a small percentage",
      "States": {
        "Boost": {
          "Max": 6,
          "Base": 2,
          "Scale": 0.1
        }
      }
    },
    "Mischief": {
      "Description": "Every <Cooldown>m, causes mischief, doing random different actions in your garden!",
      "States": {
        "Cooldown": {
          "Min": 80,
          "Base": 640,
          "Scale": -3.6,
          "Formatter": "ColonTime"
        }
      }
    },
    "Balance and Harmony": {
      "Description": "Every <Cooldown>m, meditates for <Duration>s, nearby fruits in a <Range> studs have a <Chance>% chance every second to mutate into Tranquil!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 627,
          "Scale": -1,
          "Formatter": "ColonTime"
        },
        "Duration": {
          "Base": 10,
          "Scale": 0.1
        },
        "Range": {
          "Base": 15,
          "Scale": 0.1
        },
        "Chance": {
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Water Spirit": {
      "Description": "Every <Cooldown>m, sprays water on all fruits within <Range> studs, applying Wet mutation. Has a <Chance>% to replace Wet mutations already on fruit with Bloodlit mutation!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 514,
          "Scale": -4,
          "Formatter": "ColonTime"
        },
        "Range": {
          "Base": 20,
          "Scale": 0.2
        },
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "Nine-Tailed Myth": {
      "Description": "Every <Cooldown>m, goes to another player's crop, mutates it with <font color=\"rgb(255, 80, 65)\">Chakra</font> then steals (duplicate) and gives it to you! Very rare chance to mutate with <font color=\"rgb(255, 0, 0)\">Foxfire Chakra</font> mutation instead!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1344.5,
          "Scale": -6,
          "Formatter": "ColonTime"
        }
      }
    },
    "Fish of Fortune": {
      "Description": "When hatching eggs there is a <Chance>% chance to get the egg back! Cannot recover Premium/Exotic Eggs.",
      "States": {
        "Chance": {
          "Max": 8,
          "Base": 3,
          "Scale": 0.22
        }
      }
    },
    "Touchdown": {
      "Description": "Every <Cooldown>s, runs to the Gear Shop or Seed Shop (whichever is farther) and does a touchdown which awards you with 870 Sheckles or <Chance>% chance for a Watering Can instead!",
      "States": {
        "Cooldown": {
          "Min": 87,
          "Base": 87,
          "Scale": 0
        },
        "Chance": {
          "Max": 35,
          "Base": 20,
          "Scale": 0.33
        }
      }
    },
    "Fortune Cat": {
      "Description": "Every <Cooldown>m, waves and invites good fortune that grants <Chance>% chance to refund fruit back to your inventory for <Duration>s! Rarer fruit have rarer chance to refund.",
      "States": {
        "Cooldown": {
          "Min": 30,
          "Base": 143,
          "Scale": -0.6,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 15,
          "Base": 8,
          "Scale": 0.15
        },
        "Duration": {
          "Max": 22,
          "Base": 10,
          "Scale": 0.25
        }
      }
    },
    "Fat Snake": {
      "Description": "<Chance>% extra chance harvested plants drop seeds. Rarer plants have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Max": 10,
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Tree Spirit": {
      "Description": "<Chance>% chance Zen type fruit gets Tranquil mutation after collecting!",
      "States": {
        "Chance": {
          "Max": 12,
          "Base": 6,
          "Scale": 0.33
        }
      }
    },
    "Corrupted Tree Spirit": {
      "Description": "<Chance>% chance Zen type fruit gets Corrupt mutation after collecting!",
      "States": {
        "Chance": {
          "Max": 12,
          "Base": 6,
          "Scale": 0.33
        }
      }
    },
    "Lightning Beast": {
      "Description": "Every <Cooldown>m, devours a fruit with Shocked mutation for 1.5x sheckle value to Summon a chain of lightning to mutate <Amount> fruits with Static! During a Thunderstorm: <Chance>% chance for Shocked instead!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 622,
          "Scale": -2.6,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Max": 9,
          "Base": 4,
          "Scale": 0.15
        },
        "Chance": {
          "Max": 35,
          "Base": 20,
          "Scale": 0.15
        }
      }
    },
    "Water Diety": {
      "Description": "When selling fruits with Wet/Drenched mutation: There is a <Chance>% chance a random mutation from that fruit will be applied to a fruit in your garden!",
      "States": {
        "Chance": {
          "Max": 8,
          "Base": 4,
          "Scale": 0.1
        }
      }
    },
    "Nine-Tailed Curse": {
      "Description": "Every <Cooldown>m, launches cursed energy at 9 different fruits. Each fruit has <Chance>% to mutate with <font color=\"rgb(0, 85, 255)\">Corrupt Chakra</font> with a very rare chance for <font color=\"rgb(0, 0, 255)\">Corrupt Foxfire Chakra</font> instead!",
      "States": {
        "Cooldown": {
          "Min": 60,
          "Base": 1260,
          "Scale": -3.6,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 40,
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Rainbow Fortune Cat": {
      "Description": "Every <Cooldown>m, waves and invites good fortune that grants <Chance>% chance to refund fruit back to your inventory for <Duration>s! Rarer fruit have rarer chance to refund.",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 72,
          "Scale": -0.6,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 30,
          "Base": 15,
          "Scale": 0.3
        },
        "Duration": {
          "Max": 42,
          "Base": 20,
          "Scale": 0.25
        }
      }
    },
    "Rainbow Tree Spirit": {
      "Description": "<Chance>% chance Zen type fruit gets Tranquil mutation after collecting!",
      "States": {
        "Chance": {
          "Max": 16,
          "Base": 8,
          "Scale": 0.4
        }
      }
    },
    "Rainbow Nine-Tailed Curse": {
      "Description": "Every <Cooldown>m, launches cursed energy at 9 different fruits. Each fruit has <Chance>% to mutate with <font color=\"rgb(0, 85, 255)\">Corrupt Chakra</font> with a very rare chance for <font color=\"rgb(0, 0, 255)\">Corrupt Foxfire Chakra</font> instead!",
      "States": {
        "Cooldown": {
          "Min": 30,
          "Base": 630,
          "Scale": -3.6,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 50,
          "Base": 25,
          "Scale": 0.2
        }
      }
    },
    "Bagel and Carrots": {
      "Description": "Every <Cooldown>s, eats a carrot for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 45,
          "Scale": -1
        },
        "Multiplier": {
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Pancake Hunter": {
      "Description": "Every <Cooldown>s, digs down underground to find treasure. Can dig up gear or sheckles!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 80,
          "Scale": -1
        }
      }
    },
    "Sushi Express": {
      "Description": "Every <Cooldown>s, <Chance>% chance a nearby fruit becomes Chilled or Frozen",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 80,
          "Scale": -1
        },
        "Chance": {
          "Base": 15,
          "Scale": 0.15
        }
      }
    },
    "Sushi Time": {
      "Description": "Every <Cooldown>s, flings a sushi towards a random pet and feeds it for <Amount>% of its hunger",
      "States": {
        "Cooldown": {
          "Min": 100,
          "Base": 670,
          "Scale": -3.5,
          "Formatter": "ColonTime"
        },
        "Amount": {
          "Max": 0.5,
          "Base": 0.01,
          "Scale": 0.001,
          "Formatter": "Percentage"
        }
      }
    },
    "Al dente": {
      "Description": "Every <Cooldown>m, goes to a nearby fruit and does-a-cooking! Applying Pasta, Sauce or Meatball mutation!",
      "States": {
        "Cooldown": {
          "Min": 200,
          "Base": 845,
          "Scale": -7.5,
          "Formatter": "ColonTime"
        }
      }
    },
    "Friendly Frier": {
      "Description": "Every <Cooldown>m, increases a random pet's level by 1! Ability cannot be mimicked or refreshed.",
      "States": {
        "Cooldown": {
          "Min": 1200,
          "Base": 3632,
          "Scale": -36,
          "Formatter": "ColonTime"
        }
      }
    },
    "Mochi Marathon": {
      "Description": "All active Food type pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 1.5,
          "Scale": 0.15
        }
      }
    },
    "Radioactive Lizard": {
      "Description": "<Chance>% chance fruit gets Plasma mutation after collecting!",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.2
        }
      }
    },
    "Scorched Soil": {
      "Description": "Every <Cooldown>s, <Chance>% chance nearby fruit becomes Burnt!",
      "States": {
        "Cooldown": {
          "Min": 5,
          "Base": 80,
          "Scale": -1
        },
        "Chance": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Lightning Bug": {
      "Description": "Every <Cooldown>s, <Chance>% chance a nearby fruit becomes Shocked!",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 80,
          "Scale": -1
        },
        "Chance": {
          "Base": 3,
          "Scale": 0.03
        }
      }
    },
    "Golden Harvest": {
      "Description": "<Chance>% chance harvested fruit becomes Gold on harvest! Rarer crops have less chance to turn gold!",
      "States": {
        "Chance": {
          "Max": 35,
          "Base": 1,
          "Scale": 0.1
        }
      }
    },
    "Egg Laying": {
      "Description": "Every <Cooldown>m, lays a random pet egg from the pet egg shop. Will not lay eggs if you have no free egg equip slot",
      "States": {
        "Cooldown": {
          "Min": 15,
          "Base": 15,
          "Scale": -18,
          "Formatter": "ColonTime"
        }
      }
    },
    "Helpy Herbivore": {
      "Description": "Each time you feed a pet, <Chance>% of the hunger points restored are also awarded as experience for that pet! (Only the hunger that is successfully restored counts toward XP).",
      "States": {
        "Chance": {
          "Max": 50,
          "Base": 14.65,
          "Scale": 0.35
        }
      }
    },
    "Horsetail Herbivore": {
      "Description": "Every <Cooldown>m, eats a random fruit in your garden, and has a <Chance>% chance to spit out a Horsetail seed! Ignores favorited fruit.",
      "States": {
        "Cooldown": {
          "Min": 10,
          "Base": 82,
          "Scale": -1.8
        },
        "Chance": {
          "Base": 40,
          "Scale": 0.8
        }
      }
    },
    "Shocked Pet Mutation": {
      "Description": "<font color=\"rgb(255, 255, 100)\">SHOCKED: During a Thunderstorm: Every <Cooldown>s, has a <Chance>% chance to attract lightning, shocking nearby fruits!</font>",
      "States": {
        "Cooldown": {
          "Min": 45,
          "Base": 60,
          "Scale": -0.6
        },
        "Chance": {
          "Max": 30,
          "Base": 25,
          "Scale": 0.02
        }
      }
    },
    "Frozen Pet Mutation": {
      "Description": "<font color=\"rgb(108, 184, 255)\">FROZEN: Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Frozen!</font>",
      "States": {
        "Cooldown": {
          "Min": 30,
          "Base": 300,
          "Scale": -3,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 30,
          "Base": 20,
          "Scale": 0.03
        }
      }
    },
    "Windy Pet Mutation": {
      "Description": "<font color=\"rgb(162, 185, 209)\">WINDY: Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Windstruck!</font>",
      "States": {
        "Cooldown": {
          "Min": 30,
          "Base": 300,
          "Scale": -3,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 30,
          "Base": 20,
          "Scale": 0.03
        }
      }
    },
    "IronSkin Pet Mutation": {
      "Description": "<font color=\"rgb(206, 206, 206)\">IRONSKIN: When another player steals fruit from you, grants a <Chance>% chance you get the stolen fruit as well!</font>",
      "States": {
        "Chance": {
          "Max": 45,
          "Base": 35,
          "Scale": 0.2
        }
      }
    },
    "Radiant Pet Mutation": {
      "Description": "<font color=\"rgb(248, 108, 38)\">RADIANT: Every <Cooldown>m, emits sunshine at a random nearby plant and advances their growth by 24 hours!</font>",
      "States": {
        "Cooldown": {
          "Min": 1200,
          "Base": 1800,
          "Scale": -9,
          "Formatter": "ColonTime"
        }
      }
    },
    "Ascended Pet Mutation": {
      "Description": "<font color=\"rgb(247, 245, 184)\">ASCENDED: Every <Cooldown>m, a nearby fruit ascends to a higher realm, applying the Dawnbound mutation!</font>",
      "States": {
        "Cooldown": {
          "Min": 18000,
          "Base": 21621,
          "Scale": -21,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 90,
          "Base": 75,
          "Scale": 0.03
        }
      }
    },
    "Tiny Pet Mutation": {
      "Description": "<font color=\"rgb(173, 216, 230)\">TINY: Pet is very tiny! Has 20% slower hunger rate.</font>",
      "States": {
        "Amount": {
          "Base": -0.2,
          "Scale": 0
        }
      }
    },
    "Tiny Pet Mutation Bonus": {
      "Description": "<font color=\"rgb(173, 216, 230)\">TINY: Gains an additional <Amount> xp per second!</font>",
      "States": {
        "Amount": {
          "Max": 30,
          "Base": 5,
          "Scale": 0.15
        }
      }
    },
    "Mega Pet Mutation": {
      "Description": "<font color=\"rgb(255, 90, 90)\">MEGA: Pet is gigantic! Has 20% faster hunger rate.</font>",
      "States": {
        "Amount": {
          "Base": 0.2,
          "Scale": 0
        }
      }
    },
    "Mega Pet Mutation Bonus": {
      "Description": "<font color=\"rgb(255, 90, 90)\">MEGA: Gains an additional <Amount> xp per second!</font>",
      "States": {
        "Amount": {
          "Max": 40,
          "Base": 10,
          "Scale": 0.15
        }
      }
    },
    "Tranquil Pet Mutation": {
      "Description": "<font color=\"rgb(247, 245, 184)\">TRANQUIL: Every <Cooldown>m, a nearby fruit finds inner peace, applying the Tranquil mutation!</font>",
      "States": {
        "Cooldown": {
          "Min": 1000,
          "Base": 1500,
          "Scale": -3,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 30,
          "Base": 20,
          "Scale": 0.03
        }
      }
    },
    "Corrupted Pet Mutation": {
      "Description": "<font color=\"rgb(176, 23, 26)\">Corrupted: Every <Cooldown>m, a nearby fruit embraces the corruption, applying the Corrupted mutation!</font>",
      "States": {
        "Cooldown": {
          "Min": 1000,
          "Base": 1500,
          "Scale": -3,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 30,
          "Base": 20,
          "Scale": 0.03
        }
      }
    },
    "Fried Pet Mutation": {
      "Description": "<font color=\"rgb(209, 139, 0)\">Fried: Every <Cooldown>m, a nearby fruit is sizzled up, applying the Fried mutation!</font>",
      "States": {
        "Cooldown": {
          "Min": 700,
          "Base": 1220,
          "Scale": -5,
          "Formatter": "ColonTime"
        },
        "Chance": {
          "Max": 30,
          "Base": 20,
          "Scale": 0.02
        }
      }
    }
  },
  "pets": {
    "Dog": {
      "name": "Dog",
      "description": "Digging Buddy: Occasionally digs up a random seed",
      "icon": "rbxassetid://135018170520317",
      "rarity": "Common",
      "passives": [
        "Digging Buddy"
      ],
      "defaultHunger": 1000
    },
    "Golden Lab": {
      "name": "Golden Lab",
      "description": "Digging Friend: Occasionally digs up a random seed at a higher chance",
      "icon": "rbxassetid://99376934607716",
      "rarity": "Common",
      "passives": [
        "Digging Friend"
      ],
      "defaultHunger": 1200
    },
    "Bunny": {
      "name": "Bunny",
      "description": "Carrot Chomper: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)",
      "icon": "rbxassetid://85830855120751",
      "rarity": "Common",
      "passives": [
        "Carrot Chomper"
      ],
      "defaultHunger": 1100
    },
    "Black Bunny": {
      "name": "Black Bunny",
      "description": "Carrot Devourer: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)",
      "icon": "rbxassetid://86614624778104",
      "rarity": "Uncommon",
      "passives": [
        "Carrot Chomper"
      ],
      "defaultHunger": 1300
    },
    "Cat": {
      "name": "Cat",
      "description": "Cat Nap: Cat naps in a random spot in your farm, emitting an aura that boosts nearby fruit size",
      "icon": "rbxassetid://136444015144013",
      "rarity": "Uncommon",
      "passives": [
        "Cat Nap"
      ],
      "defaultHunger": 1400
    },
    "Deer": {
      "name": "Deer",
      "description": "Forester: When harvesting berry plants, there is a chance the fruit will remain",
      "icon": "rbxassetid://91926785467809",
      "rarity": "Uncommon",
      "passives": [
        "Forester"
      ],
      "defaultHunger": 2500
    },
    "Chicken": {
      "name": "Chicken",
      "description": "Eggcelerator: Decreases the time needed to hatch other eggs",
      "icon": "rbxassetid://108080824427369",
      "rarity": "Uncommon",
      "passives": [
        "Eggcelerator"
      ],
      "defaultHunger": 3400
    },
    "Orange Tabby": {
      "name": "Orange Tabby",
      "description": "Orange Tabby: Orange Tabby naps in a random spot in your farm, emitting an aura that boosts nearby fruit size",
      "icon": "rbxassetid://103360220936666",
      "rarity": "Rare",
      "passives": [
        "Lazy Nap"
      ],
      "defaultHunger": 1500
    },
    "Spotted Deer": {
      "name": "Spotted Deer",
      "description": "Forester: When harvesting berry plants, there is a chance the fruit will remain",
      "icon": "rbxassetid://126439207915258",
      "rarity": "Rare",
      "passives": [
        "Spotted Forester"
      ],
      "defaultHunger": 2500
    },
    "Rooster": {
      "name": "Rooster",
      "description": "Eggcelerator: Decreases the time needed to hatch other eggs",
      "icon": "rbxassetid://137107493326109",
      "rarity": "Rare",
      "passives": [
        "Better Eggcelerator"
      ],
      "defaultHunger": 4000
    },
    "Monkey": {
      "name": "Monkey",
      "description": "Cheeky Refund: 3% chance to get your fruit back when you sell it",
      "icon": "rbxassetid://113881196210664",
      "rarity": "Rare",
      "passives": [
        "Cheeky Refund"
      ],
      "defaultHunger": 7400
    },
    "Pig": {
      "name": "Pig",
      "description": "Fertilizer Frenzy: Occasionally releases a fertilizing AOE boosting variant chance",
      "icon": "rbxassetid://134476443266448",
      "rarity": "Rare",
      "passives": [
        "Fertilizer Frenzy"
      ],
      "defaultHunger": 5000
    },
    "Silver Monkey": {
      "name": "Silver Monkey",
      "description": "Cheeky Refund: 3% chance to get your fruit back when you sell it",
      "icon": "rbxassetid://136985272620600",
      "rarity": "Legendary",
      "passives": [
        "Premium Cheeky Refund"
      ],
      "defaultHunger": 8000
    },
    "Turtle": {
      "name": "Turtle",
      "description": "Turtle Tinkerer: Slowing aura that makes sprinklers last longer",
      "icon": "rbxassetid://92906330087175",
      "rarity": "Legendary",
      "passives": [
        "Turtle Tinkerer"
      ],
      "defaultHunger": 10000
    },
    "Cow": {
      "name": "Cow",
      "description": "Milk of the Land: Fertilizing aura that boosts nearby plant growth speed ",
      "icon": "rbxassetid://118832676475537",
      "rarity": "Legendary",
      "passives": [
        "Milk of the Land"
      ],
      "defaultHunger": 9500
    },
    "Sea Otter": {
      "name": "Sea Otter",
      "description": "Water Spray: Water's plants randomly like a watering can",
      "icon": "rbxassetid://94422445572440",
      "rarity": "Legendary",
      "passives": [
        "Water Spray"
      ],
      "defaultHunger": 30000
    },
    "Polar Bear": {
      "name": "Polar Bear",
      "description": "Polar Express: Occasionally sets a random nearby fruit cold, turning it into Chilled with a small chance for Frozen",
      "icon": "rbxassetid://72209118254193",
      "rarity": "Legendary",
      "passives": [
        "Polar Express"
      ],
      "defaultHunger": 20000
    },
    "Caterpillar": {
      "name": "Caterpillar",
      "description": "Leaf Lover Passive: Boost nearby Leafy plants growth rate",
      "icon": "rbxassetid://119651461526366",
      "rarity": "Legendary",
      "passives": [
        "Leaf Lover"
      ],
      "defaultHunger": 25000
    },
    "Snail": {
      "name": "Snail",
      "description": "Slow and Steady: Increased lucky harvest chance",
      "icon": "rbxassetid://80970021440625",
      "rarity": "Legendary",
      "passives": [
        "Slow and Steady"
      ],
      "defaultHunger": 12000
    },
    "Giant Ant": {
      "name": "Giant Ant",
      "description": "For the Blue Colony: Small chance to duplicate harvested plant & Prehistoric Harvester: Increased chance to duplicate harvested candy type plant",
      "icon": "rbxassetid://71413253805996",
      "rarity": "Mythical",
      "passives": [
        "For the Blue Colony",
        "Candy Harvester"
      ],
      "defaultHunger": 18000
    },
    "Praying Mantis": {
      "name": "Praying Mantis",
      "description": "Zen Zone: Prays, then gives plants in AOE Buff that increases the chance of gold fruit from plants",
      "icon": "rbxassetid://121485029406440",
      "rarity": "Mythical",
      "passives": [
        "Zen Zone"
      ],
      "defaultHunger": 55000
    },
    "Dragonfly": {
      "name": "Dragonfly",
      "description": "Transmutation: Every now and then turns a fruit to gold",
      "icon": "rbxassetid://118484611393651",
      "rarity": "Divine",
      "passives": [
        "Transmutation"
      ],
      "defaultHunger": 100000
    },
    "Panda": {
      "name": "Panda",
      "description": "Bamboozle: Waddles to bamboo, eats it, and grants bonus sheckles (more than normal value)",
      "icon": "rbxassetid://107090327345246",
      "rarity": "Legendary",
      "passives": [
        "Bamboozle"
      ],
      "defaultHunger": 20000
    },
    "Hedgehog": {
      "name": "Hedgehog",
      "description": "Prickly Lover: Makes nearby prickly fruit grow bigger",
      "icon": "rbxassetid://83544966481425",
      "rarity": "Rare",
      "passives": [
        "Prickly Lover"
      ],
      "defaultHunger": 30000
    },
    "Kiwi": {
      "name": "Kiwi",
      "description": "Nocturnal Nursery: Occasionally reduces the hatch time of the egg with the most hatch time left",
      "icon": "rbxassetid://104651906442347",
      "rarity": "Rare",
      "passives": [
        "Nocturnal Nursery"
      ],
      "defaultHunger": 50000
    },
    "Mole": {
      "name": "Mole",
      "description": "Treasure Hunter: Will occasionally dig down to find gear or sheckles",
      "icon": "rbxassetid://79089804794269",
      "rarity": "Legendary",
      "passives": [
        "Treasure Hunter"
      ],
      "defaultHunger": 50000
    },
    "Frog": {
      "name": "Frog",
      "description": "Croak: Will occasionally advance a nearby plant's growth by 24 hours",
      "icon": "rbxassetid://96930166899467",
      "rarity": "Legendary",
      "passives": [
        "Croak"
      ],
      "defaultHunger": 50000
    },
    "Echo Frog": {
      "name": "Echo Frog",
      "description": "Echo Croak: Will occasionally advance a nearby plant's growth by 24 hours",
      "icon": "rbxassetid://102271225890686",
      "rarity": "Mythical",
      "passives": [
        "Echo Croak"
      ],
      "defaultHunger": 50000
    },
    "Raccoon": {
      "name": "Raccoon",
      "description": "Rascal: Occasionally steals (duplicates) fruit from other player's plot and hands it to you",
      "icon": "rbxassetid://136232391555861",
      "rarity": "Divine",
      "passives": [
        "Rascal"
      ],
      "defaultHunger": 45000
    },
    "Night Owl": {
      "name": "Night Owl",
      "description": "King of the Night: Grants bonus experience per second gain to all active pets.",
      "icon": "rbxassetid://101760640498094",
      "rarity": "Mythical",
      "passives": [
        "King of the Night",
        "Movement Variation"
      ],
      "defaultHunger": 50000
    },
    "Owl": {
      "name": "Owl",
      "description": "Prince of the Night: Grants bonus experience per second gain to all active pets.",
      "icon": "rbxassetid://138016343005291",
      "rarity": "Mythical",
      "passives": [
        "Prince of the Night",
        "Movement Variation"
      ],
      "defaultHunger": 50000
    },
    "Grey Mouse": {
      "name": "Grey Mouse",
      "description": "Whisker Wisdom: Occasionally gains bonus experience & Scamper: Increase player movement speed",
      "icon": "rbxassetid://116310390398341",
      "rarity": "Legendary",
      "passives": [
        "Whisker Wisdom",
        "Scamper"
      ],
      "defaultHunger": 15000
    },
    "Squirrel": {
      "name": "Squirrel",
      "description": "Seed Stash: Grants a chance to not consume a use when using the reclaimer & Nutty Apology: Gains additional XP per second",
      "icon": "rbxassetid://96950434895806",
      "rarity": "Legendary",
      "passives": [
        "Seed Stash",
        "Nutty Apology"
      ],
      "defaultHunger": 15000
    },
    "Brown Mouse": {
      "name": "Brown Mouse",
      "description": "Whiskier Wisdom: Occasionally gains bonus experience & Cheese Hop: Increase player jump height",
      "icon": "rbxassetid://94641319183999",
      "rarity": "Legendary",
      "passives": [
        "Whiskier Wisdom",
        "Cheese Hop"
      ],
      "defaultHunger": 15000
    },
    "Red Giant Ant": {
      "name": "Red Giant Ant",
      "description": "For the Red Colony: Small chance to duplicate harvested plant & Fruit Harvester: Increased chance to duplicate harvested fruit type plant",
      "icon": "rbxassetid://89449712431551",
      "rarity": "Mythical",
      "passives": [
        "For the Red Colony",
        "Fruit Harvester"
      ],
      "defaultHunger": 15000
    },
    "Red Fox": {
      "name": "Red Fox",
      "description": "Scoundrel: Every <Cooldown>m, goes to another player's plot and tries to steal a seed from a random plant. The rarer the plant, the harder it is to succeed!",
      "icon": "rbxassetid://116662854190616",
      "rarity": "Divine",
      "passives": [
        "Scoundrel"
      ],
      "defaultHunger": 35000
    },
    "Chicken Zombie": {
      "name": "Chicken Zombie",
      "description": "Zombify: Occasionally has a chance to zombify a nearby random fruit & Eggcelerator: Decreases the time needed to hatch other eggs",
      "icon": "rbxassetid://108581559611673",
      "rarity": "Mythical",
      "passives": [
        "Zombify",
        "Eggcelerator"
      ],
      "defaultHunger": 35000
    },
    "Blood Hedgehog": {
      "name": "Blood Hedgehog",
      "description": "Sanguine Spike: Makes nearby prickly fruit have increased variant chance and grow bigger",
      "icon": "rbxassetid://76471191139414",
      "rarity": "Legendary",
      "passives": [
        "Sanguine Spike",
        "Prickly Blessing"
      ],
      "defaultHunger": 30000
    },
    "Blood Kiwi": {
      "name": "Blood Kiwi",
      "description": "Crimson Cradle: Occasionally reduces the egg hatch time and boosts egg hatch speed",
      "icon": "rbxassetid://87343374343285",
      "rarity": "Legendary",
      "passives": [
        "Crimson Cradle",
        "Better Eggcelerator"
      ],
      "defaultHunger": 45000
    },
    "Blood Owl": {
      "name": "Blood Owl",
      "description": "Monarch of Midnight: Grants bonus experience per second gain to all active pets",
      "icon": "rbxassetid://81262783747840",
      "rarity": "Divine",
      "passives": [
        "Monarch of Midnight",
        "Movement Variation"
      ],
      "defaultHunger": 50000
    },
    "Moon Cat": {
      "name": "Moon Cat",
      "description": "Moon Nap: Moon cat naps in a random spot in your farm, and boosts nearby fruit size & Moon Harvest: Grants chance for Night type plants to replant when harvested ",
      "icon": "rbxassetid://72392850111255",
      "rarity": "Legendary",
      "passives": [
        "Moon Nap",
        "Moon Harvest"
      ],
      "defaultHunger": 2400
    },
    "Bee": {
      "name": "Bee",
      "description": "Pollinator: Occasionally pollinates fruit",
      "icon": "rbxassetid://114116135745614",
      "rarity": "Uncommon",
      "passives": [
        "Pollinator"
      ],
      "defaultHunger": 25000
    },
    "Honey Bee": {
      "name": "Honey Bee",
      "description": "Beeter Pollinator: Occasionally pollinates fruit",
      "icon": "rbxassetid://134999468799162",
      "rarity": "Rare",
      "passives": [
        "Beeter Pollinator"
      ],
      "defaultHunger": 25000
    },
    "Petal Bee": {
      "name": "Petal Bee",
      "description": "Pollinator: Occasionally pollinates fruit & Flower Harvest: Harvested flowers have a chance to stay",
      "icon": "rbxassetid://137924182648564",
      "rarity": "Legendary",
      "passives": [
        "Pollinator",
        "Flower Harvest"
      ],
      "defaultHunger": 25000
    },
    "Bear Bee": {
      "name": "Bear Bee",
      "description": "Wanna-Bee: Occasionally tries to pollinate fruit, but it just ends up being Honey-Glazed",
      "icon": "rbxassetid://97465846056354",
      "rarity": "Mythical",
      "passives": [
        "Wanna-Bee"
      ],
      "defaultHunger": 45000
    },
    "Queen Bee": {
      "name": "Queen Bee",
      "description": "Queen Pollinator: Occasionally pollinates fruit instantly & For the Queen: Occasionally refrehes the pet with the highest cooldown ability",
      "icon": "rbxassetid://127281358672581",
      "rarity": "Divine",
      "passives": [
        "Queen Pollinator",
        "For the Queen"
      ],
      "defaultHunger": 65000
    },
    "Wasp": {
      "name": "Wasp",
      "description": "Wasp Pollinator: Occasionally pollinates fruit & Stinger: Occasionally stings pet with highest cooldown advancing cooldown",
      "icon": "rbxassetid://72767862942880",
      "rarity": "Uncommon",
      "passives": [
        "Wasp Pollinator",
        "Stinger"
      ],
      "defaultHunger": 28000
    },
    "Tarantula Hawk": {
      "name": "Tarantula Hawk",
      "description": "Wasp Pollinator: Occasionally pollinates fruit & Tarantula Stinger: Occasionally stings pet with highest cooldown advancing cooldown",
      "icon": "rbxassetid://126203792467378",
      "rarity": "Rare",
      "passives": [
        "Pollinator",
        "Tarantula Stinger"
      ],
      "defaultHunger": 28000
    },
    "Moth": {
      "name": "Moth",
      "description": "Silksong: Sings to a random pet and magically restore its hunger",
      "icon": "rbxassetid://134180528391091",
      "rarity": "Legendary",
      "passives": [
        "Silksong"
      ],
      "defaultHunger": 25000
    },
    "Butterfly": {
      "name": "Butterfly",
      "description": "Rainbow Flutter: Occasionally flies to a fruit with 4+ mutations, removes all mutations from it and converts it into rainbow. Ignores favorited fruit",
      "icon": "rbxassetid://119048229505161",
      "rarity": "Mythical",
      "passives": [
        "Rainbow Flutter"
      ],
      "defaultHunger": 26000
    },
    "Disco Bee": {
      "name": "Disco Bee",
      "description": "Disco Disco: Occasionally has a chance to turn a nearby fruit into Disco",
      "icon": "rbxassetid://139406192899443",
      "rarity": "Divine",
      "passives": [
        "Disco Disco"
      ],
      "defaultHunger": 25000
    },
    "Cooked Owl": {
      "name": "Cooked Owl",
      "description": "Let Him Cook: Occasionaly burns or cook a random nearby fruit & King of the Grill: Grants bonus experience per second gain to all active pets. Also very tasty!",
      "icon": "rbxassetid://78954652883059",
      "rarity": "Mythical",
      "passives": [
        "Let Him Cook",
        "King of the Grill",
        "Movement Variation"
      ],
      "defaultHunger": 50000
    },
    "Pack Bee": {
      "name": "Pack Bee",
      "description": "Pack Bee: Increases backpack size by 25 and occasionally pollinates nearby fruit",
      "icon": "rbxassetid://105775306251306",
      "rarity": "Mythical",
      "passives": [
        "Pollinator",
        "Pack Bee"
      ],
      "defaultHunger": 25000
    },
    "Starfish": {
      "name": "Starfish",
      "description": "You're a Star: Gains additional XP per second",
      "icon": "rbxassetid://120520383369074",
      "rarity": "Common",
      "passives": [
        "You're a Star"
      ],
      "defaultHunger": 1500
    },
    "Crab": {
      "name": "Crab",
      "description": "Pinch Pocket: Occasionally goes to another player and pinches them and grants you a small amount of sheckles",
      "icon": "rbxassetid://73259620945174",
      "rarity": "Common",
      "passives": [
        "Pinch Pocket"
      ],
      "defaultHunger": 3000
    },
    "Seagull": {
      "name": "Seagull",
      "description": "Scavenger: Shoveling plants have a chance to drop the equivalent seed. Does not work on fruits",
      "icon": "rbxassetid://125267211322255",
      "rarity": "Common",
      "passives": [
        "Movement Variation"
      ],
      "defaultHunger": 3500
    },
    "Toucan": {
      "name": "Toucan",
      "description": "Tropical Lover: Makes all nearby Tropical type plants have increased variant chance and grow bigger",
      "icon": "rbxassetid://118598422473758",
      "rarity": "Rare",
      "passives": [
        "Tropical Lover",
        "Tropical Blessing",
        "Movement Variation"
      ],
      "defaultHunger": 9000
    },
    "Flamingo": {
      "name": "Flamingo",
      "description": "Flamboyance: Occasionally stands on one legs and all nearby plants will grow incredibly fast",
      "icon": "rbxassetid://122573642551827",
      "rarity": "Rare",
      "passives": [
        "Flamboyance"
      ],
      "defaultHunger": 14000
    },
    "Sea Turtle": {
      "name": "Sea Turtle",
      "description": "Shell Share: Occasionally shares its wisdom to a random active pet granting bonus experience & Water Splash: Occasionally has a chance to Wet a nearby fruit",
      "icon": "rbxassetid://136324651089948",
      "rarity": "Rare",
      "passives": [
        "Shell Share",
        "Water Splash"
      ],
      "defaultHunger": 22200
    },
    "Seal": {
      "name": "Seal",
      "description": "Seal the Deal: When selling pets, has a small chance to get the pet back as its egg equivalent",
      "icon": "rbxassetid://70977930937021",
      "rarity": "Rare",
      "passives": [
        "Seal the Deal"
      ],
      "defaultHunger": 17000
    },
    "Orangutan": {
      "name": "Orangutan",
      "description": "Helping Hands: When crafting, each material has a chance for it not to be consumed",
      "icon": "rbxassetid://91252752916705",
      "rarity": "Rare",
      "passives": [
        "Helping Hands"
      ],
      "defaultHunger": 55000
    },
    "Peacock": {
      "name": "Peacock",
      "description": "Utter Beauty: Occasionally fans its feathers and all nearby pets will advance ability cooldowns",
      "icon": "rbxassetid://79434662175672",
      "rarity": "Legendary",
      "passives": [
        "Utter Beauty"
      ],
      "defaultHunger": 19000
    },
    "Capybara": {
      "name": "Capybara",
      "description": "Chill Zone: Nearby pets' hunger will not go down and they will gain additional xp per second",
      "icon": "rbxassetid://109096250560950",
      "rarity": "Legendary",
      "passives": [
        "Chill Zone"
      ],
      "defaultHunger": 30000
    },
    "Scarlet Macaw": {
      "name": "Scarlet Macaw",
      "description": "Verdant Bird: Occasionally has a chance to mutate nearby fruits Verdant",
      "icon": "rbxassetid://103592675269053",
      "rarity": "Legendary",
      "passives": [
        "Verdant Bird",
        "Movement Variation"
      ],
      "defaultHunger": 12000
    },
    "Ostrich": {
      "name": "Ostrich",
      "description": "Eggsperience: Grants pets hatched from eggs an age bonus",
      "icon": "rbxassetid://85113894132517",
      "rarity": "Legendary",
      "passives": [
        "Eggsperience"
      ],
      "defaultHunger": 20000
    },
    "Mimic Octopus": {
      "name": "Mimic Octopus",
      "description": "Mimicry: Mimics and copies an ability from another pet and performs its ability",
      "icon": "rbxassetid://118831959038511",
      "rarity": "Mythical",
      "passives": [
        "Mimicry"
      ],
      "defaultHunger": 25000
    },
    "Meerkat": {
      "name": "Meerkat",
      "description": "Lookout: Occasionally goes to another pet and does a lookout for it. That pet advances cooldown. Has a chance chance to do it again after each lookout.",
      "icon": "rbxassetid://111346621796974",
      "rarity": "Legendary",
      "passives": [
        "Lookout"
      ],
      "defaultHunger": 22000
    },
    "Sand Snake": {
      "name": "Sand Snake",
      "description": "Coiled Commerce: Buying from the seed/gear shop has a small chance to duplicate the bought item!",
      "icon": "rbxassetid://110203289397199",
      "rarity": "Legendary",
      "passives": [
        "Coiled Commerce"
      ],
      "defaultHunger": 28000
    },
    "Axolotl": {
      "name": "Axolotl",
      "description": "Summer Regeneration: Summer type fruits have a chance to stay after collecting!",
      "icon": "rbxassetid://115096754077953",
      "rarity": "Mythical",
      "passives": [
        "Summer Regeneration"
      ],
      "defaultHunger": 22000
    },
    "Hyacinth Macaw": {
      "name": "Hyacinth Macaw",
      "description": "Wiltproof Bird: Occasionally has a chance to mutate nearby fruits Wiltproof",
      "icon": "rbxassetid://118586950763516",
      "rarity": "Mythical",
      "passives": [
        "Cloudtouched Bird",
        "Movement Variation"
      ],
      "defaultHunger": 12000
    },
    "Fennec Fox": {
      "name": "Fennec Fox",
      "description": "Sly: Occasionally goes to another player's random fruit, has a chance to copy 1 mutation from it and applies it to a random fruit you own.",
      "icon": "rbxassetid://106568248173155",
      "rarity": "Divine",
      "passives": [
        "Sly"
      ],
      "defaultHunger": 35000
    },
    "Hamster": {
      "name": "Hamster",
      "description": "Hamster Wheel: Occasionally runs in a hamster wheel and grants increased crafting speed for a duration",
      "icon": "rbxassetid://95041454621458",
      "rarity": "Mythical",
      "passives": [
        "Hamster Wheel"
      ],
      "defaultHunger": 15000
    },
    "Bald Eagle": {
      "name": "Bald Eagle",
      "description": "Wings of Freedom: Every 7:04m, takes flight and spreads its wings. All eggs advanced their hatch time by 70.4s. There's a 7.04% chance for the effect to be multiplied",
      "icon": "rbxassetid://100494018595907",
      "rarity": "Legendary",
      "passives": [
        "Wings of Freedom",
        "Movement Variation"
      ],
      "defaultHunger": 15000
    },
    "Raptor": {
      "name": "Raptor",
      "description": "Clever Claws: Small chance fruit gets Amber mutation after collecting! & Raptor Dance: Player has increased movement speed",
      "icon": "rbxassetid://133649762905181",
      "rarity": "Legendary",
      "passives": [
        "Clever Claws",
        "Raptor Dance"
      ],
      "defaultHunger": 40000
    },
    "Stegosaurus": {
      "name": "Stegosaurus",
      "description": "Prehistoric Doubling: Small chance to duplicate harvested fruit & Prehistoric Harvester: Increased chance to duplicate harvested prehistoric type plant",
      "icon": "rbxassetid://115750504063562",
      "rarity": "Legendary",
      "passives": [
        "Prehistoric Doubling",
        "Prehistoric Harvester"
      ],
      "defaultHunger": 40000
    },
    "Triceratops": {
      "name": "Triceratops",
      "description": "Tri-Horn: Rams into random plants and advances their growth",
      "icon": "rbxassetid://133031079193526",
      "rarity": "Legendary",
      "passives": [
        "Tri-Horn"
      ],
      "defaultHunger": 40000
    },
    "Pterodactyl": {
      "name": "Pterodactyl",
      "description": "Sky Reptile: Occasionally applies Windstruck mutation to multiple nearby fruits! & Air Time: Player has increased jump height",
      "icon": "rbxassetid://132325249273328",
      "rarity": "Mythical",
      "passives": [
        "Sky Reptile",
        "Air Time",
        "Movement Variation"
      ],
      "defaultHunger": 40000
    },
    "Brontosaurus": {
      "name": "Brontosaurus",
      "description": "Giant Incubator: Pets hatched from eggs have higher base weight",
      "icon": "rbxassetid://138431192706334",
      "rarity": "Mythical",
      "passives": [
        "Giant Incubator"
      ],
      "defaultHunger": 80000
    },
    "Radioactive Stegosaurus": {
      "name": "Radioactive Stegosaurus",
      "description": "Developer RemorsEcoDe's pet",
      "icon": "rbxassetid://115750504063562",
      "rarity": "Legendary",
      "passives": [
        "Radioactive Lizard"
      ],
      "defaultHunger": 40000
    },
    "T-Rex": {
      "name": "T-Rex",
      "description": "Apex Predator: Occasionally eats a random mutation from a fruit in your garden then roars and applies that mutation to other fruits in your garden.",
      "icon": "rbxassetid://72024850228702",
      "rarity": "Divine",
      "passives": [
        "Apex Predator"
      ],
      "defaultHunger": 60000
    },
    "Parasaurolophus": {
      "name": "Parasaurolophus",
      "description": "Crowbar Head: Occasionally, goes to the cosmetic crate with the highest time and reduces time to open!",
      "icon": "rbxassetid://77060347493123",
      "rarity": "Legendary",
      "passives": [
        "Crowbar Head"
      ],
      "defaultHunger": 40000
    },
    "Iguanodon": {
      "name": "Iguanodon",
      "description": "Dino Herd: Grants bonus experience per second gain to all Dinosaur type active pets",
      "icon": "rbxassetid://132997806707299",
      "rarity": "Legendary",
      "passives": [
        "Dino Herd"
      ],
      "defaultHunger": 40000
    },
    "Pachycephalosaurus": {
      "name": "Pachycephalosaurus",
      "description": "Crafty Dome: Grants a small chance to duplicate the crafted item.",
      "icon": "rbxassetid://98967783170808",
      "rarity": "Legendary",
      "passives": [
        "Crafty Dome"
      ],
      "defaultHunger": 40000
    },
    "Dilophosaurus": {
      "name": "Dilophosaurus",
      "description": "Frilled Reptile: Occasionally opens its frills and spits out venom! The venom spreads to other random pets, advancing cooldown OR granting bonus xp",
      "icon": "rbxassetid://88442192911950",
      "rarity": "Mythical",
      "passives": [
        "Frilled Reptile"
      ],
      "defaultHunger": 30000
    },
    "Ankylosaurus": {
      "name": "Ankylosaurus",
      "description": "Armored Defender: When a player steals a fruit from you, grants a chance you get the stolen fruit as well.",
      "icon": "rbxassetid://128962631009648",
      "rarity": "Mythical",
      "passives": [
        "Armored Defender"
      ],
      "defaultHunger": 40000
    },
    "Spinosaurus": {
      "name": "Spinosaurus",
      "description": "Occasionally, devours a random mutation from random fruits in your garden each, roars and applies it to 1 other random fruit in your garden!",
      "icon": "rbxassetid://78132119445447",
      "rarity": "Divine",
      "passives": [
        "Food Chain"
      ],
      "defaultHunger": 25000
    },
    "Rainbow Parasaurolophus": {
      "name": "Rainbow Parasaurolophus",
      "description": "Crowbar Head: Occasionally, goes to the cosmetic crate with the highest time and reduces time to open!",
      "icon": "rbxassetid://116062422658499",
      "rarity": "Legendary",
      "passives": [
        "Rainbow Crowbar Head"
      ],
      "defaultHunger": 40000
    },
    "Rainbow Iguanodon": {
      "name": "Rainbow Iguanodon",
      "description": "Dino Herd: Grants bonus experience per second gain to all Dinosaur type active pets",
      "icon": "rbxassetid://70960389100537",
      "rarity": "Legendary",
      "passives": [
        "Rainbow Dino Herd"
      ],
      "defaultHunger": 40000
    },
    "Rainbow Pachycephalosaurus": {
      "name": "Rainbow Pachycephalosaurus",
      "description": "Crafty Dome: Grants a small chance to duplicate the crafted item.",
      "icon": "rbxassetid://71353461716145",
      "rarity": "Legendary",
      "passives": [
        "Rainbow Crafty Dome"
      ],
      "defaultHunger": 40000
    },
    "Rainbow Dilophosaurus": {
      "name": "Rainbow Dilophosaurus",
      "description": "Frilled Reptile: Occasionally opens its frills and spits out venom! The venom spreads to other random pets, advancing cooldown OR granting bonus xp",
      "icon": "rbxassetid://114260890723408",
      "rarity": "Mythical",
      "passives": [
        "Rainbow Frilled Reptile"
      ],
      "defaultHunger": 30000
    },
    "Rainbow Ankylosaurus": {
      "name": "Rainbow Ankylosaurus",
      "description": "Armored Defender: When a player steals a fruit from you, grants a chance you get the stolen fruit as well.",
      "icon": "rbxassetid://108330251202915",
      "rarity": "Mythical",
      "passives": [
        "Rainbow Armored Defender"
      ],
      "defaultHunger": 40000
    },
    "Rainbow Spinosaurus": {
      "name": "Rainbow Spinosaurus",
      "description": "Occasionally, devours a random mutation from random fruits in your garden each, roars and applies it to 1 other random fruit in your garden!",
      "icon": "rbxassetid://98134533729834",
      "rarity": "Divine",
      "passives": [
        "Rainbow Food Chain"
      ],
      "defaultHunger": 25000
    },
    "Shiba Inu": {
      "name": "Shiba Inu",
      "description": "Man's Best Tomodachi: Occasionally digs up a random seed at a higher chance",
      "icon": "rbxassetid://109495487067387",
      "rarity": "Uncommon",
      "passives": [
        "Man's Best Tomodachi"
      ],
      "defaultHunger": 2000
    },
    "Nihonzaru": {
      "name": "Nihonzaru",
      "description": "Bathe Time: As long as you have a Hot Spring in your garden: bathes in it and boosts all other pet's passives by a small amount",
      "icon": "rbxassetid://83549828969544",
      "rarity": "Rare",
      "passives": [
        "Bathe Time"
      ],
      "defaultHunger": 8000
    },
    "Tanuki": {
      "name": "Tanuki",
      "description": "Mischief: Occasionally causes mischief doing random actions in your garden",
      "icon": "rbxassetid://86675114036925",
      "rarity": "Legendary",
      "passives": [
        "Mischief"
      ],
      "defaultHunger": 15000
    },
    "Tanchozuru": {
      "name": "Tanchozuru",
      "description": "Balance and Harmony: Occasionally channels tranquility and has a chance to mutate nearby fruits into Tranquil",
      "icon": "rbxassetid://102876710012857",
      "rarity": "Legendary",
      "passives": [
        "Balance and Harmony"
      ],
      "defaultHunger": 40000
    },
    "Kappa": {
      "name": "Kappa",
      "description": "Water Spirit: Occasionally sprays water on all nearby fruits, mutating them to wet, and has a chance to convert Wet mutations already on fruit to Bloodlit",
      "icon": "rbxassetid://139605839925044",
      "rarity": "Mythical",
      "passives": [
        "Water Spirit"
      ],
      "defaultHunger": 40000
    },
    "Kitsune": {
      "name": "Kitsune",
      "description": "Nine-Tailed Myth: Occasionally goes to other player's fruit, mutates with Chakra or Foxfire Chakra and steals (duplicates) hands it to you",
      "icon": "rbxassetid://135428084676433",
      "rarity": "Prismatic",
      "passives": [
        "Nine-Tailed Myth"
      ],
      "defaultHunger": 49999
    },
    "Koi": {
      "name": "Koi",
      "description": "Fish of Fortune: Grants a chance to recover an egg when hatching. Can be different colors",
      "icon": "rbxassetid://112819490327372",
      "rarity": "Mythical",
      "passives": [
        "Fish of Fortune"
      ],
      "defaultHunger": 2500
    },
    "Football": {
      "name": "Football",
      "description": "Touchdown: Occasionally runs to the Gear Shop or Seed Shop (whichever is farther) and does a touchdown which awards you with sheckles or a Watering Can",
      "icon": "rbxassetid://97868319630227",
      "rarity": "Legendary",
      "passives": [
        "Touchdown"
      ],
      "defaultHunger": 870
    },
    "Maneki-neko": {
      "name": "Maneki-neko",
      "description": "Fortune Cat:\tOccasionally does a wave of good luck and grants increased chance to get your fruit back after selling it",
      "icon": "rbxassetid://116049439913569",
      "rarity": "Uncommon",
      "passives": [
        "Fortune Cat"
      ],
      "defaultHunger": 1777
    },
    "Tsuchinoko": {
      "name": "Tsuchinoko",
      "description": "Fat Snake: Increased lucky harvest chance!",
      "icon": "rbxassetid://104799415228364",
      "rarity": "Rare",
      "passives": [
        "Fat Snake"
      ],
      "defaultHunger": 28000
    },
    "Kodama": {
      "name": "Kodama",
      "description": "Tree Spirit: Collecting Zen type fruits have a chance to mutate with Tranquil.",
      "icon": "rbxassetid://123076615425263",
      "rarity": "Legendary",
      "passives": [
        "Tree Spirit"
      ],
      "defaultHunger": 22000
    },
    "Corrupted Kodama": {
      "name": "Corrupted Kodama",
      "description": "Corrupted Tree Spirit: Collecting Zen type fruits have a chance to mutate with Corrupt.",
      "icon": "rbxassetid://131755084333898",
      "rarity": "Legendary",
      "passives": [
        "Corrupted Tree Spirit"
      ],
      "defaultHunger": 22000
    },
    "Raiju": {
      "name": "Raiju",
      "description": "Lightning Beast: Occasionally devours a fruit with Shocked for bonus value, spits a chain lightning that mutates fruit with Static or Shocked if its a Thunderstorm",
      "icon": "rbxassetid://111087166681850",
      "rarity": "Divine",
      "passives": [
        "Lightning Beast"
      ],
      "defaultHunger": 42000
    },
    "Mizuchi": {
      "name": "Mizuchi",
      "description": "Water Diety: When selling fruits with Wet/Drenched mutation, there is chance a random mutation from that fruit will be applied to a fruit in your garden!",
      "icon": "rbxassetid://91185943483703",
      "rarity": "Divine",
      "passives": [
        "Water Diety"
      ],
      "defaultHunger": 40000
    },
    "Corrupted Kitsune": {
      "name": "Corrupted Kitsune",
      "description": "Nine-Tailed Curse: Occasionally, Removes 9 mutations from 9 different fruit. Applies Corrupted Chakra with a very rare chance for Corrupted Foxfire Chakra to 1 random fruit.",
      "icon": "rbxassetid://73884777977436",
      "rarity": "Prismatic",
      "passives": [
        "Nine-Tailed Curse"
      ],
      "defaultHunger": 49999
    },
    "Rainbow Maneki-neko": {
      "name": "Rainbow Maneki-neko",
      "description": "Rainbow Fortune Cat:\tOccasionally does a wave of good luck and grants increased chance to get your fruit back after selling it",
      "icon": "rbxassetid://127837229475229",
      "rarity": "Uncommon",
      "passives": [
        "Rainbow Fortune Cat"
      ],
      "defaultHunger": 1777
    },
    "Rainbow Kodama": {
      "name": "Rainbow Kodama",
      "description": "Rainbow Tree Spirit: Collecting Zen type fruits have a chance to mutate with Tranquil.",
      "icon": "rbxassetid://130281044212300",
      "rarity": "Legendary",
      "passives": [
        "Rainbow Tree Spirit"
      ],
      "defaultHunger": 22000
    },
    "Rainbow Corrupted Kitsune": {
      "name": "Rainbow Corrupted Kitsune",
      "description": "Rainbow Nine-Tailed Curse: Occasionally, Removes 9 mutations from 9 different fruit. Applies Corrupted Chakra with a very rare chance for Corrupted Foxfire Chakra to 1 random fruit.",
      "icon": "rbxassetid://112845542239850",
      "rarity": "Prismatic",
      "passives": [
        "Rainbow Nine-Tailed Curse"
      ],
      "defaultHunger": 49999
    },
    "Bagel Bunny": {
      "name": "Bagel Bunny",
      "description": "Bagel and Carrots: Runs to carrots, eats them, and grants bonus sheckles multiplier",
      "icon": "rbxassetid://83878222838385",
      "rarity": "Common",
      "passives": [
        "Bagel and Carrots"
      ],
      "defaultHunger": 1200
    },
    "Pancake Mole": {
      "name": "Pancake Mole",
      "description": "Pancake Hunter: Will occasionally dig down to find gear or sheckles",
      "icon": "rbxassetid://118795155833639",
      "rarity": "Rare",
      "passives": [
        "Pancake Hunter"
      ],
      "defaultHunger": 50000
    },
    "Sushi Bear": {
      "name": "Sushi Bear",
      "description": "Sushi Express: Occasionally sets a random nearby fruit cold, turning it Chilled or rarely Frozen & Sushi Time: Occasionally throws sushi towards a pet, feeding it",
      "icon": "rbxassetid://101808352881529",
      "rarity": "Legendary",
      "passives": [
        "Sushi Express",
        "Sushi Time"
      ],
      "defaultHunger": 20000
    },
    "Spaghetti Sloth": {
      "name": "Spaghetti Sloth",
      "description": "Al dente: Occasionally applies Pasta, Sauce or Meatball mutation",
      "icon": "rbxassetid://82028428678888",
      "rarity": "Mythical",
      "passives": [
        "Al dente"
      ],
      "defaultHunger": 18000
    },
    "French Fry Ferret": {
      "name": "French Fry Ferret",
      "description": "Welcome to Fry Town: Occasionally increases a pet's level by one",
      "icon": "rbxassetid://124662460084969",
      "rarity": "Divine",
      "passives": [
        "Friendly Frier"
      ],
      "defaultHunger": 37000
    },
    "Mochi Mouse": {
      "name": "Mochi Mouse",
      "description": "Mochi Marathon: Grants bonus experience per second gain to all Food type pets & Whisker Wisdom: Occasionally gains bonus experience",
      "icon": "rbxassetid://91015602604713",
      "rarity": "Mythical",
      "passives": [
        "Mochi Marathon",
        "Whisker Wisdom"
      ],
      "defaultHunger": 25000
    },
    "Bacon Pig": {
      "name": "Bacon Pig",
      "description": "Bacon Frenzy: Occasionally releases a fertilizing AOE boosting variant chance",
      "icon": "rbxassetid://134476443266448",
      "rarity": "Rare",
      "passives": {},
      "defaultHunger": 5000
    },
    "Firefly": {
      "name": "Firefly",
      "description": "Lightning Bug: Occasionally strikes a random nearby fruit, with a small chance of turning it Shocked",
      "icon": "rbxassetid://131310748087635",
      "rarity": "Mythical",
      "passives": [
        "Lightning Bug"
      ],
      "defaultHunger": 25000
    },
    "Red Dragon": {
      "name": "Red Dragon",
      "description": "Scorched Soil: Occasionally sets a random nearby fruit ablaze, turning it into Burnt",
      "icon": "rbxassetid://140223014467344",
      "rarity": "Common",
      "passives": [
        "Scorched Soil"
      ],
      "defaultHunger": 10000
    },
    "Golden Bee": {
      "name": "Golden Bee",
      "description": "Pollinator: Occasionally pollinates fruit & Golden Harvest: Harvested fruit has a chance to turn to gold",
      "icon": "rbxassetid://125658111834879",
      "rarity": "Mythical",
      "passives": [
        "Pollinator",
        "Golden Harvest"
      ],
      "defaultHunger": 25000
    }
  }
};
export const Passives = DB.passives;
export const Pets = DB.pets;
