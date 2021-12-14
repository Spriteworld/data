import { CalcDamage } from './calcDamage';
import { BasePokemon } from '../basePokemon';
import { Movedex } from '../../moves/movedex';
import { NATURES } from '../index';
import { STATS } from '../../index';

let oldMath = global.Math;
let oldCalcOtherVars = CalcDamage.calcOtherVars;
let oldCalcDamageRange = CalcDamage.calcDamageRange;
afterEach(() => {
  global.Math = oldMath;
  CalcDamage.calcOtherVars = oldCalcOtherVars;
  CalcDamage.calcDamageRange = oldCalcDamageRange;
});

describe('CalcDamage.calcDamage', () => {
  let attkPokemon = new BasePokemon({
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
      {name: 'Volt Switch', pp: {current: 10, max: 10}},
      {name: 'Knock off', pp: {current: 10, max: 10}},
    ]
  });

  let enemyPokemon = new BasePokemon({
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
      {name: 'Power Whip', pp: {current: 10, max: 10}},
    ]
  });
  test('gyarados dragon dance wont do damage against pikachu', () => {
    let move = new Movedex(8).getMoveByName('Dragon Dance');
    expect(CalcDamage.calcDamage(enemyPokemon, attkPokemon, move)).toBe(0);
  });
  test('gyarados earthquake damages pikachu', () => {
    let move = new Movedex(8).getMoveByName('Earthquake');
    expect([430, 436, 440, 446, 452, 456, 462, 466, 472, 476, 482, 486, 492, 496, 502, 508])
      .toContain(CalcDamage.calcDamage(enemyPokemon, attkPokemon, move));
  });
  test('gyarados waterfall damages pikachu', () => {
    let move = new Movedex(8).getMoveByName('waterfall');
    expect([259, 262, 265, 268, 271, 274, 277, 280, 283, 286, 289, 292, 295, 298, 301, 306])
      .toContain(CalcDamage.calcDamage(enemyPokemon, attkPokemon, move));
  });

  test('pikachu volt switch damages gyarados', () => {
    let move = new Movedex(8).getMoveByName('volt switch');
    expect([172, 180, 180, 180, 184, 184, 184, 192, 192, 192, 196, 196, 196, 204, 204, 208])
      .toContain(CalcDamage.calcDamage(attkPokemon, enemyPokemon, move));
  });
  test('pikachu Knock off damages gyarados', () => {
    let move = new Movedex(8).getMoveByName('Knock off');
    expect([56, 56, 57, 58, 58, 59, 60, 60, 61, 62, 62, 63, 64, 64, 65, 66])
      .toContain(CalcDamage.calcDamage(attkPokemon, enemyPokemon, move));
  });

  // test('sonic boom does 20 dmg', () => {
  //   let move = new Movedex(1).getMoveByName('sonic boom');
  //   expect(CalcDamage.calcDamage(attkPokemon, enemyPokemon, move)).toBe(20);
  // });
  // test('dragon rage does 40 dmg', () => {
  //   let move = new Movedex(1).getMoveByName('dragon rage');
  //   expect(CalcDamage.calcDamage(attkPokemon, enemyPokemon, move)).toBe(40);
  // });

});

describe('CalcDamage.calcDamageRange', () => {
  let attkPokemon = new BasePokemon({
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
      {name: 'Volt Switch', pp: {current: 10, max: 10}},
      {name: 'Knock off', pp: {current: 10, max: 10}},
    ]
  });

  let enemyPokemon = new BasePokemon({
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
      {name: 'Power Whip', pp: {current: 10, max: 10}},
    ]
  });
  CalcDamage.calcDamageRange = jest.fn((attkPokemon, enemyPokemon, move) => {
    let range = [];
    let random = 0.85;

    for(let i=0; i<16; i++) {
      range.push(
        CalcDamage.calcDamage(attkPokemon, enemyPokemon, move, {
          random: parseFloat((random+(i/100)).toFixed(2)),
          critical: 1
        })
      );
    }

    return range;
  });
  test('range for gyarados earthquake damages pikachu', () => {
    let move = new Movedex(8).getMoveByName('Earthquake');
    expect(CalcDamage.calcDamageRange(enemyPokemon, attkPokemon, move))
      .toStrictEqual([430, 436, 440, 446, 452, 456, 462, 466, 472, 476, 482, 486, 492, 496, 502, 508]);
  });
  test('range for gyarados waterfall damages pikachu', () => {
    let move = new Movedex(8).getMoveByName('waterfall');
    expect(CalcDamage.calcDamageRange(enemyPokemon, attkPokemon, move))
      .toStrictEqual([259, 262, 265, 268, 271, 274, 277, 280, 283, 286, 289, 292, 295, 298, 301, 306]);
  });

  test('range for pikachu volt switch damages gyarados', () => {
    let move = new Movedex(8).getMoveByName('volt switch');
    expect(CalcDamage.calcDamageRange(attkPokemon, enemyPokemon, move))
      .toStrictEqual([172, 180, 180, 180, 184, 184, 184, 192, 192, 192, 196, 196, 196, 204, 204, 208]);
  });
  test('range for pikachu Knock off damages gyarados', () => {
    let move = new Movedex(8).getMoveByName('Knock off');
    expect(CalcDamage.calcDamageRange(attkPokemon, enemyPokemon, move))
      .toStrictEqual([56, 56, 57, 58, 58, 59, 60, 60, 61, 62, 62, 63, 64, 64, 65, 66]);
  });
});

