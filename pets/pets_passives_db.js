// Auto-generated from Roblox registries:
//   - Data/PetRegistry/PassiveRegistry.luau (keeps Formatter + scalar flags)
//   - Data/PetRegistry/PetList.luau
//   - Data/PetRegistry/PetBoostRegistry.luau (optional, if present)
export const DB = {
  "passives": {
    "Air Time": {
      "Description": "Grants additional <Chance>% increase to player jump height!",
      "States": {
        "Chance": {
          "Base": 14,
          "Scale": 0.25
        }
      }
    },
    "Al dente": {
      "Description": "Every <Cooldown>m, goes to a nearby fruit and does-a-cooking! Applying Pasta, Sauce or Meatball mutation!",
      "States": {
        "Cooldown": {
          "Base": 845,
          "Formatter": "ColonTime",
          "Min": 200,
          "Scale": -7.5
        }
      }
    },
    "Apex Predator": {
      "Description": "Every <Cooldown>m, devours a random mutation from your garden, then roars, spreading that mutation to <Amount> other random fruits in your garden!",
      "States": {
        "Amount": {
          "Base": 3,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 1224,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -12
        }
      }
    },
    "Apple Harvester": {
      "Description": "Fruits that have apple in the name have a <Chance>% chance to duplicate when collected",
      "States": {
        "Chance": {
          "Base": 4,
          "Max": 7,
          "Scale": 0.025
        }
      }
    },
    "Armored Defender": {
      "Description": "When another player steals fruit from you, grants a <Chance>% chance you get the stolen fruit as well!",
      "States": {
        "Chance": {
          "Base": 18.7,
          "Max": 35,
          "Scale": 0.25
        }
      }
    },
    "Aromatic Pet Mutation": {
      "Description": "<font color=\"rgb(162, 145, 57)\">AROMATIC: Every <Cooldown>m, a nearby fruit is infused with a pungent aroma, with a <Chance>% chance to apply the Aromatic mutation!</font>",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 30,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 1500,
          "Formatter": "ColonTime",
          "Min": 1000,
          "Scale": -3
        }
      }
    },
    "Ascended Pet Mutation": {
      "Description": "<font color=\"rgb(247, 245, 184)\">ASCENDED: Every <Cooldown>m, a nearby fruit ascends to a higher realm, with a <Chance>% chance to apply the Dawnbound mutation!</font>",
      "States": {
        "Chance": {
          "Base": 75,
          "Max": 90,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 21621,
          "Formatter": "ColonTime",
          "Min": 18000,
          "Scale": -21
        }
      }
    },
    "Bacon Frenzy": {
      "Description": "Every <Cooldown>s, emits an aura for <Duration>s granting <Multiplier>x chance for new fruit to grow as variants within <Range> studs!",
      "States": {
        "Cooldown": {
          "Base": 120,
          "Min": 5,
          "Scale": -1
        },
        "Duration": {
          "Base": 15,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 2,
          "Scale": 0.01
        },
        "Range": {
          "Base": 15,
          "Scale": 0.15
        }
      }
    },
    "Bagel and Carrots": {
      "Description": "Every <Cooldown>s, eats a carrot for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Base": 45,
          "Min": 5,
          "Scale": -1
        },
        "Multiplier": {
          "Base": 5,
          "Scale": 0.05
        }
      }
    },
    "Balance and Harmony": {
      "Description": "Every <Cooldown>m, meditates for <Duration>s, nearby fruits in a <Range> studs have a <Chance>% chance every second to mutate into Tranquil!",
      "States": {
        "Chance": {
          "Base": 5,
          "Scale": 0.05
        },
        "Cooldown": {
          "Base": 627,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -1
        },
        "Duration": {
          "Base": 10,
          "Scale": 0.1
        },
        "Range": {
          "Base": 15,
          "Scale": 0.1
        }
      }
    },
    "Bamboozle": {
      "Description": "Every <Cooldown>m, eats bamboo for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Base": 180,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -1
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.015
        }
      }
    },
    "Bathe Time": {
      "Description": "As long as you have a Hot Spring in your garden: The pet bathes in it and boosts all pets passive by a small percentage",
      "States": {
        "Boost": {
          "Base": 2,
          "Max": 6,
          "Scale": 0.1
        }
      }
    },
    "Bean for the Bean God": {
      "Description": "Every <Cooldown>m, sacrifices a random Beanstalk fruit in your garden to instantly grow a random plant with <Multiplier>x fruit size bonus! Ability cannot be mimicked or refreshed.",
      "States": {
        "Cooldown": {
          "Base": 1800,
          "Formatter": "ColonTime",
          "Min": 870,
          "Scale": -9
        },
        "Multiplier": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.1
        }
      }
    },
    "Beeter Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and pollinates it, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Base": 1210,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -12
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
    "Brain-Roar": {
      "Description": "Every <Cooldown>m, roars whilst applying the Brainrot mutation to a random fruit!",
      "States": {
        "Cooldown": {
          "Base": 912,
          "Formatter": "ColonTime",
          "Max": 300,
          "Min": 300,
          "Scale": -3.5
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
    "Carrot Chomper": {
      "Description": "Every <Cooldown>s, eats a carrot for <Multiplier>x value bonus!",
      "States": {
        "Cooldown": {
          "Base": 45,
          "Min": 5,
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
          "Base": 40,
          "Min": 5,
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
          "Base": 80,
          "Min": 5,
          "Scale": -1
        },
        "Duration": {
          "Base": 10,
          "Max": 20,
          "Scale": 0.1
        },
        "Multiplier": {
          "Base": 1.25,
          "Max": 4,
          "Scale": 0.0025
        },
        "Range": {
          "Base": 10,
          "Max": 20,
          "Scale": 0.1
        }
      }
    },
    "Cheeky Refund": {
      "Description": "<Chance>% chance to refund fruit back to your inventory. Rarer plants have lower chance to refund!",
      "States": {
        "Chance": {
          "Base": 2.5,
          "Max": 8,
          "Scale": 0.025
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
    "Chill Zone": {
      "Description": "All pets within <Range> studs won't lose hunger and will gain <Amount> XP every second!",
      "States": {
        "Amount": {
          "Base": 3,
          "Max": 30,
          "Scale": 0.3
        },
        "Range": {
          "Base": 14.5,
          "Scale": 0.25
        }
      }
    },
    "Citrus Roar": {
      "Description": "Every <Cooldown>m, roars and infuses a random pet with citrus, granting <Amount> bonus experience!",
      "States": {
        "Amount": {
          "Base": 1500,
          "Max": 2500,
          "Scale": 15
        },
        "Cooldown": {
          "Base": 600,
          "Formatter": "ColonTime",
          "Min": 200,
          "Scale": -2.5
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
    "Cloudtouched Bird": {
      "Description": "Every <Cooldown>m, <Chance>% chance to mutate a nearby fruit, applying the Cloudtouched mutation!",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.5
        },
        "Cooldown": {
          "Base": 486,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -4
        }
      }
    },
    "Coiled Commerce": {
      "Description": "Buying from the seed/gear shop has a <Chance>% chance to duplicate the bought item!",
      "States": {
        "Chance": {
          "Base": 1,
          "Max": 6,
          "Scale": 0.25
        }
      }
    },
    "Corrupted Pet Mutation": {
      "Description": "<font color=\"rgb(176, 23, 26)\">Corrupted: Every <Cooldown>m, a nearby fruit embraces the corruption, with a <Chance>% chance to apply the Corrupted mutation!</font>",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 30,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 1500,
          "Formatter": "ColonTime",
          "Min": 1000,
          "Scale": -3
        }
      }
    },
    "Corrupted Tree Spirit": {
      "Description": "<Chance>% chance Zen type fruit gets Corrupt mutation after collecting!",
      "States": {
        "Chance": {
          "Base": 6,
          "Max": 12,
          "Scale": 0.33
        }
      }
    },
    "Crafty Dome": {
      "Description": "Grants a <Chance>% chance to duplicate a crafted item!",
      "States": {
        "Chance": {
          "Base": 6,
          "Max": 25,
          "Scale": 0.3
        }
      }
    },
    "Crimson Cradle": {
      "Description": "Every <Cooldown>s, goes to the egg with the highest hatch time, and reduces its hatch time by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 45,
          "Scale": 0.45
        },
        "Cooldown": {
          "Base": 60,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Croak": {
      "Description": "Every <Cooldown>m, croaks and a random nearby plant will advance growth by 24 hours!",
      "States": {
        "Cooldown": {
          "Base": 604.5,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -6
        }
      }
    },
    "Crowbar Head": {
      "Description": "Every <Cooldown>s, goes to the cosmetic crate with the highest open time, and reduces its open time by <Amount>s! There is a <Chance>% chance for open time reduction to be multiplied by <Multiplier>x",
      "States": {
        "Amount": {
          "Base": 80,
          "Scale": 0.65
        },
        "Chance": {
          "Base": 25.5,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 82,
          "Min": 10,
          "Scale": -1.8
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.2
        }
      }
    },
    "Digging Buddy": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Chance": {
          "Base": 5,
          "Scale": 0.05
        },
        "Cooldown": {
          "Base": 60,
          "Min": 5,
          "Scale": -1
        }
      }
    },
    "Digging Friend": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 60,
          "Min": 5,
          "Scale": -1
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
    "Disco Disco": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Disco!",
      "States": {
        "Chance": {
          "Base": 14,
          "Scale": 1
        },
        "Cooldown": {
          "Base": 906,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -12
        }
      }
    },
    "Echo Croak": {
      "Description": "Every <Cooldown>m, croaks and a random nearby plant will advance growth by 24 hours!",
      "States": {
        "Cooldown": {
          "Base": 303,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -6
        }
      }
    },
    "Egg Laying": {
      "Description": "Every <Cooldown>m, lays a random pet egg from the pet egg shop. Will not lay eggs if you have no free egg equip slot",
      "States": {
        "Cooldown": {
          "Base": 15,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -18
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
    "Eggsperience": {
      "Description": "Pets hatched from eggs have a bonus 1 - <Chance> age to their age value!",
      "States": {
        "Chance": {
          "Base": 4.5,
          "Max": 10,
          "Scale": 0.5
        }
      }
    },
    "Elk Forester": {
      "Description": "<Chance>% chance berry fruit stays after collecting! Rarer plants have a rarer chance to replant",
      "States": {
        "Chance": {
          "Base": 2.5,
          "Max": 5,
          "Scale": 0.025
        }
      }
    },
    "Fat Snake": {
      "Description": "<Chance>% extra chance harvested plants drop seeds. Rarer plants have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.05
        }
      }
    },
    "Fertilizer Frenzy": {
      "Description": "Every <Cooldown>s, emits an aura for <Duration>s granting <Multiplier>x chance for new fruit to grow as variants within <Range> studs!",
      "States": {
        "Cooldown": {
          "Base": 120,
          "Min": 5,
          "Scale": -1
        },
        "Duration": {
          "Base": 15,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 2,
          "Scale": 0.01
        },
        "Range": {
          "Base": 15,
          "Scale": 0.15
        }
      }
    },
    "Fish of Fortune": {
      "Description": "When hatching eggs there is a <Chance>% chance to get the egg back! Cannot recover Premium/Exotic/Rainbow Eggs. This bonus is capped at 50% per egg hatched.",
      "States": {
        "Chance": {
          "Base": 3,
          "Max": 8,
          "Scale": 0.22
        }
      }
    },
    "Flamboyance": {
      "Description": "Every <Cooldown>m, stands on one leg for <Duration>s. All plants and fruits within <Range> studs will grow <Multiplier>x faster!",
      "States": {
        "Cooldown": {
          "Base": 240,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -2
        },
        "Duration": {
          "Base": 15,
          "Scale": 0.5
        },
        "Multiplier": {
          "Base": 15,
          "Scale": 0.25
        },
        "Range": {
          "Base": 13,
          "Scale": 0.3
        }
      }
    },
    "Flower Fortune": {
      "Description": "All flower type plants grow <Multiplier>x faster!",
      "States": {
        "Multiplier": {
          "Base": 1.45,
          "Max": 4,
          "Scale": 0.05
        },
        "Range": {
          "Base": 30,
          "Max": 30,
          "Scale": 0
        }
      }
    },
    "Flower Harvest": {
      "Description": "<Chance>% chance Flower type fruit stays after harvest!",
      "States": {
        "Chance": {
          "Base": 1,
          "Max": 5,
          "Scale": 0.1
        }
      }
    },
    "Food Chain": {
      "Description": "Every <Cooldown>m, devours a random mutation from <Amount> fruits in your garden each, then roars, spreading those mutations to 1 random fruit in your garden! Prioritizes applying mutations to a favorited fruit.",
      "States": {
        "Amount": {
          "Base": 3,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 1224,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -12
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
    "For the Queen": {
      "Description": "Every <Cooldown>m, the pet with the highest cooldown refreshes its ability!",
      "States": {
        "Cooldown": {
          "Base": 1328,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -16
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
    "Forester": {
      "Description": "<Chance>% chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Base": 2.5,
          "Max": 5,
          "Scale": 0.025
        }
      }
    },
    "Fortune Cat": {
      "Description": "Every <Cooldown>m, waves and invites good fortune that grants <Chance>% chance to refund fruit back to your inventory for <Duration>s! Rarer fruit have rarer chance to refund.",
      "States": {
        "Chance": {
          "Base": 8,
          "Max": 20,
          "Scale": 0.15
        },
        "Cooldown": {
          "Base": 143,
          "Formatter": "ColonTime",
          "Min": 30,
          "Scale": -0.6
        },
        "Duration": {
          "Base": 10,
          "Max": 22,
          "Scale": 0.25
        }
      }
    },
    "Fried Pet Mutation": {
      "Description": "<font color=\"rgb(209, 139, 0)\">Fried: Every <Cooldown>m, a nearby fruit is sizzled up, with a <Chance>% chance to apply the Fried mutation!</font>",
      "States": {
        "Chance": {
          "Base": 40,
          "Max": 60,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 1000,
          "Formatter": "ColonTime",
          "Min": 500,
          "Scale": -3
        }
      }
    },
    "Friendly Frier": {
      "Description": "Every <Cooldown>m, increases a random pet's level by 1! Ability cannot be mimicked or refreshed.",
      "States": {
        "Cooldown": {
          "Base": 3632,
          "Formatter": "ColonTime",
          "Min": 1200,
          "Scale": -36
        }
      }
    },
    "Frilled Reptile": {
      "Description": "Every <Cooldown>m opens its frills and spits out venom! The venom spreads to <Number> other random pets, advancing cooldown by <AmountCD> OR granting <AmountXP> xp!",
      "States": {
        "AmountCD": {
          "Base": 40,
          "Max": 100,
          "Scale": 0.25
        },
        "AmountXP": {
          "Base": 500,
          "Max": 2500,
          "Scale": 40
        },
        "Cooldown": {
          "Base": 846,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -8.4
        },
        "Number": {
          "Base": 3,
          "Max": 5,
          "Scale": 0.2
        }
      }
    },
    "Frozen Pet Mutation": {
      "Description": "<font color=\"rgb(108, 184, 255)\">FROZEN: Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Frozen!</font>",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 30,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 300,
          "Formatter": "ColonTime",
          "Min": 30,
          "Scale": -3
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
    "Giant Incubator": {
      "Description": "Pets hatched from eggs have a <Chance>% increase in base size and weight! This size bonus is capped at 30% per egg and does not apply to Brontosauruses.",
      "States": {
        "Chance": {
          "Base": 5.25,
          "Max": 30,
          "Scale": 0.1
        }
      }
    },
    "GiantBean Pet Mutation": {
      "Description": "<font color=\"rgb(102, 153, 51)\">GIANT BEAN: Pet is a GIANT BEAN! Has 15% faster hunger rate.</font>",
      "States": {
        "Amount": {
          "Base": 0.15,
          "Scale": 0
        }
      }
    },
    "GiantBean Pet Mutation Bonus": {
      "Description": "<font color=\"rgb(102, 153, 51)\">Gains an additional <Amount>xp/s for each Beanstalk planted in your garden!</font>",
      "States": {
        "Amount": {
          "Base": 0.1,
          "Max": 0.5,
          "Scale": 0.005
        }
      }
    },
    "Glimmer": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and enchants it, applying Glimmering mutation!",
      "States": {
        "Cooldown": {
          "Base": 220,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -1
        }
      }
    },
    "Glimmering Pet Mutation": {
      "Description": "<font color=\"rgb(255, 214, 89)\">Glimmering: Every <Cooldown>m, a nearby fruit is sprinkled with fairy dust, with a <Chance>% chance to apply the Glimmering mutation!</font>",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 30,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 1500,
          "Formatter": "ColonTime",
          "Min": 1000,
          "Scale": -3
        }
      }
    },
    "Glorious Wings": {
      "Description": "Every <Cooldown>m, flaunts its wings and releases a Cyclone. Pets struck have cooldown advanced by <CooldownAmount>s and fruits struck have a <Chance>% to get the Cyclonic mutation!",
      "States": {
        "Chance": {
          "Base": 10,
          "Max": 30,
          "Scale": 0.15
        },
        "Cooldown": {
          "Base": 935,
          "Formatter": "ColonTime",
          "Min": 300,
          "Scale": -2
        },
        "CooldownAmount": {
          "Base": 65,
          "Max": 125,
          "Scale": 1
        },
        "CycloneAmount": {
          "Base": 1,
          "Max": 1,
          "Scale": 0
        }
      }
    },
    "Gnome Collector": {
      "Description": "Every <Cooldown>m, has a <Chance>% chance to mutate a random fruit with the Gnomed mutation. Gains additional <Amount>% chance for every Gnome cosmetic in your garden.",
      "States": {
        "Amount": {
          "Base": 1,
          "Max": 3,
          "Scale": 0.025
        },
        "Chance": {
          "Base": 1,
          "Max": 3,
          "Scale": 0.025
        },
        "Cooldown": {
          "Base": 600,
          "Formatter": "ColonTime",
          "Min": 200,
          "Scale": -1.5
        }
      }
    },
    "Golden Harvest": {
      "Description": "<Chance>% chance harvested fruit becomes Gold on harvest! Rarer crops have less chance to turn gold!",
      "States": {
        "Chance": {
          "Base": 1,
          "Max": 35,
          "Scale": 0.1
        }
      }
    },
    "Golden Laying": {
      "Description": "Every <Cooldown>m, lays a Golden Egg plant that starts with the Fortune mutation. It can be harvested and mutates like other plants. Selling it may apply Fortune mutation to a fruit in your garden!",
      "States": {
        "Cooldown": {
          "Base": 788,
          "Formatter": "ColonTime",
          "Min": 300,
          "Scale": -1.5
        }
      }
    },
    "Golden Pet Mutation": {
      "Description": "<font color=\"rgb(255, 225, 0)\">GOLDEN: Provides a big increase to the pet's passive!</font>",
      "States": [

      ]
    },
    "Hamster": {
      "Description": "Crafting speed is increased by <Chance>%!",
      "States": {
        "Chance": {
          "Base": 15,
          "Max": 25,
          "Scale": 0.5
        }
      }
    },
    "Hamster Wheel": {
      "Description": "Every <Cooldown>m, runs in a hamster wheel and boosts crafting speed by <Amount>% for <Duration>s!",
      "States": {
        "Amount": {
          "Base": 30,
          "Scale": 0.3
        },
        "Cooldown": {
          "Base": 188,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -1.5
        },
        "Duration": {
          "Base": 18,
          "Scale": 0.5
        }
      }
    },
    "Helping Hands": {
      "Description": "When crafting, each material used in the recipe has a <Chance>% chance to not get consumed!",
      "States": {
        "Chance": {
          "Base": 3,
          "Max": 7,
          "Scale": 0.33
        }
      }
    },
    "Helpy Herbivore": {
      "Description": "Each time you feed a pet, <Chance>% of the hunger points restored are also awarded as experience for that pet! (Only the hunger that is successfully restored counts toward XP).",
      "States": {
        "Chance": {
          "Base": 14.65,
          "Max": 50,
          "Scale": 0.35
        }
      }
    },
    "Horsetail Herbivore": {
      "Description": "Every <Cooldown>m, eats a random fruit in your garden, and has a <Chance>% chance to spit out a Horsetail seed! Ignores favorited fruit.",
      "States": {
        "Chance": {
          "Base": 40,
          "Scale": 0.8
        },
        "Cooldown": {
          "Base": 82,
          "Min": 10,
          "Scale": -1.8
        }
      }
    },
    "Inverted Pet Mutation": {
      "Description": "<font color=\"rgb(128, 128, 128)\">INVERTED: Provides an additional 30% boost to the pet's xp per second!</font>",
      "States": [

      ]
    },
    "IronSkin Pet Mutation": {
      "Description": "<font color=\"rgb(206, 206, 206)\">IRONSKIN: When another player steals fruit from you, grants a <Chance>% chance you get the stolen fruit as well!</font>",
      "States": {
        "Chance": {
          "Base": 35,
          "Max": 45,
          "Scale": 0.2
        }
      }
    },
    "King Cook": {
      "Description": "As long as you have a Cooking Pot or Cooking Cauldron in your garden: The Gorilla cooks in it and grants <Boost>% to duplicate food on cook!",
      "States": {
        "Boost": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.1
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
    "King of the Night": {
      "Description": "All active pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 0.2,
          "Scale": 0.04
        }
      }
    },
    "Lazy Nap": {
      "Description": "Every <Cooldown>s, naps for <Duration>s. New fruit within <Range> studs will be <Multiplier>x larger!",
      "States": {
        "Cooldown": {
          "Base": 90,
          "Min": 5,
          "Scale": -1
        },
        "Duration": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 1.5,
          "Max": 5,
          "Scale": 0.01
        },
        "Range": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.15
        }
      }
    },
    "Leaf Lover": {
      "Description": "Passive: All leafy plants grow <Multiplier>x faster!",
      "States": {
        "Multiplier": {
          "Base": 1.45,
          "Scale": 0.15
        },
        "Range": {
          "Base": 25,
          "Scale": 0
        }
      }
    },
    "Let Him Cook": {
      "Description": "Every <Cooldown>m, <Chance>% chance to cook a nearby fruit. Usually Burnt, but occasionally Cooked!",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 806,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -12
        }
      }
    },
    "Lightning Beast": {
      "Description": "Every <Cooldown>m, devours a fruit with Shocked mutation for 1.5x sheckle value to Summon a chain of lightning to mutate <Amount> fruits with Static! During a Thunderstorm: <Chance>% chance for Shocked instead!",
      "States": {
        "Amount": {
          "Base": 4,
          "Max": 9,
          "Scale": 0.15
        },
        "Chance": {
          "Base": 20,
          "Max": 35,
          "Scale": 0.15
        },
        "Cooldown": {
          "Base": 622,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -2.6
        }
      }
    },
    "Lightning Bug": {
      "Description": "Every <Cooldown>s, <Chance>% chance a nearby fruit becomes Shocked!",
      "States": {
        "Chance": {
          "Base": 3,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 80,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Loaded Dog": {
      "Description": "Every <Cooldown>m, drops a <Radius> stud mustard or ketchup puddle that lasts <Duration> seconds. Pets on mustard have their cooldowns tick by <Amount> faster and pets on ketchup gain <Multiplier>% more experience!",
      "States": {
        "Amount": {
          "Base": 0.06,
          "Max": 0.5,
          "Scale": 0.05
        },
        "Cooldown": {
          "Base": 240,
          "Formatter": "ColonTime",
          "Min": 80,
          "Scale": -1.5
        },
        "Duration": {
          "Base": 30,
          "Max": 45,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 0.2,
          "Formatter": "Percentage",
          "Max": 0.4,
          "Scale": 0.01
        },
        "Radius": {
          "Base": 8,
          "Max": 16,
          "Scale": 0.08
        }
      }
    },
    "Lookout": {
      "Description": "Every <Cooldown>m goes to another pet and does a lookout. That pet advances cooldown by <Amount>s! Has a <Chance>% chance to do it again after each lookout.",
      "States": {
        "Amount": {
          "Base": 20,
          "Scale": 0.5
        },
        "Chance": {
          "Base": 15,
          "Max": 100,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 444,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -4.4
        }
      }
    },
    "Man's Best Tomodachi": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.05
        },
        "Cooldown": {
          "Base": 60,
          "Min": 5,
          "Scale": -1
        }
      }
    },
    "Mandrake Essence": {
      "Description": "Harvesting Mandrake crops have a <Chance>% to apply Rot mutation to a random fruit in your garden!",
      "States": {
        "Chance": {
          "Base": 3.5,
          "Max": 7,
          "Scale": 0.05
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
          "Base": 10,
          "Max": 40,
          "Scale": 0.15
        }
      }
    },
    "Meteoric Boiling Point": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Meteoric!",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 1800,
          "Formatter": "ColonTime",
          "Min": 500,
          "Scale": -8.5
        }
      }
    },
    "Milk of the Land": {
      "Description": "All plants within <Range> studs grow <Multiplier>x faster!",
      "States": {
        "Multiplier": {
          "Base": 1.25,
          "Scale": 0.0125
        },
        "Range": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "Mimicry": {
      "Description": "Every <Cooldown>m, mimics and copies an ability from another pet and performs its ability!",
      "States": {
        "Cooldown": {
          "Base": 1212,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -12
        }
      }
    },
    "Mischief": {
      "Description": "Every <Cooldown>m, causes mischief, doing random different actions in your garden!",
      "States": {
        "Cooldown": {
          "Base": 640,
          "Formatter": "ColonTime",
          "Min": 80,
          "Scale": -3.6
        }
      }
    },
    "Mochi Marathon": {
      "Description": "All active Food type pets gain an additional <Chance> XP/s!",
      "States": {
        "Chance": {
          "Base": 0.75,
          "Scale": 0.15
        }
      }
    },
    "Molten Boiling Point": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Molten!",
      "States": {
        "Chance": {
          "Base": 20,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 900,
          "Formatter": "ColonTime",
          "Min": 300,
          "Scale": -4.5
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
    "Moon Harvest": {
      "Description": "<Chance>% chance Night type fruit stays after harvest!",
      "States": {
        "Chance": {
          "Base": 6,
          "Max": 20,
          "Scale": 0.6
        }
      }
    },
    "Moon Nap": {
      "Description": "Every <Cooldown>s, naps for <Duration>s. New fruit within <Range> studs will be <Multiplier>x larger!",
      "States": {
        "Cooldown": {
          "Base": 70,
          "Min": 15,
          "Scale": -1
        },
        "Duration": {
          "Base": 20,
          "Max": 40,
          "Scale": 0.2
        },
        "Multiplier": {
          "Base": 1.5,
          "Max": 8,
          "Scale": 0.02
        },
        "Range": {
          "Base": 20,
          "Max": 40,
          "Scale": 0.2
        }
      }
    },
    "Movement Variation": {
      "Description": " ",
      "States": {
        "Cooldown": {
          "Base": 8,
          "Min": 8,
          "Scale": 0
        }
      }
    },
    "Nine-Tailed Curse": {
      "Description": "Every <Cooldown>m, launches cursed energy at 9 different fruits. Each fruit has <Chance>% to mutate with <font color=\"rgb(0, 85, 255)\">Corrupt Chakra</font> with a very rare chance for <font color=\"rgb(0, 0, 255)\">Corrupt Foxfire Chakra</font> instead!",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 40,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 1260,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -3.6
        }
      }
    },
    "Nine-Tailed Myth": {
      "Description": "Every <Cooldown>m, goes to another player's crop, mutates it with <font color=\"rgb(255, 80, 65)\">Chakra</font> then steals (duplicate) and gives it to you! Very rare chance to mutate with <font color=\"rgb(255, 0, 0)\">Foxfire Chakra</font> mutation instead!",
      "States": {
        "Cooldown": {
          "Base": 1344.5,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -6
        }
      }
    },
    "Nocturnal Nursery": {
      "Description": "Every <Cooldown>s, goes to the egg with the highest hatch time, and reduces its hatch time by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 25,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 60,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Nutty Apology": {
      "Description": "Gains an additional <Amount> xp per second!",
      "States": {
        "Amount": {
          "Base": 3,
          "Max": 20,
          "Scale": 0.3
        }
      }
    },
    "OIL OR BOIL": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit gets the Oil mutation!",
      "States": {
        "Chance": {
          "Base": 14,
          "Max": 30,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 906,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -12
        }
      }
    },
    "Overgrowth": {
      "Description": "Every <Cooldown>m, spreads its roots and all fruit within <Range> studs have a <Chance>% to get the Bloom mutation!",
      "States": {
        "Chance": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.15
        },
        "Cooldown": {
          "Base": 1330,
          "Formatter": "ColonTime",
          "Min": 600,
          "Scale": -6
        },
        "Range": {
          "Base": 30,
          "Max": 60,
          "Scale": 0.3
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
    "Pancake Hunter": {
      "Description": "Every <Cooldown>s, digs down underground to find treasure. Can dig up gear or sheckles!",
      "States": {
        "Cooldown": {
          "Base": 80,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Peach Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and Plasmafies it, applying Plasma mutation!",
      "States": {
        "Cooldown": {
          "Base": 1500,
          "Formatter": "ColonTime",
          "Min": 200,
          "Scale": -6.6
        }
      }
    },
    "Peach Stinger": {
      "Description": "Every <Cooldown>m, stings a random pet and advances its ability cooldown by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 60,
          "Max": 120,
          "Scale": 0.6
        },
        "Cooldown": {
          "Base": 602,
          "Formatter": "ColonTime",
          "Min": 300,
          "Scale": -3.5
        }
      }
    },
    "Pinch Pocket": {
      "Description": "Every <Cooldown>m goes to another random player and pinches them for their money and grants you <Amount> - <AmountHigh> sheckles. Pinched player does not lose sheckles.",
      "States": {
        "Amount": {
          "Base": 225,
          "Scale": 25
        },
        "AmountHigh": {
          "Base": 425,
          "Scale": 25
        },
        "Cooldown": {
          "Base": 378,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -4
        }
      }
    },
    "Pixie Dust": {
      "Description": "Every <Cooldown>m, spreads pixie dust for <Duration>s. All plants within <Range> studs will advance growth an extra 30 seconds every second! Also makes nearby players levitate!",
      "States": {
        "Cooldown": {
          "Base": 222,
          "Formatter": "ColonTime",
          "Min": 100,
          "Scale": -2.4
        },
        "Duration": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.05
        },
        "Range": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.25
        }
      }
    },
    "Playmate": {
      "Description": "Every <Cooldown>s, <Chance>% chance to dig up a random seed!",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 60,
          "Min": 5,
          "Scale": -1
        }
      }
    },
    "Polar Express": {
      "Description": "Every <Cooldown>s, <Chance>% chance a nearby fruit becomes Chilled or Frozen!",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 80,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and pollinates it, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Base": 1510,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -16
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
    "Premium Cheeky Refund": {
      "Description": "<Chance>% chance to refund fruit back to your inventory. Rarer plants have lower chance to refund!",
      "States": {
        "Chance": {
          "Base": 7.5,
          "Max": 20,
          "Scale": 0.075
        }
      }
    },
    "Prickly Blessing": {
      "Description": "Grants prickly plants in <Range> studs a <Multiplier>x variant chance bonus!",
      "States": {
        "Multiplier": {
          "Base": 1.15,
          "Max": 2.2,
          "Scale": 0.0115
        },
        "Range": {
          "Base": 22,
          "Scale": 0.2
        }
      }
    },
    "Prickly Lover": {
      "Description": "Grants prickly plants in <Range> studs a <Multiplier>x size bonus!",
      "States": {
        "Multiplier": {
          "Base": 1.5,
          "Max": 2.2,
          "Scale": 0.015
        },
        "Range": {
          "Base": 30,
          "Scale": 0.2
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
    "Queen Pollinator": {
      "Description": "Every <Cooldown>m, a nearby fruit gets magically pollinated, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Base": 1220,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -16
        }
      }
    },
    "Radiant Pet Mutation": {
      "Description": "<font color=\"rgb(248, 108, 38)\">RADIANT: Every <Cooldown>m, emits sunshine at a random nearby plant and advances their growth by 24 hours!</font>",
      "States": {
        "Cooldown": {
          "Base": 1800,
          "Formatter": "ColonTime",
          "Min": 1200,
          "Scale": -9
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
    "Rainbow Armored Defender": {
      "Description": "When another player steals fruit from you, grants a <Chance>% chance you get the stolen fruit as well!",
      "States": {
        "Chance": {
          "Base": 31.4,
          "Max": 60,
          "Scale": 0.5
        }
      }
    },
    "Rainbow Bacon Frenzy": {
      "Description": "Every <Cooldown>s, emits an aura for <Duration>s granting <Multiplier>x chance for new fruit to grow as variants within <Range> studs!",
      "States": {
        "Cooldown": {
          "Base": 80,
          "Min": 5,
          "Scale": -1
        },
        "Duration": {
          "Base": 30,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 3,
          "Scale": 0.01
        },
        "Range": {
          "Base": 30,
          "Scale": 0.15
        }
      }
    },
    "Rainbow Crafty Dome": {
      "Description": "Grants a <Chance>% chance to duplicate a crafted item!",
      "States": {
        "Chance": {
          "Base": 12,
          "Max": 50,
          "Scale": 0.6
        }
      }
    },
    "Rainbow Crowbar Head": {
      "Description": "Every <Cooldown>s, goes to the cosmetic crate with the highest open time, and reduces its open time by <Amount>s! There is a <Chance>% chance for open time reduction to be multiplied by <Multiplier>x",
      "States": {
        "Amount": {
          "Base": 160,
          "Scale": 1.3
        },
        "Chance": {
          "Base": 51,
          "Scale": 0.5
        },
        "Cooldown": {
          "Base": 41,
          "Min": 10,
          "Scale": -0.9
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
    "Rainbow Elk Forester": {
      "Description": "<Chance>% chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.05
        }
      }
    },
    "Rainbow Flutter": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit with 5+ mutations, removes all mutations from it and turns it Rainbow! Ignores favorited fruit.",
      "States": {
        "Cooldown": {
          "Base": 1808,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -18
        }
      }
    },
    "Rainbow Food Chain": {
      "Description": "Every <Cooldown>m, devours a random mutation from <Amount> fruits in your garden each, then roars, spreading those mutations to 1 random fruit in your garden! Prioritizes applying mutations to a favorited fruit.",
      "States": {
        "Amount": {
          "Base": 6,
          "Scale": 0.4
        },
        "Cooldown": {
          "Base": 912,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -6
        }
      }
    },
    "Rainbow Fortune Cat": {
      "Description": "Every <Cooldown>m, waves and invites good fortune that grants <Chance>% chance to refund fruit back to your inventory for <Duration>s! Rarer fruit have rarer chance to refund.",
      "States": {
        "Chance": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.3
        },
        "Cooldown": {
          "Base": 72,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -0.6
        },
        "Duration": {
          "Base": 20,
          "Max": 42,
          "Scale": 0.25
        }
      }
    },
    "Rainbow Frilled Reptile": {
      "Description": "Every <Cooldown>m opens its frills and spits out venom! The venom spreads to <Number> other random pets, advancing cooldown by <AmountCD> OR granting <AmountXP> xp!",
      "States": {
        "AmountCD": {
          "Base": 80,
          "Max": 160,
          "Scale": 1
        },
        "AmountXP": {
          "Base": 1000,
          "Max": 6000,
          "Scale": 80
        },
        "Cooldown": {
          "Base": 643,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -6.4
        },
        "Number": {
          "Base": 3,
          "Max": 12,
          "Scale": 0.2
        }
      }
    },
    "Rainbow Glorious Wings": {
      "Description": "Every <Cooldown>m, flaunts its wings and releases 2 Cyclones. Pets struck have cooldown advanced by <CooldownAmount>s and fruits struck have a <Chance>% to get the Cyclonic mutation!",
      "States": {
        "Chance": {
          "Base": 18,
          "Max": 50,
          "Scale": 0.18
        },
        "Cooldown": {
          "Base": 615,
          "Formatter": "ColonTime",
          "Min": 150,
          "Scale": -2
        },
        "CooldownAmount": {
          "Base": 100,
          "Max": 200,
          "Scale": 1.5
        },
        "CycloneAmount": {
          "Base": 2,
          "Max": 2,
          "Scale": 0
        }
      }
    },
    "Rainbow Loaded Dog": {
      "Description": "Every <Cooldown>m, drops a <Radius> stud mustard or ketchup puddle that lasts <Duration> seconds. Pets on mustard have their cooldowns tick by <Amount> faster and pets on ketchup gain <Multiplier>% more experience!",
      "States": {
        "Amount": {
          "Base": 0.09,
          "Max": 0.75,
          "Scale": 0.075
        },
        "Cooldown": {
          "Base": 200,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -1.5
        },
        "Duration": {
          "Base": 45,
          "Max": 60,
          "Scale": 0.15
        },
        "Multiplier": {
          "Base": 0.3,
          "Formatter": "Percentage",
          "Max": 0.4,
          "Scale": 0.01
        },
        "Radius": {
          "Base": 16,
          "Max": 32,
          "Scale": 0.08
        }
      }
    },
    "Rainbow Mandrake Essence": {
      "Description": "Harvesting Mandrake crops have a <Chance>% to apply Rot mutation to a random fruit in your garden!",
      "States": {
        "Chance": {
          "Base": 7,
          "Max": 14,
          "Scale": 0.15
        }
      }
    },
    "Rainbow Meteoric Boiling Point": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Meteoric!",
      "States": {
        "Chance": {
          "Base": 20,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 1400,
          "Formatter": "ColonTime",
          "Min": 400,
          "Scale": -8.5
        }
      }
    },
    "Rainbow Molten Boiling Point": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Molten!",
      "States": {
        "Chance": {
          "Base": 40,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 700,
          "Formatter": "ColonTime",
          "Min": 200,
          "Scale": -4.5
        }
      }
    },
    "Rainbow Nine-Tailed Curse": {
      "Description": "Every <Cooldown>m, launches cursed energy at 9 different fruits. Each fruit has <Chance>% to mutate with <font color=\"rgb(0, 85, 255)\">Corrupt Chakra</font> with a very rare chance for <font color=\"rgb(0, 0, 255)\">Corrupt Foxfire Chakra</font> instead!",
      "States": {
        "Chance": {
          "Base": 25,
          "Max": 50,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 630,
          "Formatter": "ColonTime",
          "Min": 30,
          "Scale": -3.6
        }
      }
    },
    "Rainbow Pet Mutation": {
      "Description": "<font color=\"rgb(255, 0, 0)\">R</font><font color=\"rgb(255, 127, 0)\">A</font><font color=\"rgb(255, 255, 0)\">I</font><font color=\"rgb(0, 255, 0)\">N</font><font color=\"rgb(0, 0, 255)\">B</font><font color=\"rgb(75, 0, 130)\">O</font><font color=\"rgb(148, 0, 211)\">W</font><font color=\"rgb(4, 175, 236)\">: Provides a bigger increase to the pet's passive!</font>",
      "States": [

      ]
    },
    "Rainbow Tree Spirit": {
      "Description": "<Chance>% chance Zen type fruit gets Tranquil mutation after collecting!",
      "States": {
        "Chance": {
          "Base": 8,
          "Max": 16,
          "Scale": 0.4
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
    "Rascal": {
      "Description": "Every <Cooldown>m, goes to another player's plot and steals (duplicate) a random crop and gives it to you!",
      "States": {
        "Cooldown": {
          "Base": 904.5,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -4
        }
      }
    },
    "Sanguine Spike": {
      "Description": "Grants prickly plants in <Range> studs a <Multiplier>x size bonus!",
      "States": {
        "Multiplier": {
          "Base": 2,
          "Max": 3.2,
          "Scale": 0.02
        },
        "Range": {
          "Base": 30,
          "Scale": 0.2
        }
      }
    },
    "Scamp": {
      "Description": "Every 6:66m, the Imp will playfully invite you to chase it. Catching the Imp will grant a random reward! The Imp has a <Chance>% to play again on successful chase!",
      "States": {
        "Chance": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.05
        },
        "Cooldown": {
          "Base": 426,
          "Formatter": "ColonTime",
          "Max": 426,
          "Min": 426,
          "Scale": 0
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
    "Scavenger": {
      "Description": "When you get a Lucky Harvest: There is a <Chance>% chance to get an extra seed! (stacked chance capped at 12%)",
      "States": {
        "Chance": {
          "Base": 3,
          "Max": 6,
          "Scale": 0.3
        }
      }
    },
    "Scorched Soil": {
      "Description": "Every <Cooldown>s, <Chance>% chance nearby fruit becomes Burnt!",
      "States": {
        "Chance": {
          "Base": 20,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 80,
          "Min": 5,
          "Scale": -1
        }
      }
    },
    "Scoundrel": {
      "Description": "Every <Cooldown>m, goes to another player's random crop tries to get a seed from it and gives it to you. If it succeeds it will try to steal again. Rarer seeds have less chance to succeed stealing!",
      "States": {
        "Cooldown": {
          "Base": 443,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -5
        }
      }
    },
    "Seal the Deal": {
      "Description": "Selling pets have a <Chance>% chance to get the pet back as its egg equivalent! Cannot get Premium/Exotic/Rainbow Eggs back. This bonus is capped at 50% per pet sold.",
      "States": {
        "Chance": {
          "Base": 2.5,
          "Max": 8,
          "Scale": 0.22
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
    "Shell Share": {
      "Description": "Every <Cooldown>m, shares its wisdom with a random pet, granting <Amount> bonus experience!",
      "States": {
        "Amount": {
          "Base": 990,
          "Scale": 14
        },
        "Cooldown": {
          "Base": 720,
          "Formatter": "ColonTime",
          "Min": 20,
          "Scale": -6.5
        }
      }
    },
    "Shiny Pet Mutation": {
      "Description": "<font color=\"rgb(145, 207, 221)\">SHINY: Provides an additional 15% boost to the pet's xp per second!</font>",
      "States": [

      ]
    },
    "Shocked Pet Mutation": {
      "Description": "<font color=\"rgb(255, 255, 100)\">SHOCKED: During a Thunderstorm: Every <Cooldown>s, has a <Chance>% chance to attract lightning, shocking nearby fruits!</font>",
      "States": {
        "Chance": {
          "Base": 25,
          "Max": 30,
          "Scale": 0.02
        },
        "Cooldown": {
          "Base": 60,
          "Min": 45,
          "Scale": -0.6
        }
      }
    },
    "Silksong": {
      "Description": "Every <Cooldown>m, sings to a random pet and restores its hunger to 100%!",
      "States": {
        "Cooldown": {
          "Base": 763,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -7
        }
      }
    },
    "Silver Pet Mutation": {
      "Description": "<font color=\"rgb(222, 222, 222)\">SILVER: Provides a small increase to the pet's passive!</font>",
      "States": [

      ]
    },
    "Silver Screech": {
      "Description": "Every <Cooldown>m, screeches and all fruits within <Range> studs have a <Chance>% chance to turn Silver; <GoldChance>% chance to turn Gold!",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 40,
          "Scale": 0.05
        },
        "Cooldown": {
          "Base": 1000,
          "Formatter": "ColonTime",
          "Min": 400,
          "Scale": -5
        },
        "GoldChance": {
          "Base": 1,
          "Max": 3,
          "Scale": 0.01
        },
        "Range": {
          "Base": 20,
          "Max": 40,
          "Scale": 0.25
        }
      }
    },
    "Sky Reptile": {
      "Description": "Every <Cooldown>m, flaps its wings and sends out ripples of wind, causing <Amount> random fruit to get Windstruck, with a <Chance>% chance for Twisted to be applied as well!",
      "States": {
        "Amount": {
          "Base": 3,
          "Scale": 0.15
        },
        "Chance": {
          "Base": 18.2,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 666,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -6
        }
      }
    },
    "Slow and Steady": {
      "Description": "<Chance>% extra chance harvested plants drop seeds. Rarer plants have lower chance to duplicate.",
      "States": {
        "Chance": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.05
        }
      }
    },
    "Sly": {
      "Description": "Every <Cooldown>m, goes to another player's random fruit, has a chance to copy the most expensive mutation, and apply it to random fruit you own! The higher mutation multiplier the rarer chance to copy.",
      "States": {
        "Cooldown": {
          "Base": 1350,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -13
        }
      }
    },
    "Spotted Forester": {
      "Description": "<Chance>% chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.05
        }
      }
    },
    "Sprout": {
      "Description": "Every <Cooldown>m, swaps mutations between two different random fruits! Ignores favorited fruit.",
      "States": {
        "Cooldown": {
          "Base": 552,
          "Formatter": "ColonTime",
          "Max": 300,
          "Scale": -1
        }
      }
    },
    "Stinger": {
      "Description": "Every <Cooldown>m, stings a random pet and advances its ability cooldown by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 60,
          "Scale": 0.6
        },
        "Cooldown": {
          "Base": 602,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -6
        }
      }
    },
    "Sugar Warp": {
      "Description": "Harvesting Sugar Apple crops have a <Chance>% to apply Warped mutation to a random fruit in your garden!",
      "States": {
        "Chance": {
          "Base": 2,
          "Max": 4,
          "Scale": 0.05
        }
      }
    },
    "Summer Regeneration": {
      "Description": "<Chance>% chance Summer type fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "States": {
        "Chance": {
          "Base": 6,
          "Max": 13,
          "Scale": 0.2
        }
      }
    },
    "Sushi Express": {
      "Description": "Every <Cooldown>s, <Chance>% chance a nearby fruit becomes Chilled or Frozen",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.15
        },
        "Cooldown": {
          "Base": 80,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Sushi Time": {
      "Description": "Every <Cooldown>m, flings sushi towards a random pet and feeds it for <Amount>% of its hunger",
      "States": {
        "Amount": {
          "Base": 0.01,
          "Formatter": "Percentage",
          "Max": 0.5,
          "Scale": 0.001
        },
        "Cooldown": {
          "Base": 670,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -3.5
        }
      }
    },
    "Tarantula Stinger": {
      "Description": "Every <Cooldown>m, stings a random pet and advances its ability cooldown by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 80,
          "Scale": 0.8
        },
        "Cooldown": {
          "Base": 302,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -3
        }
      }
    },
    "Tech Savvy": {
      "Description": "Every <Cooldown>m goes to the mutation machine and tinkers with it and advances its time by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 40,
          "Max": 80,
          "Scale": 0.5
        },
        "Cooldown": {
          "Base": 400,
          "Formatter": "ColonTime",
          "Min": 200,
          "Scale": -1
        }
      }
    },
    "Thumper": {
      "Description": "Every <Cooldown>s, thumps its feet and has a <Chance>% chance to mutate a nearby fruit, applying the Sandy mutation!",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.25
        },
        "Cooldown": {
          "Base": 100,
          "Min": 50,
          "Scale": -0.25
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
          "Base": 5,
          "Max": 30,
          "Scale": 0.15
        }
      }
    },
    "Touchdown": {
      "Description": "Every <Cooldown>s, runs to the Gear Shop or Seed Shop (whichever is farther) and does a touchdown which awards you with 870 Sheckles or <Chance>% chance for a Watering Can instead!",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 35,
          "Scale": 0.33
        },
        "Cooldown": {
          "Base": 87,
          "Min": 87,
          "Scale": 0
        }
      }
    },
    "Trade-In": {
      "Description": "When selling this pet: Has a small chance to get a Beanstalk seed!",
      "States": [

      ]
    },
    "Tranquil Pet Mutation": {
      "Description": "<font color=\"rgb(247, 245, 184)\">TRANQUIL: Every <Cooldown>m, a nearby fruit finds inner peace, with a <Chance>% chance to apply the Tranquil mutation!</font>",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 30,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 1500,
          "Formatter": "ColonTime",
          "Min": 1000,
          "Scale": -3
        }
      }
    },
    "Transmutation": {
      "Description": "Every <Cooldown>m, turns one random fruit gold!",
      "States": {
        "Cooldown": {
          "Base": 300,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -3
        }
      }
    },
    "Treasure Hunter": {
      "Description": "Every <Cooldown>s, digs down underground to find treasure. Can dig up gear or sheckles!",
      "States": {
        "Cooldown": {
          "Base": 80,
          "Min": 10,
          "Scale": -1
        }
      }
    },
    "Tree Spirit": {
      "Description": "<Chance>% chance Zen type fruit gets Tranquil mutation after collecting!",
      "States": {
        "Chance": {
          "Base": 6,
          "Max": 12,
          "Scale": 0.33
        }
      }
    },
    "Tri-Horn": {
      "Description": "Every <Cooldown>m, rams into <Amount> random plants and advance their growth by <GrowthAmount>m! Has a <Chance>% chance to do it again each time.",
      "States": {
        "Amount": {
          "Base": 3,
          "Max": 3,
          "Scale": 0
        },
        "Chance": {
          "Base": 15,
          "Max": 30,
          "Scale": 0.15
        },
        "Cooldown": {
          "Base": 213,
          "Formatter": "ColonTime",
          "Min": 213,
          "Scale": 0
        },
        "GrowthAmount": {
          "Base": 2013,
          "Formatter": "ColonTime",
          "Max": 2013,
          "Scale": 0
        }
      }
    },
    "Tropical Blessing": {
      "Description": "Grants all tropical plants within <Range> studs, a <Multiplier>x variant chance bonus!",
      "States": {
        "Multiplier": {
          "Base": 1.15,
          "Max": 8,
          "Scale": 0.1
        },
        "Range": {
          "Base": 25,
          "Scale": 0.25
        }
      }
    },
    "Tropical Lover": {
      "Description": "Grants all tropical plants within <Range> studs, a <Multiplier>x size bonus!",
      "States": {
        "Multiplier": {
          "Base": 1.2,
          "Max": 2.1,
          "Scale": 0.05
        },
        "Range": {
          "Base": 25,
          "Scale": 0.25
        }
      }
    },
    "Turtle Tinkerer": {
      "Description": "All Sprinklers last <Multiplier>% longer!",
      "States": {
        "Multiplier": {
          "Base": 20,
          "Scale": 0.2
        },
        "Range": {
          "Base": 35,
          "Scale": 0.5
        }
      }
    },
    "Utter Beauty": {
      "Description": "Every <Cooldown>m, fans its feathers and all active pets within <Range> studs will advance cooldown for their abilities by <Amount>s!",
      "States": {
        "Amount": {
          "Base": 65,
          "Scale": 0.6
        },
        "Cooldown": {
          "Base": 606,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -6
        },
        "Range": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Venom Spit": {
      "Description": "Every <Cooldown>m, spits at <Amount> different fruit/eggs/pets. Fruits get Toxic mutation, eggs advance by <AmountEgg> seconds, pets gain <AmountXP> XP.",
      "States": {
        "Amount": {
          "Base": 5,
          "Max": 10,
          "Scale": 0.1
        },
        "AmountEgg": {
          "Base": 80,
          "Max": 150,
          "Scale": 0.5
        },
        "AmountXP": {
          "Base": 800,
          "Max": 1500,
          "Scale": 2.5
        },
        "Cooldown": {
          "Base": 625,
          "Formatter": "ColonTime",
          "Min": 180,
          "Scale": -3.5
        }
      }
    },
    "Verdant Bird": {
      "Description": "Every <Cooldown>m, <Chance>% chance to mutate a nearby fruit, applying the Verdant mutation!",
      "States": {
        "Chance": {
          "Base": 15,
          "Scale": 0.5
        },
        "Cooldown": {
          "Base": 524,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -5
        }
      }
    },
    "Wanna-Bee": {
      "Description": "Every <Cooldown>m, goes to a nearby fruit and tries to pollinate it, but its not a bee so it fails and turns it to Honey Glazed instead :(",
      "States": {
        "Cooldown": {
          "Base": 1510,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -16
        }
      }
    },
    "Wasp Pollinator": {
      "Description": "Every <Cooldown>m, flies to a nearby fruit and pollinates it, applying Pollinated mutation!",
      "States": {
        "Cooldown": {
          "Base": 1800,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -18
        }
      }
    },
    "Water Diety": {
      "Description": "When selling fruits with Wet/Drenched mutation: There is a <Chance>% chance a random mutation from that fruit will be applied to a fruit in your garden!",
      "States": {
        "Chance": {
          "Base": 4,
          "Max": 8,
          "Scale": 0.1
        }
      }
    },
    "Water Spirit": {
      "Description": "Every <Cooldown>m, sprays water on all fruits within <Range> studs, applying Wet mutation. Has a <Chance>% to replace Wet mutations already on fruit with Bloodlit mutation!",
      "States": {
        "Chance": {
          "Base": 10,
          "Scale": 0.1
        },
        "Cooldown": {
          "Base": 514,
          "Formatter": "ColonTime",
          "Min": 60,
          "Scale": -4
        },
        "Range": {
          "Base": 20,
          "Scale": 0.2
        }
      }
    },
    "Water Splash": {
      "Description": "Every <Cooldown>s, splashes water at a nearby fruit and it has a <Chance>% chance to become Wet!",
      "States": {
        "Chance": {
          "Base": 12,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 164,
          "Min": 15,
          "Scale": -3
        }
      }
    },
    "Water Spray": {
      "Description": "Every <Cooldown>s, sprays water on a nearby plant.",
      "States": {
        "Cooldown": {
          "Base": 30,
          "Min": 5,
          "Scale": -1
        }
      }
    },
    "Whisker Wisdom": {
      "Description": "Every <Cooldown>m, gains additional <Amount> bonus experience!",
      "States": {
        "Amount": {
          "Base": 500,
          "Scale": 8
        },
        "Cooldown": {
          "Base": 603,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -8
        }
      }
    },
    "Whiskier Wisdom": {
      "Description": "Every <Cooldown>m, gains additional <Amount> bonus experience!",
      "States": {
        "Amount": {
          "Base": 750,
          "Scale": 11
        },
        "Cooldown": {
          "Base": 503,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -7
        }
      }
    },
    "Windy Pet Mutation": {
      "Description": "<font color=\"rgb(162, 185, 209)\">WINDY: Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Windstruck!</font>",
      "States": {
        "Chance": {
          "Base": 20,
          "Max": 30,
          "Scale": 0.03
        },
        "Cooldown": {
          "Base": 300,
          "Formatter": "ColonTime",
          "Min": 30,
          "Scale": -3
        }
      }
    },
    "Wings of Freedom": {
      "Description": "Every <Cooldown>m, takes flight and spreads its wings. All eggs advanced their hatch time by <Amount>s! There's a <Chance>% chance for the time advance to be multiplied by <Multiplier>.",
      "States": {
        "Amount": {
          "Base": 70.4,
          "Max": 70.4,
          "Scale": 0
        },
        "Chance": {
          "Base": 70.4,
          "Max": 70.4,
          "Scale": 0
        },
        "Cooldown": {
          "Base": 424,
          "Formatter": "ColonTime",
          "Min": 424,
          "Scale": 0
        },
        "Multiplier": {
          "Base": 1.8,
          "Scale": 0.18
        }
      }
    },
    "You're a Star": {
      "Description": "Gains an additional <Amount> xp per second!",
      "States": {
        "Amount": {
          "Base": 5,
          "Max": 25,
          "Scale": 0.5
        }
      }
    },
    "Zen Zone": {
      "Description": "Every <Cooldown>s, prays for <Duration>s granting <Multiplier>x variant chance within <Range> studs!",
      "States": {
        "Cooldown": {
          "Base": 80,
          "Min": 5,
          "Scale": -1
        },
        "Duration": {
          "Base": 10,
          "Scale": 0.1
        },
        "Multiplier": {
          "Base": 1.5,
          "Scale": 0.005
        },
        "Range": {
          "Base": 10,
          "Scale": 0.1
        }
      }
    },
    "Zombify": {
      "Description": "Every <Cooldown>m, <Chance>% chance a nearby fruit becomes Zombified!",
      "States": {
        "Chance": {
          "Base": 20,
          "Scale": 0.2
        },
        "Cooldown": {
          "Base": 1600,
          "Formatter": "ColonTime",
          "Min": 15,
          "Scale": -18
        }
      }
    }
  },
  "pets": {
    "Ankylosaurus": {
      "defaultHunger": 40000,
      "description": "Armored Defender: When a player steals a fruit from you, grants a chance you get the stolen fruit as well.",
      "icon": "rbxassetid://128962631009648",
      "name": "Ankylosaurus",
      "passives": [
        "Armored Defender"
      ],
      "rarity": "Mythical"
    },
    "Apple Gazelle": {
      "defaultHunger": 25000,
      "description": "Apple Harvester: Fruits that have apple in the name have a chance to duplicate when collected & Sugar Warp: Harvesting Sugar Apples have a chance to apply Warped mutation to a random fruit in your garden",
      "icon": "rbxassetid://117047179450553",
      "name": "Apple Gazelle",
      "passives": [
        "Apple Harvester",
        "Sugar Warp"
      ],
      "rarity": "Mythical"
    },
    "Axolotl": {
      "defaultHunger": 22000,
      "description": "Summer Regeneration: Summer type fruits have a chance to stay after collecting!",
      "icon": "rbxassetid://115096754077953",
      "name": "Axolotl",
      "passives": [
        "Summer Regeneration"
      ],
      "rarity": "Mythical"
    },
    "Bacon Pig": {
      "defaultHunger": 5000,
      "description": "Bacon Frenzy: Emits an aura granting chance for new fruit to grow as variants",
      "icon": "rbxassetid://133632938597101",
      "name": "Bacon Pig",
      "passives": [
        "Bacon Frenzy"
      ],
      "rarity": "Uncommon"
    },
    "Bagel Bunny": {
      "defaultHunger": 1200,
      "description": "Bagel and Carrots: Runs to carrots, eats them, and grants bonus sheckles multiplier",
      "icon": "rbxassetid://83878222838385",
      "name": "Bagel Bunny",
      "passives": [
        "Bagel and Carrots"
      ],
      "rarity": "Common"
    },
    "Bald Eagle": {
      "defaultHunger": 15000,
      "description": "Wings of Freedom: Every 7:04m, takes flight and spreads its wings. All eggs advanced their hatch time by 70.4s. There's a 7.04% chance for the effect to be multiplied",
      "icon": "rbxassetid://100494018595907",
      "name": "Bald Eagle",
      "passives": [
        "Wings of Freedom",
        "Movement Variation"
      ],
      "rarity": "Legendary"
    },
    "Bear Bee": {
      "defaultHunger": 45000,
      "description": "Wanna-Bee: Occasionally tries to pollinate fruit, but it just ends up being Honey-Glazed",
      "icon": "rbxassetid://97465846056354",
      "name": "Bear Bee",
      "passives": [
        "Wanna-Bee"
      ],
      "rarity": "Mythical"
    },
    "Bee": {
      "defaultHunger": 25000,
      "description": "Pollinator: Occasionally pollinates fruit",
      "icon": "rbxassetid://114116135745614",
      "name": "Bee",
      "passives": [
        "Pollinator"
      ],
      "rarity": "Uncommon"
    },
    "Black Bunny": {
      "defaultHunger": 1300,
      "description": "Carrot Devourer: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)",
      "icon": "rbxassetid://86614624778104",
      "name": "Black Bunny",
      "passives": [
        "Carrot Chomper"
      ],
      "rarity": "Uncommon"
    },
    "Blood Hedgehog": {
      "defaultHunger": 30000,
      "description": "Sanguine Spike: Makes nearby prickly fruit have increased variant chance and grow bigger",
      "icon": "rbxassetid://76471191139414",
      "name": "Blood Hedgehog",
      "passives": [
        "Sanguine Spike",
        "Prickly Blessing"
      ],
      "rarity": "Legendary"
    },
    "Blood Kiwi": {
      "defaultHunger": 45000,
      "description": "Crimson Cradle: Occasionally reduces the egg hatch time and boosts egg hatch speed",
      "icon": "rbxassetid://87343374343285",
      "name": "Blood Kiwi",
      "passives": [
        "Crimson Cradle",
        "Better Eggcelerator"
      ],
      "rarity": "Legendary"
    },
    "Blood Owl": {
      "defaultHunger": 50000,
      "description": "Monarch of Midnight: Grants bonus experience per second gain to all active pets",
      "icon": "rbxassetid://81262783747840",
      "name": "Blood Owl",
      "passives": [
        "Monarch of Midnight",
        "Movement Variation"
      ],
      "rarity": "Divine"
    },
    "Brontosaurus": {
      "defaultHunger": 80000,
      "description": "Giant Incubator: Pets hatched from eggs have higher base weight",
      "icon": "rbxassetid://138431192706334",
      "name": "Brontosaurus",
      "passives": [
        "Giant Incubator"
      ],
      "rarity": "Mythical"
    },
    "Brown Mouse": {
      "defaultHunger": 15000,
      "description": "Whiskier Wisdom: Occasionally gains bonus experience & Cheese Hop: Increase player jump height",
      "icon": "rbxassetid://94641319183999",
      "name": "Brown Mouse",
      "passives": [
        "Whiskier Wisdom",
        "Cheese Hop"
      ],
      "rarity": "Legendary"
    },
    "Bunny": {
      "defaultHunger": 1100,
      "description": "Carrot Chomper: Runs to carrots, eats them, and grants bonus sheckles (more than normal value)",
      "icon": "rbxassetid://85830855120751",
      "name": "Bunny",
      "passives": [
        "Carrot Chomper"
      ],
      "rarity": "Common"
    },
    "Butterfly": {
      "defaultHunger": 26000,
      "description": "Rainbow Flutter: Occasionally flies to a fruit with 4+ mutations, removes all mutations from it and converts it into rainbow. Ignores favorited fruit",
      "icon": "rbxassetid://119048229505161",
      "name": "Butterfly",
      "passives": [
        "Rainbow Flutter"
      ],
      "rarity": "Mythical"
    },
    "Capybara": {
      "defaultHunger": 30000,
      "description": "Chill Zone: Nearby pets' hunger will not go down and they will gain additional xp per second",
      "icon": "rbxassetid://109096250560950",
      "name": "Capybara",
      "passives": [
        "Chill Zone"
      ],
      "rarity": "Legendary"
    },
    "Cat": {
      "defaultHunger": 1400,
      "description": "Cat Nap: Cat naps in a random spot in your farm, emitting an aura that boosts nearby fruit size",
      "icon": "rbxassetid://136444015144013",
      "name": "Cat",
      "passives": [
        "Cat Nap"
      ],
      "rarity": "Uncommon"
    },
    "Caterpillar": {
      "defaultHunger": 25000,
      "description": "Leaf Lover Passive: Boost nearby Leafy plants growth rate",
      "icon": "rbxassetid://119651461526366",
      "name": "Caterpillar",
      "passives": [
        "Leaf Lover"
      ],
      "rarity": "Legendary"
    },
    "Chicken": {
      "defaultHunger": 3400,
      "description": "Eggcelerator: Decreases the time needed to hatch other eggs",
      "icon": "rbxassetid://108080824427369",
      "name": "Chicken",
      "passives": [
        "Eggcelerator"
      ],
      "rarity": "Uncommon"
    },
    "Chicken Zombie": {
      "defaultHunger": 35000,
      "description": "Zombify: Occasionally has a chance to zombify a nearby random fruit & Eggcelerator: Decreases the time needed to hatch other eggs",
      "icon": "rbxassetid://108581559611673",
      "name": "Chicken Zombie",
      "passives": [
        "Zombify",
        "Eggcelerator"
      ],
      "rarity": "Mythical"
    },
    "Cockatrice": {
      "defaultHunger": 66000,
      "description": "Silver Screech: Occasionally lets out a screech that has a chance to convert nearby fruit to Silver or Gold & Venom Spit: Spits venom at different fruit/egg/pets which apply bonuses",
      "icon": "rbxassetid://82549803808662",
      "name": "Cockatrice",
      "passives": [
        "Silver Screech",
        "Venom Spit"
      ],
      "rarity": "Divine"
    },
    "Cooked Owl": {
      "defaultHunger": 50000,
      "description": "Let Him Cook: Occasionaly burns or cook a random nearby fruit & King of the Grill: Grants bonus experience per second gain to all active pets. Also very tasty!",
      "icon": "rbxassetid://78954652883059",
      "name": "Cooked Owl",
      "passives": [
        "Let Him Cook",
        "King of the Grill",
        "Movement Variation"
      ],
      "rarity": "Mythical"
    },
    "Corrupted Kitsune": {
      "defaultHunger": 49999,
      "description": "Nine-Tailed Curse: Occasionally, Removes 9 mutations from 9 different fruit. Applies Corrupted Chakra with a very rare chance for Corrupted Foxfire Chakra to 1 random fruit.",
      "icon": "rbxassetid://73884777977436",
      "name": "Corrupted Kitsune",
      "passives": [
        "Nine-Tailed Curse"
      ],
      "rarity": "Prismatic"
    },
    "Corrupted Kodama": {
      "defaultHunger": 22000,
      "description": "Corrupted Tree Spirit: Collecting Zen type fruits have a chance to mutate with Corrupt.",
      "icon": "rbxassetid://131755084333898",
      "name": "Corrupted Kodama",
      "passives": [
        "Corrupted Tree Spirit"
      ],
      "rarity": "Legendary"
    },
    "Cow": {
      "defaultHunger": 9500,
      "description": "Milk of the Land: Fertilizing aura that boosts nearby plant growth speed ",
      "icon": "rbxassetid://118832676475537",
      "name": "Cow",
      "passives": [
        "Milk of the Land"
      ],
      "rarity": "Legendary"
    },
    "Crab": {
      "defaultHunger": 3000,
      "description": "Pinch Pocket: Occasionally goes to another player and pinches them and grants you a small amount of sheckles",
      "icon": "rbxassetid://73259620945174",
      "name": "Crab",
      "passives": [
        "Pinch Pocket"
      ],
      "rarity": "Common"
    },
    "Dairy Cow": {
      "defaultHunger": 9000,
      "description": "Milk of the Land: Fertilizing aura that boosts nearby plant growth speed & Trade-In: Selling this pet has a small chance to get a Beanstalk seed",
      "icon": "rbxassetid://78935458311782",
      "name": "Dairy Cow",
      "passives": [
        "Milk of the Land",
        "Trade-In"
      ],
      "rarity": "Common"
    },
    "Deer": {
      "defaultHunger": 2500,
      "description": "Forester: When harvesting berry plants, there is a chance the fruit will remain",
      "icon": "rbxassetid://91926785467809",
      "name": "Deer",
      "passives": [
        "Forester"
      ],
      "rarity": "Uncommon"
    },
    "Dilophosaurus": {
      "defaultHunger": 30000,
      "description": "Frilled Reptile: Occasionally opens its frills and spits out venom! The venom spreads to other random pets, advancing cooldown OR granting bonus xp",
      "icon": "rbxassetid://88442192911950",
      "name": "Dilophosaurus",
      "passives": [
        "Frilled Reptile"
      ],
      "rarity": "Mythical"
    },
    "Disco Bee": {
      "defaultHunger": 25000,
      "description": "Disco Disco: Occasionally has a chance to turn a nearby fruit into Disco",
      "icon": "rbxassetid://139406192899443",
      "name": "Disco Bee",
      "passives": [
        "Disco Disco"
      ],
      "rarity": "Divine"
    },
    "Dog": {
      "defaultHunger": 1000,
      "description": "Digging Buddy: Occasionally digs up a random seed",
      "icon": "rbxassetid://135018170520317",
      "name": "Dog",
      "passives": [
        "Digging Buddy"
      ],
      "rarity": "Common"
    },
    "Dragonfly": {
      "defaultHunger": 100000,
      "description": "Transmutation: Every now and then turns a fruit to gold",
      "icon": "rbxassetid://118484611393651",
      "name": "Dragonfly",
      "passives": [
        "Transmutation"
      ],
      "rarity": "Divine"
    },
    "Echo Frog": {
      "defaultHunger": 50000,
      "description": "Echo Croak: Will occasionally advance a nearby plant's growth by 24 hours",
      "icon": "rbxassetid://102271225890686",
      "name": "Echo Frog",
      "passives": [
        "Echo Croak"
      ],
      "rarity": "Mythical"
    },
    "Elk": {
      "defaultHunger": 2500,
      "description": "Elk Forester: Chance berry fruit stays after collecting! Rarer plants have a rarer chance to replant",
      "icon": "rbxassetid://98272040040520",
      "name": "Elk",
      "passives": [
        "Elk Forester"
      ],
      "rarity": "Uncommon"
    },
    "Fennec Fox": {
      "defaultHunger": 35000,
      "description": "Sly: Occasionally goes to another player's random fruit, has a chance to copy 1 mutation from it and applies it to a random fruit you own.",
      "icon": "rbxassetid://106568248173155",
      "name": "Fennec Fox",
      "passives": [
        "Sly"
      ],
      "rarity": "Divine"
    },
    "Firefly": {
      "defaultHunger": 25000,
      "description": "Lightning Bug: Occasionally strikes a random nearby fruit, with a small chance of turning it Shocked",
      "icon": "rbxassetid://131310748087635",
      "name": "Firefly",
      "passives": [
        "Lightning Bug"
      ],
      "rarity": "Mythical"
    },
    "Flamingo": {
      "defaultHunger": 14000,
      "description": "Flamboyance: Occasionally stands on one legs and all nearby plants will grow incredibly fast",
      "icon": "rbxassetid://122573642551827",
      "name": "Flamingo",
      "passives": [
        "Flamboyance"
      ],
      "rarity": "Rare"
    },
    "Football": {
      "defaultHunger": 870,
      "description": "Touchdown: Occasionally runs to the Gear Shop or Seed Shop (whichever is farther) and does a touchdown which awards you with sheckles or a Watering Can",
      "icon": "rbxassetid://97868319630227",
      "name": "Football",
      "passives": [
        "Touchdown"
      ],
      "rarity": "Legendary"
    },
    "French Fry Ferret": {
      "defaultHunger": 37000,
      "description": "Welcome to Fry Town: Occasionally increases a pet's level by one",
      "icon": "rbxassetid://124662460084969",
      "name": "French Fry Ferret",
      "passives": [
        "Friendly Frier"
      ],
      "rarity": "Divine"
    },
    "Frog": {
      "defaultHunger": 50000,
      "description": "Croak: Will occasionally advance a nearby plant's growth by 24 hours",
      "icon": "rbxassetid://96930166899467",
      "name": "Frog",
      "passives": [
        "Croak"
      ],
      "rarity": "Legendary"
    },
    "Giant Ant": {
      "defaultHunger": 18000,
      "description": "For the Blue Colony: Small chance to duplicate harvested plant & Candy Harvester: Increased chance to duplicate harvested candy type plant",
      "icon": "rbxassetid://71413253805996",
      "name": "Giant Ant",
      "passives": [
        "For the Blue Colony",
        "Candy Harvester"
      ],
      "rarity": "Mythical"
    },
    "Glimmering Sprite": {
      "defaultHunger": 25000,
      "description": "Glimmer: Occasionally flies to a random fruit and applies the Glimmering mutation",
      "icon": "rbxassetid://92219508074359",
      "name": "Glimmering Sprite",
      "passives": [
        "Glimmer"
      ],
      "rarity": "Mythical"
    },
    "Gnome": {
      "defaultHunger": 25000,
      "description": "Gnome Collector: Has a chance to mutate a random fruit with the Gnomed mutation. Gains additional chance for every Gnome cosmetic in your garden",
      "icon": "rbxassetid://109829511445289",
      "name": "Gnome",
      "passives": [
        "Gnome Collector"
      ],
      "rarity": "Legendary"
    },
    "Golden Bee": {
      "defaultHunger": 25000,
      "description": "Pollinator: Occasionally pollinates fruit & Golden Harvest: Harvested fruit has a chance to turn to gold",
      "icon": "rbxassetid://125658111834879",
      "name": "Golden Bee",
      "passives": [
        "Pollinator",
        "Golden Harvest"
      ],
      "rarity": "Mythical"
    },
    "Golden Goose": {
      "defaultHunger": 48000,
      "description": "Golden Laying: Occasionally lays a Golden Egg plant that starts with the Fortune mutation. Selling the Golden Egg has chance to apply Fortune mutation to a random fruit in your garden",
      "icon": "rbxassetid://116621756658631",
      "name": "Golden Goose",
      "passives": [
        "Golden Laying"
      ],
      "rarity": "Divine"
    },
    "Golden Lab": {
      "defaultHunger": 1200,
      "description": "Digging Friend: Occasionally digs up a random seed at a higher chance",
      "icon": "rbxassetid://99376934607716",
      "name": "Golden Lab",
      "passives": [
        "Digging Friend"
      ],
      "rarity": "Common"
    },
    "Golem": {
      "defaultHunger": 32000,
      "description": "Tech Savvy: Goes to the mutation machine and tinkers with it and advances its time",
      "icon": "rbxassetid://92787444445017",
      "name": "Golem",
      "passives": [
        "Tech Savvy"
      ],
      "rarity": "Mythical"
    },
    "Gorilla Chef": {
      "defaultHunger": 55000,
      "description": "Helping Hands: When crafting, each material has a chance for it not to be consumed",
      "icon": "rbxassetid://104448554207781",
      "name": "Gorilla Chef",
      "passives": [
        "King Cook"
      ],
      "rarity": "Legendary"
    },
    "Green Bean": {
      "defaultHunger": 23825,
      "description": "Bean for the Bean God: Occasionally sacrifices a random Beanstalk fruit in your garden to instantly grow a random plant in your garden with a fruit size bonus",
      "icon": "rbxassetid://135399291806752",
      "name": "Green Bean",
      "passives": [
        "Bean for the Bean God"
      ],
      "rarity": "Divine"
    },
    "Grey Mouse": {
      "defaultHunger": 15000,
      "description": "Whisker Wisdom: Occasionally gains bonus experience & Scamper: Increase player movement speed",
      "icon": "rbxassetid://116310390398341",
      "name": "Grey Mouse",
      "passives": [
        "Whisker Wisdom",
        "Scamper"
      ],
      "rarity": "Legendary"
    },
    "Griffin": {
      "defaultHunger": 65000,
      "description": "Glorious Wings: Flaunts its wings releasing a cyclone in a random directions. Pets struck have cooldown advanced and fruits struck get Cyclonic mutation",
      "icon": "rbxassetid://95812299319372",
      "name": "Griffin",
      "passives": [
        "Movement Variation",
        "Glorious Wings"
      ],
      "rarity": "Divine"
    },
    "Hamster": {
      "defaultHunger": 15000,
      "description": "Hamster Wheel: Occasionally runs in a hamster wheel and grants increased crafting speed for a duration",
      "icon": "rbxassetid://95041454621458",
      "name": "Hamster",
      "passives": [
        "Hamster Wheel"
      ],
      "rarity": "Mythical"
    },
    "Hedgehog": {
      "defaultHunger": 30000,
      "description": "Prickly Lover: Makes nearby prickly fruit grow bigger",
      "icon": "rbxassetid://83544966481425",
      "name": "Hedgehog",
      "passives": [
        "Prickly Lover"
      ],
      "rarity": "Rare"
    },
    "Honey Bee": {
      "defaultHunger": 25000,
      "description": "Beeter Pollinator: Occasionally pollinates fruit",
      "icon": "rbxassetid://134999468799162",
      "name": "Honey Bee",
      "passives": [
        "Beeter Pollinator"
      ],
      "rarity": "Rare"
    },
    "Hotdog Daschund": {
      "defaultHunger": 16000,
      "description": "Loaded Dog: Drops a mustard or ketchup puddle. Pets that stand in mustard get faster cooldown and pets that step on ketchup gain more experience",
      "icon": "rbxassetid://91582048906102",
      "name": "Hotdog Daschund",
      "passives": [
        "Loaded Dog"
      ],
      "rarity": "Legendary"
    },
    "Hyacinth Macaw": {
      "defaultHunger": 12000,
      "description": "Wiltproof Bird: Occasionally has a chance to mutate nearby fruits Wiltproof",
      "icon": "rbxassetid://118586950763516",
      "name": "Hyacinth Macaw",
      "passives": [
        "Cloudtouched Bird",
        "Movement Variation"
      ],
      "rarity": "Mythical"
    },
    "Iguanodon": {
      "defaultHunger": 40000,
      "description": "Dino Herd: Grants bonus experience per second gain to all Dinosaur type active pets",
      "icon": "rbxassetid://132997806707299",
      "name": "Iguanodon",
      "passives": [
        "Dino Herd"
      ],
      "rarity": "Legendary"
    },
    "Imp": {
      "defaultHunger": 20000,
      "description": "Scamp: Occasionally, the Imp will playfully invite you to chase it. Catching the Imp will grant a reward.",
      "icon": "rbxassetid://119736963641690",
      "name": "Imp",
      "passives": [
        "Scamp"
      ],
      "rarity": "Legendary"
    },
    "Jackalope": {
      "defaultHunger": 22000,
      "description": "Thunper: Occasionally has a chance to apply the Sandy mutation",
      "icon": "rbxassetid://102758469732489",
      "name": "Jackalope",
      "passives": [
        "Thumper"
      ],
      "rarity": "Uncommon"
    },
    "Junkbot": {
      "defaultHunger": 10101,
      "description": "OIL OR BOIL: Occasionally has a chance to oil nearby fruit applying the Oil mutation",
      "icon": "rbxassetid://91201635928407",
      "name": "Junkbot",
      "passives": [
        "OIL OR BOIL"
      ],
      "rarity": "Mythical"
    },
    "Kappa": {
      "defaultHunger": 40000,
      "description": "Water Spirit: Occasionally sprays water on all nearby fruits, mutating them to wet, and has a chance to convert Wet mutations already on fruit to Bloodlit",
      "icon": "rbxassetid://139605839925044",
      "name": "Kappa",
      "passives": [
        "Water Spirit"
      ],
      "rarity": "Mythical"
    },
    "Kitsune": {
      "defaultHunger": 49999,
      "description": "Nine-Tailed Myth: Occasionally goes to other player's fruit, mutates with Chakra or Foxfire Chakra and steals (duplicates) hands it to you",
      "icon": "rbxassetid://135428084676433",
      "name": "Kitsune",
      "passives": [
        "Nine-Tailed Myth"
      ],
      "rarity": "Prismatic"
    },
    "Kiwi": {
      "defaultHunger": 50000,
      "description": "Nocturnal Nursery: Occasionally reduces the hatch time of the egg with the most hatch time left",
      "icon": "rbxassetid://104651906442347",
      "name": "Kiwi",
      "passives": [
        "Nocturnal Nursery"
      ],
      "rarity": "Rare"
    },
    "Kodama": {
      "defaultHunger": 22000,
      "description": "Tree Spirit: Collecting Zen type fruits have a chance to mutate with Tranquil.",
      "icon": "rbxassetid://123076615425263",
      "name": "Kodama",
      "passives": [
        "Tree Spirit"
      ],
      "rarity": "Legendary"
    },
    "Koi": {
      "defaultHunger": 2500,
      "description": "Fish of Fortune: Grants a chance to recover an egg when hatching. Can be different colors",
      "icon": "rbxassetid://112819490327372",
      "name": "Koi",
      "passives": [
        "Fish of Fortune"
      ],
      "rarity": "Mythical"
    },
    "Ladybug": {
      "defaultHunger": 1200,
      "description": "Flower Fortune: All flower type plants grow faster",
      "icon": "rbxassetid://71662166827211",
      "name": "Ladybug",
      "passives": [
        "Flower Fortune"
      ],
      "rarity": "Common"
    },
    "Lemon Lion": {
      "defaultHunger": 50000,
      "description": "Brain-Roar: Roars and mutates a random fruit with Brainrot mutation & Citrus Roar: Occasionally grants bonus experience to a random pet",
      "icon": "rbxassetid://82370830738421",
      "name": "Lemon Lion",
      "passives": [
        "Brain-Roar",
        "Citrus Roar"
      ],
      "rarity": "Mythical"
    },
    "Lobster Thermidor": {
      "defaultHunger": 50505,
      "description": "Boiling Point: Chance a nearby fruit becomes Molten! Chance a nearby fruit becomes Meteoric!",
      "icon": "rbxassetid://78602813358591",
      "name": "Lobster Thermidor",
      "passives": [
        "Molten Boiling Point",
        "Meteoric Boiling Point"
      ],
      "rarity": "Divine"
    },
    "Mandrake": {
      "defaultHunger": 10000,
      "description": "Mandrake Essence: Harvesting Mandrake crops have a chance to mutate a random fruit in your garden with Rot mutation",
      "icon": "rbxassetid://119966585905991",
      "name": "Mandrake",
      "passives": [
        "Mandrake Essence"
      ],
      "rarity": "Legendary"
    },
    "Maneki-neko": {
      "defaultHunger": 1777,
      "description": "Fortune Cat: Occasionally does a wave of good luck and grants increased chance to get your fruit back after selling it",
      "icon": "rbxassetid://116049439913569",
      "name": "Maneki-neko",
      "passives": [
        "Fortune Cat"
      ],
      "rarity": "Uncommon"
    },
    "Meerkat": {
      "defaultHunger": 22000,
      "description": "Lookout: Occasionally goes to another pet and does a lookout for it. That pet advances cooldown. Has a chance to do it again after each lookout.",
      "icon": "rbxassetid://111346621796974",
      "name": "Meerkat",
      "passives": [
        "Lookout"
      ],
      "rarity": "Legendary"
    },
    "Mimic Octopus": {
      "defaultHunger": 25000,
      "description": "Mimicry: Mimics and copies an ability from another pet and performs its ability",
      "icon": "rbxassetid://118831959038511",
      "name": "Mimic Octopus",
      "passives": [
        "Mimicry"
      ],
      "rarity": "Mythical"
    },
    "Mizuchi": {
      "defaultHunger": 40000,
      "description": "Water Diety: When selling fruits with Wet/Drenched mutation, there is chance a random mutation from that fruit will be applied to a fruit in your garden!",
      "icon": "rbxassetid://91185943483703",
      "name": "Mizuchi",
      "passives": [
        "Water Diety"
      ],
      "rarity": "Divine"
    },
    "Mochi Mouse": {
      "defaultHunger": 25000,
      "description": "Mochi Marathon: Grants bonus experience per second gain to all Food type pets & Whisker Wisdom: Occasionally gains bonus experience",
      "icon": "rbxassetid://91015602604713",
      "name": "Mochi Mouse",
      "passives": [
        "Mochi Marathon",
        "Whisker Wisdom"
      ],
      "rarity": "Mythical"
    },
    "Mole": {
      "defaultHunger": 50000,
      "description": "Treasure Hunter: Will occasionally dig down to find gear or sheckles",
      "icon": "rbxassetid://79089804794269",
      "name": "Mole",
      "passives": [
        "Treasure Hunter"
      ],
      "rarity": "Legendary"
    },
    "Monkey": {
      "defaultHunger": 7400,
      "description": "Cheeky Refund: 3% chance to get your fruit back when you sell it",
      "icon": "rbxassetid://113881196210664",
      "name": "Monkey",
      "passives": [
        "Cheeky Refund"
      ],
      "rarity": "Rare"
    },
    "Moon Cat": {
      "defaultHunger": 2400,
      "description": "Moon Nap: Moon cat naps in a random spot in your farm, and boosts nearby fruit size & Moon Harvest: Grants chance for Night type plants to replant when harvested ",
      "icon": "rbxassetid://72392850111255",
      "name": "Moon Cat",
      "passives": [
        "Moon Nap",
        "Moon Harvest"
      ],
      "rarity": "Legendary"
    },
    "Moth": {
      "defaultHunger": 25000,
      "description": "Silksong: Sings to a random pet and magically restore its hunger",
      "icon": "rbxassetid://134180528391091",
      "name": "Moth",
      "passives": [
        "Silksong"
      ],
      "rarity": "Legendary"
    },
    "Night Owl": {
      "defaultHunger": 50000,
      "description": "King of the Night: Grants bonus experience per second gain to all active pets.",
      "icon": "rbxassetid://101760640498094",
      "name": "Night Owl",
      "passives": [
        "King of the Night",
        "Movement Variation"
      ],
      "rarity": "Mythical"
    },
    "Nihonzaru": {
      "defaultHunger": 8000,
      "description": "Bathe Time: As long as you have a Hot Spring in your garden: bathes in it and relaxes",
      "icon": "rbxassetid://83549828969544",
      "name": "Nihonzaru",
      "passives": [
        "Bathe Time"
      ],
      "rarity": "Rare"
    },
    "Orange Tabby": {
      "defaultHunger": 1500,
      "description": "Orange Tabby: Orange Tabby naps in a random spot in your farm, emitting an aura that boosts nearby fruit size",
      "icon": "rbxassetid://103360220936666",
      "name": "Orange Tabby",
      "passives": [
        "Lazy Nap"
      ],
      "rarity": "Rare"
    },
    "Orangutan": {
      "defaultHunger": 55000,
      "description": "Helping Hands: When crafting, each material has a chance for it not to be consumed",
      "icon": "rbxassetid://91252752916705",
      "name": "Orangutan",
      "passives": [
        "Helping Hands"
      ],
      "rarity": "Rare"
    },
    "Ostrich": {
      "defaultHunger": 20000,
      "description": "Eggsperience: Grants pets hatched from eggs an age bonus",
      "icon": "rbxassetid://85113894132517",
      "name": "Ostrich",
      "passives": [
        "Eggsperience"
      ],
      "rarity": "Legendary"
    },
    "Owl": {
      "defaultHunger": 50000,
      "description": "Prince of the Night: Grants bonus experience per second gain to all active pets.",
      "icon": "rbxassetid://138016343005291",
      "name": "Owl",
      "passives": [
        "Prince of the Night",
        "Movement Variation"
      ],
      "rarity": "Mythical"
    },
    "Pachycephalosaurus": {
      "defaultHunger": 40000,
      "description": "Crafty Dome: Grants a small chance to duplicate the crafted item.",
      "icon": "rbxassetid://98967783170808",
      "name": "Pachycephalosaurus",
      "passives": [
        "Crafty Dome"
      ],
      "rarity": "Legendary"
    },
    "Pack Bee": {
      "defaultHunger": 25000,
      "description": "Pack Bee: Increases backpack size by 25 and occasionally pollinates nearby fruit",
      "icon": "rbxassetid://105775306251306",
      "name": "Pack Bee",
      "passives": [
        "Pollinator",
        "Pack Bee"
      ],
      "rarity": "Mythical"
    },
    "Pancake Mole": {
      "defaultHunger": 50000,
      "description": "Pancake Hunter: Will occasionally dig down to find gear or sheckles",
      "icon": "rbxassetid://118795155833639",
      "name": "Pancake Mole",
      "passives": [
        "Pancake Hunter"
      ],
      "rarity": "Rare"
    },
    "Panda": {
      "defaultHunger": 20000,
      "description": "Bamboozle: Waddles to bamboo, eats it, and grants bonus sheckles (more than normal value)",
      "icon": "rbxassetid://107090327345246",
      "name": "Panda",
      "passives": [
        "Bamboozle"
      ],
      "rarity": "Legendary"
    },
    "Parasaurolophus": {
      "defaultHunger": 40000,
      "description": "Crowbar Head: Occasionally, goes to the cosmetic crate with the highest time and reduces time to open!",
      "icon": "rbxassetid://77060347493123",
      "name": "Parasaurolophus",
      "passives": [
        "Crowbar Head"
      ],
      "rarity": "Legendary"
    },
    "Peach Wasp": {
      "defaultHunger": 2500,
      "description": "Peach Pollinator: Occasionally applies Plasma to fruit & Peach Stinger: Stings a random pet to advance ability cooldown",
      "icon": "rbxassetid://112368163015890",
      "name": "Peach Wasp",
      "passives": [
        "Peach Pollinator",
        "Peach Stinger"
      ],
      "rarity": "Mythical"
    },
    "Peacock": {
      "defaultHunger": 19000,
      "description": "Utter Beauty: Occasionally fans its feathers and all nearby pets will advance ability cooldowns",
      "icon": "rbxassetid://79434662175672",
      "name": "Peacock",
      "passives": [
        "Utter Beauty"
      ],
      "rarity": "Legendary"
    },
    "Petal Bee": {
      "defaultHunger": 25000,
      "description": "Pollinator: Occasionally pollinates fruit & Flower Harvest: Harvested flowers have a chance to stay",
      "icon": "rbxassetid://137924182648564",
      "name": "Petal Bee",
      "passives": [
        "Pollinator",
        "Flower Harvest"
      ],
      "rarity": "Legendary"
    },
    "Pig": {
      "defaultHunger": 5000,
      "description": "Fertilizer Frenzy: Occasionally releases a fertilizing AOE boosting variant chance",
      "icon": "rbxassetid://134476443266448",
      "name": "Pig",
      "passives": [
        "Fertilizer Frenzy"
      ],
      "rarity": "Rare"
    },
    "Pixie": {
      "defaultHunger": 500,
      "description": "Pixie Dust: Occasionally spreads pixie dust for a duration, all plants within range will advance growth an extra 30 seconds every second. Also makes nearby players levitate ",
      "icon": "rbxassetid://80171506933019",
      "name": "Pixie",
      "passives": [
        "Pixie Dust"
      ],
      "rarity": "Rare"
    },
    "Polar Bear": {
      "defaultHunger": 20000,
      "description": "Polar Express: Occasionally sets a random nearby fruit cold, turning it into Chilled with a small chance for Frozen",
      "icon": "rbxassetid://72209118254193",
      "name": "Polar Bear",
      "passives": [
        "Polar Express"
      ],
      "rarity": "Legendary"
    },
    "Praying Mantis": {
      "defaultHunger": 55000,
      "description": "Zen Zone: Prays, then gives plants in AOE Buff that increases the chance of gold fruit from plants",
      "icon": "rbxassetid://121485029406440",
      "name": "Praying Mantis",
      "passives": [
        "Zen Zone"
      ],
      "rarity": "Mythical"
    },
    "Pterodactyl": {
      "defaultHunger": 40000,
      "description": "Sky Reptile: Occasionally applies Windstruck mutation to multiple nearby fruits! & Air Time: Player has increased jump height",
      "icon": "rbxassetid://132325249273328",
      "name": "Pterodactyl",
      "passives": [
        "Sky Reptile",
        "Air Time",
        "Movement Variation"
      ],
      "rarity": "Mythical"
    },
    "Queen Bee": {
      "defaultHunger": 65000,
      "description": "Queen Pollinator: Occasionally pollinates fruit instantly & For the Queen: Occasionally refrehes the pet with the highest cooldown ability",
      "icon": "rbxassetid://127281358672581",
      "name": "Queen Bee",
      "passives": [
        "Queen Pollinator",
        "For the Queen"
      ],
      "rarity": "Divine"
    },
    "Raccoon": {
      "defaultHunger": 45000,
      "description": "Rascal: Occasionally steals (duplicates) fruit from other player's plot and hands it to you",
      "icon": "rbxassetid://136232391555861",
      "name": "Raccoon",
      "passives": [
        "Rascal"
      ],
      "rarity": "Divine"
    },
    "Radioactive Stegosaurus": {
      "defaultHunger": 40000,
      "description": "Developer RemorsEcoDe's pet",
      "icon": "rbxassetid://115750504063562",
      "name": "Radioactive Stegosaurus",
      "passives": [
        "Radioactive Lizard"
      ],
      "rarity": "Legendary"
    },
    "Raiju": {
      "defaultHunger": 42000,
      "description": "Lightning Beast: Occasionally devours a fruit with Shocked for bonus value, spits a chain lightning that mutates fruit with Static or Shocked if its a Thunderstorm",
      "icon": "rbxassetid://111087166681850",
      "name": "Raiju",
      "passives": [
        "Lightning Beast"
      ],
      "rarity": "Divine"
    },
    "Rainbow Ankylosaurus": {
      "defaultHunger": 40000,
      "description": "Armored Defender: When a player steals a fruit from you, grants a chance you get the stolen fruit as well.",
      "icon": "rbxassetid://108330251202915",
      "name": "Rainbow Ankylosaurus",
      "passives": [
        "Rainbow Armored Defender"
      ],
      "rarity": "Mythical"
    },
    "Rainbow Bacon Pig": {
      "defaultHunger": 5000,
      "description": "Rainbow Bacon Frenzy: Emits an aura granting chance for new fruit to grow as variants",
      "icon": "rbxassetid://124076295505957",
      "name": "Rainbow Bacon Pig",
      "passives": [
        "Rainbow Bacon Frenzy"
      ],
      "rarity": "Uncommon"
    },
    "Rainbow Corrupted Kitsune": {
      "defaultHunger": 49999,
      "description": "Rainbow Nine-Tailed Curse: Occasionally, Removes 9 mutations from 9 different fruit. Applies Corrupted Chakra with a very rare chance for Corrupted Foxfire Chakra to 1 random fruit.",
      "icon": "rbxassetid://112845542239850",
      "name": "Rainbow Corrupted Kitsune",
      "passives": [
        "Rainbow Nine-Tailed Curse"
      ],
      "rarity": "Prismatic"
    },
    "Rainbow Dilophosaurus": {
      "defaultHunger": 30000,
      "description": "Frilled Reptile: Occasionally opens its frills and spits out venom! The venom spreads to other random pets, advancing cooldown OR granting bonus xp",
      "icon": "rbxassetid://114260890723408",
      "name": "Rainbow Dilophosaurus",
      "passives": [
        "Rainbow Frilled Reptile"
      ],
      "rarity": "Mythical"
    },
    "Rainbow Elk": {
      "defaultHunger": 2500,
      "description": "Rainbow Elk Forester: Chance berry fruit stays after collecting! Rarer plants haves have rarer chance to replant",
      "icon": "rbxassetid://71610269617190",
      "name": "Rainbow Elk",
      "passives": [
        "Rainbow Elk Forester"
      ],
      "rarity": "Uncommon"
    },
    "Rainbow Griffin": {
      "defaultHunger": 65000,
      "description": "Rainbow Glorious Wings: Flaunts its wings releasing a cyclone in a random directions. Pets struck have cooldown advanced and fruits struck get Cyclonic mutation",
      "icon": "rbxassetid://106497940180682",
      "name": "Rainbow Griffin",
      "passives": [
        "Movement Variation",
        "Rainbow Glorious Wings"
      ],
      "rarity": "Divine"
    },
    "Rainbow Hotdog Daschund": {
      "defaultHunger": 16000,
      "description": "Rainbow Loaded Dog: Drops a mustard or ketchup puddle. Pets that stand in mustard get faster cooldown and pets that step on ketchup gain more experience",
      "icon": "rbxassetid://126077770122949",
      "name": "Rainbow Hotdog Daschund",
      "passives": [
        "Rainbow Loaded Dog"
      ],
      "rarity": "Legendary"
    },
    "Rainbow Iguanodon": {
      "defaultHunger": 40000,
      "description": "Dino Herd: Grants bonus experience per second gain to all Dinosaur type active pets",
      "icon": "rbxassetid://70960389100537",
      "name": "Rainbow Iguanodon",
      "passives": [
        "Rainbow Dino Herd"
      ],
      "rarity": "Legendary"
    },
    "Rainbow Kodama": {
      "defaultHunger": 22000,
      "description": "Rainbow Tree Spirit: Collecting Zen type fruits have a chance to mutate with Tranquil.",
      "icon": "rbxassetid://130281044212300",
      "name": "Rainbow Kodama",
      "passives": [
        "Rainbow Tree Spirit"
      ],
      "rarity": "Legendary"
    },
    "Rainbow Lobster Thermidor": {
      "defaultHunger": 50505,
      "description": "Rainbow Boiling Point: Chance a nearby fruit becomes Molten! Chance a nearby fruit becomes Meteoric!",
      "icon": "rbxassetid://120857500058999",
      "name": "Rainbow Lobster Thermidor",
      "passives": [
        "Rainbow Molten Boiling Point",
        "Rainbow Meteoric Boiling Point"
      ],
      "rarity": "Divine"
    },
    "Rainbow Mandrake": {
      "defaultHunger": 10000,
      "description": "Rainbow Mandrake Essence: Harvesting Mandrake crops have a chance to mutate a random fruit in your garden with Rot mutation",
      "icon": "rbxassetid://127979754158695",
      "name": "Rainbow Mandrake",
      "passives": [
        "Rainbow Mandrake Essence"
      ],
      "rarity": "Legendary"
    },
    "Rainbow Maneki-neko": {
      "defaultHunger": 1777,
      "description": "Rainbow Fortune Cat:	Occasionally does a wave of good luck and grants increased chance to get your fruit back after selling it",
      "icon": "rbxassetid://127837229475229",
      "name": "Rainbow Maneki-neko",
      "passives": [
        "Rainbow Fortune Cat"
      ],
      "rarity": "Uncommon"
    },
    "Rainbow Pachycephalosaurus": {
      "defaultHunger": 40000,
      "description": "Crafty Dome: Grants a small chance to duplicate the crafted item.",
      "icon": "rbxassetid://71353461716145",
      "name": "Rainbow Pachycephalosaurus",
      "passives": [
        "Rainbow Crafty Dome"
      ],
      "rarity": "Legendary"
    },
    "Rainbow Parasaurolophus": {
      "defaultHunger": 40000,
      "description": "Crowbar Head: Occasionally, goes to the cosmetic crate with the highest time and reduces time to open!",
      "icon": "rbxassetid://116062422658499",
      "name": "Rainbow Parasaurolophus",
      "passives": [
        "Rainbow Crowbar Head"
      ],
      "rarity": "Legendary"
    },
    "Rainbow Spinosaurus": {
      "defaultHunger": 25000,
      "description": "Occasionally, devours a random mutation from random fruits in your garden each, roars and applies it to 1 other random fruit in your garden!",
      "icon": "rbxassetid://98134533729834",
      "name": "Rainbow Spinosaurus",
      "passives": [
        "Rainbow Food Chain"
      ],
      "rarity": "Divine"
    },
    "Raptor": {
      "defaultHunger": 40000,
      "description": "Clever Claws: Small chance fruit gets Amber mutation after collecting! & Raptor Dance: Player has increased movement speed",
      "icon": "rbxassetid://133649762905181",
      "name": "Raptor",
      "passives": [
        "Clever Claws",
        "Raptor Dance"
      ],
      "rarity": "Legendary"
    },
    "Red Dragon": {
      "defaultHunger": 10000,
      "description": "Scorched Soil: Occasionally sets a random nearby fruit ablaze, turning it into Burnt",
      "icon": "rbxassetid://140223014467344",
      "name": "Red Dragon",
      "passives": [
        "Scorched Soil"
      ],
      "rarity": "Common"
    },
    "Red Fox": {
      "defaultHunger": 35000,
      "description": "Scoundrel: Occasionally goes to another player's plot and tries to steal a seed from a random plant. The rarer the plant, the harder it is to succeed",
      "icon": "rbxassetid://116662854190616",
      "name": "Red Fox",
      "passives": [
        "Scoundrel"
      ],
      "rarity": "Divine"
    },
    "Red Giant Ant": {
      "defaultHunger": 15000,
      "description": "For the Red Colony: Small chance to duplicate harvested plant & Fruit Harvester: Increased chance to duplicate harvested fruit type plant",
      "icon": "rbxassetid://89449712431551",
      "name": "Red Giant Ant",
      "passives": [
        "For the Red Colony",
        "Fruit Harvester"
      ],
      "rarity": "Mythical"
    },
    "Rooster": {
      "defaultHunger": 4000,
      "description": "Eggcelerator: Decreases the time needed to hatch other eggs",
      "icon": "rbxassetid://137107493326109",
      "name": "Rooster",
      "passives": [
        "Better Eggcelerator"
      ],
      "rarity": "Rare"
    },
    "Sand Snake": {
      "defaultHunger": 28000,
      "description": "Coiled Commerce: Buying from the seed/gear shop has a small chance to duplicate the bought item!",
      "icon": "rbxassetid://110203289397199",
      "name": "Sand Snake",
      "passives": [
        "Coiled Commerce"
      ],
      "rarity": "Legendary"
    },
    "Scarlet Macaw": {
      "defaultHunger": 12000,
      "description": "Verdant Bird: Occasionally has a chance to mutate nearby fruits Verdant",
      "icon": "rbxassetid://103592675269053",
      "name": "Scarlet Macaw",
      "passives": [
        "Verdant Bird",
        "Movement Variation"
      ],
      "rarity": "Legendary"
    },
    "Sea Otter": {
      "defaultHunger": 30000,
      "description": "Water Spray: Water's plants randomly like a watering can",
      "icon": "rbxassetid://94422445572440",
      "name": "Sea Otter",
      "passives": [
        "Water Spray"
      ],
      "rarity": "Legendary"
    },
    "Sea Turtle": {
      "defaultHunger": 22200,
      "description": "Shell Share: Occasionally shares its wisdom to a random active pet granting bonus experience & Water Splash: Occasionally has a chance to Wet a nearby fruit",
      "icon": "rbxassetid://136324651089948",
      "name": "Sea Turtle",
      "passives": [
        "Shell Share",
        "Water Splash"
      ],
      "rarity": "Rare"
    },
    "Seagull": {
      "defaultHunger": 3500,
      "description": "Scavenger: Grants to get double the seeds when getting a Lucky Harvest",
      "icon": "rbxassetid://125267211322255",
      "name": "Seagull",
      "passives": [
        "Movement Variation",
        "Scavenger"
      ],
      "rarity": "Common"
    },
    "Seal": {
      "defaultHunger": 17000,
      "description": "Seal the Deal: When selling pets, has a small chance to get the pet back as its egg equivalent",
      "icon": "rbxassetid://70977930937021",
      "name": "Seal",
      "passives": [
        "Seal the Deal"
      ],
      "rarity": "Rare"
    },
    "Seedling": {
      "defaultHunger": 25000,
      "description": "Sprout: Swaps mutations between two different random fruits. Ignores favorited fruits",
      "icon": "rbxassetid://116498603071650",
      "name": "Seedling",
      "passives": [
        "Sprout"
      ],
      "rarity": "Legendary"
    },
    "Shiba Inu": {
      "defaultHunger": 2000,
      "description": "Man's Best Tomodachi: Occasionally digs up a random seed at a higher chance",
      "icon": "rbxassetid://109495487067387",
      "name": "Shiba Inu",
      "passives": [
        "Man's Best Tomodachi"
      ],
      "rarity": "Uncommon"
    },
    "Silver Monkey": {
      "defaultHunger": 8000,
      "description": "Cheeky Refund: 3% chance to get your fruit back when you sell it",
      "icon": "rbxassetid://136985272620600",
      "name": "Silver Monkey",
      "passives": [
        "Premium Cheeky Refund"
      ],
      "rarity": "Legendary"
    },
    "Snail": {
      "defaultHunger": 12000,
      "description": "Slow and Steady: Increased lucky harvest chance",
      "icon": "rbxassetid://80970021440625",
      "name": "Snail",
      "passives": [
        "Slow and Steady"
      ],
      "rarity": "Legendary"
    },
    "Spaghetti Sloth": {
      "defaultHunger": 18000,
      "description": "Al dente: Occasionally applies Pasta, Sauce or Meatball mutation",
      "icon": "rbxassetid://82028428678888",
      "name": "Spaghetti Sloth",
      "passives": [
        "Al dente"
      ],
      "rarity": "Mythical"
    },
    "Spinosaurus": {
      "defaultHunger": 25000,
      "description": "Occasionally, devours a random mutation from random fruits in your garden each, roars and applies it to 1 other random fruit in your garden!",
      "icon": "rbxassetid://78132119445447",
      "name": "Spinosaurus",
      "passives": [
        "Food Chain"
      ],
      "rarity": "Divine"
    },
    "Spotted Deer": {
      "defaultHunger": 2500,
      "description": "Forester: When harvesting berry plants, there is a chance the fruit will remain",
      "icon": "rbxassetid://126439207915258",
      "name": "Spotted Deer",
      "passives": [
        "Spotted Forester"
      ],
      "rarity": "Rare"
    },
    "Spriggan": {
      "defaultHunger": 45000,
      "description": "Overgrowth: Occasionally spreads it's roots and all nearby fruit have a chance to get the Bloom mutation",
      "icon": "rbxassetid://133648608922103",
      "name": "Spriggan",
      "passives": [
        "Overgrowth"
      ],
      "rarity": "Mythical"
    },
    "Squirrel": {
      "defaultHunger": 15000,
      "description": "Seed Stash: Grants a chance to not consume a use when using the reclaimer & Nutty Apology: Gains additional XP per second",
      "icon": "rbxassetid://96950434895806",
      "name": "Squirrel",
      "passives": [
        "Seed Stash",
        "Nutty Apology"
      ],
      "rarity": "Legendary"
    },
    "Starfish": {
      "defaultHunger": 1500,
      "description": "You're a Star: Gains additional XP per second",
      "icon": "rbxassetid://120520383369074",
      "name": "Starfish",
      "passives": [
        "You're a Star"
      ],
      "rarity": "Common"
    },
    "Stegosaurus": {
      "defaultHunger": 40000,
      "description": "Prehistoric Doubling: Small chance to duplicate harvested fruit & Prehistoric Harvester: Increased chance to duplicate harvested prehistoric type plant",
      "icon": "rbxassetid://115750504063562",
      "name": "Stegosaurus",
      "passives": [
        "Prehistoric Doubling",
        "Prehistoric Harvester"
      ],
      "rarity": "Legendary"
    },
    "Sunny-Side Chicken": {
      "defaultHunger": 3400,
      "description": "Better Eggcelerator:	Decreases the time needed to hatch eggs",
      "icon": "rbxassetid://86615656407099",
      "name": "Sunny-Side Chicken",
      "passives": [
        "Better Eggcelerator"
      ],
      "rarity": "Uncommon"
    },
    "Sushi Bear": {
      "defaultHunger": 20000,
      "description": "Sushi Express: Occasionally sets a random nearby fruit cold, turning it Chilled or rarely Frozen & Sushi Time: Occasionally throws sushi towards a pet, feeding it",
      "icon": "rbxassetid://101808352881529",
      "name": "Sushi Bear",
      "passives": [
        "Sushi Express",
        "Sushi Time"
      ],
      "rarity": "Legendary"
    },
    "T-Rex": {
      "defaultHunger": 60000,
      "description": "Apex Predator: Occasionally eats a random mutation from a fruit in your garden then roars and applies that mutation to other fruits in your garden.",
      "icon": "rbxassetid://72024850228702",
      "name": "T-Rex",
      "passives": [
        "Apex Predator"
      ],
      "rarity": "Divine"
    },
    "Tanchozuru": {
      "defaultHunger": 40000,
      "description": "Balance and Harmony: Occasionally channels tranquility and has a chance to mutate nearby fruits into Tranquil",
      "icon": "rbxassetid://102876710012857",
      "name": "Tanchozuru",
      "passives": [
        "Balance and Harmony"
      ],
      "rarity": "Legendary"
    },
    "Tanuki": {
      "defaultHunger": 15000,
      "description": "Mischief: Occasionally causes mischief doing random actions in your garden",
      "icon": "rbxassetid://86675114036925",
      "name": "Tanuki",
      "passives": [
        "Mischief"
      ],
      "rarity": "Legendary"
    },
    "Tarantula Hawk": {
      "defaultHunger": 28000,
      "description": "Wasp Pollinator: Occasionally pollinates fruit & Tarantula Stinger: Occasionally stings pet with highest cooldown advancing cooldown",
      "icon": "rbxassetid://126203792467378",
      "name": "Tarantula Hawk",
      "passives": [
        "Pollinator",
        "Tarantula Stinger"
      ],
      "rarity": "Rare"
    },
    "Toucan": {
      "defaultHunger": 9000,
      "description": "Tropical Lover: Makes all nearby Tropical type plants have increased variant chance and grow bigger",
      "icon": "rbxassetid://118598422473758",
      "name": "Toucan",
      "passives": [
        "Tropical Lover",
        "Tropical Blessing",
        "Movement Variation"
      ],
      "rarity": "Rare"
    },
    "Triceratops": {
      "defaultHunger": 40000,
      "description": "Tri-Horn: Rams into random plants and advances their growth",
      "icon": "rbxassetid://133031079193526",
      "name": "Triceratops",
      "passives": [
        "Tri-Horn"
      ],
      "rarity": "Legendary"
    },
    "Tsuchinoko": {
      "defaultHunger": 28000,
      "description": "Fat Snake: Increased lucky harvest chance!",
      "icon": "rbxassetid://104799415228364",
      "name": "Tsuchinoko",
      "passives": [
        "Fat Snake"
      ],
      "rarity": "Rare"
    },
    "Turtle": {
      "defaultHunger": 10000,
      "description": "Turtle Tinkerer: Slowing aura that makes sprinklers last longer",
      "icon": "rbxassetid://92906330087175",
      "name": "Turtle",
      "passives": [
        "Turtle Tinkerer"
      ],
      "rarity": "Legendary"
    },
    "Wasp": {
      "defaultHunger": 28000,
      "description": "Wasp Pollinator: Occasionally pollinates fruit & Stinger: Occasionally stings pet with highest cooldown advancing cooldown",
      "icon": "rbxassetid://72767862942880",
      "name": "Wasp",
      "passives": [
        "Wasp Pollinator",
        "Stinger"
      ],
      "rarity": "Uncommon"
    }
  }
};
export const Passives = DB.passives;
export const Pets = DB.pets;
export const Boosts = DB.boosts;
