import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const DISPLAY_OF_FORCE_CARD: Card = {
    id: 'DISPLAY_OF_FORCE_CARD',
    key: 'DISPLAY_OF_FORCE_CARD',
    title: 'DISPLAY OF FORCE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- PANICKED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { panicked: { modifier: 3 } },
                description: '+3 enemy PANICKED.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { panicked: { modifier: 2 } },
                description: '+2 enemy PANICKED.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { panicked: { modifier: 1 } },
                description: '+1 enemy PANICKED.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { panicked: { modifier: 0 } },
                description: '+0 PANICKED.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { panicked: { modifier: 1 } },
                description: '+1 PANICKED.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { panicked: { modifier: 2 } },
                description: '+2 PANICKED',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
    },
}
export const DISPLAY_OF_FORCE_CARD_02 = {
    ...DISPLAY_OF_FORCE_CARD,
    id: 'DISPLAY_OF_FORCE_CARD_02',
}
export const DISPLAY_OF_FORCE_CARD_03 = {
    ...DISPLAY_OF_FORCE_CARD,
    id: 'DISPLAY_OF_FORCE_CARD_03',
}
export const DISPLAY_OF_FORCE_CARD_04 = {
    ...DISPLAY_OF_FORCE_CARD,
    id: 'DISPLAY_OF_FORCE_CARD_04',
}
