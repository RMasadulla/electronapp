import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'
import { Transition, TransitionStatus } from 'react-transition-group'

import { Card } from '@/components/shared/Card'

import { BLACK, WHITE, LIGHT_BLUE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'
import { selectBaseDefense } from '@/engine/game/selectors'

const StyledCardOverlayContainer = styled.div<{ state: TransitionStatus }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 0;
    opacity: 0;
    transition: opacity 400ms ease-in-out;

    opacity: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 1
            case 'entered':
                return 1
            case 'exiting':
                return 1
            case 'exited':
                return 0
            default:
                return 0
        }
    }};

    z-index: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 999
            case 'entered':
                return 999
            case 'exiting':
                return 999
            case 'exited':
                return 0
            default:
                return 0
        }
    }};
`

const StyledCardOverlayBackground = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    z-index: 20;
    background: ${hexToRGBA(BLACK, 0.8)};
`

const StyledCardOverlayContent = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 700px;
    height: 360px;
`

const StyledCardOverlay = styled.div<{ primaryColor: string }>`
    width: 400px;
    color: ${props => props.primaryColor};
    z-index: 21;
    font-size: 1.15rem;

    & > div:first-of-type {
        margin: 0;
    }
`

const StyledSmallText = styled.p`
    font-size: 0.9rem;
    margin: 20px 0 0;
`

const StyledButton = styled.button<{ primaryColor: string }>`
    background-color: ${props => props.primaryColor};
    color: ${WHITE};
    border: none;
    padding: 5px 10px;
    margin-top: 30px;
    cursor: pointer;
`

export function BaseDefenseCardOverlay() {
    const { gameStateService } = React.useContext(GameStateContext)
    const baseDefense = useSelector(gameStateService, selectBaseDefense)

    const continueAfterAttackerCardIsInjected = React.useCallback(() => {
        gameStateService.send({ type: 'BASE_DEFENSE_INJECT_ATTACKER_PHASE_ENDS' }, { delay: 2000 })
    }, [gameStateService])

    const [showCard, setShowCard] = React.useState(false)

    const animate = React.useCallback(() => {
        setShowCard(true)
    }, [])

    React.useEffect(() => {
        if (!baseDefense.currentBaseAttacker) return
        setTimeout(() => animate(), 200)
    }, [baseDefense.currentBaseAttacker])

    const handleContinue = () => {
        setShowCard(false)
        continueAfterAttackerCardIsInjected()
    }

    return baseDefense.currentBaseAttacker ? (
        <Transition in={showCard} timeout={400}>
            {state => (
                <StyledCardOverlayContainer state={state}>
                    <StyledCardOverlayBackground className="crt">
                        <StyledCardOverlayContent>
                            <div className="box-border relative grid h-full grid-cols-12 gap-4 col-start-auto col-span-12 max-w-[575px]">
                                <div className="col-span-6">
                                    <StyledCardOverlay primaryColor={LIGHT_BLUE}>
                                        {baseDefense.currentBaseAttacker && (
                                            <Card
                                                key={baseDefense.currentBaseAttacker?.id}
                                                card={baseDefense.currentBaseAttacker}
                                                primaryColor={LIGHT_BLUE}
                                                isSelected={false}
                                                index={0}
                                            />
                                        )}
                                    </StyledCardOverlay>
                                </div>
                                <div className="col-span-6">
                                    <StyledCardOverlay primaryColor={LIGHT_BLUE}>
                                        <p className="mt-[5rem] text-2xl">
                                            WARNING: <br />
                                        </p>

                                        <p>
                                            A BASE ATTACKER CARD IS ADDED TO YOUR DECK EVERY ROUND
                                            OF DEFENDING YOUR FORWARD OPERATING BASE.
                                        </p>

                                        <StyledSmallText>
                                            THESE CARDS WILL BE REMOVED FROM YOUR DECK AFTER YOU
                                            HAVE SUCCESSFULLY DEFENDED YOUR BASE FROM ATTACKERS
                                        </StyledSmallText>
                                        <StyledButton
                                            onClick={handleContinue}
                                            primaryColor={LIGHT_BLUE}
                                        >
                                            CONTINUE
                                        </StyledButton>
                                    </StyledCardOverlay>
                                </div>
                            </div>
                        </StyledCardOverlayContent>
                    </StyledCardOverlayBackground>
                </StyledCardOverlayContainer>
            )}
        </Transition>
    ) : null
}
