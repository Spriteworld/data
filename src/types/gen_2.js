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
  [definitions.DRAGON]: definitions.DRAGON,
  [definitions.DARK]: definitions.DARK,
  [definitions.STEEL]: definitions.STEEL,
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
  [definitions.POISON]: [definitions.STEEL],
  [definitions.GROUND]: [definitions.FLYING],
  [definitions.FLYING]: [],
  [definitions.PSYCHIC]: [definitions.DARK],
  [definitions.BUG]: [],
  [definitions.ROCK]: [],
  [definitions.GHOST]: [definitions.NORMAL],
  [definitions.DRAGON]: [],
  [definitions.DARK]: [],
  [definitions.STEEL]: [],
};

// [TYPE] is weak against [TYPE(S)] (x0.5)
export const WEAKNESS = {
  [definitions.NORMAL]: [definitions.ROCK, definitions.STEEL],
  [definitions.FIRE]: [definitions.FIRE, definitions.WATER, definitions.ROCK, definitions.DRAGON],
  [definitions.WATER]: [definitions.WATER, definitions.GRASS, definitions.DRAGON],
  [definitions.ELECTRIC]: [definitions.ELECTRIC, definitions.GRASS, definitions.DRAGON],
  [definitions.GRASS]: [definitions.FIRE, definitions.GRASS, definitions.POISON, definitions.FLYING, definitions.BUG, definitions.DRAGON, definitions.STEEL],
  [definitions.ICE]: [definitions.FIRE, definitions.WATER, definitions.ICE, definitions.STEEL],
  [definitions.FIGHTING]: [definitions.POISON, definitions.FLYING, definitions.PSYCHIC, definitions.BUG],
  [definitions.POISON]: [definitions.POISON, definitions.GROUND, definitions.ROCK, definitions.GHOST],
  [definitions.GROUND]: [definitions.GRASS, definitions.BUG],
  [definitions.FLYING]: [definitions.ELECTRIC, definitions.ROCK, definitions.STEEL],
  [definitions.PSYCHIC]: [definitions.PSYCHIC, definitions.STEEL],
  [definitions.BUG]: [definitions.FIRE, definitions.FIGHTING, definitions.POISON, definitions.FLYING, definitions.GHOST, definitions.STEEL],
  [definitions.ROCK]: [definitions.FIGHTING, definitions.GROUND, definitions.STEEL],
  [definitions.GHOST]: [definitions.DARK, definitions.STEEL],
  [definitions.DRAGON]: [definitions.STEEL],
  [definitions.DARK]: [definitions.FIGHTING, definitions.DARK, definitions.STEEL],
  [definitions.STEEL]: [definitions.FIRE, definitions.WATER, definitions.ELECTRIC, definitions.STEEL],
};

// [TYPE] is strong against [TYPE(S)] (x2)
export const STRENGTH = {
  [definitions.NORMAL]: [],
  [definitions.FIRE]: [definitions.GRASS, definitions.ICE, definitions.BUG, definitions.STEEL],
  [definitions.WATER]: [definitions.FIRE, definitions.GROUND, definitions.ROCK],
  [definitions.ELECTRIC]: [definitions.WATER, definitions.FLYING],
  [definitions.GRASS]: [definitions.WATER, definitions.GROUND, definitions.ROCK],
  [definitions.ICE]: [definitions.GRASS, definitions.GROUND, definitions.FLYING, definitions.DRAGON],
  [definitions.FIGHTING]: [definitions.NORMAL, definitions.ICE, definitions.ROCK, definitions.DARK, definitions.STEEL],
  [definitions.POISON]: [definitions.GRASS],
  [definitions.GROUND]: [definitions.FIRE, definitions.ELECTRIC, definitions.POISON, definitions.ROCK, definitions.STEEL],
  [definitions.FLYING]: [definitions.GRASS, definitions.FIGHTING, definitions.BUG],
  [definitions.PSYCHIC]: [definitions.FIGHTING, definitions.POISON],
  [definitions.BUG]: [definitions.GRASS, definitions.PSYCHIC, definitions.DARK],
  [definitions.ROCK]: [definitions.FIRE, definitions.ICE, definitions.FLYING, definitions.BUG],
  [definitions.GHOST]: [definitions.PSYCHIC, definitions.GHOST],
  [definitions.DRAGON]: [definitions.DRAGON],
  [definitions.DARK]: [definitions.PSYCHIC, definitions.GHOST],
  [definitions.STEEL]: [definitions.ICE, definitions.ROCK]
};
