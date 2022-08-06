import { EffectLevels, Card, Tiers } from '@/types'

export const TRUSTY_SIDEARM_CARD: Card = {
    id: 'TRUSTY_SIDEARM_CARD',
    key: 'TRUSTY_SIDEARM_CARD',
    title: 'TRUSTY SIDEARM',
    storeDescription: 'Replace this card with any card from your Combat Deck.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Combat Deck.',
                bark: 'No effect',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Combat Deck.',
                bark: 'No effect',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Combat Deck.',
                bark: 'No effect',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Combat Deck.',
                bark: 'No effect',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Combat Deck.',
                bark: 'No effect',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                other: { fetch: true },
                description: 'Replace this card with any card from your Combat Deck.',
                bark: 'No effect',
            },
        },
    },
}
export const TRUSTY_SIDEARM_CARD_02 = {
    ...TRUSTY_SIDEARM_CARD,
    id: 'TRUSTY_SIDEARM_CARD_02',
}
export const TRUSTY_SIDEARM_CARD_03 = {
    ...TRUSTY_SIDEARM_CARD,
    id: 'TRUSTY_SIDEARM_CARD_03',
}
export const TRUSTY_SIDEARM_CARD_04 = {
    ...TRUSTY_SIDEARM_CARD,
    id: 'TRUSTY_SIDEARM_CARD_04',
}
