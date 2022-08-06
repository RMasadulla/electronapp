import { AttackTypes, EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const CLOSE_AIR_SUPPORT_CARD: Card = {
    id: 'CLOSE_AIR_SUPPORT_CARD',
    key: 'CLOSE_AIR_SUPPORT_CARD',
    title: 'CLOSE AIR SUPPORT',
    identity: CardIdentity.Support,
    storeDescription: 'Deal damage for each **support point** you have.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                attack: { damage: 8, attackType: AttackTypes.Support },
                description: 'Deal 8 damage for each **support point** (deals {x} damage total)',
                bark: 'Got hit by an air strike! [{x} damage]',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                attack: { damage: 4, attackType: AttackTypes.Support },
                description: 'Deal 4 damage for each **support point** (deals {x} damage)',
                bark: 'Got hit by an air strike! [{x} damage]',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                attack: { damage: 2, attackType: AttackTypes.Support },
                description: 'Deal 2 damage for each **support point** (deals {x} damage)',
                bark: 'Got hit by an air strike! [{x} damage]',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                attack: { damage: 0, attackType: AttackTypes.Support },
                description: 'Deal 0 damage for each **support point** (deals 0 damage)',
                bark: 'Air strike missed the enemy! [0 damage]',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                attack: { damage: 2, attackType: AttackTypes.Support },
                description: 'Take 2 damage for each **support point** (deals {x} damage)',
                bark: 'No! Don’t hit us! Hit the enemy! [{x} damage]',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                attack: { damage: 8, attackType: AttackTypes.Support },
                description: 'Take 8 damage for each **support point** (deals {x} damage)',
                bark: 'No! Don’t hit us! Hit the enemy! [{x} damage]',
                infoText: 'Every 100 HP your base has counts as 1 support point',
            },
        },
    },
}
export const CLOSE_AIR_SUPPORT_CARD_02 = {
    ...CLOSE_AIR_SUPPORT_CARD,
    id: 'CLOSE_AIR_SUPPORT_CARD_02',
}
export const CLOSE_AIR_SUPPORT_CARD_03 = {
    ...CLOSE_AIR_SUPPORT_CARD,
    id: 'CLOSE_AIR_SUPPORT_CARD_03',
}
export const CLOSE_AIR_SUPPORT_CARD_04 = {
    ...CLOSE_AIR_SUPPORT_CARD,
    id: 'CLOSE_AIR_SUPPORT_CARD_04',
}
