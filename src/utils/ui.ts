import { YELLOW, RED, LIGHT_BLUE } from '@/utils/colors'

import { Scenes } from '@/types'

export type UIElements = {
    scene: Scenes
    primaryColor: typeof YELLOW | typeof RED | typeof LIGHT_BLUE
}

export const OPERATION_UI_ELEMENTS: UIElements = {
    scene: Scenes.Operation,
    primaryColor: YELLOW,
}

export const COMBAT_UI_ELEMENTS: UIElements = {
    scene: Scenes.Combat,
    primaryColor: RED,
}

export const BASE_DEFENSE_UI_ELEMENTS: UIElements = {
    scene: Scenes.BaseDefense,
    primaryColor: LIGHT_BLUE,
}

export const UIVariations = {
    operation: OPERATION_UI_ELEMENTS,
    combat: COMBAT_UI_ELEMENTS,
    baseDefense: BASE_DEFENSE_UI_ELEMENTS,
}
