import { Card, CardIdentity, EffectLevels, Tiers } from '@/types'

export const SWINDLE_CARD: Card = {
    id: 'SWINDLE_CARD',
    key: 'SWINDLE_CARD',
    title: 'SWINDLE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- SUPPLIES, +/- $.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: {
                    gainedSupplies: { modifier: 1000 },
                    money: { modifier: -2500 },
                },
                description: '+1000 SUPPLIES, -$2500.',
                bark: 'What a steal. No literally, it was theft. [+1000 SUPPLIES, -$2500]',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: {
                    gainedSupplies: { modifier: 500 },
                    money: { modifier: -1250 },
                },
                description: '+500 SUPPLIES, -$1250.',
                bark: 'What a steal. No literally, it was theft. [+500 SUPPLIES, -$1250]',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: {
                    gainedSupplies: { modifier: 250 },
                    money: { modifier: -625 },
                },
                description: '+250 SUPPLIES, -$625.',
                bark: 'What a steal. No literally, it was theft. [+250 SUPPLIES, -$625]',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                stats: {
                    gainedSupplies: { modifier: -250 },
                    money: { modifier: -625 },
                },
                description: '-250 SUPPLIES, -$625.',
                bark: 'Wait a second. I think they pulled a fast one on me! [-250 SUPPLIES, -$625]',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: {
                    gainedSupplies: { modifier: -500 },
                    money: { modifier: -1250 },
                },
                description: '-500 SUPPLIES, -$1250.',
                bark: 'Wait a second. I think they pulled a fast one on me! [-500 SUPPLIES, -$1250]',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: {
                    gainedSupplies: { modifier: -1000 },
                    money: { modifier: -2500 },
                },
                description: '-1000 SUPPLIES, -$2500.',
                bark: 'Wait a second. I think they pulled a fast one on me! [-1000 SUPPLIES, -$2500]',
            },
        },
    },
}
export const SWINDLE_CARD_02 = { ...SWINDLE_CARD, id: 'SWINDLE_CARD_02' }
export const SWINDLE_CARD_03 = { ...SWINDLE_CARD, id: 'SWINDLE_CARD_03' }
export const SWINDLE_CARD_04 = { ...SWINDLE_CARD, id: 'SWINDLE_CARD_04' }
