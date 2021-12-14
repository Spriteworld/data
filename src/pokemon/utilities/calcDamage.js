import * as MOVE_TYPES from '../../moves/definitions';
import * as TYPES from '../../types/definitions';
import { gen_6, calcTypeEffectiveness } from '../../types';
import { STATS } from '../../index';
import { random, percentChance } from '../../utilities';

/**
 * Calculates all damages for a pokemon
 * @return int Damage to inflict
 */
const calcDamage = (attkPokemon, enemyPokemon, move, vars) => {
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

  let others = {...{
    critical: CalcDamage.calcCritChance(attkPokemon.modifiers.critical) ? 2 : 1,
    stab: attkPokemon.types.includes(move.type) ? 1.5 : 1,
    typeEffectiveness: calcTypeEffectiveness(move.type, enemyPokemon.types, gen_6),
    burn: CalcDamage.calcBurnPower(attkPokemon.modifiers.burn, attkPokemon.ability.name, move.category === MOVE_TYPES.PHYSICAL),
  }, ...vars};

  let Step1 = (Math.trunc((2 * level) / 5) + 2) * power;
  let Step2 = Math.trunc(Step1 * (attackStat / defenceStat));
  let Step3 = Math.trunc(Step2 / 50) + 2;
  let Step4 = CalcDamage.calcOtherVars(Step3, others, move);

  return Step4;
}

/**
 * Calculates damage ranges for a pokemon move
 * @return array Damage range
 */
const calcDamageRange = (attkPokemon, enemyPokemon, move) => {
  let range = [];
  let random = 0.85;

  for(let i=0; i<16; i++) {
    range.push(
      CalcDamage.calcDamage(attkPokemon, enemyPokemon, move, {
        random: parseFloat((random+(i/100)).toFixed(2))
      })
    );
  }

  return range;
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
    stab: 1,
    typeEffectiveness: 1,
    burn: 1,
    random: parseFloat(random(0.85, 1).toFixed(2)),
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
  switch(critLevel) {
    case 1: return percentChance(0, 6.25); break;
    case 2: return percentChance(0, 12.5); break;
    case 3: return percentChance(0, 25.0); break;
    case 4: return percentChance(0, 33.3); break;
    case 5: return percentChance(0, 50.0); break;
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
