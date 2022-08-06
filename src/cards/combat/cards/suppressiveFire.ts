import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SUPPRESSIVE_FIRE_CARD: Card = {
    id: 'SUPPRESSIVE_FIRE_CARD',
    key: 'SUPPRESSIVE_FIRE_CARD',
    title: 'SUPPRESSIVE FIRE',
    identity: CardIdentity.Utility,
    storeDescription: '+/- SUPPRESSED.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { suppressed: { modifier: 3 } },
                description: '+3 enemy SUPPRESSED.',
                infoText: 'While SUPPRESSED and IN COVER are both active, enemy cannot attack.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { suppressed: { modifier: 2 } },
                description: '+2 enemy SUPPRESSED.',
                infoText: 'While SUPPRESSED and IN COVER are both active, enemy cannot attack.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { suppressed: { modifier: 1 } },
                description: '+1 enemy SUPPRESSED.',
                infoText: 'While SUPPRESSED and IN COVER are both active, enemy cannot attack.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { suppressed: { modifier: 0 } },
                description: '+0 enemy SUPPRESSED.',
                infoText: 'While SUPPRESSED and IN COVER are both active, enemy cannot attack.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { suppressed: { modifier: 1 } },
                description: '+1 SUPPRESSED.',
                infoText: 'While SUPPRESSED and IN COVER are both active, enemy cannot attack.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { suppressed: { modifier: 2 } },
                description: '+2 SUPPRESSED.',
                infoText: 'While SUPPRESSED and IN COVER are both active, enemy cannot attack.',
            },
        },
    },
}
export const SUPPRESSIVE_FIRE_CARD_02 = { ...SUPPRESSIVE_FIRE_CARD, id: 'SUPPRESSIVE_FIRE_CARD_02' }
export const SUPPRESSIVE_FIRE_CARD_03 = { ...SUPPRESSIVE_FIRE_CARD, id: 'SUPPRESSIVE_FIRE_CARD_03' }
export const SUPPRESSIVE_FIRE_CARD_04 = { ...SUPPRESSIVE_FIRE_CARD, id: 'SUPPRESSIVE_FIRE_CARD_04' }
