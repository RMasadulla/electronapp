import { Card, EffectLevels, AttackTypes, CardIdentity, Tiers } from '@/types'

export const AIR_STRIKE_CARD: Card = {
    id: 'AIR_STRIKE_CARD_BASE_ATTACKER',
    key: 'AIR_STRIKE_CARD_BASE_ATTACKER',
    title: 'AIR STRIKE',
    identity: CardIdentity.BaseAttacker,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isBaseAttackerCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                attack: {
                    damage: 5,
                    attackType: AttackTypes.Air,
                },
                description: 'Partially defend against enemy attack. Take 5 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                attack: {
                    damage: 7,
                    attackType: AttackTypes.Air,
                },
                description: 'Partially defend against enemy attack. Take 7 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                attack: {
                    damage: 9,
                    attackType: AttackTypes.Air,
                },
                description: 'Partially defend against enemy attack. Take 9 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                attack: {
                    damage: 13,
                    attackType: AttackTypes.Air,
                },
                description: 'Take 13 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                attack: {
                    damage: 19,
                    attackType: AttackTypes.Air,
                },
                description: 'Take 19 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                attack: {
                    damage: 27,
                    attackType: AttackTypes.Air,
                },
                description: 'Take 27 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
    },
}
