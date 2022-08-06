import produce, { castDraft } from 'immer'
import { Immutable, WritableDraft } from 'immer/dist/types/types-external'
import { isEmpty, isNil, uniqBy, uniqueId } from 'lodash'
import { CardEffectsInvisibleStatusFields, InvisibleStatuses } from '../types'

import {
    Slots,
    Base,
    Card,
    Statuses,
    Stats,
    AttackTypes,
    CardEffectFields,
    CardEffectsStatFields,
    Adjustment,
    CardEffectsStatusFields,
    CardEffects,
    Bark,
    Player,
    EnemyVariantFields,
    EffectLevels,
    Enemy,
} from '@/types'

export const shuffleDeck = <T>(deck: Array<T>) =>
    deck
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

export const hexToRGBA = (hexCode: string, opacity = 1) => {
    let hex = hexCode.replace('#', '')

    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
    }

    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)

    return `rgba(${r},${g},${b},${opacity / 1})`
}

export const arrayMoveElement = (input: Array<Card | null>, from: number, to: number) => {
    const copy = Array.from(input)
    return produce(copy, draft => {
        const [el] = castDraft(copy.splice(from, 1))
        draft.splice(to, 0, el)
    })
}

export const notEmpty = <T>(value: T | null | undefined): value is T => !isNil(value)

// Let's say you have two numbers, 40 and 30.

//   30/40*100 = 75.
//   So 30 is 75% of 40.

//   40/30*100 = 133.
//   So 40 is 133% of 30.

// The percentage increase from 30 to 40 is:
//   (40-30)/30 * 100 = 33%

// The percentage decrease from 40 to 30 is:
//   (40-30)/40 * 100 = 25%.

// These calculations hold true whatever your two numbers.

export const isPercent = (input: string) => /^(\d+|(\.\d+))(\.\d+)?%$/.test(input)
export const getPercentage = (total: number, percentage: number) => (percentage / 100) * total

// x and y. What percentage is x of y?
// Let's say you have two numbers, 40 and 30.
//   30/40*100 = 75.
//   So 30 is 75% of 40.
export const getPercentageBetweenTwoNumbers = (baseNumber: number, otherNumber: number) =>
    (otherNumber / baseNumber) * 100
export const formatPercent = (number: number) => `${number}%`

export const getEntityHealthPoints = (maxHp: number, hp: number): string => {
    const percent = getPercentageBetweenTwoNumbers(maxHp, hp)
    return percent > 100 ? '100%' : formatPercent(percent)
}

export const calcStatValueByPercentage = (cur: number, modifier: number) => {
    const percentage = getPercentage(cur, modifier)
    return Math.max(0, Math.ceil(cur + percentage))
}

export const calcStatValue = (cur: number, modifier: number, isPercentage?: boolean) => {
    if (isPercentage) {
        return calcStatValueByPercentage(cur, modifier)
    }
    const result = cur + modifier
    return Math.ceil(result) || 0
}

export const flipCoin = (): boolean => !!(Math.floor(Math.random() * 2) === 0)

export const updateSlots = (slots: Slots, updatedHand: Array<Card | null>) => {
    const [cardOne, cardTwo, cardThree, cardFour, cardFive] = updatedHand
    return produce(slots, draft => {
        draft[0] = { type: draft[0].type, card: cardOne }
        draft[1] = { type: draft[1].type, card: cardTwo }
        draft[2] = { type: draft[2].type, card: cardThree }
        draft[3] = { type: draft[3].type, card: cardFour }
        draft[4] = { type: draft[4].type, card: cardFive }
    })
}

export const getSupportPoints = (baseHp: number) => Math.floor(baseHp / 100)

type CalculatedType = { baseDamage: number; calculatedDamage: number; damageAffectedBy: string[] }

