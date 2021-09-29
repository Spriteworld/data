import * as gen_1 from './gen_1';

let expected = {
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

test('types dont have dark/steel/fairy', () => {
  expect(gen_1.TYPES).toStrictEqual(expected);
});
