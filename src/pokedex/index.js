import * as gen_1 from './gen_1';
// import * as gen_1_updated from './gen_1_updated';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_3';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_5';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_8 from './gen_8';
import { GAMES } from '../index';

export function getPokedexByGen(gen=8) {
  switch(gen) {
    case 1: return gen_1.POKEDEX; break;
    case 2: return gen_2.POKEDEX; break;
    case 3: return gen_3.POKEDEX; break;
    case 4: return gen_4.POKEDEX; break;
    case 5: return gen_5.POKEDEX; break;
    case 6: return gen_6.POKEDEX; break;
    case 7: return gen_7.POKEDEX; break;
    case 8: return gen_8.POKEDEX; break;

    default:
      throw 'Gen "'+ gen +'" is invalid!';
  }
}

export function getPokedexByGameId(gameId) {
  switch(gameId) {
    case GAMES.POKEMON_BLUE:
    case GAMES.POKEMON_RED:
    case GAMES.POKEMON_GREEN:
    case GAMES.POKEMON_YELLOW:
      return gen_1.POKEDEX;
    break;

    case GAMES.POKEMON_GOLD:
    case GAMES.POKEMON_SILVER:
    case GAMES.POKEMON_CRYSTAL:
      return gen_2.POKEDEX;
    break;

    case GAMES.POKEMON_RUBY:
    case GAMES.POKEMON_SAPPHIRE:
    case GAMES.POKEMON_FIRE_RED:
    case GAMES.POKEMON_LEAF_GREEN:
    case GAMES.POKEMON_EMERALD:
      return gen_3.POKEDEX;
    break;

    case GAMES.POKEMON_DIAMOND:
    case GAMES.POKEMON_PEARL:
    case GAMES.POKEMON_PLATINUM:
    case GAMES.POKEMON_HEART_GOLD:
    case GAMES.POKEMON_SOUL_SILVER:
      return gen_4.POKEDEX;
    break;

    case GAMES.POKEMON_BLACK:
    case GAMES.POKEMON_WHITE:
    case GAMES.POKEMON_BLACK_2:
    case GAMES.POKEMON_WHITE_2:
      return gen_5.POKEDEX;
    break;

    case GAMES.POKEMON_X:
    case GAMES.POKEMON_Y:
    case GAMES.POKEMON_OMEGA_RUBY:
    case GAMES.POKEMON_ALPHA_SAPPHIRE:
      return gen_6.POKEDEX;
    break;

    case GAMES.POKEMON_SUN:
    case GAMES.POKEMON_MOON:
    case GAMES.POKEMON_ULTRA_SUN:
    case GAMES.POKEMON_ULTRA_MOON:
      return gen_7.POKEDEX;
    break;

    // case GAMES.POKEMON_LETS_GO_PIKACHU:
    // case GAMES.POKEMON_LETS_GO_EEVEE:
    //   return gen_1_updated.POKEDEX;
    // break;

    case GAMES.POKEMON_SWORD:
    case GAMES.POKEMON_SHIELD:
      return gen_8.POKEDEX;
    break;

    default:
      throw 'GameId "' + gameId + '" is invalid!';
  }
}
