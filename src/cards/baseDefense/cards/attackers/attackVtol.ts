import { Card, EffectLevels, AttackTypes, CardIdentity, Tiers } from '@/types'

export const ATTACK_VTOL_CARD: Card = {
    id: 'ATTACK_VTOL_CARD_BASE_ATTACKER',
    key: 'ATTACK_VTOL_CARD_BASE_ATTACKER',
    title: 'ATTACK VTOL',
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
                    attackType: AttackTypes.Air,
                },
                description: 'Partially defend against enemy attack. Take 2 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            base: {
                attack: {
                    damage: 4,
                    attackType: AttackTypes.Air,
                },
                description: 'Partially defend against enemy attack. Take 4 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            base: {
                attack: {
                    damage: 6,
                    attackType: AttackTypes.Air,
                },
                description: 'Partially defend against enemy attack. Take 6 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            base: {
                attack: {
                    damage: 10,
                    attackType: AttackTypes.Air,
                },
                description: 'Take 10 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'AIR damage depletes ANTI-AIR, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            base: {
                attack: {
                    damage: 16,
                    attackType: AttackTypes.Air,
                },
                description: 'Take 16 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'AIR damage depletes ANTI-AIR, then FORTIFICATIONS, then HP.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            base: {
                attack: {
                    damage: 24,
                    attackType: AttackTypes.Air,
                },
                description: 'Take 24 AIR damage.',
                bark: 'ATTACKED! {x} damage.',
                infoText: 'AIR damage depletes ANTI-AIR, then FORTIFICATIONS, then HP.',
            },
        },
    },
}
