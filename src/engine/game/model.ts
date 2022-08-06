import produce, { castDraft } from 'immer'
import { take, drop, isEmpty, sample, kebabCase, delay, uniqueId, isNil } from 'lodash'
import deepEqual from 'deep-equal'
import { createModel } from 'xstate/lib/model'
import Chance from 'chance'

import gameData from '@/engine/game/gameData'
import {
    shuffleDeck,
    calcStatValue,
    updateSlots,
    calculatePlayerAttackDamage,
    calculateEnemyAttackDamage,
    getCalculatedBaseStats,
    calculateBaseAttackerDamage,
    handleStatChange,
    applyCardEffectsToStats,
    applyCardEffectsToStatuses,
    renderCardSoundEffect,
    renderBaseCardSoundEffect,
    notEmpty,
    updateBarks,
    uniq,
    getNewStatValue,
    calculateHealthAndShield,
} from '@/utils/helpers'
import {
    POSITIVE_BASE_DEFENSE_EVENTS,
    NEGATIVE_BASE_DEFENSE_EVENTS,
    MERCENARY_AFFIRMATIONS,
    POSITIVE_OPERATION_EVENTS,
    NEGATIVE_OPERATION_EVENTS,
} from '@/utils/constants'
import {
    BaseDefenseContext,
    Scenes,
    CombatContext,
    GameContext,
    OperationContext,
    Statuses,
    EffectLevels,
    Card,
    EventChoice,
    GameModes,
    EnemyVariants,
    AttackTypes,
    Slot,
    DinoMercsContext,
    Characters,
    Duration,
    AnimationStates,
    Tracks,
    GameRoutes,
} from '@/types'
import { initialContext, initialGameContext } from '@/engine/game/initialContext'
import { CHARACTER_CHOICES, INITIAL_STATUSES, DEFAULT_ENEMY } from '@/engine/game/constants'
import { BASE_ATTACKERS } from '@/cards/baseDefense/cards/attackers'
import { ALL_SEEDS } from '@/seeds'
import { COMBAT_ENCOUNTER_CARD } from '@/cards/operation/cards/combatEncounter'
import { RAIDER_AMBUSH } from '@/cards/operation/cards/raiderAmbush'
import { LAND_MINE } from '@/cards/operation/cards/landMine'
import { THIEVING_BANDITS } from '@/cards/operation/cards/thievingBandits'

export const dinoMercsModel = createModel(initialContext, {
    events: {
        // General game actions
        SET_CURRENT_SOUND_EFFECT: (effect: string) => ({ effect }),
        INCREMENT_CHECKPOINT_COUNT: () => ({}),
        RESET_GAME: () => ({}),
        GO_TO_REWARDS: () => ({}),
        SAVE_GAME: () => ({}),
        GO_TO_START_SCREEN: () => ({}),

        // Routing actions
        GO_TO_START_ROUTE: () => ({}),
        GO_TO_CHARACTER_SELECTION_ROUTE: () => ({}),
        GO_TO_TUTORIAL_ROUTE: () => ({}),
        GO_TO_GAME_OVER_ROUTE: () => ({}),
        GO_TO_GAME_WON_ROUTE: () => ({}),
        GO_TO_BASE_ROUTE: () => ({}),
        GO_TO_OPERATION_ROUTE: () => ({}),
        GO_TO_OPERATION_REWARDS_ROUTE: () => ({}),
        GO_TO_COMBAT_ROUTE: () => ({}),
        GO_TO_COMBAT_REWARDS_ROUTE: () => ({}),
        GO_TO_BASE_DEFENSE_ROUTE: () => ({}),
        GO_TO_BASE_DEFENSE_REWARDS_ROUTE: () => ({}),

        // Audio related
        SET_GAME_AUDIO_VOLUME: (volume: number) => ({ volume }),
        MUTE_GAME_AUDIO: (muted: boolean) => ({ muted }),
        PLAY_SOUND_TRACK: () => ({}),
        SET_TRACK: (track: Tracks) => ({ track }),
        FADEOUT_SOUND_TRACK: () => ({}),
        STOP_SOUND_TRACK: () => ({}),

        // Start screen
        START_NEW_GAME: (mode: GameModes, seed?: string) => ({ mode, seed }),
        CONTINUE_CURRENT_GAME: () => ({}),

        // Intro
        INTRO_COMPLETED: () => ({}),

        // Character selection
        CHOOSE_CHARACTER: (characterChoice: Characters) => ({ characterChoice }),

        // Base screen
        START_OPERATION: () => ({}),
        DEFEND_BASE: () => ({}),
        VIEW_CHARACTER: () => ({}),
        VIEW_COMBAT_DECK: () => ({}),
        VIEW_OPERATION_DECK: () => ({}),
        VIEW_BASE_DEFENSE_DECK: () => ({}),
        GO_BACK_TO_BASE_SCREEN: () => ({}),
        BASE_RESET: () => ({}),

        // Operation phases
        OPERATION_INTRO_PHASE_ENDS: () => ({}),
        OPERATION_DRAW_PHASE_ENDS: () => ({}),
        OPERATION_CONFIRM_CARD_SELECTIONS: () => ({}),
        OPERATION_RESOLVE_PHASE_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_CARD_ONE_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_EVENT_ONE_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_CARD_TWO_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_EVENT_TWO_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_CARD_THREE_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_EVENT_THREE_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_CARD_FOUR_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_EVENT_FOUR_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_CARD_FIVE_ENDS: () => ({}),
        OPERATION_RESOLVE_PHASE_EVENT_FIVE_ENDS: () => ({}),
        OPERATION_REWARD_PHASE_ENDS: () => ({}),
        OPERATION_COMBAT_STARTS: () => ({}),
        OPERATION_DISCARD_PHASE_ENDS: () => ({}),
        OPERATION_ROUND_ENDS: () => ({}),
        OPERATION_REWARD_CHOSEN: (card?: Card) => ({ card }),
        OPERATION_CARD_PURCHASED: (card?: Card) => ({ card }),
        OPERATION_ENDS: () => ({}),
        ABORT_OPERATION: () => ({}),
        OPERATION_EVENT_PHASE_STARTS: () => ({}),

        // Operation events
        DRAW_OPERATION_HAND: (numberOfCards?: number, showSoundEffect?: boolean) => ({
            numberOfCards,
            showSoundEffect,
        }),
        DISCARD_OPERATION_HAND: () => ({}),
        SET_OPERATION_HAND: (updatedHand: Array<Card | null>) => ({ updatedHand }),
        RESOLVE_SELECTED_OPERATION_CARDS: () => ({}),
        SHUFFLE_OPERATION_DECK: (showSoundEffect?: boolean) => ({ showSoundEffect }),
        INCREMENT_OPERATION_ROUND: () => ({}),
        APPLY: (slot: Slot, callback: () => void) => ({ slot, callback }),
        ENQUEUE_COMBAT_ENCOUNTER: (effectLevel: EffectLevels) => ({ effectLevel }),
        FETCH_OPERATION_CARD: (originalCard: Card, newCard: Card) => ({
            originalCard,
            newCard,
        }),
        SET_OPERATION_NAME: () => ({}),
        DRAIN_OPERATION_CARD: (card: Card) => ({ card }),
        TRIGGER_OPERATION_EVENT: (callback: () => void, slot: Slot) => ({ callback, slot }),
        APPLY_OPERATION_EVENT_CHOICE: (choice: EventChoice) => ({ choice }),
        INJECT_COMBAT_ENCOUNTER: () => ({}),

        // Combat phases
        START_COMBAT: () => ({}),
        COMBAT_CONFIRM_CARD_SELECTIONS: () => ({}),
        COMBAT_RESOLVE_PHASE_CARD_ONE_ENDS: () => ({}),
        COMBAT_RESOLVE_PHASE_CARD_TWO_ENDS: () => ({}),
        COMBAT_RESOLVE_PHASE_CARD_THREE_ENDS: () => ({}),
        COMBAT_RESOLVE_PHASE_CARD_FOUR_ENDS: () => ({}),
        COMBAT_RESOLVE_PHASE_CARD_FIVE_ENDS: () => ({}),
        COMBAT_ATTACK_DAMAGE_PHASE_ONE_ENDS: () => ({}),
        COMBAT_ATTACK_DAMAGE_PHASE_TWO_ENDS: () => ({}),
        COMBAT_DISCARD_PHASE_ENDS: () => ({}),
        COMBAT_REWARD_PHASE_ENDS: () => ({}),
        COMBAT_ROUND_ENDS: () => ({}),
        COMBAT_REWARD_CHOSEN: (card?: Card) => ({ card }),
        COMBAT_CARD_PURCHASED: (card?: Card) => ({ card }),
        RETREAT_FROM_COMBAT: () => ({}),

        // Combat events
        INIT_COMBAT: () => ({}),
        DRAW_COMBAT_HAND: (numberOfCards?: number, showSoundEffect?: boolean) => ({
            numberOfCards,
            showSoundEffect,
        }),
        DISCARD_COMBAT_HAND: () => ({}),
        SET_COMBAT_HAND: (updatedHand: Array<Card | null>) => ({ updatedHand }),
        SHUFFLE_COMBAT_DECK: (showSoundEffect?: boolean) => ({ showSoundEffect }),
        INCREMENT_COMBAT_ROUND: () => ({}),
        APPLY_COMBAT_CARD: (card: Card, slot: Slot, callback: () => void) => ({
            card,
            slot,
            callback,
        }),
        ATTACK_PLAYER: () => ({}),
        ATTACK_ENEMY: () => ({}),
        FETCH_COMBAT_CARD: (originalCard: Card, newCard: Card) => ({
            originalCard,
            newCard,
        }),
        INJECT_ENEMY_CARDS: () => ({}),
        DRAIN_CARD: (card: Card) => ({ card }),
        ENEMY_DEFEATED: () => ({}),
        RESET_CHARACTERS: () => ({}),

        // Base defense phases
        BASE_DEFENSE_INTRO_PHASE_ENDS: () => ({}),
        BASE_DEFENSE_CONFIRM_CARD_SELECTIONS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE_ENDS: () => ({}),
        BASE_DEFENSE_RESOLVE_PHASE_ENDS: () => ({}),
        BASE_DEFENSE_DISCARD_PHASE_ENDS: () => ({}),
        BASE_DEFENSE_REWARD_PHASE_ENDS: () => ({}),
        BASE_DEFENSE_ROUND_ENDS: () => ({}),
        BASE_DEFENSE_EVENT_PHASE_STARTS: () => ({}),
        BASE_DEFENSE_INJECT_ATTACKER_PHASE_ENDS: () => ({}),

        // Base defense events
        DRAW_BASE_DEFENSE_HAND: (numberOfCards?: number, showSoundEffect?: boolean) => ({
            numberOfCards,
            showSoundEffect,
        }),
        DISCARD_BASE_DEFENSE_HAND: () => ({}),
        SET_BASE_DEFENSE_HAND: (updatedHand: Array<Card | null>) => ({ updatedHand }),
        SHUFFLE_BASE_DEFENSE_DECK: (showSoundEffect?: boolean) => ({ showSoundEffect }),
        INCREMENT_BASE_DEFENSE_ROUND: () => ({}),
        APPLY_BASE_DEFENSE_CARD: (slot: Slot, callback: () => void) => ({ slot, callback }),
        BASE_DEFENSE_COMBAT: () => ({}),
        FETCH_BASE_DEFENSE_CARD: (originalCard: Card, newCard: Card) => ({
            originalCard,
            newCard,
        }),
        ATTACK_BASE: () => ({}),
        BASE_DEFENSE_REWARD_CHOSEN: (card?: Card) => ({ card }),
        BASE_DEFENSE_CARD_PURCHASED: (card?: Card) => ({ card }),
        REPAIR_BASE: () => ({}),
        DRAIN_BASE_DEFENSE_CARD: (card: Card) => ({ card }),
        TRIGGER_BASE_DEFENSE_EVENT: (callback: () => void, slot: Slot) => ({
            callback,
            slot,
        }),
        APPLY_BASE_DEFENSE_EVENT_CHOICE: (choice: EventChoice) => ({ choice }),
        INJECT_BASE_DEFENSE_ATTACKER: () => ({}),

        // Win/lose
        GAME_OVER: () => ({}),
        GAME_WON: () => ({}),

        // misc
        NONE_EVENT: () => ({}), // placeholder for when need a "nothing" event to happen, ts hack
    },
})

