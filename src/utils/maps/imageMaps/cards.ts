import darkSolarDefenseAlphaLogo from '/images/dark_solar_defense_logo_with_background_alpha.png'
import combatEncounterAlphaArt from '/images/combat_encounter_alpha_art.png'
import combatCareAlphaArt from '/images/combat_care_alpha_art.png'
import deadlyArsenalAlphaArt from '/images/deadly_arsenal_alpha_art.png'
import rapidDeploymentAlphaArt from '/images/rapid_deployment_alpha_art_02.png'
import scavengerAlphaArt from '/images/scavenger_alpha_art.png'

import chargeShieldCardArt from '/images/charge_shields_card_art.png'
import closeAirSupportCardArt from '/images/close_air_support_card_art.png'
import combatArmorCardArt from '/images/combat_armor_card_art.png'
import placeholderCardArt1 from '/images/combat_placeholder_01.png'
import placeholderCardArt4 from '/images/combat_placeholder_04.png'
import flashbangAlphaArt from '/images/flashbang_alpha_art.png'
import fragGrenadeCardArt from '/images/frag_grenade_card_art.png'
import laserStrikeCardArt from '/images/laser_strike_card_art.png'
import smokeGrenadeAlphaArt from '/images/smoke_grenade_alpha_art.png'
import snapOutOfItAlphaArt from '/images/snap_out_of_it_alpha_art.png'
import SIRCardArt from '/images/SIR.png'
import trustySidearmAlphaArt from '/images/trusty_sidearm_alpha_art.png'
import wallbangAlphaArt from '/images/wallbang_alpha_art.png'

import placeholderDefenseCardArt from '/images/combat_placeholder_03.png'
import placeholderCardArt2 from '/images/combat_placeholder_02.png'
import bullRushCardArt from '/images/bull_rush_card_art.png'
import toughenedHideCardArt from '/images/toughened_hide_card_art.png'

import groundTroopsAlphaArt from '/images/ground_troops_alpha_art.png'
import baseDefensePlaceholderCardArt from '/images/base_defense_placeholder_01.png'
import baseDefensePlaceholderCardArt2 from '/images/base_defense_placeholder_02.png'
import cargoDropAlphaArt from '/images/cargo_drop_alpha_art.png'
import firefightersAlphaArt from '/images/firefighters_alpha_art.png'
import incendiaryBarrageAlphaArt from '/images/incendiary_barrage_alpha_art.png'
import muchNeededRepairsAlphaArt from '/images/much_needed_repairs_alpha_art.png'

