import { STARTER_BASE_DEFENSE_DECK } from '@/cards/baseDefense/starterDeck'
import { STARTER_COMBAT_DECK } from '@/cards/combat/starterDeck'
import { STARTER_OPERATION_DECK } from '@/cards/operation/starterDeck'
import {
    AnimationStates,
    Card,
    CardIdentity,
    Character,
    Characters,
    Duration,
    EffectLevels,
    EnemyVariants,
    Scenes,
    Tiers,
    Timeline,
} from '@/types'
import {
    BSC_TROOPER,
    BSC_BRAWLER,
    HNG_SNIPER,
    HNG_HEAVY_TROOPER,
    RPL_SHOCK_TROOPER,
    RPL_HEAVY_TROOPER,
    BSC_BERSERKER_COMMANDER,
} from '@/utils/enemies'

// Game events
export const START_SCREEN = 'startScreen'
export const INTRO_SCREEN = 'introScreen'
export const CHARACTER_SELECTION_SCREEN = 'characterSelectionScreen'
export const BASE_SCREEN = 'baseScreen'
export const CHARACTER_SCREEN = 'characterScreen'
export const COMBAT_DECK_SCREEN = 'combatDeckScreen'
export const OPERATION_DECK_SCREEN = 'operationDeckScreen'
export const BASE_DEFENSE_DECK_SCREEN = 'baseDefenseDeckScreen'
export const GAME_OVER = 'gameOverScreen'
export const MISSION_COMPLETE = 'missionCompleteScreen'

export const OPERATION_SCREEN = 'operationScreen'
export const OPERATION_INTRO_PHASE = 'operationIntroPhase'
export const OPERATION_START_ROUND = 'operationStartRound'
export const OPERATION_DRAW_PHASE = 'operationDrawPhase'
export const OPERATION_DRAW_PHASE_PART_TWO = 'operationDrawPhasePartTwo'
export const OPERATION_SELECTION_PHASE = 'operationSelectionPhase'
export const OPERATION_RESOLVE_PHASE = 'operationResolvePhase'
export const OPERATION_RESOLVE_PHASE_CARD_ONE = 'operationResolvePhaseCardOne'
export const OPERATION_RESOLVE_PHASE_EVENT_ONE = 'operationResolvePhaseEventOne'
export const OPERATION_RESOLVE_PHASE_CARD_TWO = 'operationResolvePhaseCardTwo'
export const OPERATION_RESOLVE_PHASE_EVENT_TWO = 'operationResolvePhaseEventTwo'
export const OPERATION_RESOLVE_PHASE_CARD_THREE = 'operationResolvePhaseCardThree'
export const OPERATION_RESOLVE_PHASE_EVENT_THREE = 'operationResolvePhaseEventThree'
export const OPERATION_RESOLVE_PHASE_CARD_FOUR = 'operationResolvePhaseCardFour'
export const OPERATION_RESOLVE_PHASE_EVENT_FOUR = 'operationResolvePhaseEventFour'
export const OPERATION_RESOLVE_PHASE_CARD_FIVE = 'operationResolvePhaseCardFive'
export const OPERATION_RESOLVE_PHASE_EVENT_FIVE = 'operationResolvePhaseEventFive'
export const OPERATION_COMBAT_PHASE = 'operationCombatPhase'
export const OPERATION_COMBAT_STARTS = 'operationCombatStarts'
export const OPERATION_DISCARD_PHASE = 'operationDiscardPhase'
export const OPERATION_END_OF_ROUND = 'operationEndOfRound'
export const OPERATION_SHUFFLE_PHASE = 'operationShufflePhase'
export const OPERATION_REWARDS_SCREEN = 'operationRewardsScreen'

