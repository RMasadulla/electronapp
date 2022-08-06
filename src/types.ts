import { Immutable } from 'immer'

export type DinoMercsContext = Immutable<{
    runInProgress: boolean
    currentLevel: number
    levels: {
        1: Level // Casual:  Average / weak / weak / weak negative / weak negative
        2: Level // Easy: Average / average / weak / weak negative / average negative
        3: Level // Normal: Deadly / Average / Average / average negative effect / average negative effect
        4: Level // Hard: Deadly / Deadly / Average / average negative effect / deadly negative effect
        5: Level // Challenging: Deadly / Deadly / Deadly / deadly negative effect / deadly negative effect
        6: Level // Brutal: Deadly / Deadly / deadly negative effect / deadly negative effect / deadly negative effect
    }
    game: GameContext
    unlockedLegends: Card[]
    audio: Audio
}>

export type Audio = Immutable<{
    track: Tracks
    fadeout: boolean
    volume: number
    muted: boolean
}>

export type GameContext = Immutable<{
    id?: string
    gameOver: boolean
    mode: GameModes | null
    currentCheckpoint: number
    currentRoute: GameRoutes
    timeline: Timeline
    operation: OperationContext
    combat: CombatContext
    baseDefense: BaseDefenseContext
    player: Player
    enemy: Enemy
    base: Base
}>

export enum GameRoutes {
    StartScreen = '/',
    GameOverScreen = '/game-over',
    GameWonScreen = '/game-won',
    CharacterSelectionScreen = '/character-selection',
    TutorialScreen = '/tutorial',
    BaseScreen = '/base',
    OperationScreen = '/operation',
    OperationRewardsScreen = '/operation/rewards',
    CombatScreen = '/combat',
    CombatRewardsScreen = '/combat/rewards',
    BaseDefenseScreen = '/base-defense',
    BaseDefenseRewardsScreen = '/base-defense/rewards',
}

export type Character = {
    name: Characters
    animationState: AnimationStates
    starterDecks: {
        operation: Card[]
        combat: Card[]
        baseDefense: Card[]
    }
    additionalCards: {
        operation: {
            1: Card[]
            2: Card[]
            3: Card[]
        }
        combat: {
            1: Card[]
            2: Card[]
            3: Card[]
        }
        baseDefense: {
            1: Card[]
            2: Card[]
            3: Card[]
        }
    }
}

export enum Characters {
    STRYKR = 'STRYKR',
    BIRTIE_RAE = 'BIRTIE-RAE',
    BATTERY = 'BATTERY',
    EPHEMERIS = 'EPHEMERIS',
}

export type Timeline = Immutable<Record<number, TimelineStep>>

export type TimelineStep = Immutable<{
    checkpoint: number
    enemies: Enemy[]
    mercKiller?: Enemy
    mercKillerDefeated?: boolean
    cardTiers: Tiers[]
    completed: boolean
    baseUnderAttack: boolean
    injectCombatEncounterCard: boolean
    numberOfCombatEncountersCompleted: number
}>

export enum GameModes {
    Limited = 'LIMITED',
    Infinite = 'INFINITE',
    Story = 'STORY',
}

export enum Tracks {
    None = 'NONE',
    Combat = 'COMBAT',
}

export enum EffectLevels {
    DeadlyEffect = 'DEADLY_EFFECT',
    AverageEffect = 'AVERAGE_EFFECT',
    WeakEffect = 'WEAK_EFFECT',
    WeakNegativeEffect = 'WEAK_NEGATIVE_EFFECT',
    AverageNegativeEffect = 'AVERAGE_NEGATIVE_EFFECT',
    DeadlyNegativeEffect = 'DEADLY_NEGATIVE_EFFECT',
}

export enum Duration {
    Round = 'SINGLE_ROUND',
    Scene = 'SCENE',
    Mission = 'MISSION',
}

export type Status = {
    value: number
    duration: Duration | number
    scene: Scenes
}

export type Statuses = Immutable<{
    // Defense buffs:
    inCover?: Status // reduces damage by 50%
    armored?: Status // reduces damage by 50%

    // Special defense debuffs
    overheated?: Status // if armored, can't attack this turn (lasts 1 turn)
    suppressed?: Status // if in inCover, can't attack this turn (lasts 1 turn)

    // misc buffs/debuffs
    enraged?: Status // deal and take 50% more damage
    panicked?: Status // deal and take 50% less damage
    bleeding?: Status // take 50% additional damage each turn
    killingMachine?: Status // deal 50% additional damage each turn
    dazed?: Status // target deals 50% less damage this turn
    smoked?: Status // prevent all damage this turn
    mutilated?: Status // decreases max HP
    thermalSights?: Status // If smoked, you can deal damage, but your enemy cannot

    // Base Defense
    burning?: Status // Can't repair base while base is burning
    badWeather?: Status // enemy attacks do 50% less damage for one round, 50% less repairs
    overwhelmed?: Status // enemy attacks do 50% more damage for one round, 50% less repairs
    protected?: Status // take 50% less damage
    surrounded?: Status // take 50% more damage
}>

