import { GENDERS, STATS } from '../index';
import * as TYPES from '../types/definitions';

export const POKEDEX = {
  BULBASAUR: {
    "id": 1,
    "species": "bulbasaur",
    "dex_desc": "A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "overgrow"
      },
      {
        "hidden": true,
        "name": "chlorophyll"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 49,
      [STATS.DEFENSE]: 49,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 7,
    "weight": 69,
    "base_exp_yield": 64,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  IVYSAUR: {
    "id": 2,
    "species": "ivysaur",
    "dex_desc": "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "overgrow"
      },
      {
        "hidden": true,
        "name": "chlorophyll"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 62,
      [STATS.DEFENSE]: 63,
      [STATS.SPECIAL_ATTACK]: 80,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 10,
    "weight": 130,
    "base_exp_yield": 142,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      },
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  VENUSAUR: {
    "id": 3,
    "species": "venusaur",
    "dex_desc": "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "overgrow"
      },
      {
        "hidden": true,
        "name": "chlorophyll"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 82,
      [STATS.DEFENSE]: 83,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 80,
      "happiness": 70
    },
    "height": 20,
    "weight": 1000,
    "base_exp_yield": 236,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      },
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  CHARMANDER: {
    "id": 4,
    "species": "charmander",
    "dex_desc": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "blaze"
      },
      {
        "hidden": true,
        "name": "solar-power"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 52,
      [STATS.DEFENSE]: 43,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 65,
      "happiness": 70
    },
    "height": 6,
    "weight": 85,
    "base_exp_yield": 62,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  CHARMELEON: {
    "id": 5,
    "species": "charmeleon",
    "dex_desc": "When it swings its burning tail, it elevates the temperature to unbearably high levels.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "blaze"
      },
      {
        "hidden": true,
        "name": "solar-power"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 64,
      [STATS.DEFENSE]: 58,
      [STATS.SPECIAL_ATTACK]: 80,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 80,
      "happiness": 70
    },
    "height": 11,
    "weight": 190,
    "base_exp_yield": 142,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      },
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  CHARIZARD: {
    "id": 6,
    "species": "charizard",
    "dex_desc": "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
    "types": [
      TYPES.FIRE,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "blaze"
      },
      {
        "hidden": true,
        "name": "solar-power"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 84,
      [STATS.DEFENSE]: 78,
      [STATS.SPECIAL_ATTACK]: 109,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 100,
      "happiness": 70
    },
    "height": 17,
    "weight": 905,
    "base_exp_yield": 240,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  SQUIRTLE: {
    "id": 7,
    "species": "squirtle",
    "dex_desc": "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "torrent"
      },
      {
        "hidden": true,
        "name": "rain-dish"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 48,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 64,
      [STATS.SPEED]: 43,
      "happiness": 70
    },
    "height": 5,
    "weight": 90,
    "base_exp_yield": 63,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  WARTORTLE: {
    "id": 8,
    "species": "wartortle",
    "dex_desc": "When tapped, this POKéMON will pull in its head, but its tail will still stick out a little bit.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "torrent"
      },
      {
        "hidden": true,
        "name": "rain-dish"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 63,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 58,
      "happiness": 70
    },
    "height": 10,
    "weight": 225,
    "base_exp_yield": 142,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      },
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  BLASTOISE: {
    "id": 9,
    "species": "blastoise",
    "dex_desc": "",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "torrent"
      },
      {
        "hidden": true,
        "name": "rain-dish"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 83,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 105,
      [STATS.SPEED]: 78,
      "happiness": 70
    },
    "height": 16,
    "weight": 855,
    "base_exp_yield": 239,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 3
      }
    ]
  },
  CATERPIE: {
    "id": 10,
    "species": "caterpie",
    "dex_desc": "",
    "types": [
      TYPES.BUG
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shield-dust"
      },
      {
        "hidden": true,
        "name": "run-away"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 30,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 20,
      [STATS.SPECIAL_DEFENSE]: 20,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 3,
    "weight": 29,
    "base_exp_yield": 39,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 1
      }
    ]
  },
  METAPOD: {
    "id": 11,
    "species": "metapod",
    "dex_desc": "This POKéMON is vulnerable to attack while its shell is soft, exposing its weak and tender body.",
    "types": [
      TYPES.BUG
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shed-skin"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 20,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 25,
      [STATS.SPECIAL_DEFENSE]: 25,
      [STATS.SPEED]: 30,
      "happiness": 70
    },
    "height": 7,
    "weight": 99,
    "base_exp_yield": 72,
    "growth": "medium",
    "capture_rate": 120,
    "base_egg_steps": 3826,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  BUTTERFREE: {
    "id": 12,
    "species": "butterfree",
    "dex_desc": "In battle, it flaps its wings at high speed to release highly toxic dust into the air.",
    "types": [
      TYPES.BUG,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "compound-eyes"
      },
      {
        "hidden": true,
        "name": "tinted-lens"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 90,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 11,
    "weight": 320,
    "base_exp_yield": 178,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 3826,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      },
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  WEEDLE: {
    "id": 13,
    "species": "weedle",
    "dex_desc": "Often found in forests, eating leaves. It has a sharp venomous stinger on its head.",
    "types": [
      TYPES.BUG,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shield-dust"
      },
      {
        "hidden": true,
        "name": "run-away"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 35,
      [STATS.DEFENSE]: 30,
      [STATS.SPECIAL_ATTACK]: 20,
      [STATS.SPECIAL_DEFENSE]: 20,
      [STATS.SPEED]: 50,
      "happiness": 70
    },
    "height": 3,
    "weight": 32,
    "base_exp_yield": 39,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  KAKUNA: {
    "id": 14,
    "species": "kakuna",
    "dex_desc": "Almost incapable of moving, this POKéMON can only harden its shell to protect itself from predators.",
    "types": [
      TYPES.BUG,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shed-skin"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 25,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 25,
      [STATS.SPECIAL_DEFENSE]: 25,
      [STATS.SPEED]: 35,
      "happiness": 70
    },
    "height": 6,
    "weight": 100,
    "base_exp_yield": 72,
    "growth": "medium",
    "capture_rate": 120,
    "base_egg_steps": 3826,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  BEEDRILL: {
    "id": 15,
    "species": "beedrill",
    "dex_desc": "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
    "types": [
      TYPES.BUG,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swarm"
      },
      {
        "hidden": true,
        "name": "sniper"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 40,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 75,
      "happiness": 70
    },
    "height": 10,
    "weight": 295,
    "base_exp_yield": 178,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 3826,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      },
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  PIDGEY: {
    "id": 16,
    "species": "pidgey",
    "dex_desc": "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": false,
        "name": "tangled-feet"
      },
      {
        "hidden": true,
        "name": "big-pecks"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 40,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 35,
      [STATS.SPEED]: 56,
      "happiness": 70
    },
    "height": 3,
    "weight": 18,
    "base_exp_yield": 50,
    "growth": "medium-slow",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  PIDGEOTTO: {
    "id": 17,
    "species": "pidgeotto",
    "dex_desc": "Very protective of its sprawling territorial area, this POKéMON will fiercely peck at any intruder.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": false,
        "name": "tangled-feet"
      },
      {
        "hidden": true,
        "name": "big-pecks"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 60,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 71,
      "happiness": 70
    },
    "height": 11,
    "weight": 300,
    "base_exp_yield": 122,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  PIDGEOT: {
    "id": 18,
    "species": "pidgeot",
    "dex_desc": "When hunting, it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": false,
        "name": "tangled-feet"
      },
      {
        "hidden": true,
        "name": "big-pecks"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 75,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 101,
      "happiness": 70
    },
    "height": 15,
    "weight": 395,
    "base_exp_yield": 216,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 3
      }
    ]
  },
  RATTATA: {
    "id": 19,
    "species": "rattata",
    "dex_desc": "Bites anything when it attacks. Small and very quick, it is a common sight in many places.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "guts"
      },
      {
        "hidden": true,
        "name": "hustle"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 56,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 25,
      [STATS.SPECIAL_DEFENSE]: 35,
      [STATS.SPEED]: 72,
      "happiness": 70
    },
    "height": 3,
    "weight": 35,
    "base_exp_yield": 51,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  RATICATE: {
    "id": 20,
    "species": "raticate",
    "dex_desc": "It uses its whisé kers to maintain its balance. It apparently slows down if they are cut off.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "guts"
      },
      {
        "hidden": true,
        "name": "hustle"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 81,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 97,
      "happiness": 70
    },
    "height": 7,
    "weight": 185,
    "base_exp_yield": 145,
    "growth": "medium",
    "capture_rate": 127,
    "base_egg_steps": 3826,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  SPEAROW: {
    "id": 21,
    "species": "spearow",
    "dex_desc": "",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": true,
        "name": "sniper"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 60,
      [STATS.DEFENSE]: 30,
      [STATS.SPECIAL_ATTACK]: 31,
      [STATS.SPECIAL_DEFENSE]: 31,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 3,
    "weight": 20,
    "base_exp_yield": 52,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  FEAROW: {
    "id": 22,
    "species": "fearow",
    "dex_desc": "With its huge and magnificent wings, it can keep aloft without ever having to land for rest.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": true,
        "name": "sniper"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 61,
      [STATS.SPECIAL_DEFENSE]: 61,
      [STATS.SPEED]: 100,
      "happiness": 70
    },
    "height": 12,
    "weight": 380,
    "base_exp_yield": 155,
    "growth": "medium",
    "capture_rate": 90,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  EKANS: {
    "id": 23,
    "species": "ekans",
    "dex_desc": "Moves silently and stealthily. Eats the eggs of birds, such as PIDGEY and SPEAROW, whole.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "intimidate"
      },
      {
        "hidden": false,
        "name": "shed-skin"
      },
      {
        "hidden": true,
        "name": "unnerve"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 60,
      [STATS.DEFENSE]: 44,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 54,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 20,
    "weight": 69,
    "base_exp_yield": 58,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  ARBOK: {
    "id": 24,
    "species": "arbok",
    "dex_desc": "It is rumored that the ferocious warning markings on its belly differ from area to area.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "intimidate"
      },
      {
        "hidden": false,
        "name": "shed-skin"
      },
      {
        "hidden": true,
        "name": "unnerve"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 69,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 79,
      [STATS.SPEED]: 80,
      "happiness": 70
    },
    "height": 35,
    "weight": 650,
    "base_exp_yield": 157,
    "growth": "medium",
    "capture_rate": 90,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  PIKACHU: {
    "id": 25,
    "species": "pikachu",
    "dex_desc": "",
    "types": [
      TYPES.ELECTRIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "static"
      },
      {
        "hidden": true,
        "name": "lightning-rod"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 55,
      [STATS.DEFENSE]: 40,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 4,
    "weight": 60,
    "base_exp_yield": 112,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 2551,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  RAICHU: {
    "id": 26,
    "species": "raichu",
    "dex_desc": "",
    "types": [
      TYPES.ELECTRIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "static"
      },
      {
        "hidden": true,
        "name": "lightning-rod"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 90,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 110,
      "happiness": 70
    },
    "height": 8,
    "weight": 300,
    "base_exp_yield": 218,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 2551,
    "egg_groups": [
      "ground",
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 3
      }
    ]
  },
  SANDSHREW: {
    "id": 27,
    "species": "sandshrew",
    "dex_desc": "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
    "types": [
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "sand-veil"
      },
      {
        "hidden": true,
        "name": "sand-rush"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 75,
      [STATS.DEFENSE]: 85,
      [STATS.SPECIAL_ATTACK]: 20,
      [STATS.SPECIAL_DEFENSE]: 30,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 6,
    "weight": 120,
    "base_exp_yield": 60,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  SANDSLASH: {
    "id": 28,
    "species": "sandslash",
    "dex_desc": "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
    "types": [
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "sand-veil"
      },
      {
        "hidden": true,
        "name": "sand-rush"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 110,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 65,
      "happiness": 70
    },
    "height": 10,
    "weight": 295,
    "base_exp_yield": 158,
    "growth": "medium",
    "capture_rate": 90,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  NIDORAN: {
    "id": 29,
    "species": "nidoran-f",
    "dex_desc": "Although small, its venomous barbs render this POKéMON dangerous. The female has smaller horns.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "rivalry"
      },
      {
        "hidden": true,
        "name": "hustle"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 47,
      [STATS.DEFENSE]: 52,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 41,
      "happiness": 70
    },
    "height": 4,
    "weight": 70,
    "base_exp_yield": 55,
    "growth": "medium-slow",
    "capture_rate": 235,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 1
      }
    ]
  },
  NIDORINA: {
    "id": 30,
    "species": "nidorina",
    "dex_desc": "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "rivalry"
      },
      {
        "hidden": true,
        "name": "hustle"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 62,
      [STATS.DEFENSE]: 67,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 56,
      "happiness": 70
    },
    "height": 8,
    "weight": 200,
    "base_exp_yield": 128,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 5101,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  NIDOQUEEN: {
    "id": 31,
    "species": "nidoqueen",
    "dex_desc": "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
    "types": [
      TYPES.POISON,
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "rivalry"
      },
      {
        "hidden": true,
        "name": "sheer-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 92,
      [STATS.DEFENSE]: 87,
      [STATS.SPECIAL_ATTACK]: 75,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 76,
      "happiness": 70
    },
    "height": 13,
    "weight": 600,
    "base_exp_yield": 227,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 3
      }
    ]
  },
  NIDORAN: {
    "id": 32,
    "species": "nidoran-m",
    "dex_desc": "",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.MALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "rivalry"
      },
      {
        "hidden": true,
        "name": "hustle"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 57,
      [STATS.DEFENSE]: 40,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 50,
      "happiness": 70
    },
    "height": 5,
    "weight": 90,
    "base_exp_yield": 55,
    "growth": "medium-slow",
    "capture_rate": 235,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  NIDORINO: {
    "id": 33,
    "species": "nidorino",
    "dex_desc": "An aggressive POKéMON that is quick to attack. The horn on its head secretes a powerful venom.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.MALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "rivalry"
      },
      {
        "hidden": true,
        "name": "hustle"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 72,
      [STATS.DEFENSE]: 57,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 65,
      "happiness": 70
    },
    "height": 9,
    "weight": 195,
    "base_exp_yield": 128,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  NIDOKING: {
    "id": 34,
    "species": "nidoking",
    "dex_desc": "",
    "types": [
      TYPES.POISON,
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.MALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "rivalry"
      },
      {
        "hidden": true,
        "name": "sheer-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 102,
      [STATS.DEFENSE]: 77,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 85,
      "happiness": 70
    },
    "height": 14,
    "weight": 620,
    "base_exp_yield": 227,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 3
      }
    ]
  },
  CLEFAIRY: {
    "id": 35,
    "species": "clefairy",
    "dex_desc": "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
    "types": [
      "fairy"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "75.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "25.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "cute-charm"
      },
      {
        "hidden": false,
        "name": "magic-guard"
      },
      {
        "hidden": true,
        "name": "friend-guard"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 48,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 35,
      "happiness": 140
    },
    "height": 6,
    "weight": 75,
    "base_exp_yield": 113,
    "growth": "fast",
    "capture_rate": 150,
    "base_egg_steps": 2551,
    "egg_groups": [
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  CLEFABLE: {
    "id": 36,
    "species": "clefable",
    "dex_desc": "A timid fairy POKéMON that is rarely seen. It will run and hide the moment it senses people.",
    "types": [
      "fairy"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "75.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "25.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "cute-charm"
      },
      {
        "hidden": false,
        "name": "magic-guard"
      },
      {
        "hidden": true,
        "name": "unaware"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 73,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 90,
      [STATS.SPEED]: 60,
      "happiness": 140
    },
    "height": 13,
    "weight": 400,
    "base_exp_yield": 217,
    "growth": "fast",
    "capture_rate": 25,
    "base_egg_steps": 2551,
    "egg_groups": [
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 3
      }
    ]
  },
  VULPIX: {
    "id": 37,
    "species": "vulpix",
    "dex_desc": "At the time of birth, it has just one tail. The tail splits from its tip as it grows older.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "75.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "25.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "drought"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 41,
      [STATS.DEFENSE]: 40,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 65,
      "happiness": 70
    },
    "height": 6,
    "weight": 99,
    "base_exp_yield": 60,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  NINETALES: {
    "id": 38,
    "species": "ninetales",
    "dex_desc": "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "75.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "25.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "drought"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 76,
      [STATS.DEFENSE]: 75,
      [STATS.SPECIAL_ATTACK]: 81,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 100,
      "happiness": 70
    },
    "height": 11,
    "weight": 199,
    "base_exp_yield": 177,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 1
      },
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  JIGGLYPUFF: {
    "id": 39,
    "species": "jigglypuff",
    "dex_desc": "When its huge eyes light up, it sings a mysteriously soothing melody that lulls its enemies to sleep.",
    "types": [
      TYPES.NORMAL,
      "fairy"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "75.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "25.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "cute-charm"
      },
      {
        "hidden": false,
        "name": "competitive"
      },
      {
        "hidden": true,
        "name": "friend-guard"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 20,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 25,
      [STATS.SPEED]: 20,
      "happiness": 70
    },
    "height": 5,
    "weight": 55,
    "base_exp_yield": 95,
    "growth": "fast",
    "capture_rate": 170,
    "base_egg_steps": 2551,
    "egg_groups": [
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  WIGGLYTUFF: {
    "id": 40,
    "species": "wigglytuff",
    "dex_desc": "The body is soft and rubbery. When angered, it will suck in air and inflate itself to an enormous size.",
    "types": [
      TYPES.NORMAL,
      "fairy"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "75.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "25.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "cute-charm"
      },
      {
        "hidden": false,
        "name": "competitive"
      },
      {
        "hidden": true,
        "name": "frisk"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 10,
    "weight": 120,
    "base_exp_yield": 196,
    "growth": "fast",
    "capture_rate": 50,
    "base_egg_steps": 2551,
    "egg_groups": [
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 3
      }
    ]
  },
  ZUBAT: {
    "id": 41,
    "species": "zubat",
    "dex_desc": "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
    "types": [
      TYPES.POISON,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "infiltrator"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 30,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 8,
    "weight": 75,
    "base_exp_yield": 49,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  GOLBAT: {
    "id": 42,
    "species": "golbat",
    "dex_desc": "Once it strikes, it will not stop draining energy from the victim even if it gets too heavy to fly.",
    "types": [
      TYPES.POISON,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "infiltrator"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 16,
    "weight": 550,
    "base_exp_yield": 159,
    "growth": "medium",
    "capture_rate": 90,
    "base_egg_steps": 3826,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  ODDISH: {
    "id": 43,
    "species": "oddish",
    "dex_desc": "During the day, it keeps its face buried in the ground. At night, it wanders around sowing its seeds.",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "run-away"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 75,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 30,
      "happiness": 70
    },
    "height": 5,
    "weight": 54,
    "base_exp_yield": 64,
    "growth": "medium-slow",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  GLOOM: {
    "id": 44,
    "species": "gloom",
    "dex_desc": "",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "stench"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 8,
    "weight": 86,
    "base_exp_yield": 138,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  VILEPLUME: {
    "id": 45,
    "species": "vileplume",
    "dex_desc": "",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "effect-spore"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 85,
      [STATS.SPECIAL_ATTACK]: 110,
      [STATS.SPECIAL_DEFENSE]: 90,
      [STATS.SPEED]: 50,
      "happiness": 70
    },
    "height": 12,
    "weight": 186,
    "base_exp_yield": 221,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  PARAS: {
    "id": 46,
    "species": "paras",
    "dex_desc": "Burrows to suck tree roots. The mushrooms on its back grow by drawé ing nutrients from the bug host.",
    "types": [
      TYPES.BUG,
      TYPES.GRASS
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "effect-spore"
      },
      {
        "hidden": false,
        "name": "dry-skin"
      },
      {
        "hidden": true,
        "name": "damp"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 25,
      "happiness": 70
    },
    "height": 3,
    "weight": 54,
    "base_exp_yield": 57,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "bug",
      "plant"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  PARASECT: {
    "id": 47,
    "species": "parasect",
    "dex_desc": "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
    "types": [
      TYPES.BUG,
      TYPES.GRASS
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "effect-spore"
      },
      {
        "hidden": false,
        "name": "dry-skin"
      },
      {
        "hidden": true,
        "name": "damp"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 30,
      "happiness": 70
    },
    "height": 10,
    "weight": 295,
    "base_exp_yield": 142,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "bug",
      "plant"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      },
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  VENONAT: {
    "id": 48,
    "species": "venonat",
    "dex_desc": "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
    "types": [
      TYPES.BUG,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "compound-eyes"
      },
      {
        "hidden": false,
        "name": "tinted-lens"
      },
      {
        "hidden": true,
        "name": "run-away"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 55,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 10,
    "weight": 300,
    "base_exp_yield": 61,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  VENOMOTH: {
    "id": 49,
    "species": "venomoth",
    "dex_desc": "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
    "types": [
      TYPES.BUG,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shield-dust"
      },
      {
        "hidden": false,
        "name": "tinted-lens"
      },
      {
        "hidden": true,
        "name": "wonder-skin"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 90,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 15,
    "weight": 125,
    "base_exp_yield": 158,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      },
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  DIGLETT: {
    "id": 50,
    "species": "diglett",
    "dex_desc": "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
    "types": [
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "sand-veil"
      },
      {
        "hidden": false,
        "name": "arena-trap"
      },
      {
        "hidden": true,
        "name": "sand-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 55,
      [STATS.DEFENSE]: 25,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 95,
      "happiness": 70
    },
    "height": 2,
    "weight": 8,
    "base_exp_yield": 53,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  DUGTRIO: {
    "id": 51,
    "species": "dugtrio",
    "dex_desc": "A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
    "types": [
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "sand-veil"
      },
      {
        "hidden": false,
        "name": "arena-trap"
      },
      {
        "hidden": true,
        "name": "sand-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 120,
      "happiness": 70
    },
    "height": 7,
    "weight": 333,
    "base_exp_yield": 149,
    "growth": "medium",
    "capture_rate": 50,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  MEOWTH: {
    "id": 52,
    "species": "meowth",
    "dex_desc": "",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "pickup"
      },
      {
        "hidden": false,
        "name": "technician"
      },
      {
        "hidden": true,
        "name": "unnerve"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 4,
    "weight": 42,
    "base_exp_yield": 58,
    "growth": "medium",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  PERSIAN: {
    "id": 53,
    "species": "persian",
    "dex_desc": "Although its fur has many admirers, it is tough to raise as a pet because of its fickle meanness.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "limber"
      },
      {
        "hidden": false,
        "name": "technician"
      },
      {
        "hidden": true,
        "name": "unnerve"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 115,
      "happiness": 70
    },
    "height": 10,
    "weight": 320,
    "base_exp_yield": 154,
    "growth": "medium",
    "capture_rate": 90,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  PSYDUCK: {
    "id": 54,
    "species": "psyduck",
    "dex_desc": "While lulling its enemies with its vacant look, this wily POKéMON will use psychokinetic powers.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "damp"
      },
      {
        "hidden": false,
        "name": "cloud-nine"
      },
      {
        "hidden": true,
        "name": "swift-swim"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 52,
      [STATS.DEFENSE]: 48,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 8,
    "weight": 196,
    "base_exp_yield": 64,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  GOLDUCK: {
    "id": 55,
    "species": "golduck",
    "dex_desc": "Often seen swimé ming elegantly by lake shores. It is often mistaken for the Japanese monster, Kappa.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "damp"
      },
      {
        "hidden": false,
        "name": "cloud-nine"
      },
      {
        "hidden": true,
        "name": "swift-swim"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 82,
      [STATS.DEFENSE]: 78,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 85,
      "happiness": 70
    },
    "height": 17,
    "weight": 766,
    "base_exp_yield": 175,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  MANKEY: {
    "id": 56,
    "species": "mankey",
    "dex_desc": "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "vital-spirit"
      },
      {
        "hidden": false,
        "name": "anger-point"
      },
      {
        "hidden": true,
        "name": "defiant"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 5,
    "weight": 280,
    "base_exp_yield": 61,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  PRIMEAPE: {
    "id": 57,
    "species": "primeape",
    "dex_desc": "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "vital-spirit"
      },
      {
        "hidden": false,
        "name": "anger-point"
      },
      {
        "hidden": true,
        "name": "defiant"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 105,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 95,
      "happiness": 70
    },
    "height": 10,
    "weight": 320,
    "base_exp_yield": 159,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  GROWLITHE: {
    "id": 58,
    "species": "growlithe",
    "dex_desc": "Very protective of its territory. It will bark and bite to repel intruders from its space.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "intimidate"
      },
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "justified"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 7,
    "weight": 190,
    "base_exp_yield": 70,
    "growth": "slow",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  ARCANINE: {
    "id": 59,
    "species": "arcanine",
    "dex_desc": "A POKéMON that has been admired since the past for its beauty. It runs agilely as if on wings.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "intimidate"
      },
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "justified"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 110,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 95,
      "happiness": 70
    },
    "height": 19,
    "weight": 1550,
    "base_exp_yield": 194,
    "growth": "slow",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  POLIWAG: {
    "id": 60,
    "species": "poliwag",
    "dex_desc": "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "water-absorb"
      },
      {
        "hidden": false,
        "name": "damp"
      },
      {
        "hidden": true,
        "name": "swift-swim"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 40,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 6,
    "weight": 124,
    "base_exp_yield": 60,
    "growth": "medium-slow",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  POLIWHIRL: {
    "id": 61,
    "species": "poliwhirl",
    "dex_desc": "Capable of living in or out of water. When out of water, it sweats to keep its body slimy.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "water-absorb"
      },
      {
        "hidden": false,
        "name": "damp"
      },
      {
        "hidden": true,
        "name": "swift-swim"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 10,
    "weight": 200,
    "base_exp_yield": 135,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  POLIWRATH: {
    "id": 62,
    "species": "poliwrath",
    "dex_desc": "An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.",
    "types": [
      TYPES.WATER,
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "water-absorb"
      },
      {
        "hidden": false,
        "name": "damp"
      },
      {
        "hidden": true,
        "name": "swift-swim"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 90,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 13,
    "weight": 540,
    "base_exp_yield": 230,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 3
      }
    ]
  },
  ABRA: {
    "id": 63,
    "species": "abra",
    "dex_desc": "",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "synchronize"
      },
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "magic-guard"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 20,
      [STATS.DEFENSE]: 15,
      [STATS.SPECIAL_ATTACK]: 105,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 9,
    "weight": 195,
    "base_exp_yield": 62,
    "growth": "medium-slow",
    "capture_rate": 200,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  KADABRA: {
    "id": 64,
    "species": "kadabra",
    "dex_desc": "It emits special alpha waves from its body that induce headaches just by being close by.",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "synchronize"
      },
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "magic-guard"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 35,
      [STATS.DEFENSE]: 30,
      [STATS.SPECIAL_ATTACK]: 120,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 105,
      "happiness": 70
    },
    "height": 13,
    "weight": 565,
    "base_exp_yield": 140,
    "growth": "medium-slow",
    "capture_rate": 100,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  ALAKAZAM: {
    "id": 65,
    "species": "alakazam",
    "dex_desc": "Its brain can outé perform a superé computer. Its intelligence quotient is said to be 5,000.",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "synchronize"
      },
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "magic-guard"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 135,
      [STATS.SPECIAL_DEFENSE]: 95,
      [STATS.SPEED]: 120,
      "happiness": 70
    },
    "height": 15,
    "weight": 480,
    "base_exp_yield": 225,
    "growth": "medium-slow",
    "capture_rate": 50,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  MACHOP: {
    "id": 66,
    "species": "machop",
    "dex_desc": "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "guts"
      },
      {
        "hidden": false,
        "name": "no-guard"
      },
      {
        "hidden": true,
        "name": "steadfast"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 35,
      [STATS.SPEED]: 35,
      "happiness": 70
    },
    "height": 8,
    "weight": 195,
    "base_exp_yield": 61,
    "growth": "medium-slow",
    "capture_rate": 180,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  MACHOKE: {
    "id": 67,
    "species": "machoke",
    "dex_desc": "Its muscular body is so powerful, it must wear a power save belt to be able to regulate its motions.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "guts"
      },
      {
        "hidden": false,
        "name": "no-guard"
      },
      {
        "hidden": true,
        "name": "steadfast"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 60,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 15,
    "weight": 705,
    "base_exp_yield": 142,
    "growth": "medium-slow",
    "capture_rate": 90,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  MACHAMP: {
    "id": 68,
    "species": "machamp",
    "dex_desc": "Using its heavy muscles, it throws powerful punches that can send the victim clear over the horizon.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "guts"
      },
      {
        "hidden": false,
        "name": "no-guard"
      },
      {
        "hidden": true,
        "name": "steadfast"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 130,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 16,
    "weight": 1300,
    "base_exp_yield": 227,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 3
      }
    ]
  },
  BELLSPROUT: {
    "id": 69,
    "species": "bellsprout",
    "dex_desc": "",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "gluttony"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 75,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 30,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 7,
    "weight": 40,
    "base_exp_yield": 60,
    "growth": "medium-slow",
    "capture_rate": 255,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  WEEPINBELL: {
    "id": 70,
    "species": "weepinbell",
    "dex_desc": "",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "gluttony"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 10,
    "weight": 64,
    "base_exp_yield": 137,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  VICTREEBEL: {
    "id": 71,
    "species": "victreebel",
    "dex_desc": "Said to live in huge colonies deep in jungles, although no one has ever returned from there.",
    "types": [
      TYPES.GRASS,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "gluttony"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 105,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 17,
    "weight": 155,
    "base_exp_yield": 221,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 3
      }
    ]
  },
  TENTACOOL: {
    "id": 72,
    "species": "tentacool",
    "dex_desc": "",
    "types": [
      TYPES.WATER,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "clear-body"
      },
      {
        "hidden": false,
        "name": "liquid-ooze"
      },
      {
        "hidden": true,
        "name": "rain-dish"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 40,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 9,
    "weight": 455,
    "base_exp_yield": 67,
    "growth": "slow",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  TENTACRUEL: {
    "id": 73,
    "species": "tentacruel",
    "dex_desc": "",
    "types": [
      TYPES.WATER,
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "clear-body"
      },
      {
        "hidden": false,
        "name": "liquid-ooze"
      },
      {
        "hidden": true,
        "name": "rain-dish"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 80,
      [STATS.SPECIAL_DEFENSE]: 120,
      [STATS.SPEED]: 100,
      "happiness": 70
    },
    "height": 16,
    "weight": 550,
    "base_exp_yield": 180,
    "growth": "slow",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 2
      }
    ]
  },
  GEODUDE: {
    "id": 74,
    "species": "geodude",
    "dex_desc": "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them.",
    "types": [
      "rock",
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "sturdy"
      },
      {
        "hidden": true,
        "name": "sand-veil"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 30,
      [STATS.SPECIAL_DEFENSE]: 30,
      [STATS.SPEED]: 20,
      "happiness": 70
    },
    "height": 4,
    "weight": 200,
    "base_exp_yield": 60,
    "growth": "medium-slow",
    "capture_rate": 255,
    "base_egg_steps": 3826,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  GRAVELER: {
    "id": 75,
    "species": "graveler",
    "dex_desc": "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
    "types": [
      "rock",
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "sturdy"
      },
      {
        "hidden": true,
        "name": "sand-veil"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 115,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 35,
      "happiness": 70
    },
    "height": 10,
    "weight": 1050,
    "base_exp_yield": 137,
    "growth": "medium-slow",
    "capture_rate": 120,
    "base_egg_steps": 3826,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  GOLEM: {
    "id": 76,
    "species": "golem",
    "dex_desc": "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.",
    "types": [
      "rock",
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "sturdy"
      },
      {
        "hidden": true,
        "name": "sand-veil"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 120,
      [STATS.DEFENSE]: 130,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 14,
    "weight": 3000,
    "base_exp_yield": 223,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 3826,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 3
      }
    ]
  },
  PONYTA: {
    "id": 77,
    "species": "ponyta",
    "dex_desc": "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "flame-body"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 85,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 10,
    "weight": 300,
    "base_exp_yield": 82,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  RAPIDASH: {
    "id": 78,
    "species": "rapidash",
    "dex_desc": "Very competitive, this POKéMON will chase anything that moves fast in the hopes of racing it.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "flame-body"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 80,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 105,
      "happiness": 70
    },
    "height": 17,
    "weight": 950,
    "base_exp_yield": 175,
    "growth": "medium",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  SLOWPOKE: {
    "id": 79,
    "species": "slowpoke",
    "dex_desc": "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
    "types": [
      TYPES.WATER,
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "oblivious"
      },
      {
        "hidden": false,
        "name": "own-tempo"
      },
      {
        "hidden": true,
        "name": "regenerator"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 15,
      "happiness": 70
    },
    "height": 12,
    "weight": 360,
    "base_exp_yield": 63,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 1
      }
    ]
  },
  SLOWBRO: {
    "id": 80,
    "species": "slowbro",
    "dex_desc": "The SHELLDER that is latched onto SLOWPOKE's tail is said to feed on the host's left over scraps.",
    "types": [
      TYPES.WATER,
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "oblivious"
      },
      {
        "hidden": false,
        "name": "own-tempo"
      },
      {
        "hidden": true,
        "name": "regenerator"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 75,
      [STATS.DEFENSE]: 110,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 30,
      "happiness": 70
    },
    "height": 16,
    "weight": 785,
    "base_exp_yield": 172,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  MAGNEMITE: {
    "id": 81,
    "species": "magnemite",
    "dex_desc": "Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
    "types": [
      TYPES.ELECTRIC,
      "steel"
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "magnet-pull"
      },
      {
        "hidden": false,
        "name": "sturdy"
      },
      {
        "hidden": true,
        "name": "analytic"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 35,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 3,
    "weight": 60,
    "base_exp_yield": 65,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  MAGNETON: {
    "id": 82,
    "species": "magneton",
    "dex_desc": "Formed by several MAGNEMITEs linked together. They frequently appear when sunspots flare up.",
    "types": [
      TYPES.ELECTRIC,
      "steel"
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "magnet-pull"
      },
      {
        "hidden": false,
        "name": "sturdy"
      },
      {
        "hidden": true,
        "name": "analytic"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 60,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 120,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 10,
    "weight": 600,
    "base_exp_yield": 163,
    "growth": "medium",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  FARFETCHD: {
    "id": 83,
    "species": "farfetchd",
    "dex_desc": "The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "defiant"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 58,
      [STATS.SPECIAL_DEFENSE]: 62,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 8,
    "weight": 150,
    "base_exp_yield": 132,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "flying",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  DODUO: {
    "id": 84,
    "species": "doduo",
    "dex_desc": "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "early-bird"
      },
      {
        "hidden": true,
        "name": "tangled-feet"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 85,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 35,
      [STATS.SPEED]: 75,
      "happiness": 70
    },
    "height": 14,
    "weight": 392,
    "base_exp_yield": 62,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  DODRIO: {
    "id": 85,
    "species": "dodrio",
    "dex_desc": "Uses its three brains to execute complex plans. While two heads sleep, one head stays awake.",
    "types": [
      TYPES.NORMAL,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "early-bird"
      },
      {
        "hidden": true,
        "name": "tangled-feet"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 110,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 60,
      [STATS.SPEED]: 110,
      "happiness": 70
    },
    "height": 18,
    "weight": 852,
    "base_exp_yield": 165,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  SEEL: {
    "id": 86,
    "species": "seel",
    "dex_desc": "The protruding horn on its head is very hard. It is used for bashing through thick ice.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "thick-fat"
      },
      {
        "hidden": false,
        "name": "hydration"
      },
      {
        "hidden": true,
        "name": "ice-body"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 11,
    "weight": 900,
    "base_exp_yield": 65,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  DEWGONG: {
    "id": 87,
    "species": "dewgong",
    "dex_desc": "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
    "types": [
      TYPES.WATER,
      "ice"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "thick-fat"
      },
      {
        "hidden": false,
        "name": "hydration"
      },
      {
        "hidden": true,
        "name": "ice-body"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 70,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 95,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 17,
    "weight": 1200,
    "base_exp_yield": 166,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 2
      }
    ]
  },
  GRIMER: {
    "id": 88,
    "species": "grimer",
    "dex_desc": "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "stench"
      },
      {
        "hidden": false,
        "name": "sticky-hold"
      },
      {
        "hidden": true,
        "name": "poison-touch"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 25,
      "happiness": 70
    },
    "height": 9,
    "weight": 300,
    "base_exp_yield": 65,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 1
      }
    ]
  },
  MUK: {
    "id": 89,
    "species": "muk",
    "dex_desc": "Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "stench"
      },
      {
        "hidden": false,
        "name": "sticky-hold"
      },
      {
        "hidden": true,
        "name": "poison-touch"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 105,
      [STATS.DEFENSE]: 75,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 50,
      "happiness": 70
    },
    "height": 12,
    "weight": 300,
    "base_exp_yield": 175,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 1
      },
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  SHELLDER: {
    "id": 90,
    "species": "shellder",
    "dex_desc": "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": false,
        "name": "skill-link"
      },
      {
        "hidden": true,
        "name": "overcoat"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 25,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 3,
    "weight": 40,
    "base_exp_yield": 61,
    "growth": "slow",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  CLOYSTER: {
    "id": 91,
    "species": "cloyster",
    "dex_desc": "",
    "types": [
      TYPES.WATER,
      "ice"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": false,
        "name": "skill-link"
      },
      {
        "hidden": true,
        "name": "overcoat"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 180,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 15,
    "weight": 1325,
    "base_exp_yield": 184,
    "growth": "slow",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  GASTLY: {
    "id": 92,
    "species": "gastly",
    "dex_desc": "Almost invisible, this gaseous POKéMON cloaks the target and puts it to sleep without notice.",
    "types": [
      "ghost",
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "levitate"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 35,
      [STATS.DEFENSE]: 30,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 35,
      [STATS.SPEED]: 80,
      "happiness": 70
    },
    "height": 13,
    "weight": 1,
    "base_exp_yield": 62,
    "growth": "medium-slow",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  HAUNTER: {
    "id": 93,
    "species": "haunter",
    "dex_desc": "Because of its ability to slip through block walls, it is said to be from ané other dimension.",
    "types": [
      "ghost",
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "levitate"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 115,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 95,
      "happiness": 70
    },
    "height": 16,
    "weight": 1,
    "base_exp_yield": 142,
    "growth": "medium-slow",
    "capture_rate": 90,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  GENGAR: {
    "id": 94,
    "species": "gengar",
    "dex_desc": "Under a full moon, this POKéMON likes to mimic the shadows of people and laugh at their fright.",
    "types": [
      "ghost",
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "cursed-body"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 130,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 110,
      "happiness": 70
    },
    "height": 15,
    "weight": 405,
    "base_exp_yield": 225,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  ONIX: {
    "id": 95,
    "species": "onix",
    "dex_desc": "As it grows, the stone portions of its body harden to become similar to a diamond, but colored black.",
    "types": [
      "rock",
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "sturdy"
      },
      {
        "hidden": true,
        "name": "weak-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 160,
      [STATS.SPECIAL_ATTACK]: 30,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 70,
      "happiness": 70
    },
    "height": 88,
    "weight": 2100,
    "base_exp_yield": 77,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  DROWZEE: {
    "id": 96,
    "species": "drowzee",
    "dex_desc": "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "insomnia"
      },
      {
        "hidden": false,
        "name": "forewarn"
      },
      {
        "hidden": true,
        "name": "inner-focus"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 48,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 43,
      [STATS.SPECIAL_DEFENSE]: 90,
      [STATS.SPEED]: 42,
      "happiness": 70
    },
    "height": 10,
    "weight": 324,
    "base_exp_yield": 66,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  HYPNO: {
    "id": 97,
    "species": "hypno",
    "dex_desc": "When it locks eyes with an enemy, it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "insomnia"
      },
      {
        "hidden": false,
        "name": "forewarn"
      },
      {
        "hidden": true,
        "name": "inner-focus"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 73,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 73,
      [STATS.SPECIAL_DEFENSE]: 115,
      [STATS.SPEED]: 67,
      "happiness": 70
    },
    "height": 16,
    "weight": 756,
    "base_exp_yield": 169,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 2
      }
    ]
  },
  KRABBY: {
    "id": 98,
    "species": "krabby",
    "dex_desc": "Its pincers are not only powerful weapons, they are used for balance when walking sideways.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "hyper-cutter"
      },
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": true,
        "name": "sheer-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 105,
      [STATS.DEFENSE]: 90,
      [STATS.SPECIAL_ATTACK]: 25,
      [STATS.SPECIAL_DEFENSE]: 25,
      [STATS.SPEED]: 50,
      "happiness": 70
    },
    "height": 4,
    "weight": 65,
    "base_exp_yield": 65,
    "growth": "medium",
    "capture_rate": 225,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  KINGLER: {
    "id": 99,
    "species": "kingler",
    "dex_desc": "The large pincer has 10000 hp of crushing power. However, its huge size makes it unwieldy to use.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "hyper-cutter"
      },
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": true,
        "name": "sheer-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 130,
      [STATS.DEFENSE]: 115,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 75,
      "happiness": 70
    },
    "height": 13,
    "weight": 600,
    "base_exp_yield": 166,
    "growth": "medium",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  VOLTORB: {
    "id": 100,
    "species": "voltorb",
    "dex_desc": "Usually found in power plants. Easily mistaken for a POKé BALL, they have zapped many people.",
    "types": [
      TYPES.ELECTRIC
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "soundproof"
      },
      {
        "hidden": false,
        "name": "static"
      },
      {
        "hidden": true,
        "name": "aftermath"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 30,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 100,
      "happiness": 70
    },
    "height": 5,
    "weight": 104,
    "base_exp_yield": 66,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  ELECTRODE: {
    "id": 101,
    "species": "electrode",
    "dex_desc": "It stores electric energy under very high pressure. It often explodes with little or no provocation.",
    "types": [
      TYPES.ELECTRIC
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "soundproof"
      },
      {
        "hidden": false,
        "name": "static"
      },
      {
        "hidden": true,
        "name": "aftermath"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 80,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 150,
      "happiness": 70
    },
    "height": 12,
    "weight": 666,
    "base_exp_yield": 172,
    "growth": "medium",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  EXEGGCUTE: {
    "id": 102,
    "species": "exeggcute",
    "dex_desc": "Often mistaken for eggs. When disturbed, they quickly gather and attack in swarms.",
    "types": [
      TYPES.GRASS,
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "harvest"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 40,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 4,
    "weight": 25,
    "base_exp_yield": 65,
    "growth": "slow",
    "capture_rate": 90,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  EXEGGUTOR: {
    "id": 103,
    "species": "exeggutor",
    "dex_desc": "Legend has it that on rare occasions, one of its heads will drop off and continue on as an EXEGGCUTE.",
    "types": [
      TYPES.GRASS,
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": true,
        "name": "harvest"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 85,
      [STATS.SPECIAL_ATTACK]: 125,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 20,
    "weight": 1200,
    "base_exp_yield": 186,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  CUBONE: {
    "id": 104,
    "species": "cubone",
    "dex_desc": "",
    "types": [
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "lightning-rod"
      },
      {
        "hidden": true,
        "name": "battle-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 35,
      "happiness": 70
    },
    "height": 4,
    "weight": 65,
    "base_exp_yield": 64,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  MAROWAK: {
    "id": 105,
    "species": "marowak",
    "dex_desc": "",
    "types": [
      TYPES.GROUND
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "lightning-rod"
      },
      {
        "hidden": true,
        "name": "battle-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 110,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 45,
      "happiness": 70
    },
    "height": 10,
    "weight": 450,
    "base_exp_yield": 149,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  HITMONLEE: {
    "id": 106,
    "species": "hitmonlee",
    "dex_desc": "When in a hurry, its legs lengthen progressively. It runs smoothly with extra long, loping strides.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.MALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "limber"
      },
      {
        "hidden": false,
        "name": "reckless"
      },
      {
        "hidden": true,
        "name": "unburden"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 120,
      [STATS.DEFENSE]: 53,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 110,
      [STATS.SPEED]: 87,
      "happiness": 70
    },
    "height": 15,
    "weight": 498,
    "base_exp_yield": 159,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  HITMONCHAN: {
    "id": 107,
    "species": "hitmonchan",
    "dex_desc": "While apparently doing nothing, it fires punches in lightning fast volleys that are impossible to see.",
    "types": [
      TYPES.FIGHTING
    ],
    "gender": [
      {
        "name": GENDERS.MALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "keen-eye"
      },
      {
        "hidden": false,
        "name": "iron-fist"
      },
      {
        "hidden": true,
        "name": "inner-focus"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 105,
      [STATS.DEFENSE]: 79,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 110,
      [STATS.SPEED]: 76,
      "happiness": 70
    },
    "height": 14,
    "weight": 502,
    "base_exp_yield": 159,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 2
      }
    ]
  },
  LICKITUNG: {
    "id": 108,
    "species": "lickitung",
    "dex_desc": "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "own-tempo"
      },
      {
        "hidden": false,
        "name": "oblivious"
      },
      {
        "hidden": true,
        "name": "cloud-nine"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 55,
      [STATS.DEFENSE]: 75,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 30,
      "happiness": 70
    },
    "height": 12,
    "weight": 655,
    "base_exp_yield": 77,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  KOFFING: {
    "id": 109,
    "species": "koffing",
    "dex_desc": "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "levitate"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 35,
      "happiness": 70
    },
    "height": 6,
    "weight": 10,
    "base_exp_yield": 68,
    "growth": "medium",
    "capture_rate": 190,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  WEEZING: {
    "id": 110,
    "species": "weezing",
    "dex_desc": "Where two kinds of poison gases meet, 2 KOFFINGs can fuse into a WEEZING over many years.",
    "types": [
      TYPES.POISON
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "levitate"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 120,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 12,
    "weight": 95,
    "base_exp_yield": 172,
    "growth": "medium",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "indeterminate"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  RHYHORN: {
    "id": 111,
    "species": "rhyhorn",
    "dex_desc": "Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.",
    "types": [
      TYPES.GROUND,
      "rock"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "lightning-rod"
      },
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": true,
        "name": "reckless"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 85,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 30,
      [STATS.SPECIAL_DEFENSE]: 30,
      [STATS.SPEED]: 25,
      "happiness": 70
    },
    "height": 10,
    "weight": 1150,
    "base_exp_yield": 69,
    "growth": "slow",
    "capture_rate": 120,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  RHYDON: {
    "id": 112,
    "species": "rhydon",
    "dex_desc": "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.",
    "types": [
      TYPES.GROUND,
      "rock"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "lightning-rod"
      },
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": true,
        "name": "reckless"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 130,
      [STATS.DEFENSE]: 120,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 19,
    "weight": 1200,
    "base_exp_yield": 170,
    "growth": "slow",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster",
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  CHANSEY: {
    "id": 113,
    "species": "chansey",
    "dex_desc": "A rare and elusive POKéMON that is said to bring happiness to those who manage to get it.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "natural-cure"
      },
      {
        "hidden": false,
        "name": "serene-grace"
      },
      {
        "hidden": true,
        "name": "healer"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 5,
      [STATS.DEFENSE]: 5,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 105,
      [STATS.SPEED]: 50,
      "happiness": 140
    },
    "height": 11,
    "weight": 346,
    "base_exp_yield": 395,
    "growth": "fast",
    "capture_rate": 30,
    "base_egg_steps": 10201,
    "egg_groups": [
      "fairy"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  TANGELA: {
    "id": 114,
    "species": "tangela",
    "dex_desc": "The whole body is swathed with wide vines that are similar to seaé weed. Its vines shake as it walks.",
    "types": [
      TYPES.GRASS
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "chlorophyll"
      },
      {
        "hidden": false,
        "name": "leaf-guard"
      },
      {
        "hidden": true,
        "name": "regenerator"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 55,
      [STATS.DEFENSE]: 115,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 40,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 10,
    "weight": 350,
    "base_exp_yield": 87,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "plant"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  KANGASKHAN: {
    "id": 115,
    "species": "kangaskhan",
    "dex_desc": "The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "early-bird"
      },
      {
        "hidden": false,
        "name": "scrappy"
      },
      {
        "hidden": true,
        "name": "inner-focus"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 22,
    "weight": 800,
    "base_exp_yield": 172,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "monster"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  HORSEA: {
    "id": 116,
    "species": "horsea",
    "dex_desc": "",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "sniper"
      },
      {
        "hidden": true,
        "name": "damp"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 40,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 25,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 4,
    "weight": 80,
    "base_exp_yield": 59,
    "growth": "medium",
    "capture_rate": 225,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  SEADRA: {
    "id": 117,
    "species": "seadra",
    "dex_desc": "Capable of swimé ming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "poison-point"
      },
      {
        "hidden": false,
        "name": "sniper"
      },
      {
        "hidden": true,
        "name": "damp"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 85,
      "happiness": 70
    },
    "height": 12,
    "weight": 250,
    "base_exp_yield": 154,
    "growth": "medium",
    "capture_rate": 75,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      },
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  GOLDEEN: {
    "id": 118,
    "species": "goldeen",
    "dex_desc": "",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "water-veil"
      },
      {
        "hidden": true,
        "name": "lightning-rod"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 67,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 35,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 63,
      "happiness": 70
    },
    "height": 6,
    "weight": 150,
    "base_exp_yield": 64,
    "growth": "medium",
    "capture_rate": 225,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water2"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  SEAKING: {
    "id": 119,
    "species": "seaking",
    "dex_desc": "In the autumn spawning season, they can be seen swimming poweré fully up rivers and creeks.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "water-veil"
      },
      {
        "hidden": true,
        "name": "lightning-rod"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 92,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 68,
      "happiness": 70
    },
    "height": 13,
    "weight": 390,
    "base_exp_yield": 158,
    "growth": "medium",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water2"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  STARYU: {
    "id": 120,
    "species": "staryu",
    "dex_desc": "An enigmatic POKéMON that can effortlessly regenerate any appendage it loses in battle.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "illuminate"
      },
      {
        "hidden": false,
        "name": "natural-cure"
      },
      {
        "hidden": true,
        "name": "analytic"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 85,
      "happiness": 70
    },
    "height": 8,
    "weight": 345,
    "base_exp_yield": 68,
    "growth": "slow",
    "capture_rate": 225,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  STARMIE: {
    "id": 121,
    "species": "starmie",
    "dex_desc": "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
    "types": [
      TYPES.WATER,
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "illuminate"
      },
      {
        "hidden": false,
        "name": "natural-cure"
      },
      {
        "hidden": true,
        "name": "analytic"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 75,
      [STATS.DEFENSE]: 85,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 115,
      "happiness": 70
    },
    "height": 11,
    "weight": 800,
    "base_exp_yield": 182,
    "growth": "slow",
    "capture_rate": 60,
    "base_egg_steps": 5101,
    "egg_groups": [
      "water3"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  MR: {
    "id": 122,
    "species": "mr-mime",
    "dex_desc": "If interrupted while it is miming, it will slap around the offender with its broad hands.",
    "types": [
      TYPES.PSYCHIC,
      "fairy"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "soundproof"
      },
      {
        "hidden": false,
        "name": "filter"
      },
      {
        "hidden": true,
        "name": "technician"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 45,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 120,
      [STATS.SPEED]: 90,
      "happiness": 70
    },
    "height": 13,
    "weight": 545,
    "base_exp_yield": 161,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 2
      }
    ]
  },
  SCYTHER: {
    "id": 123,
    "species": "scyther",
    "dex_desc": "With ninja-like agility and speed, it can create the illusion that there is more than one.",
    "types": [
      TYPES.BUG,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swarm"
      },
      {
        "hidden": false,
        "name": "technician"
      },
      {
        "hidden": true,
        "name": "steadfast"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 110,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 80,
      [STATS.SPEED]: 105,
      "happiness": 70
    },
    "height": 15,
    "weight": 560,
    "base_exp_yield": 100,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  JYNX: {
    "id": 124,
    "species": "jynx",
    "dex_desc": "",
    "types": [
      "ice",
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "oblivious"
      },
      {
        "hidden": false,
        "name": "forewarn"
      },
      {
        "hidden": true,
        "name": "dry-skin"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 50,
      [STATS.DEFENSE]: 35,
      [STATS.SPECIAL_ATTACK]: 115,
      [STATS.SPECIAL_DEFENSE]: 95,
      [STATS.SPEED]: 95,
      "happiness": 70
    },
    "height": 14,
    "weight": 406,
    "base_exp_yield": 159,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  ELECTABUZZ: {
    "id": 125,
    "species": "electabuzz",
    "dex_desc": "Normally found near power plants, they can wander away and cause major blackouts in cities.",
    "types": [
      TYPES.ELECTRIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "static"
      },
      {
        "hidden": true,
        "name": "vital-spirit"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 83,
      [STATS.DEFENSE]: 57,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 105,
      "happiness": 70
    },
    "height": 11,
    "weight": 300,
    "base_exp_yield": 172,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  MAGMAR: {
    "id": 126,
    "species": "magmar",
    "dex_desc": "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "25.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "75.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "flame-body"
      },
      {
        "hidden": true,
        "name": "vital-spirit"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 95,
      [STATS.DEFENSE]: 57,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 93,
      "happiness": 70
    },
    "height": 13,
    "weight": 445,
    "base_exp_yield": 173,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "humanshape"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 2
      }
    ]
  },
  PINSIR: {
    "id": 127,
    "species": "pinsir",
    "dex_desc": "If it fails to crush the victim in its pincers, it will swing it around and toss it hard.",
    "types": [
      TYPES.BUG
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "hyper-cutter"
      },
      {
        "hidden": false,
        "name": "mold-breaker"
      },
      {
        "hidden": true,
        "name": "moxie"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 125,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 85,
      "happiness": 70
    },
    "height": 15,
    "weight": 550,
    "base_exp_yield": 175,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 6376,
    "egg_groups": [
      "bug"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  TAUROS: {
    "id": 128,
    "species": "tauros",
    "dex_desc": "When it targets an enemy, it charges furiously while whipping its body with its long tails.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.MALE,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "intimidate"
      },
      {
        "hidden": false,
        "name": "anger-point"
      },
      {
        "hidden": true,
        "name": "sheer-force"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 40,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 110,
      "happiness": 70
    },
    "height": 14,
    "weight": 884,
    "base_exp_yield": 172,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      },
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  MAGIKARP: {
    "id": 129,
    "species": "magikarp",
    "dex_desc": "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": true,
        "name": "rattled"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 10,
      [STATS.DEFENSE]: 55,
      [STATS.SPECIAL_ATTACK]: 15,
      [STATS.SPECIAL_DEFENSE]: 20,
      [STATS.SPEED]: 80,
      "happiness": 70
    },
    "height": 9,
    "weight": 100,
    "base_exp_yield": 40,
    "growth": "slow",
    "capture_rate": 255,
    "base_egg_steps": 1276,
    "egg_groups": [
      "water2",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 1
      }
    ]
  },
  GYARADOS: {
    "id": 130,
    "species": "gyarados",
    "dex_desc": "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    "types": [
      TYPES.WATER,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "intimidate"
      },
      {
        "hidden": true,
        "name": "moxie"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 125,
      [STATS.DEFENSE]: 79,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 81,
      "happiness": 70
    },
    "height": 65,
    "weight": 2350,
    "base_exp_yield": 189,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 1276,
    "egg_groups": [
      "water2",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  LAPRAS: {
    "id": 131,
    "species": "lapras",
    "dex_desc": "A POKéMON that has been overé hunted almost to extinction. It can ferry people across the water.",
    "types": [
      TYPES.WATER,
      "ice"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "water-absorb"
      },
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": true,
        "name": "hydration"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 85,
      [STATS.DEFENSE]: 80,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 95,
      [STATS.SPEED]: 60,
      "happiness": 70
    },
    "height": 25,
    "weight": 2200,
    "base_exp_yield": 187,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 10201,
    "egg_groups": [
      "monster",
      "water1"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  DITTO: {
    "id": 132,
    "species": "ditto",
    "dex_desc": "",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "limber"
      },
      {
        "hidden": true,
        "name": "imposter"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 48,
      [STATS.DEFENSE]: 48,
      [STATS.SPECIAL_ATTACK]: 48,
      [STATS.SPECIAL_DEFENSE]: 48,
      [STATS.SPEED]: 48,
      "happiness": 70
    },
    "height": 3,
    "weight": 40,
    "base_exp_yield": 101,
    "growth": "medium",
    "capture_rate": 35,
    "base_egg_steps": 5101,
    "egg_groups": [
      "ditto"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 1
      }
    ]
  },
  EEVEE: {
    "id": 133,
    "species": "eevee",
    "dex_desc": "Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "run-away"
      },
      {
        "hidden": false,
        "name": "adaptability"
      },
      {
        "hidden": true,
        "name": "anticipation"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 55,
      [STATS.DEFENSE]: 50,
      [STATS.SPECIAL_ATTACK]: 45,
      [STATS.SPECIAL_DEFENSE]: 65,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 3,
    "weight": 65,
    "base_exp_yield": 65,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 8926,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 1
      }
    ]
  },
  VAPOREON: {
    "id": 134,
    "species": "vaporeon",
    "dex_desc": "",
    "types": [
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "water-absorb"
      },
      {
        "hidden": true,
        "name": "hydration"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 110,
      [STATS.SPECIAL_DEFENSE]: 95,
      [STATS.SPEED]: 65,
      "happiness": 70
    },
    "height": 10,
    "weight": 290,
    "base_exp_yield": 184,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 8926,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  JOLTEON: {
    "id": 135,
    "species": "jolteon",
    "dex_desc": "It accumulates negative ions in the atmosphere to blast out 10000- volt lightning bolts.",
    "types": [
      TYPES.ELECTRIC
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "volt-absorb"
      },
      {
        "hidden": true,
        "name": "quick-feet"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 65,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 110,
      [STATS.SPECIAL_DEFENSE]: 95,
      [STATS.SPEED]: 130,
      "happiness": 70
    },
    "height": 8,
    "weight": 245,
    "base_exp_yield": 184,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 8926,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  FLAREON: {
    "id": 136,
    "species": "flareon",
    "dex_desc": "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
    "types": [
      TYPES.FIRE
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "flash-fire"
      },
      {
        "hidden": true,
        "name": "guts"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 130,
      [STATS.DEFENSE]: 60,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 110,
      [STATS.SPEED]: 65,
      "happiness": 70
    },
    "height": 9,
    "weight": 250,
    "base_exp_yield": 184,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 8926,
    "egg_groups": [
      "ground"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  PORYGON: {
    "id": 137,
    "species": "porygon",
    "dex_desc": "A POKéMON that consists entirely of programming code. Capable of moving freely in cyberspace.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "trace"
      },
      {
        "hidden": false,
        "name": "download"
      },
      {
        "hidden": true,
        "name": "analytic"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 60,
      [STATS.DEFENSE]: 70,
      [STATS.SPECIAL_ATTACK]: 85,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 40,
      "happiness": 70
    },
    "height": 8,
    "weight": 365,
    "base_exp_yield": 79,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 5101,
    "egg_groups": [
      "mineral"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 1
      }
    ]
  },
  OMANYTE: {
    "id": 138,
    "species": "omanyte",
    "dex_desc": "Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
    "types": [
      "rock",
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": true,
        "name": "weak-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 40,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 90,
      [STATS.SPECIAL_DEFENSE]: 55,
      [STATS.SPEED]: 35,
      "happiness": 70
    },
    "height": 4,
    "weight": 75,
    "base_exp_yield": 71,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 7651,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  OMASTAR: {
    "id": 139,
    "species": "omastar",
    "dex_desc": "",
    "types": [
      "rock",
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "shell-armor"
      },
      {
        "hidden": true,
        "name": "weak-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 60,
      [STATS.DEFENSE]: 125,
      [STATS.SPECIAL_ATTACK]: 115,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 10,
    "weight": 350,
    "base_exp_yield": 173,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 7651,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 2
      }
    ]
  },
  KABUTO: {
    "id": 140,
    "species": "kabuto",
    "dex_desc": "A POKéMON that was resurrected from a fossil found in what was once the ocean floor eons ago.",
    "types": [
      "rock",
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "battle-armor"
      },
      {
        "hidden": true,
        "name": "weak-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 80,
      [STATS.DEFENSE]: 90,
      [STATS.SPECIAL_ATTACK]: 55,
      [STATS.SPECIAL_DEFENSE]: 45,
      [STATS.SPEED]: 55,
      "happiness": 70
    },
    "height": 5,
    "weight": 115,
    "base_exp_yield": 71,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 7651,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "effort_yield": [
      {
        "type": "defense",
        "value": 1
      }
    ]
  },
  KABUTOPS: {
    "id": 141,
    "species": "kabutops",
    "dex_desc": "Its sleek shape is perfect for swimé ming. It slashes prey with its claws and drains the body fluids.",
    "types": [
      "rock",
      TYPES.WATER
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "swift-swim"
      },
      {
        "hidden": false,
        "name": "battle-armor"
      },
      {
        "hidden": true,
        "name": "weak-armor"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 115,
      [STATS.DEFENSE]: 105,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 80,
      "happiness": 70
    },
    "height": 13,
    "weight": 405,
    "base_exp_yield": 173,
    "growth": "medium",
    "capture_rate": 45,
    "base_egg_steps": 7651,
    "egg_groups": [
      "water1",
      "water3"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  AERODACTYL: {
    "id": 142,
    "species": "aerodactyl",
    "dex_desc": "A ferocious, preé historic POKéMON that goes for the enemy's throat with its serrated saw-like fangs.",
    "types": [
      "rock",
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "rock-head"
      },
      {
        "hidden": false,
        "name": "pressure"
      },
      {
        "hidden": true,
        "name": "unnerve"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 105,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 60,
      [STATS.SPECIAL_DEFENSE]: 75,
      [STATS.SPEED]: 130,
      "happiness": 70
    },
    "height": 18,
    "weight": 590,
    "base_exp_yield": 180,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 8926,
    "egg_groups": [
      "flying"
    ],
    "effort_yield": [
      {
        "type": "speed",
        "value": 2
      }
    ]
  },
  SNORLAX: {
    "id": 143,
    "species": "snorlax",
    "dex_desc": "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
    "types": [
      TYPES.NORMAL
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "12.5"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "87.5"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "immunity"
      },
      {
        "hidden": false,
        "name": "thick-fat"
      },
      {
        "hidden": true,
        "name": "gluttony"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 110,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 65,
      [STATS.SPECIAL_DEFENSE]: 110,
      [STATS.SPEED]: 30,
      "happiness": 70
    },
    "height": 21,
    "weight": 4600,
    "base_exp_yield": 189,
    "growth": "slow",
    "capture_rate": 25,
    "base_egg_steps": 10201,
    "egg_groups": [
      "monster"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 2
      }
    ]
  },
  ARTICUNO: {
    "id": 144,
    "species": "articuno",
    "dex_desc": "A legendary bird POKéMON that is said to appear to doomed people who are lost in icy mountains.",
    "types": [
      "ice",
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "pressure"
      },
      {
        "hidden": true,
        "name": "snow-cloak"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 85,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 95,
      [STATS.SPECIAL_DEFENSE]: 125,
      [STATS.SPEED]: 85,
      "happiness": 35
    },
    "height": 17,
    "weight": 554,
    "base_exp_yield": 261,
    "growth": "slow",
    "capture_rate": 3,
    "base_egg_steps": 20401,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "special-defense",
        "value": 3
      }
    ]
  },
  ZAPDOS: {
    "id": 145,
    "species": "zapdos",
    "dex_desc": "A legendary bird POKéMON that is said to appear from clouds while dropping enormous lightning bolts.",
    "types": [
      TYPES.ELECTRIC,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "pressure"
      },
      {
        "hidden": true,
        "name": "static"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 90,
      [STATS.DEFENSE]: 85,
      [STATS.SPECIAL_ATTACK]: 125,
      [STATS.SPECIAL_DEFENSE]: 90,
      [STATS.SPEED]: 100,
      "happiness": 35
    },
    "height": 16,
    "weight": 526,
    "base_exp_yield": 261,
    "growth": "slow",
    "capture_rate": 3,
    "base_egg_steps": 20401,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  MOLTRES: {
    "id": 146,
    "species": "moltres",
    "dex_desc": "",
    "types": [
      TYPES.FIRE,
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "pressure"
      },
      {
        "hidden": true,
        "name": "flame-body"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 90,
      [STATS.SPECIAL_ATTACK]: 125,
      [STATS.SPECIAL_DEFENSE]: 85,
      [STATS.SPEED]: 90,
      "happiness": 35
    },
    "height": 20,
    "weight": 600,
    "base_exp_yield": 261,
    "growth": "slow",
    "capture_rate": 3,
    "base_egg_steps": 20401,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  DRATINI: {
    "id": 147,
    "species": "dratini",
    "dex_desc": "Long considered a mythical POKéMON until recently when a small colony was found living underwater.",
    "types": [
      "dragon"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shed-skin"
      },
      {
        "hidden": true,
        "name": "marvel-scale"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 64,
      [STATS.DEFENSE]: 45,
      [STATS.SPECIAL_ATTACK]: 50,
      [STATS.SPECIAL_DEFENSE]: 50,
      [STATS.SPEED]: 50,
      "happiness": 35
    },
    "height": 18,
    "weight": 33,
    "base_exp_yield": 60,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 10201,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 1
      }
    ]
  },
  DRAGONAIR: {
    "id": 148,
    "species": "dragonair",
    "dex_desc": "A mystical POKéMON that exudes a gentle aura. Has the ability to change climate conditions.",
    "types": [
      "dragon"
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "shed-skin"
      },
      {
        "hidden": true,
        "name": "marvel-scale"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 84,
      [STATS.DEFENSE]: 65,
      [STATS.SPECIAL_ATTACK]: 70,
      [STATS.SPECIAL_DEFENSE]: 70,
      [STATS.SPEED]: 70,
      "happiness": 35
    },
    "height": 40,
    "weight": 165,
    "base_exp_yield": 147,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 10201,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 2
      }
    ]
  },
  DRAGONITE: {
    "id": 149,
    "species": "dragonite",
    "dex_desc": "An extremely rarely seen marine POKéMON. Its intelligence is said to match that of humans.",
    "types": [
      "dragon",
      TYPES.FLYING
    ],
    "gender": [
      {
        "name": GENDERS.FEMALE,
        "ratio": "50.0"
      },
      {
        "name": GENDERS.MALE,
        "ratio": "50.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "inner-focus"
      },
      {
        "hidden": true,
        "name": "multiscale"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 134,
      [STATS.DEFENSE]: 95,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 80,
      "happiness": 35
    },
    "height": 22,
    "weight": 2100,
    "base_exp_yield": 270,
    "growth": "slow",
    "capture_rate": 45,
    "base_egg_steps": 10201,
    "egg_groups": [
      "water1",
      "dragon"
    ],
    "effort_yield": [
      {
        "type": "attack",
        "value": 3
      }
    ]
  },
  MEWTWO: {
    "id": 150,
    "species": "mewtwo",
    "dex_desc": "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "pressure"
      },
      {
        "hidden": true,
        "name": "unnerve"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 110,
      [STATS.DEFENSE]: 90,
      [STATS.SPECIAL_ATTACK]: 154,
      [STATS.SPECIAL_DEFENSE]: 90,
      [STATS.SPEED]: 130,
      "happiness": 0
    },
    "height": 20,
    "weight": 1220,
    "base_exp_yield": 306,
    "growth": "slow",
    "capture_rate": 3,
    "base_egg_steps": 30601,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "special-attack",
        "value": 3
      }
    ]
  },
  MEW: {
    "id": 151,
    "species": "mew",
    "dex_desc": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    "types": [
      TYPES.PSYCHIC
    ],
    "gender": [
      {
        "name": GENDERS.GENDERLESS,
        "ratio": "100.0"
      }
    ],
    "abilities": [
      {
        "hidden": false,
        "name": "synchronize"
      }
    ],
    "form": [],
    "base_stats": {
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 100,
      [STATS.SPECIAL_ATTACK]: 100,
      [STATS.SPECIAL_DEFENSE]: 100,
      [STATS.SPEED]: 100,
      "happiness": 100
    },
    "height": 4,
    "weight": 40,
    "base_exp_yield": 270,
    "growth": "medium-slow",
    "capture_rate": 45,
    "base_egg_steps": 30601,
    "egg_groups": [
      "no-eggs"
    ],
    "effort_yield": [
      {
        "type": "hp",
        "value": 3
      }
    ]
  }
]
