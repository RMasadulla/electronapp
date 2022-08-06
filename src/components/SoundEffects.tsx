import * as React from 'react'
import styled from 'styled-components'
import { Transition, TransitionStatus } from 'react-transition-group'

import { BLACK, DARK_GRAY, ORANGE, WHITE } from '@/utils/colors'

const TextOverlay = styled.div<{ state: TransitionStatus }>`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 200px;
    width: 100vw;
    margin: auto;
    font-size: 100px;
    text-align: center;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${WHITE};
    font-size: 100px;
    background: linear-gradient(${ORANGE}, ${DARK_GRAY} 50%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(5px 5px ${BLACK});
    font-family: 'Karantina';
    text-transform: uppercase;
    transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;

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

    transform: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 'scale(1.2)'
            case 'entered':
                return 'scale(1.2)'
            case 'exiting':
                return 'scale(1.2)'
            case 'exited':
                return 'scale(0)'
            default:
                return 'scale(0)'
        }
    }};

    z-index: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 10
            case 'entered':
                return 10
            case 'exiting':
                return 10
            case 'exited':
                return 10
            default:
                return 0
        }
    }};
`

type SoundEffectProps = {
    effect: string
}

export function SoundEffects({ effect }: SoundEffectProps) {
    const [showSoundEffect, setShowSoundEffect] = React.useState(false)

    const animate = React.useCallback(() => {
        setShowSoundEffect(true)
        setTimeout(() => setShowSoundEffect(false), 250)
    }, [])

    React.useEffect(() => {
        if (!effect) return
        setTimeout(() => animate(), 250)
    }, [effect])

    return (
        <Transition in={showSoundEffect} timeout={500}>
            {state => <TextOverlay state={state}>{effect}</TextOverlay>}
        </Transition>
    )
}
