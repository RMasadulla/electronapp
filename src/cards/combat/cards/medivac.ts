import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const MEDIVAC_CARD: Card = {
    id: 'MEDIVAC_CARD',
    key: 'MEDIVAC_CARD',
    title: 'MEDIVAC',
    identity: CardIdentity.Support,
    storeDescription: 'Heal HP for each **support point** you have.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { hp: { modifier: 4, support: true } },
                description: '+4 HP for each **support point**.',
                bark: 'Medivac incoming! Thanks for the support.',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { hp: { modifier: 2, support: true } },
                description: '+2 HP for each **support point**.',
                bark: 'Medivac incoming! Thanks for the support.',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { hp: { modifier: 5 } },
                description: '+5 HP.',
                bark: 'Medivac incoming! Thanks for the support.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: '+0 HP.',
                bark: 'Medivac incoming? Thanks a lot for the support.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                description: '+0 HP.',
                bark: 'Medivac incoming? Thanks a lot for the support.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                description: '+0 HP.',
                bark: 'Medivac incoming? Thanks a lot for the support.',
            },
        },
    },
}
export const MEDIVAC_CARD_02 = {
    ...MEDIVAC_CARD,
    id: 'MEDIVAC_CARD_02',
}
export const MEDIVAC_CARD_03 = {
    ...MEDIVAC_CARD,
    id: 'MEDIVAC_CARD_03',
}
export const MEDIVAC_CARD_04 = {
    ...MEDIVAC_CARD,
    id: 'MEDIVAC_CARD_04',
}
