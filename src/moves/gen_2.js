import * as definitions from './definitions';
import * as types from '../types/definitions';

export const MOVES = [
  {
    "id": 1,
    "name": "pound",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 2,
    "name": "karate chop",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 50,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 3,
    "name": "double slap",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 15,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 4,
    "name": "comet punch",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 18,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 5,
    "name": "mega punch",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 80,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 6,
    "name": "pay day",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 7,
    "name": "fire punch",
    "type": types.FIRE,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 75,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 8,
    "name": "ice punch",
    "type": types.ICE,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 75,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 9,
    "name": "thunder punch",
    "type": types.ELECTRIC,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 75,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 10,
    "name": "scratch",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 11,
    "name": "vise grip",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 55,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 12,
    "name": "guillotine",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 30,
    "gen": 1
  },
  {
    "id": 13,
    "name": "razor wind",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 14,
    "name": "swords dance",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 15,
    "name": "cut",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 50,
    "accuracy": 95,
    "gen": 1
  },
  {
    "id": 16,
    "name": "gust",
    "type": types.FLYING,
    "category": definitions.SPECIAL,
    "pp": 35,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 17,
    "name": "wing attack",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 60,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 18,
    "name": "whirlwind",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 19,
    "name": "fly",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 90,
    "accuracy": 95,
    "gen": 1
  },
  {
    "id": 20,
    "name": "bind",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 15,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 21,
    "name": "slam",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 80,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 22,
    "name": "vine whip",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 45,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 23,
    "name": "stomp",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 24,
    "name": "double kick",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 30,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 25,
    "name": "mega kick",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 120,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 26,
    "name": "jump kick",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 100,
    "accuracy": 95,
    "gen": 1
  },
  {
    "id": 27,
    "name": "rolling kick",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 60,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 28,
    "name": "sand attack",
    "type": types.GROUND,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 29,
    "name": "headbutt",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 70,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 30,
    "name": "horn attack",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 65,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 31,
    "name": "fury attack",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 15,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 32,
    "name": "horn drill",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 30,
    "gen": 1
  },
  {
    "id": 33,
    "name": "tackle",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 34,
    "name": "body slam",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 85,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 35,
    "name": "wrap",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 15,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 36,
    "name": "take down",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 90,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 37,
    "name": "thrash",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 120,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 38,
    "name": "double-edge",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 120,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 39,
    "name": "tail whip",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 40,
    "name": "poison sting",
    "type": types.POISON,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 15,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 41,
    "name": "twineedle",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 25,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 42,
    "name": "pin missile",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 25,
    "accuracy": 95,
    "gen": 1
  },
  {
    "id": 43,
    "name": "leer",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 44,
    "name": "bite",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 60,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 45,
    "name": "growl",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 46,
    "name": "roar",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 47,
    "name": "sing",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 55,
    "gen": 1
  },
  {
    "id": 48,
    "name": "supersonic",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 55,
    "gen": 1
  },
  {
    "id": 49,
    "name": "sonic boom",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 0,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 50,
    "name": "disable",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 51,
    "name": "acid",
    "type": types.POISON,
    "category": definitions.SPECIAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 52,
    "name": "ember",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 25,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 53,
    "name": "flamethrower",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 90,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 54,
    "name": "mist",
    "type": types.ICE,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 55,
    "name": "water gun",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 25,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 56,
    "name": "hydro pump",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 110,
    "accuracy": 80,
    "gen": 1
  },
  {
    "id": 57,
    "name": "surf",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 90,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 58,
    "name": "ice beam",
    "type": types.ICE,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 59,
    "name": "blizzard",
    "type": types.ICE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 110,
    "accuracy": 70,
    "gen": 1
  },
  {
    "id": 60,
    "name": "psybeam",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 61,
    "name": "bubble beam",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 62,
    "name": "aurora beam",
    "type": types.ICE,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 63,
    "name": "hyper beam",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 64,
    "name": "peck",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 35,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 65,
    "name": "drill peck",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 66,
    "name": "submission",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 80,
    "accuracy": 80,
    "gen": 1
  },
  {
    "id": 67,
    "name": "low kick",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 68,
    "name": "counter",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 69,
    "name": "seismic toss",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 70,
    "name": "strength",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 71,
    "name": "absorb",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 25,
    "power": 20,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 72,
    "name": "mega drain",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 73,
    "name": "leech seed",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 74,
    "name": "growth",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 75,
    "name": "razor leaf",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 55,
    "accuracy": 95,
    "gen": 1
  },
  {
    "id": 76,
    "name": "solar beam",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 120,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 77,
    "name": "poison powder",
    "type": types.POISON,
    "category": definitions.STATUS,
    "pp": 35,
    "power": 0,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 78,
    "name": "stun spore",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 79,
    "name": "sleep powder",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 80,
    "name": "petal dance",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 120,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 81,
    "name": "string shot",
    "type": types.BUG,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 95,
    "gen": 1
  },
  {
    "id": 82,
    "name": "dragon rage",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 83,
    "name": "fire spin",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 35,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 84,
    "name": "thunder shock",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 85,
    "name": "thunderbolt",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 90,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 86,
    "name": "thunder wave",
    "type": types.ELECTRIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 87,
    "name": "thunder",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 110,
    "accuracy": 70,
    "gen": 1
  },
  {
    "id": 88,
    "name": "rock throw",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 50,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 89,
    "name": "earthquake",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 100,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 90,
    "name": "fissure",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 30,
    "gen": 1
  },
  {
    "id": 91,
    "name": "dig",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 92,
    "name": "toxic",
    "type": types.POISON,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 93,
    "name": "confusion",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 25,
    "power": 50,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 94,
    "name": "psychic",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 95,
    "name": "hypnosis",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 60,
    "gen": 1
  },
  {
    "id": 96,
    "name": "meditate",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 97,
    "name": "agility",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 98,
    "name": "quick attack",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 99,
    "name": "rage",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 20,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 100,
    "name": "teleport",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 101,
    "name": "night shade",
    "type": types.GHOST,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 102,
    "name": "mimic",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 103,
    "name": "screech",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 104,
    "name": "double team",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 105,
    "name": "recover",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 106,
    "name": "harden",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 107,
    "name": "minimize",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 108,
    "name": "smokescreen",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 109,
    "name": "confuse ray",
    "type": types.GHOST,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 110,
    "name": "withdraw",
    "type": types.WATER,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 111,
    "name": "defense curl",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 112,
    "name": "barrier",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 113,
    "name": "light screen",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 114,
    "name": "haze",
    "type": types.ICE,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 115,
    "name": "reflect",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 116,
    "name": "focus energy",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 117,
    "name": "bide",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 118,
    "name": "metronome",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 119,
    "name": "mirror move",
    "type": types.FLYING,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 120,
    "name": "self-destruct",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 200,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 121,
    "name": "egg bomb",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 100,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 122,
    "name": "lick",
    "type": types.GHOST,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 30,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 123,
    "name": "smog",
    "type": types.POISON,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 30,
    "accuracy": 70,
    "gen": 1
  },
  {
    "id": 124,
    "name": "sludge",
    "type": types.POISON,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 125,
    "name": "bone club",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 65,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 126,
    "name": "fire blast",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 110,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 127,
    "name": "waterfall",
    "type": types.WATER,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 128,
    "name": "clamp",
    "type": types.WATER,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 35,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 129,
    "name": "swift",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 130,
    "name": "skull bash",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 130,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 131,
    "name": "spike cannon",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 20,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 132,
    "name": "constrict",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 10,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 133,
    "name": "amnesia",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 134,
    "name": "kinesis",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 80,
    "gen": 1
  },
  {
    "id": 135,
    "name": "soft-boiled",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 136,
    "name": "high jump kick",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 130,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 137,
    "name": "glare",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 138,
    "name": "dream eater",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 100,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 139,
    "name": "poison gas",
    "type": types.POISON,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 140,
    "name": "barrage",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 15,
    "accuracy": 85,
    "gen": 1
  },
  {
    "id": 141,
    "name": "leech life",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 142,
    "name": "lovely kiss",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 75,
    "gen": 1
  },
  {
    "id": 143,
    "name": "sky attack",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 140,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 144,
    "name": "transform",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 145,
    "name": "bubble",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 146,
    "name": "dizzy punch",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 70,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 147,
    "name": "spore",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 148,
    "name": "flash",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 149,
    "name": "psywave",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 150,
    "name": "splash",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 151,
    "name": "acid armor",
    "type": types.POISON,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 152,
    "name": "crabhammer",
    "type": types.WATER,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 100,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 153,
    "name": "explosion",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 250,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 154,
    "name": "fury swipes",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 18,
    "accuracy": 80,
    "gen": 1
  },
  {
    "id": 155,
    "name": "bonemerang",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 50,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 156,
    "name": "rest",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 157,
    "name": "rock slide",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 75,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 158,
    "name": "hyper fang",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 159,
    "name": "sharpen",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 160,
    "name": "conversion",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 161,
    "name": "tri attack",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 80,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 162,
    "name": "super fang",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 0,
    "accuracy": 90,
    "gen": 1
  },
  {
    "id": 163,
    "name": "slash",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "gen": 1
  },
  {
    "id": 164,
    "name": "substitute",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 165,
    "name": "struggle",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 1,
    "power": 50,
    "accuracy": 0,
    "gen": 1
  },
  {
    "id": 166,
    "name": "sketch",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 1,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 167,
    "name": "triple kick",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 10,
    "accuracy": 90,
    "gen": 2
  },
  {
    "id": 168,
    "name": "thief",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 60,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 169,
    "name": "spider web",
    "type": types.BUG,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 170,
    "name": "mind reader",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 171,
    "name": "nightmare",
    "type": types.GHOST,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 172,
    "name": "flame wheel",
    "type": types.FIRE,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 60,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 173,
    "name": "snore",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 50,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 174,
    "name": "curse",
    "type": types.GHOST,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 175,
    "name": "flail",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 176,
    "name": "conversion 2",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 177,
    "name": "aeroblast",
    "type": types.FLYING,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 100,
    "accuracy": 95,
    "gen": 2
  },
  {
    "id": 178,
    "name": "cotton spore",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 179,
    "name": "reversal",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 180,
    "name": "spite",
    "type": types.GHOST,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 181,
    "name": "powder snow",
    "type": types.ICE,
    "category": definitions.SPECIAL,
    "pp": 25,
    "power": 40,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 182,
    "name": "protect",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 183,
    "name": "mach punch",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 184,
    "name": "scary face",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 185,
    "name": "feint attack",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 186,
    "name": "sweet kiss",
    "type": types.FAIRY,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 75,
    "gen": 2
  },
  {
    "id": 187,
    "name": "belly drum",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 188,
    "name": "sludge bomb",
    "type": types.POISON,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 189,
    "name": "mud-slap",
    "type": types.GROUND,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 20,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 190,
    "name": "octazooka",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 65,
    "accuracy": 85,
    "gen": 2
  },
  {
    "id": 191,
    "name": "spikes",
    "type": types.GROUND,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 192,
    "name": "zap cannon",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 120,
    "accuracy": 50,
    "gen": 2
  },
  {
    "id": 193,
    "name": "foresight",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 194,
    "name": "destiny bond",
    "type": types.GHOST,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 195,
    "name": "perish song",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 196,
    "name": "icy wind",
    "type": types.ICE,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 55,
    "accuracy": 95,
    "gen": 2
  },
  {
    "id": 197,
    "name": "detect",
    "type": types.FIGHTING,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 198,
    "name": "bone rush",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 25,
    "accuracy": 90,
    "gen": 2
  },
  {
    "id": 199,
    "name": "lock-on",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 200,
    "name": "outrage",
    "type": types.DRAGON,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 120,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 201,
    "name": "sandstorm",
    "type": types.ROCK,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 202,
    "name": "giga drain",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 75,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 203,
    "name": "endure",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 204,
    "name": "charm",
    "type": types.FAIRY,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 205,
    "name": "rollout",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 30,
    "accuracy": 90,
    "gen": 2
  },
  {
    "id": 206,
    "name": "false swipe",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 40,
    "power": 40,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 207,
    "name": "swagger",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 85,
    "gen": 2
  },
  {
    "id": 208,
    "name": "milk drink",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 209,
    "name": "spark",
    "type": types.ELECTRIC,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 210,
    "name": "fury cutter",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 40,
    "accuracy": 95,
    "gen": 2
  },
  {
    "id": 211,
    "name": "steel wing",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 70,
    "accuracy": 90,
    "gen": 2
  },
  {
    "id": 212,
    "name": "mean look",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 213,
    "name": "attract",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 214,
    "name": "sleep talk",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 215,
    "name": "heal bell",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 216,
    "name": "return",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 217,
    "name": "present",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 0,
    "accuracy": 90,
    "gen": 2
  },
  {
    "id": 218,
    "name": "frustration",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 219,
    "name": "safeguard",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 25,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 220,
    "name": "pain split",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 221,
    "name": "sacred fire",
    "type": types.FIRE,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 100,
    "accuracy": 95,
    "gen": 2
  },
  {
    "id": 222,
    "name": "magnitude",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 223,
    "name": "dynamic punch",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 100,
    "accuracy": 50,
    "gen": 2
  },
  {
    "id": 224,
    "name": "megahorn",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 120,
    "accuracy": 85,
    "gen": 2
  },
  {
    "id": 225,
    "name": "dragon breath",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 226,
    "name": "baton pass",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 227,
    "name": "encore",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 228,
    "name": "pursuit",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 229,
    "name": "rapid spin",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 40,
    "power": 50,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 230,
    "name": "sweet scent",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 231,
    "name": "iron tail",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 100,
    "accuracy": 75,
    "gen": 2
  },
  {
    "id": 232,
    "name": "metal claw",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 35,
    "power": 50,
    "accuracy": 95,
    "gen": 2
  },
  {
    "id": 233,
    "name": "vital throw",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 70,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 234,
    "name": "morning sun",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 235,
    "name": "synthesis",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 236,
    "name": "moonlight",
    "type": types.FAIRY,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 237,
    "name": "hidden power",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 60,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 238,
    "name": "cross chop",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 100,
    "accuracy": 80,
    "gen": 2
  },
  {
    "id": 239,
    "name": "twister",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 240,
    "name": "rain dance",
    "type": types.WATER,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 241,
    "name": "sunny day",
    "type": types.FIRE,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 242,
    "name": "crunch",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 243,
    "name": "mirror coat",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 244,
    "name": "psych up",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 2
  },
  {
    "id": 245,
    "name": "extreme speed",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 80,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 246,
    "name": "ancient power",
    "type": types.ROCK,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 60,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 247,
    "name": "shadow ball",
    "type": types.GHOST,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 248,
    "name": "future sight",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 120,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 249,
    "name": "rock smash",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 40,
    "accuracy": 100,
    "gen": 2
  },
  {
    "id": 250,
    "name": "whirlpool",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 35,
    "accuracy": 85,
    "gen": 2
  },
  {
    "id": 251,
    "name": "beat up",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 2
  }
]