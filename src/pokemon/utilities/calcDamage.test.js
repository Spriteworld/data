import CalcDamage from './calcDamage';
import { BasePokemon } from '../basePokemon';
import { Movedex } from '../../moves/movedex';
import { NATURES } from '../index';
import { STATS } from '../../index';
import * as GAMES from '../../games';

let oldMath = global.Math;
let oldCalcOtherVars = CalcDamage.calcOtherVars;
let oldCalcDamageRange = CalcDamage.calculateRange;
afterEach(() => {
  global.Math = oldMath;
  CalcDamage.calcOtherVars = oldCalcOtherVars;
  CalcDamage.calculateRange = oldCalcDamageRange;
});

describe('CalcDamage.calculate', () => {
  let pikachu = new BasePokemon({
    game: GAMES.POKEMON_FIRE_RED,
    species: 'pikachu',
    gender: 'male',
    level: 100,
    nature: NATURES.NAUGHTY,
    ability: 'static',
    item: null,
    ivs: {
      [STATS.HP]: 31,
      [STATS.ATTACK]: 31,
      [STATS.DEFENSE]: 31,
      [STATS.SPECIAL_ATTACK]: 31,
      [STATS.SPECIAL_DEFENSE]: 31,
      [STATS.SPEED]: 31,
    },
    evs: {
      [STATS.HP]: 0,
      [STATS.ATTACK]: 252,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 4,
      [STATS.SPECIAL_DEFENSE]: 0,
      [STATS.SPEED]: 252,
    },
    moves: [
      {name: 'Fake Out', pp: {current: 10, max: 10}},
      {name: 'Extreme Speed', pp: {current: 10, max: 10}},
      {name: 'Volt Tackle', pp: {current: 10, max: 10}},
      {name: 'Knock off', pp: {current: 10, max: 10}},
    ]
  });
  let gyarados = new BasePokemon({
    game: GAMES.POKEMON_FIRE_RED,
    species: 'gyarados',
    gender: 'male',
    level: 100,
    nature: NATURES.JOLLY,
    ability: 'moxie',
    item: 'leftovers',
    ivs: {
      [STATS.HP]: 31,
      [STATS.ATTACK]: 31,
      [STATS.DEFENSE]: 31,
      [STATS.SPECIAL_ATTACK]: 31,
      [STATS.SPECIAL_DEFENSE]: 31,
      [STATS.SPEED]: 31,
    },
    evs: {
      [STATS.HP]: 0,
      [STATS.ATTACK]: 252,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 0,
      [STATS.SPECIAL_DEFENSE]: 4,
      [STATS.SPEED]: 252,
    },
    moves: [
      {name: 'Waterfall', pp: {current: 10, max: 10}},
      {name: 'Dragon Dance', pp: {current: 10, max: 10}},
      {name: 'Earthquake', pp: {current: 10, max: 10}},
      {name: 'Dragon Rage', pp: {current: 10, max: 10}},
    ]
  });

  test('gyarados dragon dance wont do damage against pikachu', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('dragon dance');
    expect(CalcDamage.calculate(gyarados, pikachu, move, { critical: 1 }).damage).toBe(0);
  });
  test('gyarados earthquake damages pikachu', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('earthquake');
    expect([521, 528, 534, 540, 546, 552, 558, 564, 571, 577, 583, 589, 595, 601, 607, 614])
      .toContain(CalcDamage.calculate(gyarados, pikachu, move, { critical: 1 }).damage);
  });
  test('gyarados waterfall damages pikachu', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('waterfall');
    expect([117, 118, 120, 121, 122, 124, 125, 126, 128, 129, 131, 132, 133, 135, 136, 138])
      .toContain(CalcDamage.calculate(gyarados, pikachu, move, { critical: 1 }).damage);
  });

  test('pikachu volt tackle damages gyarados', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('volt tackle');
    expect([306, 309, 313, 316, 320, 324, 327, 331, 334, 338, 342, 345, 349, 352, 356, 360])
      .toContain(CalcDamage.calculate(pikachu, gyarados, move, { critical: 1 }).damage);
  });
  test('pikachu Knock off damages gyarados', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('Knock off');
    expect([9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11])
      .toContain(CalcDamage.calculate(pikachu, gyarados, move, { critical: 1 }).damage);
  });

  // test('sonic boom does 20 dmg', () => {
  //   let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('sonic boom');
  //   expect(CalcDamage.calculate(pikachu, gyarados, move)).toBe(20);
  // });
  // test('dragon rage does 40 dmg', () => {
  //   let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('dragon rage');
  //   expect(CalcDamage.calculate(pikachu, gyarados, move)).toBe(40);
  // });

});

