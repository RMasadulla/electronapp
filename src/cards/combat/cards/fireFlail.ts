import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const FIRE_FLAIL_CARD: Card = Object.freeze({
    id: 'FIRE_FLAIL_CARD',
    key: 'FIRE_FLAIL_CARD',
    title: 'FIRE FLAIL',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal high damage, take some damage',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Three,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 50, attackType: AttackTypes.Regular },
                description: 'Deal {x} damage.',
                bark: 'AGH! It burns! [{x} DAMAGE]',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 24, attackType: AttackTypes.Regular },
                description: 'Take {x} damage.',
                bark: 'Totally worth it [{x} DAMAGE]',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 35, attackType: AttackTypes.Regular },
                description: 'Deal {x} damage.',
                bark: 'AGH! It burns! [{x} DAMAGE]',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 16, attackType: AttackTypes.Regular },
                description: 'Take {x} damage.',
                bark: 'Totally worth it [{x} DAMAGE]',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 24, attackType: AttackTypes.Regular },
                description: 'Deal {x} damage.',
                bark: 'AGH! It burns! [{x} DAMAGE]',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 10, attackType: AttackTypes.Regular },
                description: 'Take {x} damage.',
                bark: 'Totally worth it [{x} DAMAGE]',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 16, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, {x} damage.',
                bark: 'AGH! It burns! [{x} DAMAGE]',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 24, attackType: AttackTypes.Regular },
                description: 'Take {x} damage.',
                bark: '…Worth it? [{x} DAMAGE]',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 8, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, {x} damage.',
                bark: 'AGH! It burns! [{x} DAMAGE]',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 35, attackType: AttackTypes.Regular },
                description: 'Take {x} damage.',
                bark: '…Worth it? [{x} DAMAGE]',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Enemy blocks attack, {x} damage.',
                bark: 'AGH! It burns! [{x} DAMAGE]',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 50, attackType: AttackTypes.Regular },
                description: 'Take {x} damage.',
                bark: '…Worth it? [{x} DAMAGE]',
            },
        },
    },
})
export const FIRE_FLAIL_CARD_02 = {
    ...FIRE_FLAIL_CARD,
    id: 'FIRE_FLAIL_CARD_02',
}
export const FIRE_FLAIL_CARD_03 = {
    ...FIRE_FLAIL_CARD,
    id: 'FIRE_FLAIL_CARD_03',
}
export const FIRE_FLAIL_CARD_04 = {
    ...FIRE_FLAIL_CARD,
    id: 'FIRE_FLAIL_CARD_04',
}
