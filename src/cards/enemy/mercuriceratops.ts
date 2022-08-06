import { random } from 'lodash'
import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const MORTAR_STRIKE_CARD: Card = {
    id: 'MORTAR_STRIKE_CARD',
    key: 'MORTAR_STRIKE_CARD',
    title: 'MORTAR STRIKE',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Block attack, take 0 DAMAGE from enemy.',
                bark: 'Get down! Mortar strike incoming! [0 DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 6, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Get down! Mortar strike incoming! [{x} DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 8, attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -1 } },
                description: 'Partially block attack, take {x} DAMAGE from enemy. -1 IN COVER.',
                bark: 'Get down! Mortar strike incoming! [{x} DAMAGE, -1 IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: {
                    dazed: { modifier: 1 },
                    inCover: { modifier: -1 },
                },
                attack: { damage: random(16, 20), attackType: AttackTypes.Regular },
                description: '+1 DAZED, -1 IN COVER, take {x} DAMAGE from enemy.',
                bark: 'Get down! Mortar strike incoming! [+1 DAZED, -1 IN COVER, {x} DAMAGE]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: {
                    dazed: { modifier: 2 },
                    inCover: { modifier: -2 },
                },
                attack: { damage: random(22, 26), attackType: AttackTypes.Regular },
                description: '+2 DAZED, -2 IN COVER, take {x} DAMAGE from enemy.',
                bark: 'Get down! Mortar strike incoming! [+2 DAZED, -2 IN COVER, {x} DAMAGE]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: {
                    dazed: { modifier: 3 },
                    inCover: { modifier: -3 },
                },
                attack: { damage: random(28, 32), attackType: AttackTypes.Regular },
                description: '+3 DAZED, -3 IN COVER, take {x} DAMAGE from enemy.',
                bark: 'Get down! Mortar strike incoming! [+3 DAZED, -3 IN COVER, {x} DAMAGE]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

const FACE_OFF_CARD: Card = {
    id: 'FACE_OFF_CARD',
    key: 'FACE_OFF_CARD',
    title: 'FACE OFF',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { armored: { modifier: -4 }, inCover: { modifier: -2 } },
                description: '-4 enemy ARMORED, -2 enemy IN COVER.',
                bark: 'You wanna go? Come at me! [-2 enemy ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { armored: { modifier: -2 }, inCover: { modifier: -1 } },
                description: '-2 enemy ARMORED, -1 enemy IN COVER.',
                bark: 'You wanna go? Come at me! [-1 enemy ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                statuses: { armored: { modifier: +0 }, inCover: { modifier: +0 } },
                description: '+0 enemy ARMORED, +0 enemy IN COVER.',
                bark: 'You wanna go? Come at me! [+0 enemy ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 2 }, inCover: { modifier: 1 } },
                description: '+2 enemy ARMORED, +1 enemy IN COVER.',
                bark: 'You wanna go? Come at me! [+1 enemy ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 4 }, inCover: { modifier: 2 } },
                description: '+4 enemy ARMORED, +2 enemy IN COVER.',
                bark: 'You wanna go? Come at me! [+2 enemy ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 6 }, inCover: { modifier: 3 } },
                description: '+6 enemy ARMORED, +3 enemy IN COVER.',
                bark: 'You wanna go? Come at me! [+3 enemy ARMORED, IN COVER]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
        },
    },
}

export const MERCURICERATOPS_CARDS = {
    attack: MORTAR_STRIKE_CARD,
    defense: FACE_OFF_CARD,
    special: FACE_OFF_CARD,
}
