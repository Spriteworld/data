import * as definitions from './definitions';

export const TYPES = {
  [definitions.NORMAL]: definitions.NORMAL,
  [definitions.FIRE]: definitions.FIRE,
  [definitions.WATER]: definitions.WATER,
  [definitions.ELECTRIC]: definitions.ELECTRIC,
  [definitions.GRASS]: definitions.GRASS,
  [definitions.ICE]: definitions.ICE,
  [definitions.FIGHTING]: definitions.FIGHTING,
  [definitions.POISON]: definitions.POISON,
  [definitions.GROUND]: definitions.GROUND,
  [definitions.FLYING]: definitions.FLYING,
  [definitions.PSYCHIC]: definitions.PSYCHIC,
  [definitions.BUG]: definitions.BUG,
  [definitions.ROCK]: definitions.ROCK,
  [definitions.GHOST]: definitions.GHOST,
  [definitions.DRAGON]: definitions.DRAGON
};

// [TYPE] has no effect on [TYPE(S)] (x0)
export const IMMUNITY = {
  [definitions.NORMAL]: [definitions.GHOST],
  [definitions.FIRE]: [],
  [definitions.WATER]: [],
  [definitions.ELECTRIC]: [definitions.GROUND],
  [definitions.GRASS]: [],
  [definitions.ICE]: [],
  [definitions.FIGHTING]: [definitions.GHOST],
  [definitions.POISON]: [],
  [definitions.GROUND]: [definitions.FLYING],
  [definitions.FLYING]: [],
  [definitions.PSYCHIC]: [],
  [definitions.BUG]: [],
  [definitions.ROCK]: [],
  [definitions.GHOST]: [definitions.NORMAL, definitions.PSYCHIC],
  [definitions.DRAGON]: []
};

// [TYPE] resists [TYPE(S)] (x0.5)
export const RESIST = {
  [definitions.NORMAL]: [definitions.ROCK],
  [definitions.FIRE]: [definitions.FIRE, definitions.WATER, definitions.ROCK, definitions.DRAGON],
  [definitions.WATER]: [definitions.WATER, definitions.GRASS, definitions.DRAGON],
  [definitions.ELECTRIC]: [definitions.ELECTRIC, definitions.GRASS, definitions.DRAGON],
  [definitions.GRASS]: [definitions.FIRE, definitions.GRASS, definitions.POISON, definitions.FLYING, definitions.BUG, definitions.DRAGON],
  [definitions.ICE]: [definitions.WATER, definitions.ICE],
  [definitions.FIGHTING]: [definitions.POISON, definitions.FLYING, definitions.PSYCHIC, definitions.BUG],
  [definitions.POISON]: [definitions.POISON, definitions.GROUND, definitions.ROCK, definitions.GHOST],
  [definitions.GROUND]: [definitions.GRASS, definitions.BUG],
  [definitions.FLYING]: [definitions.ELECTRIC, definitions.ROCK],
  [definitions.PSYCHIC]: [definitions.PSYCHIC],
  [definitions.BUG]: [definitions.FIRE, definitions.FIGHTING, definitions.FLYING, definitions.GHOST],
  [definitions.ROCK]: [definitions.FIGHTING, definitions.GROUND],
  [definitions.GHOST]: [],
  [definitions.DRAGON]: []
};

// [TYPE] is strong against [TYPE(S)] (x2)
export const STRENGTH = {
  [definitions.NORMAL]: [],
  [definitions.FIRE]: [definitions.GRASS, definitions.ICE, definitions.BUG],
  [definitions.WATER]: [definitions.FIRE, definitions.GROUND, definitions.ROCK],
  [definitions.ELECTRIC]: [definitions.WATER, definitions.FLYING],
  [definitions.GRASS]: [definitions.WATER, definitions.GROUND, definitions.ROCK],
  [definitions.ICE]: [definitions.GRASS, definitions.GROUND, definitions.FLYING, definitions.DRAGON],
  [definitions.FIGHTING]: [definitions.NORMAL, definitions.ICE, definitions.ROCK],
  [definitions.POISON]: [definitions.GRASS, definitions.BUG],
  [definitions.GROUND]: [definitions.FIRE, definitions.ELECTRIC, definitions.POISON, definitions.ROCK],
  [definitions.FLYING]: [definitions.GRASS, definitions.FIGHTING, definitions.BUG],
  [definitions.PSYCHIC]: [definitions.FIGHTING, definitions.POISON],
  [definitions.BUG]: [definitions.GRASS, definitions.POISON, definitions.PSYCHIC],
  [definitions.ROCK]: [definitions.FIRE, definitions.ICE, definitions.FLYING, definitions.BUG],
  [definitions.GHOST]: [definitions.GHOST],
  [definitions.DRAGON]: [definitions.DRAGON]
};
