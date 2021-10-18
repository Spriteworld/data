import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_6 from './gen_6';
import { getTypesByGen } from './index';

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