export const calculatePlayerAttackDamage = (
    player: Player,
    enemy: EnemyVariantFields,
    damage: number,
    attackType: AttackTypes,
    slotType: EffectLevels,
    baseHp?: number,
): { baseDamage: number; calculatedDamage: number; damageAffectedBy: string[] } => {
    const initialObj: CalculatedType = Object.freeze({
        baseDamage: damage,
        calculatedDamage: damage,
        damageAffectedBy: [],
    })
    return produce(initialObj, draft => {
        if (attackType === AttackTypes.Support && !isNil(baseHp)) {
            const supplyPoints = getSupportPoints(baseHp)
            draft.damageAffectedBy.push(`${supplyPoints} SUPPLY POINTS`)
            draft.calculatedDamage *= supplyPoints
            draft.baseDamage *= supplyPoints
        }

        if (attackType === AttackTypes.EnergyBlast && player.stats.shield) {
            const percentage =
                slotType === EffectLevels.DeadlyEffect
                    ? 75
                    : slotType === EffectLevels.AverageEffect
                    ? 50
                    : slotType === EffectLevels.WeakEffect
                    ? 25
                    : slotType === EffectLevels.WeakNegativeEffect
                    ? 10
                    : slotType === EffectLevels.AverageNegativeEffect
                    ? 5
                    : slotType === EffectLevels.DeadlyNegativeEffect
                    ? 0
                    : 0
            draft.calculatedDamage = calcStatValueByPercentage(player.stats.shield, percentage)
        }

        // inCover reduces damage by 40% for x rounds
        if (enemy.statuses.inCover?.value && attackType !== AttackTypes.IgnoresInCover) {
            draft.damageAffectedBy.push('IN COVER (enemy)')
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, -40)
        }

        // armored reduces damage by x
        if (enemy.statuses.armored?.value && attackType !== AttackTypes.IgnoresArmored) {
            draft.damageAffectedBy.push('ARMORED (enemy)')
            draft.calculatedDamage -= enemy.statuses.armored.value
        }

        // // Special defense debuffs
        // overheated: if armored, can't deal damage this turn (lasts 1 turn)
        if (
            player.statuses.overheated?.value &&
            player.statuses.armored?.value &&
            attackType !== AttackTypes.FlamingBile
        ) {
            draft.damageAffectedBy.push('OVERHEATED')
            draft.calculatedDamage = 0
        }

        // suppressed: if in inCover, can't deal damage this turn (lasts 1 turn)
        if (
            player.statuses.suppressed?.value &&
            player.statuses.inCover?.value &&
            attackType !== AttackTypes.IllogicalCourage
        ) {
            draft.damageAffectedBy.push('SUPPRESSED')
            draft.calculatedDamage = 0
        }

        // dazed: deals 30% less damage this turn
        if (player.statuses.dazed?.value && attackType !== AttackTypes.DizziedStrike) {
            draft.damageAffectedBy.push('DAZED')
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, -30)
        }

        // // misc buffs/debuffs
        // enraged: deal and take 20% more calculatedDamage
        if (player.statuses.enraged?.value || enemy.statuses.enraged?.value) {
            draft.damageAffectedBy.push(
                player.statuses.enraged?.value
                    ? 'ENRAGED'
                    : enemy.statuses.enraged?.value
                    ? 'ENRAGED (enemy)'
                    : 'ENRAGED',
            )
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, 20)
        }

        // panicked: deal and take 20% less calculatedDamage
        if (player.statuses.panicked?.value || enemy.statuses.panicked?.value) {
            draft.damageAffectedBy.push(
                player.statuses.panicked?.value
                    ? 'PANICKED'
                    : enemy.statuses.panicked?.value
                    ? 'PANICKED (enemy)'
                    : 'PANICKED',
            )
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, -20)
        }

        // bleeding: take 20% more damage each turn
        if (enemy.statuses.bleeding?.value) {
            draft.damageAffectedBy.push('BLEEDING (enemy)')
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, 20)
        }

        // LASER SWORD card effect
        if (attackType === AttackTypes.LaserSword && enemy.stats.shield) {
            draft.calculatedDamage *= 2
        }

        if (attackType === AttackTypes.Flamethrower && enemy.stats.shield) {
            draft.calculatedDamage = 0
        }

        // CRUEL BLADE card effect
        if (attackType === AttackTypes.CruelBlade && enemy.stats.hp < enemy.stats.maxHp / 2) {
            draft.calculatedDamage *= 2
        }
        if (
            attackType === AttackTypes.CruelBlade &&
            enemy.stats.hp < enemy.stats.maxHp / 2 &&
            (slotType === EffectLevels.WeakNegativeEffect ||
                slotType === EffectLevels.AverageNegativeEffect ||
                slotType === EffectLevels.DeadlyNegativeEffect)
        ) {
            draft.calculatedDamage /= 2
        }

        if (player.statuses.killingMachine?.value) {
            draft.damageAffectedBy.push('KILLING MACHINE')
            draft.calculatedDamage += player.statuses.killingMachine.value
        }

        if (attackType === AttackTypes.IllogicalCourage && !player.statuses.suppressed?.value) {
            draft.calculatedDamage = 0
        }

        if (attackType === AttackTypes.DizziedStrike && !player.statuses.dazed?.value) {
            draft.calculatedDamage = 0
        }

        if (attackType === AttackTypes.FlamingBile && !player.statuses.overheated?.value) {
            draft.calculatedDamage = 0
        }

        if (player.invisibleStatuses.atomicRage?.value && player.statuses.enraged?.value) {
            draft.damageAffectedBy.push('ATOMIC RAGE')
            draft.calculatedDamage += 10
        }

        const isSmokeActive = player.statuses.smoked?.value || enemy.statuses.smoked?.value
        // smoked: prevent all damage this turn
        if (isSmokeActive && !player.statuses.thermalSights?.value) {
            draft.damageAffectedBy.push(
                player.statuses.smoked?.value
                    ? 'SMOKED'
                    : enemy.statuses.smoked?.value
                    ? 'SMOKED (enemy)'
                    : 'SMOKED',
            )
            draft.calculatedDamage = 0
        }
        if (isSmokeActive && player.statuses.thermalSights?.value) {
            draft.damageAffectedBy.push('THERMAL SIGHTS')
        }

        draft.baseDamage = Math.ceil(draft.baseDamage)
        draft.calculatedDamage = Math.max(0, Math.ceil(draft.calculatedDamage))
    })
}

