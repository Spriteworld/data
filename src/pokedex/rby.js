import { GENDERS, STATS } from '../index';
import { GROWTH } from '../pokemon/index';
import * as TYPES from '../types/definitions';

export const POKEDEX = {
    BULBASAUR: {
        "id": 0,
        "nat_dex_id": 1,
        "species": "bulbasaur",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 45,
            [STATS.ATTACK]: 49,
            [STATS.DEFENSE]: 49,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 0.7,
        "weight": 6.9,
        "base_exp_yield": 64,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    IVYSAUR: {
        "id": 1,
        "nat_dex_id": 2,
        "species": "ivysaur",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 62,
            [STATS.DEFENSE]: 63,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 1,
        "weight": 13,
        "base_exp_yield": 142,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VENUSAUR: {
        "id": 2,
        "nat_dex_id": 3,
        "species": "venusaur",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 82,
            [STATS.DEFENSE]: 83,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 2,
        "weight": 100,
        "base_exp_yield": 236,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CHARMANDER: {
        "id": 3,
        "nat_dex_id": 4,
        "species": "charmander",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 39,
            [STATS.ATTACK]: 52,
            [STATS.DEFENSE]: 43,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 65
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 90.5,
        "base_exp_yield": 62,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CHARMELEON: {
        "id": 4,
        "nat_dex_id": 5,
        "species": "charmeleon",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 58,
            [STATS.ATTACK]: 64,
            [STATS.DEFENSE]: 58,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 19,
        "base_exp_yield": 142,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CHARIZARD: {
        "id": 5,
        "nat_dex_id": 6,
        "species": "charizard",
        "types": [
            TYPES.FIRE,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 78,
            [STATS.ATTACK]: 84,
            [STATS.DEFENSE]: 78,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 1.7,
        "weight": 90.5,
        "base_exp_yield": 240,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SQUIRTLE: {
        "id": 6,
        "nat_dex_id": 7,
        "species": "squirtle",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 44,
            [STATS.ATTACK]: 48,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 43
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 9,
        "base_exp_yield": 63,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    WARTORTLE: {
        "id": 7,
        "nat_dex_id": 8,
        "species": "wartortle",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 59,
            [STATS.ATTACK]: 63,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 58
        },
        "happiness": 0,
        "height": 1,
        "weight": 22.5,
        "base_exp_yield": 142,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    BLASTOISE: {
        "id": 8,
        "nat_dex_id": 9,
        "species": "blastoise",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 79,
            [STATS.ATTACK]: 83,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 78
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 85.5,
        "base_exp_yield": 239,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CATERPIE: {
        "id": 9,
        "nat_dex_id": 10,
        "species": "caterpie",
        "types": [
            TYPES.BUG
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 45,
            [STATS.ATTACK]: 30,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 20,
            [STATS.SPECIAL_DEFENSE]: 20,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 2.9,
        "base_exp_yield": 39,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    METAPOD: {
        "id": 10,
        "nat_dex_id": 11,
        "species": "metapod",
        "types": [
            TYPES.BUG
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 20,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 25,
            [STATS.SPECIAL_DEFENSE]: 25,
            [STATS.SPEED]: 30
        },
        "happiness": 0,
        "height": 0.7,
        "weight": 9.9,
        "base_exp_yield": 72,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    BUTTERFREE: {
        "id": 11,
        "nat_dex_id": 12,
        "species": "butterfree",
        "types": [
            TYPES.BUG,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 32,
        "base_exp_yield": 178,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    WEEDLE: {
        "id": 12,
        "nat_dex_id": 13,
        "species": "weedle",
        "types": [
            TYPES.BUG
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 35,
            [STATS.DEFENSE]: 30,
            [STATS.SPECIAL_ATTACK]: 20,
            [STATS.SPECIAL_DEFENSE]: 20,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 3.2,
        "base_exp_yield": 39,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KAKUNA: {
        "id": 13,
        "nat_dex_id": 14,
        "species": "kakuna",
        "types": [
            TYPES.BUG
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 45,
            [STATS.ATTACK]: 25,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 25,
            [STATS.SPECIAL_DEFENSE]: 25,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 10,
        "base_exp_yield": 72,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    BEEDRILL: {
        "id": 14,
        "nat_dex_id": 15,
        "species": "beedrill",
        "types": [
            TYPES.BUG,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 40,
            [STATS.SPECIAL_ATTACK]: 45,
            [STATS.SPECIAL_DEFENSE]: 45,
            [STATS.SPEED]: 75
        },
        "happiness": 0,
        "height": 1,
        "weight": 29.5,
        "base_exp_yield": 178,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PIDGEY: {
        "id": 15,
        "nat_dex_id": 16,
        "species": "pidgey",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 40,
            [STATS.SPECIAL_ATTACK]: 35,
            [STATS.SPECIAL_DEFENSE]: 35,
            [STATS.SPEED]: 56
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 1.8,
        "base_exp_yield": 50,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PIDGEOTTO: {
        "id": 16,
        "nat_dex_id": 17,
        "species": "pidgeotto",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 63,
            [STATS.ATTACK]: 60,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 71
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 30,
        "base_exp_yield": 122,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PIDGEOT: {
        "id": 17,
        "nat_dex_id": 18,
        "species": "pidgeot",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 83,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 75,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 91
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 39.5,
        "base_exp_yield": 216,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    RATTATA: {
        "id": 18,
        "nat_dex_id": 19,
        "species": "rattata",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 56,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 25,
            [STATS.SPECIAL_DEFENSE]: 25,
            [STATS.SPEED]: 72
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 3.5,
        "base_exp_yield": 51,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    RATICATE: {
        "id": 19,
        "nat_dex_id": 20,
        "species": "raticate",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 81,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 97
        },
        "happiness": 0,
        "height": 0.7,
        "weight": 18.5,
        "base_exp_yield": 145,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 127,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SPEAROW: {
        "id": 20,
        "nat_dex_id": 21,
        "species": "spearow",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 60,
            [STATS.DEFENSE]: 30,
            [STATS.SPECIAL_ATTACK]: 31,
            [STATS.SPECIAL_DEFENSE]: 31,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 2,
        "base_exp_yield": 52,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    FEAROW: {
        "id": 21,
        "nat_dex_id": 22,
        "species": "fearow",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 90,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 61,
            [STATS.SPECIAL_DEFENSE]: 61,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 38,
        "base_exp_yield": 155,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    EKANS: {
        "id": 22,
        "nat_dex_id": 23,
        "species": "ekans",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 60,
            [STATS.DEFENSE]: 44,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 2,
        "weight": 6.9,
        "base_exp_yield": 58,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ARBOK: {
        "id": 23,
        "nat_dex_id": 24,
        "species": "arbok",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 69,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 3.5,
        "weight": 65,
        "base_exp_yield": 157,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PIKACHU: {
        "id": 24,
        "nat_dex_id": 25,
        "species": "pikachu",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 55,
            [STATS.DEFENSE]: 30,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 6,
        "base_exp_yield": 112,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    RAICHU: {
        "id": 25,
        "nat_dex_id": 26,
        "species": "raichu",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 90,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 90,
            [STATS.SPECIAL_DEFENSE]: 90,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 30,
        "base_exp_yield": 218,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SANDSHREW: {
        "id": 26,
        "nat_dex_id": 27,
        "species": "sandshrew",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 75,
            [STATS.DEFENSE]: 85,
            [STATS.SPECIAL_ATTACK]: 30,
            [STATS.SPECIAL_DEFENSE]: 30,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 12,
        "base_exp_yield": 60,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SANDSLASH: {
        "id": 27,
        "nat_dex_id": 28,
        "species": "sandslash",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 75,
            [STATS.ATTACK]: 100,
            [STATS.DEFENSE]: 110,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 65
        },
        "happiness": 0,
        "height": 1,
        "weight": 29.5,
        "base_exp_yield": 158,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NIDORAN_F: {
        "id": 28,
        "nat_dex_id": 29,
        "species": "nidoran (f)",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 47,
            [STATS.DEFENSE]: 52,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 41
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 7,
        "base_exp_yield": 55,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 235,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NIDORINA: {
        "id": 29,
        "nat_dex_id": 30,
        "species": "nidorina",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 70,
            [STATS.ATTACK]: 62,
            [STATS.DEFENSE]: 67,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 56
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 20,
        "base_exp_yield": 128,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NIDOQUEEN: {
        "id": 30,
        "nat_dex_id": 31,
        "species": "nidoqueen",
        "types": [
            TYPES.POISON,
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 82,
            [STATS.DEFENSE]: 87,
            [STATS.SPECIAL_ATTACK]: 75,
            [STATS.SPECIAL_DEFENSE]: 75,
            [STATS.SPEED]: 76
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 60,
        "base_exp_yield": 227,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NIDORAN_M: {
        "id": 31,
        "nat_dex_id": 32,
        "species": "nidoran (m)",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 46,
            [STATS.ATTACK]: 57,
            [STATS.DEFENSE]: 40,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 9,
        "base_exp_yield": 55,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 235,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NIDORINO: {
        "id": 32,
        "nat_dex_id": 33,
        "species": "nidorino",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 61,
            [STATS.ATTACK]: 72,
            [STATS.DEFENSE]: 57,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 65
        },
        "happiness": 0,
        "height": 0.9,
        "weight": 19.5,
        "base_exp_yield": 128,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NIDOKING: {
        "id": 33,
        "nat_dex_id": 34,
        "species": "nidoking",
        "types": [
            TYPES.POISON,
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 81,
            [STATS.ATTACK]: 92,
            [STATS.DEFENSE]: 77,
            [STATS.SPECIAL_ATTACK]: 75,
            [STATS.SPECIAL_DEFENSE]: 75,
            [STATS.SPEED]: 85
        },
        "happiness": 0,
        "height": 1.4,
        "weight": 62,
        "base_exp_yield": 227,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CLEFAIRY: {
        "id": 34,
        "nat_dex_id": 35,
        "species": "clefairy",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 70,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 48,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 7.5,
        "base_exp_yield": 113,
        "growth": GROWTH.FAST,
        "capture_rate": 150,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CLEFABLE: {
        "id": 35,
        "nat_dex_id": 36,
        "species": "clefable",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 95,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 73,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 40,
        "base_exp_yield": 217,
        "growth": GROWTH.FAST,
        "capture_rate": 25,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VULPIX: {
        "id": 36,
        "nat_dex_id": 37,
        "species": "vulpix",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 38,
            [STATS.ATTACK]: 41,
            [STATS.DEFENSE]: 40,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 65
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 9.9,
        "base_exp_yield": 60,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    NINETALES: {
        "id": 37,
        "nat_dex_id": 38,
        "species": "ninetales",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 73,
            [STATS.ATTACK]: 76,
            [STATS.DEFENSE]: 75,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 19.9,
        "base_exp_yield": 177,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    JIGGLYPUFF: {
        "id": 38,
        "nat_dex_id": 39,
        "species": "jigglypuff",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 115,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 20,
            [STATS.SPECIAL_ATTACK]: 25,
            [STATS.SPECIAL_DEFENSE]: 25,
            [STATS.SPEED]: 20
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 5.5,
        "base_exp_yield": 95,
        "growth": GROWTH.FAST,
        "capture_rate": 170,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    WIGGLYTUFF: {
        "id": 39,
        "nat_dex_id": 40,
        "species": "wigglytuff",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 140,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 1,
        "weight": 12,
        "base_exp_yield": 196,
        "growth": GROWTH.FAST,
        "capture_rate": 50,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ZUBAT: {
        "id": 40,
        "nat_dex_id": 41,
        "species": "zubat",
        "types": [
            TYPES.POISON,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 7.5,
        "base_exp_yield": 49,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GOLBAT: {
        "id": 41,
        "nat_dex_id": 42,
        "species": "golbat",
        "types": [
            TYPES.POISON,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 75,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 75,
            [STATS.SPECIAL_DEFENSE]: 75,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 55,
        "base_exp_yield": 159,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ODDISH: {
        "id": 42,
        "nat_dex_id": 43,
        "species": "oddish",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 45,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 75,
            [STATS.SPECIAL_DEFENSE]: 75,
            [STATS.SPEED]: 30
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 5.4,
        "base_exp_yield": 64,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GLOOM: {
        "id": 43,
        "nat_dex_id": 44,
        "species": "gloom",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 8.6,
        "base_exp_yield": 138,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VILEPLUME: {
        "id": 44,
        "nat_dex_id": 45,
        "species": "vileplume",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 75,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 85,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 18.6,
        "base_exp_yield": 221,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PARAS: {
        "id": 45,
        "nat_dex_id": 46,
        "species": "paras",
        "types": [
            TYPES.BUG,
            TYPES.GRASS
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 25
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 5.4,
        "base_exp_yield": 57,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PARASECT: {
        "id": 46,
        "nat_dex_id": 47,
        "species": "parasect",
        "types": [
            TYPES.BUG,
            TYPES.GRASS
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 95,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 30
        },
        "happiness": 0,
        "height": 1,
        "weight": 29.5,
        "base_exp_yield": 142,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VENONAT: {
        "id": 47,
        "nat_dex_id": 48,
        "species": "venonat",
        "types": [
            TYPES.BUG,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 55,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 1,
        "weight": 30,
        "base_exp_yield": 61,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VENOMOTH: {
        "id": 48,
        "nat_dex_id": 49,
        "species": "venomoth",
        "types": [
            TYPES.BUG,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 70,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 90,
            [STATS.SPECIAL_DEFENSE]: 90,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 12.5,
        "base_exp_yield": 158,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DIGLETT: {
        "id": 49,
        "nat_dex_id": 50,
        "species": "diglett",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 10,
            [STATS.ATTACK]: 55,
            [STATS.DEFENSE]: 25,
            [STATS.SPECIAL_ATTACK]: 45,
            [STATS.SPECIAL_DEFENSE]: 45,
            [STATS.SPEED]: 95
        },
        "happiness": 0,
        "height": 0.2,
        "weight": 0.8,
        "base_exp_yield": 53,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DUGTRIO: {
        "id": 50,
        "nat_dex_id": 51,
        "species": "dugtrio",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 120
        },
        "happiness": 0,
        "height": 0.7,
        "weight": 33.3,
        "base_exp_yield": 149,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 50,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MEOWTH: {
        "id": 51,
        "nat_dex_id": 52,
        "species": "meowth",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 4.2,
        "base_exp_yield": 58,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PERSIAN: {
        "id": 52,
        "nat_dex_id": 53,
        "species": "persian",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 115
        },
        "happiness": 0,
        "height": 1,
        "weight": 32,
        "base_exp_yield": 154,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PSYDUCK: {
        "id": 53,
        "nat_dex_id": 54,
        "species": "psyduck",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 52,
            [STATS.DEFENSE]: 48,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 19.6,
        "base_exp_yield": 64,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GOLDUCK: {
        "id": 54,
        "nat_dex_id": 55,
        "species": "golduck",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 82,
            [STATS.DEFENSE]: 78,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 85
        },
        "happiness": 0,
        "height": 1.7,
        "weight": 76.6,
        "base_exp_yield": 175,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MANKEY: {
        "id": 55,
        "nat_dex_id": 56,
        "species": "mankey",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 35,
            [STATS.SPECIAL_DEFENSE]: 35,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 28,
        "base_exp_yield": 61,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PRIMEAPE: {
        "id": 56,
        "nat_dex_id": 57,
        "species": "primeape",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 105,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 95
        },
        "happiness": 0,
        "height": 1,
        "weight": 32,
        "base_exp_yield": 159,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GROWLITHE: {
        "id": 57,
        "nat_dex_id": 58,
        "species": "growlithe",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 0.7,
        "weight": 19,
        "base_exp_yield": 70,
        "growth": GROWTH.SLOW,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ARCANINE: {
        "id": 58,
        "nat_dex_id": 59,
        "species": "arcanine",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 110,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 95
        },
        "happiness": 0,
        "height": 1.9,
        "weight": 155,
        "base_exp_yield": 194,
        "growth": GROWTH.SLOW,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    POLIWAG: {
        "id": 59,
        "nat_dex_id": 60,
        "species": "poliwag",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 40,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 12.4,
        "base_exp_yield": 60,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    POLIWHIRL: {
        "id": 60,
        "nat_dex_id": 61,
        "species": "poliwhirl",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 1,
        "weight": 20,
        "base_exp_yield": 135,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    POLIWRATH: {
        "id": 61,
        "nat_dex_id": 62,
        "species": "poliwrath",
        "types": [
            TYPES.WATER,
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 54,
        "base_exp_yield": 230,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ABRA: {
        "id": 62,
        "nat_dex_id": 63,
        "species": "abra",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 25,
            [STATS.ATTACK]: 20,
            [STATS.DEFENSE]: 15,
            [STATS.SPECIAL_ATTACK]: 105,
            [STATS.SPECIAL_DEFENSE]: 105,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 0.9,
        "weight": 19.5,
        "base_exp_yield": 62,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 200,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KADABRA: {
        "id": 63,
        "nat_dex_id": 64,
        "species": "kadabra",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 35,
            [STATS.DEFENSE]: 30,
            [STATS.SPECIAL_ATTACK]: 120,
            [STATS.SPECIAL_DEFENSE]: 120,
            [STATS.SPEED]: 105
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 56.5,
        "base_exp_yield": 140,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 100,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ALAKAZAM: {
        "id": 64,
        "nat_dex_id": 65,
        "species": "alakazam",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 135,
            [STATS.SPECIAL_DEFENSE]: 135,
            [STATS.SPEED]: 120
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 48,
        "base_exp_yield": 225,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 50,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MACHOP: {
        "id": 65,
        "nat_dex_id": 66,
        "species": "machop",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 70,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 35,
            [STATS.SPECIAL_DEFENSE]: 35,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 19.5,
        "base_exp_yield": 61,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 180,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MACHOKE: {
        "id": 66,
        "nat_dex_id": 67,
        "species": "machoke",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 100,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 70.5,
        "base_exp_yield": 142,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MACHAMP: {
        "id": 67,
        "nat_dex_id": 68,
        "species": "machamp",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 130,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 130,
        "base_exp_yield": 227,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    BELLSPROUT: {
        "id": 68,
        "nat_dex_id": 69,
        "species": "bellsprout",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 75,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 0.7,
        "weight": 4,
        "base_exp_yield": 60,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    WEEPINBELL: {
        "id": 69,
        "nat_dex_id": 70,
        "species": "weepinbell",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 90,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 1,
        "weight": 6.4,
        "base_exp_yield": 137,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VICTREEBEL: {
        "id": 70,
        "nat_dex_id": 71,
        "species": "victreebel",
        "types": [
            TYPES.GRASS,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 105,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 1.7,
        "weight": 15.5,
        "base_exp_yield": 221,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    TENTACOOL: {
        "id": 71,
        "nat_dex_id": 72,
        "species": "tentacool",
        "types": [
            TYPES.WATER,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 40,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 0.9,
        "weight": 45.5,
        "base_exp_yield": 67,
        "growth": GROWTH.SLOW,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    TENTACRUEL: {
        "id": 72,
        "nat_dex_id": 73,
        "species": "tentacruel",
        "types": [
            TYPES.WATER,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 120,
            [STATS.SPECIAL_DEFENSE]: 120,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 55,
        "base_exp_yield": 180,
        "growth": GROWTH.SLOW,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GEODUDE: {
        "id": 73,
        "nat_dex_id": 74,
        "species": "geodude",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 30,
            [STATS.SPECIAL_DEFENSE]: 30,
            [STATS.SPEED]: 20
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 20,
        "base_exp_yield": 60,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GRAVELER: {
        "id": 74,
        "nat_dex_id": 75,
        "species": "graveler",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 95,
            [STATS.DEFENSE]: 115,
            [STATS.SPECIAL_ATTACK]: 45,
            [STATS.SPECIAL_DEFENSE]: 45,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 1,
        "weight": 105,
        "base_exp_yield": 137,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GOLEM: {
        "id": 75,
        "nat_dex_id": 76,
        "species": "golem",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 110,
            [STATS.DEFENSE]: 130,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 1.4,
        "weight": 300,
        "base_exp_yield": 223,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PONYTA: {
        "id": 76,
        "nat_dex_id": 77,
        "species": "ponyta",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 1,
        "weight": 30,
        "base_exp_yield": 82,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    RAPIDASH: {
        "id": 77,
        "nat_dex_id": 78,
        "species": "rapidash",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 100,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 105
        },
        "happiness": 0,
        "height": 1.7,
        "weight": 95,
        "base_exp_yield": 175,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SLOWPOKE: {
        "id": 78,
        "nat_dex_id": 79,
        "species": "slowpoke",
        "types": [
            TYPES.WATER,
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 15
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 36,
        "base_exp_yield": 63,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SLOWBRO: {
        "id": 79,
        "nat_dex_id": 80,
        "species": "slowbro",
        "types": [
            TYPES.WATER,
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 95,
            [STATS.ATTACK]: 75,
            [STATS.DEFENSE]: 110,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 30
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 78.5,
        "base_exp_yield": 172,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MAGNEMITE: {
        "id": 80,
        "nat_dex_id": 81,
        "species": "magnemite",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 25,
            [STATS.ATTACK]: 35,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 95,
            [STATS.SPECIAL_DEFENSE]: 95,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 6,
        "base_exp_yield": 65,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MAGNETON: {
        "id": 81,
        "nat_dex_id": 82,
        "species": "magneton",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 60,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 120,
            [STATS.SPECIAL_DEFENSE]: 120,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 1,
        "weight": 60,
        "base_exp_yield": 163,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    FARFETCHD: {
        "id": 82,
        "nat_dex_id": 83,
        "species": "farfetchd",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 52,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 58,
            [STATS.SPECIAL_DEFENSE]: 58,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 15,
        "base_exp_yield": 132,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DODUO: {
        "id": 83,
        "nat_dex_id": 84,
        "species": "doduo",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 35,
            [STATS.SPECIAL_DEFENSE]: 35,
            [STATS.SPEED]: 75
        },
        "happiness": 0,
        "height": 1.4,
        "weight": 39.2,
        "base_exp_yield": 62,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DODRIO: {
        "id": 84,
        "nat_dex_id": 85,
        "species": "dodrio",
        "types": [
            TYPES.NORMAL,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 110,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 1.8,
        "weight": 85.2,
        "base_exp_yield": 165,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SEEL: {
        "id": 85,
        "nat_dex_id": 86,
        "species": "seel",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 90,
        "base_exp_yield": 65,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DEWGONG: {
        "id": 86,
        "nat_dex_id": 87,
        "species": "dewgong",
        "types": [
            TYPES.WATER,
            TYPES.ICE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 70,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 95,
            [STATS.SPECIAL_DEFENSE]: 95,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 1.7,
        "weight": 120,
        "base_exp_yield": 166,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GRIMER: {
        "id": 87,
        "nat_dex_id": 88,
        "species": "grimer",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 25
        },
        "happiness": 0,
        "height": 0.9,
        "weight": 30,
        "base_exp_yield": 65,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MUK: {
        "id": 88,
        "nat_dex_id": 89,
        "species": "muk",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 105,
            [STATS.ATTACK]: 105,
            [STATS.DEFENSE]: 75,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 30,
        "base_exp_yield": 175,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SHELLDER: {
        "id": 89,
        "nat_dex_id": 90,
        "species": "shellder",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 45,
            [STATS.SPECIAL_DEFENSE]: 45,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 4,
        "base_exp_yield": 61,
        "growth": GROWTH.SLOW,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CLOYSTER: {
        "id": 90,
        "nat_dex_id": 91,
        "species": "cloyster",
        "types": [
            TYPES.WATER,
            TYPES.ICE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 95,
            [STATS.DEFENSE]: 180,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 132.5,
        "base_exp_yield": 184,
        "growth": GROWTH.SLOW,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GASTLY: {
        "id": 91,
        "nat_dex_id": 92,
        "species": "gastly",
        "types": [
            TYPES.GHOST,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 35,
            [STATS.DEFENSE]: 30,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 0.1,
        "base_exp_yield": 62,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    HAUNTER: {
        "id": 92,
        "nat_dex_id": 93,
        "species": "haunter",
        "types": [
            TYPES.GHOST,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 45,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 115,
            [STATS.SPECIAL_DEFENSE]: 115,
            [STATS.SPEED]: 95
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 0.1,
        "base_exp_yield": 142,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GENGAR: {
        "id": 93,
        "nat_dex_id": 94,
        "species": "gengar",
        "types": [
            TYPES.GHOST,
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 130,
            [STATS.SPECIAL_DEFENSE]: 130,
            [STATS.SPEED]: 110
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 40.5,
        "base_exp_yield": 225,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ONIX: {
        "id": 94,
        "nat_dex_id": 95,
        "species": "onix",
        "types": [
            TYPES.ROCK,
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 160,
            [STATS.SPECIAL_ATTACK]: 30,
            [STATS.SPECIAL_DEFENSE]: 30,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 8.8,
        "weight": 210,
        "base_exp_yield": 77,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DROWZEE: {
        "id": 95,
        "nat_dex_id": 96,
        "species": "drowzee",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 48,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 90,
            [STATS.SPECIAL_DEFENSE]: 90,
            [STATS.SPEED]: 42
        },
        "happiness": 0,
        "height": 1,
        "weight": 32.4,
        "base_exp_yield": 66,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    HYPNO: {
        "id": 96,
        "nat_dex_id": 97,
        "species": "hypno",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 85,
            [STATS.ATTACK]: 73,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 115,
            [STATS.SPECIAL_DEFENSE]: 115,
            [STATS.SPEED]: 67
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 75.6,
        "base_exp_yield": 169,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KRABBY: {
        "id": 97,
        "nat_dex_id": 98,
        "species": "krabby",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 105,
            [STATS.DEFENSE]: 90,
            [STATS.SPECIAL_ATTACK]: 25,
            [STATS.SPECIAL_DEFENSE]: 25,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 6.5,
        "base_exp_yield": 65,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 225,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KINGLER: {
        "id": 98,
        "nat_dex_id": 99,
        "species": "kingler",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 130,
            [STATS.DEFENSE]: 115,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 75
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 60,
        "base_exp_yield": 166,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VOLTORB: {
        "id": 99,
        "nat_dex_id": 100,
        "species": "voltorb",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 30,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 10.4,
        "base_exp_yield": 66,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ELECTRODE: {
        "id": 100,
        "nat_dex_id": 101,
        "species": "electrode",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 140
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 66.6,
        "base_exp_yield": 172,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    EXEGGCUTE: {
        "id": 101,
        "nat_dex_id": 102,
        "species": "exeggcute",
        "types": [
            TYPES.GRASS,
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 40,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 2.5,
        "base_exp_yield": 65,
        "growth": GROWTH.SLOW,
        "capture_rate": 90,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    EXEGGUTOR: {
        "id": 102,
        "nat_dex_id": 103,
        "species": "exeggutor",
        "types": [
            TYPES.GRASS,
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 95,
            [STATS.ATTACK]: 95,
            [STATS.DEFENSE]: 85,
            [STATS.SPECIAL_ATTACK]: 125,
            [STATS.SPECIAL_DEFENSE]: 125,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 2,
        "weight": 120,
        "base_exp_yield": 186,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CUBONE: {
        "id": 103,
        "nat_dex_id": 104,
        "species": "cubone",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 6.5,
        "base_exp_yield": 64,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MAROWAK: {
        "id": 104,
        "nat_dex_id": 105,
        "species": "marowak",
        "types": [
            TYPES.GROUND
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 110,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 45
        },
        "happiness": 0,
        "height": 1,
        "weight": 45,
        "base_exp_yield": 149,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    HITMONLEE: {
        "id": 105,
        "nat_dex_id": 106,
        "species": "hitmonlee",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 120,
            [STATS.DEFENSE]: 53,
            [STATS.SPECIAL_ATTACK]: 35,
            [STATS.SPECIAL_DEFENSE]: 35,
            [STATS.SPEED]: 87
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 49.8,
        "base_exp_yield": 159,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    HITMONCHAN: {
        "id": 106,
        "nat_dex_id": 107,
        "species": "hitmonchan",
        "types": [
            TYPES.FIGHTING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 50,
            [STATS.ATTACK]: 105,
            [STATS.DEFENSE]: 79,
            [STATS.SPECIAL_ATTACK]: 35,
            [STATS.SPECIAL_DEFENSE]: 35,
            [STATS.SPEED]: 76
        },
        "happiness": 0,
        "height": 1.4,
        "weight": 50.2,
        "base_exp_yield": 159,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    LICKITUNG: {
        "id": 107,
        "nat_dex_id": 108,
        "species": "lickitung",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 55,
            [STATS.DEFENSE]: 75,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 30
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 65.5,
        "base_exp_yield": 77,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KOFFING: {
        "id": 108,
        "nat_dex_id": 109,
        "species": "koffing",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 1,
        "base_exp_yield": 68,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 190,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    WEEZING: {
        "id": 109,
        "nat_dex_id": 110,
        "species": "weezing",
        "types": [
            TYPES.POISON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 90,
            [STATS.DEFENSE]: 120,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 9.5,
        "base_exp_yield": 172,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    RHYHORN: {
        "id": 110,
        "nat_dex_id": 111,
        "species": "rhyhorn",
        "types": [
            TYPES.GROUND,
            TYPES.ROCK
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 30,
            [STATS.SPECIAL_DEFENSE]: 30,
            [STATS.SPEED]: 25
        },
        "happiness": 0,
        "height": 1,
        "weight": 115,
        "base_exp_yield": 69,
        "growth": GROWTH.SLOW,
        "capture_rate": 120,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    RHYDON: {
        "id": 111,
        "nat_dex_id": 112,
        "species": "rhydon",
        "types": [
            TYPES.GROUND,
            TYPES.ROCK
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 105,
            [STATS.ATTACK]: 130,
            [STATS.DEFENSE]: 120,
            [STATS.SPECIAL_ATTACK]: 45,
            [STATS.SPECIAL_DEFENSE]: 45,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 1.9,
        "weight": 120,
        "base_exp_yield": 170,
        "growth": GROWTH.SLOW,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    CHANSEY: {
        "id": 112,
        "nat_dex_id": 113,
        "species": "chansey",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 250,
            [STATS.ATTACK]: 5,
            [STATS.DEFENSE]: 5,
            [STATS.SPECIAL_ATTACK]: 105,
            [STATS.SPECIAL_DEFENSE]: 105,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 34.6,
        "base_exp_yield": 395,
        "growth": GROWTH.FAST,
        "capture_rate": 30,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    TANGELA: {
        "id": 113,
        "nat_dex_id": 114,
        "species": "tangela",
        "types": [
            TYPES.GRASS
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 55,
            [STATS.DEFENSE]: 115,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 1,
        "weight": 35,
        "base_exp_yield": 87,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KANGASKHAN: {
        "id": 114,
        "nat_dex_id": 115,
        "species": "kangaskhan",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 105,
            [STATS.ATTACK]: 95,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 40,
            [STATS.SPECIAL_DEFENSE]: 40,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 2.2,
        "weight": 80,
        "base_exp_yield": 172,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    HORSEA: {
        "id": 115,
        "nat_dex_id": 116,
        "species": "horsea",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 40,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 8,
        "base_exp_yield": 59,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 225,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SEADRA: {
        "id": 116,
        "nat_dex_id": 117,
        "species": "seadra",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 95,
            [STATS.SPECIAL_DEFENSE]: 95,
            [STATS.SPEED]: 85
        },
        "happiness": 0,
        "height": 1.2,
        "weight": 25,
        "base_exp_yield": 154,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 75,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GOLDEEN: {
        "id": 117,
        "nat_dex_id": 118,
        "species": "goldeen",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 45,
            [STATS.ATTACK]: 67,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 63
        },
        "happiness": 0,
        "height": 0.6,
        "weight": 15,
        "base_exp_yield": 64,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 225,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SEAKING: {
        "id": 118,
        "nat_dex_id": 119,
        "species": "seaking",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 92,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 80,
            [STATS.SPECIAL_DEFENSE]: 80,
            [STATS.SPEED]: 68
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 39,
        "base_exp_yield": 158,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    STARYU: {
        "id": 119,
        "nat_dex_id": 120,
        "species": "staryu",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 85
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 34.5,
        "base_exp_yield": 68,
        "growth": GROWTH.SLOW,
        "capture_rate": 225,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    STARMIE: {
        "id": 120,
        "nat_dex_id": 121,
        "species": "starmie",
        "types": [
            TYPES.WATER,
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 75,
            [STATS.DEFENSE]: 85,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 115
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 80,
        "base_exp_yield": 182,
        "growth": GROWTH.SLOW,
        "capture_rate": 60,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MRMIME: {
        "id": 121,
        "nat_dex_id": 122,
        "species": "mr. mime",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 40,
            [STATS.ATTACK]: 45,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 54.5,
        "base_exp_yield": 161,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SCYTHER: {
        "id": 122,
        "nat_dex_id": 123,
        "species": "scyther",
        "types": [
            TYPES.BUG,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 70,
            [STATS.ATTACK]: 110,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 105
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 56,
        "base_exp_yield": 100,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    JYNX: {
        "id": 123,
        "nat_dex_id": 124,
        "species": "jynx",
        "types": [
            TYPES.ICE,
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 50,
            [STATS.DEFENSE]: 35,
            [STATS.SPECIAL_ATTACK]: 95,
            [STATS.SPECIAL_DEFENSE]: 95,
            [STATS.SPEED]: 95
        },
        "happiness": 0,
        "height": 1.4,
        "weight": 40.6,
        "base_exp_yield": 159,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ELECTABUZZ: {
        "id": 124,
        "nat_dex_id": 125,
        "species": "electabuzz",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 83,
            [STATS.DEFENSE]: 57,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 105
        },
        "happiness": 0,
        "height": 1.1,
        "weight": 30,
        "base_exp_yield": 172,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MAGMAR: {
        "id": 125,
        "nat_dex_id": 126,
        "species": "magmar",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 95,
            [STATS.DEFENSE]: 57,
            [STATS.SPECIAL_ATTACK]: 85,
            [STATS.SPECIAL_DEFENSE]: 85,
            [STATS.SPEED]: 93
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 44.5,
        "base_exp_yield": 173,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PINSIR: {
        "id": 126,
        "nat_dex_id": 127,
        "species": "pinsir",
        "types": [
            TYPES.BUG
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 125,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 55,
            [STATS.SPECIAL_DEFENSE]: 55,
            [STATS.SPEED]: 85
        },
        "happiness": 0,
        "height": 1.5,
        "weight": 55,
        "base_exp_yield": 175,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    TAUROS: {
        "id": 127,
        "nat_dex_id": 128,
        "species": "tauros",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 75,
            [STATS.ATTACK]: 100,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 110
        },
        "happiness": 0,
        "height": 1.4,
        "weight": 88.4,
        "base_exp_yield": 172,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MAGIKARP: {
        "id": 128,
        "nat_dex_id": 129,
        "species": "magikarp",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 20,
            [STATS.ATTACK]: 10,
            [STATS.DEFENSE]: 55,
            [STATS.SPECIAL_ATTACK]: 20,
            [STATS.SPECIAL_DEFENSE]: 20,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 0.9,
        "weight": 10,
        "base_exp_yield": 40,
        "growth": GROWTH.SLOW,
        "capture_rate": 255,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    GYARADOS: {
        "id": 129,
        "nat_dex_id": 130,
        "species": "gyarados",
        "types": [
            TYPES.WATER,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 95,
            [STATS.ATTACK]: 125,
            [STATS.DEFENSE]: 79,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 81
        },
        "happiness": 0,
        "height": 6.5,
        "weight": 235,
        "base_exp_yield": 189,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    LAPRAS: {
        "id": 130,
        "nat_dex_id": 131,
        "species": "lapras",
        "types": [
            TYPES.WATER,
            TYPES.ICE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 130,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 80,
            [STATS.SPECIAL_ATTACK]: 95,
            [STATS.SPECIAL_DEFENSE]: 95,
            [STATS.SPEED]: 60
        },
        "happiness": 0,
        "height": 2.5,
        "weight": 220,
        "base_exp_yield": 187,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DITTO: {
        "id": 131,
        "nat_dex_id": 132,
        "species": "ditto",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 48,
            [STATS.ATTACK]: 48,
            [STATS.DEFENSE]: 48,
            [STATS.SPECIAL_ATTACK]: 48,
            [STATS.SPECIAL_DEFENSE]: 48,
            [STATS.SPEED]: 48
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 4,
        "base_exp_yield": 101,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 35,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    EEVEE: {
        "id": 132,
        "nat_dex_id": 133,
        "species": "eevee",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 55,
            [STATS.ATTACK]: 55,
            [STATS.DEFENSE]: 50,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 0.3,
        "weight": 6.5,
        "base_exp_yield": 65,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    VAPOREON: {
        "id": 133,
        "nat_dex_id": 134,
        "species": "vaporeon",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 130,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 110,
            [STATS.SPECIAL_DEFENSE]: 110,
            [STATS.SPEED]: 65
        },
        "happiness": 0,
        "height": 1,
        "weight": 29,
        "base_exp_yield": 184,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    JOLTEON: {
        "id": 134,
        "nat_dex_id": 135,
        "species": "jolteon",
        "types": [
            TYPES.ELECTRIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 65,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 110,
            [STATS.SPECIAL_DEFENSE]: 110,
            [STATS.SPEED]: 130
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 24.5,
        "base_exp_yield": 184,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    FLAREON: {
        "id": 135,
        "nat_dex_id": 136,
        "species": "flareon",
        "types": [
            TYPES.FIRE
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 130,
            [STATS.DEFENSE]: 60,
            [STATS.SPECIAL_ATTACK]: 110,
            [STATS.SPECIAL_DEFENSE]: 110,
            [STATS.SPEED]: 65
        },
        "happiness": 0,
        "height": 0.9,
        "weight": 25,
        "base_exp_yield": 184,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    PORYGON: {
        "id": 136,
        "nat_dex_id": 137,
        "species": "porygon",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 65,
            [STATS.ATTACK]: 60,
            [STATS.DEFENSE]: 70,
            [STATS.SPECIAL_ATTACK]: 75,
            [STATS.SPECIAL_DEFENSE]: 75,
            [STATS.SPEED]: 40
        },
        "happiness": 0,
        "height": 0.8,
        "weight": 36.5,
        "base_exp_yield": 79,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    OMANYTE: {
        "id": 137,
        "nat_dex_id": 138,
        "species": "omanyte",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 35,
            [STATS.ATTACK]: 40,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 90,
            [STATS.SPECIAL_DEFENSE]: 90,
            [STATS.SPEED]: 35
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 7.5,
        "base_exp_yield": 71,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    OMASTAR: {
        "id": 138,
        "nat_dex_id": 139,
        "species": "omastar",
        "types": [
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 70,
            [STATS.ATTACK]: 60,
            [STATS.DEFENSE]: 125,
            [STATS.SPECIAL_ATTACK]: 115,
            [STATS.SPECIAL_DEFENSE]: 115,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 1,
        "weight": 35,
        "base_exp_yield": 173,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KABUTO: {
        "id": 139,
        "nat_dex_id": 140,
        "species": "kabuto",
        "types": [
            TYPES.ROCK,
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 30,
            [STATS.ATTACK]: 80,
            [STATS.DEFENSE]: 90,
            [STATS.SPECIAL_ATTACK]: 45,
            [STATS.SPECIAL_DEFENSE]: 45,
            [STATS.SPEED]: 55
        },
        "happiness": 0,
        "height": 0.5,
        "weight": 11.5,
        "base_exp_yield": 71,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    KABUTOPS: {
        "id": 140,
        "nat_dex_id": 141,
        "species": "kabutops",
        "types": [
            TYPES.ROCK,
            TYPES.WATER
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 60,
            [STATS.ATTACK]: 115,
            [STATS.DEFENSE]: 105,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 1.3,
        "weight": 40.5,
        "base_exp_yield": 173,
        "growth": GROWTH.MEDIUM_FAST,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    AERODACTYL: {
        "id": 141,
        "nat_dex_id": 142,
        "species": "aerodactyl",
        "types": [
            TYPES.ROCK,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 80,
            [STATS.ATTACK]: 105,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 60,
            [STATS.SPECIAL_DEFENSE]: 60,
            [STATS.SPEED]: 130
        },
        "happiness": 0,
        "height": 1.8,
        "weight": 59,
        "base_exp_yield": 180,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    SNORLAX: {
        "id": 142,
        "nat_dex_id": 143,
        "species": "snorlax",
        "types": [
            TYPES.NORMAL
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 160,
            [STATS.ATTACK]: 110,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 65,
            [STATS.SPECIAL_DEFENSE]: 65,
            [STATS.SPEED]: 30
        },
        "happiness": 0,
        "height": 2.1,
        "weight": 460,
        "base_exp_yield": 189,
        "growth": GROWTH.SLOW,
        "capture_rate": 25,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ARTICUNO: {
        "id": 143,
        "nat_dex_id": 144,
        "species": "articuno",
        "types": [
            TYPES.ICE,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 85,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 125,
            [STATS.SPECIAL_DEFENSE]: 125,
            [STATS.SPEED]: 85
        },
        "happiness": 0,
        "height": 1.7,
        "weight": 55.4,
        "base_exp_yield": 261,
        "growth": GROWTH.SLOW,
        "capture_rate": 3,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    ZAPDOS: {
        "id": 144,
        "nat_dex_id": 145,
        "species": "zapdos",
        "types": [
            TYPES.ELECTRIC,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 90,
            [STATS.DEFENSE]: 85,
            [STATS.SPECIAL_ATTACK]: 125,
            [STATS.SPECIAL_DEFENSE]: 125,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 1.6,
        "weight": 52.6,
        "base_exp_yield": 261,
        "growth": GROWTH.SLOW,
        "capture_rate": 3,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MOLTRES: {
        "id": 145,
        "nat_dex_id": 146,
        "species": "moltres",
        "types": [
            TYPES.FIRE,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 90,
            [STATS.ATTACK]: 100,
            [STATS.DEFENSE]: 90,
            [STATS.SPECIAL_ATTACK]: 125,
            [STATS.SPECIAL_DEFENSE]: 125,
            [STATS.SPEED]: 90
        },
        "happiness": 0,
        "height": 2,
        "weight": 60,
        "base_exp_yield": 261,
        "growth": GROWTH.SLOW,
        "capture_rate": 3,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DRATINI: {
        "id": 146,
        "nat_dex_id": 147,
        "species": "dratini",
        "types": [
            TYPES.DRAGON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 41,
            [STATS.ATTACK]: 64,
            [STATS.DEFENSE]: 45,
            [STATS.SPECIAL_ATTACK]: 50,
            [STATS.SPECIAL_DEFENSE]: 50,
            [STATS.SPEED]: 50
        },
        "happiness": 0,
        "height": 1.8,
        "weight": 3.3,
        "base_exp_yield": 60,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DRAGONAIR: {
        "id": 147,
        "nat_dex_id": 148,
        "species": "dragonair",
        "types": [
            TYPES.DRAGON
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 61,
            [STATS.ATTACK]: 84,
            [STATS.DEFENSE]: 65,
            [STATS.SPECIAL_ATTACK]: 70,
            [STATS.SPECIAL_DEFENSE]: 70,
            [STATS.SPEED]: 70
        },
        "happiness": 0,
        "height": 4,
        "weight": 16.5,
        "base_exp_yield": 147,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    DRAGONITE: {
        "id": 148,
        "nat_dex_id": 149,
        "species": "dragonite",
        "types": [
            TYPES.DRAGON,
            TYPES.FLYING
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 91,
            [STATS.ATTACK]: 134,
            [STATS.DEFENSE]: 95,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 80
        },
        "happiness": 0,
        "height": 2.2,
        "weight": 210,
        "base_exp_yield": 270,
        "growth": GROWTH.SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MEWTWO: {
        "id": 149,
        "nat_dex_id": 150,
        "species": "mewtwo",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 106,
            [STATS.ATTACK]: 110,
            [STATS.DEFENSE]: 90,
            [STATS.SPECIAL_ATTACK]: 154,
            [STATS.SPECIAL_DEFENSE]: 154,
            [STATS.SPEED]: 130
        },
        "happiness": 0,
        "height": 2,
        "weight": 122,
        "base_exp_yield": 306,
        "growth": GROWTH.SLOW,
        "capture_rate": 3,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    },
    MEW: {
        "id": 150,
        "nat_dex_id": 151,
        "species": "mew",
        "types": [
            TYPES.PSYCHIC
        ],
        "gender": [],
        "abilities": [],
        "form": "",
        "base_stats": {
            [STATS.HP]: 100,
            [STATS.ATTACK]: 100,
            [STATS.DEFENSE]: 100,
            [STATS.SPECIAL_ATTACK]: 100,
            [STATS.SPECIAL_DEFENSE]: 100,
            [STATS.SPEED]: 100
        },
        "happiness": 0,
        "height": 0.4,
        "weight": 4,
        "base_exp_yield": 270,
        "growth": GROWTH.MEDIUM_SLOW,
        "capture_rate": 45,
        "base_egg_steps": 0,
        "egg_groups": [],
        "effort_yield": []
    }
}