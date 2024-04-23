import * as DEX_RBY from './rby';
import * as DEX_GSC from './gsc';
import * as DEX_RSE from './rse';
import * as DEX_FRLG from './frlg';
import * as DEX_DP from './dp';
import * as DEX_PLAT from './plat';
import * as DEX_HGSS from './hgss';
import * as DEX_BW from './bw';
import * as DEX_B2W2 from './b2w2';
import * as DEX_XY from './xy';
import * as DEX_ORAS from './oras';
import * as DEX_SM from './sm';
import * as DEX_USUM from './usum';
import * as DEX_LGPE from './lgpe';
import * as DEX_SWSH from './swsh';
import { GAMES } from '../index';
import { getPokedexByGameId } from './index';

describe('getPokedexByGameId works', () => {
  let expected = {
    [GAMES.POKEMON_BLUE]: DEX_RBY.POKEDEX,
    [GAMES.POKEMON_RED]: DEX_RBY.POKEDEX,
    [GAMES.POKEMON_GREEN]: DEX_RBY.POKEDEX,
    [GAMES.POKEMON_YELLOW]: DEX_RBY.POKEDEX,
    [GAMES.POKEMON_GOLD]: DEX_GSC.POKEDEX,
    [GAMES.POKEMON_SILVER]: DEX_GSC.POKEDEX,
    [GAMES.POKEMON_CRYSTAL]: DEX_GSC.POKEDEX,
    [GAMES.POKEMON_RUBY]: DEX_RSE.POKEDEX,
    [GAMES.POKEMON_SAPPHIRE]: DEX_RSE.POKEDEX,
    [GAMES.POKEMON_EMERALD]: DEX_RSE.POKEDEX,
    [GAMES.POKEMON_FIRE_RED]: DEX_FRLG.POKEDEX,
    [GAMES.POKEMON_LEAF_GREEN]: DEX_FRLG.POKEDEX,
    [GAMES.POKEMON_DIAMOND]: DEX_DP.POKEDEX,
    [GAMES.POKEMON_PEARL]: DEX_DP.POKEDEX,
    [GAMES.POKEMON_PLATINUM]: DEX_PLAT.POKEDEX,
    [GAMES.POKEMON_HEART_GOLD]: DEX_HGSS.POKEDEX,
    [GAMES.POKEMON_SOUL_SILVER]: DEX_HGSS.POKEDEX,
    [GAMES.POKEMON_BLACK]: DEX_BW.POKEDEX,
    [GAMES.POKEMON_WHITE]: DEX_BW.POKEDEX,
    [GAMES.POKEMON_BLACK_2]: DEX_B2W2.POKEDEX,
    [GAMES.POKEMON_WHITE_2]: DEX_B2W2.POKEDEX,
    [GAMES.POKEMON_X]: DEX_XY.POKEDEX,
    [GAMES.POKEMON_Y]: DEX_XY.POKEDEX,
    [GAMES.POKEMON_OMEGA_RUBY]: DEX_ORAS.POKEDEX,
    [GAMES.POKEMON_ALPHA_SAPPHIRE]: DEX_ORAS.POKEDEX,
    [GAMES.POKEMON_SUN]: DEX_SM.POKEDEX,
    [GAMES.POKEMON_MOON]: DEX_SM.POKEDEX,
    [GAMES.POKEMON_ULTRA_SUN]: DEX_USUM.POKEDEX,
    [GAMES.POKEMON_ULTRA_MOON]: DEX_USUM.POKEDEX,
    [GAMES.POKEMON_LETS_GO_PIKACHU]: DEX_LGPE.POKEDEX,
    [GAMES.POKEMON_LETS_GO_EEVEE]: DEX_LGPE.POKEDEX,
    [GAMES.POKEMON_SWORD]: DEX_SWSH.POKEDEX,
    [GAMES.POKEMON_SHIELD]: DEX_SWSH.POKEDEX,
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
