import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const ENTRENCH_CARD: Card = {
    id: 'ENTRENCH_CARD',
    key: 'ENTRENCH_CARD',
    title: 'ENTRENCH',
    identity: CardIdentity.Utility,
    storeDescription: '+/- ANTI-GROUND',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: {
                    antiGround: { modifier: 7 },
                },
                description: '+7 ANTI-GROUND.',
                bark: 'Bunker down [+7 ANTI-GROUND].',
                infoText:
                    'When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: {
                    antiGround: { modifier: 5 },
                },
                description: '+5 ANTI-GROUND.',
                bark: 'Bunker down [+5 ANTI-GROUND].',
                infoText:
                    'When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: {
                    antiGround: { modifier: 3 },
                },
                description: '+3 ANTI-GROUND.',
                bark: 'Bunker down [+3 ANTI-GROUND].',
                infoText:
                    'When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                stats: {
                    antiGround: { modifier: 0 },
                },
                description: '+0 ANTI-GROUND.',
                bark: 'Heavy losses [+0 ANTI-GROUND].',
                infoText:
                    'When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                stats: {
                    antiGround: { modifier: -1 },
                },
                description: '-1 ANTI-GROUND.',
                bark: 'Heavy losses [-1 ANTI-GROUND].',
                infoText:
                    'When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                stats: {
                    antiGround: { modifier: -2 },
                },
                description: '-2 ANTI-GROUND.',
                bark: 'Heavy losses [-2 ANTI-GROUND].',
                infoText:
                    'When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value.',
            },
        },
    },
}
export const ENTRENCH_CARD_02 = {
    ...ENTRENCH_CARD,
    id: 'ENTRENCH_CARD_02',
}
export const ENTRENCH_CARD_03 = {
    ...ENTRENCH_CARD,
    id: 'ENTRENCH_CARD_03',
}
export const ENTRENCH_CARD_04 = {
    ...ENTRENCH_CARD,
    id: 'ENTRENCH_CARD_04',
}
