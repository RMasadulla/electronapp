import * as React from 'react'
import styled from 'styled-components'

import { Typer } from '@/components/shared/Typer'
import { VideoBackground } from '@/components/shared/VideoBackground'
import { LazyImg } from '@/components/shared/LazyImg'

import { LIGHT_GRAY, LIGHT_BLUE, RED, YELLOW, BLACK, GRAY } from '@/utils/colors'
import { GameStateContext } from '@/engine/game/context'
import { Characters } from '@/types'
import { hexToRGBA } from '@/utils/helpers'

import allosaurusCharacter from '/images/allosaurus.gif'
import EmbersBgVideo from '/images/embers.mp4'

const StyledCharacterSection = styled.div<{ color: string }>`
    display: flex;
    position: relative;
    height: 100%;
    border: 2px solid ${props => props.color};
    border-radius: 2px;
    transition: all 100ms ease-in-out;
    background-color: ${hexToRGBA(BLACK, 0.7)};
    z-index: 20;
    overflow: hidden;

    &:hover {
        transform: scale(1.025);
        cursor: pointer;
    }

    &.disabled {
        border: 1px solid ${GRAY};

        * {
            color: ${GRAY};
        }

        &:hover {
            transform: scale(1);
            cursor: not-allowed;
        }
    }
`

const StyledCharacterDescription = styled.div`
    margin-top: auto;
    height: 300px;
    width: 100%;
    padding: 0 30px 20px;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    position: relative;
    z-index: 20;
    text-shadow: 0 15px 20px ${hexToRGBA(BLACK, 0.75)};
`

const StyledCharacterTitle = styled.h2<{ color: string }>`
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.85rem;
    text-transform: uppercase;
    color: ${props => props.color};
`

const StyledCharacterFlavorText = styled.p`
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
    min-height: 145px;
`

const StyledCharacterInfoText = styled.p<{ color: string }>`
    font-size: 1.2rem;
    text-transform: uppercase;
    color: ${props => props.color};
    align-content: flex-end;
`

export function CharacterSelectionScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const { send } = gameStateService

    const handleChooseCharacter = React.useCallback(
        (characterChoice: Characters) => {
            send({ type: 'CHOOSE_CHARACTER', characterChoice })
        },
        [gameStateService],
    )

    return (
        <div className="box-border grid h-full grid-cols-12 gap-6 col-start-auto col-span-12 p-6 crt zoom">
            <VideoBackground video={EmbersBgVideo} />
            <StyledCharacterSection
                color={YELLOW}
                className="col-start-auto col-span-3"
                onClick={() => handleChooseCharacter(Characters.STRYKR)}
            >
                <div className="absolute top-0 left-[-125px]">
                    <LazyImg
                        w={650}
                        src={allosaurusCharacter}
                        alt="STRYKYR ALLOSAURUS PLAYABLE CHARACTER POSING"
                        dropShadow
                        shield={25}
                        color={YELLOW}
                    />
                </div>
                <StyledCharacterDescription>
                    <Typer>
                        <StyledCharacterTitle color={YELLOW}>STRYKR</StyledCharacterTitle>
                        <StyledCharacterFlavorText>
                            STRYKR is a long time contracter with Dark Solar Defense. Considered one
                            of the most reliable assets the company has, Strykr has been deployed on
                            countless missions, and has a high success rate.
                        </StyledCharacterFlavorText>
                        <StyledCharacterInfoText color={YELLOW}>
                            bonus: grants access to additional operation cards.
                        </StyledCharacterInfoText>
                    </Typer>
                </StyledCharacterDescription>
            </StyledCharacterSection>
            <StyledCharacterSection
                color={RED}
                className="col-start-auto col-span-3 disabled"
                onClick={() => handleChooseCharacter(Characters.BIRTIE_RAE)}
            >
                <p className="absolute inset-0 mx-auto mt-52 text-[#636363] text-center text-[300px]">
                    ?
                </p>
                <StyledCharacterDescription>
                    <Typer>
                        <StyledCharacterTitle color={RED}>BIRTIE-RAE</StyledCharacterTitle>
                        <StyledCharacterFlavorText>
                            BIRTIE-RAE might be one of Dark Solar Defense’s most coveted assets. She
                            is deployed anytime the company is unable to make headway on the
                            battlefield. BIRTIE-RAE will smash through any defense and complete any
                            mission, leaving enemies stunned and in disarray.
                        </StyledCharacterFlavorText>
                        <StyledCharacterInfoText color={RED}>
                            bonus: grants access to PRIMAL FURY cards.
                        </StyledCharacterInfoText>
                    </Typer>
                </StyledCharacterDescription>
            </StyledCharacterSection>
            <StyledCharacterSection
                color={LIGHT_BLUE}
                className="col-start-auto col-span-3 disabled"
                onClick={() => handleChooseCharacter(Characters.BATTERY)}
            >
                <p className="absolute inset-0 mx-auto mt-52 text-[#636363] text-center text-[300px]">
                    ?
                </p>
                <StyledCharacterDescription>
                    <Typer>
                        <StyledCharacterTitle color={LIGHT_BLUE}>BATTERY</StyledCharacterTitle>
                        <StyledCharacterFlavorText>
                            BATTERY is DSD’s highly valued defense asset. She has protected
                            countless strategic points and civilian areas from attack and has earned
                            a reputation for being undefeatable in combat. When needed, she will
                            also participate in missions that require going on the offense.
                        </StyledCharacterFlavorText>
                        <StyledCharacterInfoText color={LIGHT_BLUE}>
                            bonus: grants access to additional powerful defense cards
                        </StyledCharacterInfoText>
                    </Typer>
                </StyledCharacterDescription>
            </StyledCharacterSection>
            <StyledCharacterSection
                color={LIGHT_GRAY}
                className="col-start-auto col-span-3 disabled"
                onClick={() => handleChooseCharacter(Characters.EPHEMERIS)}
            >
                <p className="absolute inset-0 mx-auto mt-52 text-[#636363] text-center text-[300px]">
                    ?
                </p>
                <StyledCharacterDescription>
                    <Typer>
                        <StyledCharacterTitle color={LIGHT_GRAY}>Ephemeris</StyledCharacterTitle>
                        <StyledCharacterFlavorText>
                            Ephemeris is Dark Solar Defense’s designated stealth and special
                            reconnaissance operator. Often operating alone, he undertakes some of
                            DSD’s most dangerous missions. No one sees him coming, and no one sees
                            him descend back into the shadows after a mission is complete.
                        </StyledCharacterFlavorText>
                        <StyledCharacterInfoText color={LIGHT_GRAY}>
                            bonus: grants access to STEALTH status and cards.
                        </StyledCharacterInfoText>
                    </Typer>
                </StyledCharacterDescription>
            </StyledCharacterSection>
        </div>
    )
}
