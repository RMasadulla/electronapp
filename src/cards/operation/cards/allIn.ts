import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const ALL_IN: Card = {
    id: 'ALL_IN',
    key: 'ALL_IN',
    title: 'ALL IN',
    identity: CardIdentity.Utility,
    storeDescription: 'Card has no effect in any position.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    drainCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                invisibleStatuses: { allIn: { modifier: 1 } },
                description:
                    'If current Operation is ended with less than 50% HP, +25% supplies gained. Drain card.',
                bark: 'Go big or go home! [+25% gained supplies]',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                invisibleStatuses: { allIn: { modifier: 1 } },
                description:
                    'If current Operation is ended with less than 50% HP, +25% supplies gained. Drain card.',
                bark: 'Go big or go home! [+25% gained supplies]',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                invisibleStatuses: { allIn: { modifier: 1 } },
                description:
                    'If current Operation is ended with less than 50% HP, +25% supplies gained. Drain card.',
                bark: 'Go big or go home! [+25% gained supplies]',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                invisibleStatuses: { allInNegative: { modifier: 1 } },
                description:
                    'If current Operation is ended with less than 50% HP, -25% supplies gained. Drain card.',
                bark: 'Go big or … go home? [-25% gained supplies]',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                invisibleStatuses: { allInNegative: { modifier: 1 } },
                description:
                    'If current Operation is ended with less than 50% HP, -25% supplies gained. Drain card.',
                bark: 'Go big or … go home? [-25% gained supplies]',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                invisibleStatuses: { allInNegative: { modifier: 1 } },
                description:
                    'If current Operation is ended with less than 50% HP, -25% supplies gained. Drain card.',
                bark: 'Go big or … go home? [-25% gained supplies]',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
    },
}
export const ALL_IN_02 = { ...ALL_IN, id: 'ALL_IN_02' }
export const ALL_IN_03 = { ...ALL_IN, id: 'ALL_IN_03' }
export const ALL_IN_04 = { ...ALL_IN, id: 'ALL_IN_04' }