export const calculateEnemyAttackDamage = (
    enemy: EnemyVariantFields,
    player: Player,
    damage: number,
    attackType: AttackTypes,
    slotType: EffectLevels,
    baseHp?: number,
): { baseDamage: number; calculatedDamage: number; damageAffectedBy: string[] } => {
    const initialObj: CalculatedType = Object.freeze({
        baseDamage: damage,
        calculatedDamage: damage,
        damageAffectedBy: [],
    })
    return produce(initialObj, draft => {
        if (attackType === AttackTypes.Support && !isNil(baseHp)) {
            const supplyPoints = getSupportPoints(baseHp)
            draft.damageAffectedBy.push(`${supplyPoints} SUPPLY POINTS`)
            draft.calculatedDamage *= supplyPoints
            draft.baseDamage *= supplyPoints
        }

        if (attackType === AttackTypes.EnergyBlast && enemy.stats.shield) {
            const percentage =
                slotType === EffectLevels.DeadlyEffect
                    ? 75
                    : slotType === EffectLevels.AverageEffect
                    ? 50
                    : slotType === EffectLevels.WeakEffect
                    ? 25
                    : slotType === EffectLevels.WeakNegativeEffect
                    ? 10
                    : slotType === EffectLevels.AverageNegativeEffect
                    ? 5
                    : slotType === EffectLevels.DeadlyNegativeEffect
                    ? 0
                    : 0
            draft.calculatedDamage = calcStatValueByPercentage(enemy.stats.shield, percentage)
        }

        // inCover reduces damage by 40% for x rounds
        if (player.statuses.inCover?.value && attackType !== AttackTypes.IgnoresInCover) {
            draft.damageAffectedBy.push('IN COVER')
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, -40)
        }

        // armored reduces damage by x
        if (
            player.statuses.armored?.value &&
            attackType !== AttackTypes.IgnoresArmored &&
            !player.stats.shield
        ) {
            draft.damageAffectedBy.push('ARMORED')
            draft.calculatedDamage -= player.statuses.armored.value
        }

        // // Special defense debuffs
        // overheated if armored, can't deal damage this turn (lasts 1 turn)
        if (
            enemy.statuses.overheated?.value &&
            enemy.statuses.armored?.value &&
            attackType !== AttackTypes.FlamingBile
        ) {
            draft.damageAffectedBy.push('OVERHEATED (enemy)')
            draft.calculatedDamage = 0
        }

        // suppressed if in inCover, can't deal damage this turn (lasts 1 turn)
        if (
            enemy.statuses.suppressed?.value &&
            enemy.statuses.inCover?.value &&
            attackType !== AttackTypes.IllogicalCourage
        ) {
            draft.damageAffectedBy.push('SUPPRESSED (enemy)')
            draft.calculatedDamage = 0
        }

        // dazed: deals 30% less damage this turn
        if (enemy.statuses.dazed?.value && attackType !== AttackTypes.DizziedStrike) {
            draft.damageAffectedBy.push('DAZED')
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, -30)
        }

        // // misc buffs/debuffs
        // enraged deal and take 20% more calculatedDamage
        if (enemy.statuses.enraged?.value || player.statuses.enraged?.value) {
            draft.damageAffectedBy.push(
                player.statuses.enraged?.value
                    ? 'ENRAGED'
                    : enemy.statuses.enraged?.value
                    ? 'ENRAGED (enemy)'
                    : 'ENRAGED',
            )
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, 20)
        }

        // panicked: deal and take 20% less calculatedDamage
        if (enemy.statuses.panicked?.value || player.statuses.panicked?.value) {
            draft.damageAffectedBy.push(
                player.statuses.panicked?.value
                    ? 'PANICKED'
                    : enemy.statuses.panicked?.value
                    ? 'PANICKED (enemy)'
                    : 'PANICKED',
            )
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, -20)
        }

        // bleeding: take 30% more damage each turn
        if (player.statuses.bleeding?.value) {
            draft.damageAffectedBy.push('BLEEDING')
            draft.calculatedDamage = calcStatValueByPercentage(draft.calculatedDamage, 30)
        }

        // LASER SWORD card effect
        if (attackType === AttackTypes.LaserSword && player.stats.shield) {
            draft.calculatedDamage *= 2
        }

        // FLAMETHROWER card effect
        if (attackType === AttackTypes.Flamethrower && player.stats.shield) {
            draft.calculatedDamage = 0
        }

        // CRUEL BLADE card effect
        if (attackType === AttackTypes.CruelBlade && player.stats.hp < player.stats.maxHp / 2) {
            draft.calculatedDamage *= 2
        }
        if (
            attackType === AttackTypes.CruelBlade &&
            player.stats.hp < player.stats.maxHp / 2 &&
            (slotType === EffectLevels.WeakNegativeEffect ||
                slotType === EffectLevels.AverageNegativeEffect ||
                slotType === EffectLevels.DeadlyNegativeEffect)
        ) {
            draft.calculatedDamage /= 2
        }

        if (enemy.statuses.killingMachine?.value) {
            draft.damageAffectedBy.push('KILLING MACHINE (enemy)')
            draft.calculatedDamage += enemy.statuses.killingMachine.value
        }

        if (attackType === AttackTypes.IllogicalCourage && !enemy.statuses.suppressed?.value) {
            draft.calculatedDamage = 0
        }

        if (attackType === AttackTypes.DizziedStrike && !player.statuses.dazed?.value) {
            draft.calculatedDamage = 0
        }

        if (attackType === AttackTypes.FlamingBile && !player.statuses.overheated?.value) {
            draft.calculatedDamage = 0
        }

        if (enemy.invisibleStatuses.atomicRage?.value && enemy.statuses.enraged?.value) {
            draft.damageAffectedBy.push('ATOMIC RAGE')
            draft.calculatedDamage += 10
        }

        const isSmokeActive = player.statuses.smoked?.value || enemy.statuses.smoked?.value
        // smoked: prevent all damage this turn
        if (isSmokeActive && !enemy.statuses.thermalSights?.value) {
            draft.damageAffectedBy.push(
                player.statuses.smoked?.value
                    ? 'SMOKED'
                    : enemy.statuses.smoked?.value
                    ? 'SMOKED (enemy)'
                    : 'SMOKED',
            )
            draft.calculatedDamage = 0
        }
        if (isSmokeActive && enemy.statuses.thermalSights?.value) {
            draft.damageAffectedBy.push('THERMAL SIGHTS')
        }

        draft.baseDamage = Math.ceil(draft.baseDamage)
        draft.calculatedDamage = Math.max(0, Math.ceil(draft.calculatedDamage))
    })
}

