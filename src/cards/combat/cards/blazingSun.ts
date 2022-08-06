import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const BLAZING_SUN_CARD: Card = {
    id: 'BLAZING_SUN_CARD',
    key: 'BLAZING_SUN_CARD',
    title: 'BLAZING_SUN GRENADE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- OVERHEATED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { overheated: { modifier: 3 } },
                description: '+3 enemy OVERHEATED.',
                infoText:
                    'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { overheated: { modifier: 2 } },
                description: '+2 enemy OVERHEATED.',
                infoText:
                    'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { overheated: { modifier: 1 } },
                description: '+1 enemy OVERHEATED.',
                infoText:
                    'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { overheated: { modifier: +0 } },
                description: '+0 OVERHEATED.',
                infoText:
                    'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { overheated: { modifier: 1 } },
                description: '+1 OVERHEATED.',
                infoText:
                    'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { overheated: { modifier: 2 } },
                description: '+2 OVERHEATED',
                infoText:
                    'While OVERHEATED and ARMORED are both active, you cannot attack for {x} rounds.',
            },
        },
    },
}
export const BLAZING_SUN_CARD_02 = {
    ...BLAZING_SUN_CARD,
    id: 'BLAZING_SUN_CARD_02',
}
export const BLAZING_SUN_CARD_03 = {
    ...BLAZING_SUN_CARD,
    id: 'BLAZING_SUN_CARD_03',
}
export const BLAZING_SUN_CARD_04 = {
    ...BLAZING_SUN_CARD,
    id: 'BLAZING_SUN_CARD_04',
}
