import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const LASER_STRIKE_CARD: Card = Object.freeze({
    id: 'LASER_STRIKE_CARD',
    key: 'LASER_STRIKE_CARD',
    title: 'LASER STRIKE',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal damage, - enemy ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 24, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -3 } },
                description: 'Deal {x} damage. -3 enemy ARMORED.',
                bark: 'AHHH! It burns! [{x} DAMAGE, -3 ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 12, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -2 } },
                description: 'Deal {x} damage. -2 enemy ARMORED.',
                bark: 'AHHH! It burns! [{x} DAMAGE, -2 ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 6, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -1 } },
                description: 'Deal {x} damage. -1 enemy ARMORED.',
                bark: 'AHHH! It burns! [{x} DAMAGE, -1 ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 3, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'I feel a warm tingle … is your laser doing that? [{x} DAMAGE].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 1, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'I feel a warm tingle … is your laser doing that? [{x} DAMAGE].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Enemy blocks attack, deal 0 damage.',
                bark: 'I feel a warm tingle … is your laser doing that? [0 DAMAGE].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const LASER_STRIKE_CARD_02 = {
    ...LASER_STRIKE_CARD,
    id: 'LASER_STRIKE_CARD_02',
}
export const LASER_STRIKE_CARD_03 = {
    ...LASER_STRIKE_CARD,
    id: 'LASER_STRIKE_CARD_03',
}
export const LASER_STRIKE_CARD_04 = {
    ...LASER_STRIKE_CARD,
    id: 'LASER_STRIKE_CARD_04',
}
