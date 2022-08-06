import * as React from 'react'
import { useActor, useSelector } from '@xstate/react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { StartScreen } from '@/components/screens/StartScreen'
import { CharacterSelectionScreen } from '@/components/screens/CharacterSelectionScreen'
import { BaseScreen } from '@/components/screens/BaseScreen'
import { CombatScreen } from '@/components/screens/combat/CombatScreen'
import { BaseDefenseScreen } from '@/components/screens/baseDefense/BaseDefenseScreen'
import { CombatRewardsScreen } from '@/components/screens/combat/CombatRewardsScreen'
import { GameOverScreen } from '@/components/screens/GameOverScreen'
import { OperationScreen } from '@/components/screens/operation/OperationScreen'
import { OperationRewardsScreen } from '@/components/screens/operation/OperationRewardsScreen'
import { BaseDefenseRewardsScreen } from '@/components/screens/baseDefense/BaseDefenseRewardsScreen'
import { Tutorial } from '@/components/screens/Tutorial'
import { MissionCompleteScreen } from '@/components/screens/missionCompleteScreen'
import { ControlButton } from '@/components/shared/styled/ControlButton'
import { MenuModal } from '@/components/shared/MenuModal'
import SoundTrack from '@/components/shared/SoundTrack'

import { GameStateContext } from '@/engine/game/context'
import {
    selectIsOpIntroPhase,
    selectIsBaseDefenseIntroPhase,
    selectIsCombatPhaseIntro,
} from '@/engine/game/selectors'
import { WHITE } from '@/utils/colors'
import { GameRoutes, Tracks } from '@/types'
import { selectAudioConfig } from './engine/game/selectors'

export default function Game() {
    const { gameStateService } = React.useContext(GameStateContext)
    const [state] = useActor(gameStateService)

    const navigate = useNavigate()
    React.useEffect(() => {
        console.log('EVENT: ', state.event.type)
        console.log('CONTEXT: ', state.context)
        console.log('STATE: ', state.value)
        console.log('CURRENT ROUTE: ', state.context.game.currentRoute)

        switch (state.context.game.currentRoute) {
            case GameRoutes.StartScreen:
                navigate(GameRoutes.StartScreen)
                break
            case GameRoutes.CharacterSelectionScreen:
                navigate(GameRoutes.CharacterSelectionScreen)
                break
            case GameRoutes.TutorialScreen:
                navigate(GameRoutes.TutorialScreen)
                break
            case GameRoutes.BaseScreen:
                navigate(GameRoutes.BaseScreen)
                break
            case GameRoutes.OperationScreen:
                navigate(GameRoutes.OperationScreen)
                break
            case GameRoutes.OperationRewardsScreen:
                navigate(GameRoutes.OperationRewardsScreen)
                break
            case GameRoutes.CombatScreen:
                navigate(GameRoutes.CombatScreen)
                break
            case GameRoutes.CombatRewardsScreen:
                navigate(GameRoutes.CombatRewardsScreen)
                break
            case GameRoutes.BaseDefenseScreen:
                navigate(GameRoutes.BaseDefenseScreen)
                break
            case GameRoutes.BaseDefenseRewardsScreen:
                navigate(GameRoutes.BaseDefenseRewardsScreen)
                break
            case GameRoutes.GameOverScreen:
                navigate(GameRoutes.GameOverScreen)
                break
            case GameRoutes.GameWonScreen:
                navigate(GameRoutes.GameWonScreen)
                break
            default:
                navigate(GameRoutes.StartScreen)
                break
        }
    }, [state])

    const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false)
    const handleOpenMenu = React.useCallback(() => setIsMenuModalOpen(true), [])

    const isOperationIntroScene = useSelector(gameStateService, selectIsOpIntroPhase)
    const isCombatIntro = useSelector(gameStateService, selectIsCombatPhaseIntro)
    const isBaseDefenseIntroScene = useSelector(gameStateService, selectIsBaseDefenseIntroPhase)
    const audio = useSelector(gameStateService, selectAudioConfig)

    return (
        <div className="w-full h-full">
            <Routes>
                <Route path="/" element={<StartScreen />} />
                <Route path="/game-over" element={<GameOverScreen />} />
                <Route path="/game-won" element={<MissionCompleteScreen />} />
                <Route path="/tutorial" element={<Tutorial />} />
                <Route path="/character-selection" element={<CharacterSelectionScreen />} />
                <Route path="/base" element={<BaseScreen />} />
                <Route
                    path="/operation"
                    element={<OperationScreen showIntro={isOperationIntroScene} />}
                />
                <Route path="/operation/rewards" element={<OperationRewardsScreen />} />
                <Route path="/combat" element={<CombatScreen showIntro={isCombatIntro} />} />
                <Route path="/combat/rewards" element={<CombatRewardsScreen />} />
                <Route
                    path="/base-defense"
                    element={<BaseDefenseScreen showIntro={isBaseDefenseIntroScene} />}
                />
                <Route path="/base-defense/rewards" element={<BaseDefenseRewardsScreen />} />
            </Routes>
            <ControlButton
                primaryColor={WHITE}
                onClick={handleOpenMenu}
                style={{ position: 'absolute', right: '15px', top: '25px', zIndex: 999 }}
            >
                MENU
            </ControlButton>
            <MenuModal isOpen={isMenuModalOpen} setIsMenuModalOpen={setIsMenuModalOpen} />
            <SoundTrack
                track={audio.track || Tracks.None}
                currentVolume={audio.volume || 0}
                muted={audio.muted || false}
                fadeout={audio.fadeout || false}
            />
        </div>
    )
}
