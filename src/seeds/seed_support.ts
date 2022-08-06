import { STARTER_BASE_DEFENSE_DECK } from '@/cards/baseDefense/starterDeck'
import {
    CLOSE_AIR_SUPPORT_CARD,
    CLOSE_AIR_SUPPORT_CARD_02,
    CLOSE_AIR_SUPPORT_CARD_03,
    CLOSE_AIR_SUPPORT_CARD_04,
} from '@/cards/combat/cards/closeAirSupport'
import {
    MOBILE_SHIELD_BATTERY_CARD,
    MOBILE_SHIELD_BATTERY_CARD_02,
    MOBILE_SHIELD_BATTERY_CARD_03,
    MOBILE_SHIELD_BATTERY_CARD_04,
} from '@/cards/combat/cards/mobileShieldBattery'
import { MEDIVAC_CARD, MEDIVAC_CARD_02 } from '@/cards/combat/cards/medivac'
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

export const SEED_SUPPORT: GameContext = {
    id: 'seed_support',
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
            CLOSE_AIR_SUPPORT_CARD,
            CLOSE_AIR_SUPPORT_CARD_02,
            CLOSE_AIR_SUPPORT_CARD_03,
            CLOSE_AIR_SUPPORT_CARD_04,
            MOBILE_SHIELD_BATTERY_CARD,
            MOBILE_SHIELD_BATTERY_CARD_02,
            MOBILE_SHIELD_BATTERY_CARD_03,
            MOBILE_SHIELD_BATTERY_CARD_04,
            MEDIVAC_CARD,
            MEDIVAC_CARD_02,
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
