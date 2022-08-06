import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const RPG_CARD: Card = Object.freeze({
    id: 'RPG_CARD',
    key: 'RPG_CARD',
    title: 'RPG',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal damage, - enemy ARMORED, IN COVER',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 18, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -3 }, inCover: { modifier: -3 } },
                description: 'Deal {x} damage. -3 enemy ARMORED, IN COVER.',
                bark: 'RPG! [{x} DAMAGE, -3 ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
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
                statuses: { armored: { modifier: -2 }, inCover: { modifier: -2 } },
                description: 'Deal {x} damage. -2 enemy ARMORED, IN COVER.',
                bark: 'RPG! [{x} DAMAGE, -2 ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
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
                statuses: { armored: { modifier: -1 }, inCover: { modifier: -1 } },
                description: 'Deal {x} damage. -1 enemy ARMORED, IN COVER.',
                bark: 'RPG! [{x} DAMAGE, -1 ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
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
                bark: 'Try a bigger rocket next time [{x} DAMAGE].',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 2, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'Try a bigger rocket next time [{x} DAMAGE].',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
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
                bark: 'Try a bigger rocket next time [0 DAMAGE].',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const RPG_CARD_02 = {
    ...RPG_CARD,
    id: 'RPG_CARD_02',
}
export const RPG_CARD_03 = {
    ...RPG_CARD,
    id: 'RPG_CARD_03',
}
export const RPG_CARD_04 = {
    ...RPG_CARD,
    id: 'RPG_CARD_04',
}
