import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SLICE_AND_DICE_CARD: Card = {
    id: 'SLICE_AND_DICE_CARD',
    key: 'SLICE_AND_DICE_CARD',
    title: 'SLICE AND DICE',
    identity: CardIdentity.Utility,
    storeDescription: '+ BLEEDING',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { bleeding: { modifier: 3 } },
                description: '+3 enemy BLEEDING.',
                bark: 'Oh boy, that’s a lot of blood … my blood [+3 enemy BLEEDING].',
                infoText: 'While BLEEDING is active, enemy takes 20% more damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { bleeding: { modifier: 2 } },
                description: '+2 enemy BLEEDING.',
                bark: 'Oh boy, that’s a lot of blood … my blood [+2 enemy BLEEDING].',
                infoText: 'While BLEEDING is active, enemy takes 20% more damage for {x} rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { bleeding: { modifier: 1 } },
                description: '+1 enemy BLEEDING.',
                bark: 'Oh boy, that’s a lot of blood … my blood [+1 enemy BLEEDING].',
                infoText: 'While BLEEDING is active, enemy takes 20% more damage for {x} rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 0 } },
                description: '+0 BLEEDING.',
                infoText: 'While BLEEDING is active, take 20% more damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 1 } },
                description: '+1 BLEEDING',
                bark: 'Oh boy, that’s a lot of blood … my blood [+1 BLEEDING].',
                infoText: 'While BLEEDING is active, take 20% more damage for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 2 } },
                description: '+2 BLEEDING',
                bark: 'Oh boy, that’s a lot of blood … my blood [+2 BLEEDING].',
                infoText: 'While BLEEDING is active, take 20% more damage for {x} rounds.',
            },
        },
    },
}
export const SLICE_AND_DICE_CARD_02 = {
    ...SLICE_AND_DICE_CARD,
    id: 'SLICE_AND_DICE_CARD_02',
}
export const SLICE_AND_DICE_CARD_03 = {
    ...SLICE_AND_DICE_CARD,
    id: 'SLICE_AND_DICE_CARD_03',
}
export const SLICE_AND_DICE_CARD_04 = {
    ...SLICE_AND_DICE_CARD,
    id: 'SLICE_AND_DICE_CARD_04',
}
