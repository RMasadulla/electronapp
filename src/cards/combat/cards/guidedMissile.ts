import { AttackTypes, EffectLevels, Card, CardIdentity, Tiers, AnimationStates } from '@/types'

export const GUIDED_MISSILE_CARD: Card = {
    id: 'GUIDED_MISSILE_CARD',
    key: 'GUIDED_MISSILE_CARD',
    title: 'GUIDED MISSILE',
    identity: CardIdentity.Support,
    storeDescription: 'Deal damage, ignores IN COVER',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 20, attackType: AttackTypes.IgnoresInCover },
                description: 'Deal {x} damage, ignores enemy IN COVER',
                bark: 'There’s nowhere to hide! [{x} damage]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 14, attackType: AttackTypes.IgnoresInCover },
                description: 'Deal {x} damage, ignores enemy IN COVER',
                bark: 'There’s nowhere to hide! [{x} damage]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 8, attackType: AttackTypes.IgnoresInCover },
                description: 'Deal {x} damage, ignores enemy IN COVER',
                bark: 'There’s nowhere to hide! [{x} damage]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 4, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'Might need to upgrade those missile systems… [{x} DAMAGE].',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
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
                bark: 'Might need to upgrade those missile systems… [{x} DAMAGE].',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
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
                bark: 'Might need to upgrade those missile systems… [0 DAMAGE].',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}
export const GUIDED_MISSILE_CARD_02 = {
    ...GUIDED_MISSILE_CARD,
    id: 'GUIDED_MISSILE_CARD_02',
}
export const GUIDED_MISSILE_CARD_03 = {
    ...GUIDED_MISSILE_CARD,
    id: 'GUIDED_MISSILE_CARD_03',
}
export const GUIDED_MISSILE_CARD_04 = {
    ...GUIDED_MISSILE_CARD,
    id: 'GUIDED_MISSILE_CARD_04',
}
