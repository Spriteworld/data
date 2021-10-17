import { calcDamage, calcDamageRange, calcOtherVars, calcBurnPower } from './calcDamage';
import { BasePokemon } from '../basePokemon';
import { Movedex } from '../../moves/movedex';

let attkPokemon = new BasePokemon({

});

let enemyPokemon = new BasePokemon({

});

describe('calcDamage', () => {
  test('sonic boom does 20 dmg', () => {
    let move = new Movedex(1).getMoveByName('sonic boom');
    expect(calcDamageRange(attkPokemon, enemyPokemon, move)).toBe(20);
  });
  test('dragon rage does 40 dmg', () => {
    let move = new Movedex(1).getMoveByName('dragon rage');
    expect(calcDamageRange(attkPokemon, enemyPokemon, move)).toBe(40);
  });

});

describe('calcOtherVars', () => {
  test('passing in all 1s gets 1 back', () => {
    expect(calOtherVars({random: 1})).toBe(1);
  });
});

describe('calcBurnPower', () => {
  let move = new Movedex(1).getMoveByName('pound');
  test('pokemon is burned', () => {
    let pokemon = {
      modifiers: { burn: 1 },
      ability: { name: 'not guts' },
    };
    expect(calcBurnPower(pokemon, move)).toBe(0.5);
  });
  test('pokemon is burned and has guts', () => {
    let pokemon = {
      modifiers: { burn: 1 },
      ability: { name: 'guts' },
    };
    expect(calcBurnPower(pokemon, move)).toBe(1);
  });
  test('pokemon is burned and uses gust', () => {
    let pokemon = {
      modifiers: { burn: 1 },
      ability: { name: 'not guts' },
    };
    expect(calcBurnPower(pokemon, new Movedex(1).getMoveByName('gust'))).toBe(0.5);
  });
  test('pokemon is burned, has guts and uses gust', () => {
    let pokemon = {
      modifiers: { burn: 1 },
      ability: { name: 'guts' },
    };
    expect(calcBurnPower(pokemon, new Movedex(1).getMoveByName('gust'))).toBe(1);
  });
});
