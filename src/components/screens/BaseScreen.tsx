import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'

import { GameSavedMessage } from '@/components/shared/GameSavedMessage'

import { selectCurrentTimelineStep, selectTimeline } from '@/engine/game/selectors'
import { GameStateContext } from '@/engine/game/context'

import { Timeline, TimelineStep } from '@/types'

import opBg from '/images/op_base_bg.jpg'
import baseDefenseBg from '/images/base_defense_base_bg.jpg'
import combatBg from '/images/combat_base_bg.jpg'

const StyledBackground = styled.div<{ image: string; current?: boolean }>`
    height: 100%;
    width: 100%;
    background: url(${props => props.image});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: screen;
    position: relative;

    &:after {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 10;
        ${props => !props.current && `background: rgba(230, 230, 230, 0.3)`};
    }
`

export function BaseScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const currentTimelineStep: TimelineStep = useSelector(
        gameStateService,
        selectCurrentTimelineStep,
    )
    const timeline: Timeline = useSelector(gameStateService, selectTimeline)
    const totalSteps = Object.keys(timeline).length
    const currentIndex = currentTimelineStep.checkpoint
    // By default, show previous step, current step, and next step
    const prevStep = timeline[currentIndex - 1]
    const nextStep = timeline[currentIndex + 1]
    // If at last step, show the previous two steps
    const pastStep = timeline[currentIndex - 2]
    // If at first step, show the next 2 steps
    const futureStep = timeline[currentIndex + 2]

    return (
        // <div className="box-border h-full w-full grid-cols-12 gap-4 col-start-auto col-span-12 flex flex-wrap items-stretch zoom relative crt">
        <div className="box-border h-full w-full grid-cols-12 gap-4 col-start-auto col-span-12 zoom relative crt">
            <div className="h-20 flex items-center px-8 text-xl uppercase bg-dm-yellow border-dm-dark-gray border-4">
                <div className=" text-dm-dark-gray grow">
                    <h1 className="font-bold text-2xl leading-none m-0">
                        Mission Control // Base of Operations
                    </h1>
                    <span className="text-xl">
                        Operations completed ::{' '}
                        <span className="font-bold">
                            {currentIndex} of {totalSteps}
                        </span>
                    </span>
                </div>
                <p className="ml-32 text-xl flex-grow-[3] text-dm-dark-gray">
                    <span className="text-slate-600">MESSAGE :: </span>
                    <span className="text-dm-red">
                        Complete all operations to complete the mission
                    </span>
                </p>
            </div>
            <div className="h-[calc(100%-5rem)] w-full flex flex-row">
                {!futureStep && !nextStep && pastStep?.checkpoint && (
                    <div className="text-white grow border-dm-dark-gray border-4 relative">
                        {pastStep.baseUnderAttack && <StyledBackground image={baseDefenseBg} />}
                        {!pastStep.baseUnderAttack && !pastStep.mercKiller && (
                            <StyledBackground image={opBg} />
                        )}
                        {pastStep.mercKiller && <StyledBackground image={combatBg} />}
                        <span className="absolute top-2 left-2 text-lg uppercase">
                            Checkpoint {pastStep.checkpoint}/{totalSteps}
                        </span>
                        <div className="absolute inset-0 p-8 text-3xl uppercase">
                            <div className="flex w-full h-full">
                                <div className="m-auto">
                                    <p>
                                        {prevStep.baseUnderAttack
                                            ? 'Base defended Successfully'
                                            : prevStep.mercKiller
                                            ? 'MERC KILLER DEFEATED'
                                            : 'Operation finished Successfully'}
                                    </p>
                                    <p>Status: COMPLETED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {prevStep?.checkpoint && (
                    <div className="text-white grow border-dm-dark-gray border-4 relative">
                        {prevStep.baseUnderAttack && <StyledBackground image={baseDefenseBg} />}
                        {!prevStep.baseUnderAttack && !prevStep.mercKiller && (
                            <StyledBackground image={opBg} />
                        )}
                        {prevStep.mercKiller && <StyledBackground image={combatBg} />}
                        <span className="absolute top-2 left-2 text-lg uppercase">
                            Checkpoint {prevStep.checkpoint}/{totalSteps}
                        </span>
                        <div className="absolute inset-0 p-8 text-3xl uppercase">
                            <div className="flex w-full h-full">
                                <div className="m-auto">
                                    <p>
                                        {prevStep.baseUnderAttack
                                            ? 'Base defended Successfully'
                                            : prevStep.mercKiller
                                            ? 'MERC KILLER DEFEATED'
                                            : 'Operation finished Successfully'}
                                    </p>
                                    <p>Status: COMPLETED</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    className="text-white flex-grow-[2] border-dm-dark-gray border-4 relative"
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                        if (currentTimelineStep.baseUnderAttack) {
                            gameStateService.send({ type: 'DEFEND_BASE' })
                        } else {
                            gameStateService.send({ type: 'START_OPERATION' })
                        }
                    }}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            if (currentTimelineStep.baseUnderAttack) {
                                gameStateService.send({ type: 'DEFEND_BASE' })
                            } else {
                                gameStateService.send({ type: 'START_OPERATION' })
                            }
                        }
                    }}
                >
                    {currentTimelineStep.baseUnderAttack && (
                        <StyledBackground image={baseDefenseBg} current />
                    )}
                    {!currentTimelineStep.baseUnderAttack && !currentTimelineStep.mercKiller && (
                        <StyledBackground image={opBg} current />
                    )}
                    {currentTimelineStep.mercKiller && (
                        <StyledBackground image={combatBg} current />
                    )}
                    <span className="absolute top-2 left-2 text-xl uppercase">
                        Checkpoint {currentTimelineStep.checkpoint}/{totalSteps}
                    </span>
                    <div className="absolute inset-0 p-8 text-5xl uppercase">
                        <div className="flex w-full h-full">
                            <div className="m-auto">
                                <p>
                                    {currentTimelineStep.baseUnderAttack
                                        ? 'BASE UNDER ATTACK'
                                        : currentTimelineStep.mercKiller
                                        ? 'MERC KILLER IN YOUR AO :: BEWARE'
                                        : 'OPERATION READY'}
                                </p>
                                <p>Status: NOT COMPLETED</p>
                                <br />
                                <p className="underline text-3xl">
                                    {currentTimelineStep.baseUnderAttack
                                        ? 'DEFEND BASE'
                                        : currentTimelineStep.mercKiller
                                        ? 'HUNT DOWN MERC KILLER'
                                        : 'COMMENCE OPERATION'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {nextStep?.checkpoint && (
                    <div className="text-white grow border-dm-dark-gray border-4 relative">
                        {nextStep.baseUnderAttack && <StyledBackground image={baseDefenseBg} />}
                        {!nextStep.baseUnderAttack && !nextStep.mercKiller && (
                            <StyledBackground image={opBg} />
                        )}
                        {nextStep.mercKiller && <StyledBackground image={combatBg} />}
                        <span className="absolute top-2 left-2 text-lg uppercase">
                            Checkpoint {nextStep.checkpoint}/{totalSteps}
                        </span>
                        <div className="absolute inset-0 p-8 text-3xl uppercase">
                            <div className="flex w-full h-full">
                                <div className="m-auto">
                                    <p>
                                        {nextStep.baseUnderAttack
                                            ? 'Attackers approaching base'
                                            : nextStep.mercKiller
                                            ? 'MERC KILLER INBOUND'
                                            : 'PREPARE FOR THE NEXT OP'}
                                    </p>
                                    <p>Status: UPCOMING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {!pastStep && !prevStep && futureStep?.checkpoint && (
                    <div className="text-white grow border-dm-dark-gray border-4 relative">
                        {futureStep.baseUnderAttack && <StyledBackground image={baseDefenseBg} />}
                        {!futureStep.baseUnderAttack && !futureStep.mercKiller && (
                            <StyledBackground image={opBg} />
                        )}
                        {futureStep.mercKiller && <StyledBackground image={combatBg} />}
                        <span className="absolute top-2 left-2 text-lg uppercase">
                            Checkpoint {futureStep.checkpoint}/{totalSteps}
                        </span>
                        <div className="absolute inset-0 p-8 text-3xl uppercase">
                            <div className="flex w-full h-full">
                                <div className="m-auto">
                                    <p>
                                        {futureStep.baseUnderAttack
                                            ? 'Attackers approaching base'
                                            : futureStep.mercKiller
                                            ? 'MERC KILLER DETECTED'
                                            : 'PREPARE FOR THE NEXT OP'}
                                    </p>
                                    <p>Status: UPCOMING</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <GameSavedMessage />
        </div>
    )
}
