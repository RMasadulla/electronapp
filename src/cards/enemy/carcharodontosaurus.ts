import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

const BESERKER_BASH: Card = {
    id: 'BESERKER_BASH_CARD',
    key: 'BESERKER_BASH_CARD',
    title: 'BESERKER BASH',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    isTempCard: true,
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 3, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Ow ow owww. Calm down! [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 5, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Ow ow owww. Calm down! [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 7, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Ow ow owww. Calm down! [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 15, attackType: AttackTypes.Regular },
                description: 'Take {x} DAMAGE from enemy.',
                bark: 'Ow ow owww. Calm down! [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 20, attackType: AttackTypes.Regular },
                description: 'Take {x} DAMAGE from enemy.',
                bark: 'Ow ow owww. Calm down! [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Attack,
                attack: { damage: 25, attackType: AttackTypes.Regular },
                description: 'Take {x} DAMAGE from enemy.',
                bark: 'Ow ow owww. Calm down! [Take {x} DAMAGE from enemy]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

export const COMBAT_ARMOR_CARD: Card = {
    id: 'COMBAT_ARMOR_CARD',
    key: 'COMBAT_ARMOR_CARD',
    title: 'COMBAT ARMOR',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '+ ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                description: '+0 enemy ARMORED.',
                bark: 'I’m not sure this is gonna do anything [+0 enemy ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                description: '+0 enemy ARMORED.',
                bark: 'I’m not sure this is gonna do anything [+0 enemy ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy ARMORED.',
                bark: 'I’m not sure this is gonna do anything [+0 enemy ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 6 } },
                description: '+6 enemy ARMORED.',
                bark: 'I like being harder to kill [+6 enemy ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 8 } },
                description: '+8 enemy ARMORED.',
                bark: 'I like being harder to kill [+8 enemy ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { armored: { modifier: 10 } },
                description: '+10 enemy ARMORED.',
                bark: 'I like being harder to kill [+10 enemy ARMORED].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
        },
    },
}

export const UTTER_RAGE_CARD: Card = {
    id: 'UTTER_RAGE_CARD',
    key: 'UTTER_RAGE_CARD',
    title: 'UTTER RAGE',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '+ ENRAGED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                description: '+0 enemy ENRAGED.',
                bark: 'RAWWRRRRGG! I WILL BREAK YOUUU! [+0 enemy ENRAGED].',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                description: '+0 enemy ENRAGED.',
                bark: 'RAWWRRRRGG! I WILL BREAK YOUUU! [+0 enemy ENRAGED].',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy ENRAGED.',
                bark: 'RAWWRRRRGG! I WILL BREAK YOUUU! [+0 enemy ENRAGED].',
                infoText: 'While ENRAGED is active, deal and take 20% more damage.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: {
                    enraged: { modifier: 1 },
                    overheated: { modifier: 0 },
                    suppressed: { modifier: 0 },
                    panicked: { modifier: 0 },
                    bleeding: { modifier: 0 },
                    smoked: { modifier: 0 },
                    dazed: { modifier: 0 },
                },
                description: '+1 enemy ENRAGED. Nullify active enemy negative statuses.',
                bark: 'RAWWRRRRGG! I WILL BREAK YOUUU! [+1 enemy ENRAGED].',
                infoText:
                    'While ENRAGED is active, deal and take 20% more damage. Negative statuses include: OVERHEATED, SUPPRESSED, PANICKED, BLEEDING, SMOKED, and DAZED.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: {
                    enraged: { modifier: 2 },
                    overheated: { modifier: 0 },
                    suppressed: { modifier: 0 },
                    panicked: { modifier: 0 },
                    bleeding: { modifier: 0 },
                    smoked: { modifier: 0 },
                    dazed: { modifier: 0 },
                },
                description: '+2 enemy ENRAGED. Nullify active enemy negative statuses.',
                bark: 'RAWWRRRRGG! I WILL BREAK YOUUU! [+2 enemy ENRAGED].',
                infoText:
                    'While ENRAGED is active, deal and take 20% more damage. Negative statuses include: OVERHEATED, SUPPRESSED, PANICKED, BLEEDING, SMOKED, and DAZED.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: {
                    enraged: { modifier: 3 },
                    overheated: { modifier: 0 },
                    suppressed: { modifier: 0 },
                    panicked: { modifier: 0 },
                    bleeding: { modifier: 0 },
                    smoked: { modifier: 0 },
                    dazed: { modifier: 0 },
                },
                description: '+3 enemy ENRAGED. Nullify active enemy negative statuses.',
                bark: 'RAWWRRRRGG! I WILL BREAK YOUUU! [+3 enemy ENRAGED].',
                infoText:
                    'While ENRAGED is active, deal and take 20% more damage. Negative statuses include: OVERHEATED, SUPPRESSED, PANICKED, BLEEDING, SMOKED, and DAZED.',
            },
        },
    },
}

export const CARCHARODONTOSAURUS_CARDS = {
    attack: BESERKER_BASH,
    defense: COMBAT_ARMOR_CARD,
    special: UTTER_RAGE_CARD,
}
