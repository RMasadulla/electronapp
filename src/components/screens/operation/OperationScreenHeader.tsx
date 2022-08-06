import * as React from 'react'
import styled from 'styled-components'

import { ScreenHeader } from '@/components/shared/ScreenHeader'

import { OperationContext, Scenes } from '@/types'
import { YELLOW } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

const StyledHeader = styled.div`
    margin: -0.75rem auto 0;
    padding: 1rem 0 0.5rem;
    border: 1px solid ${hexToRGBA(YELLOW, 0.75)};
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
        border: 1px solid ${hexToRGBA(YELLOW, 0.75)};
        border-radius: 9px;
        box-shadow: 0px 0px 75px 0 ${hexToRGBA(YELLOW, 0.15)},
            0px 0px 75px 0 ${hexToRGBA(YELLOW, 0.15)}, 0px 0px 75px 0 ${hexToRGBA(YELLOW, 0.15)},
            0px 0px 75px 0 ${hexToRGBA(YELLOW, 0.15)};
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
        color: ${hexToRGBA(YELLOW, 0.75)};
    }
`

const RoundCounter = styled.h4`
    padding: 0;
    margin: 0;
    font-size: 4rem;
    line-height: 0.85;
    text-shadow: 0px 0px 5px ${hexToRGBA(YELLOW, 0.95)};
    border-radius: 7px;
    text-align: center;
`

const OperationTitle = styled.h1`
    margin: 0;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
`

export function OperationScreenHeader({ operation }: { operation: OperationContext }) {
    if (!operation) return null
    return (
        <ScreenHeader
            variation={Scenes.Operation}
            deck={operation.deck}
            discardPile={operation.discardPile}
            drainedPile={operation.drainedCards}
        >
            <StyledHeader>
                <div className="box-border h-full grid-cols-12 gap-4 col-start-auto col-span-12 text-dm-yellow">
                    <RoundCounter className="text-dm-yellow">
                        ROUND {operation.round}/4
                    </RoundCounter>
                    <OperationTitle className="text-dm-yellow">{operation.name}</OperationTitle>
                </div>
            </StyledHeader>
        </ScreenHeader>
    )
}
