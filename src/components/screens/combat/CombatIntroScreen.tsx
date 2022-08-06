import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'

import { Typer } from '@/components/shared/Typer'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { selectEnemy } from '@/engine/game/selectors'
import { RED, WHITE } from '@/utils/colors'
import { generateId, hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'
import { EnemyVariants } from '@/types'

import combatVideoBg from '/images/combat_vid_bg.mp4'

const DotGridOne = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(circle at 1px 1px, ${hexToRGBA(RED, 0.5)} 2px, transparent 0);
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

export function CombatIntroScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const enemy = useSelector(gameStateService, selectEnemy)
    const { send } = gameStateService

    const startCombat = () => {
        send({ type: 'START_COMBAT' })
    }

    return (
        <div className="relative w-full h-full bg-black crt zoom">
            <VideoBackground video={combatVideoBg} />
            <DotGridOne className="opacity-50" />
            <DotGridTwo className="opacity-50" />
            <div className="z-10 w-full h-full absolute inset-0 p-8">
                <Typer>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:102:</span>{' '}
                        <span className="text-dm-red">
                            {' '}
                            {enemy && enemy.variant === EnemyVariants.MercKiller
                                ? 'MERC KILLER INCOMING'
                                : 'Enemy Incoming!'}
                        </span>
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        INTEL INCOMING ::
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:117:</span>{' '}
                        {enemy.name}
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:119:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:125:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:212:</span>{' '}
                        {enemy.species} ({enemy.variant})
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:325:</span>{' '}
                        affiliation: {enemy.affiliation}
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:327:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:387:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO QUESTIONS ASKED.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO MISSIONS FAILED.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${RED}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO ONE LEFT BEHIND.
                    </p>

                    <button
                        type="button"
                        className="text-2xl py-2 text-dm-red hover:text-dm-white bg-none border-0 z-20"
                        onClick={startCombat}
                        style={{ textShadow: `0 0 5px ${RED}` }}
                    >
                        {'>>>>'} FIGHT!
                    </button>
                </Typer>
            </div>
        </div>
    )
}
