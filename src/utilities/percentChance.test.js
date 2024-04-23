import { percentChance } from './percentChance';

describe('percentChance', () => {
    test('should return true if between the 2 arguments', () => {
        expect(percentChance(0, 1)).toBe(true);
    });
});