import { EffectLevels, Card, CardIdentity, Tiers } from '@/types'

export const SHIELD_OVERLOAD_CARD: Card = {
    id: 'SHIELD_OVERLOAD_CARD',
    key: 'SHIELD_OVERLOAD_CARD',
    title: 'SHIELD OVERLOAD',
    identity: CardIdentity.Attack,
    storeDescription: 'If enemy shield is at 100%, reduce it.',
    cost: { amount: 200, type: 'money' },
    tier: Tiers.Two,
    effects: {
        [EffectLevels.DeadlyEffect]: {
            enemy: {
                stats: {
                    shield: {
                        modifier: -75,
                        isPercentage: true,
                        additionalMods: { shieldOverload: true },
                    },
                },
                description: 'If enemy SHIELD is at 100%, reduce it by 75%.',
                bark: 'Hey! I needed that! [Reduce enemy SHIELD].',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageEffect]: {
            enemy: {
                stats: {
                    shield: {
                        modifier: -50,
                        isPercentage: true,
                        additionalMods: { shieldOverload: true },
                    },
                },
                description: 'If enemy SHIELD is at 100%, reduce it by 50%.',
                bark: 'Hey! I needed that! [Reduce enemy SHIELD].',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.WeakEffect]: {
            enemy: {
                stats: {
                    shield: {
                        modifier: -25,
                        isPercentage: true,
                        additionalMods: { shieldOverload: true },
                    },
                },
                description: 'If enemy SHIELD is at 100%, reduce it by 25%.',
                bark: 'Hey! I needed that! [Reduce enemy SHIELD].',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },

        [EffectLevels.WeakNegativeEffect]: {
            enemy: {
                description: 'If enemy SHIELD is at 100%, reduce it by 0.',
                bark: 'Pfff, nice try [Reduce enemy SHIELD].',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.AverageNegativeEffect]: {
            player: {
                stats: {
                    shield: {
                        modifier: -25,
                        isPercentage: true,
                        additionalMods: { shieldOverload: true },
                    },
                },
                description: 'If SHIELD is at 100%, reduce it by 25%.',
                bark: 'Hey! I needed that! [Reduce enemy SHIELD].',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
        [EffectLevels.DeadlyNegativeEffect]: {
            player: {
                stats: {
                    shield: {
                        modifier: -50,
                        isPercentage: true,
                        additionalMods: { shieldOverload: true },
                    },
                },
                description: 'If SHIELD is at 100%, reduce it by 50%.',
                bark: 'Hey! I needed that! [Reduce enemy SHIELD].',
                infoText:
                    'SHIELD blocks incoming damage. Your SHIELD regenerates at the end of combat encounters.',
            },
        },
    },
}
export const SHIELD_OVERLOAD_CARD_02 = {
    ...SHIELD_OVERLOAD_CARD,
    id: 'SHIELD_OVERLOAD_CARD_02',
}
export const SHIELD_OVERLOAD_CARD_03 = {
    ...SHIELD_OVERLOAD_CARD,
    id: 'SHIELD_OVERLOAD_CARD_03',
}
export const SHIELD_OVERLOAD_CARD_04 = {
    ...SHIELD_OVERLOAD_CARD,
    id: 'SHIELD_OVERLOAD_CARD_04',
}
