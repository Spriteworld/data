import * as MOVE_TYPES from '../../moves/definitions';
import { gen_6, calcTypeEffectiveness } from '../../types';
import { STATS } from '../../index';
import { random, percentChance } from '../../utilities';

export default class CalcDamage {

  /**
   * Calculates all damages for a pokemon
   * @return object Modifiers and Damage
   */
  static calculate(attkPokemon, enemyPokemon, move, vars) {
    // console.group('calcDamage');
    if (move.category === MOVE_TYPES.STATUS) {
      return {
        damage: 0
      };
    }
    // console.log('attkPokemon', attkPokemon);
    // console.log('move', move);
    // console.log('enemyPokemon', enemyPokemon);

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
      critical: this.calcCritChance(attkPokemon.modifiers.critical) ? 2 : 1,
      stab: attkPokemon.types.includes(move.type) ? 1.5 : 1,
      typeEffectiveness: calcTypeEffectiveness(move.type, enemyPokemon.types, gen_6),
      burn: this.calcBurnPower(attkPokemon.modifiers.burn, attkPokemon.ability.name, move.category === MOVE_TYPES.PHYSICAL),
    }, ...vars};
    // console.log('others', others);

    let Step1, Step2, Step3, Step4;
    Step1 = (Math.trunc((2 * level) / 5) + 2) * power;
    Step2 = Math.trunc(Step1 * (attackStat / defenceStat));
    Step3 = Math.trunc(Step2 / 50) + 2;
    Step4 = this.calcOtherVars(Step3, others, move);

      // console.log('damage', Step4);
    // console.groupEnd();
    return {
      damage: Step4,
      ...others
    };
  }

  /**
   * Calculates damage ranges for a pokemon move
   * @return array Damage range
   */
  static calcDamageRange(attkPokemon, enemyPokemon, move) {
    let range = [];
    let random = 0.85;

    for(let i=0; i<16; i++) {
      range.push(
        this.calculate(attkPokemon, enemyPokemon, move, {
          random: parseFloat((random+(i/100)).toFixed(2))
        }).damage
      );
    }

    return range;
  }

  /**
   * calculate the "other" portion of the damage calcs
   * @param  object vars
   * @return int
   */
  static calcOtherVars(total, vars, move) {
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
  static calcCritChance(critLevel=1) {
    switch(critLevel) {
      case 1: return percentChance(6.25); break;
      case 2: return percentChance(12.5); break;
      case 3: return percentChance(25.0); break;
      case 4: return percentChance(33.3); break;
      case 5: return percentChance(50.0); break;
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
  static calcBurnPower(burned, abilityName, moveIsPhysical) {
    if (burned && abilityName !== 'guts' && moveIsPhysical) {
      return 0.5;
    }

    return 1;
  }

};
