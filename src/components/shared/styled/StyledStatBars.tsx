import * as React from 'react'
import styled from 'styled-components'
import { Immutable } from 'immer'
import { isNil } from 'lodash'

import { Tooltip } from '@/components/shared/Tooltip'
import { Barks } from '@/components/shared/Barks'

import { BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA, getEntityHealthPoints } from '@/utils/helpers'
import { AnimationStates, Bark } from '@/types'
import { Avatar } from '../Avatar'

const ShieldIcon = ({ color }: { color: string }) => (
    <svg
        className="feather feather-shield"
        fill={color}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
)

const PlusIcon = ({ color }: { color: string }) => (
    <svg
        className="feather feather-plus"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <line x1="12" x2="12" y1="5" y2="19" />
        <line x1="5" x2="19" y1="12" y2="12" />
    </svg>
)

const StyledStatBar = styled.div<{ stat: number; maxStat: number; primaryColor: string }>`
    position: relative;
    top: 1px;
    left: 25px;
    height: 10px;
    width: calc(100% - 30px);
    font-size: 0.95rem;
    border: 1px solid ${({ primaryColor }) => hexToRGBA(primaryColor, 0.5)};
    transition: all 1s ease-in-out;
    margin: 7px 0 0 0;

    & > div {
        width: 100%;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 100%;
        height: 8px;
        width: ${({ stat, maxStat }) => getEntityHealthPoints(maxStat, stat)};
        font-size: 0.95rem;
        background-image: linear-gradient(
            45deg,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0)} 25%,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0.65)} 25%,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0.65)} 50%,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0)} 50%,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0)} 75%,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0.65)} 75%,
            ${({ primaryColor }) => hexToRGBA(primaryColor, 0.65)} 100%
        );
        background-size: 3px 3px;
        color: ${WHITE};
        text-align: center;
        will-change: width;
        transition: width 2.5s ease-in-out;
    }
`

const StyledPoints = styled.p`
    position: absolute;
    left: 0;
    right: 0;
    top: -5px;
    bottom: 0;
    font-size: 1.1rem;
    line-height: 0.4;
    margin: auto;
    color: ${WHITE};
    text-shadow: 0 0 5px ${BLACK}, 0 0 5px ${BLACK}, 0 0 5px ${BLACK};
    z-index: 2;
    width: 100%;
    height: 8px;
    text-align: center;
    letter-spacing: 1px;
`

const StyledIconContainer = styled.div<{ primaryColor: string }>`
    position: absolute;
    left: -26px;
    top: -6px;
    bottom: 0;
    height: 20px;
    width: 20px;
    padding: 2px;
    /* border: 1px solid ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)}; */
`

const StyledNamePlate = styled.div<{
    primaryColor: string
    alignment: 'left' | 'right' | 'center'
}>`
    width: auto;
    background-image: linear-gradient(
        45deg,
        ${hexToRGBA(BLACK, 0)} 25%,
        ${hexToRGBA(BLACK, 0.75)} 25%,
        ${hexToRGBA(BLACK, 0.75)} 50%,
        ${hexToRGBA(BLACK, 0)} 50%,
        ${hexToRGBA(BLACK, 0)} 75%,
        ${hexToRGBA(BLACK, 0.75)} 75%,
        ${hexToRGBA(BLACK, 0.75)} 100%
    );
    background-size: 4px 4px;
    color: ${props => props.primaryColor};
    font-size: 1.15rem;
    padding: 2px 3px 0px;
    line-height: 0.8;
    /* border: 1px solid ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)}; */
    margin-left: ${props =>
        props.alignment === 'left' || props.alignment === 'center' ? '0' : 'auto'};
    margin-right: ${props => (props.alignment === 'right' ? '4px' : 'auto')};
    z-index: 11;
`

const StyledStatBarContent = styled.div<{ isBase?: boolean }>`
    position: relative;
    height: 13px;
    width: 100%;
`

type StyledStatBarsProps = Immutable<{
    primaryColor: string
    characterColor: string
    hp: number
    maxHp: number
    shield?: number
    maxShield?: number
    name: string
    alignment: 'left' | 'right' | 'center'
    characterImage?: string
    isBase?: boolean
    barks: Bark[]
    characterAnimation?: AnimationStates
    mutilation?: number
    w?: number
    l?: number
    r?: number
    b?: number
}>

export function StyledStatBars({
    primaryColor,
    characterColor,
    hp,
    maxHp,
    shield,
    maxShield,
    characterAnimation,
    name,
    alignment,
    characterImage,
    isBase,
    barks,
    mutilation = 0,
    w,
    l,
    r,
    b,
}: StyledStatBarsProps) {
    return (
        <div className="mt-auto mb-0 mx-0 w-full relative">
            {characterImage && (
                <Avatar
                    characterImage={characterImage}
                    animationState={characterAnimation}
                    shield={shield}
                    color={characterColor}
                    w={w}
                    l={l}
                    r={r}
                    b={b}
                />
            )}
            <Barks barks={barks} color={primaryColor} alignment={alignment} />
            <div className="box-border pb-[10px] pl-[10px] pr-[10px] relative z-20">
                <div className="flex">
                    <StyledNamePlate primaryColor={primaryColor} alignment={alignment}>
                        {name}
                    </StyledNamePlate>
                </div>
                <div className="pb-[5px]">
                    {!isNil(shield) && !isNil(maxShield) && (
                        <StyledStatBar
                            stat={shield}
                            maxStat={maxShield}
                            primaryColor={primaryColor}
                        >
                            <Tooltip
                                key="shield-tooltip"
                                content="Shield blocks incoming damage. Your shield regenerates at the end of combat encounters."
                                direction="top"
                                color={primaryColor}
                            >
                                <StyledStatBarContent>
                                    <StyledIconContainer primaryColor={primaryColor}>
                                        <ShieldIcon color={primaryColor} />
                                    </StyledIconContainer>
                                    <StyledPoints>
                                        {shield ? `${shield}/${maxShield}` : 'SHIELD BREACHED'}
                                    </StyledPoints>
                                </StyledStatBarContent>
                            </Tooltip>
                        </StyledStatBar>
                    )}

                    <StyledStatBar stat={hp} maxStat={maxHp} primaryColor={primaryColor}>
                        <Tooltip
                            key="hp-tooltip"
                            content={
                                isBase
                                    ? 'Health Points (HP) determines how much unblocked damage your base can take before it is destroyed.'
                                    : mutilation
                                    ? `Health Points (HP) determines how much unblocked damage you can take before you die. -${mutilation} due to MUTILATED.`
                                    : 'Health Points (HP) determines how much unblocked damage you can take before you die.'
                            }
                            direction="top"
                            color={primaryColor}
                        >
                            <StyledStatBarContent isBase={isBase}>
                                <StyledIconContainer primaryColor={primaryColor}>
                                    <PlusIcon color={primaryColor} />
                                </StyledIconContainer>
                                <StyledPoints>
                                    {hp}/{maxHp - mutilation}
                                </StyledPoints>
                            </StyledStatBarContent>
                        </Tooltip>
                    </StyledStatBar>
                </div>
            </div>
        </div>
    )
}
