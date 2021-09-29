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
  },
  {
    "id": 252,
    "name": "fake out",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 40,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 253,
    "name": "uproar",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 254,
    "name": "stockpile",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 255,
    "name": "spit up",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 256,
    "name": "swallow",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 257,
    "name": "heat wave",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 95,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 258,
    "name": "hail",
    "type": types.ICE,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 259,
    "name": "torment",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 260,
    "name": "flatter",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 261,
    "name": "will-o-wisp",
    "type": types.FIRE,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 85,
    "gen": 3
  },
  {
    "id": 262,
    "name": "memento",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 263,
    "name": "facade",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 264,
    "name": "focus punch",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 150,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 265,
    "name": "smelling salts",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 70,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 266,
    "name": "follow me",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 267,
    "name": "nature power",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 268,
    "name": "charge",
    "type": types.ELECTRIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 269,
    "name": "taunt",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 270,
    "name": "helping hand",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 271,
    "name": "trick",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 272,
    "name": "role play",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 273,
    "name": "wish",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 274,
    "name": "assist",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 275,
    "name": "ingrain",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 276,
    "name": "superpower",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 120,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 277,
    "name": "magic coat",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 278,
    "name": "recycle",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 279,
    "name": "revenge",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 60,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 280,
    "name": "brick break",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 75,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 281,
    "name": "yawn",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 282,
    "name": "knock off",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 283,
    "name": "endeavor",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 284,
    "name": "eruption",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 285,
    "name": "skill swap",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 286,
    "name": "imprison",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 287,
    "name": "refresh",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 288,
    "name": "grudge",
    "type": types.GHOST,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 289,
    "name": "snatch",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 290,
    "name": "secret power",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 291,
    "name": "dive",
    "type": types.WATER,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 80,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 292,
    "name": "arm thrust",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 15,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 293,
    "name": "camouflage",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 294,
    "name": "tail glow",
    "type": types.BUG,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 295,
    "name": "luster purge",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 70,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 296,
    "name": "mist ball",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 70,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 297,
    "name": "feather dance",
    "type": types.FLYING,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 298,
    "name": "teeter dance",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 299,
    "name": "blaze kick",
    "type": types.FIRE,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 85,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 300,
    "name": "mud sport",
    "type": types.GROUND,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 301,
    "name": "ice ball",
    "type": types.ICE,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 30,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 302,
    "name": "needle arm",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 60,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 303,
    "name": "slack off",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 304,
    "name": "hyper voice",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 305,
    "name": "poison fang",
    "type": types.POISON,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 50,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 306,
    "name": "crush claw",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 75,
    "accuracy": 95,
    "gen": 3
  },
  {
    "id": 307,
    "name": "blast burn",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 308,
    "name": "hydro cannon",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 309,
    "name": "meteor mash",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 90,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 310,
    "name": "astonish",
    "type": types.GHOST,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 30,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 311,
    "name": "weather ball",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 50,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 312,
    "name": "aromatherapy",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 313,
    "name": "fake tears",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 314,
    "name": "air cutter",
    "type": types.FLYING,
    "category": definitions.SPECIAL,
    "pp": 25,
    "power": 60,
    "accuracy": 95,
    "gen": 3
  },
  {
    "id": 315,
    "name": "overheat",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 130,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 316,
    "name": "odor sleuth",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 317,
    "name": "rock tomb",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 60,
    "accuracy": 95,
    "gen": 3
  },
  {
    "id": 318,
    "name": "silver wind",
    "type": types.BUG,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 60,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 319,
    "name": "metal sound",
    "type": types.STEEL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 85,
    "gen": 3
  },
  {
    "id": 320,
    "name": "grass whistle",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 55,
    "gen": 3
  },
  {
    "id": 321,
    "name": "tickle",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 322,
    "name": "cosmic power",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 323,
    "name": "water spout",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 324,
    "name": "signal beam",
    "type": types.BUG,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 75,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 325,
    "name": "shadow punch",
    "type": types.GHOST,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 326,
    "name": "extrasensory",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 327,
    "name": "sky uppercut",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 85,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 328,
    "name": "sand tomb",
    "type": types.GROUND,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 35,
    "accuracy": 85,
    "gen": 3
  },
  {
    "id": 329,
    "name": "sheer cold",
    "type": types.ICE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 0,
    "accuracy": 30,
    "gen": 3
  },
  {
    "id": 330,
    "name": "muddy water",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 85,
    "gen": 3
  },
  {
    "id": 331,
    "name": "bullet seed",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 25,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 332,
    "name": "aerial ace",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 333,
    "name": "icicle spear",
    "type": types.ICE,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 25,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 334,
    "name": "iron defense",
    "type": types.STEEL,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 335,
    "name": "block",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 336,
    "name": "howl",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 337,
    "name": "dragon claw",
    "type": types.DRAGON,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 338,
    "name": "frenzy plant",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 339,
    "name": "bulk up",
    "type": types.FIGHTING,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 340,
    "name": "bounce",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 85,
    "accuracy": 85,
    "gen": 3
  },
  {
    "id": 341,
    "name": "mud shot",
    "type": types.GROUND,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 55,
    "accuracy": 95,
    "gen": 3
  },
  {
    "id": 342,
    "name": "poison tail",
    "type": types.POISON,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 50,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 343,
    "name": "covet",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 25,
    "power": 60,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 344,
    "name": "volt tackle",
    "type": types.ELECTRIC,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 120,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 345,
    "name": "magical leaf",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 346,
    "name": "water sport",
    "type": types.WATER,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 347,
    "name": "calm mind",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 348,
    "name": "leaf blade",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 90,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 349,
    "name": "dragon dance",
    "type": types.DRAGON,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 350,
    "name": "rock blast",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 25,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 351,
    "name": "shock wave",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 3
  },
  {
    "id": 352,
    "name": "water pulse",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 353,
    "name": "doom desire",
    "type": types.STEEL,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 140,
    "accuracy": 100,
    "gen": 3
  },
  {
    "id": 354,
    "name": "psycho boost",
    "type": types.PSYCHIC,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 140,
    "accuracy": 90,
    "gen": 3
  },
  {
    "id": 355,
    "name": "roost",
    "type": types.FLYING,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 356,
    "name": "gravity",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 357,
    "name": "miracle eye",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 40,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 358,
    "name": "wake-up slap",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 359,
    "name": "hammer arm",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 100,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 360,
    "name": "gyro ball",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 361,
    "name": "healing wish",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 362,
    "name": "brine",
    "type": types.WATER,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 65,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 363,
    "name": "natural gift",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 364,
    "name": "feint",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 30,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 365,
    "name": "pluck",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 366,
    "name": "tailwind",
    "type": types.FLYING,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 367,
    "name": "acupressure",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 368,
    "name": "metal burst",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 369,
    "name": "u-turn",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 370,
    "name": "close combat",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 120,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 371,
    "name": "payback",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 50,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 372,
    "name": "assurance",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 60,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 373,
    "name": "embargo",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 374,
    "name": "fling",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 375,
    "name": "psycho shift",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 376,
    "name": "trump card",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 377,
    "name": "heal block",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 378,
    "name": "wring out",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 379,
    "name": "power trick",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 380,
    "name": "gastro acid",
    "type": types.POISON,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 381,
    "name": "lucky chant",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 30,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 382,
    "name": "me first",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 383,
    "name": "copycat",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 384,
    "name": "power swap",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 385,
    "name": "guard swap",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 386,
    "name": "punishment",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 387,
    "name": "last resort",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 140,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 388,
    "name": "worry seed",
    "type": types.GRASS,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 389,
    "name": "sucker punch",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 390,
    "name": "toxic spikes",
    "type": types.POISON,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 391,
    "name": "heart swap",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 392,
    "name": "aqua ring",
    "type": types.WATER,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 393,
    "name": "magnet rise",
    "type": types.ELECTRIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 394,
    "name": "flare blitz",
    "type": types.FIRE,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 120,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 395,
    "name": "force palm",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 60,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 396,
    "name": "aura sphere",
    "type": types.FIGHTING,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 80,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 397,
    "name": "rock polish",
    "type": types.ROCK,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 398,
    "name": "poison jab",
    "type": types.POISON,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 399,
    "name": "dark pulse",
    "type": types.DARK,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 400,
    "name": "night slash",
    "type": types.DARK,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 401,
    "name": "aqua tail",
    "type": types.WATER,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 90,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 402,
    "name": "seed bomb",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 403,
    "name": "air slash",
    "type": types.FLYING,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 75,
    "accuracy": 95,
    "gen": 4
  },
  {
    "id": 404,
    "name": "x-scissor",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 405,
    "name": "bug buzz",
    "type": types.BUG,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 406,
    "name": "dragon pulse",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 85,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 407,
    "name": "dragon rush",
    "type": types.DRAGON,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 100,
    "accuracy": 75,
    "gen": 4
  },
  {
    "id": 408,
    "name": "power gem",
    "type": types.ROCK,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 409,
    "name": "drain punch",
    "type": types.FIGHTING,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 75,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 410,
    "name": "vacuum wave",
    "type": types.FIGHTING,
    "category": definitions.SPECIAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 411,
    "name": "focus blast",
    "type": types.FIGHTING,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 120,
    "accuracy": 70,
    "gen": 4
  },
  {
    "id": 412,
    "name": "energy ball",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 413,
    "name": "brave bird",
    "type": types.FLYING,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 120,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 414,
    "name": "earth power",
    "type": types.GROUND,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 90,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 415,
    "name": "switcheroo",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 416,
    "name": "giga impact",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 417,
    "name": "nasty plot",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 418,
    "name": "bullet punch",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 419,
    "name": "avalanche",
    "type": types.ICE,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 60,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 420,
    "name": "ice shard",
    "type": types.ICE,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 421,
    "name": "shadow claw",
    "type": types.GHOST,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 422,
    "name": "thunder fang",
    "type": types.ELECTRIC,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 65,
    "accuracy": 95,
    "gen": 4
  },
  {
    "id": 423,
    "name": "ice fang",
    "type": types.ICE,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 65,
    "accuracy": 95,
    "gen": 4
  },
  {
    "id": 424,
    "name": "fire fang",
    "type": types.FIRE,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 65,
    "accuracy": 95,
    "gen": 4
  },
  {
    "id": 425,
    "name": "shadow sneak",
    "type": types.GHOST,
    "category": definitions.PHYSICAL,
    "pp": 30,
    "power": 40,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 426,
    "name": "mud bomb",
    "type": types.GROUND,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 65,
    "accuracy": 85,
    "gen": 4
  },
  {
    "id": 427,
    "name": "psycho cut",
    "type": types.PSYCHIC,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 428,
    "name": "zen headbutt",
    "type": types.PSYCHIC,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 429,
    "name": "mirror shot",
    "type": types.STEEL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 65,
    "accuracy": 85,
    "gen": 4
  },
  {
    "id": 430,
    "name": "flash cannon",
    "type": types.STEEL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 431,
    "name": "rock climb",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 90,
    "accuracy": 85,
    "gen": 4
  },
  {
    "id": 432,
    "name": "defog",
    "type": types.FLYING,
    "category": definitions.STATUS,
    "pp": 15,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 433,
    "name": "trick room",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 5,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 434,
    "name": "draco meteor",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 130,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 435,
    "name": "discharge",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 436,
    "name": "lava plume",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 437,
    "name": "leaf storm",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 130,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 438,
    "name": "power whip",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 120,
    "accuracy": 85,
    "gen": 4
  },
  {
    "id": 439,
    "name": "rock wrecker",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 440,
    "name": "cross poison",
    "type": types.POISON,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 70,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 441,
    "name": "gunk shot",
    "type": types.POISON,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 120,
    "accuracy": 80,
    "gen": 4
  },
  {
    "id": 442,
    "name": "iron head",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 80,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 443,
    "name": "magnet bomb",
    "type": types.STEEL,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 60,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 444,
    "name": "stone edge",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 100,
    "accuracy": 80,
    "gen": 4
  },
  {
    "id": 445,
    "name": "captivate",
    "type": types.NORMAL,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 446,
    "name": "stealth rock",
    "type": types.ROCK,
    "category": definitions.STATUS,
    "pp": 20,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 447,
    "name": "grass knot",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 448,
    "name": "chatter",
    "type": types.FLYING,
    "category": definitions.SPECIAL,
    "pp": 20,
    "power": 65,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 449,
    "name": "judgment",
    "type": types.NORMAL,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 100,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 450,
    "name": "bug bite",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 60,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 451,
    "name": "charge beam",
    "type": types.ELECTRIC,
    "category": definitions.SPECIAL,
    "pp": 10,
    "power": 50,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 452,
    "name": "wood hammer",
    "type": types.GRASS,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 120,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 453,
    "name": "aqua jet",
    "type": types.WATER,
    "category": definitions.PHYSICAL,
    "pp": 20,
    "power": 40,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 454,
    "name": "attack order",
    "type": types.BUG,
    "category": definitions.PHYSICAL,
    "pp": 15,
    "power": 90,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 455,
    "name": "defend order",
    "type": types.BUG,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 456,
    "name": "heal order",
    "type": types.BUG,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 457,
    "name": "head smash",
    "type": types.ROCK,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 150,
    "accuracy": 80,
    "gen": 4
  },
  {
    "id": 458,
    "name": "double hit",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 10,
    "power": 35,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 459,
    "name": "roar of time",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 150,
    "accuracy": 90,
    "gen": 4
  },
  {
    "id": 460,
    "name": "spacial rend",
    "type": types.DRAGON,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 100,
    "accuracy": 95,
    "gen": 4
  },
  {
    "id": 461,
    "name": "lunar dance",
    "type": types.PSYCHIC,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 0,
    "gen": 4
  },
  {
    "id": 462,
    "name": "crush grip",
    "type": types.NORMAL,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 0,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 463,
    "name": "magma storm",
    "type": types.FIRE,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 100,
    "accuracy": 75,
    "gen": 4
  },
  {
    "id": 464,
    "name": "dark void",
    "type": types.DARK,
    "category": definitions.STATUS,
    "pp": 10,
    "power": 0,
    "accuracy": 50,
    "gen": 4
  },
  {
    "id": 465,
    "name": "seed flare",
    "type": types.GRASS,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 120,
    "accuracy": 85,
    "gen": 4
  },
  {
    "id": 466,
    "name": "ominous wind",
    "type": types.GHOST,
    "category": definitions.SPECIAL,
    "pp": 5,
    "power": 60,
    "accuracy": 100,
    "gen": 4
  },
  {
    "id": 467,
    "name": "shadow force",
    "type": types.GHOST,
    "category": definitions.PHYSICAL,
    "pp": 5,
    "power": 120,
    "accuracy": 100,
    "gen": 4
  }
]
