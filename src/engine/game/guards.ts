import { isEmpty, isNil } from 'lodash'

import { DinoMercsContext } from '@/types'

export const gameInProgress = (ctx: DinoMercsContext) => ctx.runInProgress

export const operationStillInProgress = (ctx: DinoMercsContext) => ctx.game.operation.round <= 4

export const operationIsComplete = (ctx: DinoMercsContext) => ctx.game.operation.round > 4

export const mercKillerHasBeenDefeated = (ctx: DinoMercsContext) =>
    ctx.game.timeline[ctx.game.currentCheckpoint].mercKillerDefeated === true

export const combatEncounterQueueEmpty = (ctx: DinoMercsContext) =>
    isEmpty(ctx.game.combat.encounterQueue)

export const shouldTriggerMercKillerCombatEncounter = (ctx: DinoMercsContext) =>
    !isNil(ctx.game.timeline[ctx.game.currentCheckpoint].mercKiller) &&
    ctx.game.timeline[ctx.game.currentCheckpoint].mercKillerDefeated === false

export const playerIsDead = (ctx: DinoMercsContext) => ctx.game.player.stats.hp <= 0

export const enemyIsDead = (ctx: DinoMercsContext) =>
    ctx.game.enemy.variants[ctx.game.enemy.variant].stats.hp <= 0

export const baseIsDestroyed = (ctx: DinoMercsContext) => ctx.game.base.stats.hp <= 0
