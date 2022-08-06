import { random } from 'lodash'
import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const DOME_SMASH_CARD: Card = {
    id: 'DOME_SMASH_CARD',
    key: 'DOME_SMASH_CARD',
    title: 'DOME SMASH',
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
                bark: 'GAH! I’m pretty sure that broke a bone. [0 DAMAGE]',
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
                bark: 'GAH! I’m pretty sure that broke a bone. [{x} DAMAGE]',
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
                statuses: { armored: { modifier: -2 } },
                description: 'Partially block attack, take {x} DAMAGE from enemy. -2 ARMORED.',
                bark: 'GAH! I’m pretty sure that broke a bone. [{x} DAMAGE, -2 ARMORED]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(16, 20), attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -2 } },
                description: 'Take {x} DAMAGE from enemy. -2 ARMORED.',
                bark: 'GAH! I-I’m pretty sure that broke at least … 3 bones. [{x} DAMAGE, -2 ARMORED.]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(22, 28), attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -4 } },
                description: 'Take {x} DAMAGE from enemy. -4 ARMORED.',
                bark: 'GAH! I-I’m pretty sure that broke at least … 3 bones. [{x} DAMAGE, -4 ARMORED.]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(28, 32), attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -6 } },
                description: 'Take {x} DAMAGE from enemy. -6 ARMORED.',
                bark: 'GAH! I-I’m pretty sure that broke at least … 6 bones. [{x} DAMAGE, -6 ARMORED.]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

export const CHARGE_SHIELDS_CARD: Card = {
    id: 'CHARGE_SHIELDS_CARD',
    key: 'CHARGE_SHIELDS_CARD',
    title: 'CHARGE SHIELDS',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                stats: { shield: { modifier: -8 } },
                description: '-8 enemy SHIELD',
                bark: 'Why isn’t my shield charging!? [-8 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                stats: { shield: { modifier: -4 } },
                description: '-4 enemy SHIELD',
                bark: 'Why isn’t my shield charging!? [-4 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy SHIELD',
                bark: 'Why isn’t my shield charging!? [+0 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                stats: { shield: { modifier: 4 } },
                description: '+4 enemy SHIELD',
                bark: 'Shield charging… [+4 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                stats: { shield: { modifier: 8 } },
                description: '+8 enemy SHIELD',
                bark: 'Shield charging… [+8 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                stats: { shield: { modifier: 16 } },
                description: '+16 enemy SHIELD',
                bark: 'Shield charging… [+16 SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
    },
}

export const BATTER_CARD: Card = {
    id: 'BATTER_CARD',
    key: 'BATTER_CARD',
    title: 'BATTER',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: '+0 DAZED',
                bark: 'Gonna need to work on that, buddy [+0 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: '+0 DAZED',
                bark: 'Gonna need to work on that, buddy [+0 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: '+0 DAZED',
                bark: 'Gonna need to work on that, buddy [+0 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: {
                    dazed: { modifier: 1 },
                },
                description: '+1 DAZED',
                bark: 'I - I’m gonna need a few seconds [+1 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: {
                    dazed: { modifier: 2 },
                },
                description: '+2 DAZED',
                bark: 'I - I’m gonna need a few seconds [+2 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: {
                    dazed: { modifier: 3 },
                },
                description: '+3 DAZED',
                bark: 'I - I’m gonna need a few seconds [+3 DAZED]',
                infoText: 'While DAZED is active, deal 30% less damage.',
            },
        },
    },
}

export const PACHYCEPHALOSAURUS_CARDS = {
    attack: DOME_SMASH_CARD,
    defense: CHARGE_SHIELDS_CARD,
    special: BATTER_CARD,
}
