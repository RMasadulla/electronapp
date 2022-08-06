import * as React from 'react'
import { useSelector } from '@xstate/react'
import { shell } from 'electron'
import { LazyImg } from '@/components/shared/LazyImg'

import { GameModeModal } from '@/components/GameModeModal'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { GameStateContext } from '@/engine/game/context'
import { selectIsRunInProgress } from '@/engine/game/selectors'
import { GameModes } from '@/types'

import Logo from '/images/library_logo_transparent.png'
import EmbersBgVideo from '/images/embers.mp4'

export function StartScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const isRunInProgress = useSelector(gameStateService, selectIsRunInProgress)
    const [isModeModalOpen, setIsModeModalOpen] = React.useState(false)

    const openModal = () => {
        setIsModeModalOpen(true)
    }

    const chooseGameMode = (mode: GameModes, seed: string) => {
        gameStateService.send({ type: 'START_NEW_GAME', mode, seed })
    }

    const handleVisitDiscord = () => {
        shell.openExternal('https://discord.gg/2ztgdueC6k')
    }

    return (
        <div className="crt zoom h-full w-full">
            <VideoBackground video={EmbersBgVideo} />
            <GameModeModal
                isOpen={isModeModalOpen}
                setIsModeModalOpen={setIsModeModalOpen}
                chooseGameMode={chooseGameMode}
            />

            <div className="w-full h-full flex items-center justify-center relative z-50">
                <ul className="list-none text-center -mt-4">
                    <li>
                        <LazyImg
                            src={Logo}
                            alt="DINO MERCS logo"
                            className="m-auto drop-shadow-[0_0_65px_rgba(247,127,0,0.70)]"
                            w={670}
                            h={400}
                        />
                    </li>
                    <li>
                        <button
                            className="p-3 bg-none border-none text-dm-white uppercase text-4xl cursor-pointer hover:text-dm-orange transition-colors ease-in-out duration-200"
                            type="button"
                            onClick={openModal}
                            data-testid="start-screen-new-game-button"
                        >
                            Start new game
                        </button>
                    </li>
                    {isRunInProgress && (
                        <li>
                            <button
                                className="p-3 bg-none border-none text-dm-white uppercase text-4xl cursor-pointer hover:text-dm-orange transition-colors ease-in-out duration-200"
                                type="button"
                                onClick={() =>
                                    gameStateService.send({ type: 'CONTINUE_CURRENT_GAME' })
                                }
                            >
                                Continue game
                            </button>
                        </li>
                    )}
                    <li>
                        <button
                            className="p-3 bg-none border-none text-discord-purple uppercase text-4xl cursor-pointer hover:text-dm-orange transition-colors ease-in-out duration-200"
                            type="button"
                            onClick={handleVisitDiscord}
                        >
                            JOIN Discord SERVER
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