describe('CalcDamage.calculateRange', () => {
  let pikachu = new BasePokemon({
    game: GAMES.POKEMON_FIRE_RED,
    species: 'pikachu',
    gender: 'male',
    level: 100,
    nature: NATURES.NAUGHTY,
    ability: 'static',
    item: null,
    ivs: {
      [STATS.HP]: 31,
      [STATS.ATTACK]: 31,
      [STATS.DEFENSE]: 31,
      [STATS.SPECIAL_ATTACK]: 31,
      [STATS.SPECIAL_DEFENSE]: 31,
      [STATS.SPEED]: 31,
    },
    evs: {
      [STATS.HP]: 0,
      [STATS.ATTACK]: 252,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 4,
      [STATS.SPECIAL_DEFENSE]: 0,
      [STATS.SPEED]: 252,
    },
    moves: [
      {name: 'Fake Out', pp: {current: 10, max: 10}},
      {name: 'Extreme Speed', pp: {current: 10, max: 10}},
      {name: 'Volt Tackle', pp: {current: 10, max: 10}},
      {name: 'Knock off', pp: {current: 10, max: 10}},
    ]
  });

  let gyarados = new BasePokemon({
    game: GAMES.POKEMON_FIRE_RED,
    species: 'gyarados',
    gender: 'male',
    level: 100,
    nature: NATURES.JOLLY,
    ability: 'moxie',
    item: 'leftovers',
    ivs: {
      [STATS.HP]: 31,
      [STATS.ATTACK]: 31,
      [STATS.DEFENSE]: 31,
      [STATS.SPECIAL_ATTACK]: 31,
      [STATS.SPECIAL_DEFENSE]: 31,
      [STATS.SPEED]: 31,
    },
    evs: {
      [STATS.HP]: 0,
      [STATS.ATTACK]: 252,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 0,
      [STATS.SPECIAL_DEFENSE]: 4,
      [STATS.SPEED]: 252,
    },
    moves: [
      {name: 'Waterfall', pp: {current: 10, max: 10}},
      {name: 'Dragon Dance', pp: {current: 10, max: 10}},
      {name: 'Earthquake', pp: {current: 10, max: 10}},
      {name: 'Dragon Rage', pp: {current: 10, max: 10}},
    ]
  });
  let newCalcDamageRange = jest.fn((pikachu, gyarados, move) => {
    let range = [];
    let random = 0.85;

    for(let i=0; i<16; i++) {
      range.push(
        CalcDamage.calculate(pikachu, gyarados, move, {
          random: parseFloat((random+(i/100)).toFixed(2)),
          critical: 1
        }).damage
      );
    }

    return range;
  });
  test('range for gyarados earthquake damages pikachu', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('Earthquake');
    CalcDamage.calculateRange = newCalcDamageRange;
    expect(CalcDamage.calculateRange(gyarados, pikachu, move))
      .toStrictEqual([521, 528, 534, 540, 546, 552, 558, 564, 571, 577, 583, 589, 595, 601, 607, 614]);
  });
  test('range for gyarados waterfall damages pikachu', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('waterfall');
    CalcDamage.calculateRange = newCalcDamageRange;
    expect(CalcDamage.calculateRange(gyarados, pikachu, move))
      .toStrictEqual([117, 118, 120, 121, 122, 124, 125, 126, 128, 129, 131, 132, 133, 135, 136, 138]);
  });

  test('range for pikachu volt tackle damages gyarados', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('volt tackle');
    CalcDamage.calculateRange = newCalcDamageRange;
    expect(CalcDamage.calculateRange(pikachu, gyarados, move))
      .toStrictEqual([306, 309, 313, 316, 320, 324, 327, 331, 334, 338, 342, 345, 349, 352, 356, 360]);
  });
  test('range for pikachu Knock off damages gyarados', () => {
    let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('Knock off');
    CalcDamage.calculateRange = newCalcDamageRange;
    expect(CalcDamage.calculateRange(pikachu, gyarados, move))
      .toStrictEqual([9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11]);
  });
});

// describe('CalcDamage.calculateRange', () => {
//   let glaceon = new BasePokemon({
//     game: GAMES.POKEMON_PLATINUM,
//     species: 'glaceon',
//     gender: 'male',
//     level: 75,
//     nature: NATURES.MODEST,
//     ability: 'snow cloak',
//     item: null,
//     ivs: {
//       [STATS.HP]: 31,
//       [STATS.ATTACK]: 31,
//       [STATS.DEFENSE]: 31,
//       [STATS.SPECIAL_ATTACK]: 31,
//       [STATS.SPECIAL_DEFENSE]: 31,
//       [STATS.SPEED]: 31,
//     },
//     evs: {
//       [STATS.HP]: 0,
//       [STATS.ATTACK]: 100,
//       [STATS.DEFENSE]: 0,
//       [STATS.SPECIAL_ATTACK]: 148,
//       [STATS.SPECIAL_DEFENSE]: 0,
//       [STATS.SPEED]: 252,
//     },
//     moves: [
//       {name: 'Ice Fang', pp: {current: 10, max: 10}, move: {type: 'ICE', power: 65, category: 'PHYSICAL'}}
//     ]
//   });

