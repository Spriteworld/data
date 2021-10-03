import { validate } from '../../utilities/validate';
import { statValidation } from './statValidation';
import { NATURES, GROWTH } from '../index';
import { STATS } from '../../index';

/**
 * Calculates all relevant pokemon stats
 * @param  object pokemon
 * @return object
 */
export function calcStats(pokemon) {
  let stats = {};
  Object.keys(STATS).forEach(stat => {
    stats[stat] = calcStat(
      stat,
      pokemon.level,
      pokemon.nature,
      pokemon.pokemon.base_stats,
      pokemon.ivs,
      pokemon.evs
    );
  });

  return stats;
}

/**
 * Calculates a pokemon stat
 * @param  string stat STATS
 * @param  int level level of pokemon
 * @param  string nature NATURES
 * @param  object baseStats
 * @param  object ivs
 * @param  object evs
 * @return int
 */
export function calcStat(stat, level, nature, baseStats, ivs, evs) {
  stat = stat.toUpperCase();
  const errors = validate({stat, level, nature, baseStats, ivs, evs}, {
    'stat': {
      'test': value => Object.values(STATS).includes(value),
      'error': 'stat is invalid!',
    },
    'baseStats': {
      'test': value => statValidation(value, 'baseStats'),
      'error': 'baseStats doesnt have all necessary keys',
    },
    'ivs': {
      'test': value => statValidation(value, 'ivs'),
      'error': 'ivs doesnt have all necessary keys',
    },
    'evs': {
      'test': value => statValidation(value, 'evs'),
      'error': 'evs doesnt have all necessary keys',
    }
  });

  if (errors.length > 0) {
    for (const { message } of errors) {
      throw message;
    }
  }

  level = parseInt(level) || 1;
  if (level > 100) {
    level = 100;
  }
  let baseIvEv = Math.floor(
    2 * parseInt(baseStats[stat])
    + parseInt(ivs[stat])
    + Math.floor((parseInt(evs[stat]) / 4))
  );

  let natureCalc = getNatureWeighting(stat, nature || NATURES.HARDY.name);

  if (stat === STATS.HP) {
    return Math.floor(baseIvEv * level / 100 + level + 10);
  }

  return Math.floor(Math.floor(baseIvEv * level / 100 + 5) * natureCalc);
}

/**
 *
 * @param  string nature NATURES
 * @param  string stat STATS
 * @return float
 */
export function getNatureWeighting(stat, nature) {
  if (typeof nature === 'object') {
    nature = nature.name;
  }
  nature = nature.toUpperCase();
  if (Object.values(NATURES).map(nat => nat.name).includes(nature) === false) {
    throw 'Nature "' + nature + '" is invalid!';
  }
  let natureEffect = NATURES[nature];

  if (natureEffect.increase === natureEffect.decrease) {
    return 1;
  }
  if (natureEffect.increase.toUpperCase() === stat.toUpperCase()) {
    return 1.1;
  }
  if (natureEffect.decrease.toUpperCase() === stat.toUpperCase()) {
    return 0.9;
  }
  return 1;
}
