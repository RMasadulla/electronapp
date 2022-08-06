import { STARTER_BASE_DEFENSE_DECK } from '@/cards/baseDefense/starterDeck'
import { STARTER_COMBAT_DECK } from '@/cards/combat/starterDeck'
import { STARTER_OPERATION_DECK } from '@/cards/operation/starterDeck'
import { OPERATION_NAMES } from '@/utils/constants'
import {
    EffectLevels,
    DinoMercsContext,
    Duration,
    Scenes,
    GameContext,
    Tracks,
    GameRoutes,
} from '@/types'
import {
    LEVEL_ONE_SLOTS,
    INITIAL_STATUSES,
    DEFAULT_ENEMY,
    LIMITED_MODE_TIMELINE,
    ALLOSAURUS_CHARACTER,
    INITIAL_INVISIBLE_STATUSES,
} from '@/engine/game/constants'
import { ALL_OPERATION_CARDS } from '@/cards/operation/operationCards'
import { COMBAT_CARDS } from '@/cards/combat/combatCards'
import { BASE_DEFENSE_CARDS } from '@/cards/baseDefense/baseDefenseCards'

export const initialGameContext: GameContext = {
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
        deck: STARTER_COMBAT_DECK,
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
        invisibleStatuses: INITIAL_INVISIBLE_STATUSES,
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

export const initialContext: DinoMercsContext = {
    runInProgress: false,
    currentLevel: 1,
    levels: {
        1: { complete: false, inProgress: true },
        2: { complete: false, inProgress: false },
        3: { complete: false, inProgress: false },
        4: { complete: false, inProgress: false },
        5: { complete: false, inProgress: false },
        6: { complete: false, inProgress: false },
    },
    game: initialGameContext,
    unlockedLegends: [],
    audio: {
        fadeout: false,
        track: Tracks.None,
        volume: 0.5,
        muted: false,
    },
}
