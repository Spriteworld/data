/**
 * Returns true with a given percentage chance
 * @param int percent - The percentage chance (0-100)
 * @returns {boolean} - True if the chance is successful, false otherwise
 */
export const percentChance = (percent) => {
  let random = Math.random();
  if (percent > 1) {
    percent = percent / 100;
  }

  let value = random < percent;
  return value;
};
