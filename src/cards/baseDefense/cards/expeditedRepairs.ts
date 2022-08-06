import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const EXPEDITED_REPAIRS_CARD: Card = {
    id: 'EXPEDITED_REPAIRS_CARD',
    key: 'EXPEDITED_REPAIRS_CARD',
    title: 'EXPEDITED REPAIRS',
    identity: CardIdentity.Utility,
    storeDescription: '+/- ANTI-GROUND',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: {
                    hp: { modifier: 75 },
                    supplies: { modifier: -75 },
                },
                description: '+75 HP. -75 SUPPLIES.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: {
                    hp: { modifier: 50 },
                    supplies: { modifier: -50 },
                },
                description: '+50 HP. -50 SUPPLIES.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: {
                    hp: { modifier: 25 },
                    supplies: { modifier: -25 },
                },
                description: '+25 HP. -25 SUPPLIES.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                stats: {
                    hp: { modifier: 0 },
                    supplies: { modifier: -25 },
                },
                description: '+0 HP. -25 SUPPLIES.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                stats: {
                    hp: { modifier: 0 },
                    supplies: { modifier: -50 },
                },
                description: '+0 HP. -50 SUPPLIES.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                stats: {
                    hp: { modifier: 0 },
                    supplies: { modifier: -75 },
                },
                description: '+0 HP. -75 SUPPLIES.',
            },
        },
    },
}
export const EXPEDITED_REPAIRS_CARD_02 = {
    ...EXPEDITED_REPAIRS_CARD,
    id: 'EXPEDITED_REPAIRS_CARD_02',
}
export const EXPEDITED_REPAIRS_CARD_03 = {
    ...EXPEDITED_REPAIRS_CARD,
    id: 'EXPEDITED_REPAIRS_CARD_03',
}
export const EXPEDITED_REPAIRS_CARD_04 = {
    ...EXPEDITED_REPAIRS_CARD,
    id: 'ENTRENCH_CARD_04',
}
