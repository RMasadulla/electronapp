import { Card, CardIdentity, EffectLevels, Tiers } from '@/types'

export const OPERATION_EVENT_CARD: Card = {
    id: 'OPERATION_EVENT_CARD',
    key: 'OPERATION_EVENT_CARD',
    title: 'OPERATION EVENT',
    identity: CardIdentity.Event,
    storeDescription: 'Trigger an operation event.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    triggerEvent: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: 'Trigger an positive operation event.',
                bark: '',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: 'Trigger an positive operation event.',
                bark: '',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: 'Trigger an positive operation event.',
                bark: '',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: 'Trigger an negative operation event.',
                bark: '',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                description: 'Trigger an negative operation event.',
                bark: '',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                description: 'Trigger an negative operation event.',
                bark: '',
            },
        },
    },
}
export const OPERATION_EVENT_CARD_02 = {
    ...OPERATION_EVENT_CARD,
    id: 'OPERATION_EVENT_CARD_02',
}
export const OPERATION_EVENT_CARD_03 = {
    ...OPERATION_EVENT_CARD,
    id: 'OPERATION_EVENT_CARD_03',
}
export const OPERATION_EVENT_CARD_04 = {
    ...OPERATION_EVENT_CARD,
    id: 'OPERATION_EVENT_CARD_04',
}
