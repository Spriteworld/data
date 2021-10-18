import { calcDamage, calcDamageRange, calcOtherVars, calcCritChance, calcBurnPower } from './calcDamage';
import { BasePokemon } from '../basePokemon';
import { Movedex } from '../../moves/movedex';

let oldMath = global.Math;
afterEach(() => {
  global.Math = oldMath;
});

// let attkPokemon = new BasePokemon({

// });

// let enemyPokemon = new BasePokemon({

// });

// describe('calcDamage', () => {
//   test('sonic boom does 20 dmg', () => {
//     let move = new Movedex(1).getMoveByName('sonic boom');
//     expect(calcDamageRange(attkPokemon, enemyPokemon, move)).toBe(20);
//   });
//   test('dragon rage does 40 dmg', () => {
//     let move = new Movedex(1).getMoveByName('dragon rage');
//     expect(calcDamageRange(attkPokemon, enemyPokemon, move)).toBe(40);
//   });

// });

describe('calcOtherVars', () => {
  test('passing in all 1s gets 1 back', () => {
    expect(calcOtherVars({random: 1})).toBe(1);
  });
  test('passing in all 0s gets 0 back', () => {
    expect(calcOtherVars({random: 0})).toBe(0);
  });
});

describe('calcCritChance', () => {
  test('level 1 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.06;
    global.Math = mockMath;
    expect(calcCritChance(1)).toBeTruthy();
  });
  test('level 1 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.07;
    global.Math = mockMath;
    expect(calcCritChance(1)).toBeFalsy();
  });
  test('level 2 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.12;
    global.Math = mockMath;
    expect(calcCritChance(2)).toBeTruthy();
  });
  test('level 2 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.13;
    global.Math = mockMath;
    expect(calcCritChance(2)).toBeFalsy();
  });
  test('level 3 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.24;
    global.Math = mockMath;
    expect(calcCritChance(3)).toBeTruthy();
  });
  test('level 3 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.26;
    global.Math = mockMath;
    expect(calcCritChance(3)).toBeFalsy();
  });
  test('level 4 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.33;
    global.Math = mockMath;
    expect(calcCritChance(4)).toBeTruthy();
  });
  test('level 4 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.34;
    global.Math = mockMath;
    expect(calcCritChance(4)).toBeFalsy();
  });
  test('level 5 returns true when random is under threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.49;
    global.Math = mockMath;
    expect(calcCritChance(5)).toBeTruthy();
  });
  test('level 5 returns false when random is over threshold', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.51;
    global.Math = mockMath;
    expect(calcCritChance(5)).toBeFalsy();
  });
  test('level 6 returns false cause invalid', () => {
    expect(calcCritChance(6)).toBeFalsy();
  });
});

describe('calcBurnPower', () => {
  test('pokemon is burned', () => {
    expect(calcBurnPower(true, 'not guts', true)).toBe(0.5);
  });
  test('pokemon is burned and has guts', () => {
    expect(calcBurnPower(true, 'guts', true)).toBe(1);
  });
  test('pokemon is burned and uses a special move', () => {
    expect(calcBurnPower(true, 'not guts', false)).toBe(1);
  });
  test('pokemon is burned, has guts and uses a special move', () => {
    expect(calcBurnPower(true, 'guts', false)).toBe(1);
  });
  test('pokemon is burned, has guts and uses a physical move', () => {
    expect(calcBurnPower(true, 'guts', true)).toBe(1);
  });
  test('pokemon is burned and uses a physical move', () => {
    expect(calcBurnPower(true, 'not guts', true)).toBe(0.5);
  });
  test('pokemon is burned and uses a special move', () => {
    expect(calcBurnPower(true, 'not guts', false)).toBe(1);
  });
  test('pokemon is not burned', () => {
    expect(calcBurnPower(false, 'not guts', true)).toBe(1);
  });
});
