import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_3';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_5';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_8 from './gen_8';
import { getMovesByGen } from './index';

let expected = {
  1: 1,
  2: 2,
  3: 4,
  4: 5,
  5: 6,
  6: 6,
  7: 7,
  8: 8,
};

Object.keys(expected).forEach(gen => {
  test(`can get gen_${gen} moves`, () => {
    expect(getMovesByGen(gen)).toBe(`gen_${gen}`.TYPES);
  });
});