export type InvisibleStatuses = Immutable<{
    allIn?: Status // If you end the op with less than 50% HP, increase supplies gained by 25%
    allInNegative?: Status // If you end the op with less than 50% HP, decrease supplies gained by 25%
    spoilsOfWar?: Status // +100 supplies for each combat encounter this op
    spoilsOfWarNegative?: Status // -100 supplies for each combat encounter this op
    panicButton?: Status // gain 5 SHIELD each round you are panicked
    atomicRage?: Status // While enraged, everytime you deal damage, deal +10 damage and take 5 damage
}>

export type Stats = Immutable<{
    shield?: number // protects hp
    maxShield?: number
    hp: number
    maxHp: number
    money?: number
    supplies?: number
    gainedMoney?: number
    gainedSupplies?: number

    // combat skill: number  // combat skill increases the damage you deal

    // Tac adv
    // TODO figure what tac adv does now that attack phase is gone
    // tacticalAdvantage?: number

    // Base
    personnel?: number // repairs damage to base each turn, anti-air/ground capabilities tied to personnel
    morale?: number // increases the capabilities of personnel
    fortifications?: number // Reduces all incoming attacks
    antiAir?: number // reduces incoming attacks from the air
    antiGround?: number // reduces incoming attacks from the ground
    // No tac adv for base, base always gets to act first

    // personnel + nmorale to base hp each turn
}>

export type Player = Immutable<{
    character: Character
    barks: Bark[]
    stats: Stats
    statuses: Statuses
    invisibleStatuses?: InvisibleStatuses
    legends: Card[]
}>

export enum EnemyVariants {
    MercKiller = 'MERC KILLER',
    Deadly = 'DEADLY',
    Average = 'AVERAGE',
    Weak = 'WEAK',
}

export type Enemy = Immutable<{
    id: string | null
    name: string
    affiliation: string
    description: string
    species: string
    enemyType: string
    barks: Bark[]
    combatTaunt: string
    variant: EnemyVariants
    variants: {
        [EnemyVariants.MercKiller]: EnemyVariantFields
        [EnemyVariants.Deadly]: EnemyVariantFields
        [EnemyVariants.Average]: EnemyVariantFields
        [EnemyVariants.Weak]: EnemyVariantFields
    }
    character: {
        animationState: AnimationStates
    }
}>

export type EnemyVariantFields = Immutable<{
    statuses: Statuses
    invisibleStatuses?: InvisibleStatuses
    stats: Stats
    cards: {
        attack: Card
        defense: Card
        special: Card
    }
}>

export type Base = Immutable<{
    barks: Bark[]
    stats: Stats
    statuses: Statuses
}>

export type Slot = Immutable<{ type: EffectLevels; card: Card | null }>
export type Slots = Immutable<Record<number, Slot>>

export type Level = Immutable<{ complete: boolean; inProgress: boolean }>

export enum Tiers {
    One = '1',
    Two = '2',
    Three = '3',
}

export enum Scenes {
    Operation = 'operation',
    Combat = 'combat',
    BaseDefense = 'baseDefense',
}

export type Bark = {
    id: string
    text: string
}

export type SceneEvent = Immutable<{ inProgress: boolean; details: EventDetails | null }>
export enum EventTypes {
    Positive = 'positive',
    Negative = 'negative',
}
export type EventDetails = Immutable<{
    name: string
    type: EventTypes
    description: string
    choiceOne: EventChoice
    choiceTwo: EventChoice
}>
export type EventChoice = Immutable<{
    text: string
    effects: {
        property?: string
        status?: string
        modifier?: number
        combatEncounter?: boolean
    }[]
    callback: () => void
}>

export type OperationContext = Immutable<{
    name: string
    names: string[]
    affirmation: string
    deck: Card[]
    allCards: Card[]
    currentPlayedCard: Card | null
    discardPile: Card[]
    round: number
    slots: Slots
    operationAborted: boolean
    drainedCards: Card[]
    event: SceneEvent
    barks: Bark[]
}>

export type CombatContext = {
    type: EffectLevels
    deck: Card[]
    allCards: Card[]
    currentPlayedCard: Card | null
    discardPile: Card[]
    slots: Slots
    round: number
    retreated: boolean
    encounterQueue: { enemyVariant: EnemyVariants }[]
    primalFuryChargeLevel: number
    drainedCards: Card[]
}

