import { GROWTH, EXPERIENCE_TABLES } from '../index';

export function calcLevel(pokemon) {
  let growth = pokemon.growth;
  if (Object.values(GROWTH).includes(growth) === false) {
    throw 'Growth "' + growth + '" is invalid!';
  }

  let level = 0;
  let exp = pokemon.exp;

  EXPERIENCE_TABLES[growth].forEach(value => {
    if (exp >= value) {
      level = level + 1;
    } else {
      return level;
    }
  });

  return level;
}
