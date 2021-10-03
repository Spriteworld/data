import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_3';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_5';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_8 from './gen_8';
import { getMovesByGen } from './index';

describe('moves can be gotten by generation', () => {
  test('can get gen 1 moveset', () => {
    expect(getMovesByGen(1)).toBe(gen_1.MOVES);
  });
  test('can get gen 2 moveset', () => {
    expect(getMovesByGen(2)).toBe(gen_2.MOVES);
  });
  test('can get gen 3 moveset', () => {
    expect(getMovesByGen(3)).toBe(gen_3.MOVES);
  });
  test('can get gen 4 moveset', () => {
    expect(getMovesByGen(4)).toBe(gen_4.MOVES);
  });
  test('can get gen 5 moveset', () => {
    expect(getMovesByGen(5)).toBe(gen_5.MOVES);
  });
  test('can get gen 6 moveset', () => {
    expect(getMovesByGen(6)).toBe(gen_6.MOVES);
  });
  test('can get gen 7 moveset', () => {
    expect(getMovesByGen(7)).toBe(gen_7.MOVES);
  });
  test('can get gen 8 moveset', () => {
    expect(getMovesByGen(8)).toBe(gen_8.MOVES);
  });
  test('can get gen 1000 moveset', () => {
    expect(() => getMovesByGen(1000)).toThrow('Gen "1000" is invalid!');
  });
})