export const calculateBaseAttackerDamage = (
    baseStats: Stats,
    baseStatuses: Statuses,
    damage: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    attackType: AttackTypes,
): { baseDamage: number; calculatedDamage: number; damageAffectedBy: string[] } => {
    const initialObj: CalculatedType = Object.freeze({
        baseDamage: damage,
        calculatedDamage: damage,
        damageAffectedBy: [],
    })
    return produce(initialObj, draft => {
        // badWeather // enemy attacks do 50% less damage for one round, 50% less repairs
        if (baseStatuses.badWeather?.value) {
            draft.damageAffectedBy.push('BAD WEATHER')
            draft.calculatedDamage /= 2
        }

        // protected // take 50% less damage
        if (baseStatuses.protected?.value) {
            draft.damageAffectedBy.push('PROTECTED')
            draft.calculatedDamage /= 2
        }
    })
}

export const getCalculatedBaseStats = (base: Base) => {
    return produce(base, draft => {
        draft.stats.personnel = draft.stats.personnel || 0
        draft.stats.morale = draft.stats.morale || 0
        draft.stats.fortifications = draft.stats.fortifications || 0

        draft.stats.antiAir = draft.stats.antiAir || 0

        draft.stats.antiGround = draft.stats.antiGround || 0
    })
}

