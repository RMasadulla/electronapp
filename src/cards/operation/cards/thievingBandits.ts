import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const THIEVING_BANDITS: Card = {
    id: 'THIEVING_BANDITS',
    key: 'THIEVING_BANDITS',
    title: 'THIEVING BANDITS',
    identity: CardIdentity.Encounter,
    storeDescription: 'Lose money, supplies, and/or HP.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { hp: { modifier: -2 } },
                description: 'Take 2 damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { hp: { modifier: -4 } },
                description: 'Take 4 damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { hp: { modifier: -6 } },
                description: 'Take 6 damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                stats: { money: { modifier: -100 } },
                description: 'Lose $100.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { money: { modifier: -150 } },
                description: 'Lose $150.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { money: { modifier: -250 } },
                description: 'Lose $250.',
            },
        },
    },
}
export const THIEVING_BANDITS_02 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_02',
}
export const THIEVING_BANDITS_03 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_03',
}
export const THIEVING_BANDITS_04 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_04',
}
export const THIEVING_BANDITS_05 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_05',
}
export const THIEVING_BANDITS_06 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_06',
}
export const THIEVING_BANDITS_07 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_07',
}
export const THIEVING_BANDITS_08 = {
    ...THIEVING_BANDITS,
    id: 'THIEVING_BANDITS_08',
}
