import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const COMBAT_ARMOR_CARD: Card = {
    id: 'COMBAT_ARMOR_CARD',
    key: 'COMBAT_ARMOR_CARD',
    title: 'COMBAT ARMOR',
    identity: CardIdentity.Utility,
    storeDescription: '+ ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { armored: { modifier: 6 } },
                description: '+6 ARMORED.',
                bark: 'I like being harder to kill [+6 ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { armored: { modifier: 4 } },
                description: '+4 ARMORED.',
                bark: 'I like being harder to kill [+4 ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { armored: { modifier: 2 } },
                description: '+2 ARMORED.',
                bark: 'I like being harder to kill [+2 ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: '+0 ARMORED.',
                bark: 'I’m not sure this is gonna do anything [+0 ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { armored: { modifier: -2 } },
                description: '-2 ARMORED.',
                bark: 'I’m not sure this is gonna do anything [+0 ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { armored: { modifier: -4 } },
                description: '-4 ARMORED.',
                bark: 'I’m not sure this is gonna do anything [-4 ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
    },
}
export const COMBAT_ARMOR_CARD_02 = { ...COMBAT_ARMOR_CARD, id: 'COMBAT_ARMOR_CARD_02' }
export const COMBAT_ARMOR_CARD_03 = { ...COMBAT_ARMOR_CARD, id: 'COMBAT_ARMOR_CARD_03' }
export const COMBAT_ARMOR_CARD_04 = { ...COMBAT_ARMOR_CARD, id: 'COMBAT_ARMOR_CARD_04' }
