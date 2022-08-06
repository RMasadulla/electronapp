import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const COMBAT_CARE_CARD: Card = {
    id: 'COMBAT_CARE_CARD',
    key: 'COMBAT_CARE_CARD',
    title: 'COMBAT CARE',
    identity: CardIdentity.Utility,
    storeDescription: '+ HP',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { hp: { modifier: 5 } },
                description: '+5 HP',
                bark: 'I love not bleeding all over the place. [+5 HP]',
                infoText: 'Increase HP to stay alive. When HP drops to 0, you die.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { hp: { modifier: 3 } },
                description: '+3 HP',
                bark: 'I love not bleeding all over the place. [+3 HP]',
                infoText: 'Increase HP to stay alive. When HP drops to 0, you die.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { hp: { modifier: 1 } },
                description: '+1 HP',
                bark: 'I love not bleeding all over the place. [+1 HP]',
                infoText: 'Increase HP to stay alive. When HP drops to 0, you die.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                description: '+0 HP',
                bark: 'Was that suppose to do something? Because it didn’t do anything. [+0 HP]',
                infoText: 'Increase HP to stay alive. When HP drops to 0, you die.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -2 } },
                description: '-2 HP',
                bark: 'Yeah okay. Now you’re just making things worse. [-2 HP]',
                infoText: 'Increase HP to stay alive. When HP drops to 0, you die.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { hp: { modifier: -4 } },
                description: '-4 HP',
                bark: 'Hey! I would like the bleeding to stop, not get worse! [-4 HP]',
                infoText: 'Increase HP to stay alive. When HP drops to 0, you die.',
            },
        },
    },
}
export const COMBAT_CARE_CARD_02 = { ...COMBAT_CARE_CARD, id: 'COMBAT_CARE_CARD_02' }
export const COMBAT_CARE_CARD_03 = { ...COMBAT_CARE_CARD, id: 'COMBAT_CARE_CARD_03' }
export const COMBAT_CARE_CARD_04 = { ...COMBAT_CARE_CARD, id: 'COMBAT_CARE_CARD_04' }
