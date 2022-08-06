import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const FEAST_CARD: Card = {
    id: 'FEAST_CARD',
    key: 'FEAST_CARD',
    title: 'FEAST',
    identity: CardIdentity.Utility,
    storeDescription: '+/- MORALE',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: {
                    morale: { modifier: 7 },
                },
                description: '+7 MORALE.',
                bark: 'Good food, good spirits [+7 MORALE].',
                infoText:
                    'MORALE is added to PERSONNEL when determining how much your base is repaired each round.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: {
                    morale: { modifier: 5 },
                },
                description: '+5 MORALE.',
                bark: 'Good food, good spirits [+5 MORALE].',
                infoText:
                    'MORALE is added to PERSONNEL when determining how much your base is repaired each round.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: {
                    morale: { modifier: 3 },
                },
                description: '+3 MORALE.',
                bark: 'Good food, good spirits [+3 MORALE].',
                infoText:
                    'MORALE is added to PERSONNEL when determining how much your base is repaired each round.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                stats: {
                    morale: { modifier: 0 },
                },
                description: '+0 MORALE.',
                bark: 'Blagh. Food poisoning [+0 MORALE].',
                infoText:
                    'MORALE is added to PERSONNEL when determining how much your base is repaired each round.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                stats: {
                    morale: { modifier: -1 },
                },
                description: '-1 MORALE.',
                bark: 'Blagh. Food poisoning [-1 MORALE].',
                infoText:
                    'MORALE is added to PERSONNEL when determining how much your base is repaired each round.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                stats: {
                    morale: { modifier: -2 },
                },
                description: '-2 MORALE.',
                bark: 'Blagh. Food poisoning [-2 MORALE].',
                infoText:
                    'MORALE is added to PERSONNEL when determining how much your base is repaired each round.',
            },
        },
    },
}
export const FEAST_CARD_02 = {
    ...FEAST_CARD,
    id: 'FEAST_CARD_02',
}
export const FEAST_CARD_03 = {
    ...FEAST_CARD,
    id: 'FEAST_CARD_03',
}
export const FEAST_CARD_04 = {
    ...FEAST_CARD,
    id: 'FEAST_CARD_04',
}
