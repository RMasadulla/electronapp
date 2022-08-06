import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const LASER_SWORD_CARD: Card = Object.freeze({
    id: 'LASER_SWORD_CARD',
    key: 'LASER_SWORD_CARD',
    title: 'LASER SWORD',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal damage, - enemy ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 25, attackType: AttackTypes.LaserSword },
                description: 'Deal {x} damage. Deals double damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 20, attackType: AttackTypes.LaserSword },
                description: 'Deal {x} damage. Deals double damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 15, attackType: AttackTypes.LaserSword },
                description: 'Deal {x} damage. Deals double damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 10, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack. Deal {x} damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 7, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack. Deal {x} damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack. Deal {x} damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const LASER_SWORD_CARD_02 = {
    ...LASER_SWORD_CARD,
    id: 'LASER_SWORD_CARD_02',
}
export const LASER_SWORD_CARD_03 = {
    ...LASER_SWORD_CARD,
    id: 'LASER_SWORD_CARD_03',
}
export const LASER_SWORD_CARD_04 = {
    ...LASER_SWORD_CARD,
    id: 'LASER_SWORD_CARD_04',
}
