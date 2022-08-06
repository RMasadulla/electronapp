import * as React from 'react'
import styled from 'styled-components'

import { BaseDefenseScreenBackground } from '@/components/shared/styled/BaseDefenseScreenBackground'
import { Typer } from '@/components/shared/Typer'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { LIGHT_BLUE, WHITE } from '@/utils/colors'
import { generateId, hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'

import baseDefenseVideoBg from '/images/bd_vid_bg.mp4'

const DotGridOne = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(LIGHT_BLUE, 0.5)} 2px,
        transparent 0
    );
    background-position: center center;
    background-size: 76px 76px;
`

const DotGridTwo = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(WHITE, 0.5)} 2px,
        transparent 0
    );
    background-position: center center;
    background-size: 77px 77px;
`

export function BaseDefenseIntroScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const { send } = gameStateService

    const proceedToBaseDefense = () => {
        send({ type: 'BASE_DEFENSE_INTRO_PHASE_ENDS' })
    }

    return (
        <div className="relative w-full h-full bg-black crt zoom">
            <VideoBackground video={baseDefenseVideoBg} />
            <DotGridOne />
            <DotGridTwo />
            <div className="z-10 w-full h-full absolute inset-0 p-8">
                <Typer>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:102:</span>{' '}
                        <span className="text-dm-light-blue">BASE OF OPERATIONS UNDER ATTACK!</span>
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        Defend your base at all costs.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:117:</span>{' '}
                        If our enemies destroy our base, our mission here has failed.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:119:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:125:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:212:</span>{' '}
                        Survive long enough…
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:325:</span>{' '}
                        If you do, you will recieve reinforcements from our employer.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:327:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:387:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO QUESTIONS ASKED.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO MISSIONS FAILED.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${LIGHT_BLUE}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO ONE LEFT BEHIND.
                    </p>

                    <button
                        type="button"
                        className="text-2xl py-2 text-dm-light-blue hover:text-dm-white bg-none border-0 z-20"
                        onClick={proceedToBaseDefense}
                        style={{ textShadow: `0 0 5px ${LIGHT_BLUE}` }}
                    >
                        {'>>>>'} COMMENCE DEFENSE!
                    </button>
                </Typer>
            </div>
        </div>
    )
}