export const randomNumber = (min: number, max: number) => {
    const x = Math.ceil(min)
    const y = Math.floor(max)
    return Math.floor(Math.random() * (y - x + 1)) + x
}

export const getCardTitle = (effects: CardEffects, cardTitle: string) => {
    const cardEffects: {
        target: keyof CardEffects
        targetEffects: CardEffectFields
    }[] = Object.entries(effects).map(([key, value]) => ({
        target: key as keyof CardEffects,
        targetEffects: value,
    }))
    const alternativeTitle = cardEffects.reduce((altTitle, cur) => {
        return cur.targetEffects.alternativeTitle || altTitle
    }, '')
    return alternativeTitle || cardTitle
}

export const renderCardDescription = (
    effects: CardEffectFields,
    player: Player,
    enemy: Enemy,
    slotType: EffectLevels,
    baseHp?: number,
    target?: keyof CardEffects,
): { description: string; infoText: string } => {
    const enemyVariant = enemy.variants[enemy.variant]

    if (!effects.attack || isNil(effects.attack.damage)) {
        return { description: effects.description, infoText: effects.infoText || '' }
    }

    if (!enemyVariant.statuses || !player.statuses)
        return {
            description: effects.description.replace(/{x}/, effects.attack.damage.toString()),
            infoText: effects.infoText || '',
        }

    if (target === 'player') {
        const calculated = calculateEnemyAttackDamage(
            enemyVariant,
            player,
            effects.attack.damage,
            effects.attack.attackType,
            slotType,
            baseHp,
        )
        return {
            description: effects.description.replace(
                /{x}/,
                calculated.calculatedDamage.toString() || effects.attack.damage.toString(),
            ),
            infoText: !isEmpty(calculated.damageAffectedBy)
                ? `Damage affected by these statuses: ${calculated.damageAffectedBy.join(
                      ', ',
                  )}. ${`${effects.infoText || ''}`}`
                : effects.infoText || '',
        }
    }

    if (target === 'enemy') {
        const calculated = calculatePlayerAttackDamage(
            player,
            enemyVariant,
            effects.attack.damage,
            effects.attack.attackType,
            slotType,
            baseHp,
        )
        return {
            description: effects.description.replace(
                /{x}/,
                calculated.calculatedDamage.toString() || effects.attack.damage.toString(),
            ),
            infoText: !isEmpty(calculated.damageAffectedBy)
                ? `Damage affected by these statuses: ${calculated.damageAffectedBy.join(
                      ', ',
                  )}. ${`${effects.infoText || ''}`}`
                : effects.infoText || '',
        }
    }

    return {
        description: effects.description.replace(/{x}/, effects.attack.damage.toString()),
        infoText: effects.infoText || '',
    }
}

