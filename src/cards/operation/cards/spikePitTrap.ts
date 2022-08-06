import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SPIKE_PIT_TRAP: Card = {
    id: 'SPIKE_PIT_TRAP',
    key: 'SPIKE_PIT_TRAP',
    title: 'SPIKE PIT TRAP',
    identity: CardIdentity.Encounter,
    storeDescription: 'Lose money, supplies, and/or HP.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { supplies: { modifier: -150 } },
                description: 'Lose 150 supplies.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { supplies: { modifier: -250 } },
                description: 'Lose 250 supplies.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { supplies: { modifier: -350 } },
                description: 'Lose 350 supplies.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -2 } },
                statuses: { mutilated: { modifier: 2 } },
                description: '-2 HP. +2 MUTILATED.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -4 } },
                statuses: { mutilated: { modifier: 4 } },
                description: '-4 HP. +4 MUTILATED.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -6 } },
                statuses: { mutilated: { modifier: 6 } },
                description: '-6 HP. +6 MUTILATED.',
            },
        },
    },
}
export const SPIKE_PIT_TRAP_02 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_02',
}
export const SPIKE_PIT_TRAP_03 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_03',
}
export const SPIKE_PIT_TRAP_04 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_04',
}
export const SPIKE_PIT_TRAP_05 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_05',
}
export const SPIKE_PIT_TRAP_06 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_06',
}
export const SPIKE_PIT_TRAP_07 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_07',
}
export const SPIKE_PIT_TRAP_08 = {
    ...SPIKE_PIT_TRAP,
    id: 'SPIKE_PIT_TRAP_08',
}
