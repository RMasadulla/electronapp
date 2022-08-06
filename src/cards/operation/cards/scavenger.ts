import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SCAVENGER_CARD: Card = {
    id: 'SCAVENGER_CARD',
    key: 'SCAVENGER_CARD',
    title: 'SCAVENGER',
    identity: CardIdentity.Utility,
    storeDescription: '+/- SUPPLIES.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { gainedSupplies: { modifier: 1000 } },
                description: '+1000 SUPPLIES.',
                bark: 'Jackpot! Supply cache! [+1000 SUPPLIES]',
                infoText:
                    'Supplies are used to repair your base and buy and remove base defense cards.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { gainedSupplies: { modifier: 500 } },
                description: '+500 SUPPLIES.',
                bark: 'Jackpot! Supply cache! [+500 SUPPLIES]',
                infoText:
                    'Supplies are used to repair your base and buy and remove base defense cards.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { gainedSupplies: { modifier: 250 } },
                description: '+250 SUPPLIES.',
                bark: 'Jackpot! Supply cache! [+250 SUPPLIES]',
                infoText:
                    'Supplies are used to repair your base and buy and remove base defense cards.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                stats: { gainedSupplies: { modifier: -250 } },
                description: '-250 SUPPLIES.',
                bark: 'I know I put that supply cache somewhere. Think! Where did you see it last? [-250 SUPPLIES]',
                infoText:
                    'Supplies are used to repair your base and buy and remove base defense cards.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: { gainedSupplies: { modifier: -500 } },
                description: '-500 SUPPLIES.',
                bark: 'I know I put that supply cache somewhere. Think! Where did you see it last? [-500 SUPPLIES]',
                infoText:
                    'Supplies are used to repair your base and buy and remove base defense cards.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: { gainedSupplies: { modifier: -1000 } },
                description: '-1000 SUPPLIES.',
                bark: 'I know I put that supply cache somewhere. Think! Where did you see it last? [-1000 SUPPLIES]',
                infoText:
                    'Supplies are used to repair your base and buy and remove base defense cards.',
            },
        },
    },
}
export const SCAVENGER_CARD_02 = { ...SCAVENGER_CARD, id: 'SCAVENGER_CARD_02' }
export const SCAVENGER_CARD_03 = { ...SCAVENGER_CARD, id: 'SCAVENGER_CARD_03' }
export const SCAVENGER_CARD_04 = { ...SCAVENGER_CARD, id: 'SCAVENGER_CARD_04' }
