import * as gen_1 from './gen_1';
import { Movedex } from './movedex';
import { GAMES } from '../index';

describe('Movedex class can do things', () => {

  test('movedex can game id', () => {
    let movedex = new Movedex(GAMES.POKEMON_RED);
    expect(movedex.movedex).toBe(gen_1.MOVES);
  });
  test('movedex can generation', () => {
    let movedex = new Movedex(1);
    expect(movedex.movedex).toBe(gen_1.MOVES);
  });

  test('movedex throws error on invalid game id', () => {
    expect(() => new Movedex('test')).toThrow('GameId "test" is invalid!');
  });
  test('movedex throws error on invalid generation', () => {
    expect(() => new Movedex(1000)).toThrow('Gen "1000" is invalid!');
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