export const CARD_IMAGE_MAP = new Map([
    // OPERATION CARDS
    ['COMBAT_ENCOUNTER_CARD', combatEncounterAlphaArt],
    ['ALL_IN_CARD', darkSolarDefenseAlphaLogo],
    ['BLOCKADE_CARD', darkSolarDefenseAlphaLogo],
    ['COMBAT_CARE_CARD', combatCareAlphaArt],
    ['DEADLY_ARSENAL_CARD', deadlyArsenalAlphaArt],
    ['OPERATION_EVENT_CARD', darkSolarDefenseAlphaLogo],
    ['RAPID_DEPLOYMENT_CARD', rapidDeploymentAlphaArt],
    ['SCAVENGER_CARD', scavengerAlphaArt],
    ['SPOILS_OF_WAR_CARD', darkSolarDefenseAlphaLogo],
    ['SWINDLE_CARD', darkSolarDefenseAlphaLogo],
    // END OPERATION CARDS

    // COMBAT CARDS
    ['CHARGE_SHIELD_CARD', chargeShieldCardArt],
    ['CLOSE_AIR_SUPPORT_CARD', closeAirSupportCardArt],
    ['COMBAT_ARMOR_CARD', combatArmorCardArt],
    ['DIG_IN_CARD', darkSolarDefenseAlphaLogo],
    ['ENERGY_BLAST_CARD', chargeShieldCardArt],
    ['FIRE_FLAIL_CARD', placeholderCardArt4],
    ['FLASHBANG_CARD', flashbangAlphaArt],
    ['FRAG_GRENADE_CARD', fragGrenadeCardArt],
    ['FULL_METAL_JACKET_CARD', placeholderCardArt4],
    ['GUIDED_MISSILE_CARD', placeholderCardArt4],
    ['LASER_STRIKE_CARD', laserStrikeCardArt],
    ['MEDIVAC_CARD', darkSolarDefenseAlphaLogo],
    ['MOBILE_SHIELD_BATTERY_CARD', darkSolarDefenseAlphaLogo],
    ['RPG_CARD', placeholderCardArt4],
    ['SHATTERED_CARD', placeholderCardArt4],
    ['SHIELD_OVERLOAD_CARD', chargeShieldCardArt],
    ['SLICE_AND_DICE_CARD', placeholderCardArt1],
    ['SMOKE_GRENADE_CARD', smokeGrenadeAlphaArt],
    ['SNAP_OUT_OF_IT_CARD', snapOutOfItAlphaArt],
    ['STANDARD_ISSUE_RIFLE_CARD', SIRCardArt],
    ['TRUSTY_SIDEARM_CARD', trustySidearmAlphaArt],
    ['WALLBANG_CARD', wallbangAlphaArt],
    // END COMBAT CARDS

    // ENEMY CARDS
    ['BESERKER_BASH_CARD', placeholderCardArt1],
    ['COMBAT_ARMOR_CARD', combatArmorCardArt],
    ['UTTER_RAGE_CARD', placeholderCardArt1],
    ['BULL_RUSH_CARD', bullRushCardArt],
    ['TOUGHENED_HIDE_CARD', toughenedHideCardArt],
    ['SLICE_AND_DICE_CARD', placeholderCardArt2],
    ['RAPID_ASSAULT_CARD', placeholderCardArt1],
    ['TAKE_COVER_CARD', placeholderDefenseCardArt],
    ['LEECH_SHIELD_CARD', chargeShieldCardArt],
    ['SNIPER_SHOT_CARD', placeholderCardArt1],
    ['DIG_IN_CARD', placeholderDefenseCardArt],
    ['SURPRESSIVE_FIRE_CARD', placeholderDefenseCardArt],
    ['MORTAR_STRIKE_CARD', placeholderCardArt1],
    ['FACE_OFF_CARD', placeholderDefenseCardArt],
    ['DOME_SMASH_CARD', placeholderCardArt2],
    ['CHARGE_SHIELDS_CARD', chargeShieldCardArt],
    ['BATTER_CARD', placeholderCardArt2],
    ['GRENADE_LAUNCHER_CARD', placeholderCardArt4],
    ['FACE_OFF_CARD', placeholderDefenseCardArt],
    ['SKULL_BASH_CARD', placeholderDefenseCardArt],
    // END ENEMY CARDS

    // BASE DEFENSE CARDS
    ['GROUND_TROOPS_CARD_BASE_ATTACKER', groundTroopsAlphaArt],
    ['BASE_DEFENSE_EVENT_CARD', baseDefensePlaceholderCardArt],
    ['CARGO_DROP_CARD', cargoDropAlphaArt],
    ['ENHANCED_SYSTEMS_CARD', baseDefensePlaceholderCardArt],
    ['ENTRENCH_CARD', baseDefensePlaceholderCardArt2],
    ['FEAST_CARD', darkSolarDefenseAlphaLogo],
    ['FIREFIGHTERS_CARD', firefightersAlphaArt],
    ['FRESH_BATCH_CARD', baseDefensePlaceholderCardArt],
    ['GENERATE_REVENUE_CARD', darkSolarDefenseAlphaLogo],
    ['INCENDIARY_BARRAGE_CARD', incendiaryBarrageAlphaArt],
    ['MUCH_NEEDED_REPAIRS_CARD', muchNeededRepairsAlphaArt],
    // END BASE DEFENSE CARDS
])
