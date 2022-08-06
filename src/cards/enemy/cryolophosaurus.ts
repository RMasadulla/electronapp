import { random } from 'lodash'
import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

const RAPID_ASSAULT_CARD: Card = {
    id: 'RAPID_ASSAULT_CARD',
    key: 'RAPID_ASSAULT_CARD',
    title: 'RAPID ASSAULT',
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
                bark: 'AH! That attack came out of nowhere. [0 DAMAGE]',
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
                bark: 'AH! That attack came out of nowhere. [{x} DAMAGE]',
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
                bark: 'AH! That attack came out of nowhere. [{x} DAMAGE]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 14, attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -1 } },
                description: 'Take {x} DAMAGE from enemy. -1 IN COVER.',
                bark: 'AH! That attack came out of nowhere. [{x} DAMAGE, -1 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(20, 28), attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -2 } },
                description: 'Take {x} DAMAGE from enemy. -2 IN COVER.',
                bark: 'AH! That attack came out of nowhere. [{x} DAMAGE, -2 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(30, 38), attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -3 } },
                description: 'Take {x} DAMAGE from enemy. -3 IN COVER.',
                bark: 'AH! That attack came out of nowhere. [{x} DAMAGE, -3 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

const TAKE_COVER_CARD: Card = {
    id: 'TAKE_COVER_CARD',
    key: 'TAKE_COVER_CARD',
    title: 'TAKE COVER',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                description: '+0 enemy IN COVER.',
                bark: 'Get down! Get down! [+0 enemy IN COVER.]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                description: '+0 enemy IN COVER.',
                bark: 'Get down! Get down! [+0 enemy IN COVER.]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                description: '+0 enemy IN COVER.',
                bark: 'Get down! Get down! [+0 enemy IN COVER.]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                statuses: { inCover: { modifier: 1 } },
                description: '+1 enemy IN COVER.',
                bark: 'Get down! Get down! [+1 enemy IN COVER.]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                statuses: { inCover: { modifier: 2 } },
                description: '+2 enemy IN COVER.',
                bark: 'Get down! Get down! [+2 enemy IN COVER.]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                statuses: { inCover: { modifier: 3 } },
                description: '+3 enemy IN COVER.',
                bark: 'Get down! Get down! [+3 enemy IN COVER.]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
    },
}

const LEECH_SHIELD_CARD: Card = {
    id: 'LEECH_SHIELD_CARD',
    key: 'LEECH_SHIELD_CARD',
    title: 'LEECH SHIELD',
    identity: CardIdentity.EnemyDefense,
    storeDescription: '+ SHIELD',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                stats: { shield: { modifier: 16 } },
                description: '+16 enemy SHIELD.',
                bark: 'Shield charging… [+16 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                stats: { shield: { modifier: 8 } },
                description: '+8 enemy SHIELD.',
                bark: 'Shield charging… [+8 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                stats: { shield: { modifier: 4 } },
                description: '+4 enemy SHIELD.',
                bark: 'Shield charging… [+4 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                stats: { shield: { modifier: 4 } },
                description: '+4 enemy SHIELD.',
                bark: 'You don’t need this, right? [+4 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                stats: { shield: { modifier: -4 } },
                description: '-4 SHIELD.',
                bark: 'Enemy is stealing my shield! [-4 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                stats: { shield: { modifier: 8 } },
                description: '+8 enemy SHIELD.',
                bark: 'You don’t need this, right? [+8 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                stats: { shield: { modifier: -8 } },
                description: '-8 SHIELD.',
                bark: 'Enemy is stealing my shield! [-8 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                stats: { shield: { modifier: 16 } },
                description: '+16 enemy SHIELD.',
                bark: 'You don’t need this, right? [+16 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                stats: { shield: { modifier: -16 } },
                description: '-16 SHIELD.',
                bark: 'Enemy is stealing my shield! [-16 enemy SHIELD]',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
    },
}

export const CRYOLOPHOSAURUS_CARDS = {
    attack: RAPID_ASSAULT_CARD,
    defense: TAKE_COVER_CARD,
    special: LEECH_SHIELD_CARD,
}
