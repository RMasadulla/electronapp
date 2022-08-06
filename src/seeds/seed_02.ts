import { STARTER_BASE_DEFENSE_DECK } from '@/cards/baseDefense/starterDeck'
import { STARTER_OPERATION_DECK } from '@/cards/operation/starterDeck'
import {
    LEVEL_ONE_SLOTS,
    INITIAL_STATUSES,
    LIMITED_MODE_TIMELINE,
    ALLOSAURUS_CHARACTER,
    DEFAULT_ENEMY,
} from '@/engine/game/constants'
import { EffectLevels, Duration, Scenes, GameContext, GameRoutes } from '@/types'
import { OPERATION_NAMES } from '@/utils/constants'
import { ALL_OPERATION_CARDS } from '../cards/operation/operationCards'
import { BASE_DEFENSE_CARDS } from '../cards/baseDefense/baseDefenseCards'
import { COMBAT_CARDS } from '../cards/combat/combatCards'
import {
    SHIELD_OVERLOAD_CARD,
    SHIELD_OVERLOAD_CARD_02,
    SHIELD_OVERLOAD_CARD_03,
    SHIELD_OVERLOAD_CARD_04,
} from '../cards/combat/cards/shieldOverload'
import { COMBAT_ARMOR_CARD, COMBAT_ARMOR_CARD_02 } from '../cards/combat/cards/combatArmor'
import { DIG_IN_CARD, DIG_IN_CARD_02 } from '../cards/combat/cards/digIn'
import { FIRE_FLAIL_CARD, FIRE_FLAIL_CARD_02 } from '../cards/combat/cards/fireFlail'
import { FULL_METAL_JACKET_CARD } from '../cards/combat/cards/fullMetalJacket'
import { GUIDED_MISSILE_CARD } from '../cards/combat/cards/guidedMissile'
import { RPG_CARD } from '../cards/combat/cards/rpg'

export const SEED_ADVANCED_COMBAT_CARDS: GameContext = {
    id: 'seed_advanced_combat_cards',
    gameOver: false,
    mode: null,
    currentCheckpoint: 1,
    currentRoute: GameRoutes.StartScreen,
    timeline: LIMITED_MODE_TIMELINE,
    operation: {
        name: '',
        names: OPERATION_NAMES,
        affirmation: '',
        deck: STARTER_OPERATION_DECK,
        allCards: ALL_OPERATION_CARDS,
        currentPlayedCard: null,
        discardPile: [],
        round: 1,
        slots: LEVEL_ONE_SLOTS,
        operationAborted: false,
        drainedCards: [],
        event: { inProgress: false, details: null },
        barks: [],
    },
    combat: {
        type: EffectLevels.AverageEffect,
        deck: [
            SHIELD_OVERLOAD_CARD,
            SHIELD_OVERLOAD_CARD_02,
            SHIELD_OVERLOAD_CARD_03,
            SHIELD_OVERLOAD_CARD_04,
            COMBAT_ARMOR_CARD,
            COMBAT_ARMOR_CARD_02,
            DIG_IN_CARD,
            DIG_IN_CARD_02,
            FIRE_FLAIL_CARD,
            FIRE_FLAIL_CARD_02,
            FULL_METAL_JACKET_CARD,
            GUIDED_MISSILE_CARD,
            RPG_CARD,
        ],
        allCards: COMBAT_CARDS,
        currentPlayedCard: null,
        discardPile: [],
        slots: LEVEL_ONE_SLOTS,
        round: 1,
        retreated: false,
        encounterQueue: [],
        primalFuryChargeLevel: 0,
        drainedCards: [],
    },
    baseDefense: {
        deck: STARTER_BASE_DEFENSE_DECK,
        allCards: BASE_DEFENSE_CARDS,
        currentPlayedCard: null,
        discardPile: [],
        round: 1,
        slots: LEVEL_ONE_SLOTS,
        drainedCards: [],
        event: { inProgress: false, details: null },
        currentBaseAttacker: null,
    },
    player: {
        character: ALLOSAURUS_CHARACTER,
        statuses: INITIAL_STATUSES,
        stats: {
            hp: 50,
            maxHp: 50,
            shield: 25,
            maxShield: 25,
            money: 1000,
            supplies: 500,
            gainedMoney: 0,
            gainedSupplies: 0,
        },
        barks: [],
        legends: [],
    },
    enemy: DEFAULT_ENEMY,
    base: {
        stats: {
            hp: 500,
            maxHp: 500,
            personnel: 10,
            morale: 10,
            fortifications: 10,
            antiAir: 10,
            antiGround: 10,
        },
        statuses: {
            burning: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
            badWeather: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
            overwhelmed: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
            protected: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
        },
        barks: [],
    },
}
