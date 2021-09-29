import { NATURES } from '../index';
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
      pokemon.baseStats,
      pokemon.ivs,
      pokemon.evs
    );
  });

  return stats;
};

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
  if (Object.values(STATS).includes(stat) === false) {
    throw 'Stat "' + stat + '" is invalid!';
  }
  if (Object.keys(baseStats).length != 6) {
    throw 'baseStats doesnt have all necessary keys: '+Object.keys(baseStats);
  }
  if (Object.keys(ivs).length != 6) {
    throw 'ivs doesnt have all necessary keys: '+Object.keys(ivs);
  }
  if (Object.keys(evs).length != 6) {
    throw 'evs doesnt have all necessary keys: '+Object.keys(evs);
  }

  level = level || 1;
  if (level > 100) {
    level = 100;
  }
  let baseIvEv = 2 * baseStats[stat]
                    + ivs[stat]
                    + (evs[stat] / 4);

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
  nature = nature.toUpperCase();
  if (Object.values(NATURES).map(nat => nat.name).includes(nature) === false) {
    throw 'Nature "' + nature + '" is invalid!';
  }
  let natureEffect = NATURES[nature];

  if (natureEffect.increase === natureEffect.decrease){
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
