import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const MUCH_NEEDED_REPAIRS_CARD: Card = {
    id: 'MUCH_NEEDED_REPAIRS_CARD',
    key: 'MUCH_NEEDED_REPAIRS_CARD',
    title: 'MUCH-NEEDED REPAIRS',
    identity: CardIdentity.Utility,
    storeDescription: '+/- FORTIFICATIONS',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                stats: { fortifications: { modifier: 7 } },
                description: '+7 FORTIFICATIONS.',
                bark: 'Finally fixed that hole in the wall [+7 FORTIFICATIONS].',
                infoText:
                    'When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                stats: { fortifications: { modifier: 5 } },
                description: '+5 FORTIFICATIONS.',
                bark: 'Finally fixed that hole in the wall [+5 FORTIFICATIONS].',
                infoText:
                    'When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                stats: { fortifications: { modifier: 3 } },
                description: '+3 FORTIFICATIONS.',
                bark: 'Finally fixed that hole in the wall [+3 FORTIFICATIONS].',
                infoText:
                    'When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                stats: { fortifications: { modifier: 0 } },
                description: '+0 FORTIFICATIONS.',
                bark: 'It’s even worse now! Who hired these guys? [+0 FORTIFICATIONS].',
                infoText:
                    'When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                stats: { fortifications: { modifier: -1 } },
                description: '-1 FORTIFICATIONS.',
                bark: 'It’s even worse now! Who hired these guys? [-1 FORTIFICATIONS].',
                infoText:
                    'When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                stats: { fortifications: { modifier: -2 } },
                description: '-2 FORTIFICATIONS.',
                bark: 'It’s even worse now! Who hired these guys? [-2 FORTIFICATIONS].',
                infoText:
                    'When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value.',
            },
        },
    },
}
export const MUCH_NEEDED_REPAIRS_CARD_02 = {
    ...MUCH_NEEDED_REPAIRS_CARD,
    id: 'MUCH_NEEDED_REPAIRS_CARD_02',
}
export const MUCH_NEEDED_REPAIRS_CARD_03 = {
    ...MUCH_NEEDED_REPAIRS_CARD,
    id: 'MUCH_NEEDED_REPAIRS_CARD_03',
}
export const MUCH_NEEDED_REPAIRS_CARD_04 = {
    ...MUCH_NEEDED_REPAIRS_CARD,
    id: 'MUCH_NEEDED_REPAIRS_CARD_04',
}
