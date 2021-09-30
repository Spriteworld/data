import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_3';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_5';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_8 from './gen_8';
import { getPokedexByGen } from './index';


test(`can get gen_1 pokedex`, () => {
  expect(getPokedexByGen(1)).toBe(gen_1.POKEDEX);
});
test(`can get gen_2 pokedex`, () => {
  expect(getPokedexByGen(2)).toBe(gen_2.POKEDEX);
});
test(`can get gen_3 pokedex`, () => {
  expect(getPokedexByGen(3)).toBe(gen_3.POKEDEX);
});
test(`can get gen_4 pokedex`, () => {
  expect(getPokedexByGen(4)).toBe(gen_4.POKEDEX);
});
test(`can get gen_5 pokedex`, () => {
  expect(getPokedexByGen(5)).toBe(gen_5.POKEDEX);
});
test(`can get gen_6 pokedex`, () => {
  expect(getPokedexByGen(6)).toBe(gen_6.POKEDEX);
});
test(`can get gen_7 pokedex`, () => {
  expect(getPokedexByGen(7)).toBe(gen_7.POKEDEX);
});
test(`can get gen_8 pokedex`, () => {
  expect(getPokedexByGen(8)).toBe(gen_8.POKEDEX);
});

