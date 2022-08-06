import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SNAP_OUT_OF_IT_CARD: Card = {
    id: 'SNAP_OUT_OF_IT_CARD',
    key: 'SNAP_OUT_OF_IT_CARD',
    title: 'SNAP OUT OF IT',
    identity: CardIdentity.Utility,
    storeDescription: 'Deactivate all active negative statuses / +PANICKED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: {
                    overheated: { modifier: 0 },
                    suppressed: { modifier: 0 },
                    enraged: { modifier: 0 },
                    panicked: { modifier: 0 },
                    bleeding: { modifier: 0 },
                    smoked: { modifier: 0 },
                    dazed: { modifier: 0 },
                },
                description: 'Deactivate all active negative statuses',
                bark: 'Come on, snap out of it! [Deactivate negative statuses]',
                infoText:
                    'Negative statuses include: OVERHEATED, SUPPRESSED, ENRAGED, PANICKED, BLEEDING, SMOKED, and DAZED',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: {
                    overheated: { modifier: 0 },
                    suppressed: { modifier: 0 },
                    enraged: { modifier: 0 },
                    panicked: { modifier: 0 },
                    bleeding: { modifier: 0 },
                    smoked: { modifier: 0 },
                    dazed: { modifier: 0 },
                },
                description: 'Deactivate all active negative statuses',
                bark: 'Come on, snap out of it! [Deactivate negative statuses]',
                infoText:
                    'Negative statuses include: OVERHEATED, SUPPRESSED, ENRAGED, PANICKED, BLEEDING, SMOKED, and DAZED',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: {
                    overheated: { modifier: 0 },
                    suppressed: { modifier: 0 },
                    enraged: { modifier: 0 },
                    panicked: { modifier: 0 },
                    bleeding: { modifier: 0 },
                    smoked: { modifier: 0 },
                    dazed: { modifier: 0 },
                },
                description: 'Deactivate all active negative statuses',
                bark: 'Come on, snap out of it! [Deactivate negative statuses]',
                infoText:
                    'Negative statuses include: OVERHEATED, SUPPRESSED, ENRAGED, PANICKED, BLEEDING, SMOKED, and DAZED',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                alternativeTitle: 'Waking Nightmare',
                statuses: { panicked: { modifier: 1 } },
                description: '+1 PANICKED',
                bark: 'Oh no, oh no, oh no. This isn’t good at all! [+1 PANICKED]',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                alternativeTitle: 'Waking Nightmare',
                statuses: { panicked: { modifier: 2 } },
                description: '+2 panicked',
                bark: 'Oh no, oh no, oh no. This isn’t good at all! [+2 PANICKED]',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                alternativeTitle: 'Waking Nightmare',
                statuses: { panicked: { modifier: 3 } },
                description: '+3 panicked',
                bark: 'Oh no, oh no, oh no. This isn’t good at all! [+3 PANICKED]',
            },
        },
    },
}
export const SNAP_OUT_OF_IT_CARD_02 = {
    ...SNAP_OUT_OF_IT_CARD,
    id: 'SNAP_OUT_OF_IT_CARD_02',
}
export const SNAP_OUT_OF_IT_CARD_03 = {
    ...SNAP_OUT_OF_IT_CARD,
    id: 'SNAP_OUT_OF_IT_CARD_03',
}
export const SNAP_OUT_OF_IT_CARD_04 = {
    ...SNAP_OUT_OF_IT_CARD,
    id: 'SNAP_OUT_OF_IT_CARD_04',
}
