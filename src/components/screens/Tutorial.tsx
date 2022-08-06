import * as React from 'react'
import styled from 'styled-components'

import { BaseDefenseScreenBackground } from '@/components/shared/styled/BaseDefenseScreenBackground'

import { LIGHT_BLUE, BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'

import opScreen01Img from '/images/op_screen_01.png'
import opScreen02Img from '/images/op_screen_02.png'
import opScreen03Img from '/images/op_screen_03.png'
import barsImg from '/images/bars.png'
import tutorialBaseHp from '/images/tutorial_base_hp.png'
import tutorialStatusesStats from '/images/tutorial_statuses_stats.png'

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

const StyledTutorialScreenContent = styled.div`
    font-size: 1.4rem;
    line-height: 1.3;
    color: ${WHITE};
    text-shadow: 0px 0px 15px ${hexToRGBA(LIGHT_BLUE, 1)};
    margin: auto;
`

const StyledScreenshot = styled.img`
    display: block;
    max-width: 900px;
    margin: 0 auto 2rem;
    border: 1px solid ${BLACK};
    border-bottom: 5px solid ${BLACK};
    border-radius: 7px;
    box-shadow: 0px 0px 10px 0 ${hexToRGBA(LIGHT_BLUE, 0.45)},
        0px 0px 25px 0 ${hexToRGBA(LIGHT_BLUE, 0.35)}, 0px 0px 75px 0 ${hexToRGBA(LIGHT_BLUE, 0.25)},
        0px 0px 75px 0 ${hexToRGBA(LIGHT_BLUE, 0.25)};
`

const StyledSmallContent = styled.div`
    max-width: 800px;
    margin: 0 auto;

    p span {
        font-weight: bold;
    }
`

const StyledButtons = styled.div`
    text-align: center;
    margin: 0 auto;
`

export function Tutorial() {
    const { gameStateService } = React.useContext(GameStateContext)
    const [tutorialStep, setTutorialStep] = React.useState(0)

    const handleFinishTutorial = React.useCallback(() => {
        gameStateService.send({ type: 'INTRO_COMPLETED' })
    }, [])

    return (
        <div className="bg-black w-full h-full">
            <BaseDefenseScreenBackground>
                <DotGridOne>
                    <DotGridTwo className="flex crt zoom">
                        {tutorialStep === 0 && (
                            <StyledTutorialScreenContent>
                                {/* <div className="scanline block m-0 m-x-auto mb-2rem" /> */}
                                <StyledScreenshot
                                    src={opScreen01Img}
                                    alt="Operation Screen"
                                    className="scanline"
                                />
                                <StyledSmallContent>
                                    <h2 style={{ marginBottom: '.2rem' }}>
                                        WELCOME TO THE TUTORIAL!
                                    </h2>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        In every game of DINO MERCS, you switch between going on the
                                        offense and the defense. On the offense, you go on
                                        Operations to complete your mission. On Operations, you will
                                        likely encounter enemies and engage in combat.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(1)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleFinishTutorial}
                                            style={{ width: '100px', cursor: 'pointer' }}
                                        >
                                            SKIP
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 1 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot
                                    src={opScreen02Img}
                                    alt="Operation Screen Card Slots"
                                />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        Between going on Operations, you will need to defend your
                                        Forward Operating Base from enemy attackers.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(2)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 2 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot
                                    src={opScreen03Img}
                                    alt="Operation Screen Card Slots"
                                />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        Each round of an Operation, Combat Encounter, or Base
                                        Defense, you will be dealt 5 cards at a time. Each card will
                                        go into a position that will modify the card’s effect. Some
                                        positions modify cards positively, others, negatively.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(3)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 3 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot
                                    src={opScreen02Img}
                                    alt="Operation Screen Card Slots"
                                />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        You can change the positions of cards freely by dragging and
                                        dropping cards around. Hit the{' '}
                                        <span>CONFIRM CARD POSITIONS</span> button once you’ve
                                        positioned your cards exactly how you like. Choose wisely to
                                        survive.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(4)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 4 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot src={barsImg} alt="Health and Shield Bars" />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        When you get attacked by enemies, you will take damage. You
                                        have a shield that will block damage until it is breached.
                                        After that, damage reduces your HP (health points). If your
                                        HP reaches 0, you die, and the game is over. After every
                                        fight with an enemy, your shield and HP will recover.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(5)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 5 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot
                                    src={tutorialBaseHp}
                                    alt="Base Health Points Bar"
                                />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        Your Base also has a certain amount of HP. If your Base HP
                                        reaches 0, your Base is destroyed, and the game is over. At
                                        the beginning of each Base Defense round, your base will
                                        receive repairs as long as you have enough supplies and
                                        personnel.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(6)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 6 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot
                                    src={tutorialStatusesStats}
                                    alt="Statuses and Stats"
                                />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        Statuses affect how much damage you (and enemies) take and
                                        deal. Card effects will impart or take away Statuses.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(7)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 7 && (
                            <StyledTutorialScreenContent>
                                <StyledScreenshot
                                    src={tutorialStatusesStats}
                                    alt="Statuses and Stats"
                                />
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        While on Operations, you can gain supplies. Supplies are
                                        used to repair and power your Base. In turn, your Base
                                        generates money that can be used to buy cards and gives you
                                        supply points that make some cards deadlier.
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={() => setTutorialStep(8)}
                                            style={{
                                                width: '100px',
                                                marginRight: '1.5rem',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            NEXT
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                        {tutorialStep === 8 && (
                            <StyledTutorialScreenContent>
                                <StyledSmallContent>
                                    <p style={{ marginBottom: '2.5rem' }}>
                                        If enemies overtake you or your Base, you will have to start
                                        the game over. With each new game, you have the opportunity
                                        to get better at surviving and using cards in more effective
                                        combinations. After time, you might just become one of the
                                        greatest mercenaries the star system has ever seen!
                                    </p>
                                    <StyledButtons>
                                        <button
                                            type="button"
                                            onClick={handleFinishTutorial}
                                            style={{
                                                width: '175px',
                                                margin: '0 auto',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            START GAME
                                        </button>
                                    </StyledButtons>
                                </StyledSmallContent>
                            </StyledTutorialScreenContent>
                        )}
                    </DotGridTwo>
                </DotGridOne>
            </BaseDefenseScreenBackground>
        </div>
    )
}
