import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const GENERATE_REVENUE_CARD: Card = {
    id: 'GENERATE_REVENUE_CARD',
    key: 'GENERATE_REVENUE_CARD',
    title: 'GENERATE REVENUE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- SUPPLIES',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { money: { modifier: 750 } },
                description: '+$750.',
                bark: 'Get paid [+$750].',
                infoText: 'Money can be used to buy and remove operation and combat cards.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { money: { modifier: 500 } },
                description: '+$500.',
                bark: 'Get paid [+$500].',
                infoText: 'Money can be used to buy and remove operation and combat cards.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { money: { modifier: 250 } },
                description: '+$250.',
                bark: 'Get paid [+$250].',
                infoText: 'Money can be used to buy and remove operation and combat cards.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: '+$0.',
                bark: 'Our payment is late… [+$0]',
                infoText: 'Money can be used to buy and remove operation and combat cards.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { money: { modifier: -100 } },
                description: '-$100.',
                bark: 'We’ve got to pay up this time around [-$100].',
                infoText: 'Money can be used to buy and remove operation and combat cards.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { money: { modifier: -250 } },
                description: '-$250.',
                bark: 'We’ve got to pay up this time around [-$250].',
                infoText: 'Money can be used to buy and remove operation and combat cards.',
            },
        },
    },
}
export const GENERATE_REVENUE_CARD_02 = {
    ...GENERATE_REVENUE_CARD,
    id: 'GENERATE_REVENUE_CARD_02',
}
export const GENERATE_REVENUE_CARD_03 = {
    ...GENERATE_REVENUE_CARD,
    id: 'GENERATE_REVENUE_CARD_03',
}
export const GENERATE_REVENUE_CARD_04 = {
    ...GENERATE_REVENUE_CARD,
    id: 'GENERATE_REVENUE_CARD_04',
}