describe('CalcDamage.calcDamageRange', () => {
  let glaceon = new BasePokemon({
    species: 'glaceon',
    gender: 'male',
    level: 75,
    nature: NATURES.MODEST,
    ability: 'snow cloak',
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
      [STATS.ATTACK]: 100,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 148,
      [STATS.SPECIAL_DEFENSE]: 0,
      [STATS.SPEED]: 252,
    },
    moves: [
      {name: 'Ice Fang', pp: {current: 10, max: 10}, move: {type: 'ICE', power: 65, category: 'PHYSICAL'}}
    ],
    pokemon: {
      types: ['ICE'],
      base_stats: {
        [STATS.HP]: 65,
        [STATS.ATTACK]: 60,
        [STATS.DEFENSE]: 110,
        [STATS.SPECIAL_ATTACK]: 130,
        [STATS.SPECIAL_DEFENSE]: 95,
        [STATS.SPEED]: 65,
      }
    }
  });

  let garchomp = new BasePokemon({
    species: 'garchomp',
    gender: 'male',
    level: 75,
    nature: NATURES.JOLLY,
    ability: 'rough skin',
    item: 'leftovers',
    ivs: {
      [STATS.HP]: 31,
      [STATS.ATTACK]: 31,
      [STATS.DEFENSE]: 21,
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
      {name: 'Waterfall', pp: {current: 10, max: 10}}
    ],
    pokemon: {
      types: ['DRAGON', 'GROUND'],
      base_stats: {
        [STATS.HP]: 108,
        [STATS.ATTACK]: 130,
        [STATS.DEFENSE]: 95,
        [STATS.SPECIAL_ATTACK]: 80,
        [STATS.SPECIAL_DEFENSE]: 85,
        [STATS.SPEED]: 102,
      }
    }
  });
  let move = new Movedex(8).getMoveByName('Ice Fang');
  let expected = {
    '0.85': 168, '0.86': 168, '0.87': 168, '0.88': 172,
    '0.89': 172, '0.90': 172, '0.91': 180, '0.92': 180,
    '0.93': 180, '0.94': 184, '0.95': 184, '0.96': 184,
    '0.97': 192, '0.98': 192, '0.99': 192, '1.00': 196
  };

  // Object.keys(expected).forEach(k => {
  //   test('glaceon w/ icefang against garchomp @ random:'+k+'', () => {
  //     expect(CalcDamage.calcDamage(glaceon, garchomp, move, {
  //       random: parseFloat(k),
  //       critical: 1
  //     })).toBe(expected[k]);
  //   });
  // });
  test('range for glaceon icefang damage garchomp', () => {
    CalcDamage.calcDamageRange = jest.fn((attkPokemon, enemyPokemon, move) => {
      let range = [];
      let random = 0.85;

      for(let i=0; i<16; i++) {
        range.push(
          CalcDamage.calcDamage(attkPokemon, enemyPokemon, move, {
            random: parseFloat((random+(i/100)).toFixed(2)),
            critical: 1
          })
        );
      }

      return range;
    });
    expect(CalcDamage.calcDamageRange(glaceon, garchomp, move))
      .toStrictEqual(Object.values(expected));
  });
});


describe('calcOtherVars', () => {
  let move = new Movedex(8).getMoveByName('Pound');
  test('passing in all 1s gets 1 back', () => {
    expect(CalcDamage.calcOtherVars(1, {random: 1}, move)).toBe(1);
  });
  test('passing in all 0s gets 0 back', () => {
    expect(CalcDamage.calcOtherVars(0, {random: 0}, move)).toBe(0);
  });
});

describe('calcCritChance', () => {
  test('level 1 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.06;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(1)).toBeTruthy();
  });
  test('level 1 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.07;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(1)).toBeFalsy();
  });
  test('level 2 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.12;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(2)).toBeTruthy();
  });
  test('level 2 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.13;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(2)).toBeFalsy();
  });
  test('level 3 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.24;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(3)).toBeTruthy();
  });
  test('level 3 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.26;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(3)).toBeFalsy();
  });
  test('level 4 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.33;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(4)).toBeTruthy();
  });
  test('level 4 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.34;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(4)).toBeFalsy();
  });
  test('level 5 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.49;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(5)).toBeTruthy();
  });
  test('level 5 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.51;
    global.Math = mockMath;
    expect(CalcDamage.calcCritChance(5)).toBeFalsy();
  });
  test('level 6 returns false cause invalid', () => {
    expect(CalcDamage.calcCritChance(6)).toBeFalsy();
  });
});

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
