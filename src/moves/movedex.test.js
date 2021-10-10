import * as gen_1 from './gen_1';
import { Movedex } from './movedex';

describe('Movedex class can do things', () => {

  test('movedex throws error on invalid generation', () => {
    expect(() => new Movedex('test')).toThrow('Gen "test" is invalid!');
  });
});
describe('Movedex can get moves by ids', () => {

  test('move by id', () => {
    let movedex = new Movedex(1);
    expect(movedex.getMoveById(1)).toBe(gen_1.MOVES[0]);
  });

  test('throw error with dodgy id', () => {
    let movedex = new Movedex(1);
    expect(() => movedex.getMoveById(1000)).toThrow('MoveId "1000" is invalid!');
  });
});
describe('Movedex can get moves by names', () => {

  test('move by name', () => {
    let movedex = new Movedex(1);
    expect(movedex.getMoveByName('pound')).toBe(gen_1.MOVES[0]);
  });

  test('throw error with dodgy name', () => {
    let movedex = new Movedex(1);
    expect(() => movedex.getMoveByName('test')).toThrow('MoveName "test" is invalid!');
  });
});
