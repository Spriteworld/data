/**
 * Returns true if between the 2 arguments
 * @param float min
 * @param float max
 * @return bool
 */
export const percentChance = (min, max=1) => {
  let chance = Math.random();
  return (chance >= min && chance <= max);
}
