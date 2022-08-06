import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const FRESH_BATCH_CARD: Card = {
    id: 'FRESH_BATCH_CARD',
    key: 'FRESH_BATCH_CARD',
    title: 'FRESH BATCH',
    identity: CardIdentity.Utility,
    storeDescription: '+/- PERSONNEL',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: { personnel: { modifier: 7 } },
                description: '+7 PERSONNEL.',
                bark: 'Fresh blood, let’s see how long they last [+7 PERSONNEL].',
                infoText: 'PERSONNEL determines how much your base is repaired each round.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: { personnel: { modifier: 5 } },
                description: '+5 PERSONNEL.',
                bark: 'Fresh blood, let’s see how long they last [+5 PERSONNEL].',
                infoText: 'PERSONNEL determines how much your base is repaired each round.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: { personnel: { modifier: 3 } },
                description: '+3 PERSONNEL.',
                bark: 'Fresh blood, let’s see how long they last [+3 PERSONNEL].',
                infoText: 'PERSONNEL determines how much your base is repaired each round.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                stats: { personnel: { modifier: 0 } },
                description: '+0 PERSONNEL.',
                bark: 'Gone so soon, so tragic [+0 PERSONNEL].',
                infoText: 'PERSONNEL determines how much your base is repaired each round.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                stats: { personnel: { modifier: -1 } },
                description: '-1 PERSONNEL.',
                bark: 'Gone so soon, so tragic [-1 PERSONNEL].',
                infoText: 'PERSONNEL determines how much your base is repaired each round.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                stats: { personnel: { modifier: -2 } },
                description: '-2 PERSONNEL.',
                bark: 'Gone so soon, so tragic [-2 PERSONNEL].',
                infoText: 'PERSONNEL determines how much your base is repaired each round.',
            },
        },
    },
}
export const FRESH_BATCH_CARD_02 = {
    ...FRESH_BATCH_CARD,
    id: 'FRESH_BATCH_CARD_02',
}
export const FRESH_BATCH_CARD_03 = {
    ...FRESH_BATCH_CARD,
    id: 'FRESH_BATCH_CARD_03',
}
export const FRESH_BATCH_CARD_04 = {
    ...FRESH_BATCH_CARD,
    id: 'FRESH_BATCH_CARD_04',
}
