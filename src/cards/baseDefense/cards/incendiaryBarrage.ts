import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const INCENDIARY_BARRAGE_CARD: Card = {
    id: 'INCENDIARY_BARRAGE_CARD',
    key: 'INCENDIARY_BARRAGE_CARD',
    title: 'INCENDIARY BARRAGE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- PROTECTED',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                statuses: { protected: { modifier: 3 } },
                description: '+3 PROTECTED.',
                bark: 'Drive them back! [+3 PROTECTED]',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                statuses: { protected: { modifier: 2 } },
                description: '+2 PROTECTED.',
                bark: 'Drive them back! [+2 PROTECTED]',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                statuses: { protected: { modifier: 1 } },
                description: '+1 PROTECTED.',
                bark: 'Drive them back! [+1 PROTECTED]',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                statuses: { protected: { modifier: 0 } },
                description: '+0 PROTECTED.',
                bark: 'They’re firing at us! [+0 PROTECTED]',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                statuses: { protected: { modifier: -1 } },
                description: '-1 PROTECTED.',
                bark: 'They’re firing at us! [-1 PROTECTED]',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                statuses: { protected: { modifier: -2 } },
                description: '-2 PROTECTED.',
                bark: 'They’re firing at us! [-2 PROTECTED]',
                infoText: 'While PROTECTED is active, take 50% less damage from base attackers.',
            },
        },
    },
}
export const INCENDIARY_BARRAGE_CARD_02 = {
    ...INCENDIARY_BARRAGE_CARD,
    id: 'INCENDIARY_BARRAGE_CARD_02',
}
export const INCENDIARY_BARRAGE_CARD_03 = {
    ...INCENDIARY_BARRAGE_CARD,
    id: 'INCENDIARY_BARRAGE_CARD_03',
}
export const INCENDIARY_BARRAGE_CARD_04 = {
    ...INCENDIARY_BARRAGE_CARD,
    id: 'INCENDIARY_BARRAGE_CARD_04',
}