export const startNewGame = dinoMercsModel.assign(
    {
        runInProgress: true,
        game: (_, e) => {
            const { mode, seed } = e
            if (seed) {
                const matchingSeed = ALL_SEEDS.find((s: GameContext) => s.id === seed)
                if (matchingSeed) {
                    return {
                        ...matchingSeed,
                        mode,
                        currentRoute: GameRoutes.CharacterSelectionScreen,
                    }
                }
            }
            return {
                ...initialGameContext,
                mode,
                currentRoute: GameRoutes.CharacterSelectionScreen,
            }
        },
    },
    'START_NEW_GAME',
)

export const resetGame = dinoMercsModel.assign(initialContext, 'RESET_GAME')

export const resetScenes = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    combatDraft.round = 1
                    combatDraft.retreated = false

                    const cardsInSlots = Object.values(combatDraft.slots)
                        .map(s => s.card)
                        .filter(notEmpty)
                    combatDraft.deck = uniq(
                        combatDraft.deck
                            .concat(cardsInSlots)
                            .concat(combatDraft.discardPile)
                            .concat(combatDraft.drainedCards)
                            .filter(c => !c.isTempCard),
                    )

                    combatDraft.slots = updateSlots(combatDraft.slots, [])
                    combatDraft.discardPile = []
                    combatDraft.drainedCards = []
                })

                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    baseDefenseDraft.round = 1

                    const cardsInSlots = Object.values(baseDefenseDraft.slots)
                        .map(s => s.card)
                        .filter(notEmpty)
                    baseDefenseDraft.deck = uniq(
                        baseDefenseDraft.deck
                            .concat(cardsInSlots)
                            .concat(baseDefenseDraft.discardPile)
                            .concat(baseDefenseDraft.drainedCards)
                            .filter(card => !card.isTempCard),
                    )

                    baseDefenseDraft.slots = updateSlots(baseDefenseDraft.slots, [])
                    baseDefenseDraft.discardPile = []
                    baseDefenseDraft.drainedCards = []
                })

                draft.operation = produce(draft.operation, operationDraft => {
                    operationDraft.round = 1

                    const cardsInSlots = Object.values(operationDraft.slots)
                        .map(s => s.card)
                        .filter(notEmpty)
                    operationDraft.deck = uniq(
                        operationDraft.deck
                            .concat(cardsInSlots)
                            .concat(operationDraft.discardPile)
                            .concat(operationDraft.drainedCards)
                            .filter(card => !card.isTempCard),
                    )

                    operationDraft.slots = updateSlots(operationDraft.slots, [])
                    operationDraft.discardPile = []
                    operationDraft.drainedCards = []
                    operationDraft.operationAborted = false
                })
                draft.player = produce(draft.player, playerDraft => {
                    playerDraft.barks = []
                })
                draft.enemy = produce(draft.enemy, enemyDraft => {
                    if (!enemyDraft) return
                    enemyDraft.barks = []
                })
                draft.base = produce(draft.base, baseDraft => {
                    baseDraft.barks = []
                })
            }),
    },
    'BASE_RESET',
)

export const goToStartRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.StartScreen
            }),
    },
    'GO_TO_START_ROUTE',
)

export const goToCharacterSelectionRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.CharacterSelectionScreen
            }),
    },
    'GO_TO_CHARACTER_SELECTION_ROUTE',
)

export const goToTutorialRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.TutorialScreen
            }),
    },
    'GO_TO_TUTORIAL_ROUTE',
)

export const goToGameOverRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.GameOverScreen
            }),
    },
    'GO_TO_GAME_OVER_ROUTE',
)

export const goToGameWonRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.GameWonScreen
            }),
    },
    'GO_TO_GAME_WON_ROUTE',
)

export const goToBaseRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.BaseScreen
            }),
    },
    'GO_TO_BASE_ROUTE',
)

export const goToOperationRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.OperationScreen
            }),
    },
    'GO_TO_OPERATION_ROUTE',
)

export const goToCombatRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.CombatScreen
            }),
    },
    'GO_TO_COMBAT_ROUTE',
)

export const goToBaseDefenseRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.BaseDefenseScreen
            }),
    },
    'GO_TO_BASE_DEFENSE_ROUTE',
)

