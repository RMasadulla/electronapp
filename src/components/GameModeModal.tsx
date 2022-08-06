import * as React from 'react'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'

import { GameModes } from '@/types'
import { ORANGE, BLACK, WHITE, GRAY } from '@/utils/colors'

const StyledModeButton = styled.button`
    display: block;
    width: 200px;
    margin: 0 auto 20px;
    height: 40px;
    font-size: 1.25rem;
    color: ${ORANGE};
    border: 2px solid ${ORANGE};
    letter-spacing: 2px;
    transition: all 200ms ease-in-out;

    &:hover {
        cursor: pointer;
        color: ${WHITE};
        background: ${BLACK};
        border: 2px solid ${BLACK};
    }

    &:disabled {
        color: ${GRAY};
        cursor: not-allowed;
        border: 2px solid ${GRAY};

        &:hover {
            cursor: not-allowed;
            color: ${GRAY};
            background: ${WHITE};
            border: 2px solid ${GRAY};
        }
    }
`

const StyledModeDescription = styled.p`
    margin: 10px auto 0px;
    /* text-align: center; */
    font-size: 1.15rem;
    text-transform: uppercase;
    color: ${BLACK};
`

type GameModeModalProps = {
    isOpen: boolean
    setIsModeModalOpen: (isOpen: boolean) => void
    chooseGameMode: (mode: GameModes, seed: string) => void
}

export function GameModeModal({ isOpen, setIsModeModalOpen, chooseGameMode }: GameModeModalProps) {
    const [seed, setSeed] = React.useState('')

    const handleSetSeed = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSeed(value)
    }, [])

    const handleChoice = React.useCallback(
        (mode: GameModes) => {
            chooseGameMode(mode, seed)
            setIsModeModalOpen(false)
        },
        [chooseGameMode, setIsModeModalOpen, seed],
    )

    return (
        <Modal
            open={isOpen}
            aria-labelledby="Choose game mode"
            aria-describedby="Choose a game mode"
        >
            <div className="flex h-screen">
                <div
                    className="m-auto w-[1000px] h-[379px] relative bg-dm-white rounded-lg"
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
                    <div className="box-border grid h-full grid-cols-12 gap-4 col-start-auto col-span-12 crt p-0">
                        <div className="col-span-12">
                            <h2 className="pt-5 pb-2 text-3xl text-dm-dark-gray text-center">
                                CHOOSE RUN MODE
                            </h2>
                            <div className="grid grid-cols-12 gap-4 col-start-auto col-span-12 p-4">
                                <div className="col-span-4 py-2 px-4 border-r border-slate-400">
                                    <StyledModeButton
                                        onClick={() => handleChoice(GameModes.Limited)}
                                    >
                                        LIMITED MODE
                                    </StyledModeButton>
                                    <StyledModeDescription>
                                        Complete 20 Operations. A perfect intro for lil’ baby
                                        mercenaries. If you’re playing the beta/demo, this is all
                                        you can play right now because game dev takes a long time.
                                    </StyledModeDescription>
                                </div>
                                <div className="col-span-4 py-2 px-4 border-r border-slate-400 relative">
                                    <span className="absolute -top-3 px-1 right-[56px] text-gray-700 border border-gray-700 border-b-0">
                                        COMING SOON
                                    </span>
                                    <StyledModeButton
                                        onClick={() => handleChoice(GameModes.Infinite)}
                                        disabled
                                    >
                                        INFINITE MODE
                                    </StyledModeButton>
                                    <StyledModeDescription className="text-gray-500">
                                        Classic arcade style play. Complete as many Operations as
                                        you can before dying. The more you complete, the higher the
                                        score. Compete against your dearest friends and win
                                        exclusive bragging rights.
                                    </StyledModeDescription>
                                </div>
                                <div className="col-span-4 py-2 px-4 relative">
                                    <span className="absolute -top-3 px-1 right-[56px] text-gray-700 border border-gray-700 border-b-0">
                                        COMING SOON
                                    </span>
                                    <StyledModeButton
                                        onClick={() => handleChoice(GameModes.Story)}
                                        disabled
                                    >
                                        STORY MODE
                                    </StyledModeButton>
                                    <StyledModeDescription className="text-gray-500">
                                        Every video game needs a story-driven campaign with a
                                        riveting narrative, clever dialogue, and a sepcial objective
                                        to complete, right? Right? Right.
                                    </StyledModeDescription>
                                </div>
                                <div className="col-span-12 crt p-5">
                                    <div className="block w-[300px] m-auto text-lg text-dm-dark-gray">
                                        SEED (OPTIONAL):{' '}
                                        <input
                                            onChange={handleSetSeed}
                                            value={seed}
                                            className="text-dm-dark-gray border-dm-dark-gray border"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
