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

export function getPokedexByGameId(gameId) {
  switch(gameId) {
    case GAMES.POKEMON_BLUE:
    case GAMES.POKEMON_RED:
    case GAMES.POKEMON_GREEN:
    case GAMES.POKEMON_YELLOW:
      return DEX_RBY.POKEDEX;
    break;

    case GAMES.POKEMON_GOLD:
    case GAMES.POKEMON_SILVER:
    case GAMES.POKEMON_CRYSTAL:
      return DEX_GSC.POKEDEX;
    break;

    case GAMES.POKEMON_RUBY:
    case GAMES.POKEMON_SAPPHIRE:
    case GAMES.POKEMON_EMERALD:
      return DEX_RSE.POKEDEX;
    break;

    case GAMES.POKEMON_FIRE_RED:
    case GAMES.POKEMON_LEAF_GREEN:
      return DEX_FRLG.POKEDEX;
    break;

    case GAMES.POKEMON_DIAMOND:
    case GAMES.POKEMON_PEARL:
      return DEX_DP.POKEDEX;
    break;

    case GAMES.POKEMON_PLATINUM:
      return DEX_PLAT.POKEDEX;
    break;

    case GAMES.POKEMON_HEART_GOLD:
    case GAMES.POKEMON_SOUL_SILVER:
      return DEX_HGSS.POKEDEX;
    break;

    case GAMES.POKEMON_BLACK:
    case GAMES.POKEMON_WHITE:
      return DEX_BW.POKEDEX;
    break;

    case GAMES.POKEMON_BLACK_2:
    case GAMES.POKEMON_WHITE_2:
      return DEX_B2W2.POKEDEX;
    break;

    case GAMES.POKEMON_X:
    case GAMES.POKEMON_Y:
      return DEX_XY.POKEDEX;
    break;

    case GAMES.POKEMON_OMEGA_RUBY:
    case GAMES.POKEMON_ALPHA_SAPPHIRE:
      return DEX_ORAS.POKEDEX;
    break;

    case GAMES.POKEMON_SUN:
    case GAMES.POKEMON_MOON:
      return DEX_SM.POKEDEX;
    break;

    case GAMES.POKEMON_ULTRA_SUN:
    case GAMES.POKEMON_ULTRA_MOON:
      return DEX_USUM.POKEDEX;
    break;

    case GAMES.POKEMON_LETS_GO_PIKACHU:
    case GAMES.POKEMON_LETS_GO_EEVEE:
      return DEX_LGPE.POKEDEX;
    break;

    case GAMES.POKEMON_SWORD:
    case GAMES.POKEMON_SHIELD:
      return DEX_SWSH.POKEDEX;
    break;

    default:
      throw 'GameId "' + gameId + '" is invalid!';
  }
}
