import * as MOVE_TYPES from '../../moves/definitions';
import * as TYPES from '../../types/definitions';
import { gen_6, calcTypeEffectiveness } from '../../types';
import { STATS } from '../../index';
import { round, randomInt } from '../../utilities';

/**
 * Calculates all damages for a pokemon
 * @return {[type]} [description]
 */
export function calcDamage(pokemon) {

}

/**
 * Calculates damage ranges for a pokemon move
 * @return array Damage range
 */
export function calcDamageRange(attkPokemon, enemyPokemon, move) {
  let level = attkPokemon.level;
  let attackStat = attkPokemon.stats[
    move.category === MOVE_TYPES.PHYSICAL
      ? STATS.ATTACK
      : STATS.SPECIAL_ATTACK
  ];
  let defenceStat = enemyPokemon.stats[
    move.category === MOVE_TYPES.PHYSICAL
      ? STATS.DEFENSE
      : STATS.SPECIAL_DEFENSE
  ];
  let power = move.power;

  let other = calcOtherVars({
    critical: calcCritChance(attkPokemon.modifiers.critical) ? 1.5 : 1,
    stab: attkPokemon.types.includes(move.type) ? 1.5 : 1,
    type: calcTypeEffectiveness(move.type, enemyPokemon.types, gen_6),
    burn: calcBurnPower(attkPokemon.modifiers.burn, attkPokemon.ability.name, move.category === MOVE_TYPES.PHYSICAL),
  });

}

/**
 * calculate the "other" portion of the damage calcs
 * @param  object vars
 * @return int
 */
export function calcOtherVars(vars) {
  let others = {...{
    targets: 1,
    weather: 1,
    critical: 1,
    random: round(randomInt(0.85, 1), 2),
    stab: 1,
    typeEffectiveness: 1,
    burn: 1,
  }, ...vars};

  return Object.values(others).reduce((i, j) => i * j);
}

/**
 * calculate the chance of a crit
 * @param  int critLevel
 * @return bool
 */
export function calcCritChance(critLevel=1) {
  let chance = Math.random();
  switch(critLevel) {
    case 1: return (chance <= 6.25); break;
    case 2: return (chance <= 12.5); break;
    case 3: return (chance <= 25.0); break;
    case 4: return (chance <= 33.3); break;
    case 5: return (chance <= 50.0); break;
  }
  return false;
}

/**
 * calculate the burn power
 * @param  bool burned
 * @param  string abilityName
 * @param  bool moveIsPhysical
 * @return float
 */
export function calcBurnPower(burned, abilityName, moveIsPhysical) {
  if (burned && abilityName !== 'guts' && moveIsPhysical) {
    return 0.5;
  }

  return 1;
}
