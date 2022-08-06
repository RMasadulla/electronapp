import * as React from 'react'
import { Immutable } from 'immer'
import styled from 'styled-components'

import { AnimatedList } from '@/components/shared/AnimatedList'

import { Bark as BarkType } from '@/types'
import { BLACK } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

type Alignment = 'left' | 'center' | 'right'

const StyledBarks = styled.ul<{ alignment: Alignment }>`
    width: 375px;
    display: flex;
    flex-direction: column;
    align-items: ${props => (props.alignment === 'right' ? 'flex-end' : 'flex-start')};
    position: absolute;
    bottom: 125px;
    ${props => props.alignment === 'right' && `right: 415px;`}
    ${props => props.alignment === 'left' && `left: 415px;`}
    ${props => props.alignment === 'center' && `right: 0; left: 0;`}
    ${props => props.alignment === 'center' && `bottom: 80px;`}
    margin: auto;
    z-index: 30;

    & div:not(:first-child) {
        li {
            opacity: 0.75;
        }
    }
`

const StyledBark = styled.li<{ alignment: Alignment; color: string }>`
    position: relative;
    max-width: 375px;
    ${props => props.alignment === 'center' && `width: 375px;`}
    background: ${hexToRGBA(BLACK, 0.65)};
    border: 1px solid ${props => hexToRGBA(props.color, 0.65)};
    border-bottom: 3px solid ${props => hexToRGBA(props.color, 0.65)};
    border-radius: 4px;
    margin: 5px 0;
    padding: 5px;
    font-size: 1.15rem;
    color: ${props => hexToRGBA(props.color)};
    list-style: none;
    text-align: ${props => props.alignment};

    &:after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto 0;
        ${props => props.alignment === 'right' && `right: -12px;`}
        ${props => props.alignment === 'left' && `left: -12px;`}
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        ${props =>
            props.alignment === 'left'
                ? `border-right: 7px solid ${hexToRGBA(props.color, 0.5)}`
                : props.alignment === 'right'
                ? `border-left: 7px solid ${hexToRGBA(props.color, 0.5)}`
                : `border: none`};
    }
`

const Bark = ({
    bark,
    alignment,
    color,
}: {
    bark: BarkType
    alignment: Alignment
    color: string
}) => (
    <StyledBark alignment={alignment} color={color}>
        {bark.text}
    </StyledBark>
)

type BarksProps = Immutable<{
    barks: BarkType[]
    alignment: Alignment
    color: string
}>

export function Barks({ barks = [], alignment, color }: BarksProps) {
    return (
        <StyledBarks alignment={alignment}>
            <AnimatedList animation="grow">
                {barks.map(bark => (
                    <Bark key={bark.id} bark={bark} alignment={alignment} color={color} />
                ))}
            </AnimatedList>
        </StyledBarks>
    )
}
