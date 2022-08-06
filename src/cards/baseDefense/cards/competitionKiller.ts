import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const COMPETITION_KILLER_CARD: Card = {
    id: 'COMPETITION_KILLER_CARD',
    key: 'COMPETITION_KILLER_CARD',
    title: 'COMPETITION KILLER',
    identity: CardIdentity.Utility,
    storeDescription: '+/- ANTI-AIR',
    cost: { amount: 200, type: 'supplies' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            player: {
                stats: {
                    money: { modifier: 30, additionalMods: { competitionKiller: true } },
                },
                description: '+$30 for each BASE ATTACKER in your BASE DEFENSE deck.',
                infoText:
                    'Every round of a BASE DEFENSE instance, 1 BASE ATTACKER will be injected into your deck.',
            },
        },
        [EffectLevels.AverageEffect]: {
            player: {
                stats: {
                    money: { modifier: 20, additionalMods: { competitionKiller: true } },
                },
                description: '+$20 for each BASE ATTACKER in your BASE DEFENSE deck.',
                infoText:
                    'Every round of a BASE DEFENSE instance, 1 BASE ATTACKER will be injected into your deck.',
            },
        },
        [EffectLevels.WeakEffect]: {
            player: {
                stats: {
                    money: { modifier: 10, additionalMods: { competitionKiller: true } },
                },
                description: '+$10 for each BASE ATTACKER in your BASE DEFENSE deck.',
                infoText:
                    'Every round of a BASE DEFENSE instance, 1 BASE ATTACKER will be injected into your deck.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            player: {
                stats: {
                    money: { modifier: -10, additionalMods: { competitionKiller: true } },
                },
                description: '-$10 for each BASE ATTACKER in your BASE DEFENSE deck.',
                infoText:
                    'Every round of a BASE DEFENSE instance, 1 BASE ATTACKER will be injected into your deck.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: {
                    money: { modifier: -20, additionalMods: { competitionKiller: true } },
                },
                description: '-$20 for each BASE ATTACKER in your BASE DEFENSE deck.',
                infoText:
                    'Every round of a BASE DEFENSE instance, 1 BASE ATTACKER will be injected into your deck.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: {
                    money: { modifier: -30, additionalMods: { competitionKiller: true } },
                },
                description: '-$30 for each BASE ATTACKER in your BASE DEFENSE deck.',
                infoText:
                    'Every round of a BASE DEFENSE instance, 1 BASE ATTACKER will be injected into your deck.',
            },
        },
    },
}
export const COMPETITION_KILLER_CARD_02 = {
    ...COMPETITION_KILLER_CARD,
    id: 'COMPETITION_KILLER_CARD_02',
}
export const COMPETITION_KILLER_CARD_03 = {
    ...COMPETITION_KILLER_CARD,
    id: 'COMPETITION_KILLER_CARD_03',
}
export const COMPETITION_KILLER_CARD_04 = {
    ...COMPETITION_KILLER_CARD,
    id: 'COMPETITION_KILLER_CARD_04',
}
