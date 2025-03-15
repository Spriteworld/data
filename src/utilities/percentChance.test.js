import { percentChance } from './percentChance';

describe('percentChance', () => {
  test('should return true if 1', () => {
    expect(percentChance(1)).toBe(true);
  });
  test('should return false if 0', () => {
    expect(percentChance(0)).toBe(false);
  });
  test('should return true if under 25', () => {
    let mockMath = Object.create(global.Math);
    mockMath.random = () => 0.24;
    global.Math = mockMath;
    expect(percentChance(0.25)).toBe(true);
  });
});