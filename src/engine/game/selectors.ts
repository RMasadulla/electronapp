import { DinoMercsContext } from '@/types'
import { ENEMY_ART_ASSETS } from '../../utils/enemies'
import {
    GAME_OVER,
    MISSION_COMPLETE,
    INTRO_SCREEN,
    START_SCREEN,
    CHARACTER_SELECTION_SCREEN,
    BASE_SCREEN,
    CHARACTER_SCREEN,
    BASE_DEFENSE_DECK_SCREEN,
    COMBAT_DECK_SCREEN,
    OPERATION_DECK_SCREEN,
} from './constants'

type StateType = { context: DinoMercsContext; matches: (state: string) => boolean }

// Context selectors
export const selectPlayer = (state: StateType) => state.context.game.player
export const selectEnemy = (state: StateType) => state.context.game.enemy
export const selectEnemyArt = (state: StateType) => {
    const asset = ENEMY_ART_ASSETS.find(({ id }) => id === state.context.game.enemy.id)
    return asset ? asset.art : undefined
}
export const selectEnemyArtDimensions = (state: StateType) => {
    const asset = ENEMY_ART_ASSETS.find(({ id }) => id === state.context.game.enemy.id)
    return asset
        ? { width: asset.width, left: asset.left, bottom: asset.bottom }
        : { width: 0, left: 0, bottom: 0 }
}
export const selectBase = (state: StateType) => state.context.game.base
export const selectIsRunInProgress = (state: StateType) => state.context.runInProgress

export const selectOperation = (state: StateType) => state.context.game.operation
export const selectCombat = (state: StateType) => state.context.game.combat
export const selectBaseDefense = (state: StateType) => state.context.game.baseDefense

export const selectCurrentCheckpoint = (state: StateType) => state.context.game.currentCheckpoint
export const selectCurrentTimelineStep = (state: StateType) =>
    state.context.game.timeline[state.context.game.currentCheckpoint]
export const selectTimeline = (state: StateType) => state.context.game.timeline
export const selectAudioConfig = (state: StateType) => state.context.audio

// state matchers
// general
export const selectCurrentRoute = (state: StateType) => state.context.game.currentRoute

export const selectIsGameOver = (state: StateType) => state.matches(GAME_OVER)
export const selectIsMissionComplete = (state: StateType) => state.matches(MISSION_COMPLETE)
export const selectIsStartScreen = (state: StateType) => state.matches(START_SCREEN)
export const selectIsIntroScreen = (state: StateType) => state.matches(INTRO_SCREEN)
export const selectIsCharacterSelectionScreen = (state: StateType) =>
    state.matches(CHARACTER_SELECTION_SCREEN)
export const selectIsBaseScreen = (state: StateType) => state.matches(BASE_SCREEN)
export const selectIsCharacterScreen = (state: StateType) => state.matches(CHARACTER_SCREEN)
export const selectIsBaseDefenseDeckScreen = (state: StateType) =>
    state.matches(BASE_DEFENSE_DECK_SCREEN)
export const selectIsCombatDeckScreen = (state: StateType) => state.matches(COMBAT_DECK_SCREEN)
export const selectIsOperationDeckScreen = (state: StateType) =>
    state.matches(OPERATION_DECK_SCREEN)

// op
export const selectIsOpScreen = (state: StateType) => state.matches('operationScreen')
export const selectIsOpIntroPhase = (state: StateType) => state.matches('operationIntroPhase')
export const selectIsOpPositioningPhase = (state: StateType) =>
    state.matches('operationSelectionPhase')
export const selectIsOpDiscardPhase = (state: StateType) => state.matches('operationDiscardPhase')
export const selectIsOpResolvePhaseEventOne = (state: StateType) =>
    state.matches('operationResolvePhaseEventOne')
export const selectIsOpResolvePhaseEventTwo = (state: StateType) =>
    state.matches('operationResolvePhaseEventTwo')
export const selectIsOpResolvePhaseEventThree = (state: StateType) =>
    state.matches('operationResolvePhaseEventThree')
export const selectIsOpResolvePhaseEventFour = (state: StateType) =>
    state.matches('operationResolvePhaseEventFour')
export const selectIsOpResolvePhaseEventFive = (state: StateType) =>
    state.matches('operationResolvePhaseEventFive')
export const selectIsOperationPhaseRewardsScreen = (state: StateType) =>
    state.matches('operationRewardsScreen')

// combat
export const selectIsCombatPhase = (state: StateType) => state.matches('operationCombatPhase')
export const selectIsCombatPhaseIntro = (state: StateType) => state.matches('combatIntroPhase')
export const selectIsCombatPhaseRewardsScreen = (state: StateType) =>
    state.matches('combatRewardsScreen')

// base defense
export const selectIsBaseDefenseIntroPhase = (state: StateType) =>
    state.matches('baseDefenseIntroPhase')
export const selectIsBaseDefensePhase = (state: StateType) => state.matches('baseDefenseScreen')
export const selectIsBaseDefensePhaseRewardsScreen = (state: StateType) =>
    state.matches('baseDefenseRewardsScreen')