export const continueCurrentGameRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.BaseScreen
            }),
    },
    'CONTINUE_CURRENT_GAME',
)

export const startOperationRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.OperationScreen
            }),
    },
    'START_OPERATION',
)

export const defendBaseRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.OperationScreen
            }),
    },
    'DEFEND_BASE',
)

export const goBackToBaseScreenRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.BaseScreen
            }),
    },
    'GO_BACK_TO_BASE_SCREEN',
)

export const goToOperationRewardsRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.OperationRewardsScreen
            }),
    },
    'GO_TO_OPERATION_REWARDS_ROUTE',
)
export const goToCombatRewardsRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.CombatRewardsScreen
            }),
    },
    'GO_TO_COMBAT_REWARDS_ROUTE',
)
export const goToBaseDefenseRewardsRoute = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.BaseDefenseRewardsScreen
            }),
    },
    'GO_TO_BASE_DEFENSE_REWARDS_ROUTE',
)

export const introCompleted = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.currentRoute = GameRoutes.BaseScreen
            }),
    },
    'INTRO_COMPLETED',
)

function drawHandByScene(
    ctx: GameContext,
    scene: Scenes.Operation,
    showSoundEffect?: boolean,
): OperationContext
function drawHandByScene(
    ctx: GameContext,
    scene: Scenes.Combat,
    showSoundEffect?: boolean,
): CombatContext
function drawHandByScene(
    ctx: GameContext,
    scene: Scenes.BaseDefense,
    showSoundEffect?: boolean,
): BaseDefenseContext
function drawHandByScene(ctx: GameContext, scene: Scenes) {
    return produce(ctx[scene], draft => {
        const numberOfOpenSlots = Object.values(draft.slots).filter(s => !s.card).length
        const cards = Object.values(draft.slots).map(s => s.card)
        const drawnCards = take(draft.deck, numberOfOpenSlots).reverse()
        const updatedDeck = drop(draft.deck, drawnCards.length)
        const updatedCards = uniq(cards.map(c => c || drawnCards.shift() || null))
        draft.deck = castDraft(uniq(updatedDeck))
        draft.slots = updateSlots(draft.slots, updatedCards)
    })
}

export const drawOperationHand = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.operation = castDraft(
                    drawHandByScene(draft, Scenes.Operation, e.showSoundEffect),
                )
            }),
    },
    'DRAW_OPERATION_HAND',
)

export const drawCombatHand = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat = castDraft(drawHandByScene(draft, Scenes.Combat))
            }),
    },
    'DRAW_COMBAT_HAND',
)

export const drawBaseDefenseHand = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.baseDefense = drawHandByScene(draft, Scenes.BaseDefense)
            }),
    },
    'DRAW_BASE_DEFENSE_HAND',
)

function discardHandByScene(ctx: GameContext, scene: Scenes.Operation): OperationContext
function discardHandByScene(ctx: GameContext, scene: Scenes.Combat): CombatContext
function discardHandByScene(ctx: GameContext, scene: Scenes.BaseDefense): BaseDefenseContext
function discardHandByScene(ctx: GameContext, scene: Scenes) {
    return produce(ctx[scene], draft => {
        const filteredHand = Object.values(draft.slots)
            .filter(s => !s.card?.drainCard)
            .filter(s => !s.card?.isTempCard)
            .map(s => s.card)
            .filter(notEmpty)
        const drainedCards = Object.values(draft.slots)
            .filter(s => s.card?.drainCard)
            .map(s => s.card)
            .filter(notEmpty)
        draft.discardPile = castDraft(uniq(draft.discardPile.concat(filteredHand)))
        draft.slots = updateSlots(draft.slots, [])
        draft.currentPlayedCard = null
        const updatedDrainedCards = draft.drainedCards.concat(drainedCards)
        draft.drainedCards = castDraft(updatedDrainedCards)
    })
}

export const discardOperationHand = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.operation = castDraft(discardHandByScene(draft, Scenes.Operation))
            }),
    },
    'DISCARD_OPERATION_HAND',
)

export const discardCombatHand = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat = castDraft(discardHandByScene(draft, Scenes.Combat))
            }),
    },
    'DISCARD_COMBAT_HAND',
)

export const discardBaseDefenseHand = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.baseDefense = castDraft(discardHandByScene(draft, Scenes.BaseDefense))
            }),
    },
    'DISCARD_BASE_DEFENSE_HAND',
)

export const applySelectedOperationCardToPlayer = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { slot, callback } = e
                draft.operation = produce(draft.operation, opDraft => {
                    opDraft.currentPlayedCard = slot.card
                })

                const { player, enemy } = draft
                if (slot.card) {
                    const effects = slot.card.effects[slot.type]

                    draft.player = produce(draft.player, playerDraft => {
                        const cardAffectsPlayerStats =
                            effects.player && 'stats' in effects.player && effects.player.stats
                        if (cardAffectsPlayerStats) {
                            playerDraft.stats = applyCardEffectsToStats(
                                effects.player.stats,
                                playerDraft.stats,
                                draft.base.stats.hp,
                            )
                        }

                        const cardAffectsPlayerStatuses =
                            effects.player &&
                            'statuses' in effects.player &&
                            effects.player.statuses
                        if (cardAffectsPlayerStatuses) {
                            playerDraft.statuses = applyCardEffectsToStatuses(
                                effects.player.statuses,
                                playerDraft.statuses,
                                effects.player.attack,
                                playerDraft.stats,
                            )
                        }

                        const enemyEntity = enemy?.variants[enemy?.variant]
                        const bark = effects.player
                            ? renderCardSoundEffect(
                                  effects.player,
                                  slot.type,
                                  player,
                                  enemyEntity,
                                  'player',
                              )
                            : ''
                        playerDraft.barks = updateBarks(playerDraft.barks, bark)

                        delay(() => callback(), 1000)
                    })
                }
            }),
    },
    'APPLY',
)

