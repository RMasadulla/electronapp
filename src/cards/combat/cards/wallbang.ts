import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const WALLBANG_CARD: Card = {
    id: 'WALLBANG_CARD',
    key: 'WALLBANG_CARD',
    title: 'WALLBANG',
    identity: CardIdentity.Utility,
    storeDescription: '- IN COVER',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { inCover: { modifier: -3 } },
                description: '-3 enemy IN COVER',
                bark: 'They’re shooting right through our cover! [-3 enemy IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { inCover: { modifier: -2 } },
                description: '-2 enemy IN COVER',
                bark: 'They’re shooting right through our cover! [-2 enemy IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { inCover: { modifier: -1 } },
                description: '-1 enemy IN COVER',
                bark: 'They’re shooting right through our cover! [-1 enemy IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: +0 } },
                description: '+0 IN COVER',
                bark: 'They’re shooting right through our cover! [+0 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: -1 } },
                description: '-1 IN COVER',
                bark: 'They’re shooting right through our cover! [-1 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: -2 } },
                description: '-2 IN COVER',
                bark: 'They’re shooting right through our cover! [-2 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
    },
}
export const WALLBANG_CARD_02 = { ...WALLBANG_CARD, id: 'WALLBANG_CARD_02' }
export const WALLBANG_CARD_03 = { ...WALLBANG_CARD, id: 'WALLBANG_CARD_03' }
export const WALLBANG_CARD_04 = { ...WALLBANG_CARD, id: 'WALLBANG_CARD_04' }
