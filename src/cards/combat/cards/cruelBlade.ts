import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const CRUEL_BLADE_CARD: Card = Object.freeze({
    id: 'CRUEL_BLADE_CARD',
    key: 'CRUEL_BLADE_CARD',
    title: 'CRUEL BLADE',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal damage, - enemy ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 25, attackType: AttackTypes.CruelBlade },
                description:
                    'Deal {x} damage. If enemy has less than 50% health, deal double damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 20, attackType: AttackTypes.CruelBlade },
                description:
                    'Deal {x} damage. If enemy has less than 50% health, deal double damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 15, attackType: AttackTypes.CruelBlade },
                description:
                    'Deal {x} damage. If enemy has less than 50% health, deal double damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 8, attackType: AttackTypes.CruelBlade },
                description:
                    'Deal {x} damage. If enemy has less than 50% health, deal half damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 2, attackType: AttackTypes.CruelBlade },
                description:
                    'Deal {x} damage. If enemy has less than 50% health, deal half damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.CruelBlade },
                description: 'Deal {x} damage. If enemy has less than 50% health, deal 0 damage.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const CRUEL_BLADE_CARD_02 = {
    ...CRUEL_BLADE_CARD,
    id: 'CRUEL_BLADE_CARD_02',
}
export const CRUEL_BLADE_CARD_03 = {
    ...CRUEL_BLADE_CARD,
    id: 'CRUEL_BLADE_CARD_03',
}
export const CRUEL_BLADE_CARD_04 = {
    ...CRUEL_BLADE_CARD,
    id: 'CRUEL_BLADE_CARD_04',
}
