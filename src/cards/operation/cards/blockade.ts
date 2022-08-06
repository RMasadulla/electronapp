import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const BLOCKADE_CARD: Card = {
    id: 'BLOCKADE_CARD',
    key: 'BLOCKADE_CARD',
    title: 'BLOCKADE',
    identity: CardIdentity.Utility,
    storeDescription: 'Card has no effect in any position.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: 'Card has no effect in any position.',
                bark: 'I just love it when things get in my way. I LOVE IT. [no effect]',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: 'Card has no effect in any position.',
                bark: 'I just love it when things get in my way. I LOVE IT. [no effect]',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: 'Card has no effect in any position.',
                bark: 'I just love it when things get in my way. I LOVE IT. [no effect]',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: 'Card has no effect in any position.',
                bark: 'I just love it when things get in my way. I LOVE IT. [no effect]',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                description: 'Card has no effect in any position.',
                bark: 'I just love it when things get in my way. I LOVE IT. [no effect]',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                description: 'Card has no effect in any position.',
                bark: 'I just love it when things get in my way. I LOVE IT. [no effect]',
            },
        },
    },
}
export const BLOCKADE_CARD_02 = { ...BLOCKADE_CARD, id: 'BLOCKADE_CARD_02' }
export const BLOCKADE_CARD_03 = { ...BLOCKADE_CARD, id: 'BLOCKADE_CARD_03' }
export const BLOCKADE_CARD_04 = { ...BLOCKADE_CARD, id: 'BLOCKADE_CARD_04' }
