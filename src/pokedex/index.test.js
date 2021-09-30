import * as gen_1 from './gen_1';
import * as gen_1_updated from './gen_1_updated';
import * as gen_2 from './gen_2';
import * as gen_2_updated from './gen_2_updated';
import * as gen_3 from './gen_3';
import * as gen_3_updated from './gen_3_updated';
import * as gen_4 from './gen_4';
import * as gen_4_updated from './gen_4_updated';
import * as gen_5 from './gen_5';
import * as gen_5_updated from './gen_5_updated';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_7_updated from './gen_7_updated';
import * as gen_8 from './gen_8';
import { GAMES } from '../index';
import { getPokedexByGameId } from './index';

describe('getPokedexByGameId works', () => {
  let expected = {
    [GAMES.POKEMON_BLUE]: gen_1.POKEDEX,
    [GAMES.POKEMON_RED]: gen_1.POKEDEX,
    [GAMES.POKEMON_GREEN]: gen_1.POKEDEX,
    [GAMES.POKEMON_YELLOW]: gen_1.POKEDEX,
    [GAMES.POKEMON_GOLD]: gen_2.POKEDEX,
    [GAMES.POKEMON_SILVER]: gen_2.POKEDEX,
    [GAMES.POKEMON_CRYSTAL]: gen_2.POKEDEX,
    [GAMES.POKEMON_RUBY]: gen_3.POKEDEX,
    [GAMES.POKEMON_SAPPHIRE]: gen_3.POKEDEX,
    [GAMES.POKEMON_FIRE_RED]: gen_3.POKEDEX,
    [GAMES.POKEMON_LEAF_GREEN]: gen_3.POKEDEX,
    [GAMES.POKEMON_EMERALD]: gen_3.POKEDEX,
    [GAMES.POKEMON_DIAMOND]: gen_4.POKEDEX,
    [GAMES.POKEMON_PEARL]: gen_4.POKEDEX,
    [GAMES.POKEMON_PLATINUM]: gen_4_updated.POKEDEX,
    [GAMES.POKEMON_HEART_GOLD]: gen_2_updated.POKEDEX,
    [GAMES.POKEMON_SOUL_SILVER]: gen_2_updated.POKEDEX,
    [GAMES.POKEMON_BLACK]: gen_5.POKEDEX,
    [GAMES.POKEMON_WHITE]: gen_5.POKEDEX,
    [GAMES.POKEMON_BLACK_2]: gen_5_updated.POKEDEX,
    [GAMES.POKEMON_WHITE_2]: gen_5_updated.POKEDEX,
    [GAMES.POKEMON_X]: gen_6.POKEDEX,
    [GAMES.POKEMON_Y]: gen_6.POKEDEX,
    [GAMES.POKEMON_OMEGA_RUBY]: gen_3_updated.POKEDEX,
    [GAMES.POKEMON_ALPHA_SAPPHIRE]: gen_3_updated.POKEDEX,
    [GAMES.POKEMON_SUN]: gen_7.POKEDEX,
    [GAMES.POKEMON_MOON]: gen_7.POKEDEX,
    [GAMES.POKEMON_ULTRA_SUN]: gen_7_updated.POKEDEX,
    [GAMES.POKEMON_ULTRA_MOON]: gen_7_updated.POKEDEX,
    [GAMES.POKEMON_LETS_GO_PIKACHU]: gen_1_updated.POKEDEX,
    [GAMES.POKEMON_LETS_GO_EEVEE]: gen_1_updated.POKEDEX,
    [GAMES.POKEMON_SWORD]: gen_8.POKEDEX,
    [GAMES.POKEMON_SHIELD]: gen_8.POKEDEX,
  };
  Object.keys(expected).forEach(game => {
    test(game+' has expected pokedex', () => {
      expect(getPokedexByGameId(game)).toBe(expected[game]);
    });
  });

  test('pokemon test returns an error', () => {
    expect(() => getPokedexByGameId('test')).toThrow('GameId "test" is invalid!');
  });
});
