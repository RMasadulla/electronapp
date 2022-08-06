import { WEAK_CARNOTAURUS_CARDS, AVERAGE_CARNOTAURUS_CARDS } from '@/cards/enemy/carnotaurus'
import { CRYOLOPHOSAURUS_CARDS } from '@/cards/enemy/cryolophosaurus'
import { GALLIMIMUS_CARDS } from '@/cards/enemy/gallimimus'
import { MERCURICERATOPS_CARDS } from '@/cards/enemy/mercuriceratops'
import { PACHYCEPHALOSAURUS_CARDS } from '@/cards/enemy/pachycephalosaurus'
import { STYRACOSAURUS_CARDS } from '@/cards/enemy/styracosaurus'
import { CARCHARODONTOSAURUS_CARDS } from '@/cards/enemy/carcharodontosaurus'
import { AnimationStates, Duration, Enemy, EnemyVariants, Scenes } from '@/types'

import cryolophosaurusEnemy from '/images/cryolophosaurus_enemy.gif'
import styracosaurusEnemy from '/images/styracosaurus_enemy.gif'
import carnotaurusEnemy from '/images/carnotaurus_enemy.gif'
import pachyEnemyAsset from '/images/pachy_enemy_asset.png'
import berserkerEnemyAsset from '/images/beserker_w_shield.png'
import mercuriceratopsEnemyAsset from '/images/mercuriceratops_enemy_asset.png'
import sniperEnemyAsset from '/images/sniper_enemy.png'

export const ENEMY_ART_ASSETS: {
    id: string
    art: string
    width: number
    left: number
    bottom: number
}[] = [
    { id: 'bsc_trooper', art: carnotaurusEnemy, width: 540, left: -3, bottom: -5 },
    { id: 'bsc_brawler', art: pachyEnemyAsset, width: 561, left: -64, bottom: -139 },
    { id: 'hng_sniper', art: sniperEnemyAsset, width: 523, left: -25, bottom: -11 },
    {
        id: 'hng_heavy_trooper',
        art: mercuriceratopsEnemyAsset,
        width: 675,
        left: -112,
        bottom: -194,
    },
    { id: 'rpl_shock_trooper', art: cryolophosaurusEnemy, width: 575, left: -26, bottom: -5 },
    { id: 'rpl_heavy_trooper', art: styracosaurusEnemy, width: 675, left: -3, bottom: -5 },
    {
        id: 'bsc_berserker_commander',
        art: berserkerEnemyAsset,
        width: 675,
        left: -190,
        bottom: -435,
    },
]

export const BSC_TROOPER: Enemy = Object.freeze({
    id: 'bsc_trooper',
    name: 'B.S.C. TROOPER',
    enemyType: 'FORMIDABLE FOOT SOLDIER',
    affiliation: 'BLOOD SIGHT CORP',
    species: 'Carnotaurus',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    combatTaunt: 'I’m gonna crush you like a little bug!',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 30,
                maxShield: 30,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: AVERAGE_CARNOTAURUS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 60,
                maxHp: 60,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: AVERAGE_CARNOTAURUS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 50,
                maxHp: 50,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 2, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: AVERAGE_CARNOTAURUS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: WEAK_CARNOTAURUS_CARDS,
        },
    },
})

export const BSC_BRAWLER: Enemy = Object.freeze({
    id: 'bsc_brawler',
    name: 'B.S.C. BRAWLER',
    enemyType: 'AGGRESSIVE BRAWLER',
    affiliation: 'BLOOD SIGHT CORP',
    species: 'Pachycephalosaurus',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    animationState: AnimationStates.Idle,
    combatTaunt: 'Bet you’re not ready to go head to head with me.',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: PACHYCEPHALOSAURUS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: PACHYCEPHALOSAURUS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 2, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: PACHYCEPHALOSAURUS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 1, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: PACHYCEPHALOSAURUS_CARDS,
        },
    },
})

export const HNG_SNIPER: Enemy = Object.freeze({
    id: 'hng_sniper',
    name: 'H.N.G. SNIPER',
    enemyType: 'DEADLY SNIPER',
    affiliation: 'HYPER NOVA GROUP',
    species: 'Gallimimus',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    animationState: AnimationStates.Idle,
    combatTaunt: 'Got you in my sights. All I have to do is pull this trigger…',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 35,
                maxHp: 35,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 6, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: GALLIMIMUS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 35,
                maxHp: 35,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 6, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: GALLIMIMUS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 35,
                maxHp: 35,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 4, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: GALLIMIMUS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 35,
                maxHp: 35,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: GALLIMIMUS_CARDS,
        },
    },
})

