import { getPokedexByGameId } from '../pokedex';
import { Evolution, EVOLUTION_METHOD } from '../evolution';

let pokedex = getPokedexByGameId(GAMES.POKEMON_RED);

export const EVOLUTIONS = {
  [pokedex.BULBASAUR]: [Evolution(EVOLUTION_METHOD.LEVEL, 16, pokedex.IVYSAUR)],
  [pokedex.IVYSAUR]: [Evolution(EVOLUTION_METHOD.LEVEL, 32, pokedex.VENUSAUR)],
  [pokedex.CHARMANDER]: [Evolution(EVOLUTION_METHOD.LEVEL, 16, pokedex.CHARMELEON)],
  [pokedex.CHARMELEON]: [Evolution(EVOLUTION_METHOD.LEVEL, 36, pokedex.CHARIZARD)],
  [pokedex.SQUIRTLE]: [Evolution(EVOLUTION_METHOD.LEVEL, 16, pokedex.WARTORTLE)],
  [pokedex.WARTORTLE]: [Evolution(EVOLUTION_METHOD.LEVEL, 36, pokedex.BLASTOISE)],
  [pokedex.CATERPIE]: [Evolution(EVOLUTION_METHOD.LEVEL, 7, pokedex.METAPOD)],
  [pokedex.METAPOD]: [Evolution(EVOLUTION_METHOD.LEVEL, 10, pokedex.BUTTERFREE)],
  [pokedex.WEEDLE]: [Evolution(EVOLUTION_METHOD.LEVEL, 7, pokedex.KAKUNA)],
  [pokedex.KAKUNA]: [Evolution(EVOLUTION_METHOD.LEVEL, 10, pokedex.BEEDRILL)],
  [pokedex.PIDGEY]: [Evolution(EVOLUTION_METHOD.LEVEL, 18, pokedex.PIDGEOTTO)],
  [pokedex.PIDGEOTTO]: [Evolution(EVOLUTION_METHOD.LEVEL, 36, pokedex.PIDGEOT)],
  [pokedex.RATTATA]: [Evolution(EVOLUTION_METHOD.LEVEL, 20, pokedex.RATICATE)],
  [pokedex.SPEAROW]: [Evolution(EVOLUTION_METHOD.LEVEL, 20, pokedex.FEAROW)],
  [pokedex.EKANS]: [Evolution(EVOLUTION_METHOD.LEVEL, 22, pokedex.ARBOK)],
  [pokedex.PIKACHU]: [Evolution(EVOLUTION_METHOD.ITEM, ITEMS.THUNDER_STONE, pokedex.RAICHU)],
  [pokedex.SANDSHREW]: [Evolution(EVOLUTION_METHOD.LEVEL, 22, pokedex.SANDSLASH)],
  [pokedex.NIDORAN_F]: [Evolution(EVOLUTION_METHOD.LEVEL, 16, pokedex.NIDORINA)],
  [pokedex.NIDORINA]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.MOON_STONE, pokedex.NIDOQUEEN)],
  [pokedex.NIDORAN_M]: [Evolution(EVOLUTION_METHOD.LEVEL, 16, pokedex.NIDORINO)],
  [pokedex.NIDORINO]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.MOON_STONE, pokedex.NIDOKING)],
  [pokedex.CLEFAIRY]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.MOON_STONE, pokedex.CLEFABLE)],
  [pokedex.VULPIX]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.FIRE_STONE, pokedex.NINETALES)],
  [pokedex.JIGGLYPUFF]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.MOON_STONE, pokedex.WIGGLYTUFF)],
  [pokedex.ZUBAT]: [Evolution(EVOLUTION_METHOD.LEVEL, 22, pokedex.GOLBAT)],
  [pokedex.ODDISH]: [Evolution(EVOLUTION_METHOD.LEVEL, 21, pokedex.GLOOM)],
  [pokedex.GLOOM]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.LEAF_STONE, pokedex.VILEPLUME)],
  [pokedex.PARAS]: [Evolution(EVOLUTION_METHOD.LEVEL, 24, pokedex.PARASECT)],
  [pokedex.VENONAT]: [Evolution(EVOLUTION_METHOD.LEVEL, 31, pokedex.VENOMOTH)],
  [pokedex.DIGLETT]: [Evolution(EVOLUTION_METHOD.LEVEL, 26, pokedex.DUGTRIO)],
  [pokedex.MEOWTH]: [Evolution(EVOLUTION_METHOD.LEVEL, 28, pokedex.PERSIAN)],
  [pokedex.PSYDUCK]: [Evolution(EVOLUTION_METHOD.LEVEL, 33, pokedex.GOLDUCK)],
  [pokedex.MANKEY]: [Evolution(EVOLUTION_METHOD.LEVEL, 28, pokedex.PRIMEAPE)],
  [pokedex.GROWLITHE]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.FIRE_STONE, pokedex.ARCANINE)],
  [pokedex.POLIWAG]: [Evolution(EVOLUTION_METHOD.LEVEL, 25, pokedex.POLIWHIRL)],
  [pokedex.POLIWHIRL]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.WATER_STONE, pokedex.POLIWRATH)],
  [pokedex.ABRA]: [Evolution(EVOLUTION_METHOD.LEVEL, 16, pokedex.KADABRA)],
  [pokedex.KADABRA]: [Evolution(EVOLUTION_METHOD.TRADE_ITEM, ITEMS.LINK_CABLE, pokedex.ALAKAZAM)],
  [pokedex.MACHOP]: [Evolution(EVOLUTION_METHOD.LEVEL, 28, pokedex.MACHOKE)],
  [pokedex.MACHOKE]: [Evolution(EVOLUTION_METHOD.TRADE_ITEM, ITEMS.LINK_CABLE, pokedex.MACHAMP)],
  [pokedex.BELLSPROUT]: [Evolution(EVOLUTION_METHOD.LEVEL, 21, pokedex.WEEPINBELL)],
  [pokedex.WEEPINBELL]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.LEAF_STONE, pokedex.VICTREEBEL)],
  [pokedex.TENTACOOL]: [Evolution(EVOLUTION_METHOD.LEVEL, 30, pokedex.TENTACRUEL)],
  [pokedex.GEODUDE]: [Evolution(EVOLUTION_METHOD.LEVEL, 25, pokedex.GRAVELER)],
  [pokedex.GRAVELER]: [Evolution(EVOLUTION_METHOD.TRADE_ITEM, ITEMS.LINK_CABLE, pokedex.GOLEM)],
  [pokedex.PONYTA]: [Evolution(EVOLUTION_METHOD.LEVEL, 40, pokedex.RAPIDASH)],
  [pokedex.SLOWPOKE]: [Evolution(EVOLUTION_METHOD.LEVEL, 37, pokedex.SLOWBRO)],
  [pokedex.MAGNEMITE]: [Evolution(EVOLUTION_METHOD.LEVEL, 30, pokedex.MAGNETON)],
  [pokedex.DODUO]: [Evolution(EVOLUTION_METHOD.LEVEL, 31, pokedex.DODRIO)],
  [pokedex.SEEL]: [Evolution(EVOLUTION_METHOD.LEVEL, 34, pokedex.DEWGONG)],
  [pokedex.GRIMER]: [Evolution(EVOLUTION_METHOD.LEVEL, 38, pokedex.MUK)],
  [pokedex.SHELLDER]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.WATER_STONE, pokedex.CLOYSTER)],
  [pokedex.GASTLY]: [Evolution(EVOLUTION_METHOD.LEVEL, 25, pokedex.HAUNTER)],
  [pokedex.HAUNTER]: [Evolution(EVOLUTION_METHOD.TRADE_ITEM, ITEMS.LINK_CABLE, pokedex.GENGAR)],
  [pokedex.DROWZEE]: [Evolution(EVOLUTION_METHOD.LEVEL, 26, pokedex.HYPNO)],
  [pokedex.KRABBY]: [Evolution(EVOLUTION_METHOD.LEVEL, 28, pokedex.KINGLER)],
  [pokedex.VOLTORB]: [Evolution(EVOLUTION_METHOD.LEVEL, 30, pokedex.ELECTRODE)],
  [pokedex.EXEGGCUTE]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.LEAF_STONE, pokedex.EXEGGUTOR)],
  [pokedex.CUBONE]: [Evolution(EVOLUTION_METHOD.LEVEL, 28, pokedex.MAROWAK)],
  [pokedex.KOFFING]: [Evolution(EVOLUTION_METHOD.LEVEL, 35, pokedex.WEEZING)],
  [pokedex.RHYHORN]: [Evolution(EVOLUTION_METHOD.LEVEL, 42, pokedex.RHYDON)],
  [pokedex.HORSEA]: [Evolution(EVOLUTION_METHOD.LEVEL, 32, pokedex.SEADRA)],
  [pokedex.GOLDEEN]: [Evolution(EVOLUTION_METHOD.LEVEL, 33, pokedex.SEAKING)],
  [pokedex.STARYU]: [Evolution(EVOLUTION_METHOD.STONE, ITEMS.WATER_STONE, pokedex.STARMIE)],
  [pokedex.MAGIKARP]: [Evolution(EVOLUTION_METHOD.LEVEL, 20, pokedex.GYARADOS)],
  [pokedex.EEVEE]: [
    Evolution(EVOLUTION_METHOD.ITEM, ITEMS.WATER_STONE, pokedex.VAPOREON),
    Evolution(EVOLUTION_METHOD.ITEM, ITEMS.THUNDER_STONE, pokedex.JOLTEON),
    Evolution(EVOLUTION_METHOD.ITEM, ITEMS.FIRE_STONE, pokedex.FLAREON)
  ],
  [pokedex.OMANYTE]: [Evolution(EVOLUTION_METHOD.LEVEL, 40, pokedex.OMASTAR)],
  [pokedex.KABUTO]: [Evolution(EVOLUTION_METHOD.LEVEL, 40, pokedex.KABUTOPS)],
  [pokedex.DRATINI]: [Evolution(EVOLUTION_METHOD.LEVEL, 30, pokedex.DRAGONAIR)],
  [pokedex.DRAGONAIR]: [Evolution(EVOLUTION_METHOD.LEVEL, 55, pokedex.DRAGONITE)],
};
