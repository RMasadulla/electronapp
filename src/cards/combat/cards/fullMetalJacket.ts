import { AttackTypes, EffectLevels, Card, CardIdentity, Tiers, AnimationStates } from '@/types'

export const FULL_METAL_JACKET_CARD: Card = {
    id: 'FULL_METAL_JACKET_CARD',
    key: 'FULL_METAL_JACKET_CARD',
    title: 'FULL METAL JACKET',
    identity: CardIdentity.Support,
    storeDescription: 'Deal damage, ignores ARMORED',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 20, attackType: AttackTypes.IgnoresArmored },
                description: 'Deal {x} damage, ignores enemy ARMORED',
                bark: 'Why do I bother wearing this armor?! [{x} damage]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 14, attackType: AttackTypes.IgnoresArmored },
                description: 'Deal {x} damage, ignores enemy ARMORED',
                bark: 'Why do I bother wearing this armor?! [{x} damage]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 8, attackType: AttackTypes.IgnoresArmored },
                description: 'Deal {x} damage, ignores enemy ARMORED',
                bark: 'Why do I bother wearing this armor?! [{x} damage]',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 2, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'Not gonna do much with aim that bad [{x} DAMAGE].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 1, attackType: AttackTypes.Regular },
                description: 'Enemy partially blocks attack, deal {x} damage.',
                bark: 'Not gonna do much with aim that bad [{x} DAMAGE].',
                infoText: 'ARMORED reduces damage by X (stackable).',
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
                bark: 'Not gonna do much with aim that bad [0 DAMAGE].',
                infoText: 'ARMORED reduces damage by X (stackable).',
            },
            player: {
                description: '',
                characterAnimation: AnimationStates.Attack,
            },
        },
    },
}
export const FULL_METAL_JACKET_CARD_02 = {
    ...FULL_METAL_JACKET_CARD,
    id: 'FULL_METAL_JACKET_CARD_02',
}
export const FULL_METAL_JACKET_CARD_03 = {
    ...FULL_METAL_JACKET_CARD,
    id: 'FULL_METAL_JACKET_CARD_03',
}
export const FULL_METAL_JACKET_CARD_04 = {
    ...FULL_METAL_JACKET_CARD,
    id: 'FULL_METAL_JACKET_CARD_04',
}
