import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const LAND_MINE: Card = {
    id: 'LAND_MINE',
    key: 'LAND_MINE',
    title: 'LAND MINE',
    identity: CardIdentity.Encounter,
    storeDescription: 'Lose money, supplies, and/or HP.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { armored: { modifier: -2 } },
                description: '-2 ARMORED.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { armored: { modifier: -4 } },
                description: '-4 ARMORED.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { armored: { modifier: -6 } },
                description: '-6 ARMORED.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -4 } },
                statuses: { armored: { modifier: -2 } },
                description: 'Take 4 damage. -2 ARMORED.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -6 } },
                statuses: { armored: { modifier: -4 } },
                description: 'Take 6 damage. -4 ARMORED.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -8 } },
                statuses: { armored: { modifier: -6 } },
                description: 'Take 8 damage. -6 ARMORED.',
            },
        },
    },
}
export const LAND_MINE_02 = {
    ...LAND_MINE,
    id: 'LAND_MINE_02',
}
export const LAND_MINE_03 = {
    ...LAND_MINE,
    id: 'LAND_MINE_03',
}
export const LAND_MINE_04 = {
    ...LAND_MINE,
    id: 'LAND_MINE_04',
}
export const LAND_MINE_05 = {
    ...LAND_MINE,
    id: 'LAND_MINE_05',
}
export const LAND_MINE_06 = {
    ...LAND_MINE,
    id: 'LAND_MINE_06',
}
export const LAND_MINE_07 = {
    ...LAND_MINE,
    id: 'LAND_MINE_07',
}
export const LAND_MINE_08 = {
    ...LAND_MINE,
    id: 'LAND_MINE_08',
}
