import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_6 from './gen_6';
import { getTypesByGen } from './index';

let expected = {
  1: 1,
  2: 2,
  3: 2,
  4: 2,
  5: 2,
  6: 6,
  7: 6,
  8: 6,
};

Object.keys(expected).forEach(gen => {
  test(`can get gen_${gen} types`, () => {
    expect(getTypesByGen(gen)).toBe(`gen_${gen}`.TYPES);
  });
});
