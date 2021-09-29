import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_5 from './gen_5';
import { getTypesByGen } from './index';

let expected = {
  1: 1,
  2: 2,
  3: 2,
  4: 2,
  5: 5,
  6: 5,
  7: 5,
  8: 5,
};

Object.keys(expected).forEach(gen => {
  test(`can get gen_${gen} types`, () => {
    expect(getTypesByGen(gen)).toBe(`gen_${gen}`.TYPES);
  });
});