export type BaseDefenseContext = {
    deck: Card[]
    allCards: Card[]
    currentPlayedCard: Card | null
    discardPile: Card[]
    round: number
    slots: Slots
    event: SceneEvent
    currentBaseAttacker: Card | null
    drainedCards: Card[]
}

export type Cards = Array<Card | null>
export type Card = Immutable<{
    id: string
    key: string
    title: string
    identity?: CardIdentity
    effects: CardEffectGroups
    storeDescription: string
    cost: CardCost
    transitionToCombat?: boolean
    triggerEvent?: boolean
    drainCard?: boolean
    // TODO add different levels of temp card [round, scene, run, etc.]
    isTempCard?: boolean
    isBaseAttackerCard?: boolean
    tier: Tiers
}>

export enum CardIdentity {
    Attack = 'ATTACK',
    Defense = 'DEFENSE',
    Support = 'SUPPORT',
    Utility = 'UTILITY',
    Event = 'EVENT',
    Legend = 'LEGEND',
    EnemyAttack = 'ENEMY ATTACK',
    EnemyDefense = 'ENEMY DEFENSE',
    BaseAttacker = 'BASE ATTACKER',
    Encounter = 'ENCOUNTER',
}

export enum AttackTypes {
    Regular = 'REGULAR',

    IgnoresArmored = 'IGNORES_ARMORED',
    IgnoresInCover = 'IGNORES_IN_COVER',
    EnergyBlast = 'ENERGY_BLAST',
    CruelBlade = 'CRUEL_BLADE',
    LaserSword = 'LASER_SWORD',
    Flamethrower = 'FLAMETHROWER',
    IllogicalCourage = 'ILLOGICAL_COURAGE',
    DizziedStrike = 'DIZZIED_STRIKE',
    FlamingBile = 'FLAMING_BILE',

    Ground = 'GROUND',
    Air = 'AIR',
    Support = 'SUPPORT',
}

export type CardCost = {
    amount: number
    type: string
}

export type Adjustment = {
    modifier?: number
    isPercentage?: boolean
    support?: boolean
    additionalMods?: {
        shieldOverload?: boolean
        competitionKiller?: boolean
        panicButtonShieldValue?: number
    }
}

export type CardEffectGroups = Record<EffectLevels, CardEffects>

// <Target: (card effects affecting that target)>
export type CardEffects = {
    player?: CardEffectFields
    enemy?: CardEffectFields
    base?: CardEffectFields
}

export type CardEffectFields = {
    description: string
    flavorText?: string
    alternativeTitle?: string
    bark?: string
    characterAnimation?: AnimationStates
    infoText?: string
    attack?: {
        damage: number
        attackType: AttackTypes
    }
    stats?: CardEffectsStatFields
    statuses?: CardEffectsStatusFields
    invisibleStatuses?: CardEffectsInvisibleStatusFields
    combatEncounter?: {
        enemyVariant: EnemyVariants
    }
    other?: {
        fetch?: boolean
    }
}

export type CardEffectsStatFields = {
    all?: Adjustment
    hp?: Adjustment
    shield?: Adjustment
    supplies?: Adjustment
    gainedSupplies?: Adjustment
    money?: Adjustment
    gainedMoney?: Adjustment
    personnel?: Adjustment
    morale?: Adjustment
    fortifications?: Adjustment
    antiAir?: Adjustment
    antiGround?: Adjustment
}

export type CardEffectsStatusFields = {
    armored?: Adjustment
    inCover?: Adjustment
    heightenedSenses?: Adjustment
    nimble?: Adjustment
    overheated?: Adjustment
    suppressed?: Adjustment
    dazed?: Adjustment
    hamstrung?: Adjustment
    enraged?: Adjustment
    panicked?: Adjustment
    bleeding?: Adjustment
    killingMachine?: Adjustment
    smoked?: Adjustment
    mutilated?: Adjustment
    thermalSights?: Adjustment

    burning?: Adjustment
    disrupted?: Adjustment
    badWeather?: Adjustment
    overwhelmed?: Adjustment
    protected?: Adjustment
    surrounded?: Adjustment
}

export type CardEffectsInvisibleStatusFields = {
    allIn?: Adjustment
    allInNegative?: Adjustment
    spoilsOfWar?: Adjustment
    spoilsOfWarNegative?: Adjustment
    panicButton?: Adjustment
    atomicRage?: Adjustment
}

export enum AnimationStates {
    Init = 'INIT',
    Idle = 'IDLE',
    Attack = 'ATTACK',
    Hit = 'HIT',
    Dead = 'DEAD',
    Exit = 'EXIT',
}
