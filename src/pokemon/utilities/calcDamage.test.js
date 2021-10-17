import { calcDamage, calcDamageRange, calcOtherVars, calcBurnPower } from './calcDamage';
import { BasePokemon } from '../basePokemon';
import { Movedex } from '../../moves/movedex';

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