export const COMBAT_SCREEN = 'combatScreen'
export const COMBAT_INTRO_PHASE = 'combatIntroPhase'
export const COMBAT_START_ROUND = 'combatStartRound'
export const COMBAT_INJECT_ENEMY_CARDS = 'combatInjectEnemyCards'
export const COMBAT_DRAW_PHASE = 'combatDrawPhase'
export const COMBAT_DRAW_PHASE_PART_TWO = 'combatDrawPhasePartTwo'
export const COMBAT_SELECTION_PHASE = 'combatPlayerSelectionPhase'
export const COMBAT_RESOLVE_PHASE = 'combatPlayerResolvePhase'
export const COMBAT_RESOLVE_PHASE_CARD_ONE = 'combatResolvePhaseCardOne'
export const COMBAT_RESOLVE_PHASE_CARD_TWO = 'combatResolvePhaseCardTwo'
export const COMBAT_RESOLVE_PHASE_CARD_THREE = 'combatResolvePhaseCardThree'
export const COMBAT_RESOLVE_PHASE_CARD_FOUR = 'combatResolvePhaseCardFour'
export const COMBAT_RESOLVE_PHASE_CARD_FIVE = 'combatResolvePhaseCardFive'
export const COMBAT_ATTACK_DAMAGE_PHASE_ONE = 'combatAttackDamagePhaseOne'
export const COMBAT_ATTACK_DAMAGE_PHASE_TWO = 'combatAttackDamagePhaseTwo'
export const COMBAT_DAMAGE_PHASE_ONE = 'combatDamagePhaseOne'
export const COMBAT_DAMAGE_PHASE_TWO = 'combatDamagePhaseTwo'
export const COMBAT_DISCARD_PHASE = 'combatDiscardPhase'
export const COMBAT_END_OF_ROUND = 'combatEndOfRound'
export const COMBAT_SHUFFLE_PHASE = 'combatShufflePhase'
export const COMBAT_ENEMY_DEFEATED = 'combatEnemyDefeated'
export const COMBAT_REWARDS_SCREEN = 'combatRewardsScreen'

export const BASE_DEFENSE_SCREEN = 'baseDefenseScreen'
export const BASE_DEFENSE_INTRO_PHASE = 'baseDefenseIntroPhase'
export const BASE_DEFENSE_STARTS = 'baseDefenseStarts'
export const BASE_DEFENSE_START_ROUND = 'baseDefenseStartRound'
export const BASE_DEFENSE_REPAIR_PHASE = 'baseDefenseRepairPhase'
export const BASE_DEFENSE_INJECT_ATTACKER_PHASE = 'baseDefenseInjectAttacker'
export const BASE_DEFENSE_DRAW_PHASE = 'baseDefenseDrawPhase'
export const BASE_DEFENSE_DRAW_PHASE_PART_TWO = 'baseDefenseDrawPhasePartTwo'
export const BASE_DEFENSE_SELECTION_PHASE = 'baseDefenseSelectionPhase'
export const BASE_DEFENSE_RESOLVE_PHASE = 'baseDefenseResolvePhase'
export const BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE = 'baseDefenseResolvePhaseCardOne'
export const BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE = 'baseDefenseResolvePhaseEventOne'
export const BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO = 'baseDefenseResolvePhaseCardTwo'
export const BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO = 'baseDefenseResolvePhaseEventTwo'
export const BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE = 'baseDefenseResolvePhaseCardThree'
export const BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE = 'baseDefenseResolvePhaseEventThree'
export const BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR = 'baseDefenseResolvePhaseCardFour'
export const BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR = 'baseDefenseResolvePhaseEventFour'
export const BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE = 'baseDefenseResolvePhaseCardFive'
export const BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE = 'baseDefenseResolvePhaseEventFive'
export const BASE_DEFENSE_DISCARD_PHASE = 'baseDefenseDiscardPhase'
export const BASE_DEFENSE_END_OF_ROUND = 'baseDefenseEndOfRound'
export const BASE_DEFENSE_SHUFFLE_PHASE = 'baseDefenseShufflePhase'
export const BASE_DEFENSE_REWARDS_SCREEN = 'baseDefenseRewardsScreen'

export const FAKE_CARD: Card = {
    id: 'FAKE_CARD',
    key: 'FAKE_CARD',
    title: 'FAKE',
    identity: CardIdentity.Utility,
    storeDescription: '',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {},
        [EffectLevels.AverageEffect]: {},
        [EffectLevels.WeakEffect]: {},

        [EffectLevels.WeakNegativeEffect]: {},
        [EffectLevels.AverageNegativeEffect]: {},
        [EffectLevels.DeadlyNegativeEffect]: {},
    },
}

export const INITIAL_STATUSES = {
    armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
    inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },

    // Special defense debuffs
    overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
    suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },

    // misc buffs/debuffs
    killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
    enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
    panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
    bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
    smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
    dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },

    // Base Defense
    burning: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
    disrupted: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
    badWeather: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
    overwhelmed: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
    protected: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
    surrounded: { value: 0, duration: Duration.Round, scene: Scenes.BaseDefense },
}

export const INITIAL_INVISIBLE_STATUSES = {
    allIn: { value: 0, duration: Duration.Scene, scene: Scenes.Operation },
    allInNegative: { value: 0, duration: Duration.Scene, scene: Scenes.Operation },
    spoilsOfWar: { value: 0, duration: Duration.Scene, scene: Scenes.Operation },
}

