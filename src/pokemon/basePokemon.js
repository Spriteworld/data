import { validate } from '../utilities/validate';
import { statValidation } from './utilities/statValidation';
import { GROWTH, NATURES, calcStats } from './index';
import { STATS, GAMES } from '../index';
import { Pokedex } from '../pokedex/pokedex';

export class BasePokemon {
  constructor({
    id,
    species,
    originalTrainer,
    trainerId,
    level,
    nature,
    ivs,
    evs,
    moves,
    pokemon
  }) {
    // if were passing in the nature object, convert it to its name
    if (typeof nature === 'object') {
      nature = nature.name;
    }

    Object.assign(this, {
      ...(parseInt(id) && {id}),
      ...(species && {species}),
      ...(originalTrainer && {originalTrainer}),
      ...(parseInt(trainerId) && {trainerId}),
      ...(parseInt(level) && {level}),
      ...(nature && {nature}),
      ...(typeof ivs === 'object' && {ivs}),
      ...(typeof evs === 'object' && {evs}),
      ...(typeof moves === 'object' && {moves}),
      ...(pokemon && {pokemon}),
    });

    // if we have no gen, use latest
    if (typeof this.gen === 'undefined') {
      this.gen = 1;
    }

    // handle the pokedex stuffs
    let pokedex = new Pokedex(GAMES.POKEMON_RED);
    if (typeof this.species === 'number') {
      this.pokemon = pokedex.getPokemonById(this.species);
    }
    if (typeof this.species === 'string') {
      this.pokemon = pokedex.getPokemonBySpecies(this.species);
    }
    if (typeof this.species === 'object') {
      this.pokemon = this.species;
      this.id = this.pokemon.id;
      this.species = this.pokemon.species;
    }
    if (typeof this.pokemon === 'undefined') {
      this.pokemon = pokemon;
    }
    // console.log(['BasePokemon', this]);
    // calc the base stats
    this.stats = calcStats(this);
    this.currentHp = this.stats?.HP;

    const errors = validate(this, {
      'nature': {
        'test': value => Object.values(NATURES).map(nat => nat.name).includes(value),
        'error': 'Nature "'+ this.nature +'" is invalid!',
      },
      'ivs': {
        'test': value => statValidation(value, 'ivs'),
        'error': 'ivs doesnt have all necessary keys',
      },
      'evs': {
        'test': value => statValidation(value, 'evs'),
        'error': 'evs doesnt have all necessary keys',
      }
    });

    if (errors.length > 0) {
      for (const { message } of errors) {
        throw message;
      }
    }
  }


  getName() {
    return this.nickname || this.species;
  }

  getCalculatedStats() {
    return this.stats;
  }

  getPokemonDefinition() {
    return this.pokemon;
  }

  getTypes() {
    return this.pokemon?.types;
  }

  getEggGroups() {
    return this.pokemon?.egg_groups;
  }

  getAbilities() {
    return this.pokemon?.abilities;
  }

  getForms() {
    return this.pokemon?.form;
  }

  getBaseStats() {
    return this.pokemon?.base_stats || {
      [STATS.HP]: 0,
      [STATS.ATTACK]: 0,
      [STATS.DEFENSE]: 0,
      [STATS.SPECIAL_ATTACK]: 0,
      [STATS.SPECIAL_DEFENSE]: 0,
      [STATS.SPEED]: 0,
    };
  }

  getIvs() {
    return this.ivs;
  }

  getEvs() {
    return this.evs;
  }

  getExpYield() {
    return this.pokemon?.base_exp_yield;
  }

  getEffortYield() {
    return this.pokemon?.effort_yield;
  }

  getGrowth() {
    return this.pokemon?.growth;
  }

  getNature() {
    return this.nature;
  }

  getCaptureRate() {
    return this.pokemon?.capture_rate;
  }

}
