import { EffectLevels, Card, Tiers } from '@/types'

export const RAPID_DEPLOYMENT_CARD: Card = {
    id: 'RAPID_DEPLOYMENT_CARD',
    key: 'RAPID_DEPLOYMENT_CARD',
    title: 'RAPID DEPLOYMENT',
    storeDescription: 'Replace this card with any card from your Operation Deck.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Operation Deck.',
                bark: '',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Operation Deck.',
                bark: '',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Operation Deck.',
                bark: '',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Operation Deck.',
                bark: '',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Operation Deck.',
                bark: '',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Operation Deck.',
                bark: '',
            },
        },
    },
}
export const RAPID_DEPLOYMENT_CARD_02 = {
    ...RAPID_DEPLOYMENT_CARD,
    id: 'RAPID_DEPLOYMENT_CARD_02',
}
export const RAPID_DEPLOYMENT_CARD_03 = {
    ...RAPID_DEPLOYMENT_CARD,
    id: 'RAPID_DEPLOYMENT_CARD_03',
}
export const RAPID_DEPLOYMENT_CARD_04 = {
    ...RAPID_DEPLOYMENT_CARD,
    id: 'RAPID_DEPLOYMENT_CARD_04',
}
