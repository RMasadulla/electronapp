import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const CHARGE_SHIELD_CARD: Card = {
    id: 'CHARGE_SHIELD_CARD',
    key: 'CHARGE_SHIELD_CARD',
    title: 'CHARGE SHIELD',
    identity: CardIdentity.Defense,
    storeDescription: '+ SHIELD',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { shield: { modifier: 16 } },
                description: '+16 SHIELD',
                bark: 'SHIELD charging… [+16 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { shield: { modifier: 8 } },
                description: '+8 SHIELD',
                bark: 'SHIELD charging… [+8 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { shield: { modifier: 4 } },
                description: '+4 SHIELD',
                bark: 'SHIELD charging… [+4 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: '+0 SHIELD.',
                bark: 'Uhhh, something must be broken… [+0 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { shield: { modifier: -4 } },
                description: '-4 SHIELD.',
                bark: 'Uhhh, something must be broken… [-4 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { shield: { modifier: -8 } },
                description: '-8 SHIELD.',
                bark: 'Uhhh, something must be broken… [-8 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
    },
}
export const CHARGE_SHIELD_CARD_02 = {
    ...CHARGE_SHIELD_CARD,
    id: 'CHARGE_SHIELD_CARD_02',
}
export const CHARGE_SHIELD_CARD_03 = {
    ...CHARGE_SHIELD_CARD,
    id: 'CHARGE_SHIELD_CARD_03',
}
export const CHARGE_SHIELD_CARD_04 = {
    ...CHARGE_SHIELD_CARD,
    id: 'CHARGE_SHIELD_CARD_04',
}
