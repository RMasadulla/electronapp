import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const THERMAL_SIGHTS_CARD: Card = Object.freeze({
    id: 'THERMAL_SIGHTS_CARD',
    key: 'THERMAL_SIGHTS_CARD',
    title: 'THERMAL SIGHTS',
    identity: CardIdentity.Attack,
    storeDescription: 'If SMOKED, you can deal damage, but your enemy cannot.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Three,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { thermalSights: { modifier: 3 } },
                description: '+3 THERMAL SIGHTS',
                infoText:
                    'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { thermalSights: { modifier: 2 } },
                description: '+2 THERMAL SIGHTS',
                infoText:
                    'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { thermalSights: { modifier: 1 } },
                description: '+1 THERMAL SIGHTS',
                infoText:
                    'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { thermalSights: { modifier: 0 } },
                description: '+0 THERMAL SIGHTS',
                infoText:
                    'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { thermalSights: { modifier: -1 } },
                description: '-1 THERMAL SIGHTS',
                infoText:
                    'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { thermalSights: { modifier: -2 } },
                description: '-2 THERMAL SIGHTS',
                infoText:
                    'While THERMAL SIGHTS and SMOKED is active, you can deal damage, but your enemy cannot for {x} rounds.',
            },
        },
    },
})
export const THERMAL_SIGHTS_CARD_02 = {
    ...THERMAL_SIGHTS_CARD,
    id: 'THERMAL_SIGHTS_CARD_02',
}
export const THERMAL_SIGHTS_CARD_03 = {
    ...THERMAL_SIGHTS_CARD,
    id: 'THERMAL_SIGHTS_CARD_03',
}
export const THERMAL_SIGHTS_CARD_04 = {
    ...THERMAL_SIGHTS_CARD,
    id: 'THERMAL_SIGHTS_CARD_04',
}
