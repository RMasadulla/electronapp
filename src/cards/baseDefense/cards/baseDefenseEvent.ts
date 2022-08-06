import { Card, CardIdentity, EffectLevels, Tiers } from '@/types'

export const BASE_DEFENSE_EVENT_CARD: Card = {
    id: 'BASE_DEFENSE_EVENT_CARD',
    key: 'BASE_DEFENSE_EVENT_CARD',
    title: 'BASE DEFENSE EVENT',
    identity: CardIdentity.Event,
    storeDescription: 'Trigger a base defense event.',
    cost: { amount: 200, type: 'supplies' },
    triggerEvent: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: 'Trigger a positive base defense event.',
                bark: '',
                infoText: 'When you play an event card, an event will be randomly picked.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: 'Trigger a positive base defense event.',
                bark: '',
                infoText: 'When you play an event card, an event will be randomly picked.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: 'Trigger a positive base defense event.',
                bark: '',
                infoText: 'When you play an event card, an event will be randomly picked.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: 'Trigger a negative base defense event.',
                bark: '',
                infoText: 'When you play an event card, an event will be randomly picked.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                description: 'Trigger a negative base defense event.',
                bark: '',
                infoText: 'When you play an event card, an event will be randomly picked.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                description: 'Trigger a negative base defense event.',
                bark: '',
                infoText: 'When you play an event card, an event will be randomly picked.',
            },
        },
    },
}
export const BASE_DEFENSE_EVENT_CARD_02 = {
    ...BASE_DEFENSE_EVENT_CARD,
    id: 'BASE_DEFENSE_EVENT_CARD_02',
}
export const BASE_DEFENSE_EVENT_CARD_03 = {
    ...BASE_DEFENSE_EVENT_CARD,
    id: 'BASE_DEFENSE_EVENT_CARD_03',
}
export const BASE_DEFENSE_EVENT_CARD_04 = {
    ...BASE_DEFENSE_EVENT_CARD,
    id: 'BASE_DEFENSE_EVENT_CARD_04',
}
