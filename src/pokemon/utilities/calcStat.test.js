import { STATS } from '../../index';
import { calcStat } from './calcStat';

let pokemon = {
  species: 12,
  speciesName: 'butterfree',
  level: 53,
  nature: 'modest',
  baseStats: {
    [STATS.HP]: 60,
    [STATS.ATTACK]: 45,
    [STATS.DEFENSE]: 50,
    [STATS.SPECIAL_ATTACK]: 80,
    [STATS.SPECIAL_DEFENSE]: 80,
    [STATS.SPEED]: 70,
  },
  ivs: {
    [STATS.HP]: 28,
    [STATS.ATTACK]: 4,
    [STATS.DEFENSE]: 17,
    [STATS.SPECIAL_ATTACK]: 30,
    [STATS.SPECIAL_DEFENSE]: 27,
    [STATS.SPEED]: 31,
  },
  evs: {
    [STATS.HP]: 4,
    [STATS.ATTACK]: 0,
    [STATS.DEFENSE]: 0,
    [STATS.SPECIAL_ATTACK]: 254,
    [STATS.SPECIAL_DEFENSE]: 0,
    [STATS.SPEED]: 252,
  },
};
let expected = {
  [STATS.HP]: 141,
  [STATS.ATTACK]: 48,
  [STATS.DEFENSE]: 67,
  [STATS.SPECIAL_ATTACK]: 152,
  [STATS.SPECIAL_DEFENSE]: 104,
  [STATS.SPEED]: 129,
};

describe('calcStat should generate correct stats given known info', () => {

  Object.keys(expected).forEach(stat => {
    test(stat, () => {
      expect(calcStat(pokemon, stat)).toBe(expected[stat]);
    });
  });

});
