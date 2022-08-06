import { EffectLevels, Card, EnemyVariants, CardIdentity, Tiers } from '@/types'

export const COMBAT_ENCOUNTER_CARD: Card = {
    id: 'COMBAT_ENCOUNTER_CARD',
    key: 'COMBAT_ENCOUNTER_CARD',
    title: 'COMBAT ENCOUNTER',
    identity: CardIdentity.Encounter,
    storeDescription: 'Trigger 1 combat encounter, gain supplies.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.One,
    transitionToCombat: true,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: { supplies: { modifier: 400 } },
                combatEncounter: { enemyVariant: EnemyVariants.Deadly },
                description: 'Fight a **DEADLY** enemy, +400 SUPPLIES.',
                bark: 'Time to fight! [fight a DEADLY enemy, +400 SUPPLIES]',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: { supplies: { modifier: 250 } },
                combatEncounter: { enemyVariant: EnemyVariants.Average },
                description: 'Fight an **AVERAGE** enemy. +250 SUPPLIES',
                bark: 'Time to fight! [fight a AVERAGE enemy, +250 SUPPLIES]',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: { supplies: { modifier: 100 } },
                combatEncounter: { enemyVariant: EnemyVariants.Weak },
                description: 'Fight a **WEAK** enemy. +100 SUPPLIES',
                bark: 'Time to fight! [fight a WEAK enemy, +100 SUPPLIES]',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                combatEncounter: { enemyVariant: EnemyVariants.Weak },
                description: 'Fight a **WEAK** enemy.',
                bark: 'Time to fight! [fight a WEAK enemy]',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                combatEncounter: { enemyVariant: EnemyVariants.Average },
                description: 'Fight an **AVERAGE** enemy.',
                bark: 'Time to fight! [fight an AVERAGE enemy]',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                combatEncounter: { enemyVariant: EnemyVariants.Deadly },
                description: 'Fight a **DEADLY** enemy.',
                bark: 'Time to fight! [fight a DEADLY enemy]',
            },
        },
    },
}
export const COMBAT_ENCOUNTER_CARD_02 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_02',
}
export const COMBAT_ENCOUNTER_CARD_03 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_03',
}
export const COMBAT_ENCOUNTER_CARD_04 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_04',
}
export const COMBAT_ENCOUNTER_CARD_05 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_05',
}
export const COMBAT_ENCOUNTER_CARD_06 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_06',
}
export const COMBAT_ENCOUNTER_CARD_07 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_07',
}
export const COMBAT_ENCOUNTER_CARD_08 = {
    ...COMBAT_ENCOUNTER_CARD,
    id: 'COMBAT_ENCOUNTER_CARD_08',
}
