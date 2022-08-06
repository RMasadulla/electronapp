import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const STANDARD_ISSUE_RIFLE_CARD: Card = Object.freeze({
    id: 'STANDARD_ISSUE_RIFLE_CARD',
    key: 'STANDARD_ISSUE_RIFLE_CARD',
    title: 'S.I.R.',
    identity: CardIdentity.Attack,
    storeDescription: 'Deal damage',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 20, attackType: AttackTypes.Regular },
                description: 'Deal {x} damage.',
                bark: 'Under fire from the enemy! They got me good! [{x} DAMAGE]',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 15, attackType: AttackTypes.Regular },
                description: 'Deal {x} damage.',
                bark: 'Under fire from the enemy! They got me good! [{x} DAMAGE]',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 10, attackType: AttackTypes.Regular },
                description: 'Deal {x} damage.',
                bark: 'Under fire from the enemy! They got me good! [{x} DAMAGE]',
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
                bark: 'Not gonna do much with aim that bad [{x} DAMAGE].',
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
                description: 'Enemy partially blocks attack, {x} damage.',
                bark: 'Not gonna do much with aim that bad [{x} DAMAGE].',
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
                description: 'Enemy blocks attack, 0 damage.',
                bark: 'Not gonna do much with aim that bad [0 DAMAGE].',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
})
export const STANDARD_ISSUE_RIFLE_CARD_02 = {
    ...STANDARD_ISSUE_RIFLE_CARD,
    id: 'STANDARD_ISSUE_RIFLE_CARD_02',
}
export const STANDARD_ISSUE_RIFLE_CARD_03 = {
    ...STANDARD_ISSUE_RIFLE_CARD,
    id: 'STANDARD_ISSUE_RIFLE_CARD_03',
}
export const STANDARD_ISSUE_RIFLE_CARD_04 = {
    ...STANDARD_ISSUE_RIFLE_CARD,
    id: 'STANDARD_ISSUE_RIFLE_CARD_04',
}
