import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_3';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_5';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_7';
import * as gen_8 from './gen_8';

export function getMovesByGen(gen=8) {
  let moves = {};
  switch(gen) {
    case 1: moves = gen_1.MOVES; break;
    case 2: moves = gen_2.MOVES; break;
    case 3: moves = gen_3.MOVES; break;
    case 4: moves = gen_4.MOVES; break;
    case 5: moves = gen_5.MOVES; break;
    case 6: moves = gen_6.MOVES; break;
    case 7: moves = gen_7.MOVES; break;
    case 8: moves = gen_8.MOVES; break;
    default:
      throw 'Gen "'+ gen +'" is invalid!';
  }
  return moves;
}