export const HNG_HEAVY_TROOPER: Enemy = Object.freeze({
    id: 'hng_heavy_trooper',
    name: 'H.N.G. HEAVY TROOPER',
    enemyType: 'HEAVY LONG-RANGED SUPPORT',
    affiliation: 'HYPER NOVA GROUP',
    species: 'Mercuriceratops',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    animationState: AnimationStates.Idle,
    combatTaunt: 'Someone’s about to get wiped off the map, and it’s not me.',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 55,
                maxHp: 55,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 6, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: MERCURICERATOPS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 55,
                maxHp: 55,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 6, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: MERCURICERATOPS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 55,
                maxHp: 55,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: MERCURICERATOPS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 55,
                maxHp: 55,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 2, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: MERCURICERATOPS_CARDS,
        },
    },
})

export const RPL_SHOCK_TROOPER: Enemy = Object.freeze({
    id: 'rpl_shock_trooper',
    name: 'R.P.L. SHOCK TROOPER',
    enemyType: 'LIGHT SHOCK TROOPER',
    affiliation: 'RETRO-PARALLAX LIMITED',
    species: 'Cryolophosaurus',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    combatTaunt: 'I’m getting tired of fighting low-life mercs like you.',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CRYOLOPHOSAURUS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 4, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CRYOLOPHOSAURUS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 2, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CRYOLOPHOSAURUS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 40,
                maxHp: 40,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 1, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CRYOLOPHOSAURUS_CARDS,
        },
    },
})

export const RPL_HEAVY_TROOPER: Enemy = Object.freeze({
    id: 'rpl_heavy_trooper',
    name: 'R.P.L. HEAVY TROOPER',
    enemyType: 'HEAVY TROOPER',
    affiliation: 'RETRO-PARALLAX LIMITED',
    species: 'Styracosaurus',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    combatTaunt: 'You’re going to look so much better blasted into little pieces, trust me.',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 45,
                maxHp: 45,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: STYRACOSAURUS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 45,
                maxHp: 45,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: STYRACOSAURUS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 45,
                maxHp: 45,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 2, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: STYRACOSAURUS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 45,
                maxHp: 45,
                shield: 25,
                maxShield: 25,
            },
            statuses: {
                armored: { value: 1, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: STYRACOSAURUS_CARDS,
        },
    },
})

export const ALL_STANDARD_ENEMIES = [
    BSC_TROOPER,
    BSC_BRAWLER,
    HNG_SNIPER,
    HNG_HEAVY_TROOPER,
    RPL_SHOCK_TROOPER,
    RPL_HEAVY_TROOPER,
]

//
// MERC KILLERS
//
export const BSC_BERSERKER_COMMANDER: Enemy = Object.freeze({
    id: 'bsc_berserker_commander',
    name: 'B.S.C. BERSERKER COMMANDER',
    enemyType: 'BERSERKER COMMANDER',
    affiliation: 'BLOOD SIGHT CORP',
    species: 'Carcharodontosaurus',
    description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    barks: [],
    combatTaunt: 'I’M GONNA RIP OUT YOUR BEATING HEART AND EAT IT!',
    character: {
        animationState: AnimationStates.Idle,
    },
    variant: EnemyVariants.Average,
    variants: {
        [EnemyVariants.MercKiller]: {
            stats: {
                hp: 80,
                maxHp: 80,
                shield: 60,
                maxShield: 60,
            },
            statuses: {
                armored: { value: 8, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 5, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CARCHARODONTOSAURUS_CARDS,
        },
        [EnemyVariants.Deadly]: {
            stats: {
                hp: 80,
                maxHp: 80,
                shield: 60,
                maxShield: 60,
            },
            statuses: {
                armored: { value: 6, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 5, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CARCHARODONTOSAURUS_CARDS,
        },
        [EnemyVariants.Average]: {
            stats: {
                hp: 80,
                maxHp: 80,
                shield: 40,
                maxShield: 40,
            },
            statuses: {
                armored: { value: 4, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 5, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CARCHARODONTOSAURUS_CARDS,
        },
        [EnemyVariants.Weak]: {
            stats: {
                hp: 80,
                maxHp: 80,
                shield: 20,
                maxShield: 20,
            },
            statuses: {
                armored: { value: 2, duration: Duration.Mission, scene: Scenes.Combat },
                inCover: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                suppressed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                overheated: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                killingMachine: { value: 0, duration: Duration.Mission, scene: Scenes.Combat },
                enraged: { value: 5, duration: Duration.Round, scene: Scenes.Combat },
                panicked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                bleeding: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                smoked: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
                dazed: { value: 0, duration: Duration.Round, scene: Scenes.Combat },
            },
            cards: CARCHARODONTOSAURUS_CARDS,
        },
    },
})

export const ALL_MERCE_KILLER_ENEMIES = [BSC_BERSERKER_COMMANDER]
