import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_3';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_5';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_8 from './gen_8';
import { getMovesByGen, getMovesByGameId } from './index';
import { GAMES } from '../index';

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
});


describe('getMovesByGameId works', () => {
  let expected = {
    [GAMES.POKEMON_BLUE]: gen_1.MOVES,
    [GAMES.POKEMON_RED]: gen_1.MOVES,
    [GAMES.POKEMON_GREEN]: gen_1.MOVES,
    [GAMES.POKEMON_YELLOW]: gen_1.MOVES,
    [GAMES.POKEMON_GOLD]: gen_2.MOVES,
    [GAMES.POKEMON_SILVER]: gen_2.MOVES,
    [GAMES.POKEMON_CRYSTAL]: gen_2.MOVES,
    [GAMES.POKEMON_RUBY]: gen_3.MOVES,
    [GAMES.POKEMON_SAPPHIRE]: gen_3.MOVES,
    [GAMES.POKEMON_FIRE_RED]: gen_3.MOVES,
    [GAMES.POKEMON_LEAF_GREEN]: gen_3.MOVES,
    [GAMES.POKEMON_EMERALD]: gen_3.MOVES,
    [GAMES.POKEMON_DIAMOND]: gen_4.MOVES,
    [GAMES.POKEMON_PEARL]: gen_4.MOVES,
    [GAMES.POKEMON_PLATINUM]: gen_4.MOVES,
    [GAMES.POKEMON_HEART_GOLD]: gen_4.MOVES,
    [GAMES.POKEMON_SOUL_SILVER]: gen_4.MOVES,
    [GAMES.POKEMON_BLACK]: gen_5.MOVES,
    [GAMES.POKEMON_WHITE]: gen_5.MOVES,
    [GAMES.POKEMON_BLACK_2]: gen_5.MOVES,
    [GAMES.POKEMON_WHITE_2]: gen_5.MOVES,
    [GAMES.POKEMON_X]: gen_6.MOVES,
    [GAMES.POKEMON_Y]: gen_6.MOVES,
    [GAMES.POKEMON_OMEGA_RUBY]: gen_6.MOVES,
    [GAMES.POKEMON_ALPHA_SAPPHIRE]: gen_6.MOVES,
    [GAMES.POKEMON_SUN]: gen_7.MOVES,
    [GAMES.POKEMON_MOON]: gen_7.MOVES,
    [GAMES.POKEMON_ULTRA_SUN]: gen_7.MOVES,
    [GAMES.POKEMON_ULTRA_MOON]: gen_7.MOVES,
    [GAMES.POKEMON_LETS_GO_PIKACHU]: gen_1.MOVES,
    [GAMES.POKEMON_LETS_GO_EEVEE]: gen_1.MOVES,
    [GAMES.POKEMON_SWORD]: gen_8.MOVES,
    [GAMES.POKEMON_SHIELD]: gen_8.MOVES,
  };
  Object.keys(expected).forEach(game => {
    test(game+' has expected movedex', () => {
      expect(getMovesByGameId(game)).toBe(expected[game]);
    });
  });

  test('pokemon test returns an error', () => {
    expect(() => getMovesByGameId('test')).toThrow('GameId "test" is invalid!');
  });
});
