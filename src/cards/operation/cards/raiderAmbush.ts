import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const RAIDER_AMBUSH: Card = {
    id: 'RAIDER_AMBUSH',
    key: 'RAIDER_AMBUSH',
    title: 'RAIDER AMBUSH',
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
                stats: { supplies: { modifier: -200 } },
                description: 'Lose 200 supplies.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { supplies: { modifier: -350 } },
                description: 'Lose 350 supplies.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { supplies: { modifier: -500 } },
                description: 'Lose 500 supplies.',
            },
        },
    },
}
export const RAIDER_AMBUSH_02 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_02',
}
export const RAIDER_AMBUSH_03 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_03',
}
export const RAIDER_AMBUSH_04 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_04',
}
export const RAIDER_AMBUSH_05 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_05',
}
export const RAIDER_AMBUSH_06 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_06',
}
export const RAIDER_AMBUSH_07 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_07',
}
export const RAIDER_AMBUSH_08 = {
    ...RAIDER_AMBUSH,
    id: 'RAIDER_AMBUSH_08',
}
