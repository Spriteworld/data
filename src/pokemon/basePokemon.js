import { validate } from '../utilities/validate';
import { statValidation } from './utilities/statValidation';
import { NATURES, calcStats } from './index';
import { STATS, GAMES, STATUS } from '../index';
import { Pokedex } from '../pokedex/pokedex';
import { Movedex } from '../moves/movedex';

export class BasePokemon {
  constructor({
    game,
    pid,
    species,
    originalTrainer,
    trainerId,
    nickname,
    level,
    nature,
    ability,
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
      ...(game && {game}),
      ...(parseInt(pid) && {pid}),
      ...(species && {species}),
      ...(originalTrainer && {originalTrainer}),
      ...(parseInt(trainerId) && {trainerId}),
      ...(nickname && {nickname}),
      ...(parseInt(level) && {level}),
      ...(nature && {nature}),
      ...(ability && {ability}),
      ...(typeof ivs === 'object' && {ivs}),
      ...(typeof evs === 'object' && {evs}),
      ...(typeof moves === 'object' && {moves}),
    });

    // if we have no game, use latest
    if (typeof this.game === 'undefined') {
      this.game = GAMES.POKEMON_RED;
    }

    // handle the pokedex stuffs
    let pokedex = new Pokedex(this.game);
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

    // if we have types, take them otherwise load from base pokemon
    if (typeof this.types === 'undefined') {
      this.types = this.pokemon.types;
    }

    // load the moves
    if (typeof this.moves !== 'undefined' || this.moves?.length > 0) {
      let movedex = new Movedex(this.game);
      this.moves = movedex.getMovesForPokemon(this.moves);
    } else {
      this.moves = [];
    }

    // calc the base stats
    this.stats = calcStats(this);
    this.currentHp = this.stats?.HP;
    this.pokerus = 0;

    if (ability) {
      this.ability = {
        name: ability,
      };
    }

    // in battle modifiers
    this.modifiers = {
      attack: 1,
      defense: 1,
      special_defence: 1,
      special_attack: 1,
      speed: 1,
      evasion: 1,
      accuracy: 1,
      critical: 1,
    };

    // pokemon status
    this.status = {
      [STATUS.SLEEP]: 0,
      [STATUS.POISON]: 0,
      [STATUS.BURN]: 0,
      [STATUS.FROZEN]: 0,
      [STATUS.PARALYZE]: 0,
      [STATUS.TOXIC]: 0,
    };

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
    // console.log(['BasePokemon', this]);
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