export const applySelectedCombatCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    combatDraft.currentPlayedCard = e.card
                })
                const { player, enemy, base } = draft
                const { slot } = e
                if (slot.card && enemy?.variants[enemy?.variant]) {
                    const effects = slot.card.effects[slot.type]
                    const enemyVariant = enemy.variants[enemy.variant]

                    draft.enemy = produce(enemy, enemyDraft => {
                        if (effects.enemy?.characterAnimation) {
                            enemyDraft.character.animationState = effects.enemy.characterAnimation
                        }
                        const bark = effects.enemy
                            ? renderCardSoundEffect(
                                  effects.enemy,
                                  slot.type,
                                  player,
                                  enemyVariant,
                                  'enemy',
                              )
                            : ''
                        enemyDraft.barks = updateBarks(enemyDraft.barks, bark)

                        const cardAffectsEnemyStats =
                            effects.enemy && 'stats' in effects.enemy && effects.enemy.stats
                        if (cardAffectsEnemyStats) {
                            enemyVariant.stats = applyCardEffectsToStats(
                                effects.enemy.stats,
                                enemyVariant.stats,
                            )
                        }

                        const cardAffectsEnemyStatuses =
                            effects.enemy &&
                            ('statuses' in effects.enemy || 'invisibleStatuses' in effects.enemy) &&
                            effects.enemy.statuses
                        if (cardAffectsEnemyStatuses) {
                            enemyVariant.statuses = applyCardEffectsToStatuses(
                                effects.enemy.statuses,
                                enemyVariant.statuses,
                                effects.enemy.attack,
                                enemyVariant.stats,
                            )
                        }

                        const cardDealsAttackDamageToEnemy = effects.enemy && effects.enemy.attack
                        if (cardDealsAttackDamageToEnemy) {
                            const { calculatedDamage } = calculatePlayerAttackDamage(
                                player,
                                enemyVariant,
                                effects.enemy.attack.damage || 0,
                                effects.enemy.attack.attackType,
                                slot.type,
                                draft.base.stats.hp,
                            )

                            // Handle ATOMIC RAGE damage to player (is dealt whenever a player deals damage)
                            const { shield: playerShield, hp: playerHp } = calculateHealthAndShield(
                                draft.player.stats?.shield,
                                draft.player.stats.hp,
                                draft.player.stats.maxHp,
                                5,
                                draft.player.statuses.mutilated?.value,
                            )
                            draft.player.stats.shield = playerShield
                            draft.player.stats.hp = playerHp

                            const { shield, hp } = calculateHealthAndShield(
                                enemyVariant.stats?.shield,
                                enemyVariant.stats.hp,
                                enemyVariant.stats.maxHp,
                                calculatedDamage,
                                draft.player.statuses.mutilated?.value,
                            )
                            enemyVariant.stats.shield = shield
                            enemyVariant.stats.hp = hp
                        }
                    })
                }
                if (slot.card && enemy?.variants[enemy?.variant]) {
                    const effects = slot.card.effects[slot.type]
                    const enemyVariant = enemy.variants[enemy.variant]

                    draft.player = produce(draft.player, playerDraft => {
                        if (effects.player?.characterAnimation) {
                            playerDraft.character.animationState = effects.player.characterAnimation
                        }
                        const bark = effects.player
                            ? renderCardSoundEffect(
                                  effects.player,
                                  slot.type,
                                  player,
                                  enemyVariant,
                                  'player',
                              )
                            : ''
                        playerDraft.barks = updateBarks(playerDraft.barks, bark)

                        const cardAffectsPlayerStats =
                            effects.player && 'stats' in effects.player && effects.player.stats
                        if (cardAffectsPlayerStats) {
                            playerDraft.stats = applyCardEffectsToStats(
                                effects.player.stats,
                                playerDraft.stats,
                                base.stats.hp,
                            )
                        }

                        const cardAffectsPlayerStatuses =
                            effects.player &&
                            ('statuses' in effects.player ||
                                'invisibleStatuses' in effects.player) &&
                            effects.player.statuses
                        if (cardAffectsPlayerStatuses) {
                            playerDraft.statuses = applyCardEffectsToStatuses(
                                effects.player.invisibleStatuses,
                                playerDraft.invisibleStatuses,
                                effects.player.attack,
                                playerDraft.stats,
                            )
                        }

                        const cardDealsEnemyAttackDamageToPlayer =
                            effects.player && effects.player.attack
                        if (cardDealsEnemyAttackDamageToPlayer) {
                            const { calculatedDamage } = calculateEnemyAttackDamage(
                                enemyVariant,
                                playerDraft,
                                effects.player.attack.damage || 0,
                                effects.player.attack.attackType,
                                slot.type,
                                base.stats.hp,
                            )

                            // Handle ATOMIC RAGE damage to enemy (is dealt whenever a player deals damage)
                            const { shield: enemyShield, hp: enemyHp } = calculateHealthAndShield(
                                enemyVariant.stats?.shield,
                                enemyVariant.stats.hp,
                                enemyVariant.stats.maxHp,
                                5,
                                enemyVariant.statuses.mutilated?.value,
                            )
                            enemyVariant.stats.shield = enemyShield
                            enemyVariant.stats.hp = enemyHp

                            const { shield, hp } = calculateHealthAndShield(
                                playerDraft.stats?.shield,
                                playerDraft.stats.hp,
                                playerDraft.stats.maxHp,
                                calculatedDamage,
                                draft.player.statuses.mutilated?.value,
                            )
                            playerDraft.stats.shield = shield
                            playerDraft.stats.hp = hp
                        }

                        delay(() => e.callback(), 1000)
                    })
                }
            }),
    },
    'APPLY_COMBAT_CARD',
)

export const initCombat = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    const remainingEncounters = combatDraft.encounterQueue.slice(1)
                    combatDraft.encounterQueue = remainingEncounters
                })
                draft.enemy = produce(draft.enemy, enemyDraft => {
                    const { enemies, mercKiller, mercKillerDefeated } =
                        draft.timeline[draft.currentCheckpoint]
                    const currentEncounter = ctx.game.combat.encounterQueue.slice().pop()
                    if (currentEncounter && !isEmpty(enemies)) {
                        const newEnemy = sample(enemies)
                        if (!newEnemy) return enemyDraft
                        return {
                            ...newEnemy,
                            variant: currentEncounter.enemyVariant,
                            barks: updateBarks([], newEnemy.combatTaunt),
                        }
                    }
                    if (mercKiller && !mercKillerDefeated) {
                        return {
                            ...mercKiller,
                            variant: EnemyVariants.MercKiller,
                            barks: updateBarks([], mercKiller.combatTaunt),
                        }
                    }
                    return enemyDraft
                })
                draft.player = produce(draft.player, playerDraft => {
                    playerDraft.barks = []
                })
            }),
    },
    'INIT_COMBAT',
)

export const applySelectedBaseDefenseCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { slot, callback } = e
                const { base } = draft

                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    baseDefenseDraft.currentPlayedCard = slot.card
                })

                if (slot.card) {
                    const effects = slot.card.effects[slot.type]
                    draft.base = produce(base, baseDraft => {
                        const bark = effects.base
                            ? renderBaseCardSoundEffect(effects.base, base.stats, base.statuses)
                            : ''
                        baseDraft.barks = updateBarks(baseDraft.barks, bark)

                        const cardAffectsBaseStats =
                            effects.base && 'stats' in effects.base && effects.base.stats
                        if (cardAffectsBaseStats) {
                            baseDraft.stats = applyCardEffectsToStats(
                                effects.base.stats,
                                baseDraft.stats,
                            )
                        }

                        const cardAffectsPlayerStats =
                            effects.player && 'stats' in effects.player && effects.player.stats
                        if (cardAffectsPlayerStats) {
                            // COMPETITION KILLER card special case
                            if (effects.player.stats.money.additionalMods?.competitionKiller) {
                                const allBaseDefenseCards = draft.baseDefense.deck.concat([
                                    ...draft.baseDefense.discardPile,
                                    ...Object.values(draft.baseDefense.slots).map(
                                        slot => slot.card,
                                    ),
                                    ...draft.baseDefense.drainedCards,
                                ])
                                const numberOfBaseAttackers = allBaseDefenseCards.filter(
                                    card => card.isBaseAttackerCard,
                                ).length
                                const moneyGained =
                                    effects.player.stats.money.modifier * numberOfBaseAttackers
                                console.log('MONEY GAINED: ', moneyGained)
                                draft.player.stats.money += moneyGained
                            }

                            // DEFAULT CASE
                            if (!effects.player.stats.money.additionalMods?.competitionKiller) {
                                draft.player.stats = applyCardEffectsToStats(
                                    effects.player.stats,
                                    draft.player.stats,
                                )
                            }
                        }

                        const cardAffectsBaseStatuses =
                            effects.base && 'statuses' in effects.base && effects.base.statuses
                        if (cardAffectsBaseStatuses) {
                            baseDraft.statuses = applyCardEffectsToStatuses(
                                effects.base.statuses,
                                baseDraft.statuses,
                            )
                        }

                        const cardDealsBaseAttackerDamageToBase =
                            effects.base &&
                            effects.base.attack &&
                            'attack' in effects.base &&
                            'attackType' in effects.base.attack &&
                            effects.base.attack.attackType
                        if (cardDealsBaseAttackerDamageToBase) {
                            const { calculatedDamage } = calculateBaseAttackerDamage(
                                baseDraft.stats,
                                baseDraft.statuses,
                                effects.base.attack.damage || 0,
                                effects.base.attack.attackType,
                            )
                            if (effects.base.attack.attackType === AttackTypes.Ground) {
                                const antiGround = baseDraft.stats.antiGround || 0
                                baseDraft.stats.antiGround = Math.max(
                                    0,
                                    antiGround - calculatedDamage,
                                )
                                const damageAfterAntiGroundBlock = Math.max(
                                    0,
                                    calculatedDamage - antiGround,
                                )
                                const fortifications = baseDraft.stats.fortifications || 0
                                const damageAfterFortificationsBlock = Math.max(
                                    0,
                                    damageAfterAntiGroundBlock - fortifications,
                                )
                                baseDraft.stats.fortifications = Math.max(
                                    0,
                                    fortifications - damageAfterAntiGroundBlock,
                                )
                                const value = baseDraft.stats.hp - damageAfterFortificationsBlock
                                baseDraft.stats.hp = handleStatChange(value, baseDraft.stats.maxHp)
                            }
                            if (effects.base.attack.attackType === AttackTypes.Air) {
                                const antiAir = baseDraft.stats.antiAir || 0
                                baseDraft.stats.antiAir = Math.max(0, antiAir - calculatedDamage)
                                const damageAfterAntiAirBlock = Math.max(
                                    0,
                                    calculatedDamage - antiAir,
                                )
                                const fortifications = baseDraft.stats.fortifications || 0
                                const damageAfterFortificationsBlock = Math.max(
                                    0,
                                    damageAfterAntiAirBlock - fortifications,
                                )
                                baseDraft.stats.fortifications = Math.max(
                                    0,
                                    fortifications - damageAfterAntiAirBlock,
                                )
                                const value = baseDraft.stats.hp - damageAfterFortificationsBlock
                                baseDraft.stats.hp = handleStatChange(value, baseDraft.stats.maxHp)
                            }
                        }

                        delay(() => callback(), 1000)
                    })
                }
            }),
    },
    'APPLY_BASE_DEFENSE_CARD',
)

