import { STATS } from '../../stats';

export function statValidation(stats, key) {
  if (typeof stats !== 'object') {
    console.debug(typeof stats);
    console.debug(key+' isnt an object');
    return false;
  }

  if (typeof stats[STATS.HP] === 'undefined') {
    console.debug('('+key+') HP is missing');
    return false;
  }
  if (typeof stats[STATS.ATTACK] === 'undefined') {
    console.debug('('+key+') ATTACK is missing');
    return false;
  }
  if (typeof stats[STATS.DEFENSE] === 'undefined') {
    console.debug('('+key+') DEFENSE is missing');
    return false;
  }
  if (typeof stats[STATS.SPECIAL_ATTACK] === 'undefined') {
    console.debug('('+key+') SPECIAL_ATTACK is missing');
    return false;
  }
  if (typeof stats[STATS.SPECIAL_DEFENSE] === 'undefined') {
    console.debug('('+key+') SPECIAL_DEFENSE is missing');
    return false;
  }
  if (typeof stats[STATS.SPEED] === 'undefined') {
    console.debug('('+key+') SPEED is missing');
    return false;
  }

  return true;
}
