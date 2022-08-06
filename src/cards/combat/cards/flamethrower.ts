import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const FLAMETHROWER_CARD: Card = Object.freeze({
    id: 'FLAMETHROWER_CARD',
    key: 'FLAMETHROWER_CARD',
    title: 'FLAMETHROWER',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal high damage. If enemy is shielded, deal 0 damage.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Three,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 35, attackType: AttackTypes.Flamethrower },
                description: 'Deal {x} damage. Deals 0 damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 30, attackType: AttackTypes.Flamethrower },
                description: 'Deal {x} damage. Deals 0 damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 25, attackType: AttackTypes.Flamethrower },
                description: 'Deal {x} damage. Deals 0 damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 7, attackType: AttackTypes.Flamethrower },
                description:
                    'Enemy partially blocks attack. Deal {x} damage. Deals 0 damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.Flamethrower },
                description:
                    'Enemy partially blocks attack. Deal {x} damage. Deals 0 damage if enemy has shield.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Flamethrower },
                description: 'Enemy blocks attack. Deal {x} damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const FLAMETHROWER_CARD_02 = {
    ...FLAMETHROWER_CARD,
    id: 'FLAMETHROWER_CARD_02',
}
export const FLAMETHROWER_CARD_03 = {
    ...FLAMETHROWER_CARD,
    id: 'FLAMETHROWER_CARD_03',
}
export const FLAMETHROWER_CARD_04 = {
    ...FLAMETHROWER_CARD,
    id: 'FLAMETHROWER_CARD_04',
}