export const renderBaseCardDescription = (
    effects: CardEffectFields,
    baseStats: Stats,
    baseStatuses: Statuses,
): { description: string; infoText?: string } => {
    if (!effects.attack || isNil(effects.attack.damage) || !effects.attack.attackType) {
        return { description: effects.description, infoText: effects.infoText }
    }

    if (!baseStatuses)
        return {
            description: effects.description.replace(/{x}/, effects.attack.damage.toString()),
            infoText: effects.infoText,
        }

    const renderedValue = calculateBaseAttackerDamage(
        baseStats,
        baseStatuses,
        effects.attack.damage,
        effects.attack.attackType,
    )
    return {
        description: effects.description.replace(
            /{x}/,
            renderedValue.calculatedDamage.toString() || effects.attack.damage.toString(),
        ),
        infoText: !isEmpty(renderedValue.damageAffectedBy)
            ? `Damage affected by these statuses: ${renderedValue.damageAffectedBy.toString()} ${`${effects.infoText}`}`
            : effects.infoText,
    }
}

export const renderCardSoundEffect = (
    effects: CardEffectFields,
    slotType: EffectLevels,
    player?: Player,
    enemy?: EnemyVariantFields,
    target?: 'player' | 'enemy',
) => {
    if (!effects.bark) return ''
    if (!effects.attack || isNil(effects.attack.damage)) return effects.bark

    if (!enemy || !player) return effects.bark.replace(/{x}/, effects.attack.damage.toString())

    if (target === 'player') {
        const renderedValue = calculateEnemyAttackDamage(
            enemy,
            player,
            effects.attack.damage,
            effects.attack.attackType,
            slotType,
        ).calculatedDamage
        if (renderedValue) {
            return effects.bark.replace(/{x}/, renderedValue.toString())
        }
    }

    if (target === 'enemy') {
        const renderedValue = calculatePlayerAttackDamage(
            player,
            enemy,
            effects.attack.damage,
            effects.attack.attackType,
            slotType,
        ).calculatedDamage
        if (renderedValue) {
            return effects.bark.replace(/{x}/, renderedValue.toString())
        }
    }

    return effects.bark.replace(/{x}/, effects.attack.damage.toString())
}

export const renderBaseCardSoundEffect = (
    effects: CardEffectFields,
    baseStats: Stats,
    baseStatuses: Statuses,
) => {
    if (!effects.bark) return ''
    if (!effects.attack || isNil(effects.attack.damage) || !effects.attack.attackType)
        return effects.bark

    if (!baseStats || !baseStatuses)
        return effects.bark.replace(/{x}/, effects.attack.damage.toString())

    const renderedValue = calculateBaseAttackerDamage(
        baseStats,
        baseStatuses,
        effects.attack.damage,
        effects.attack.attackType,
    ).calculatedDamage
    if (renderedValue) {
        return effects.bark.replace(/{x}/, renderedValue.toString())
    }

    return effects.bark.replace(/{x}/, effects.attack.damage.toString())
}

export const handleStatChange = (value: number, maxValue: number) => {
    if (!value) return 0
    const roundedUp = Math.ceil(value)
    return Math.max(0, Math.min(roundedUp, maxValue))
}

export const getNewStatValue = (
    key: keyof Stats,
    value: Adjustment,
    draftStats: WritableDraft<Stats>,
): number => {
    const { modifier = 0, isPercentage = false } = value
    const cur = draftStats[key] || 0
    const next = calcStatValue(cur, modifier, isPercentage)
    return Math.max(0, Math.ceil(next))
}

