import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector } from '@xstate/react'
import pluralize from 'pluralize'

import { Hand } from '@/components/shared/Hand'
import { Button } from '@/components/shared/Button'
import { Tooltip } from '@/components/shared/Tooltip'
import { ConfirmationModal } from '@/components/shared/ConfirmationModal'
import { FetchModal } from '@/components/shared/FetchModal'
import { EventModal } from '@/components/shared/EventModal'

import { Card, CardEffects, Slot, Cards, Scenes, EventChoice, OperationContext } from '@/types'
import { RED, BLACK, MERINGUE, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'
import { UIVariations } from '@/utils/ui'
import {
    selectPlayer,
    selectBase,
    selectEnemy,
    selectIsOpPositioningPhase,
    selectIsOpDiscardPhase,
    selectIsOpResolvePhaseEventOne,
    selectIsOpResolvePhaseEventFive,
    selectIsOpResolvePhaseEventFour,
    selectIsOpResolvePhaseEventThree,
    selectIsOpResolvePhaseEventTwo,
} from '@/engine/game/selectors'

const AbortOpButton = styled.button`
    background: ${hexToRGBA(BLACK, 0.5)};
    border: 1px solid ${RED};
    padding: 10px 20px;
    width: auto;
    height: 50px;
    text-align: center;
    color: ${RED};
    line-height: 1;
    cursor: pointer;
    transition: box-shadow 0.25s ease-in-out;
    letter-spacing: 1px;

    &:hover {
        box-shadow: 0px 0px 10px 0 ${RED}, 0px 0px 10px 0 ${RED};
    }

    &:disabled {
        color: ${BLACK};
    }
`

const pulse = () => keyframes`
	0% {
		transform: scale(0.99);
		box-shadow: 0px 0px 10px 0 ${hexToRGBA(RED, 0.9)}, 0px 0px 10px 0 ${hexToRGBA(RED, 0.9)};
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.99);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`

const StyledCombatEncounterWarning = styled.p`
    position: absolute;
    bottom: 550px;
    left: 0;
    right: 0;
    margin: auto;
    height: 25px;
    width: 285px;
    text-transform: uppercase;
    text-align: center;
    color: ${RED};
    font-size: 1.25rem;
    /* border: 1px solid ${RED}; */
    box-shadow: 0px 0px 10px 0 ${hexToRGBA(RED, 0.5)}, 0px 0px 10px 0 ${hexToRGBA(RED, 0.5)};
    background: ${hexToRGBA(BLACK, 0.5)};
    animation: ${pulse} 2s infinite;
`

export function OperationMiddleContent({ operation }: { operation: OperationContext }) {
    const uiElements = UIVariations[Scenes.Operation]

    const { gameStateService } = React.useContext(GameStateContext)
    const player = useSelector(gameStateService, selectPlayer)
    const enemy = useSelector(gameStateService, selectEnemy)
    const base = useSelector(gameStateService, selectBase)
    const { send } = gameStateService

    const [isFetchModalOpen, setIsFetchModalOpen] = React.useState(false)
    const [selectedFetchSlot, setSelectedFetchSlot] = React.useState<Slot | null>(null)
    const openFetchModal = (slot: Slot) => {
        setIsFetchModalOpen(true)
        setSelectedFetchSlot(slot)
    }

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(false)
    const openConfirmationModal = () => setIsConfirmationModalOpen(true)

    const fetchCard = React.useCallback((originalCard: Card, newCard: Card) => {
        send({
            type: 'FETCH_OPERATION_CARD',
            originalCard,
            newCard,
        })
    }, [])

    const setHand = React.useCallback((updatedHand: Cards) => {
        send({ type: 'SET_OPERATION_HAND', updatedHand })
    }, [])

    const confirmCardSelections = React.useCallback(() => {
        send({ type: 'OPERATION_CONFIRM_CARD_SELECTIONS' })
    }, [])

    const abortOperation = React.useCallback(() => {
        send({ type: 'ABORT_OPERATION' })
    }, [])

    const applyEventChoice = React.useCallback((choice: EventChoice) => {
        send({ type: 'APPLY_OPERATION_EVENT_CHOICE', choice })
    }, [])

    const isPositioningPhase = useSelector(gameStateService, selectIsOpPositioningPhase)
    const isDiscardPhase = useSelector(gameStateService, selectIsOpDiscardPhase)

    const isPhaseOneEventActive = useSelector(gameStateService, selectIsOpResolvePhaseEventOne)
    const isPhaseTwoEventActive = useSelector(gameStateService, selectIsOpResolvePhaseEventTwo)
    const isPhaseThreeEventActive = useSelector(gameStateService, selectIsOpResolvePhaseEventThree)
    const isPhaseFourEventActive = useSelector(gameStateService, selectIsOpResolvePhaseEventFour)
    const isPhaseFiveEventActive = useSelector(gameStateService, selectIsOpResolvePhaseEventFive)

    const [isEventModalOpen, setIsEventModalOpen] = React.useState(false)
    React.useEffect(() => {
        const isEventActive =
            isPhaseOneEventActive ||
            isPhaseTwoEventActive ||
            isPhaseThreeEventActive ||
            isPhaseFourEventActive ||
            isPhaseFiveEventActive
        setIsEventModalOpen(isEventActive)
    }, [
        isPhaseOneEventActive,
        isPhaseTwoEventActive,
        isPhaseThreeEventActive,
        isPhaseFourEventActive,
        isPhaseFiveEventActive,
    ])

    const cards = operation.slots ? Object.values(operation.slots).map(s => s.card) : []

    const unplayedFetchCardsExist = React.useMemo(
        () =>
            Object.values(operation.slots).some(slot => {
                const effects = slot.card?.effects[slot.type] as CardEffects
                if (effects && effects.player && 'other' in effects.player) {
                    return effects?.player?.other?.fetch && operation.deck.length > 0
                }
                return false
            }),
        [operation.slots, operation.deck],
    )

    const upcomingCombatEncounterCount = React.useMemo(
        () =>
            Object.values(operation.slots).reduce(
                (count, slot) => (slot.card?.transitionToCombat ? count + 1 : count),
                0,
            ),
        [operation.slots],
    )

    return (
        <div className="h-[350px] box-border grid grid-cols-12 gap-4 col-start-auto col-span-12 absolute inset-0 m-auto z-50">
            <div className="w-[1350px] m-auto absolute inset-0">
                <Hand
                    cards={cards}
                    player={player}
                    enemy={enemy}
                    baseHp={base.stats.hp}
                    primaryColor={uiElements.primaryColor}
                    slots={operation.slots}
                    openFetchModal={openFetchModal}
                    setHand={setHand}
                    currentPlayedCard={operation.currentPlayedCard}
                    isDiscardPhase={isDiscardPhase}
                    deckSize={operation.deck.length}
                />

                <div className="flex items-center justify-center mt-[40px]">
                    <div
                        className="max-w-lg p-3"
                        style={{
                            backgroundImage: `linear-gradient(
                            45deg,
                            ${hexToRGBA(WHITE, 0)} 25%,
                            ${hexToRGBA(WHITE, 0.5)} 25%,
                            ${hexToRGBA(WHITE, 0.5)} 50%,
                            ${hexToRGBA(WHITE, 0)} 50%,
                            ${hexToRGBA(WHITE, 0)} 75%,
                            ${hexToRGBA(WHITE, 0.5)} 75%,
                            ${hexToRGBA(WHITE, 0.5)} 100%
                        )`,
                            backgroundSize: '4px 4px',
                            borderRadius: '10px',
                        }}
                    >
                        <Tooltip
                            content="You must use Fetch cards before cards can be resolved"
                            direction="bottom"
                            color={uiElements.primaryColor}
                            disable={!unplayedFetchCardsExist}
                        >
                            <Button
                                primaryColor={MERINGUE}
                                disabled={!isPositioningPhase || unplayedFetchCardsExist}
                                onClick={confirmCardSelections}
                                style={{ marginRight: '15px' }}
                            >
                                CONFIRM CARD POSITIONS
                            </Button>
                        </Tooltip>

                        <AbortOpButton onClick={openConfirmationModal}>
                            ABORT OPERATION
                        </AbortOpButton>
                    </div>

                    {!!upcomingCombatEncounterCount && (
                        <StyledCombatEncounterWarning>
                            ALERT!{' '}
                            {pluralize('combat encounters', upcomingCombatEncounterCount, true)}{' '}
                            imminent
                        </StyledCombatEncounterWarning>
                    )}
                </div>
            </div>

            <FetchModal
                isOpen={isFetchModalOpen}
                setIsFetchModalOpen={setIsFetchModalOpen}
                selectedFetchSlot={selectedFetchSlot}
                openFetchModal={openFetchModal}
                primaryColor={uiElements.primaryColor}
                fetchCard={fetchCard}
                deck={operation.deck}
                player={player}
                enemy={enemy}
            />

            <EventModal
                isOpen={isEventModalOpen}
                setIsEventModalOpen={setIsEventModalOpen}
                event={operation.event}
                applyEventChoice={applyEventChoice}
            />

            <ConfirmationModal
                primaryColor={uiElements.primaryColor}
                finalAction={abortOperation}
                isOpen={isConfirmationModalOpen}
                setIsModalOpen={setIsConfirmationModalOpen}
                scene={uiElements.scene}
            />
        </div>
    )
}
