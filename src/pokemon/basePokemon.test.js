import { BasePokemon } from './basePokemon';
import { STATS } from '../index';
import { NATURES, GROWTH } from './index';
import { POKEDEX } from '../pokedex/rby';
import { MOVES } from '../moves/gen_1';

describe('BasePokemon object can handle data', () => {
  let butterfree = {
    species: POKEDEX.BUTTERFREE,
    level: 53,
    growth: GROWTH.FAST,
    nature: NATURES.MODEST,
    ivs: {
      [STATS.HP]: 28,
      [STATS.ATTACK]: 4,
      [STATS.DEFENSE]: 17,
      [STATS.SPECIAL_ATTACK]: 30,
      [STATS.SPECIAL_DEFENSE]: 27,
      [STATS.SPEED]: 31,
    },
    evs: {
      [STATS.HP]: 4,
      [STATS.ATTACK]: 0,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 254,
      [STATS.SPECIAL_DEFENSE]: 0,
      [STATS.SPEED]: 252,
    },
  };
  test('init', () => {
    let testPokemon = new BasePokemon(butterfree);
    expect(testPokemon).toBeObject();
    expect(testPokemon).toContainKey('species');
    expect(testPokemon).toContainKey('level');
    expect(testPokemon).toContainKey('nature');
    expect(testPokemon).toContainKey('stats');
    expect(testPokemon).toContainKey('ivs');
    expect(testPokemon).toContainKey('evs');
    expect(testPokemon).toContainKey('pokemon');

  });
  test('catches invalid nature', () => {
    let testPokemon = {...butterfree, nature: 'test'};
    expect(() => (new BasePokemon(testPokemon))).toThrow('Nature "TEST" is invalid!');
  });
});

// test('calcStats need to be careful with off-by-one errors', () => {
//   let pokemon = new BasePokemon({
//     pid: 1,
//     originalTrainer: 'Linky',
//     trainerId: 15429,
//     nickname: 'Kyogre',
//     species: 382,
//     level: 41,
//     growth: GROWTH.SLOW,
//     nature: NATURES.HARDY,
//     currentHp: 76,
//     happiness: 77,
//     pokemon: {
//       base_stats: {
//         [STATS.HP]: 100,
//         [STATS.ATTACK]: 100,
//         [STATS.DEFENSE]: 90,
//         [STATS.SPECIAL_ATTACK]: 150,
//         [STATS.SPECIAL_DEFENSE]: 140,
//         [STATS.SPEED]: 90,
//       },
//     },
//     ivs: {
//       [STATS.HP]: 22,
//       [STATS.ATTACK]: 22,
//       [STATS.DEFENSE]: 21,
//       [STATS.SPECIAL_ATTACK]: 1,
//       [STATS.SPECIAL_DEFENSE]: 5,
//       [STATS.SPEED]: 12,
//     },
//     evs: {
//       [STATS.HP]: 11,
//       [STATS.ATTACK]: 18,
//       [STATS.DEFENSE]: 17,
//       [STATS.SPECIAL_ATTACK]: 26,
//       [STATS.SPECIAL_DEFENSE]: 8,
//       [STATS.SPEED]: 9,
//     },
//     exp: 91308,
//     isShiny: false,
//   });
//    let expected = {
//     [STATS.HP]: 142,
//     [STATS.ATTACK]: 97,
//     [STATS.DEFENSE]: 89,
//     [STATS.SPECIAL_ATTACK]: 130,
//     [STATS.SPECIAL_DEFENSE]: 122,
//     [STATS.SPEED]: 84,
//   };

//   expect(pokemon).toHaveProperty('stats');
//   expect(pokemon.stats).toMatchObject(expected);
//   expect(pokemon.getCalculatedStats()).toMatchObject(expected);
// });


test('basePokemon can grab pokemon definition', () => {
  let pokemon = new BasePokemon({
    pid: 1,
    originalTrainer: 'Linky',
    trainerId: 15429,
    nickname: 'Bulbasaur',
    species: POKEDEX.BULBASAUR,
    nature: NATURES.HARDY,
    currentHp: 76,
    happiness: 77,
    ivs: {
      [STATS.HP]: 22,
      [STATS.ATTACK]: 22,
      [STATS.DEFENSE]: 21,
      [STATS.SPECIAL_ATTACK]: 1,
      [STATS.SPECIAL_DEFENSE]: 5,
      [STATS.SPEED]: 12,
    },
    evs: {
      [STATS.HP]: 11,
      [STATS.ATTACK]: 18,
      [STATS.DEFENSE]: 17,
      [STATS.SPECIAL_ATTACK]: 26,
      [STATS.SPECIAL_DEFENSE]: 8,
      [STATS.SPEED]: 9,
    },
    exp: 91308,
    isShiny: false,
  });

  let expected = POKEDEX.BULBASAUR;

  expect(pokemon).toHaveProperty('pokemon');
  expect(pokemon.pokemon).toMatchObject(expected);
  expect(pokemon.getPokemonDefinition()).toMatchObject(expected);
  expect(pokemon.getTypes()).toMatchObject(expected.types);
  expect(pokemon.getEggGroups()).toMatchObject(expected.egg_groups);
});

test('basePokemon can grab pokemon move definitions', () => {
  let pokemon = new BasePokemon({
    pid: 1,
    originalTrainer: 'Linky',
    trainerId: 15429,
    nickname: 'Bulbasaur',
    species: POKEDEX.BULBASAUR,
    nature: NATURES.HARDY,
    currentHp: 76,
    happiness: 77,
    moves: [
      {
        name: 'Pound',
        pp: {max: 10, current: 10}
      },
      {
        name: 'Scratch',
        pp: {max: 10, current: 10}
      }
    ],
    ivs: {
      [STATS.HP]: 22,
      [STATS.ATTACK]: 22,
      [STATS.DEFENSE]: 21,
      [STATS.SPECIAL_ATTACK]: 1,
      [STATS.SPECIAL_DEFENSE]: 5,
      [STATS.SPEED]: 12,
    },
    evs: {
      [STATS.HP]: 11,
      [STATS.ATTACK]: 18,
      [STATS.DEFENSE]: 17,
      [STATS.SPECIAL_ATTACK]: 26,
      [STATS.SPECIAL_DEFENSE]: 8,
      [STATS.SPEED]: 9,
    },
    exp: 91308,
    isShiny: false,
  });

  let expected = [
    {
      name: 'Pound',
      pp: {max: 10, current: 10},
      move: MOVES[0]
    },
    {
      name: 'Scratch',
      pp: {max: 10, current: 10},
      move: MOVES[9]
    }
  ];

  expect(pokemon).toHaveProperty('moves');
  expect(pokemon.moves).toMatchObject(expected);
});
