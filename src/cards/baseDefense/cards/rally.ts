import { EffectLevels, Card, CardIdentity, Tiers, Duration } from '@/types'

export const RALLY_CARD: Card = {
    id: 'RALLY_CARD',
    key: 'RALLY_CARD',
    title: 'RALLY',
    identity: CardIdentity.Utility,
    storeDescription: 'Deactivate all negative active statuses / +OVERWHELMED',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                statuses: {
                    burning: { modifier: 0 },
                    badWeather: { modifier: 0 },
                    surrounded: { modifier: 0 },
                    overwhelmed: { modifier: 0 },
                },
                description: 'Deactivate all negative active statuses.',
                infoText:
                    'Negative active statuses includes BURNING, BAD WEATHER, SURROUNDED, and OVERWHELMED.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                statuses: {
                    burning: { modifier: 0 },
                    badWeather: { modifier: 0 },
                    surrounded: { modifier: 0 },
                    overwhelmed: { modifier: 0 },
                },
                description: 'Deactivate all negative active statuses.',
                infoText:
                    'Negative active statuses includes BURNING, BAD WEATHER, SURROUNDED, and OVERWHELMED.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                statuses: {
                    burning: { modifier: 0 },
                    badWeather: { modifier: 0 },
                    surrounded: { modifier: 0 },
                    overwhelmed: { modifier: 0 },
                },
                description: 'Deactivate all negative active statuses.',
                infoText:
                    'Negative active statuses includes BURNING, BAD WEATHER, SURROUNDED, and OVERWHELMED.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                statuses: { overwhelmed: { modifier: 1 } },
                description: '+1 OVERWHELMED.',
                infoText:
                    'While OVERWHELMED is active, base attackers do 50% more damage and base repairs are reduced by 50%.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                statuses: { overwhelmed: { modifier: 2 } },
                description: '+2 OVERWHELMED.',
                infoText:
                    'While OVERWHELMED is active, base attackers do 50% more damage and base repairs are reduced by 50%.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                statuses: { overwhelmed: { modifier: 3 } },
                description: '+3 OVERWHELMED.',
                infoText:
                    'While OVERWHELMED is active, base attackers do 50% more damage and base repairs are reduced by 50%.',
            },
        },
    },
}
export const RALLY_CARD_02 = {
    ...RALLY_CARD,
    id: 'RALLY_CARD_02',
}
export const RALLY_CARD_03 = {
    ...RALLY_CARD,
    id: 'RALLY_CARD_03',
}
export const RALLY_CARD_04 = {
    ...RALLY_CARD,
    id: 'RALLY_CARD_04',
}
