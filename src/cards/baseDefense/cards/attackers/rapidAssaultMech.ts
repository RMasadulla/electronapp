import { Card, EffectLevels, AttackTypes, CardIdentity, Tiers } from '@/types'

export const RAPID_ASSAULT_MECH_CARD: Card = {
    id: 'RAPID_ASSAULT_MECH_CARD_BASE_ATTACKER',
    key: 'RAPID_ASSAULT_MECH_CARD_BASE_ATTACKER',
    title: 'RAPID ASSAULT MECH',
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
                    attackType: AttackTypes.Ground,
                },
                description: 'Partially defend against enemy attack. Take 5 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                attack: {
                    damage: 7,
                    attackType: AttackTypes.Ground,
                },
                description: 'Partially defend against enemy attack. Take 7 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                attack: {
                    damage: 9,
                    attackType: AttackTypes.Ground,
                },
                description: 'Partially defend against enemy attack. Take 9 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                attack: {
                    damage: 13,
                    attackType: AttackTypes.Ground,
                },
                description: 'Take 13 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                attack: {
                    damage: 19,
                    attackType: AttackTypes.Ground,
                },
                description: 'Take 19 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                attack: {
                    damage: 27,
                    attackType: AttackTypes.Ground,
                },
                description: 'Take 27 GROUND damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'GROUND damage depletes ANTI-GROUND, then FORTIFICATIONS, then HP.',
            },
        },
    },
}