export const STATUSES_DICT: Record<string, { title: string; description: string }> = {
    armored: {
        title: 'ARMRD',
        description:
            'ARMORED reduces damage by {x} (stackable) after SHIELD has been BREACHED. 1 ARMORED is lost for each 1 damage taken.',
    },
    inCover: { title: 'IN_CVR', description: 'IN COVER reduces damage by 40% for {x} rounds.' },

    overheated: {
        title: 'OVRHTD',
        description:
            'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
    },
    suppressed: {
        title: 'SPPRSSD',
        description:
            'While SUPPRESSED and IN COVER are both active, you cannot attack for {x} rounds.',
    },

    enraged: {
        title: 'ENRGD',
        description: 'While ENRAGED is active, deal and take 20% more damage for {x} rounds.',
    },
    panicked: {
        title: 'PNCKD',
        description: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
    },
    bleeding: {
        title: 'BLDNG',
        description: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
    },
    dazed: {
        title: 'DZD',
        description: 'While DAZED is active, deal 30% less damage for {x} rounds.',
    },
    killingMachine: {
        title: 'KLLNG_MCHN',
        description: 'While KILLING MACHINE is active, deal +{x} damage for {x} rounds.',
    },
    smoked: {
        title: 'SMKD',
        description: 'While SMOKED is active, prevent all damage from being dealt for {x} rounds.',
    },
    mutilated: {
        title: 'MTLTD',
        description: 'While MUTILATED is active, your max HP is decreased by {x}.',
    },
    thermalSights: {
        title: 'THRML_SGHTS',
        description:
            'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
    },
}

export const LEVEL_ONE_SLOTS = {
    0: { type: EffectLevels.AverageEffect, card: null },
    1: { type: EffectLevels.WeakEffect, card: null },
    2: { type: EffectLevels.WeakEffect, card: null },
    3: { type: EffectLevels.WeakNegativeEffect, card: null },
    4: { type: EffectLevels.WeakNegativeEffect, card: null },
}

export const LEVEL_TWO_SLOTS = {
    0: { type: EffectLevels.AverageEffect, card: null },
    1: { type: EffectLevels.AverageEffect, card: null },
    2: { type: EffectLevels.WeakEffect, card: null },
    3: { type: EffectLevels.WeakNegativeEffect, card: null },
    4: { type: EffectLevels.AverageNegativeEffect, card: null },
}

export const LEVEL_THREE_SLOTS = {
    0: { type: EffectLevels.DeadlyEffect, card: null },
    1: { type: EffectLevels.AverageEffect, card: null },
    2: { type: EffectLevels.AverageEffect, card: null },
    3: { type: EffectLevels.AverageNegativeEffect, card: null },
    4: { type: EffectLevels.AverageNegativeEffect, card: null },
}

export const LEVEL_FOUR_SLOTS = {
    0: { type: EffectLevels.DeadlyEffect, card: null },
    1: { type: EffectLevels.DeadlyEffect, card: null },
    2: { type: EffectLevels.AverageEffect, card: null },
    3: { type: EffectLevels.AverageNegativeEffect, card: null },
    4: { type: EffectLevels.DeadlyNegativeEffect, card: null },
}

export const LEVEL_FIVE_SLOTS = {
    0: { type: EffectLevels.DeadlyEffect, card: null },
    1: { type: EffectLevels.DeadlyEffect, card: null },
    2: { type: EffectLevels.DeadlyEffect, card: null },
    3: { type: EffectLevels.DeadlyNegativeEffect, card: null },
    4: { type: EffectLevels.DeadlyNegativeEffect, card: null },
}

export const ALLOSAURUS_CHARACTER: Character = {
    name: Characters.STRYKR,
    animationState: AnimationStates.Init,
    starterDecks: {
        operation: STARTER_OPERATION_DECK,
        combat: STARTER_COMBAT_DECK,
        baseDefense: STARTER_BASE_DEFENSE_DECK,
    },
    additionalCards: {
        operation: {
            1: [],
            2: [],
            3: [],
        },
        combat: {
            1: [],
            2: [],
            3: [],
        },
        baseDefense: {
            1: [],
            2: [],
            3: [],
        },
    },
}

export const CHARACTER_CHOICES = [ALLOSAURUS_CHARACTER]

