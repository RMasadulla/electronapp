import * as React from 'react'
import styled from 'styled-components'

import { ORANGE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { Transition, TransitionStatus } from 'react-transition-group'

const StyledMessage = styled.div<{ state: TransitionStatus }>`
    position: absolute;
    top: 0;
    right: 0;
    padding: 25px;
    font-size: 1.7rem;
    color: ${ORANGE};
    text-shadow: 0px 0px 20px ${hexToRGBA(ORANGE, 1)};
    z-index: 999;

    transition: transform 1000ms ease-in-out;
    transform: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 'translateX(-35px)'
            case 'entered':
                return 'translateX(-35px)'
            case 'exiting':
                return 'translateX(-35px)'
            case 'exited':
                return 'translateX(500px)'
            default:
                return 'translateX(500px)'
        }
    }};
`

export function GameSavedMessage() {
    const [show, setShow] = React.useState(false)

    const animate = React.useCallback(() => {
        const showMsgTimer = setTimeout(() => setShow(true), 1000)
        const hideMsgTimer = setTimeout(() => setShow(false), 1700)
        return { showMsgTimer, hideMsgTimer }
    }, [])

    React.useEffect(() => {
        const { showMsgTimer, hideMsgTimer } = animate()
        return () => {
            clearTimeout(showMsgTimer)
            clearTimeout(hideMsgTimer)
        }
    }, [])

    return (
        <Transition in={show} timeout={2700}>
            {state => <StyledMessage state={state}>GAME SAVED</StyledMessage>}
        </Transition>
    )
}
