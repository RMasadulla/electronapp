import { EffectLevels, Card, CardIdentity, Tiers, Duration } from '@/types'

export const SEVERE_STORM_CARD: Card = {
    id: 'SEVERE_STORM_CARD',
    key: 'SEVERE_STORM_CARD',
    title: 'SEVERE STORM',
    identity: CardIdentity.Utility,
    storeDescription: '+/- PERSONNEL',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                statuses: { protected: { modifier: 3 } },
                description: '+3 PROTECTED.',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                statuses: { protected: { modifier: 2 } },
                description: '+2 PROTECTED.',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                statuses: { protected: { modifier: 1 } },
                description: '+1 PROTECTED.',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                statuses: { badWeather: { modifier: 1 } },
                description: '+1 BAD WEATHER.',
                infoText:
                    'While BAD WEATHER is active, base attackers do 50% less damage and base repairs are reduced by 50%.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                statuses: { badWeather: { modifier: 2 } },
                description: '+2 BAD WEATHER.',
                infoText:
                    'While BAD WEATHER is active, base attackers do 50% less damage and base repairs are reduced by 50%.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                statuses: { badWeather: { modifier: 3 } },
                description: '+3 BAD WEATHER.',
                infoText:
                    'While BAD WEATHER is active, base attackers do 50% less damage and base repairs are reduced by 50%.',
            },
        },
    },
}
export const SEVERE_STORM_CARD_02 = {
    ...SEVERE_STORM_CARD,
    id: 'SEVERE_STORM_CARD_02',
}
export const SEVERE_STORM_CARD_03 = {
    ...SEVERE_STORM_CARD,
    id: 'SEVERE_STORM_CARD_03',
}
export const SEVERE_STORM_CARD_04 = {
    ...SEVERE_STORM_CARD,
    id: 'SEVERE_STORM_CARD_04',
}
