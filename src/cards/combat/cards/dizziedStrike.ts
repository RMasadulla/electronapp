import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const DIZZIED_STRIKE_CARD: Card = Object.freeze({
    id: 'DIZZIED_STRIKE_CARD',
    key: 'DIZZIED_STRIKE_CARD',
    title: 'DIZZIED STRIKE',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal high damage, if you are DAZED. Otherwise, deal 0 damage.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 45, attackType: AttackTypes.DizziedStrike },
                description:
                    'If you are DAZED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 35, attackType: AttackTypes.DizziedStrike },
                description:
                    'If you are DAZED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 27, attackType: AttackTypes.DizziedStrike },
                description:
                    'If you are DAZED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 10, attackType: AttackTypes.DizziedStrike },
                description:
                    'Enemy partially blocks attack. If you are DAZED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.DizziedStrike },
                description:
                    'Enemy partially blocks attack. If you are DAZED, deal {x} damage to enemy. Otherwise, deal 0 damage.',
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
export const DIZZIED_STRIKE_CARD_02 = {
    ...DIZZIED_STRIKE_CARD,
    id: 'DIZZIED_STRIKE_CARD_02',
}
export const DIZZIED_STRIKE_CARD_03 = {
    ...DIZZIED_STRIKE_CARD,
    id: 'DIZZIED_STRIKE_CARD_03',
}
export const DIZZIED_STRIKE_CARD_04 = {
    ...DIZZIED_STRIKE_CARD,
    id: 'DIZZIED_STRIKE_CARD_04',
}
