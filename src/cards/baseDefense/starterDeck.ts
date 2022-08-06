import { shuffleDeck } from '@/utils/helpers'

import { MUCH_NEEDED_REPAIRS_CARD, MUCH_NEEDED_REPAIRS_CARD_02 } from './cards/muchNeededRepairs'
import { FEAST_CARD, FEAST_CARD_02 } from './cards/feast'
import { FRESH_BATCH_CARD, FRESH_BATCH_CARD_02 } from './cards/freshBatch'
import { ENTRENCH_CARD } from './cards/entrench'
import { ENHANCED_SYSTEMS_CARD } from './cards/enhancedSystems'
import { CARGO_DROP_CARD } from './cards/cargoDrop'
import { BASE_DEFENSE_EVENT_CARD } from './cards/baseDefenseEvent'
import { GENERATE_REVENUE_CARD } from './cards/generateRevenue'
import { COMPETITION_KILLER_CARD, COMPETITION_KILLER_CARD_02 } from './cards/competitionKiller'

const deck = [
    MUCH_NEEDED_REPAIRS_CARD,
    MUCH_NEEDED_REPAIRS_CARD_02,

    FEAST_CARD,
    FEAST_CARD_02,

    FRESH_BATCH_CARD,
    FRESH_BATCH_CARD_02,

    ENTRENCH_CARD,

    ENHANCED_SYSTEMS_CARD,

    // CARGO_DROP_CARD,

    GENERATE_REVENUE_CARD,

    COMPETITION_KILLER_CARD,
    COMPETITION_KILLER_CARD_02,

    // BASE_DEFENSE_EVENT_CARD,
]

export const STARTER_BASE_DEFENSE_DECK = shuffleDeck(deck)
