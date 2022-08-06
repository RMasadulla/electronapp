import * as React from 'react'
import { useSelector } from '@xstate/react'

import {
    OperationDotGridOne,
    OperationDotGridTwo,
} from '@/components/shared/styled/OperationScreenBackground'
import { VideoBackground } from '@/components/shared/VideoBackground'
import { Typer } from '@/components/shared/Typer'

import { YELLOW } from '@/utils/colors'
import { GameStateContext } from '@/engine/game/context'
import { selectOperation } from '@/engine/game/selectors'
import { generateId } from '@/utils/helpers'

import opVideoBg from '/images/op_vid_bg.mp4'

export function OperationIntroScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const operation = useSelector(gameStateService, selectOperation)
    const { send } = gameStateService

    const proceedToOperation = () => {
        send({ type: 'OPERATION_INTRO_PHASE_ENDS' })
    }

    return (
        <div className="relative w-full h-full bg-black crt zoom">
            <VideoBackground video={opVideoBg} />
            <OperationDotGridOne />
            <OperationDotGridTwo />
            <div className="z-10 w-full h-full absolute inset-0 p-8">
                <Typer>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        _INIT_SYSTEM ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        LOADING COMMS_PKG ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        LOADING ADMIN_PKG ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        LOADING RECON_PKG ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        LOADING ALL OTHER PACKAGES ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        52%
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        86%
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        97%
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:102:</span>{' '}
                        <span className="text-dm-yellow">{operation.name}</span>
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:116:</span>{' '}
                        JOINT OPERATION ::
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:117:</span>{' '}
                        HyadeTech Group + DARK SOLAR DEFENSE
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:119:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:125:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:212:</span>{' '}
                        Affirmation to meditate upon this operation:
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:325:</span>{' '}
                        {operation.affirmation}
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:327:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:387:</span>{' '}
                        ...
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO QUESTIONS ASKED.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO MISSIONS FAILED.
                    </p>
                    <p
                        className="text-2xl py-2 text-slate-200 uppercase"
                        style={{ textShadow: `0 0 10px ${YELLOW}` }}
                    >
                        <span className="text-slate-400">{generateId(10)}:exec-cmd.dsd:401:</span>{' '}
                        NO ONE LEFT BEHIND.
                    </p>

                    <button
                        type="button"
                        className="text-2xl py-2 text-dm-yellow hover:text-dm-white bg-none border-0 z-20"
                        onClick={proceedToOperation}
                        style={{ textShadow: `0 0 5px ${YELLOW}` }}
                    >
                        {'>>>>'} COMMENCE OPERATION
                    </button>
                </Typer>
            </div>
        </div>
    )
}

export function OperationLoadingScreen() {
    return (
        <div className="w-full h-full crt zoom">
            <div className="flex items-center justify-center w-full h-full">
                <div className="w-1/2 h-1/2 m-auto uppercase">
                    <Typer>
                        <p className="text-9xl" style={{ textShadow: `0 0 5px ${YELLOW}` }}>
                            LOADING…
                        </p>
                    </Typer>
                </div>
            </div>
            <VideoBackground video={opVideoBg} />
            <OperationDotGridOne />
            <OperationDotGridTwo />
        </div>
    )
}