export const LIMITED_MODE_TIMELINE: Timeline = {
    1: {
        checkpoint: 1,
        // enemies: [HNG_HEAVY_TROOPER],
        // enemies: [BSC_TROOPER, BSC_BRAWLER, RPL_SHOCK_TROOPER, RPL_HEAVY_TROOPER],
        enemies: [BSC_TROOPER, RPL_SHOCK_TROOPER, RPL_HEAVY_TROOPER],
        cardTiers: [Tiers.One],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    2: {
        checkpoint: 2,
        enemies: [],
        cardTiers: [Tiers.One],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: true,
        numberOfCombatEncountersCompleted: 0,
    },
    3: {
        checkpoint: 3,
        // enemies: [RPL_SHOCK_TROOPER, BSC_TROOPER, BSC_BRAWLER, RPL_HEAVY_TROOPER],
        enemies: [BSC_TROOPER, RPL_SHOCK_TROOPER, RPL_HEAVY_TROOPER],
        cardTiers: [Tiers.One],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    4: {
        checkpoint: 4,
        enemies: [],
        cardTiers: [Tiers.One],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    5: {
        checkpoint: 5,
        enemies: [RPL_SHOCK_TROOPER, BSC_TROOPER, BSC_BRAWLER, RPL_HEAVY_TROOPER],
        mercKiller: BSC_BERSERKER_COMMANDER,
        mercKillerDefeated: false,
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    6: {
        checkpoint: 6,
        enemies: [],
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: true,
        numberOfCombatEncountersCompleted: 0,
    },
    7: {
        checkpoint: 7,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    8: {
        checkpoint: 8,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    9: {
        checkpoint: 9,
        enemies: [],
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: true,
        numberOfCombatEncountersCompleted: 0,
    },
    10: {
        checkpoint: 10,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        mercKiller: BSC_BERSERKER_COMMANDER,
        mercKillerDefeated: false,
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    11: {
        checkpoint: 11,
        enemies: [],
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    12: {
        checkpoint: 12,
        enemies: [],
        cardTiers: [Tiers.One, Tiers.Two],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    13: {
        checkpoint: 13,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        cardTiers: [Tiers.One, Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    14: {
        checkpoint: 14,
        enemies: [],
        cardTiers: [Tiers.One, Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: true,
        numberOfCombatEncountersCompleted: 0,
    },
    15: {
        checkpoint: 15,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        mercKiller: BSC_BERSERKER_COMMANDER,
        mercKillerDefeated: false,
        cardTiers: [Tiers.One, Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    16: {
        checkpoint: 16,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        cardTiers: [Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    17: {
        checkpoint: 17,
        enemies: [],
        cardTiers: [Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    18: {
        checkpoint: 18,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        cardTiers: [Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: true,
        numberOfCombatEncountersCompleted: 0,
    },
    19: {
        checkpoint: 19,
        enemies: [],
        cardTiers: [Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: true,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
    20: {
        checkpoint: 20,
        enemies: [
            HNG_SNIPER,
            HNG_HEAVY_TROOPER,
            RPL_SHOCK_TROOPER,
            BSC_TROOPER,
            BSC_BRAWLER,
            RPL_HEAVY_TROOPER,
        ],
        mercKiller: BSC_BERSERKER_COMMANDER,
        mercKillerDefeated: false,
        cardTiers: [Tiers.Two, Tiers.Three],
        completed: false,
        baseUnderAttack: false,
        injectCombatEncounterCard: false,
        numberOfCombatEncountersCompleted: 0,
    },
}

export const DEFAULT_ENEMY = {
    id: null,
    name: '',
    affiliation: '',
    description: '',
    species: '',
    enemyType: '',
    barks: [],
    combatTaunt: '',
    character: {
        art: '',
        animationState: AnimationStates.Idle,
        width: 0,
        left: 0,
        bottom: 0,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            statuses: INITIAL_STATUSES,
            stats: {
                hp: 0,
                maxHp: 0,
                shield: 0,
                maxShield: 0,
            },
            cards: { attack: FAKE_CARD, defense: FAKE_CARD, special: FAKE_CARD },
        },
        [EnemyVariants.Deadly]: {
            statuses: INITIAL_STATUSES,
            stats: {
                hp: 0,
                maxHp: 0,
                shield: 0,
                maxShield: 0,
            },
            cards: { attack: FAKE_CARD, defense: FAKE_CARD, special: FAKE_CARD },
        },
        [EnemyVariants.Average]: {
            statuses: INITIAL_STATUSES,
            stats: {
                hp: 0,
                maxHp: 0,
                shield: 0,
                maxShield: 0,
            },
            cards: { attack: FAKE_CARD, defense: FAKE_CARD, special: FAKE_CARD },
        },
        [EnemyVariants.Weak]: {
            statuses: INITIAL_STATUSES,
            stats: {
                hp: 0,
                maxHp: 0,
                shield: 0,
                maxShield: 0,
            },
            cards: { attack: FAKE_CARD, defense: FAKE_CARD, special: FAKE_CARD },
        },
    },
}
