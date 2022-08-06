import { EffectLevels, Card, CardIdentity, Tiers, AttackTypes, AnimationStates } from '@/types'

export const ENERGY_BLAST_CARD: Card = {
    id: 'ENERGY_BLAST_CARD',
    key: 'ENERGY_BLAST_CARD',
    title: 'ENERGY BLAST',
    identity: CardIdentity.Attack,
    storeDescription: 'Reduce shield to 0, deal damage equal to a percentage of lost shield.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.EnergyBlast },
                description: 'Reduce SHIELD to 0. Deal damage equal to 75% to SHIELD lost.',
                bark: 'AAGHH!!',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                stats: { shield: { modifier: 0 } },
                description: '',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.EnergyBlast },
                description: 'Reduce SHIELD to 0. Deal damage equal to 50% to SHIELD lost.',
                bark: 'AAGHH!!',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                stats: { shield: { modifier: 0 } },
                description: '',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.EnergyBlast },
                description: 'Reduce SHIELD to 0. Deal damage equal to 25% to SHIELD lost.',
                bark: 'AAGHH!!',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                stats: { shield: { modifier: 0 } },
                description: '',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.EnergyBlast },
                description:
                    'Reduce SHIELD to 0. Enemy partially blocks attack, deal damage equal to 10% to SHIELD lost.',
                bark: 'AAGHH!!',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                stats: { shield: { modifier: 0 } },
                description: '',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.EnergyBlast },
                description:
                    'Reduce SHIELD to 0. Enemy partially blocks attack, deal damage equal to 5% to SHIELD lost.',
                bark: 'AAGHH!!',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                stats: { shield: { modifier: 0 } },
                description: '',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            enemy: {
                characterAnimation: AnimationStates.Hit,
                attack: { damage: 0, attackType: AttackTypes.EnergyBlast },
                description: 'Reduce SHIELD to 0. Enemy blocks attack, deal 0 damage.',
                bark: 'AAGHH!!',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
            player: {
                characterAnimation: AnimationStates.Attack,
                stats: { shield: { modifier: 0 } },
                description: '',
            },
        },
    },
}
export const ENERGY_BLAST_CARD_02 = {
    ...ENERGY_BLAST_CARD,
    id: 'ENERGY_BLAST_CARD_02',
}
export const ENERGY_BLAST_CARD_03 = {
    ...ENERGY_BLAST_CARD,
    id: 'ENERGY_BLAST_CARD_03',
}
export const ENERGY_BLAST_CARD_04 = {
    ...ENERGY_BLAST_CARD,
    id: 'ENERGY_BLAST_CARD_04',
}
