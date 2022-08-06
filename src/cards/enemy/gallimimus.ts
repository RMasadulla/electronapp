import { random } from 'lodash'
import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const SNIPER_SHOT_CARD: Card = {
    id: 'SNIPER_SHOT_CARD',
    key: 'SNIPER_SHOT_CARD',
    title: 'SNIPER SHOT',
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
                bark: 'Wow, okay. That hurt. [0 DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 3, attackType: AttackTypes.Regular },
                description: 'Partially block attack, take {x} DAMAGE from enemy.',
                bark: 'Wow, okay. That hurt. [{x} DAMAGE]',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 5, attackType: AttackTypes.Regular },
                statuses: { killingMachine: { modifier: -1 } },
                description:
                    'Partially block attack, take {x} DAMAGE from enemy. -1 KILLING MACHINE.',
                bark: 'Wow, okay. That hurt. [{x} DAMAGE, -1 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(10, 18), attackType: AttackTypes.Regular },
                statuses: { killingMachine: { modifier: -1 } },
                description: 'Take {x} DAMAGE from enemy. -1 KILLING MACHINE.',
                bark: 'Wow, okay. That hurt. A LOT. [{x} DAMAGE, -1 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(19, 27), attackType: AttackTypes.Regular },
                statuses: { killingMachine: { modifier: -2 } },
                description: 'Take {x} DAMAGE from enemy. -2 KILLING MACHINE.',
                bark: 'Wow, okay. That hurt. A LOT. [{x} DAMAGE, -2 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: random(28, 34), attackType: AttackTypes.Regular },
                statuses: { killingMachine: { modifier: -3 } },
                description: 'Take {x} DAMAGE from enemy. -3 KILLING MACHINE.',
                bark: 'Wow, okay. That hurt. A LOT. [{x} DAMAGE, -3 KILLING MACHINE]',
                infoText: 'While KILLING MACHINE is active, deal +X damage.',
            },
            enemy: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}

export const DIG_IN_CARD: Card = {
    id: 'DIG_IN_CARD',
    key: 'DIG_IN_CARD',
    title: 'DIG IN',
    identity: CardIdentity.Utility,
    storeDescription: '+/- IN COVER',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: '+0 IN COVER.',
                bark: 'Okay maybe you’ll be able to hit me now. [+0 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: '+0 IN COVER.',
                bark: 'Okay maybe you’ll be able to hit me now. [+0 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: '+0 IN COVER',
                bark: 'Okay maybe you’ll be able to hit me now. [+0 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: 1 } },
                description: '+1 IN COVER',
                bark: 'Try and hit me now! [+1 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: 2 } },
                description: '+2 IN COVER',
                bark: 'Try and hit me now! [+2 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { inCover: { modifier: 3 } },
                description: '+3 IN COVER',
                bark: 'Try and hit me now! [+3 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
        },
    },
}

export const SURPRESSIVE_FIRE_CARD: Card = {
    id: 'SURPRESSIVE_FIRE_CARD',
    key: 'SURPRESSIVE_FIRE_CARD',
    title: 'SURPRESSIVE FIRE',
    identity: CardIdentity.EnemyAttack,
    storeDescription: '',
    cost: { amount: 0, type: 'money' },
    tier: Tiers.One,
    isTempCard: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                description: '+0 SUPPRESSED',
                bark: 'That sniper needs to work on their aim… [+0 SUPPRESSED]',
                infoText: 'While SUPPRESSED and IN COVER are both active, you cannot attack.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                description: '+0 SUPPRESSED',
                bark: 'That sniper needs to work on their aim… [+0 SUPPRESSED]',
                infoText: 'While SUPPRESSED and IN COVER are both active, you cannot attack.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                description: '+0 SUPPRESSED',
                bark: 'That sniper needs to work on their aim… [+0 SUPPRESSED]',
                infoText: 'While SUPPRESSED and IN COVER are both active, you cannot attack.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                statuses: { suppressed: { modifier: 1 } },
                description: '+1 SUPPRESSED',
                bark: 'Yeah, I’m gonna stay in this here cover for now [+1 SUPPRESSED]',
                infoText: 'While SUPPRESSED and IN COVER are both active, you cannot attack.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                statuses: { suppressed: { modifier: 2 } },
                description: '+2 SUPPRESSED.',
                bark: 'Yeah, I’m gonna stay in this here cover for now [+2 SUPPRESSED]',
                infoText: 'While SUPPRESSED and IN COVER are both active, you cannot attack.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                statuses: { suppressed: { modifier: 3 } },
                description: '+3 SUPPRESSED.',
                bark: 'Yeah, I’m gonna stay in this here cover for now [+3 SUPPRESSED]',
                infoText: 'While SUPPRESSED and IN COVER are both active, you cannot attack.',
            },
        },
    },
}

export const GALLIMIMUS_CARDS = {
    attack: SNIPER_SHOT_CARD,
    defense: DIG_IN_CARD,
    special: SURPRESSIVE_FIRE_CARD,
}
