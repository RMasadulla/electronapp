import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const PANIC_BUTTON_CARD: Card = Object.freeze({
    id: 'PANIC_BUTTON_CARD',
    key: 'PANIC_BUTTON_CARD',
    title: 'PANIC BUTTON',
    identity: CardIdentity.Attack,
    storeDescription: 'If SMOKED, you can deal damage, but your enemy cannot.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Three,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                invisibleStatuses: {
                    panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: 15 } },
                },
                description: 'If PANICKED, gain 15 SHIELD per round, for 3 rounds.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                invisibleStatuses: {
                    panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: 10 } },
                },
                description: 'If PANICKED, gain 10 SHIELD per round, for 3 rounds.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                invisibleStatuses: {
                    panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: 5 } },
                },
                description: 'If PANICKED, gain 5 SHIELD per round, for 3 rounds.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                invisibleStatuses: {
                    panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: 0 } },
                },
                description: 'If PANICKED, gain 0 SHIELD per round, for 3 rounds.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                invisibleStatuses: {
                    panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: -5 } },
                },
                description: 'If PANICKED, lose 5 SHIELD per round, for 3 rounds.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                invisibleStatuses: {
                    panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: -10 } },
                },
                description: 'If PANICKED, lose 10 SHIELD per round, for 3 rounds.',
                infoText: 'While PANICKED is active, deal and take 20% less damage for {x} rounds.',
            },
        },
    },
})
export const PANIC_BUTTON_CARD_02 = {
    ...PANIC_BUTTON_CARD,
    id: 'PANIC_BUTTON_CARD_02',
}
export const PANIC_BUTTON_CARD_03 = {
    ...PANIC_BUTTON_CARD,
    id: 'PANIC_BUTTON_CARD_03',
}
export const PANIC_BUTTON_CARD_04 = {
    ...PANIC_BUTTON_CARD,
    id: 'PANIC_BUTTON_CARD_04',
}
