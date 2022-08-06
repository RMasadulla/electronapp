import * as React from 'react'
import styled from 'styled-components'
import { desaturate } from 'polished'

import { GameSavedMessage } from '@/components/shared/GameSavedMessage'

import { LIGHT_BLUE, BLACK } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'

export const CombatIntroScreenBackground = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(
        ellipse at center,
        ${hexToRGBA(LIGHT_BLUE, 0.15)} 450px,
        ${hexToRGBA(BLACK, 1)}
    );
    background-repeat: no-repeat;
    color: ${LIGHT_BLUE};
`

const DotGridOne = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(LIGHT_BLUE, 0.5)} 2px,
        transparent 0
    );
    background-size: 76px 76px;
`

const DotGridTwo = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(LIGHT_BLUE, 0.4)} 1px,
        transparent 0
    );
    background-size: 38px 38px;
`

const StyledOpIntroContainer = styled.div`
    height: 450px;
    width: 1000px;
    margin: auto;
    text-transform: uppercase;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    border: 1px solid ${LIGHT_BLUE};
    border-radius: 5px;
    padding: 20px;
    text-align: center;

    h1 {
        font-size: 6rem;
        line-height: 0.8;
        margin: 0;
        padding: 0;
        flex: 0 0 100%;
    }

    h3 {
        height: 30px;
        font-size: 2rem;
        margin: 0;
        width: 100%;
    }
`

const MissionCompleteLine = styled.p`
    font-size: 1.2rem;
    flex: 0 0 100%;
    margin: 0;
    text-align: left;
`

const StyledReminder = styled.p`
    margin: auto 0 0;
    font-size: 1rem;
`

const StyledButton = styled.button`
    background: ${LIGHT_BLUE};
    color: #2b2b2b;
    border: none;
    padding: 10px 20px;
    width: 200px;
    height: 50px;
    margin: auto 0 0 auto;
    line-height: 1;
    cursor: pointer;
    text-shadow: 0 0 5px ${LIGHT_BLUE};
    box-shadow: 0px 0px 10px 0 ${LIGHT_BLUE}, 0px 0px 10px 0 ${LIGHT_BLUE};
    transition: background 0.25s ease-in-out;
    font-size: 1.25rem;

    &:hover {
        background: ${desaturate(0.25, LIGHT_BLUE)};
    }

    &:disabled {
        background: ${desaturate(0.6, LIGHT_BLUE)};
        box-shadow: none;
        cursor: not-allowed;
    }
`

export function MissionCompleteScreen() {
    const { gameStateService } = React.useContext(GameStateContext)

    const resetGame = () => gameStateService.send({ type: 'RESET_GAME' })

    return (
        <CombatIntroScreenBackground>
            <DotGridOne>
                <DotGridTwo>
                    <div className="box-border grid h-full grid-cols-12 gap-4 col-start-auto col-span-12">
                        <div className="flex items-center justify-center">
                            <StyledOpIntroContainer>
                                <h1>YOUR MISSION IS COMPLETE</h1>
                                <MissionCompleteLine>:Begin message:</MissionCompleteLine>
                                <MissionCompleteLine>
                                    Good work, soldier. You have completed all mission objectives.
                                </MissionCompleteLine>
                                <MissionCompleteLine>
                                    Your payment will arrive in your designated account shortly. We
                                    wish to extend your service contract, if you so desire to
                                    continue partnering with us. You will receive a follow-up
                                    message regarding future work in 1-2 business days. Thank you
                                    for your service.
                                </MissionCompleteLine>
                                <MissionCompleteLine>——DARK SOLAR DEFENSE</MissionCompleteLine>
                                <MissionCompleteLine>:End message:</MissionCompleteLine>

                                <StyledReminder>
                                    Remember: NO QUESTIONS ASKED. NO MISSIONS FAILED. NO ONE LEFT
                                    BEHIND.
                                </StyledReminder>

                                <StyledButton type="button" onClick={resetGame}>
                                    START OVER
                                </StyledButton>
                            </StyledOpIntroContainer>
                        </div>
                    </div>
                    <GameSavedMessage />
                </DotGridTwo>
            </DotGridOne>
        </CombatIntroScreenBackground>
    )
}
