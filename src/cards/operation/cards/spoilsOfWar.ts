import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SPOILS_OF_WAR: Card = {
    id: 'SPOILS_OF_WAR',
    key: 'SPOILS_OF_WAR',
    title: 'ALL IN',
    identity: CardIdentity.Utility,
    storeDescription: 'Card has no effect in any position.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    drainCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                invisibleStatuses: { spoilsOfWar: { modifier: 100 } },
                description:
                    '+100 supplies for each Combat Encounter completed this Operation. Drain card.',
                bark: 'The more we bleed, the more we gain.',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                invisibleStatuses: { spoilsOfWar: { modifier: 75 } },
                description:
                    '+50 supplies for each Combat Encounter completed this Operation. Drain card.',
                bark: 'The more we bleed, the more we gain.',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                invisibleStatuses: { spoilsOfWar: { modifier: 25 } },
                description:
                    '+25 supplies for each Combat Encounter completed this Operation. Drain card.',
                bark: 'The more we bleed, the more we gain.',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                invisibleStatuses: { spoilsOfWar: { modifier: -25 } },
                description:
                    '-25 supplies for each Combat Encounter completed this Operation. Drain card.',
                bark: 'The more we bleed, the more we gain.',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                invisibleStatuses: { spoilsOfWar: { modifier: -50 } },
                description:
                    '-50 supplies for each Combat Encounter completed this Operation. Drain card.',
                bark: 'The more we bleed, the more we gain.',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                invisibleStatuses: { spoilsOfWar: { modifier: -100 } },
                description:
                    '-100 supplies for each Combat Encounter completed this Operation. Drain card.',
                bark: 'The more we bleed, the more we gain.',
                infoText:
                    'Drained Operation cards are placed into a "Drained cards pile" after being played until the end of the Operation.',
            },
        },
    },
}
export const SPOILS_OF_WAR_02 = { ...SPOILS_OF_WAR, id: 'SPOILS_OF_WAR_02' }
export const SPOILS_OF_WAR_03 = { ...SPOILS_OF_WAR, id: 'SPOILS_OF_WAR_03' }
export const SPOILS_OF_WAR_04 = { ...SPOILS_OF_WAR, id: 'SPOILS_OF_WAR_04' }
