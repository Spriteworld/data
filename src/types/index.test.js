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
  test('ground move against a steel/rock type is quad effective', () => {
    expect(getTypeEffectiveness(TYPES.GROUND, [TYPES.STEEL, TYPES.ROCK], gen_6)).toBe(4);
  });
  test('flying move against a bug/grass type is quad effective', () => {
    expect(getTypeEffectiveness(TYPES.FLYING, [TYPES.BUG, TYPES.GRASS], gen_6)).toBe(4);
  });

  test('ground move against a electric/water type is super effective', () => {
    expect(getTypeEffectiveness(TYPES.GROUND, [TYPES.ELECTRIC, TYPES.WATER], gen_6)).toBe(2);
  });

  test('grass move against a water/flying type is normally effective', () => {
    expect(getTypeEffectiveness(TYPES.GRASS, [TYPES.WATER, TYPES.FLYING], gen_6)).toBe(1);
  });

  test('bug move against a dragon/flying type is not very effective', () => {
    expect(getTypeEffectiveness(TYPES.BUG, [TYPES.DRAGON, TYPES.FLYING], gen_6)).toBe(0.5);
  });

  test('fighting move against a psychic/flying type is not very effective', () => {
    expect(getTypeEffectiveness(TYPES.FIGHTING, [TYPES.PSYCHIC, TYPES.FLYING], gen_6)).toBe(0.25);
  });

  test('electric move against a water/ground type is not effective', () => {
    expect(getTypeEffectiveness(TYPES.ELECTRIC, [TYPES.WATER, TYPES.GROUND], gen_6)).toBe(0);
  });
});

describe('getTypeEffectiveness against single typings', () => {
  test('water move against a rock type is super effective', () => {
    expect(getTypeEffectiveness(TYPES.WATER, [TYPES.ROCK], gen_6)).toBe(2);
  });

  test('normal move against a flying type is normally effective', () => {
    expect(getTypeEffectiveness(TYPES.NORMAL, [TYPES.FLYING], gen_6)).toBe(1);
  });

  test('psychic move against a psychic type is not very effective', () => {
    expect(getTypeEffectiveness(TYPES.PSYCHIC, [TYPES.PSYCHIC], gen_6)).toBe(0.5);
  });

  test('dragon move against a fairy type is not effective', () => {
    expect(getTypeEffectiveness(TYPES.DRAGON, [TYPES.FAIRY], gen_6)).toBe(0);
  });
});
