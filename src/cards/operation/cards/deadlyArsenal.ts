import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const DEADLY_ARSENAL_CARD: Card = {
    id: 'DEADLY_ARSENAL_CARD',
    key: 'DEADLY_ARSENAL_CARD',
    title: 'DEADLY ARSENAL',
    identity: CardIdentity.Utility,
    storeDescription: 'Deal damage',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { killingMachine: { modifier: 3 } },
                description: '+3 KILLING MACHINE.',
                bark: 'I AM UNSTOPPABLE! [+3 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { killingMachine: { modifier: 2 } },
                description: '+2 KILLING MACHINE.',
                bark: 'I AM UNSTOPPABLE! [+2 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { killingMachine: { modifier: 1 } },
                description: '+1 KILLING MACHINE.',
                bark: 'I AM UNSTOPPABLE! [+1 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { killingMachine: { modifier: -1 } },
                description: '-1 KILLING MACHINE.',
                bark: 'Okay so it turns out I am stoppable. [-1 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { killingMachine: { modifier: -2 } },
                description: '-2 KILLING MACHINE.',
                bark: 'Okay so it turns out I am stoppable. [-2 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { killingMachine: { modifier: -3 } },
                description: '-3 KILLING MACHINE.',
                bark: 'Okay so it turns out I am stoppable. [-3 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
        },
    },
}
export const DEADLY_ARSENAL_CARD_02 = {
    ...DEADLY_ARSENAL_CARD,
    id: 'DEADLY_ARSENAL_CARD_02',
}
export const DEADLY_ARSENAL_CARD_03 = {
    ...DEADLY_ARSENAL_CARD,
    id: 'DEADLY_ARSENAL_CARD_03',
}
export const DEADLY_ARSENAL_CARD_04 = {
    ...DEADLY_ARSENAL_CARD,
    id: 'DEADLY_ARSENAL_CARD_04',
}