export const incrementOperationRound = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    opDraft.slots = Object.entries(opDraft.slots).reduce((slots, [key, value]) => {
                        const reset = { ...value, card: null }
                        slots[parseInt(key, 10)] = reset
                        return slots
                    }, opDraft.slots)
                    const currentRound = opDraft.round + 1
                    opDraft.round = currentRound
                    opDraft.barks = updateBarks(
                        opDraft.barks,
                        `Round ${ctx.game.operation.round} done. Good job. Round ${currentRound} incoming!`,
                    )
                })

                draft.player = produce(draft.player, playerDraft => {
                    Object.entries(playerDraft.statuses).forEach(([k, v]) => {
                        if (
                            'value' in v &&
                            v.value &&
                            v.duration === Duration.Round &&
                            v.scene === Scenes.Operation
                        ) {
                            const newStatusValue = { ...v, value: v.value ? v.value - 1 : 0 }
                            playerDraft.statuses[k as keyof Statuses] = newStatusValue
                        }
                    })
                })
            }),
    },
    'INCREMENT_OPERATION_ROUND',
)

export const incrementCombatRound = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    combatDraft.slots = Object.entries(combatDraft.slots).reduce(
                        (slots, [key, value]) => {
                            const reset = { ...value, card: null }
                            slots[parseInt(key, 10)] = reset
                            return slots
                        },
                        combatDraft.slots,
                    )
                    // Remove all enemy attack cards from deck each round of combat
                    // TODO go back to having a unique field/flag for temp enemy attack cards?
                    // What if other temp cards get injected that aren't attacks?
                    combatDraft.deck = uniq(combatDraft.deck.filter(card => !card.isTempCard))
                    combatDraft.round += 1
                })

                draft.player = produce(draft.player, playerDraft => {
                    Object.entries(playerDraft.statuses).forEach(([k, v]) => {
                        if (
                            'value' in v &&
                            v.value &&
                            v.scene === Scenes.Combat &&
                            v.duration === Duration.Round
                        ) {
                            const newStatusValue = { ...v, value: v.value ? v.value - 1 : 0 }
                            playerDraft.statuses[k as keyof Statuses] = newStatusValue
                        }
                    })

                    Object.entries(playerDraft.invisibleStatuses).forEach(([k, v]) => {
                        if (
                            'value' in v &&
                            v.value &&
                            v.scene === Scenes.Combat &&
                            v.duration === Duration.Round
                        ) {
                            const newStatusValue = { ...v, value: v.value ? v.value - 1 : 0 }
                            playerDraft.statuses[k as keyof Statuses] = newStatusValue
                        }

                        // PANIC BUTTON
                        if (k === 'panicButton' && v.duration > 0) {
                            const newShieldValue = getNewStatValue(
                                'shield',
                                { modifier: v.value },
                                draft.player.stats,
                            )
                            draft.player.stats.shield = handleStatChange(
                                newShieldValue,
                                draft.player.stats.maxShield,
                            )
                        }
                    })
                })
            }),
    },
    'INCREMENT_COMBAT_ROUND',
)

export const incrementBaseDefenseRound = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    baseDefenseDraft.slots = Object.entries(baseDefenseDraft.slots).reduce(
                        (slots, [key, value]) => {
                            const reset = { ...value, card: null }
                            slots[parseInt(key, 10)] = reset
                            return slots
                        },
                        baseDefenseDraft.slots,
                    )
                    baseDefenseDraft.round += 1
                })

                draft.base = produce(draft.base, baseDraft => {
                    const currentRound = ctx.game.baseDefense.round + 1
                    baseDraft.barks = updateBarks(
                        baseDraft.barks,
                        `Survived round ${ctx.game.baseDefense.round}. Prepare for round ${currentRound}!`,
                    )

                    Object.entries(baseDraft.statuses).forEach(([k, v]) => {
                        if (
                            'value' in v &&
                            v.value &&
                            v.scene === Scenes.BaseDefense &&
                            v.duration === Duration.Round
                        ) {
                            const newStatusValue = { ...v, value: v.value ? v.value - 1 : 0 }
                            baseDraft.statuses[k as keyof Statuses] = newStatusValue
                        }
                    })
                })
            }),
    },
    'INCREMENT_BASE_DEFENSE_ROUND',
)

export const shuffleCombatDeck = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    const currentDeck = combatDraft.deck
                    const currentDiscardPile = combatDraft.discardPile
                    combatDraft.deck = uniq(
                        isEmpty(currentDeck)
                            ? shuffleDeck(currentDiscardPile)
                            : shuffleDeck(currentDeck),
                    )
                    combatDraft.discardPile = isEmpty(currentDeck) ? [] : currentDiscardPile
                })
            }),
    },
    'SHUFFLE_COMBAT_DECK',
)

export const shuffleOperationDeck = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const currentDeck = draft.operation.deck
                const currentDiscardPile = draft.operation.discardPile
                const shuffledDeck = uniq(
                    isEmpty(currentDeck)
                        ? shuffleDeck(currentDiscardPile)
                        : shuffleDeck(currentDeck),
                )
                draft.operation.deck = shuffledDeck
                draft.operation.discardPile = isEmpty(currentDeck) ? [] : currentDiscardPile
            }),
    },
    'SHUFFLE_OPERATION_DECK',
)

export const shuffleBaseDefenseDeck = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    const currentDeck = baseDefenseDraft.deck
                    const currentDiscardPile = baseDefenseDraft.discardPile
                    baseDefenseDraft.deck = uniq(
                        isEmpty(currentDeck)
                            ? shuffleDeck(currentDiscardPile)
                            : shuffleDeck(currentDeck),
                    )
                    baseDefenseDraft.discardPile = isEmpty(currentDeck) ? [] : currentDiscardPile
                })
            }),
    },
    'SHUFFLE_BASE_DEFENSE_DECK',
)

export const fetchOperationCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    const { originalCard, newCard } = e
                    const updatedSlots = Object.entries(opDraft.slots).reduce(
                        (slots, [key, value]) => {
                            if (value.card && value.card.id === originalCard.id) {
                                const updatedSlot = { ...value, card: newCard }
                                slots[parseInt(key, 10)] = castDraft(updatedSlot)
                            }
                            return slots
                        },
                        opDraft.slots,
                    )
                    const updatedDeck = uniq(opDraft.deck.filter(c => c.id !== newCard.id))
                    opDraft.slots = updatedSlots
                    opDraft.deck = updatedDeck
                    opDraft.discardPile = castDraft([...opDraft.discardPile, originalCard])
                    opDraft.barks = updateBarks(
                        opDraft.barks,
                        `Deploying ${newCard.title}. Resume operation.`,
                    )
                })
            }),
    },
    'FETCH_OPERATION_CARD',
)

export const fetchCombatCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { originalCard, newCard } = e
                draft.combat = produce(draft.combat, combatDraft => {
                    const updatedSlots = Object.entries(combatDraft.slots).reduce(
                        (slots, [key, value]) => {
                            if (value.card && value.card.id === originalCard.id) {
                                const updatedSlot = { ...value, card: newCard }
                                slots[parseInt(key, 10)] = castDraft(updatedSlot)
                            }
                            return slots
                        },
                        combatDraft.slots,
                    )
                    const updatedDeck = uniq(combatDraft.deck.filter(c => c.id !== newCard.id))
                    combatDraft.slots = updatedSlots
                    combatDraft.deck = updatedDeck
                    combatDraft.discardPile = castDraft([...combatDraft.discardPile, originalCard])
                })

                draft.player = produce(draft.player, playerDraft => {
                    playerDraft.barks = updateBarks(
                        playerDraft.barks,
                        `Deploying ${newCard.title}!`,
                    )
                })
            }),
    },
    'FETCH_COMBAT_CARD',
)

