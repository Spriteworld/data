import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
import * as gen_3 from './gen_2';
import * as gen_4 from './gen_4';
import * as gen_5 from './gen_4';
import * as gen_6 from './gen_6';
import * as gen_7 from './gen_6';
import * as gen_8 from './gen_6';

export function getMovesByGen(gen=8) {
  switch(gen) {
    case 1: return gen_1.MOVES; break;
    case 2: return gen_2.MOVES; break;
    case 3: return gen_3.MOVES; break;
    case 4: return gen_4.MOVES; break;
    case 5: return gen_5.MOVES; break;
    case 6: return gen_6.MOVES; break;
    case 7: return gen_7.MOVES; break;
    case 8: return gen_8.MOVES; break;
  }
}
