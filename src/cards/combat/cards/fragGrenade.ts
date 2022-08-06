import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const FRAG_GRENADE_CARD: Card = Object.freeze({
    id: 'FRAG_GRENADE_CARD',
    key: 'FRAG_GRENADE_CARD',
    title: 'FRAG GRENADE',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal damage, - enemy IN COVER',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 24, attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -3 } },
                description: 'Deal {x} damage. -3 enemy IN COVER.',
                bark: 'Grenade in the hole! [{x} DAMAGE, -3 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                attack: { damage: 12, attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -2 } },
                description: 'Deal {x} damage. -2 enemy IN COVER.',
                bark: 'Grenade in the hole! [{x} DAMAGE, -2 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                attack: { damage: 6, attackType: AttackTypes.Regular },
                statuses: { inCover: { modifier: -1 } },
                description: 'Deal {x} damage. -1 enemy IN COVER.',
                bark: 'Grenade in the hole! [{x} DAMAGE, -1 IN COVER]',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                attack: { damage: 2, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'That’s all you can do? I barely felt that [{x} DAMAGE].',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                attack: { damage: 1, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'That’s all you can do? I barely felt that [{x} DAMAGE].',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                attack: { damage: 0, attackType: AttackTypes.Regular },
                description: 'Enemy blocks attack, deal 0 damage.',
                bark: 'That’s all you can do? I barely felt that [0 DAMAGE].',
                infoText: 'IN COVER reduces damage by 40%, for X rounds.',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const FRAG_GRENADE_CARD_02 = {
    ...FRAG_GRENADE_CARD,
    id: 'FRAG_GRENADE_CARD_02',
}
export const FRAG_GRENADE_CARD_03 = {
    ...FRAG_GRENADE_CARD,
    id: 'FRAG_GRENADE_CARD_03',
}
export const FRAG_GRENADE_CARD_04 = {
    ...FRAG_GRENADE_CARD,
    id: 'FRAG_GRENADE_CARD_04',
}
