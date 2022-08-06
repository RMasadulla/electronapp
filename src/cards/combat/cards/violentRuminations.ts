import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const VIOLENT_RUMINATIONS_CARD: Card = {
    id: 'VIOLENT_RUMINATIONS_CARD',
    key: 'VIOLENT_RUMINATIONS_CARD',
    title: 'VIOLENT RUMINATIONS',
    identity: CardIdentity.Utility,
    storeDescription: '+/- ENRAGED.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { enraged: { modifier: 3 } },
                description: '+3 ENRAGED.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { enraged: { modifier: 2 } },
                description: '+2 ENRAGED.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { enraged: { modifier: 1 } },
                description: '+1 ENRAGED.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { enraged: { modifier: 0 } },
                description: '+0 ENRAGED.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { enraged: { modifier: 1 } },
                description: '+1 ENRAGED.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { enraged: { modifier: 2 } },
                description: '+2 ENRAGED.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
    },
}
export const VIOLENT_RUMINATIONS_CARD_02 = {
    ...VIOLENT_RUMINATIONS_CARD,
    id: 'VIOLENT_RUMINATIONS_CARD_02',
}
export const VIOLENT_RUMINATIONS_CARD_03 = {
    ...VIOLENT_RUMINATIONS_CARD,
    id: 'VIOLENT_RUMINATIONS_CARD_03',
}
export const VIOLENT_RUMINATIONS_CARD_04 = {
    ...VIOLENT_RUMINATIONS_CARD,
    id: 'VIOLENT_RUMINATIONS_CARD_04',
}
