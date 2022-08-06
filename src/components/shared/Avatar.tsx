import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import { AnimationStates } from '@/types'
import { LazyImg } from './LazyImg'

const AnimationContainer = styled.div`
    width: 450px;
    height: 450px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 4;

    will-change: transform, opacity;
    opacity: 0;
    transform: translateX(-500px);
    transition: opacity 500ms ease-in-out, transform 200ms ease-in-out;

    &.init {
        opacity: 1;
        transform: translateX(0px);
    }

    &.idle {
        opacity: 1;
        transform: translateX(0px);
    }

    &.attack {
        opacity: 1;
        transform: translateX(-25px);
    }

    &.hit {
        opacity: 1;
        transition-delay: 200ms;
        transform: translateX(25px);
    }
`

type Props = {
    characterImage: string
    animationState?: AnimationStates
    shield?: number
    color: string
    w?: number
    h?: number
    r?: number
    l?: number
    b?: number
}

export function Avatar({ characterImage, animationState, shield, color, w, h, r, l, b }: Props) {
    return (
        <AnimationContainer
            className={classNames({
                init: animationState === AnimationStates.Init,
                idle: animationState === AnimationStates.Idle,
                attack: animationState === AnimationStates.Attack,
                hit: animationState === AnimationStates.Hit,
            })}
        >
            <LazyImg
                src={characterImage}
                alt="Character"
                w={w}
                h={h}
                l={l}
                r={r}
                b={b}
                className="absolute"
                shield={shield}
                color={color}
                dropShadow
            />
        </AnimationContainer>
    )
}
