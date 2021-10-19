import * as MOVE_TYPES from '../../moves/definitions';
import * as TYPES from '../../types/definitions';
import { gen_6, calcTypeEffectiveness } from '../../types';
import { STATS } from '../../index';
import { round, random } from '../../utilities';

/**
 * Calculates all damages for a pokemon
 * @return {[type]} [description]
 */
const calcDamage = (pokemon) => {

}

/**
 * Calculates damage ranges for a pokemon move
 * @return array Damage range
 */
const calcDamageRange = (attkPokemon, enemyPokemon, move) => {
  if (move.category === MOVE_TYPES.STATUS) {
    return 0;
  }

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

  let others = {
    critical: CalcDamage.calcCritChance(attkPokemon.modifiers.critical) ? 2 : 1,
    stab: attkPokemon.types.includes(move.type) ? 1.5 : 1,
    type: calcTypeEffectiveness(move.type, enemyPokemon.types, gen_6),
    burn: CalcDamage.calcBurnPower(attkPokemon.modifiers.burn, attkPokemon.ability.name, move.category === MOVE_TYPES.PHYSICAL),
  };

  let LevelStep = (Math.trunc((2 * level) / 5) + 2) * power;
  let LevelAtkDef = Math.trunc(LevelStep * (attackStat / defenceStat));
  let Total = Math.trunc(LevelAtkDef / 50) + 2;
  let TotalOther = CalcDamage.calcOtherVars(Total, others, move);

  return TotalOther;
}

/**
 * calculate the "other" portion of the damage calcs
 * @param  object vars
 * @return int
 */
const calcOtherVars = (total, vars, move) => {
  let others = {...{
    targets: 1,
    weather: 1,
    critical: 1,
    random: parseFloat(random(0.85, 1).toFixed(2)),
    stab: 1,
    typeEffectiveness: 1,
    burn: 1,
  }, ...vars};
  if (others.critical == 1.5) {
    console.log('CRITICAL HIT! ('+move.name+')');
  }

  Object.values(others).forEach((value) => {
    total = Math.trunc(total * value);
  });
  return total;
}

/**
 * calculate the chance of a crit
 * @param  int critLevel
 * @return bool
 */
const calcCritChance = (critLevel=1) => {
  let chance = Math.random() * 100;
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
const calcBurnPower = (burned, abilityName, moveIsPhysical) => {
  if (burned && abilityName !== 'guts' && moveIsPhysical) {
    return 0.5;
  }

  return 1;
}


export const CalcDamage = {
  calcDamage,
  calcDamageRange,
  calcOtherVars,
  calcCritChance,
  calcBurnPower,
};
