import { shuffleDeck } from '@/utils/helpers'

import { TRUSTY_SIDEARM_CARD } from './cards/trustySidearm'
import {
    CHARGE_SHIELD_CARD,
    CHARGE_SHIELD_CARD_02,
    CHARGE_SHIELD_CARD_03,
    CHARGE_SHIELD_CARD_04,
} from './cards/chargeShield'
import { STANDARD_ISSUE_RIFLE_CARD, STANDARD_ISSUE_RIFLE_CARD_02 } from './cards/standardIssueRifle'
import { FRAG_GRENADE_CARD } from './cards/fragGrenade'
import { LASER_STRIKE_CARD } from './cards/laserStrike'
import { SNAP_OUT_OF_IT_CARD } from './cards/snapOutOfIt'

const deck = [
    CHARGE_SHIELD_CARD,
    CHARGE_SHIELD_CARD_02,
    CHARGE_SHIELD_CARD_03,
    CHARGE_SHIELD_CARD_04,
    STANDARD_ISSUE_RIFLE_CARD,
    STANDARD_ISSUE_RIFLE_CARD_02,
    TRUSTY_SIDEARM_CARD,
    SNAP_OUT_OF_IT_CARD,
    FRAG_GRENADE_CARD,
    LASER_STRIKE_CARD,
]

export const STARTER_COMBAT_DECK = shuffleDeck(deck)
