import { GROWTH, EXPERIENCE_TABLES } from '../index';

/**
 * Calculates what level given growth rate and experience
 * @param  string growth GROWTH
 * @param  int exp
 * @return int
 */
export function calcLevel(growth, exp) {
  exp = exp || 0;
  if (Object.values(GROWTH).includes(growth) === false) {
    throw 'Growth "' + growth + '" is invalid!';
  }

  let level = 0;
  EXPERIENCE_TABLES[growth].forEach(value => {
    if (exp >= value) {
      level = level + 1;
    } else {
      return level;
    }
  });

  return level;
}