export const applyCardEffectsToStats = (
    statEffects: CardEffectsStatFields,
    draftStats: WritableDraft<Stats>,
    baseHp?: number,
): WritableDraft<Stats> => {
    return produce(draftStats, draft => {
        if (statEffects.all) {
            const { modifier = 0, isPercentage = false } = statEffects.all
            Object.entries(draft).forEach(([key, value]) => {
                const curValue = value || 0
                draft[key as keyof Stats] = calcStatValue(curValue, modifier, isPercentage)
            })
        }

        if (statEffects.hp) {
            const multiplier = statEffects.hp.support && baseHp ? getSupportPoints(baseHp) : 1
            const hpAfterMultiplier = {
                ...statEffects.hp,
                modifier: statEffects.hp.modifier || 0 * multiplier,
            }
            const newHpValue = getNewStatValue('hp', hpAfterMultiplier, draft)
            draft.hp = handleStatChange(newHpValue, draft.maxHp)
        }

        if (statEffects.shield && !isNil(draft.shield) && !isNil(draft.maxShield)) {
            // Shield battery
            if (statEffects.shield.support) {
                const multiplier =
                    statEffects.shield.support && baseHp ? getSupportPoints(baseHp) : 1
                const modifier = statEffects.shield.modifier || 0
                const shieldAfterMultiplier = {
                    ...statEffects.shield,
                    modifier: modifier * multiplier,
                }
                const newShieldValue = getNewStatValue('shield', shieldAfterMultiplier, draft)
                console.log('SUPPORT: ', multiplier, shieldAfterMultiplier, newShieldValue)
                draft.shield = handleStatChange(newShieldValue, draft.maxShield)
            }

            // Shield overload
            if (
                statEffects.shield.additionalMods?.shieldOverload &&
                draft.shield === draft.maxShield
            ) {
                const newShieldValue = getNewStatValue('shield', statEffects.shield, draft)
                draft.shield = handleStatChange(newShieldValue, draft.maxShield)
            }

            // Regular shield effect
            if (!statEffects.shield.additionalMods?.shieldOverload && !statEffects.shield.support) {
                const newShieldValue = getNewStatValue('shield', statEffects.shield, draft)
                draft.shield = handleStatChange(newShieldValue, draft.maxShield)
            }
        }

        if (statEffects.supplies) {
            draft.gainedSupplies = getNewStatValue('gainedSupplies', statEffects.supplies, draft)
        }

        if (statEffects.gainedSupplies) {
            draft.gainedSupplies = getNewStatValue(
                'gainedSupplies',
                statEffects.gainedSupplies,
                draft,
            )
        }

        if (statEffects.money) {
            draft.gainedMoney = getNewStatValue('gainedMoney', statEffects.money, draft)
        }

        if (statEffects.gainedMoney) {
            draft.gainedMoney = getNewStatValue('gainedMoney', statEffects.gainedMoney, draft)
        }

        if (statEffects.personnel) {
            draft.personnel = getNewStatValue('personnel', statEffects.personnel, draft)
        }

        if (statEffects.morale) {
            draft.morale = getNewStatValue('morale', statEffects.morale, draft)
        }

        if (statEffects.fortifications) {
            draft.fortifications = getNewStatValue(
                'fortifications',
                statEffects.fortifications,
                draft,
            )
        }

        if (statEffects.antiAir) {
            draft.antiAir = getNewStatValue('antiAir', statEffects.antiAir, draft)
        }

        if (statEffects.antiGround) {
            draft.antiGround = getNewStatValue('antiGround', statEffects.antiGround, draft)
        }
    })
}

const getNewStatusValue = (
    key: keyof Statuses | keyof InvisibleStatuses,
    value: Adjustment,
    draftStatuses: WritableDraft<Statuses>,
): number => {
    const { modifier = 0, isPercentage = false } = value
    if (modifier === 0) return 0
    const curValue = draftStatuses[key]?.value || 0
    const newValue = calcStatValue(curValue, modifier, isPercentage)
    return Math.max(0, Math.ceil(newValue))
}

