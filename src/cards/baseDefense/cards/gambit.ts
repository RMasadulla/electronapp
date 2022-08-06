import { EffectLevels, Card, CardIdentity, Tiers, Duration } from '@/types'

export const GAMBIT_CARD: Card = {
    id: 'GAMBIT_CARD',
    key: 'GAMBIT_CARD',
    title: 'FRESH BATCH',
    identity: CardIdentity.Utility,
    storeDescription: '+SURROUNDED, +BASE stats.',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: {
                    personnel: { modifier: 25, isPercentage: true },
                    morale: { modifier: 25, isPercentage: true },
                    fortifications: { modifier: 25, isPercentage: true },
                    antiAir: { modifier: 25, isPercentage: true },
                    antiGround: { modifier: 25, isPercentage: true },
                },
                statuses: { surrounded: { modifier: 3 } },
                description: '+3 SURROUNDED. +25% to all BASE stats except HP.',
                infoText: 'While SURROUNDED is active, take 50% more damage from base attackers.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: {
                    personnel: { modifier: 15, isPercentage: true },
                    morale: { modifier: 15, isPercentage: true },
                    fortifications: { modifier: 15, isPercentage: true },
                    antiAir: { modifier: 15, isPercentage: true },
                    antiGround: { modifier: 15, isPercentage: true },
                },
                statuses: { surrounded: { modifier: 2 } },
                description: '+2 SURROUNDED. +15% to all BASE stats except HP.',
                infoText: 'While SURROUNDED is active, take 50% more damage from base attackers.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: {
                    personnel: { modifier: 5, isPercentage: true },
                    morale: { modifier: 5, isPercentage: true },
                    fortifications: { modifier: 5, isPercentage: true },
                    antiAir: { modifier: 5, isPercentage: true },
                    antiGround: { modifier: 5, isPercentage: true },
                },
                statuses: { surrounded: { modifier: 1 } },
                description: '+1 SURROUNDED. +5% to all BASE stats except HP.',
                infoText: 'While SURROUNDED is active, take 50% more damage from base attackers.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                statuses: { surrounded: { modifier: 1 } },
                description: '+1 SURROUNDED.',
                infoText: 'While SURROUNDED is active, take 50% more damage from base attackers.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                statuses: { surrounded: { modifier: 2 } },
                description: '+2 SURROUNDED.',
                infoText: 'While SURROUNDED is active, take 50% more damage from base attackers.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                statuses: { surrounded: { modifier: 3 } },
                description: '+3 SURROUNDED.',
                infoText: 'While SURROUNDED is active, take 50% more damage from base attackers.',
            },
        },
    },
}
export const GAMBIT_CARD_02 = {
    ...GAMBIT_CARD,
    id: 'GAMBIT_CARD_02',
}
export const GAMBIT_CARD_03 = {
    ...GAMBIT_CARD,
    id: 'GAMBIT_CARD_03',
}
export const GAMBIT_CARD_04 = {
    ...GAMBIT_CARD,
    id: 'GAMBIT_CARD_04',
}
