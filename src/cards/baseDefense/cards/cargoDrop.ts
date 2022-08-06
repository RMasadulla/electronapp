import { EffectLevels, Card, Tiers } from '@/types'

export const CARGO_DROP_CARD: Card = {
    id: 'CARGO_DROP_CARD',
    key: 'CARGO_DROP_CARD',
    title: 'CARGO DROP',
    storeDescription: 'Replace this card with any card from your Base Defense Deck',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Base Defense Deck',
                bark: 'NO EFFECT',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Base Defense Deck',
                bark: 'NO EFFECT',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Base Defense Deck',
                bark: 'NO EFFECT',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Base Defense Deck',
                bark: 'NO EFFECT',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Base Defense Deck',
                bark: 'NO EFFECT',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Base Defense Deck',
                bark: 'NO EFFECT',
            },
        },
    },
}
export const CARGO_DROP_CARD_02 = {
    ...CARGO_DROP_CARD,
    id: 'CARGO_DROP_CARD_02',
}
export const CARGO_DROP_CARD_03 = {
    ...CARGO_DROP_CARD,
    id: 'CARGO_DROP_CARD_03',
}
export const CARGO_DROP_CARD_04 = {
    ...CARGO_DROP_CARD,
    id: 'CARGO_DROP_CARD_04',
}