export const applyCardEffectsToStatuses = (
    statusEffects: CardEffectsStatusFields & CardEffectsInvisibleStatusFields,
    draftStatuses: WritableDraft<Statuses & InvisibleStatuses>,
    attack?: { damage: number; attackType: AttackTypes },
    stats?: Stats,
): WritableDraft<Statuses & InvisibleStatuses> => {
    return produce(draftStatuses, draft => {
        // damage reduces ARMORED status if SHIELD is BREACHED
        if (
            attack?.damage &&
            attack?.attackType !== AttackTypes.IgnoresArmored &&
            draft.armored.value &&
            !stats.shield
        ) {
            draft.armored.value = draft.armored.value - attack.damage || 0
        }

        if (statusEffects.armored && draft.armored) {
            draft.armored.value = getNewStatusValue('armored', statusEffects.armored, draft)
        }

        if (statusEffects.inCover && draft.inCover) {
            draft.inCover.value = getNewStatusValue('inCover', statusEffects.inCover, draft)
        }

        if (statusEffects.overheated && draft.overheated) {
            draft.overheated.value = getNewStatusValue(
                'overheated',
                statusEffects.overheated,
                draft,
            )
        }

        if (statusEffects.suppressed && draft.suppressed) {
            draft.suppressed.value = getNewStatusValue(
                'suppressed',
                statusEffects.suppressed,
                draft,
            )
        }

        if (statusEffects.dazed && draft.dazed) {
            draft.dazed.value = getNewStatusValue('dazed', statusEffects.dazed, draft)
        }

        if (statusEffects.enraged && draft.enraged) {
            draft.enraged.value = getNewStatusValue('enraged', statusEffects.enraged, draft)
        }

        if (statusEffects.panicked && draft.panicked) {
            draft.panicked.value = getNewStatusValue('panicked', statusEffects.panicked, draft)
        }

        if (statusEffects.bleeding && draft.bleeding) {
            draft.bleeding.value = getNewStatusValue('bleeding', statusEffects.bleeding, draft)
        }

        if (statusEffects.killingMachine && draft.killingMachine) {
            draft.killingMachine.value = getNewStatusValue(
                'killingMachine',
                statusEffects.killingMachine,
                draft,
            )
        }

        if (statusEffects.smoked && draft.smoked) {
            draft.smoked.value = getNewStatusValue('smoked', statusEffects.smoked, draft)
        }

        if (statusEffects.burning && draft.burning) {
            draft.burning.value = getNewStatusValue('burning', statusEffects.burning, draft)
        }

        if (statusEffects.badWeather && draft.badWeather) {
            draft.badWeather.value = getNewStatusValue(
                'badWeather',
                statusEffects.badWeather,
                draft,
            )
        }

        if (statusEffects.overwhelmed && draft.overwhelmed) {
            draft.overwhelmed.value = getNewStatusValue(
                'overwhelmed',
                statusEffects.overwhelmed,
                draft,
            )
        }

        if (statusEffects.protected && draft.protected) {
            draft.protected.value = getNewStatusValue('protected', statusEffects.protected, draft)
        }

        // PANIC BUTTON (INVISIBLE)
        // e.g. panicButton: { modifier: 3, additionalMods: { panicButtonShieldValue: -5 } },
        if (
            statusEffects.panicButton &&
            statusEffects.panicButton.additionalMods.panicButtonShieldValue
        ) {
            const { modifier } = statusEffects.panicButton
            draft.panicButton.duration = modifier
            draft.panicButton.value =
                statusEffects.panicButton.additionalMods.panicButtonShieldValue
        }
    })
}

export const updateBarks = (currentBarks: Bark[], newBark: string) => {
    if (!currentBarks) return []
    if (!newBark) return currentBarks
    return produce(currentBarks, draft => {
        if (draft.length === 3) draft.pop()
        draft.unshift({ id: uniqueId(), text: newBark })
    })
}

export const uniq = <T>(arr: Immutable<T[]>) => uniqBy(arr, 'id')

export const dec2hex = (dec: number) => {
    return dec.toString(16).padStart(2, '0')
}

export const generateId = (len: number) => {
    const arr = new Uint8Array((len || 40) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec2hex).join('')
}

export const calculateHealthAndShield = (
    shield = 0,
    hp: number,
    maxHp: number,
    damage: number,
    mutilated?: number,
) => {
    const currentShield = Math.max(0, Math.round(shield - damage))
    const excessDamage = Math.max(0, Math.round(damage - shield))
    const unblockedDamage = excessDamage > 0 ? excessDamage : 0
    const updatedHp = hp - unblockedDamage
    return {
        shield: currentShield,
        hp: handleStatChange(updatedHp, maxHp - (mutilated ?? 0)),
    }
}
