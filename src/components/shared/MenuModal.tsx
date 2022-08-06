import * as React from 'react'
import Modal from '@mui/material/Modal'
import { ipcRenderer, shell } from 'electron'

import { WHITE } from '@/utils/colors'
import { GameStateContext } from '@/engine/game/context'
import { ControlButton } from '@/components/shared/styled/ControlButton'
import { useSelector } from '@xstate/react'
import { selectAudioConfig } from '@/engine/game/selectors'
import { GameModes } from '@/types'

type MenuModalProps = {
    isOpen: boolean
    setIsMenuModalOpen: (isOpen: boolean) => void
}

export function MenuModal({ isOpen, setIsMenuModalOpen }: MenuModalProps) {
    const { gameStateService } = React.useContext(GameStateContext)

    const closeModal = React.useCallback(() => setIsMenuModalOpen(false), [setIsMenuModalOpen])

    const startNewGame = () => {
        gameStateService.send({ type: 'FADEOUT_SOUND_TRACK' })
        setTimeout(() => {
            gameStateService.send({ type: 'GO_TO_START_SCREEN' })
            gameStateService.send({
                type: 'START_NEW_GAME',
                mode: GameModes.Limited,
                seed: undefined,
            })
        }, 2000)
        closeModal()
    }

    const soundTrack = useSelector(gameStateService, selectAudioConfig)

    const handleAdjustVolume = (volume: number) => {
        gameStateService.send({ type: 'SET_GAME_AUDIO_VOLUME', volume })
    }
    const handleMuteAudio = () => {
        gameStateService.send({ type: 'MUTE_GAME_AUDIO', muted: !soundTrack.muted })
    }
    const handleGoToStart = () => {
        gameStateService.send({ type: 'GO_TO_START_SCREEN' })
        closeModal()
    }

    const handleQuitGame = () => {
        ipcRenderer.send('quit')
    }

    const handleResetGame = () => {
        gameStateService.send({ type: 'FADEOUT_SOUND_TRACK' })
        setTimeout(() => {
            gameStateService.send({ type: 'RESET_GAME' })
        }, 2000)
        closeModal()
    }

    const handleVisitDiscord = () => {
        shell.openExternal('https://discord.gg/cxAxZgmcPP')
    }

    return (
        <Modal
            open={isOpen}
            onClose={closeModal}
            onBackdropClick={closeModal}
            aria-labelledby="Main Menu"
            aria-describedby="Main Menu"
            className="zoom"
        >
            <div className="flex h-full w-full">
                <div
                    className="m-auto w-[475px] h-[425px] relative bg-dm-dark-gray crt"
                    style={{
                        boxShadow: `0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12)`,
                    }}
                >
                    <button
                        type="button"
                        onClick={closeModal}
                        style={{
                            position: 'absolute',
                            right: 0,
                            top: '-5px',
                            padding: '10px',
                            background: 'none',
                            border: 'none',
                            color: '#fff',
                            fontSize: '1.75rem',
                            cursor: 'pointer',
                            zIndex: 999,
                        }}
                    >
                        &#10006;
                    </button>
                    <div className="p-4">
                        <h2 className="text-center mb-5 text-2xl">MENU</h2>
                        <div className="flex flex-col">
                            <div className="mx-auto my-2">
                                <ControlButton
                                    primaryColor={WHITE}
                                    onClick={handleGoToStart}
                                    style={{ display: 'block', width: '250px' }}
                                >
                                    START SCREEN
                                </ControlButton>
                            </div>
                            <div className="mx-auto my-2">
                                <ControlButton
                                    primaryColor={WHITE}
                                    onClick={startNewGame}
                                    style={{ display: 'block', width: '250px' }}
                                >
                                    Start New Run
                                </ControlButton>
                            </div>
                            <div className="mx-auto my-2">
                                <p className="block w-[250px] text-center text-dm-white text-xl uppercase">
                                    Adjust Game Audio Volume:
                                </p>
                                <input
                                    type="range"
                                    min={0}
                                    max={1}
                                    step={0.02}
                                    defaultValue={soundTrack.volume}
                                    onChange={event => {
                                        handleAdjustVolume(event.target.valueAsNumber)
                                    }}
                                    className="mx-auto"
                                />
                            </div>
                            <div className="mx-auto my-2">
                                <ControlButton
                                    primaryColor={WHITE}
                                    onClick={handleMuteAudio}
                                    style={{ display: 'block', width: '250px' }}
                                >
                                    {soundTrack.muted ? 'Unmute' : 'Mute'} Game Audio
                                </ControlButton>
                            </div>
                            <div className="mx-auto my-2">
                                <ControlButton
                                    primaryColor="#5d3fd3"
                                    onClick={handleVisitDiscord}
                                    style={{
                                        display: 'block',
                                        width: '250px',
                                        marginBottom: 0,
                                        marginTop: 0,
                                    }}
                                >
                                    Join Discord Server
                                </ControlButton>
                            </div>
                            <div className="mx-auto my-2">
                                <ControlButton
                                    primaryColor={WHITE}
                                    onClick={handleResetGame}
                                    style={{ display: 'block', width: '250px' }}
                                >
                                    RESET ALL DATA &amp; SETTINGS
                                </ControlButton>
                            </div>
                            <div className="mx-auto my-2">
                                <ControlButton
                                    primaryColor={WHITE}
                                    onClick={handleQuitGame}
                                    style={{ display: 'block', width: '250px' }}
                                >
                                    Quit Game
                                </ControlButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
