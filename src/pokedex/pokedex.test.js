import * as gen_1 from './gen_1';
import { Pokedex } from './pokedex';
import { GAMES, FORMS } from '../index';

describe('Pokedex class can do things', () => {
  Object.values(GAMES).forEach(gameId => {
    test(gameId+' is valid gameId', () => {
      expect(new Pokedex(gameId)).toHaveProperty('pokedex');
    });
  });

  test('pokedex throws error on invalid gameIds', () => {
    expect(() => new Pokedex('test')).toThrow('GameId "test" is invalid!');
  });

  test('pokedex can get pokemon by Id', () => {
    let pokedex = new Pokedex(GAMES.POKEMON_RED);
    let pokemon = pokedex.getPokemonById(1);

    expect(pokemon).toHaveProperty('id');
    expect(pokemon).toHaveProperty('species');
    expect(pokemon).toHaveProperty('dex_desc');
    expect(pokemon).toHaveProperty('types');
    expect(pokemon).toHaveProperty('gender');
    expect(pokemon).toHaveProperty('abilities');
    expect(pokemon).toHaveProperty('form');
    expect(pokemon).toHaveProperty('base_stats');
  });

  test('pokedex can get pokemon by species', () => {
    let pokedex = new Pokedex(GAMES.POKEMON_RED);
    let pokemon = pokedex.getPokemonBySpecies('bulbasaur');

    expect(pokemon).toHaveProperty('id');
    expect(pokemon).toHaveProperty('species');
    expect(pokemon).toHaveProperty('dex_desc');
    expect(pokemon).toHaveProperty('types');
    expect(pokemon).toHaveProperty('gender');
    expect(pokemon).toHaveProperty('abilities');
    expect(pokemon).toHaveProperty('form');
    expect(pokemon).toHaveProperty('base_stats');
  });

  // test('pokedex can get pokemon by species and form', () => {
  //   let pokedex = new Pokedex(GAMES.POKEMON_RED);
  //   let pokemon = pokedex.getPokemonBySpecies('vulpix', FORMS.ALOLAN);

  //   expect(pokemon).toHaveProperty('id');
  //   expect(pokemon).toHaveProperty('species');
  //   expect(pokemon).toHaveProperty('dex_desc');
  //   expect(pokemon).toHaveProperty('types');
  //   expect(pokemon).toHaveProperty('gender');
  //   expect(pokemon).toHaveProperty('abilities');
  //   expect(pokemon).toHaveProperty('form');
  //   expect(pokemon).toHaveProperty('base_stats');
  // });
});
