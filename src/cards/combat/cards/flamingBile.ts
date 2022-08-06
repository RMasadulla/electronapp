import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const FLAMING_BILE_CARD: Card = Object.freeze({
    id: 'FLAMING_BILE_CARD',
    key: 'FLAMING_BILE_CARD',
    title: 'FLAMING BILE',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal high damage, if you are OVERHEATED. Otherwise, deal 0 damage.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 45, attackType: AttackTypes.FlamingBile },
                description:
                    'If you are OVERHEATED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 35, attackType: AttackTypes.FlamingBile },
                description:
                    'If you are OVERHEATED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 27, attackType: AttackTypes.FlamingBile },
                description:
                    'If you are OVERHEATED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 10, attackType: AttackTypes.FlamingBile },
                description:
                    'Enemy partially blocks attack. If you are OVERHEATED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.FlamingBile },
                description:
                    'Enemy partially blocks attack. If you are OVERHEATED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Enemy blocks attack. Deal {x} damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const FLAMING_BILE_CARD_02 = {
    ...FLAMING_BILE_CARD,
    id: 'FLAMING_BILE_CARD_02',
}
export const FLAMING_BILE_CARD_03 = {
    ...FLAMING_BILE_CARD,
    id: 'FLAMING_BILE_CARD_03',
}
export const FLAMING_BILE_CARD_04 = {
    ...FLAMING_BILE_CARD,
    id: 'FLAMING_BILE_CARD_04',
}
