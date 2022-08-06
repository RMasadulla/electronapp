import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const ATOMIC_RAGE_CARD: Card = {
    id: 'ATOMIC_RAGE_CARD',
    key: 'ATOMIC_RAGE_CARD',
    title: 'ATOMIC RAGE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- ENRAGED.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Three,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                invisibleStatuses: { atomicRage: { modifier: 3 } },
                description:
                    'If ENRAGED, everytime you deal damage, deal +10 damage and take 5 damage, for 3 rounds.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                invisibleStatuses: { atomicRage: { modifier: 2 } },
                description:
                    'If ENRAGED, everytime you deal damage, deal +10 damage and take 5 damage, for 2 rounds.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                invisibleStatuses: { atomicRage: { modifier: 1 } },
                description:
                    'If ENRAGED, everytime you deal damage, deal +10 damage and take 5 damage, for 1 round.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                invisibleStatuses: { atomicRage: { modifier: 0 } },
                description:
                    'If ENRAGED, everytime you deal damage, deal +10 damage and take 5 damage, for 0 rounds.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                invisibleStatuses: { atomicRage: { modifier: 1 } },
                description:
                    'If enemy is ENRAGED, everytime enemy deals damage, they deal +10 damage and take 5 damage, for 1 round.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                invisibleStatuses: { atomicRage: { modifier: 2 } },
                description:
                    'If enemy is ENRAGED, everytime enemy deals damage, they deal +10 damage and take 5 damage, for 2 rounds.',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
    },
}
export const ATOMIC_RAGE_CARD_02 = {
    ...ATOMIC_RAGE_CARD,
    id: 'ATOMIC_RAGE_CARD_02',
}
export const ATOMIC_RAGE_CARD_03 = {
    ...ATOMIC_RAGE_CARD,
    id: 'ATOMIC_RAGE_CARD_03',
}
export const ATOMIC_RAGE_CARD_04 = {
    ...ATOMIC_RAGE_CARD,
    id: 'ATOMIC_RAGE_CARD_04',
}
