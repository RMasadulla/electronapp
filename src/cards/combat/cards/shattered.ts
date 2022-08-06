import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SHATTERED_CARD: Card = {
    id: 'SHATTERED_CARD',
    key: 'SHATTERED_CARD',
    title: 'SHATTERED',
    identity: CardIdentity.Utility,
    storeDescription: '- ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { armored: { modifier: -6 } },
                description: '-6 enemy ARMORED.',
                bark: 'AH! My armor has been breached! [-6 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { armored: { modifier: -4 } },
                description: '-4 enemy ARMORED.',
                bark: 'AH! My armor has been breached! [-4 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { armored: { modifier: -2 } },
                description: '-2 enemy ARMORED.',
                bark: 'AH! My armor has been breached! [-2 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { armored: { modifier: -2 } },
                description: '-2 ARMORED.',
                bark: 'AH! My armor has been breached! [-2 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { armored: { modifier: -4 } },
                description: '-4 ARMORED.',
                bark: 'AH! My armor has been breached! [-4 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { armored: { modifier: -6 } },
                description: '-6 ARMORED.',
                bark: 'AH! My armor has been breached! [-6 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
    },
}
export const SHATTERED_CARD_02 = { ...SHATTERED_CARD, id: 'SHATTERED_CARD_02' }
export const SHATTERED_CARD_03 = { ...SHATTERED_CARD, id: 'SHATTERED_CARD_03' }
export const SHATTERED_CARD_04 = { ...SHATTERED_CARD, id: 'SHATTERED_CARD_04' }
