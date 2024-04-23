import { STATS } from '../../stats';

export const NATURES = {
  HARDY: {
    name: 'HARDY',
    increase: STATS.ATTACK,
    decrease: STATS.ATTACK
  },
  LONELY: {
    name: 'LONELY',
    increase: STATS.ATTACK,
    decrease: STATS.DEFENSE
  },
  BRAVE: {
    name: 'BRAVE',
    increase: STATS.ATTACK,
    decrease: STATS.SPEED
  },
  ADAMANT: {
    name: 'ADAMANT',
    increase: STATS.ATTACK,
    decrease: STATS.SPECIAL_ATTACK
  },
  NAUGHTY: {
    name: 'NAUGHTY',
    increase: STATS.ATTACK,
    decrease: STATS.SPECIAL_DEFENSE
  },
  BOLD: {
    name: 'BOLD',
    increase: STATS.DEFENSE,
    decrease: STATS.ATTACK
  },
  DOCILE: {
    name: 'DOCILE',
    increase: STATS.DEFENSE,
    decrease: STATS.DEFENSE
  },
  RELAXED: {
    name: 'RELAXED',
    increase: STATS.DEFENSE,
    decrease: STATS.SPEED
  },
  IMPISH: {
    name: 'IMPISH',
    increase: STATS.DEFENSE,
    decrease: STATS.SPECIAL_ATTACK
  },
  LAX: {
    name: 'LAX',
    increase: STATS.DEFENSE,
    decrease: STATS.SPECIAL_DEFENSE
  },
  TIMID: {
    name: 'TIMID',
    increase: STATS.SPEED,
    decrease: STATS.ATTACK
  },
  HASTY: {
    name: 'HASTY',
    increase: STATS.SPEED,
    decrease: STATS.DEFENSE
  },
  SERIOUS: {
    name: 'SERIOUS',
    increase: STATS.SPEED,
    decrease: STATS.SPEED
  },
  JOLLY: {
    name: 'JOLLY',
    increase: STATS.SPEED,
    decrease: STATS.SPECIAL_ATTACK
  },
  NAIVE: {
    name: 'NAIVE',
    increase: STATS.SPEED,
    decrease: STATS.SPECIAL_DEFENSE
  },
  MODEST: {
    name: 'MODEST',
    increase: STATS.SPECIAL_ATTACK,
    decrease: STATS.ATTACK
  },
  MILD: {
    name: 'MILD',
    increase: STATS.SPECIAL_ATTACK,
    decrease: STATS.DEFENSE
  },
  QUIET: {
    name: 'QUIET',
    increase: STATS.SPECIAL_ATTACK,
    decrease: STATS.SPEED
  },
  BASHFUL: {
    name: 'BASHFUL',
    increase: STATS.SPECIAL_ATTACK,
    decrease: STATS.SPECIAL_ATTACK
  },
  RASH: {
    name: 'RASH',
    increase: STATS.SPECIAL_ATTACK,
    decrease: STATS.SPECIAL_DEFENSE
  },
  CALM: {
    name: 'CALM',
    increase: STATS.SPECIAL_DEFENSE,
    decrease: STATS.ATTACK
  },
  GENTLE: {
    name: 'GENTLE',
    increase: STATS.SPECIAL_DEFENSE,
    decrease: STATS.DEFENSE
  },
  SASSY: {
    name: 'SASSY',
    increase: STATS.SPECIAL_DEFENSE,
    decrease: STATS.SPEED
  },
  CAREFUL: {
    name: 'CAREFUL',
    increase: STATS.SPECIAL_DEFENSE,
    decrease: STATS.SPECIAL_ATTACK
  },
  QUIRKY: {
    name: 'QUIRKY',
    increase: STATS.SPECIAL_DEFENSE,
    decrease: STATS.SPECIAL_DEFENSE
  },
};
