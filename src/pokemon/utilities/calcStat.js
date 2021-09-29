import { NATURES } from '../index';
import { STATS } from '../../index';

export function calcStat(pokemon, stat) {
  if (Object.values(STATS).includes(stat) === false) {
    throw 'Stat "' + stat + '" is invalid!';
  }

  let level = pokemon.level || 1;
  if (level > 100) {
    level = 100;
  }
  let nature = (pokemon.nature || NATURES.HARDY.name).toUpperCase();
  let baseIvEv = 2 * pokemon.baseStats[stat]
                    + pokemon.ivs[stat]
                    + (pokemon.evs[stat] / 4);

  let natureCalc = 1;
  if (NATURES[nature].increase !== NATURES[nature].decrease) {
    if (NATURES[nature].increase === stat) {
      natureCalc = 1.1;
    }
    if (NATURES[nature].decrease === stat) {
      natureCalc = 0.9;
    }
  }

  if (stat === STATS.HP) {
    return Math.floor(baseIvEv * level / 100 + level + 10);
  }

  return Math.floor(Math.floor(baseIvEv * level / 100 + 5) * natureCalc);
}
