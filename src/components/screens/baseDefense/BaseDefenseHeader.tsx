import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'

import { ScreenHeader } from '@/components/shared/ScreenHeader'

import { selectBaseDefense } from '@/engine/game/selectors'
import { GameStateContext } from '@/engine/game/context'
import { LIGHT_BLUE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { Scenes } from '@/types'

const StyledHeader = styled.div`
    margin: -0.75rem auto 0;
    padding: 1rem 0 0.5rem;
    border: 1px solid ${hexToRGBA(LIGHT_BLUE, 0.75)};
    border-radius: 7px;
    width: 325px;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: -8px;
        bottom: 0;
        left: -5px;
        right: 0;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border: 1px solid ${hexToRGBA(LIGHT_BLUE, 0.75)};
        border-radius: 9px;
        box-shadow: 0px 0px 75px 0 ${hexToRGBA(LIGHT_BLUE, 0.15)},
            0px 0px 75px 0 ${hexToRGBA(LIGHT_BLUE, 0.15)},
            0px 0px 75px 0 ${hexToRGBA(LIGHT_BLUE, 0.15)},
            0px 0px 75px 0 ${hexToRGBA(LIGHT_BLUE, 0.15)};
    }

    &::before {
        content: 'DSD000';
        position: absolute;
        bottom: 10px;
        left: -10px;
        padding: 0 4px;
        width: 25px;
        font-size: 0.85rem;
        transform: rotate(-90deg);
        color: ${hexToRGBA(LIGHT_BLUE, 0.75)};
    }
`

const RoundCounter = styled.h4`
    padding: 0;
    margin: 0;
    font-size: 4rem;
    line-height: 0.85;
    text-shadow: 0px 0px 5px ${hexToRGBA(LIGHT_BLUE, 0.95)};
    border-radius: 7px;
    text-align: center;
    color: ${hexToRGBA(LIGHT_BLUE, 1)};
`

const StyledCombatSubHeading = styled.h5`
    margin: 0;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    color: ${hexToRGBA(LIGHT_BLUE, 1)};
`

export function BaseDefenseHeader() {
    const { gameStateService } = React.useContext(GameStateContext)
    const baseDefense = useSelector(gameStateService, selectBaseDefense)
    return (
        <ScreenHeader
            variation={Scenes.BaseDefense}
            deck={baseDefense.deck}
            discardPile={baseDefense.discardPile}
            drainedPile={baseDefense.drainedCards}
        >
            <StyledHeader>
                <div className="box-border h-full grid-cols-12 gap-4 col-start-auto col-span-12">
                    <RoundCounter>ROUND {baseDefense.round}/10</RoundCounter>
                    <StyledCombatSubHeading>
                        DEFEND YOUR FORWARD OPERATING BASE
                    </StyledCombatSubHeading>
                </div>
            </StyledHeader>
        </ScreenHeader>
    )
}
