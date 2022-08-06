import { random } from 'lodash'
import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

const GRENADE_LAUNCHER_CARD: Card = {
    id: 'GRENADE_LAUNCHER_CARD',
    key: 'GRENADE_LAUNCHER_CARD',
    title: 'GRENADE LAUNCHER',
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
                description: 'Block attack, take {x} DAMAGE from enemy.',
                bark: 'ARGH! So much shrapnel. [{x} DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'ARGH! So much shrapnel. [{x} DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 7, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'ARGH! So much shrapnel. [{x} DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: { armored: { modifier: -2 }, inCover: { modifier: -1 } },
                attack: { damage: 14, attackType: AttackTypes.Regular },
                description: '-2 ARMORED, -1 IN COVER, take {x} DAMAGE from enemy.',
                bark: 'ARGH! So much shrapnel. No time to dodge that grenade. [-2 ARMORED, -1 IN COVER, {x} DAMAGE]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: { armored: { modifier: -4 }, inCover: { modifier: -2 } },
                attack: { damage: random(16, 24), attackType: AttackTypes.Regular },
                description: '-4 ARMORED, -2 IN COVER, take {x} DAMAGE from enemy.',
                bark: 'ARGH! So much shrapnel. No time to dodge that grenade. [-4 ARMORED, -2 IN COVER, {x} DAMAGE]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: { armored: { modifier: -6 }, inCover: { modifier: -3 } },
                attack: { damage: random(26, 34), attackType: AttackTypes.Regular },
                description: '-6 ARMORED, -3 IN COVER, take {x} DAMAGE from enemy.',
                bark: 'ARGH! So much shrapnel. No time to dodge that grenade. [-6 ARMORED, -3 IN COVER, {x} DAMAGE]',
                infoText:
                    'IN COVER reduces damage by 40%, for X rounds. ARMORED reduces damage by X (stackable).',
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
                statuses: { armored: { modifier: -4 } },
                description: '-4 enemy ARMORED.',
                bark: 'You wanna go? Come at me! [-4 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                statuses: { armored: { modifier: -2 } },
                description: '-2 enemy ARMORED.',
                bark: 'You wanna go? Come at me! [-2 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy ARMORED.',
                bark: 'You wanna go? Come at me! [+0 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 2 } },
                description: '+2 enemy ARMORED.',
                bark: 'You wanna go? Come at me! [+2 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 4 } },
                description: '+4 enemy ARMORED.',
                bark: 'You wanna go? Come at me! [+4 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 6 } },
                description: '+6 enemy ARMORED.',
                bark: 'You wanna go? Come at me! [+6 enemy ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
    },
}

const SKULL_BASH_CARD: Card = {
    id: 'SKULL_BASH_CARD',
    key: 'SKULL_BASH_CARD',
    title: 'SKULL BASH',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(2, 3), attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Just got hit by a truck. Cool, cool. [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(4, 6), attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Just got hit by a truck. Cool, cool. [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(7, 10), attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Just got hit by a truck. Cool, cool. [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: { dazed: { modifier: 1 } },
                attack: { damage: random(14, 20), attackType: AttackTypes.Regular },
                description: '+1 DAZED, take {x} DAMAGE from enemy.',
                bark: 'Just got hit by a truck. Cool, cool. [+1 DAZED, take {x} DAMAGE from enemy]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: { dazed: { modifier: 2 } },
                attack: { damage: random(22, 28), attackType: AttackTypes.Regular },
                description: '+2 DAZED, take {x} DAMAGE from enemy.',
                bark: 'Just got hit by a truck. Cool, cool. [+2 DAZED, take {x} DAMAGE from enemy]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                statuses: { dazed: { modifier: 3 } },
                attack: { damage: random(30, 36), attackType: AttackTypes.Regular },
                description: '+3 DAZED, take {x} DAMAGE from enemy.',
                bark: 'Just got hit by a truck. Cool, cool. [+3 DAZED, take {x} DAMAGE from enemy]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

export const STYRACOSAURUS_CARDS = {
    attack: GRENADE_LAUNCHER_CARD,
    defense: FACE_OFF_CARD,
    special: SKULL_BASH_CARD,
}
