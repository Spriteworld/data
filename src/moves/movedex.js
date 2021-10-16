import * as TYPES from '../moves/definitions';
import { getMovesByGen, getMovesByGameId } from '../moves/index';


export class Movedex {
  constructor(gameId) {
    if (typeof gameId === 'string') {
      this.movedex = getMovesByGameId(gameId);
    }
    if (typeof gameId === 'number') {
      this.movedex = getMovesByGen(gameId);
    }


  }

  getMoveById(id) {
    let move = Object.values(this.movedex).find(move => {
      return move.id === id;
    });
    if (typeof move === 'undefined' || move.length === 0) {
      throw 'MoveId "'+id+'" is invalid!';
    }

    return move;
  }

  getMoveByName(name) {
    let move = Object.values(this.movedex).find(move => {
      return move.name.toLowerCase() === name.toLowerCase();
    });
    if (typeof move === 'undefined' || move.length === 0) {
      throw 'MoveName "'+name+'" is invalid!';
    }

    return move;
  }

  getMoveByType(type) {
    this.checkMoveType(type);
    return Object.values(this.movedex).filter(move => {
      return move.type === type;
    });
  }

  getMovesForPokemon(moves) {
    if (typeof moves === 'undefined' || moves.length === 0) {
      throw 'Moveset is invalid!';
    }

    return moves.map(move => {
      move.move = this.getMoveByName(move.name);

      return move;
    });
  }

  checkMoveName(type) {
    if (Object.values(TYPES).includes(type) === false) {
      throw 'Move Type "' + type + '" is invalid!';
    }
  }

  checkMoveType(type) {
    if (Object.values(TYPES).includes(type) === false) {
      throw 'Move Type "' + type + '" is invalid!';
    }
  }

}