export const fetchBaseDefenseCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { originalCard, newCard } = e
                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    const updatedSlots = Object.entries(baseDefenseDraft.slots).reduce(
                        (slots, [key, value]) => {
                            if (value.card && value.card.id === originalCard.id) {
                                const updatedSlot = { ...value, card: newCard }
                                slots[parseInt(key, 10)] = castDraft(updatedSlot)
                            }
                            return slots
                        },
                        baseDefenseDraft.slots,
                    )
                    const updatedDeck = uniq(baseDefenseDraft.deck.filter(c => c.id !== newCard.id))
                    baseDefenseDraft.slots = updatedSlots
                    baseDefenseDraft.deck = updatedDeck
                    baseDefenseDraft.discardPile = castDraft([
                        ...baseDefenseDraft.discardPile,
                        originalCard,
                    ])
                })

                draft.base = produce(draft.base, baseDraft => {
                    baseDraft.barks = updateBarks(
                        baseDraft.barks,
                        `Deploying ${newCard.title}. Push them back!`,
                    )
                })
            }),
    },
    'FETCH_BASE_DEFENSE_CARD',
)

export const setOperationHand = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    opDraft.slots = updateSlots(opDraft.slots, e.updatedHand)
                })
            }),
    },
    'SET_OPERATION_HAND',
)

export const setCombatHand = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    combatDraft.slots = updateSlots(combatDraft.slots, e.updatedHand)
                })
            }),
    },
    'SET_COMBAT_HAND',
)

export const setBaseDefenseHand = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.baseDefense = produce(draft.baseDefense, combatDraft => {
                    combatDraft.slots = updateSlots(combatDraft.slots, e.updatedHand)
                })
            }),
    },
    'SET_BASE_DEFENSE_HAND',
)

export const abortOperation = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    opDraft.operationAborted = true
                    opDraft.barks = updateBarks(
                        opDraft.barks,
                        "Abort Op! Abort Op! Let's get out of here before we get killed.",
                    )
                })
                draft.player = produce(draft.player, playerDraft => {
                    playerDraft.stats.gainedSupplies = 0
                    playerDraft.stats.gainedMoney = 0
                })
            }),
    },
    'ABORT_OPERATION',
)

export const retreatFromCombat = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat.retreated = true
                draft.player.stats.shield = draft.player.stats.maxShield
                draft.player.barks = updateBarks(
                    draft.player.barks,
                    'Retreat! We have to get out of here, NOW!',
                )
            }),
    },
    'RETREAT_FROM_COMBAT',
)

export const incrementCheckpointCount = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const currentTimelineStep = draft.timeline[draft.currentCheckpoint]
                const incrementedCheckpoint = draft.currentCheckpoint + 1
                draft.timeline[draft.currentCheckpoint].completed = true
                draft.currentCheckpoint = incrementedCheckpoint
                draft.player = produce(draft.player, playerDraft => {
                    const { gainedSupplies, gainedMoney, money, supplies } = playerDraft.stats
                    const totalGained = produce(
                        {
                            supplies: (supplies || 0) + (gainedSupplies || 0),
                            money: (money || 0) + (gainedMoney || 0),
                        },
                        gainedDraft => {
                            // ALL IN card increases gained supplies by 25% if HP is lower than 50%
                            const allInConditionsMet =
                                playerDraft.invisibleStatuses?.allIn &&
                                playerDraft.invisibleStatuses?.allIn?.value &&
                                playerDraft.stats.hp < playerDraft.stats.hp / 2
                            if (allInConditionsMet) {
                                gainedDraft.supplies = calcStatValue(gainedDraft.supplies, 25, true)
                            }

                            // ALL IN has a negative effect, basically the opposite (lose 25% of gained supplies if less than 50% HP)
                            const allInNegativeConditionsMet =
                                playerDraft.invisibleStatuses?.allInNegative &&
                                playerDraft.invisibleStatuses?.allInNegative?.value &&
                                playerDraft.stats.hp < playerDraft.stats.hp / 2
                            if (allInNegativeConditionsMet) {
                                gainedDraft.supplies = calcStatValue(
                                    gainedDraft.supplies,
                                    -25,
                                    true,
                                )
                            }

                            const spoilsOfWarConditionsMet =
                                playerDraft.invisibleStatuses?.spoilsOfWar &&
                                playerDraft.invisibleStatuses?.spoilsOfWar?.value &&
                                currentTimelineStep.numberOfCombatEncountersCompleted
                            if (spoilsOfWarConditionsMet) {
                                const spoils =
                                    playerDraft.invisibleStatuses?.spoilsOfWar?.value || 0
                                const modifier =
                                    spoils * currentTimelineStep.numberOfCombatEncountersCompleted
                                gainedDraft.supplies = calcStatValue(gainedDraft.supplies, modifier)
                            }
                        },
                    )
                    playerDraft.stats.money = totalGained.money
                    playerDraft.stats.supplies = totalGained.supplies
                    playerDraft.stats.gainedMoney = 0
                    playerDraft.stats.gainedSupplies = 0
                    playerDraft.statuses = INITIAL_STATUSES
                })
            }),
    },
    'INCREMENT_CHECKPOINT_COUNT',
)

export const enqueueCombatEncounter = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.combat.encounterQueue = draft.combat.encounterQueue.concat([
                    { enemyVariant: draft.enemy?.variant || EnemyVariants.Weak },
                ])
            }),
    },
    'ENQUEUE_COMBAT_ENCOUNTER',
)

export const setOperationName = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    const opName = sample(opDraft.names) || ''
                    const affirmation = sample(MERCENARY_AFFIRMATIONS) || ''
                    opDraft.name = opName
                    opDraft.names = opDraft.names.filter(n => n !== opName)
                    opDraft.affirmation = affirmation
                })
            }),
    },
    'SET_OPERATION_NAME',
)

export const injectCombatEncounter = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const chance = new Chance()
                const choices = [COMBAT_ENCOUNTER_CARD, THIEVING_BANDITS, RAIDER_AMBUSH, LAND_MINE]
                const weights = [4, 1, 1, 1]
                const weightedChoice = chance.weighted(choices, weights)
                draft.operation.slots[4].card = {
                    ...weightedChoice,
                    id: `${weightedChoice.id}-${draft.operation.round}-temp-op-card`,
                    isTempCard: true,
                }
            }),
    },
    'INJECT_COMBAT_ENCOUNTER',
)

export const gameOver = dinoMercsModel.assign(
    {
        runInProgress: false,
        game: ctx =>
            produce(ctx.game, draft => {
                draft.gameOver = true
            }),
    },
    'GAME_OVER',
)

export const combatRewardChosen = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const cardsInSlots = Object.values(draft.combat.slots)
                    .map(s => s.card)
                    .filter(notEmpty)
                    .filter(c => !c.isTempCard)
                draft.combat.deck = uniq(
                    draft.combat.deck
                        .concat(cardsInSlots)
                        .concat(draft.combat.discardPile)
                        .concat(draft.combat.drainedCards)
                        .filter(c => !c.isTempCard && !c.isBaseAttackerCard),
                )
                draft.combat.slots = updateSlots(draft.combat.slots, [])
                draft.combat.discardPile = []
                draft.combat.drainedCards = []

                draft.timeline[draft.currentCheckpoint].numberOfCombatEncountersCompleted += 1
                draft.player.stats.shield = draft.player.stats.maxShield
                draft.player.stats.hp =
                    draft.player.stats.maxHp - (draft.player.statuses.mutilated?.value ?? 0)

                Object.entries(draft.player.statuses).forEach(([k, v]) => {
                    if (
                        'value' in v &&
                        v.value &&
                        (v.duration === Duration.Round || v.duration === Duration.Scene) &&
                        v.scene === Scenes.Combat
                    ) {
                        const newStatusValue = { ...v, value: 0 }
                        draft.player.statuses[k as keyof Statuses] = newStatusValue
                    }
                })
                draft.enemy = DEFAULT_ENEMY

                draft.player = produce(draft.player, playerDraft => {
                    playerDraft.barks = []
                })
            }),
    },
    'COMBAT_REWARD_CHOSEN',
)