//   let garchomp = new BasePokemon({
//     game: GAMES.POKEMON_PLATINUM,
//     species: 'garchomp',
//     gender: 'male',
//     level: 75,
//     nature: NATURES.JOLLY,
//     ability: 'rough skin',
//     item: 'leftovers',
//     ivs: {
//       [STATS.HP]: 31,
//       [STATS.ATTACK]: 31,
//       [STATS.DEFENSE]: 21,
//       [STATS.SPECIAL_ATTACK]: 31,
//       [STATS.SPECIAL_DEFENSE]: 31,
//       [STATS.SPEED]: 31,
//     },
//     evs: {
//       [STATS.HP]: 0,
//       [STATS.ATTACK]: 252,
//       [STATS.DEFENSE]: 0,
//       [STATS.SPECIAL_ATTACK]: 0,
//       [STATS.SPECIAL_DEFENSE]: 4,
//       [STATS.SPEED]: 252,
//     },
//     moves: [
//       {name: 'Waterfall', pp: {current: 10, max: 10}}
//     ]
//   });
//   let move = new Movedex(GAMES.POKEMON_PLATINUM).getMoveByName('Ice Fang');

//   let expected = {
//     '0.85': 168, '0.86': 168, '0.87': 168, '0.88': 172,
//     '0.89': 172, '0.90': 172, '0.91': 180, '0.92': 180,
//     '0.93': 180, '0.94': 184, '0.95': 184, '0.96': 184,
//     '0.97': 192, '0.98': 192, '0.99': 192, '1.00': 196
//   };

//   test('range for glaceon icefang damage garchomp', () => {
//     CalcDamage.calculateRange = jest.fn((attkPkmn, enemyPkmn, move) => {
//       let range = [];
//       let random = 0.85;

//       for(let i=0; i<16; i++) {
//         range.push(
//           CalcDamage.calculate(attkPkmn, enemyPkmn, move, {
//             random: parseFloat((random+(i/100)).toFixed(2)),
//             critical: 1
//           }).damage
//         );
//       }

//       return range;
//     });
//     expect(CalcDamage.calculateRange(glaceon, garchomp, move))
//       .toStrictEqual(Object.values(expected));
//   });
// });


describe('calcOtherVars', () => {
  let move = new Movedex(GAMES.POKEMON_FIRE_RED).getMoveByName('Pound');
  test('passing in all 1s gets 1 back', () => {
    expect(CalcDamage.calcOtherVars(1, {random: 1}, move)).toBe(1);
  });
  test('passing in all 0s gets 0 back', () => {
    expect(CalcDamage.calcOtherVars(0, {random: 0}, move)).toBe(0);
  });
});

// describe('calcCritChance', () => {
//   test('level 1 returns true when random is under threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.06;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(1)).toBeTruthy();
//   });
//   test('level 1 returns false when random is over threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.07;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(1)).toBeFalsy();
//   });
//   test('level 2 returns true when random is under threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.12;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(2)).toBeTruthy();
//   });
//   test('level 2 returns false when random is over threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.13;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(2)).toBeFalsy();
//   });
//   test('level 3 returns true when random is under threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.24;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(3)).toBeTruthy();
//   });
//   test('level 3 returns false when random is over threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.26;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(3)).toBeFalsy();
//   });
//   test('level 4 returns true when random is under threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.33;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(4)).toBeTruthy();
//   });
//   test('level 4 returns false when random is over threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.34;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(4)).toBeFalsy();
//   });
//   test('level 5 returns true when random is under threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.49;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(5)).toBeTruthy();
//   });
//   test('level 5 returns false when random is over threshold', () => {
//     let mockMath = Object.create(global.Math);
//     mockMath.random = () => 0.51;
//     global.Math = mockMath;
//     expect(CalcDamage.calcCritChance(5)).toBeFalsy();
//   });
//   test('level 6 returns false cause invalid', () => {
//     expect(CalcDamage.calcCritChance(6)).toBeFalsy();
//   });
// });

describe('calcBurnPower', () => {
  test('pokemon is burned', () => {
    expect(CalcDamage.calcBurnPower(true, 'not guts', true)).toBe(0.5);
  });
  test('pokemon is burned and has guts', () => {
    expect(CalcDamage.calcBurnPower(true, 'guts', true)).toBe(1);
  });
  test('pokemon is burned and uses a special move', () => {
    expect(CalcDamage.calcBurnPower(true, 'not guts', false)).toBe(1);
  });
  test('pokemon is burned, has guts and uses a special move', () => {
    expect(CalcDamage.calcBurnPower(true, 'guts', false)).toBe(1);
  });
  test('pokemon is burned, has guts and uses a physical move', () => {
    expect(CalcDamage.calcBurnPower(true, 'guts', true)).toBe(1);
  });
  test('pokemon is burned and uses a physical move', () => {
    expect(CalcDamage.calcBurnPower(true, 'not guts', true)).toBe(0.5);
  });
  test('pokemon is burned and uses a special move', () => {
    expect(CalcDamage.calcBurnPower(true, 'not guts', false)).toBe(1);
  });
  test('pokemon is not burned', () => {
    expect(CalcDamage.calcBurnPower(false, 'not guts', true)).toBe(1);
  });
});
