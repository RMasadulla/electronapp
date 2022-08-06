import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const FLASHBANG_CARD: Card = {
    id: 'FLASHBANG_CARD',
    key: 'FLASHBANG_CARD',
    title: 'FLASHBANG GRENADE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- DAZED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { dazed: { modifier: 3 } },
                description: '+3 enemy DAZED.',
                bark: 'ARGH! I can’t see! I can’t hear anything! [+3 enemy DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { dazed: { modifier: 2 } },
                description: '+2 enemy DAZED.',
                bark: 'ARGH! I can’t see! I can’t hear anything! [+2 enemy DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { dazed: { modifier: 1 } },
                description: '+1 enemy DAZED.',
                bark: 'ARGH! I can’t see! I can’t hear anything! [+1 enemy DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { dazed: { modifier: 0 } },
                description: '+0 DAZED.',
                bark: 'ARGH! I can’t see! I can’t hear anything! [+1 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { dazed: { modifier: 1 } },
                description: '+1 DAZED.',
                bark: 'ARGH! I can’t see! I can’t hear anything! [+1 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { dazed: { modifier: 2 } },
                description: '+2 DAZED',
                bark: 'ARGH! I can’t see! I can’t hear anything! [+2 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
    },
}
export const FLASHBANG_CARD_02 = {
    ...FLASHBANG_CARD,
    id: 'FLASHBANG_CARD_02',
}
export const FLASHBANG_CARD_03 = {
    ...FLASHBANG_CARD,
    id: 'FLASHBANG_CARD_03',
}
export const FLASHBANG_CARD_04 = {
    ...FLASHBANG_CARD,
    id: 'FLASHBANG_CARD_04',
}
