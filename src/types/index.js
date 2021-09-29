import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
// import * as gen_3 from './gen_2';
// import * as gen_4 from './gen_2';
import * as gen_5 from './gen_5';
// import * as gen_6 from './gen_5';
// import * as gen_7 from './gen_5';
// import * as gen_8 from './gen_5';

export function getTypesByGen(gen=5) {
  switch(gen) {
    case 1:
      return gen_1.TYPES;
    break;
    case 2:
    case 3:
    case 4:
      return gen_2.TYPES;
    break;
    case 5:
    case 6:
    case 7:
    case 8:
      return gen_5.TYPES;
    break;
  }
}
