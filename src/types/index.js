import * as gen_1 from './gen_1';
import * as gen_2 from './gen_2';
// import * as gen_3 from './gen_2';
// import * as gen_4 from './gen_4';
// import * as gen_5 from './gen_4';
import * as gen_6 from './gen_6';
// import * as gen_7 from './gen_6';
// import * as gen_8 from './gen_6';
import { inArray } from '../utilities';

export { gen_1, gen_2, gen_6 };

export function getTypesByGen(gen=8) {
  switch(gen) {
    case 1:
      return gen_1.TYPES;
    break;
    case 2:
    case 3:
    case 4:
    case 5:
      return gen_2.TYPES;
    break;
    case 6:
    case 7:
    case 8:
      return gen_6.TYPES;
    break;
  }
}

/**
 * Calculates type effectiveness given 2 types and the generational
 * @param  string attkType
 * @param  array defTypes
 * @param  object types
 * @return float representing effectiveness
 *
 * 0 = Ineffective
 * 0.25
 * 0.5 = Not very effective
 * 1 = Normal
 * 2
 * 4 = Super Effective
 */
export function calcTypeEffectiveness(attkType, defTypes, types) {
  // do checks on the types
  if (typeof types === 'undefined') {
    throw Error('Types are invalid!');
  }
  if (Object.values(types).length != 4) {
    throw Error('Types dont have enough values!');
  }
  if (!Object.keys(types.TYPES).includes(attkType)) {
    throw Error('attkType is invalid!');
  }
  if (!Object.keys(types.TYPES).includes(defTypes[0])) {
    throw Error('defTypes 1 is invalid!');
  }
  if (defTypes.length == 2 && !Object.keys(types.TYPES).includes(defTypes[1])) {
    throw Error('defTypes 2 is invalid!');
  }

  var effect = 1;
  var noEffect = false;

  defTypes.forEach(type => {
    if (types.IMMUNITY[attkType].includes(type)) {
      noEffect = true;
      effect = 0;
    } else if (types.RESIST[attkType].includes(type)) {
      effect *= 0.5;
    } else if (types.STRENGTH[attkType].includes(type)) {
      if (effect <= 2) {
        effect *= 2;
      } else {
        effect = 2;
      }
    }
  });

  // defending pokemon is immune
  if (noEffect) {
    return 0;
  }

  // normal damage
  if (effect === 0) {
    return 1;
  }

  // otherwise return the multiplier
  return effect;
}
