import { getPokedexByGameId } from '../pokedex/index';

export class Pokedex {
  constructor(gameId) {
    this.pokedex = getPokedexByGameId(gameId);


  }

  getPokemonById(id) {
    return Object.values(this.pokedex).find(pokemon => {
      return pokemon.id === id;
    });
  }

  getPokemonBySpecies(species, form=null) {
    return Object.values(this.pokedex).find(pokemon => {
      if (form === null) {
        return pokemon.species.toLowerCase() === species.toLowerCase();
      } else {
        return pokemon.species.toLowerCase() === species.toLowerCase() &&
                pokemon.form.toLowerCase() === form.toLowerCase();
      }
    });
  }
}
