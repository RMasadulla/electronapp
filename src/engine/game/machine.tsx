import { send } from 'xstate'

import gameData from '@/engine/game/gameData'
import { DinoMercsContext, Tracks } from '@/types'
import {
    discardOperationHand,
    drawOperationHand,
    shuffleOperationDeck,
    incrementOperationRound,
    applySelectedOperationCardToPlayer,
    dinoMercsModel,
    discardCombatHand,
    drawCombatHand,
    incrementCombatRound,
    shuffleCombatDeck,
    drawBaseDefenseHand,
    discardBaseDefenseHand,
    shuffleBaseDefenseDeck,
    incrementBaseDefenseRound,
    applySelectedBaseDefenseCard,
    resetScenes,
    fetchOperationCard,
    fetchCombatCard,
    fetchBaseDefenseCard,
    setOperationHand,
    setCombatHand,
    setBaseDefenseHand,
    abortOperation,
    retreatFromCombat,
    incrementCheckpointCount,
    startNewGame,
    resetGame,
    enqueueCombatEncounter,
    setOperationName,
    gameOver,
    combatRewardChosen,
    operationRewardChosen,
    baseDefenseRewardChosen,
    initCombat,
    saveGame,
    repairBase,
    injectEnemyCards,
    drainOperationCard,
    drainCombatCard,
    drainBaseDefenseCard,
    triggerOperationEvent,
    triggerBaseDefenseEvent,
    applyOperationEventChoice,
    applyBaseDefenseEventChoice,
    injectBaseDefenseAttacker,
    operationCardPurchased,
    combatCardPurchased,
    baseDefenseCardPurchased,
    enemyDefeated,
    gameWon,
    chooseCharacter,
    injectCombatEncounter,
    applySelectedCombatCard,
    resetCharacters,
    setGameAudioVolume,
    muteGameAudio,
    playSoundTrack,
    setTrack,
    goToCharacterSelectionRoute,
    goToGameOverRoute,
    goToGameWonRoute,
    goToTutorialRoute,
    goToBaseRoute,
    goToOperationRoute,
    goToOperationRewardsRoute,
    goToCombatRoute,
    goToCombatRewardsRoute,
    goToStartRoute,
    goToBaseDefenseRoute,
    goToBaseDefenseRewardsRoute,
    fadeoutSoundTrack,
} from './model'
import {
    BASE_DEFENSE_DRAW_PHASE,
    BASE_DEFENSE_DRAW_PHASE_PART_TWO,
    BASE_DEFENSE_START_ROUND,
    BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE,
    BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO,
    BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE,
    BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR,
    BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE,
    BASE_DEFENSE_SELECTION_PHASE,
    BASE_DEFENSE_SHUFFLE_PHASE,
    BASE_SCREEN,
    COMBAT_DISCARD_PHASE,
    COMBAT_DRAW_PHASE,
    COMBAT_DRAW_PHASE_PART_TWO,
    COMBAT_END_OF_ROUND,
    COMBAT_START_ROUND,
    COMBAT_RESOLVE_PHASE_CARD_ONE,
    COMBAT_RESOLVE_PHASE_CARD_TWO,
    COMBAT_RESOLVE_PHASE_CARD_THREE,
    COMBAT_RESOLVE_PHASE_CARD_FOUR,
    COMBAT_RESOLVE_PHASE_CARD_FIVE,
    COMBAT_SCREEN,
    COMBAT_SELECTION_PHASE,
    COMBAT_SHUFFLE_PHASE,
    INTRO_SCREEN,
    OPERATION_DISCARD_PHASE,
    OPERATION_DRAW_PHASE,
    OPERATION_DRAW_PHASE_PART_TWO,
    OPERATION_END_OF_ROUND,
    OPERATION_START_ROUND,
    OPERATION_RESOLVE_PHASE_CARD_ONE,
    OPERATION_RESOLVE_PHASE_CARD_TWO,
    OPERATION_RESOLVE_PHASE_CARD_THREE,
    OPERATION_RESOLVE_PHASE_CARD_FOUR,
    OPERATION_RESOLVE_PHASE_CARD_FIVE,
    OPERATION_SELECTION_PHASE,
    OPERATION_SHUFFLE_PHASE,
    START_SCREEN,
    BASE_DEFENSE_DISCARD_PHASE,
    BASE_DEFENSE_END_OF_ROUND,
    COMBAT_REWARDS_SCREEN,
    OPERATION_REWARDS_SCREEN,
    BASE_DEFENSE_REWARDS_SCREEN,
    OPERATION_INTRO_PHASE,
    GAME_OVER,
    BASE_DEFENSE_REPAIR_PHASE,
    COMBAT_INJECT_ENEMY_CARDS,
    OPERATION_RESOLVE_PHASE_EVENT_ONE,
    OPERATION_RESOLVE_PHASE_EVENT_TWO,
    OPERATION_RESOLVE_PHASE_EVENT_THREE,
    OPERATION_RESOLVE_PHASE_EVENT_FOUR,
    OPERATION_RESOLVE_PHASE_EVENT_FIVE,
    BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE,
    BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR,
    BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE,
    BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE,
    BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO,
    BASE_DEFENSE_INJECT_ATTACKER_PHASE,
    BASE_DEFENSE_STARTS,
    COMBAT_ENEMY_DEFEATED,
    BASE_DEFENSE_INTRO_PHASE,
    MISSION_COMPLETE,
    CHARACTER_SELECTION_SCREEN,
    COMBAT_INTRO_PHASE,
} from './constants'
import {
    baseIsDestroyed,
    combatEncounterQueueEmpty,
    enemyIsDead,
    gameInProgress,
    operationStillInProgress,
    playerIsDead,
    shouldTriggerMercKillerCombatEncounter,
    mercKillerHasBeenDefeated,
    operationIsComplete,
} from './guards'

