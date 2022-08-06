import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const ENHANCED_SYSTEMS_CARD: Card = {
    id: 'ENHANCED_SYSTEMS_CARD',
    key: 'ENHANCED_SYSTEMS_CARD',
    title: 'ENHANCED SYSTEMS',
    identity: CardIdentity.Utility,
    storeDescription: '+/- ANTI-AIR',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: {
                    antiAir: { modifier: 7 },
                },
                description: '+7 ANTI-AIR.',
                bark: 'Systems enhanced [+7 ANTI-AIR].',
                infoText:
                    'When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: {
                    antiAir: { modifier: 5 },
                },
                description: '+5 ANTI-AIR.',
                bark: 'Systems enhanced [+5 ANTI-AIR].',
                infoText:
                    'When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: {
                    antiAir: { modifier: 3 },
                },
                description: '+3 ANTI-AIR.',
                bark: 'Systems enhanced [+3 ANTI-AIR].',
                infoText:
                    'When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                description: '+0 ANTI-AIR.',
                bark: 'Systems degraded [+0 ANTI-AIR].',
                infoText:
                    'When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                stats: {
                    antiAir: { modifier: -1 },
                },
                description: '-1 ANTI-AIR.',
                bark: 'Systems degraded [-1 ANTI-AIR].',
                infoText:
                    'When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                stats: {
                    antiAir: { modifier: -2 },
                },
                description: '-2 ANTI-AIR.',
                bark: 'Systems degraded [-2 ANTI-AIR].',
                infoText:
                    'When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value.',
            },
        },
    },
}
export const ENHANCED_SYSTEMS_CARD_02 = {
    ...ENHANCED_SYSTEMS_CARD,
    id: 'ENHANCED_SYSTEMS_CARD_02',
}
export const ENHANCED_SYSTEMS_CARD_03 = {
    ...ENHANCED_SYSTEMS_CARD,
    id: 'ENHANCED_SYSTEMS_CARD_03',
}
export const ENHANCED_SYSTEMS_CARD_04 = {
    ...ENHANCED_SYSTEMS_CARD,
    id: 'ENHANCED_SYSTEMS_CARD_04',
}
