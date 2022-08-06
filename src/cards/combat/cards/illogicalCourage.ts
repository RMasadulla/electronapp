import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const ILLOGICAL_COURAGE_CARD: Card = Object.freeze({
    id: 'ILLOGICAL_COURAGE_CARD',
    key: 'ILLOGICAL_COURAGE_CARD',
    title: 'ILLOGICAL COURAGE',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal high damage, if you are SUPPRESSED. Otherwise, deal 0 damage.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 45, attackType: AttackTypes.IllogicalCourage },
                description:
                    'If you are SUPPRESSED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 35, attackType: AttackTypes.IllogicalCourage },
                description:
                    'If you are SUPPRESSED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 27, attackType: AttackTypes.IllogicalCourage },
                description:
                    'If you are SUPPRESSED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 10, attackType: AttackTypes.IllogicalCourage },
                description:
                    'Enemy partially blocks attack. If you are SUPPRESSED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.IllogicalCourage },
                description:
                    'Enemy partially blocks attack. If you are SUPPRESSED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
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
export const ILLOGICAL_COURAGE_CARD_02 = {
    ...ILLOGICAL_COURAGE_CARD,
    id: 'ILLOGICAL_COURAGE_CARD_02',
}
export const ILLOGICAL_COURAGE_CARD_03 = {
    ...ILLOGICAL_COURAGE_CARD,
    id: 'ILLOGICAL_COURAGE_CARD_03',
}
export const ILLOGICAL_COURAGE_CARD_04 = {
    ...ILLOGICAL_COURAGE_CARD,
    id: 'ILLOGICAL_COURAGE_CARD_04',
}
