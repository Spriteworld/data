import { calcLevel } from './calcLevel';
import { GROWTH } from '../index';

let expected = {
  [GROWTH.ERRATIC]: {10: 1900, 70: 278_458},
  [GROWTH.FAST]: {10: 810, 70: 274_420},
  [GROWTH.MEDIUM_FAST]: {10: 1100, 70: 344_000},
  [GROWTH.MEDIUM_SLOW]: {10: 562, 70: 345_960},
  [GROWTH.SLOW]: {10: 1260, 70: 429_750},
  [GROWTH.FLUCTUATING]: {10: 550, 70: 460_620},
};

describe('calcLevel should generate correct level given known info', () => {
  Object.keys(expected).forEach(growth => {
    Object.keys(expected[growth]).forEach(level => {
      test(growth+' on level: '+ level, () => {

        expect(calcLevel(
          GROWTH[growth.toUpperCase()],
          expected[growth][level]
        )).toBe(parseInt(level));

      });
    });
  });
});