export const operationRewardChosen = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const cardsInSlots = Object.values(draft.operation.slots)
                    .map(s => s.card)
                    .filter(notEmpty)
                    .filter(c => !c.isTempCard)
                draft.operation.deck = uniq(
                    draft.operation.deck
                        .concat(cardsInSlots)
                        .concat(draft.operation.discardPile)
                        .concat(draft.operation.drainedCards)
                        .filter(c => !c.isTempCard && !c.isBaseAttackerCard),
                )
                draft.operation.slots = updateSlots(draft.operation.slots, [])
                draft.operation.discardPile = []
                draft.operation.drainedCards = []

                Object.entries(draft.player.statuses).forEach(([k, v]) => {
                    if (
                        'value' in v &&
                        v.value &&
                        (v.duration === Duration.Round || v.duration === Duration.Scene) &&
                        v.scene === Scenes.Operation
                    ) {
                        const newStatusValue = { ...v, value: 0 }
                        draft.player.statuses[k as keyof Statuses] = newStatusValue
                    }
                })
            }),
    },
    'OPERATION_REWARD_CHOSEN',
)

export const baseDefenseRewardChosen = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const cardsInSlots = Object.values(draft.baseDefense.slots)
                    .map(s => s.card)
                    .filter(notEmpty)
                    .filter(c => !c.isTempCard)
                draft.baseDefense.deck = uniq(
                    draft.baseDefense.deck
                        .concat(cardsInSlots)
                        .concat(draft.baseDefense.discardPile)
                        .concat(draft.baseDefense.drainedCards)
                        .filter(c => !c.isTempCard && !c.isBaseAttackerCard),
                )
                draft.baseDefense.slots = updateSlots(draft.baseDefense.slots, [])
                draft.baseDefense.discardPile = []
                draft.baseDefense.drainedCards = []

                const incrementedCheckpoint = draft.currentCheckpoint + 1
                draft.timeline[draft.currentCheckpoint].completed = true
                draft.currentCheckpoint = incrementedCheckpoint

                Object.entries(draft.base.statuses).forEach(([k, v]) => {
                    if (
                        'value' in v &&
                        v.value &&
                        (v.duration === Duration.Round || v.duration === Duration.Scene) &&
                        v.scene === Scenes.BaseDefense
                    ) {
                        const newStatusValue = { ...v, value: 0 }
                        draft.base.statuses[k as keyof Statuses] = newStatusValue
                    }
                })
            }),
    },
    'BASE_DEFENSE_REWARD_CHOSEN',
)

export const operationCardPurchased = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    const { card } = e
                    if (card) opDraft.deck.push(castDraft(card))
                })
                draft.player = produce(draft.player, playerDraft => {
                    const { card } = e
                    if (card && card.cost.amount && card.cost.type === 'money') {
                        const totalCash =
                            (playerDraft.stats.money || 0) + (playerDraft.stats.gainedMoney || 0)
                        playerDraft.stats.money = totalCash - card.cost.amount
                    }
                    if (card && card.cost.amount && card.cost.type === 'supplies') {
                        const totalCash =
                            (playerDraft.stats.supplies || 0) +
                            (playerDraft.stats.gainedSupplies || 0)
                        playerDraft.stats.supplies = totalCash - card.cost.amount
                    }
                })
            }),
    },
    'OPERATION_CARD_PURCHASED',
)

export const combatCardPurchased = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.combat = produce(draft.combat, combatDraft => {
                    const { card } = e
                    if (card) combatDraft.deck.push(castDraft(card))
                })
                draft.player = produce(draft.player, playerDraft => {
                    const { card } = e
                    if (card && card.cost.amount && card.cost.type === 'money') {
                        const totalCash =
                            (playerDraft.stats.money || 0) + (playerDraft.stats.gainedMoney || 0)
                        playerDraft.stats.money = totalCash - card.cost.amount
                    }
                    if (card && card.cost.amount && card.cost.type === 'supplies') {
                        const totalCash =
                            (playerDraft.stats.supplies || 0) +
                            (playerDraft.stats.gainedSupplies || 0)
                        playerDraft.stats.supplies = totalCash - card.cost.amount
                    }
                })
            }),
    },
    'COMBAT_CARD_PURCHASED',
)

export const baseDefenseCardPurchased = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    const { card } = e
                    if (card) baseDefenseDraft.deck.push(castDraft(card))
                })
                draft.player = produce(draft.player, playerDraft => {
                    const { card } = e
                    if (card && card.cost.amount && card.cost.type === 'money') {
                        const totalCash =
                            (playerDraft.stats.money || 0) + (playerDraft.stats.gainedMoney || 0)
                        playerDraft.stats.money = totalCash - card.cost.amount
                    }
                    if (card && card.cost.amount && card.cost.type === 'supplies') {
                        const totalCash =
                            (playerDraft.stats.supplies || 0) +
                            (playerDraft.stats.gainedSupplies || 0)
                        playerDraft.stats.supplies = totalCash - card.cost.amount
                    }
                })
            }),
    },
    'BASE_DEFENSE_CARD_PURCHASED',
)

export const saveGame = (ctx: DinoMercsContext) => {
    if (deepEqual(gameData.data, ctx)) {
        // eslint-disable-next-line no-console
        console.log('NOT SAVING GAME. NOTHING NEW…')
    } else {
        // eslint-disable-next-line no-console
        console.log('SAVED GAME DATA: ', ctx)
        gameData.update(ctx)
    }
}

export const repairBase = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.base = produce(draft.base, baseDraft => {
                    if (
                        draft.base.statuses?.burning?.value &&
                        draft.base.stats.hp !== draft.base.stats.maxHp
                    ) {
                        baseDraft.barks = updateBarks(
                            baseDraft.barks,
                            'Our base is burning! Can’t make repairs.',
                        )
                    } else if (
                        draft.player.stats.supplies &&
                        draft.player.stats.supplies >= 25 &&
                        draft.base.stats.hp !== draft.base.stats.maxHp
                    ) {
                        baseDraft.barks = updateBarks(
                            baseDraft.barks,
                            'Base repaired … a little bit',
                        )
                    } else if (draft.base.stats.hp !== draft.base.stats.maxHp) {
                        baseDraft.barks = updateBarks(
                            baseDraft.barks,
                            'Can’t repair our base this round. Not enough SUPPLIES.',
                        )
                    }

                    const { stats, statuses } = getCalculatedBaseStats(baseDraft)
                    baseDraft.stats.hp = stats.hp
                    // Base can't repair while it's burning or when out of supplies
                    if (
                        !statuses.burning?.value &&
                        draft.player.stats.supplies &&
                        draft.player.stats.supplies >= 25 &&
                        draft.base.stats.hp !== draft.base.stats.maxHp
                    ) {
                        const personnelStrength = (stats.personnel || 0) + (stats.morale || 0)
                        // Bad weather / overwhelmed reduces repair strength by 50%
                        const baseHpAfterRepairs =
                            statuses.badWeather || statuses.overwhelmed
                                ? stats.hp + personnelStrength / 2
                                : stats.hp + personnelStrength
                        baseDraft.stats.hp = handleStatChange(baseHpAfterRepairs, stats.maxHp)
                        draft.player.stats.supplies -= 25
                    }
                })
            }),
    },
    'REPAIR_BASE',
)

export const injectEnemyCards = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                const enemyVariant = draft.enemy.variants[draft.enemy.variant]
                const firstCard = sample([
                    enemyVariant.cards.attack,
                    enemyVariant.cards.defense,
                    enemyVariant.cards.special,
                ])
                draft.combat.slots[3].card = {
                    ...(firstCard || enemyVariant.cards.attack),
                    id: `${kebabCase(draft.enemy.name)}-enemy-${uniqueId()}`,
                }
                const secondCard = enemyVariant.cards.attack
                draft.combat.slots[4].card = {
                    ...(secondCard || enemyVariant.cards.attack),
                    id: `${kebabCase(draft.enemy.name)}-enemy-${uniqueId()}`,
                }
            }),
    },
    'INJECT_ENEMY_CARDS',
)

export const drainOperationCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.operation.drainedCards.push(castDraft(e.card))
            }),
    },
    'DRAIN_OPERATION_CARD',
)

export const drainCombatCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.combat.drainedCards.push(castDraft(e.card))
            }),
    },
    'DRAIN_CARD',
)

export const drainBaseDefenseCard = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.baseDefense.drainedCards.push(castDraft(e.card))
            }),
    },
    'DRAIN_BASE_DEFENSE_CARD',
)

