import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_6 from './gen_6';
import * as TYPES from './definitions';
import { getTypesByGen, getTypeEffectiveness } from './index';

describe('getTypesByGen can return types by generation number', () => {
  let expected = { 1: 1, 2: 2, 3: 2, 4: 2, 5: 2, 6: 6, 7: 6, 8: 6 };
  Object.keys(expected).forEach(gen => {
    test(`can get gen_${gen} types`, () => {
      expect(getTypesByGen(gen)).toBe(`gen_${gen}`.TYPES);
    });
  });
});

describe('New Types get added across generations', () => {
  let expected_gen_1 = {
    'NORMAL': 'NORMAL',
    'FIRE': 'FIRE',
    'WATER': 'WATER',
    'ELECTRIC': 'ELECTRIC',
    'GRASS': 'GRASS',
    'ICE': 'ICE',
    'FIGHTING': 'FIGHTING',
    'POISON': 'POISON',
    'GROUND': 'GROUND',
    'FLYING': 'FLYING',
    'PSYCHIC': 'PSYCHIC',
    'BUG': 'BUG',
    'ROCK': 'ROCK',
    'GHOST': 'GHOST',
    'DRAGON': 'DRAGON'
  };
  test('types are correct for gen 1', () => {
    expect(gen_1.TYPES).toStrictEqual(expected_gen_1);
  });

  let expected_gen_2 = {
    'NORMAL': 'NORMAL',
    'FIRE': 'FIRE',
    'WATER': 'WATER',
    'ELECTRIC': 'ELECTRIC',
    'GRASS': 'GRASS',
    'ICE': 'ICE',
    'FIGHTING': 'FIGHTING',
    'POISON': 'POISON',
    'GROUND': 'GROUND',
    'FLYING': 'FLYING',
    'PSYCHIC': 'PSYCHIC',
    'BUG': 'BUG',
    'ROCK': 'ROCK',
    'GHOST': 'GHOST',
    'DRAGON': 'DRAGON',
    'DARK': 'DARK',
    'STEEL': 'STEEL'
  };
  test('types are correct for gen 2', () => {
    expect(gen_2.TYPES).toStrictEqual(expected_gen_2);
  });

  let expected_gen_6 = {
    'NORMAL': 'NORMAL',
    'FIRE': 'FIRE',
    'WATER': 'WATER',
    'ELECTRIC': 'ELECTRIC',
    'GRASS': 'GRASS',
    'ICE': 'ICE',
    'FIGHTING': 'FIGHTING',
    'POISON': 'POISON',
    'GROUND': 'GROUND',
    'FLYING': 'FLYING',
    'PSYCHIC': 'PSYCHIC',
    'BUG': 'BUG',
    'ROCK': 'ROCK',
    'GHOST': 'GHOST',
    'DRAGON': 'DRAGON',
    'DARK': 'DARK',
    'STEEL': 'STEEL',
    'FAIRY': 'FAIRY'
  };
  test('types are correct for gen 6', () => {
    expect(gen_6.TYPES).toStrictEqual(expected_gen_6);
  });
});

describe('getTypeEffectiveness against double typings', () => {
  let typeChecks = [
    /** ATTACK_TYPE, DEFENSE_TYPES, GEN[1|2|6], expectation[0|0.25|0.5|1|2|4]  */
    [TYPES.GROUND, [TYPES.STEEL, TYPES.ROCK], gen_6, 4],
    [TYPES.FLYING, [TYPES.BUG, TYPES.GRASS], gen_6, 4],
    [TYPES.GROUND, [TYPES.ELECTRIC, TYPES.WATER], gen_6, 2],
    [TYPES.GRASS, [TYPES.WATER, TYPES.FLYING], gen_6, 1],
    [TYPES.BUG, [TYPES.DRAGON, TYPES.FLYING], gen_6, 0.5],
    [TYPES.FIGHTING, [TYPES.PSYCHIC, TYPES.FLYING], gen_6, 0.25],
    [TYPES.ELECTRIC, [TYPES.WATER, TYPES.GROUND], gen_6, 0],
  ];
  typeChecks.forEach(check => {
    test('${check[0]} move against a ${check[1][0]}/${check[1][1]} type is ${check[3]}x effective', () => {
      expect(getTypeEffectiveness(check[0], check[1], check[2])).toBe(check[3]);
    });
  });
});

describe('getTypeEffectiveness against single typings', () => {
  let typeChecks = [
    /** ATTACK_TYPE, DEFENSE_TYPES, GEN[1|2|6], expectation[0|0.25|0.5|1|2|4]  */
    [TYPES.WATER, [TYPES.ROCK], gen_6, 2],
    [TYPES.NORMAL, [TYPES.FLYING], gen_6, 1],
    [TYPES.PSYCHIC, [TYPES.PSYCHIC], gen_6, 0.5],
    [TYPES.DRAGON, [TYPES.FAIRY], gen_6, 0],
  ];
  typeChecks.forEach(check => {
    test('${check[0]} move against a ${check[1][0]} type is ${check[3]}x effective', () => {
      expect(getTypeEffectiveness(check[0], check[1], check[2])).toBe(check[3]);
    });
  });
});
