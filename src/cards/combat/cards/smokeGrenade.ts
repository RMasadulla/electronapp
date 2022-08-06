import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SMOKE_GRENADE_CARD: Card = {
    id: 'SMOKE_GRENADE_CARD',
    key: 'SMOKE_GRENADE_CARD',
    title: 'SMOKE GRENADE',
    identity: CardIdentity.Utility,
    storeDescription: '+ SMOKED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                statuses: { smoked: { modifier: 3 } },
                description: '+3 SMOKED',
                bark: '*cough* *cough*, that’s a lot of smoke [+3 SMOKED].',
                infoText: 'While SMOKED is active, prevent all damage from being dealt.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { smoked: { modifier: 2 } },
                description: '+2 SMOKED',
                bark: '*cough* *cough*, that’s a lot of smoke [+2 SMOKED].',
                infoText: 'While SMOKED is active, prevent all damage from being dealt.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                statuses: { smoked: { modifier: 1 } },
                description: '+1 SMOKED',
                bark: '*cough* *cough*, that’s a lot of smoke [+1 SMOKED].',
                infoText: 'While SMOKED is active, prevent all damage from being dealt.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                description: 'No effect',
                bark: 'Uhhh … the grenade didn’t go off? [No effect]',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { smoked: { modifier: 1 } },
                description: '+1 SMOKED',
                bark: '*cough* *cough*, that’s a lot of smoke [+1 SMOKED].',
                infoText: 'While SMOKED is active, prevent all damage from being dealt.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { smoked: { modifier: 2 } },
                description: '+2 SMOKED',
                bark: '*cough* *cough*, that’s a lot of smoke [+2 SMOKED].',
                infoText: 'While SMOKED is active, prevent all damage from being dealt.',
            },
        },
    },
}
export const SMOKE_GRENADE_CARD_02 = {
    ...SMOKE_GRENADE_CARD,
    id: 'SMOKE_GRENADE_CARD_02',
}
export const SMOKE_GRENADE_CARD_03 = {
    ...SMOKE_GRENADE_CARD,
    id: 'SMOKE_GRENADE_CARD_03',
}
export const SMOKE_GRENADE_CARD_04 = {
    ...SMOKE_GRENADE_CARD,
    id: 'SMOKE_GRENADE_CARD_04',
}
