import React from 'react'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import { Immutable } from 'immer'

import { ORANGE, WHITE } from '@/utils/colors'
import { SceneEvent, EventChoice } from '@/types'

const StyledEventTitle = styled.h1`
    font-size: 2rem;
    color: ${ORANGE};
    border-bottom: 1px solid ${ORANGE};
    max-width: 450px;
`

const StyledEventText = styled.p`
    font-size: 1.4rem;
    color: ${WHITE};
`

const StyledEventChoice = styled(StyledEventText)`
    color: ${ORANGE};
    margin-bottom: 2rem;
    &:hover {
        text-shadow: 0px 0px 10px ${ORANGE};
        cursor: pointer;
    }
`

type EventModalProps = Immutable<{
    isOpen: boolean
    setIsEventModalOpen: (isOpen: boolean) => void
    event: SceneEvent
    applyEventChoice: (choice: EventChoice) => void
}>

export const EventModal = React.memo(
    ({ isOpen, setIsEventModalOpen, event, applyEventChoice }: EventModalProps) => {
        const handleEventChoiceOne = React.useCallback(() => {
            setIsEventModalOpen(false)
            if (!event.details?.choiceOne || !applyEventChoice) return
            applyEventChoice(event.details?.choiceOne)
            if (!event.details?.choiceOne.callback) return
            setTimeout(() => {
                event.details?.choiceOne.callback()
            }, 1000)
        }, [event.details, applyEventChoice])

        const handleEventChoiceTwo = React.useCallback(() => {
            setIsEventModalOpen(false)
            if (!event.details?.choiceTwo || !applyEventChoice) return
            applyEventChoice(event.details?.choiceTwo)
            if (!event.details?.choiceTwo.callback) return
            setTimeout(() => {
                event.details?.choiceTwo.callback()
            }, 1000)
        }, [event.details, applyEventChoice])

        return (
            <Modal open={isOpen} aria-labelledby="Event" aria-describedby="Event" className="zoom">
                <div className="flex h-full w-full">
                    <div
                        className="m-auto w-[900px] h-[500px] relative bg-dm-dark-gray border border-opacity-20 border-dm-orange rounded-lg"
                        style={{
                            boxShadow: `0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12),
                         0 1px 1px rgba(0,0,0,0.12),
                         0 2px 2px rgba(0,0,0,0.12),
                         0 4px 4px rgba(0,0,0,0.12),
                         0 8px 8px rgba(0,0,0,0.12),
                         0 16px 16px rgba(0,0,0,0.12)`,
                        }}
                    >
                        <div className="box-border relative crt px-[3rem] py-[3rem] pt-[1rem] w-[900px] h-[500px]">
                            <StyledEventTitle>{event.details?.name}</StyledEventTitle>
                            <StyledEventText>{event.details?.description}</StyledEventText>
                            <br />
                            <br />
                            <StyledEventChoice onClick={handleEventChoiceOne}>
                                1: {event.details?.choiceOne.text}
                            </StyledEventChoice>
                            <StyledEventChoice onClick={handleEventChoiceTwo}>
                                2: {event.details?.choiceTwo.text}
                            </StyledEventChoice>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    },
)
