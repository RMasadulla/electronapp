import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const FIREFIGHTERS_CARD: Card = {
    id: 'FIREFIGHTERS_CARD',
    key: 'FIREFIGHTERS_CARD',
    title: 'FIREFIGHTERS',
    identity: CardIdentity.Utility,
    storeDescription: '+/- BURNING status',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                statuses: { burning: { modifier: 0 } },
                description: 'Remove BURNING status.',
                bark: 'Put it out! Base is no longer burning.',
                infoText: 'While BURNING is active, your base will not receive repairs.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                statuses: { burning: { modifier: -2 } },
                description: '-2 BURNING.',
                bark: 'Put it out! [-2 BURNING]',
                infoText: 'While BURNING is active, your base will not receive repairs.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                statuses: { burning: { modifier: -1 } },
                description: '-1 BURNING.',
                bark: 'Put it out! [-1 BURNING]',
                infoText: 'While BURNING is active, your base will not receive repairs.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                statuses: { burning: { modifier: -0 } },
                description: '-0 BURNING.',
                bark: 'Our base is on fire! [-0 BURNING]',
                infoText: 'While BURNING is active, your base will not receive repairs.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                statuses: { burning: { modifier: 1 } },
                description: '+1 BURNING.',
                bark: 'Our base is on fire! [+1 BURNING]',
                infoText: 'While BURNING is active, your base will not receive repairs.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                statuses: { burning: { modifier: 2 } },
                description: '+2 BURNING.',
                bark: 'Our base is on fire! [+2 BURNING]',
                infoText: 'While BURNING is active, your base will not receive repairs.',
            },
        },
    },
}
export const FIREFIGHTERS_CARD_02 = {
    ...FIREFIGHTERS_CARD,
    id: 'FIREFIGHTERS_CARD_02',
}
export const FIREFIGHTERS_CARD_03 = {
    ...FIREFIGHTERS_CARD,
    id: 'FIREFIGHTERS_CARD_03',
}
export const FIREFIGHTERS_CARD_04 = {
    ...FIREFIGHTERS_CARD,
    id: 'FIREFIGHTERS_CARD_04',
}
