import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const DIG_IN_CARD: Card = {
    id: 'DIG_IN_CARD',
    key: 'DIG_IN_CARD',
    title: 'DIG IN',
    identity: CardIdentity.Utility,
    storeDescription: '+/- IN COVER',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { inCover: { modifier: 3 } },
                description: '+3 IN COVER.',
                bark: 'This fox hole sure is sooo cozy. [+3 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { inCover: { modifier: 2 } },
                description: '+2 IN COVER.',
                bark: 'This fox hole sure is sooo cozy. [+2 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { inCover: { modifier: 1 } },
                description: '+1 IN COVER',
                bark: 'This fox hole sure is sooo cozy. [+1 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: +0 } },
                description: '+0 IN COVER',
                bark: 'What even is a fox hole? And what is a fox? WHAT IS A FOX? [+0 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: -1 } },
                description: '-1 IN COVER',
                bark: 'What even is a fox hole? And what is a fox? WHAT IS A FOX? [-1 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: -2 } },
                description: '-2 IN COVER',
                bark: 'What even is a fox hole? And what is a fox? WHAT IS A FOX? [-2 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
    },
}
export const DIG_IN_CARD_02 = { ...DIG_IN_CARD, id: 'DIG_IN_CARD_02' }
export const DIG_IN_CARD_03 = { ...DIG_IN_CARD, id: 'DIG_IN_CARD_03' }
export const DIG_IN_CARD_04 = { ...DIG_IN_CARD, id: 'DIG_IN_CARD_04' }
