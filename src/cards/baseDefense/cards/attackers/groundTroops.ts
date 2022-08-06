import { Card, EffectLevels, AttackTypes, CardIdentity, Tiers } from '@/types'

export const GROUND_TROOPS_CARD: Card = {
    id: 'GROUND_TROOPS_CARD_BASE_ATTACKER',
    key: 'GROUND_TROOPS_CARD_BASE_ATTACKER',
    title: 'GROUND TROOPS',
    identity: CardIdentity.BaseAttacker,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isBaseAttackerCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            base: {
                attack: {
                    damage: 2,
                    attackType: AttackTypes.Ground,
                },
                description: 'Partially defend against enemy attack. Take 2 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                attack: {
                    damage: 4,
                    attackType: AttackTypes.Ground,
                },
                description: 'Partially defend against enemy attack. Take 4 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                attack: {
                    damage: 6,
                    attackType: AttackTypes.Ground,
                },
                description: 'Partially defend against enemy attack. Take 6 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                attack: {
                    damage: 10,
                    attackType: AttackTypes.Ground,
                },
                description: 'Take 10 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                attack: {
                    damage: 16,
                    attackType: AttackTypes.Ground,
                },
                description: 'Take 16 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                attack: {
                    damage: 24,
                    attackType: AttackTypes.Ground,
                },
                description: 'Take 24 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
    },
}
