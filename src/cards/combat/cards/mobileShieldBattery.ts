import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const MOBILE_SHIELD_BATTERY_CARD: Card = {
    id: 'MOBILE_SHIELD_BATTERY_CARD',
    key: 'MOBILE_SHIELD_BATTERY_CARD',
    title: 'MOBILE SHIELD BATTERY',
    identity: CardIdentity.Support,
    storeDescription: '+ SHIELD for each support point you have.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { shield: { modifier: 8, support: true } },
                description: '+8 SHIELD for each **support point**.',
                bark: 'Shields up! Thanks for the support.',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { shield: { modifier: 4, support: true } },
                description: '+4 SHIELD for each **support point**.',
                bark: 'Shields up! Thanks for the support.',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { shield: { modifier: 2, support: true } },
                description: '+2 SHIELD for each **support point**.',
                bark: 'Shields up! Thanks for the support.',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: '+0 SHIELD.',
                bark: 'Shields up? Thanks a lot for the support.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                description: '+0 SHIELD.',
                bark: 'Shields up? Thanks a lot for the support.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                description: '+0 SHIELD.',
                bark: 'Shields up? Thanks a lot for the support.',
            },
        },
    },
}
export const MOBILE_SHIELD_BATTERY_CARD_02 = {
    ...MOBILE_SHIELD_BATTERY_CARD,
    id: 'MOBILE_SHIELD_BATTERY_CARD_02',
}
export const MOBILE_SHIELD_BATTERY_CARD_03 = {
    ...MOBILE_SHIELD_BATTERY_CARD,
    id: 'MOBILE_SHIELD_BATTERY_CARD_03',
}
export const MOBILE_SHIELD_BATTERY_CARD_04 = {
    ...MOBILE_SHIELD_BATTERY_CARD,
    id: 'MOBILE_SHIELD_BATTERY_CARD_04',
}