export const gameMachine = dinoMercsModel.createMachine({
    id: 'game',
    initial: START_SCREEN,
    context: gameData.data,
    on: {
        SET_OPERATION_NAME: { actions: setOperationName },
        DRAW_OPERATION_HAND: { actions: drawOperationHand },
        DISCARD_OPERATION_HAND: { actions: discardOperationHand },
        SHUFFLE_OPERATION_DECK: { actions: shuffleOperationDeck, internal: true },
        INCREMENT_OPERATION_ROUND: { actions: incrementOperationRound },
        FETCH_OPERATION_CARD: { actions: fetchOperationCard },
        SET_OPERATION_HAND: { actions: setOperationHand },
        ABORT_OPERATION: { target: BASE_SCREEN, actions: abortOperation },
        INCREMENT_CHECKPOINT_COUNT: { actions: incrementCheckpointCount },
        OPERATION_REWARD_CHOSEN: { actions: operationRewardChosen },
        OPERATION_CARD_PURCHASED: { actions: operationCardPurchased },
        SAVE_GAME: { actions: saveGame },
        DRAIN_OPERATION_CARD: { actions: drainOperationCard },
        TRIGGER_OPERATION_EVENT: { actions: triggerOperationEvent },
        APPLY_OPERATION_EVENT_CHOICE: { actions: applyOperationEventChoice },
        INJECT_COMBAT_ENCOUNTER: { actions: injectCombatEncounter },
        GO_TO_START_SCREEN: { target: START_SCREEN },
        RESET_GAME: { actions: resetGame, target: START_SCREEN },

        GO_TO_OPERATION_ROUTE: { actions: goToOperationRoute },

        INIT_COMBAT: { actions: initCombat },
        INJECT_ENEMY_CARDS: { actions: injectEnemyCards },
        DRAW_COMBAT_HAND: { actions: drawCombatHand },
        DISCARD_COMBAT_HAND: { actions: discardCombatHand },
        SHUFFLE_COMBAT_DECK: { actions: shuffleCombatDeck },
        INCREMENT_COMBAT_ROUND: { actions: incrementCombatRound },
        SET_COMBAT_HAND: { actions: setCombatHand },
        FETCH_COMBAT_CARD: { actions: fetchCombatCard },
        RETREAT_FROM_COMBAT: {
            actions: retreatFromCombat,
            target: OPERATION_DISCARD_PHASE,
        },
        COMBAT_REWARD_CHOSEN: { actions: combatRewardChosen },
        COMBAT_CARD_PURCHASED: { actions: combatCardPurchased },
        GAME_OVER: { actions: gameOver },
        DRAIN_CARD: { actions: drainCombatCard },
        ENEMY_DEFEATED: { actions: enemyDefeated },
        RESET_CHARACTERS: { actions: resetCharacters },

        GO_TO_COMBAT_ROUTE: { actions: goToCombatRoute },

        DRAW_BASE_DEFENSE_HAND: { actions: drawBaseDefenseHand },
        DISCARD_BASE_DEFENSE_HAND: { actions: discardBaseDefenseHand },
        SHUFFLE_BASE_DEFENSE_DECK: { actions: shuffleBaseDefenseDeck },
        INCREMENT_BASE_DEFENSE_ROUND: { actions: incrementBaseDefenseRound },
        SET_BASE_DEFENSE_HAND: { actions: setBaseDefenseHand },
        BASE_DEFENSE_REWARD_CHOSEN: { actions: baseDefenseRewardChosen },
        BASE_DEFENSE_CARD_PURCHASED: { actions: baseDefenseCardPurchased },
        REPAIR_BASE: { actions: repairBase },
        FETCH_BASE_DEFENSE_CARD: { actions: fetchBaseDefenseCard },
        DRAIN_BASE_DEFENSE_CARD: { actions: drainBaseDefenseCard },
        TRIGGER_BASE_DEFENSE_EVENT: { actions: triggerBaseDefenseEvent },
        APPLY_BASE_DEFENSE_EVENT_CHOICE: { actions: applyBaseDefenseEventChoice },
        INJECT_BASE_DEFENSE_ATTACKER: { actions: injectBaseDefenseAttacker },

        GO_TO_BASE_DEFENSE_ROUTE: { actions: goToBaseDefenseRoute },

        SET_TRACK: { actions: setTrack },
        PLAY_SOUND_TRACK: { actions: playSoundTrack },
        MUTE_GAME_AUDIO: { actions: muteGameAudio },
        SET_GAME_AUDIO_VOLUME: { actions: setGameAudioVolume },
        FADEOUT_SOUND_TRACK: { actions: fadeoutSoundTrack },
    },
    states: {
        [GAME_OVER]: {
            entry: [send('SAVE_GAME'), send('GAME_OVER'), send('GO_TO_GAME_OVER_ROUTE')],
            on: {
                SAVE_GAME: { actions: saveGame },
                GAME_OVER: { actions: gameOver },
                GO_TO_START_SCREEN: { target: START_SCREEN },
                RESET_GAME: { actions: resetGame, target: START_SCREEN },
                GO_TO_GAME_OVER_ROUTE: { actions: goToGameOverRoute },
            },
            exit: send('SAVE_GAME'),
        },
        [MISSION_COMPLETE]: {
            entry: [send('SAVE_GAME'), send('GAME_WON'), send('GO_TO_GAME_WON_ROUTE')],
            on: {
                SAVE_GAME: { actions: saveGame },
                GAME_WON: { actions: gameWon },
                GO_TO_START_SCREEN: { target: START_SCREEN },
                RESET_GAME: { actions: resetGame, target: START_SCREEN },

                GO_TO_GAME_WON_ROUTE: { actions: goToGameWonRoute },
            },
            exit: send('SAVE_GAME'),
        },
        [START_SCREEN]: {
            entry: [
                send('SAVE_GAME'),
                send('GO_TO_START_ROUTE'),
                send({ type: 'SET_TRACK', track: Tracks.Combat }),
            ],
            on: {
                START_NEW_GAME: { target: CHARACTER_SELECTION_SCREEN, actions: startNewGame },
                CONTINUE_CURRENT_GAME: { target: BASE_SCREEN, cond: gameInProgress },
                SAVE_GAME: { actions: saveGame },
                GO_TO_START_SCREEN: { target: START_SCREEN },
                RESET_GAME: { actions: resetGame, target: START_SCREEN },

                GO_TO_START_ROUTE: { actions: goToStartRoute },
            },
            exit: send('SAVE_GAME'),
        },
        [CHARACTER_SELECTION_SCREEN]: {
            entry: [send('GO_TO_CHARACTER_SELECTION_ROUTE')],
            on: {
                CHOOSE_CHARACTER: { target: INTRO_SCREEN, actions: chooseCharacter },
                GO_TO_START_SCREEN: { target: START_SCREEN },
                RESET_GAME: { actions: resetGame, target: START_SCREEN },
                GO_TO_CHARACTER_SELECTION_ROUTE: { actions: goToCharacterSelectionRoute },
            },
            exit: send('SAVE_GAME'),
        },
        [INTRO_SCREEN]: {
            entry: [send('SAVE_GAME'), send('GO_TO_TUTORIAL_ROUTE')],
            on: {
                INTRO_COMPLETED: BASE_SCREEN,
                GO_TO_TUTORIAL_ROUTE: { actions: goToTutorialRoute },
            },
        },
        [BASE_SCREEN]: {
            entry: [send('BASE_RESET'), send('SAVE_GAME'), send('GO_TO_BASE_ROUTE')],
            on: {
                START_OPERATION: OPERATION_INTRO_PHASE,
                DEFEND_BASE: BASE_DEFENSE_INTRO_PHASE,

                BASE_RESET: { actions: resetScenes },
                SAVE_GAME: { actions: saveGame },
                GO_TO_START_SCREEN: { target: START_SCREEN },
                RESET_GAME: { actions: resetGame, target: START_SCREEN },
                GO_TO_BASE_ROUTE: { actions: goToBaseRoute },
            },
            exit: [send('SAVE_GAME')],
        },
        [OPERATION_INTRO_PHASE]: {
            entry: [send('GO_TO_OPERATION_ROUTE'), send('SET_OPERATION_NAME')],
            on: {
                OPERATION_INTRO_PHASE_ENDS: {
                    target: OPERATION_START_ROUND,
                    internal: true,
                },
                GO_TO_OPERATION_ROUTE: { actions: goToOperationRoute },
            },
        },
        [OPERATION_START_ROUND]: {
            entry: [
                send('GO_TO_OPERATION_ROUTE'),
                send('INJECT_COMBAT_ENCOUNTER'),
                send('SHUFFLE_OPERATION_DECK'),
            ],
            on: {
                GO_TO_OPERATION_ROUTE: { actions: goToOperationRoute },
                SHUFFLE_OPERATION_DECK: { actions: shuffleOperationDeck },
                INJECT_COMBAT_ENCOUNTER: { actions: injectCombatEncounter },
            },
            after: { 1000: { target: OPERATION_DRAW_PHASE } },
        },
        [OPERATION_DRAW_PHASE]: {
            entry: [
                send('GO_TO_OPERATION_ROUTE'),
                send({ type: 'DRAW_OPERATION_HAND', showSoundEffect: true }),
            ],
            after: { 1000: { target: OPERATION_SHUFFLE_PHASE } },
            on: {
                OPERATION_DRAW_PHASE_ENDS: {
                    target: OPERATION_SHUFFLE_PHASE,
                },
            },
        },
        [OPERATION_SHUFFLE_PHASE]: {
            entry: [send('GO_TO_OPERATION_ROUTE'), send({ type: 'SHUFFLE_OPERATION_DECK' })],
            after: { 250: { target: OPERATION_DRAW_PHASE_PART_TWO } },
        },
        [OPERATION_DRAW_PHASE_PART_TWO]: {
            entry: [
                send('GO_TO_OPERATION_ROUTE'),
                send({ type: 'DRAW_OPERATION_HAND', showSoundEffect: false }),
            ],
            after: { 250: { target: OPERATION_SELECTION_PHASE } },
            on: {
                OPERATION_DRAW_PHASE_ENDS: {
                    target: OPERATION_SELECTION_PHASE,
                },
            },
        },
        [OPERATION_SELECTION_PHASE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            on: {
                OPERATION_CONFIRM_CARD_SELECTIONS: {
                    target: OPERATION_RESOLVE_PHASE_CARD_ONE,
                },
            },
        },
        [OPERATION_RESOLVE_PHASE_CARD_ONE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'operationResolvePhaseCardOne',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[0]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('OPERATION_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('OPERATION_RESOLVE_PHASE_CARD_ONE_ENDS'),
                        })
                        callback({ type: 'APPLY', ...opts })
                        if (card.transitionToCombat) {
                            callback({
                                type: 'ENQUEUE_COMBAT_ENCOUNTER',
                                effectLevel: slot.type,
                            })
                        }
                    }
                },
            },
            on: {
                APPLY: { actions: applySelectedOperationCardToPlayer },
                OPERATION_RESOLVE_PHASE_CARD_ONE_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_TWO },
                ],
                ENQUEUE_COMBAT_ENCOUNTER: { actions: enqueueCombatEncounter },
                OPERATION_EVENT_PHASE_STARTS: { target: OPERATION_RESOLVE_PHASE_EVENT_ONE },
            },
        },
        [OPERATION_RESOLVE_PHASE_EVENT_ONE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'resolvePhaseEventOne',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[0]
                    const opResolvePhaseEventOneEnds = () =>
                        callback('OPERATION_RESOLVE_PHASE_EVENT_ONE_ENDS')
                    callback({
                        type: 'TRIGGER_OPERATION_EVENT',
                        callback: opResolvePhaseEventOneEnds,
                        slot,
                    })
                },
            },
            on: {
                OPERATION_RESOLVE_PHASE_EVENT_ONE_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_TWO },
                ],
                TRIGGER_OPERATION_EVENT: { actions: triggerOperationEvent },
            },
        },
        [OPERATION_RESOLVE_PHASE_CARD_TWO]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'operationResolvePhaseCardTwo',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[1]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('OPERATION_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('OPERATION_RESOLVE_PHASE_CARD_TWO_ENDS'),
                        })
                        callback({ type: 'APPLY', ...opts })
                        if (card.transitionToCombat) {
                            callback({
                                type: 'ENQUEUE_COMBAT_ENCOUNTER',
                                effectLevel: slot.type,
                            })
                        }
                    }
                },
            },
            on: {
                APPLY: { actions: applySelectedOperationCardToPlayer },
                OPERATION_RESOLVE_PHASE_CARD_TWO_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_THREE },
                ],
                ENQUEUE_COMBAT_ENCOUNTER: { actions: enqueueCombatEncounter },
                OPERATION_EVENT_PHASE_STARTS: { target: OPERATION_RESOLVE_PHASE_EVENT_TWO },
            },
        },
        [OPERATION_RESOLVE_PHASE_EVENT_TWO]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'resolvePhaseEventTwo',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[1]
                    const opResolvePhaseEventTwoEnds = () =>
                        callback('OPERATION_RESOLVE_PHASE_EVENT_TWO_ENDS')
                    callback({
                        type: 'TRIGGER_OPERATION_EVENT',
                        callback: opResolvePhaseEventTwoEnds,
                        slot,
                    })
                },
            },
            on: {
                OPERATION_RESOLVE_PHASE_EVENT_TWO_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_THREE },
                ],
                TRIGGER_OPERATION_EVENT: { actions: triggerOperationEvent },
            },
        },
        [OPERATION_RESOLVE_PHASE_CARD_THREE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'operationResolvePhaseCardThree',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[2]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('OPERATION_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('OPERATION_RESOLVE_PHASE_CARD_THREE_ENDS'),
                        })
                        callback({ type: 'APPLY', ...opts })
                        if (card.transitionToCombat) {
                            callback({
                                type: 'ENQUEUE_COMBAT_ENCOUNTER',
                                effectLevel: slot.type,
                            })
                        }
                    }
                },
            },
            on: {
                APPLY: { actions: applySelectedOperationCardToPlayer },
                OPERATION_RESOLVE_PHASE_CARD_THREE_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_FOUR },
                ],
                ENQUEUE_COMBAT_ENCOUNTER: { actions: enqueueCombatEncounter },
                OPERATION_EVENT_PHASE_STARTS: {
                    target: OPERATION_RESOLVE_PHASE_EVENT_THREE,
                },
            },
        },
        [OPERATION_RESOLVE_PHASE_EVENT_THREE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'resolvePhaseEventThree',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[2]
                    const opResolvePhaseEventThreeEnds = () =>
                        callback('OPERATION_RESOLVE_PHASE_EVENT_THREE_ENDS')
                    callback({
                        type: 'TRIGGER_OPERATION_EVENT',
                        callback: opResolvePhaseEventThreeEnds,
                        slot,
                    })
                },
            },
            on: {
                OPERATION_RESOLVE_PHASE_EVENT_THREE_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_FOUR },
                ],
                TRIGGER_OPERATION_EVENT: { actions: triggerOperationEvent },
            },
        },
        [OPERATION_RESOLVE_PHASE_CARD_FOUR]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'operationResolvePhaseCardFour',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[3]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('OPERATION_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('OPERATION_RESOLVE_PHASE_CARD_FOUR_ENDS'),
                        })
                        callback({ type: 'APPLY', ...opts })
                        if (card.transitionToCombat) {
                            callback({
                                type: 'ENQUEUE_COMBAT_ENCOUNTER',
                                effectLevel: slot.type,
                            })
                        }
                    }
                },
            },
            on: {
                APPLY: { actions: applySelectedOperationCardToPlayer },
                OPERATION_RESOLVE_PHASE_CARD_FOUR_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_FIVE },
                ],
                ENQUEUE_COMBAT_ENCOUNTER: { actions: enqueueCombatEncounter },
                OPERATION_EVENT_PHASE_STARTS: {
                    target: OPERATION_RESOLVE_PHASE_EVENT_FOUR,
                },
            },
        },
        [OPERATION_RESOLVE_PHASE_EVENT_FOUR]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'resolvePhaseEventFour',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[3]
                    const opResolvePhaseEventFourEnds = () =>
                        callback('OPERATION_RESOLVE_PHASE_EVENT_FOUR_ENDS')
                    callback({
                        type: 'TRIGGER_OPERATION_EVENT',
                        callback: opResolvePhaseEventFourEnds,
                        slot,
                    })
                },
            },
            on: {
                OPERATION_RESOLVE_PHASE_EVENT_FOUR_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: OPERATION_RESOLVE_PHASE_CARD_FIVE },
                ],
                TRIGGER_OPERATION_EVENT: { actions: triggerOperationEvent },
            },
        },
        [OPERATION_RESOLVE_PHASE_CARD_FIVE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'operationResolvePhaseCardFive',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[4]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('OPERATION_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('OPERATION_RESOLVE_PHASE_ENDS'),
                        })
                        callback({ type: 'APPLY', ...opts })
                        if (card.transitionToCombat) {
                            callback({
                                type: 'ENQUEUE_COMBAT_ENCOUNTER',
                                effectLevel: slot.type,
                            })
                        }
                    }
                },
            },
            on: {
                APPLY: { actions: applySelectedOperationCardToPlayer },
                OPERATION_RESOLVE_PHASE_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    {
                        target: OPERATION_DISCARD_PHASE,
                        cond: combatEncounterQueueEmpty,
                    },
                    {
                        target: COMBAT_SCREEN,
                    },
                ],
                ENQUEUE_COMBAT_ENCOUNTER: { actions: enqueueCombatEncounter },
                OPERATION_EVENT_PHASE_STARTS: {
                    target: OPERATION_RESOLVE_PHASE_EVENT_FIVE,
                },
            },
        },
        [OPERATION_RESOLVE_PHASE_EVENT_FIVE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            invoke: {
                id: 'resolvePhaseEventFive',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[4]
                    const opResolvePhaseEventFiveEnds = () =>
                        callback('OPERATION_RESOLVE_PHASE_ENDS')
                    callback({
                        type: 'TRIGGER_OPERATION_EVENT',
                        callback: opResolvePhaseEventFiveEnds,
                        slot,
                    })
                },
            },
            on: {
                OPERATION_RESOLVE_PHASE_ENDS: [
                    { target: GAME_OVER, cond: playerIsDead },
                    {
                        target: OPERATION_DISCARD_PHASE,
                        cond: combatEncounterQueueEmpty,
                    },
                    {
                        target: COMBAT_SCREEN,
                    },
                ],
                TRIGGER_OPERATION_EVENT: { actions: triggerOperationEvent },
            },
        },
        [COMBAT_SCREEN]: {
            entry: [send('GO_TO_COMBAT_ROUTE'), send({ type: 'INIT_COMBAT' })],
            after: { 50: { target: COMBAT_INTRO_PHASE } },
        },
        [COMBAT_INTRO_PHASE]: {
            on: { START_COMBAT: COMBAT_START_ROUND },
        },
        [COMBAT_START_ROUND]: {
            entry: send({ type: 'SHUFFLE_COMBAT_DECK' }),
            after: { 250: { target: COMBAT_INJECT_ENEMY_CARDS } },
        },
        [COMBAT_INJECT_ENEMY_CARDS]: {
            entry: send({ type: 'INJECT_ENEMY_CARDS' }),
            after: { 1000: { target: COMBAT_DRAW_PHASE } },
        },
        [COMBAT_DRAW_PHASE]: {
            entry: send({ type: 'DRAW_COMBAT_HAND', showSoundEffect: true }),
            after: { 250: { target: COMBAT_SHUFFLE_PHASE } },
        },
        [COMBAT_SHUFFLE_PHASE]: {
            entry: send({ type: 'SHUFFLE_COMBAT_DECK' }),
            after: { 250: { target: COMBAT_DRAW_PHASE_PART_TWO } },
        },
        [COMBAT_DRAW_PHASE_PART_TWO]: {
            entry: send({ type: 'DRAW_COMBAT_HAND', showSoundEffect: false }),
            after: { 250: { target: COMBAT_SELECTION_PHASE } },
        },
        [COMBAT_SELECTION_PHASE]: {
            on: {
                COMBAT_CONFIRM_CARD_SELECTIONS: {
                    target: COMBAT_RESOLVE_PHASE_CARD_ONE,
                },
            },
        },
        [COMBAT_RESOLVE_PHASE_CARD_ONE]: {
            invoke: {
                id: 'resolveFirstSelectedCombatCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { combat },
                    } = ctx
                    const slot = combat.slots[0]
                    const { card } = slot
                    const effects = card?.effects[slot.type]
                    const goToNextState = () => callback('COMBAT_RESOLVE_PHASE_CARD_ONE_ENDS')
                    if (card && effects) {
                        callback({
                            type: 'APPLY_COMBAT_CARD',
                            card,
                            slot,
                            callback: goToNextState,
                        })
                    }
                },
            },
            on: {
                APPLY_COMBAT_CARD: { actions: applySelectedCombatCard },
                GAME_OVER: { actions: gameOver },
                COMBAT_RESOLVE_PHASE_CARD_ONE_ENDS: [
                    { target: COMBAT_ENEMY_DEFEATED, cond: enemyIsDead },
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: COMBAT_RESOLVE_PHASE_CARD_TWO },
                ],
            },
            exit: send({ type: 'RESET_CHARACTERS' }),
        },
        [COMBAT_RESOLVE_PHASE_CARD_TWO]: {
            invoke: {
                id: 'resolveSecondSelectedCombatCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { combat },
                    } = ctx
                    const slot = combat.slots[1]
                    const { card } = slot
                    const effects = card?.effects[slot.type]
                    const goToNextState = () => callback('COMBAT_RESOLVE_PHASE_CARD_TWO_ENDS')
                    if (card && effects) {
                        callback({
                            type: 'APPLY_COMBAT_CARD',
                            card,
                            slot,
                            callback: goToNextState,
                        })
                    }
                },
            },
            on: {
                APPLY_COMBAT_CARD: { actions: applySelectedCombatCard },
                COMBAT_RESOLVE_PHASE_CARD_TWO_ENDS: [
                    { target: COMBAT_ENEMY_DEFEATED, cond: enemyIsDead },
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: COMBAT_RESOLVE_PHASE_CARD_THREE },
                ],
            },
            exit: send({ type: 'RESET_CHARACTERS' }),
        },
        [COMBAT_RESOLVE_PHASE_CARD_THREE]: {
            invoke: {
                id: 'resolveThirdSelectedCombatCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { combat },
                    } = ctx
                    const slot = combat.slots[2]
                    const { card } = slot
                    const goToNextState = () => callback('COMBAT_RESOLVE_PHASE_CARD_THREE_ENDS')
                    if (card) {
                        callback({
                            type: 'APPLY_COMBAT_CARD',
                            card,
                            slot,
                            callback: goToNextState,
                        })
                    }
                },
            },
            on: {
                APPLY_COMBAT_CARD: { actions: applySelectedCombatCard },
                COMBAT_RESOLVE_PHASE_CARD_THREE_ENDS: [
                    { target: COMBAT_ENEMY_DEFEATED, cond: enemyIsDead },
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: COMBAT_RESOLVE_PHASE_CARD_FOUR },
                ],
            },
            exit: send({ type: 'RESET_CHARACTERS' }),
        },
        [COMBAT_RESOLVE_PHASE_CARD_FOUR]: {
            invoke: {
                id: 'resolveFourthSelectedCombatCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { combat },
                    } = ctx
                    const slot = combat.slots[3]
                    const { card } = slot
                    const effects = card?.effects[slot.type]
                    const goToNextState = () => callback('COMBAT_RESOLVE_PHASE_CARD_FOUR_ENDS')
                    if (card && effects) {
                        callback({
                            type: 'APPLY_COMBAT_CARD',
                            card,
                            slot,
                            callback: goToNextState,
                        })
                    }
                },
            },
            on: {
                APPLY_COMBAT_CARD: { actions: applySelectedCombatCard },
                COMBAT_RESOLVE_PHASE_CARD_FOUR_ENDS: [
                    { target: COMBAT_ENEMY_DEFEATED, cond: enemyIsDead },
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: COMBAT_RESOLVE_PHASE_CARD_FIVE },
                ],
            },
            exit: send({ type: 'RESET_CHARACTERS' }),
        },
        [COMBAT_RESOLVE_PHASE_CARD_FIVE]: {
            invoke: {
                id: 'resolveFifthSelectedCombatCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { combat },
                    } = ctx
                    const slot = combat.slots[4]
                    const { card } = slot
                    const effects = card?.effects[slot.type]
                    const goToNextState = () => callback('COMBAT_RESOLVE_PHASE_CARD_FIVE_ENDS')
                    if (card && effects) {
                        callback({
                            type: 'APPLY_COMBAT_CARD',
                            card,
                            slot,
                            callback: goToNextState,
                        })
                    }
                },
            },
            on: {
                APPLY_COMBAT_CARD: { actions: applySelectedCombatCard },
                COMBAT_RESOLVE_PHASE_CARD_FIVE_ENDS: [
                    { target: COMBAT_ENEMY_DEFEATED, cond: enemyIsDead },
                    { target: GAME_OVER, cond: playerIsDead },
                    { target: COMBAT_DISCARD_PHASE },
                ],
            },
            exit: send({ type: 'RESET_CHARACTERS' }),
        },
        [COMBAT_DISCARD_PHASE]: {
            entry: send({ type: 'DISCARD_COMBAT_HAND' }),
            after: { 250: { target: COMBAT_END_OF_ROUND } },
            on: { COMBAT_DISCARD_PHASE_ENDS: COMBAT_END_OF_ROUND },
        },
        [COMBAT_END_OF_ROUND]: {
            entry: send({ type: 'INCREMENT_COMBAT_ROUND' }),
            on: { COMBAT_ROUND_ENDS: COMBAT_START_ROUND },
            after: { 250: [{ target: COMBAT_START_ROUND }] },
        },
        [COMBAT_ENEMY_DEFEATED]: {
            entry: send({ type: 'ENEMY_DEFEATED' }),
            after: { 1000: [{ target: COMBAT_REWARDS_SCREEN }] },
        },
        [COMBAT_REWARDS_SCREEN]: {
            entry: [send('GO_TO_COMBAT_REWARDS_ROUTE'), send('SAVE_GAME')],
            on: {
                COMBAT_REWARD_CHOSEN: { actions: combatRewardChosen },
                COMBAT_REWARD_PHASE_ENDS: [
                    {
                        target: OPERATION_DISCARD_PHASE,
                        cond: mercKillerHasBeenDefeated,
                    },
                    {
                        target: OPERATION_DISCARD_PHASE,
                        cond: combatEncounterQueueEmpty,
                    },
                    {
                        target: COMBAT_SCREEN,
                    },
                ],
                SAVE_GAME: { actions: saveGame },

                GO_TO_COMBAT_REWARDS_ROUTE: { actions: goToCombatRewardsRoute },
            },
            exit: [send('SAVE_GAME')],
        },
        [OPERATION_DISCARD_PHASE]: {
            entry: [send('GO_TO_OPERATION_ROUTE')],
            after: { 200: { target: OPERATION_END_OF_ROUND } },
            on: { OPERATION_DISCARD_PHASE_ENDS: OPERATION_END_OF_ROUND },
            exit: send({ type: 'DISCARD_OPERATION_HAND' }),
        },
        [OPERATION_END_OF_ROUND]: {
            entry: send({ type: 'INCREMENT_OPERATION_ROUND' }),
            on: { OPERATION_ROUND_ENDS: OPERATION_START_ROUND },
            after: {
                250: [
                    {
                        target: OPERATION_START_ROUND,
                        cond: operationStillInProgress,
                    },
                    {
                        target: COMBAT_SCREEN,
                        cond: shouldTriggerMercKillerCombatEncounter,
                    },
                    {
                        target: OPERATION_REWARDS_SCREEN,
                        cond: operationIsComplete,
                    },
                ],
            },
        },
        [OPERATION_REWARDS_SCREEN]: {
            entry: [
                send('GO_TO_OPERATION_REWARDS_ROUTE'),
                send('INCREMENT_CHECKPOINT_COUNT'),
                send('SAVE_GAME'),
            ],
            on: {
                OPERATION_REWARD_CHOSEN: { actions: operationRewardChosen },
                OPERATION_REWARD_PHASE_ENDS: {
                    target: BASE_SCREEN,
                },
                SAVE_GAME: { actions: saveGame },

                GO_TO_OPERATION_REWARDS_ROUTE: { actions: goToOperationRewardsRoute },
            },
            exit: send('SAVE_GAME'),
        },
        [BASE_DEFENSE_INTRO_PHASE]: {
            entry: [send('GO_TO_BASE_DEFENSE_ROUTE')],
            on: { BASE_DEFENSE_INTRO_PHASE_ENDS: BASE_DEFENSE_STARTS },
        },
        [BASE_DEFENSE_STARTS]: {
            after: { 100: { target: BASE_DEFENSE_INJECT_ATTACKER_PHASE } },
        },
        [BASE_DEFENSE_REPAIR_PHASE]: {
            entry: send('REPAIR_BASE'),
            after: { 1000: { target: BASE_DEFENSE_INJECT_ATTACKER_PHASE } },
        },
        [BASE_DEFENSE_INJECT_ATTACKER_PHASE]: {
            entry: send('INJECT_BASE_DEFENSE_ATTACKER'),
            on: {
                BASE_DEFENSE_INJECT_ATTACKER_PHASE_ENDS: {
                    target: BASE_DEFENSE_START_ROUND,
                },
            },
        },
        [BASE_DEFENSE_START_ROUND]: {
            entry: send({ type: 'SHUFFLE_BASE_DEFENSE_DECK' }),
            after: { 1000: { target: BASE_DEFENSE_DRAW_PHASE } },
        },
        [BASE_DEFENSE_DRAW_PHASE]: {
            entry: send({ type: 'DRAW_BASE_DEFENSE_HAND', showSoundEffect: true }),
            after: { 1000: { target: BASE_DEFENSE_SHUFFLE_PHASE } },
        },
        [BASE_DEFENSE_SHUFFLE_PHASE]: {
            entry: send({ type: 'SHUFFLE_BASE_DEFENSE_DECK' }),
            after: { 250: { target: BASE_DEFENSE_DRAW_PHASE_PART_TWO } },
        },
        [BASE_DEFENSE_DRAW_PHASE_PART_TWO]: {
            entry: send({ type: 'DRAW_BASE_DEFENSE_HAND', showSoundEffect: false }),
            after: { 250: { target: BASE_DEFENSE_SELECTION_PHASE } },
        },
        [BASE_DEFENSE_SELECTION_PHASE]: {
            on: {
                BASE_DEFENSE_CONFIRM_CARD_SELECTIONS: {
                    target: BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE,
                },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE]: {
            invoke: {
                id: 'resolveFirstSelectedBaseDefenseCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { baseDefense },
                    } = ctx
                    const slot = baseDefense.slots[0]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('BASE_DEFENSE_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE_ENDS'),
                        })
                        callback({ type: 'APPLY_BASE_DEFENSE_CARD', ...opts })
                    }
                },
            },
            on: {
                APPLY_BASE_DEFENSE_CARD: { actions: applySelectedBaseDefenseCard },
                BASE_DEFENSE_RESOLVE_PHASE_CARD_ONE_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO },
                ],
                BASE_DEFENSE_EVENT_PHASE_STARTS: {
                    target: BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE,
                },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE]: {
            invoke: {
                id: 'resolveBaseDefensePhaseEventOne',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[0]
                    const goToNextState = () =>
                        callback('BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE_ENDS')
                    callback({
                        type: 'TRIGGER_BASE_DEFENSE_EVENT',
                        callback: goToNextState,
                        slot,
                    })
                },
            },
            on: {
                BASE_DEFENSE_RESOLVE_PHASE_EVENT_ONE_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO },
                ],
                TRIGGER_BASE_DEFENSE_EVENT: { actions: triggerBaseDefenseEvent },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO]: {
            invoke: {
                id: 'resolveSecondSelectedBaseDefenseCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { baseDefense },
                    } = ctx
                    const slot = baseDefense.slots[1]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('BASE_DEFENSE_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO_ENDS'),
                        })
                        callback({ type: 'APPLY_BASE_DEFENSE_CARD', ...opts })
                    }
                },
            },
            on: {
                APPLY_BASE_DEFENSE_CARD: { actions: applySelectedBaseDefenseCard },
                BASE_DEFENSE_RESOLVE_PHASE_CARD_TWO_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE },
                ],
                BASE_DEFENSE_EVENT_PHASE_STARTS: {
                    target: BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO,
                },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO]: {
            invoke: {
                id: 'resolveBaseDefensePhaseEventTwo',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[1]
                    const goToNextState = () =>
                        callback('BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO_ENDS')
                    callback({
                        type: 'TRIGGER_BASE_DEFENSE_EVENT',
                        callback: goToNextState,
                        slot,
                    })
                },
            },
            on: {
                BASE_DEFENSE_RESOLVE_PHASE_EVENT_TWO_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE },
                ],
                TRIGGER_BASE_DEFENSE_EVENT: { actions: triggerBaseDefenseEvent },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE]: {
            invoke: {
                id: 'resolveThirdSelectedBaseDefenseCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { baseDefense },
                    } = ctx
                    const slot = baseDefense.slots[2]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('BASE_DEFENSE_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE_ENDS'),
                        })
                        callback({ type: 'APPLY_BASE_DEFENSE_CARD', ...opts })
                    }
                },
            },
            on: {
                APPLY_BASE_DEFENSE_CARD: { actions: applySelectedBaseDefenseCard },
                BASE_DEFENSE_RESOLVE_PHASE_CARD_THREE_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR },
                ],
                BASE_DEFENSE_EVENT_PHASE_STARTS: {
                    target: BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE,
                },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE]: {
            invoke: {
                id: 'resolveBaseDefensePhaseEventThree',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[2]
                    const goToNextState = () =>
                        callback('BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE_ENDS')
                    callback({
                        type: 'TRIGGER_BASE_DEFENSE_EVENT',
                        callback: goToNextState,
                        slot,
                    })
                },
            },
            on: {
                BASE_DEFENSE_RESOLVE_PHASE_EVENT_THREE_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR },
                ],
                TRIGGER_BASE_DEFENSE_EVENT: { actions: triggerBaseDefenseEvent },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR]: {
            invoke: {
                id: 'resolveFourthSelectedBaseDefenseCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { baseDefense },
                    } = ctx
                    const slot = baseDefense.slots[3]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('BASE_DEFENSE_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR_ENDS'),
                        })
                        callback({ type: 'APPLY_BASE_DEFENSE_CARD', ...opts })
                    }
                },
            },
            on: {
                APPLY_BASE_DEFENSE_CARD: { actions: applySelectedBaseDefenseCard },
                BASE_DEFENSE_RESOLVE_PHASE_CARD_FOUR_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE },
                ],
                BASE_DEFENSE_EVENT_PHASE_STARTS: {
                    target: BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR,
                },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR]: {
            invoke: {
                id: 'resolveBaseDefensePhaseEventFour',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[3]
                    const goToNextState = () =>
                        callback('BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR_ENDS')
                    callback({
                        type: 'TRIGGER_BASE_DEFENSE_EVENT',
                        callback: goToNextState,
                        slot,
                    })
                },
            },
            on: {
                BASE_DEFENSE_RESOLVE_PHASE_EVENT_FOUR_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE },
                ],
                TRIGGER_BASE_DEFENSE_EVENT: { actions: triggerBaseDefenseEvent },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE]: {
            invoke: {
                id: 'resolveFifthSelectedBaseDefenseCard',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { baseDefense },
                    } = ctx
                    const slot = baseDefense.slots[4]
                    const { card } = slot
                    if (card) {
                        if (card.triggerEvent) {
                            callback('BASE_DEFENSE_EVENT_PHASE_STARTS')
                        }
                        const opts = Object.freeze({
                            slot,
                            callback: () => callback('BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE_ENDS'),
                        })
                        callback({ type: 'APPLY_BASE_DEFENSE_CARD', ...opts })
                    }
                },
            },
            on: {
                APPLY_BASE_DEFENSE_CARD: { actions: applySelectedBaseDefenseCard },
                BASE_DEFENSE_RESOLVE_PHASE_CARD_FIVE_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_DISCARD_PHASE },
                ],
                BASE_DEFENSE_EVENT_PHASE_STARTS: {
                    target: BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE,
                },
            },
        },
        [BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE]: {
            invoke: {
                id: 'resolveBaseDefensePhaseEventFive',
                src: (ctx: DinoMercsContext) => callback => {
                    const {
                        game: { operation },
                    } = ctx
                    const slot = operation.slots[4]
                    const goToNextState = () =>
                        callback('BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE_ENDS')
                    callback({
                        type: 'TRIGGER_BASE_DEFENSE_EVENT',
                        callback: goToNextState,
                        slot,
                    })
                },
            },
            on: {
                BASE_DEFENSE_RESOLVE_PHASE_EVENT_FIVE_ENDS: [
                    { target: GAME_OVER, cond: baseIsDestroyed },
                    { target: BASE_DEFENSE_DISCARD_PHASE },
                ],
                TRIGGER_BASE_DEFENSE_EVENT: { actions: triggerBaseDefenseEvent },
            },
        },
        [BASE_DEFENSE_DISCARD_PHASE]: {
            entry: send({ type: 'DISCARD_BASE_DEFENSE_HAND' }),
            after: { 200: { target: BASE_DEFENSE_END_OF_ROUND } },
            on: { BASE_DEFENSE_DISCARD_PHASE_ENDS: BASE_DEFENSE_END_OF_ROUND },
        },
        [BASE_DEFENSE_END_OF_ROUND]: {
            entry: send({ type: 'INCREMENT_BASE_DEFENSE_ROUND' }),
            on: { BASE_DEFENSE_ROUND_ENDS: BASE_DEFENSE_REPAIR_PHASE },
            after: {
                200: [
                    {
                        target: BASE_DEFENSE_REPAIR_PHASE,
                        cond: ctx => ctx.game.baseDefense.round <= 10,
                    },
                    {
                        target: BASE_DEFENSE_REWARDS_SCREEN,
                        cond: ctx => ctx.game.baseDefense.round > 10,
                    },
                ],
            },
        },
        [BASE_DEFENSE_REWARDS_SCREEN]: {
            entry: [send('GO_TO_BASE_DEFENSE_REWARDS_ROUTE'), send('SAVE_GAME')],
            on: {
                BASE_DEFENSE_REWARD_CHOSEN: { actions: baseDefenseRewardChosen },
                BASE_DEFENSE_REWARD_PHASE_ENDS: {
                    target: BASE_SCREEN,
                },
                SAVE_GAME: { actions: saveGame },
                GO_TO_BASE_DEFENSE_REWARDS_ROUTE: { actions: goToBaseDefenseRewardsRoute },
            },
            exit: [send('SAVE_GAME')],
        },
    },
})
