import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const WEAK_BULL_RUSH_CARD: Card = {
    id: 'BULL_RUSH_CARD',
    key: 'BULL_RUSH_CARD',
    title: 'BULL RUSH',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isTempCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Block attack, take 0 DAMAGE from enemy.',
                bark: 'Not gonna feel that tomorrow. [0 DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 4, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'I’m gonna feel a little sore tomorrow. [{x} DAMAGE]',
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
                statuses: { armored: { modifier: -1 } },
                description: 'Partially block attack, take {x} DAMAGE from enemy. -1 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -1 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 16, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -1 } },
                description: 'Take {x} DAMAGE from enemy. -1 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -1 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 24, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -2 } },
                description: 'Take {x} DAMAGE from enemy. -2 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -2 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 32, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -3 } },
                description: 'Take {x} DAMAGE from enemy. -3 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -3 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

export const WEAK_TOUGHENED_HIDE_CARD: Card = {
    id: 'TOUGHENED_HIDE_CARD',
    key: 'TOUGHENED_HIDE_CARD',
    title: 'TOUGHENED HIDE',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isTempCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { armored: { modifier: 2 } },
                description: '+2 ARMORED.',
                bark: 'Who’s the tough guy now?',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { armored: { modifier: 1 } },
                description: '+1 ARMORED.',
                bark: 'Who’s the tough guy now?',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy ARMORED.',
                bark: 'You think you can kill me? I’ll show you!',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 4 } },
                description: '+4 enemy ARMORED.',
                bark: 'Try to kill me now!',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 6 } },
                description: '+6 enemy ARMORED.',
                bark: 'Try to kill me now!',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 8 } },
                description: '+8 enemy ARMORED.',
                bark: 'I am unstoppable!',
            },
        },
    },
}

export const WEAK_SLICE_AND_DICE_CARD: Card = {
    id: 'SLICE_AND_DICE_CARD',
    key: 'SLICE_AND_DICE_CARD',
    title: 'SLICE AND DICE',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '+ BLEEDING',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: '+0 BLEEDING.',
                bark: 'Nothing more than a scratch.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: '+0 BLEEDING.',
                bark: 'Nothing more than a scratch.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: '+0 BLEEDING.',
                bark: 'Barely more than a scratch [+0 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 1 } },
                description: '+1 BLEEDING.',
                bark: 'Oh boy, that’s a lot of blood … my blood [+1 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 2 } },
                description: '+2 BLEEDING',
                bark: 'Oh boy, that’s a lot of blood … my blood [+2 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 3 } },
                description: '+3 BLEEDING',
                bark: 'Oh boy, that’s a lot of blood … my blood [+3 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },
    },
}

export const WEAK_CARNOTAURUS_CARDS = {
    attack: WEAK_BULL_RUSH_CARD,
    defense: WEAK_TOUGHENED_HIDE_CARD,
    special: WEAK_SLICE_AND_DICE_CARD,
}

export const AVERAGE_BULL_RUSH_CARD: Card = {
    id: 'BULL_RUSH_CARD',
    key: 'BULL_RUSH_CARD',
    title: 'BULL RUSH',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isTempCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Block attack, take 0 DAMAGE from enemy.',
                bark: 'Not gonna feel that tomorrow. [0 DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 4, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'I’m gonna feel a little sore tomorrow. [{x} DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 6, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -1 } },
                description: 'Partially block attack, take {x} DAMAGE from enemy. -1 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -1 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 8, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -1 } },
                description: 'Take {x} DAMAGE from enemy. -1 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -1 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 12, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -2 } },
                description: 'Take {x} DAMAGE from enemy. -2 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -2 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 16, attackType: AttackTypes.Regular },
                statuses: { armored: { modifier: -3 } },
                description: 'Take {x} DAMAGE from enemy. -3 ARMORED.',
                bark: 'OOOF! I’m gonna feel that tomorrow. [{x} DAMAGE, -3 ARMORED]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

export const AVERAGE_TOUGHENED_HIDE_CARD: Card = {
    id: 'TOUGHENED_HIDE_CARD',
    key: 'TOUGHENED_HIDE_CARD',
    title: 'TOUGHENED HIDE',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isTempCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                statuses: { armored: { modifier: 4 } },
                description: '+4 ARMORED.',
                bark: 'Who’s the tough guy now?',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                statuses: { armored: { modifier: 2 } },
                description: '+2 ARMORED.',
                bark: 'Who’s the tough guy now?',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy ARMORED.',
                bark: 'You think you can kill me? I’ll show you!',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 2 } },
                description: '+2 enemy ARMORED.',
                bark: 'Try to kill me now!',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 4 } },
                description: '+4 enemy ARMORED.',
                bark: 'Try to kill me now!',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 6 } },
                description: '+6 enemy ARMORED.',
                bark: 'I am unstoppable!',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
    },
}

export const AVERAGE_SLICE_AND_DICE_CARD: Card = {
    id: 'SLICE_AND_DICE_CARD',
    key: 'SLICE_AND_DICE_CARD',
    title: 'SLICE AND DICE',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '+ BLEEDING',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: '+0 BLEEDING.',
                bark: 'Nothing more than a scratch.',
                infoText: 'While BLEEDING is active, take 30% more damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: '+0 BLEEDING.',
                bark: 'Nothing more than a scratch.',
                infoText: 'While BLEEDING is active, take 30% more damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: '+0 BLEEDING.',
                bark: 'Nothing more than a scratch.',
                infoText: 'While BLEEDING is active, take 30% more damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 1 } },
                description: '+1 BLEEDING.',
                bark: 'Oh boy, that’s a lot of blood … my blood [+1 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 2 } },
                description: '+2 BLEEDING',
                bark: 'Oh boy, that’s a lot of blood … my blood [+2 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { bleeding: { modifier: 3 } },
                description: '+3 BLEEDING',
                bark: 'Oh boy, that’s a lot of blood … my blood [+3 BLEEDING].',
                infoText: 'While BLEEDING is active, take 30% more damage for {x} rounds.',
            },
        },
    },
}

export const AVERAGE_CARNOTAURUS_CARDS = {
    attack: AVERAGE_BULL_RUSH_CARD,
    defense: AVERAGE_TOUGHENED_HIDE_CARD,
    special: AVERAGE_SLICE_AND_DICE_CARD,
}