export const triggerOperationEvent = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.operation = produce(draft.operation, opDraft => {
                    const { callback, slot } = e
                    opDraft.currentPlayedCard = slot.card
                    const isPositiveSlot =
                        slot.type === EffectLevels.WeakEffect ||
                        slot.type === EffectLevels.AverageEffect ||
                        slot.type === EffectLevels.DeadlyEffect
                    const eventDetails = isPositiveSlot
                        ? castDraft(sample(POSITIVE_OPERATION_EVENTS))
                        : castDraft(sample(NEGATIVE_OPERATION_EVENTS))
                    if (eventDetails) {
                        eventDetails.choiceOne.callback = callback
                        eventDetails.choiceTwo.callback = callback
                        opDraft.event.inProgress = true
                        opDraft.event.details = eventDetails
                    }
                })
            }),
    },
    'TRIGGER_OPERATION_EVENT',
)

export const applyOperationEventChoice = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { choice } = e
                draft.player = produce(draft.player, playerDraft => {
                    choice.effects.forEach(effect => {
                        const { status, modifier, property } = effect
                        if (property && modifier) {
                            const key = property as 'money' | 'supplies' | 'hp'
                            const value = playerDraft.stats[key] || 0
                            playerDraft.stats[key] = value + modifier
                        }
                        if (status && modifier) {
                            const s = playerDraft.statuses[status as keyof Statuses]
                            if (s && 'value' in s) {
                                const newValue = (s.value || 0) + modifier
                                playerDraft.statuses[status as keyof Statuses] = {
                                    ...s,
                                    value: newValue,
                                }
                            }
                        }
                    })
                })

                draft.combat = produce(draft.combat, combatDraft => {
                    choice.effects.forEach(effect => {
                        const { combatEncounter } = effect
                        if (combatEncounter) {
                            combatDraft.encounterQueue = combatDraft.encounterQueue.concat([
                                { enemyVariant: EnemyVariants.Weak },
                            ])
                        }
                    })
                })

                draft.operation = produce(draft.operation, opDraft => {
                    opDraft.event.inProgress = false
                    opDraft.event.details = null
                })
            }),
    },
    'APPLY_OPERATION_EVENT_CHOICE',
)

export const triggerBaseDefenseEvent = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    const { callback, slot } = e
                    baseDefenseDraft.currentPlayedCard = slot.card
                    const isPositiveSlot =
                        slot.type === EffectLevels.WeakEffect ||
                        slot.type === EffectLevels.AverageEffect ||
                        slot.type === EffectLevels.DeadlyEffect
                    const eventDetails = isPositiveSlot
                        ? castDraft(sample(POSITIVE_BASE_DEFENSE_EVENTS))
                        : castDraft(sample(NEGATIVE_BASE_DEFENSE_EVENTS))
                    if (eventDetails) {
                        eventDetails.choiceOne.callback = callback
                        eventDetails.choiceTwo.callback = callback
                        baseDefenseDraft.event.inProgress = true
                        baseDefenseDraft.event.details = eventDetails
                    }
                })
            }),
    },
    'TRIGGER_BASE_DEFENSE_EVENT',
)

export const applyBaseDefenseEventChoice = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { choice } = e
                draft.base = produce(draft.base, baseDraft => {
                    choice.effects.forEach(effect => {
                        const { status, modifier, property } = effect
                        if (property && modifier) {
                            const key = property as
                                | 'personnel'
                                | 'morale'
                                | 'fortifications'
                                | 'antiAir'
                                | 'antiGround'
                                | 'hp'
                            const value = baseDraft.stats[key]
                            if (!isNil(value)) {
                                baseDraft.stats[key] = value + modifier
                            }
                        }
                        if (status && modifier) {
                            const key = status as keyof Statuses
                            const s = baseDraft.statuses[key]
                            if (s && 'value' in s) {
                                const newValue = (s.value || 0) + modifier
                                baseDraft.statuses[status as keyof Statuses] = {
                                    ...s,
                                    value: newValue,
                                }
                            }
                        }
                    })
                })

                draft.player = produce(draft.player, playerDraft => {
                    choice.effects.forEach(effect => {
                        const { status, modifier, property } = effect
                        if (property && modifier) {
                            const key = property as 'money' | 'supplies' | 'hp'
                            const value = playerDraft.stats[key] || 0
                            playerDraft.stats[key] = value + modifier
                        }
                        if (status && modifier) {
                            const s = playerDraft.statuses[status as keyof Statuses]
                            if (s && 'value' in s) {
                                const newValue = (s.value || 0) + modifier
                                playerDraft.statuses[status as keyof Statuses] = {
                                    ...s,
                                    value: newValue,
                                }
                            }
                        }
                    })
                })

                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    baseDefenseDraft.event.inProgress = false
                    baseDefenseDraft.event.details = null
                })
            }),
    },
    'APPLY_BASE_DEFENSE_EVENT_CHOICE',
)

export const injectBaseDefenseAttacker = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.baseDefense = produce(draft.baseDefense, baseDefenseDraft => {
                    const baseAttackerCard = castDraft(sample(BASE_ATTACKERS))
                    if (baseAttackerCard) {
                        const cardWithId = {
                            ...baseAttackerCard,
                            id: `baseAttackerCard-${baseDefenseDraft.round}`,
                        }
                        baseDefenseDraft.deck.push(cardWithId)
                        baseDefenseDraft.currentBaseAttacker = cardWithId
                    }
                })
            }),
    },
    'INJECT_BASE_DEFENSE_ATTACKER',
)

export const enemyDefeated = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                if (!draft.enemy) return
                draft.enemy.barks = updateBarks(draft.enemy.barks, '[DEATH NOISES]')
                draft.player.barks = updateBarks(draft.player.barks, 'Enemy defeated!')
                if (draft.enemy.variant === EnemyVariants.MercKiller) {
                    draft.timeline[draft.currentCheckpoint].mercKillerDefeated = true
                }
            }),
    },
    'ENEMY_DEFEATED',
)

export const gameWon = dinoMercsModel.assign(
    {
        runInProgress: false,
        game: ctx =>
            produce(ctx.game, draft => {
                draft.gameOver = true
            }),
    },
    'GAME_WON',
)

export const chooseCharacter = dinoMercsModel.assign(
    {
        game: (ctx, e) =>
            produce(ctx.game, draft => {
                const { characterChoice } = e
                const character = CHARACTER_CHOICES.find(c => c.name === characterChoice)
                if (character) draft.player.character = character
                draft.currentRoute = GameRoutes.TutorialScreen
            }),
    },
    'CHOOSE_CHARACTER',
)

export const resetCharacters = dinoMercsModel.assign(
    {
        game: ctx =>
            produce(ctx.game, draft => {
                draft.player.character.animationState = AnimationStates.Init
                draft.enemy.character.animationState = AnimationStates.Init
            }),
    },
    'RESET_CHARACTERS',
)

export const setGameAudioVolume = dinoMercsModel.assign(
    {
        audio: (ctx, e) => {
            const { volume } = e
            return produce(ctx.audio, draft => {
                draft.volume = volume
            })
        },
    },
    'SET_GAME_AUDIO_VOLUME',
)

export const muteGameAudio = dinoMercsModel.assign(
    {
        audio: (ctx, e) => {
            const { muted } = e
            return produce(ctx.audio, draft => {
                draft.muted = muted
            })
        },
    },
    'MUTE_GAME_AUDIO',
)

export const playSoundTrack = dinoMercsModel.assign(
    {
        audio: ctx =>
            produce(ctx.audio, draft => {
                draft.fadeout = false
            }),
    },
    'PLAY_SOUND_TRACK',
)

export const setTrack = dinoMercsModel.assign(
    {
        audio: (ctx, e) =>
            produce(ctx.audio, draft => {
                draft.track = e.track
            }),
    },
    'SET_TRACK',
)

export const fadeoutSoundTrack = dinoMercsModel.assign(
    {
        audio: ctx =>
            produce(ctx.audio, draft => {
                draft.fadeout = true
            }),
    },
    'FADEOUT_SOUND_TRACK',
)

export const stopSoundTrack = dinoMercsModel.assign(
    {
        audio: ctx =>
            produce(ctx.audio, draft => {
                draft.fadeout = false
            }),
    },
    'STOP_SOUND_TRACK',
)
