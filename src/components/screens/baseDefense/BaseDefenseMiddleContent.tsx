import React from 'react'

import { Hand } from '@/components/shared/Hand'
import { Button } from '@/components/shared/Button'
import { Tooltip } from '@/components/shared/Tooltip'

import { Card, CardEffects, Slot, Cards, Scenes, EventChoice } from '@/types'
import { MERINGUE, WHITE } from '@/utils/colors'
import { FetchModal } from '@/components/shared/FetchModal'
import { GameStateContext } from '@/engine/game/context'
import { UIVariations } from '@/utils/ui'
import { useActor, useSelector } from '@xstate/react'
import { EventModal } from '@/components/shared/EventModal'
import { selectBase, selectBaseDefense, selectPlayer } from '@/engine/game/selectors'
import { hexToRGBA } from '@/utils/helpers'

export function BaseDefenseMiddleContent() {
    const uiElements = UIVariations[Scenes.BaseDefense]

    const { gameStateService } = React.useContext(GameStateContext)
    const [state] = useActor(gameStateService)
    const player = useSelector(gameStateService, selectPlayer)
    const base = useSelector(gameStateService, selectBase)
    const baseDefense = useSelector(gameStateService, selectBaseDefense)

    const [isFetchModalOpen, setIsFetchModalOpen] = React.useState(false)
    const [selectedFetchSlot, setSelectedFetchSlot] = React.useState<Slot | null>(null)
    const openFetchModal = React.useCallback((slot: Slot) => {
        setIsFetchModalOpen(true)
        setSelectedFetchSlot(slot)
    }, [])

    const fetchCard = React.useCallback((originalCard: Card, newCard: Card) => {
        gameStateService.send({
            type: 'FETCH_BASE_DEFENSE_CARD',
            originalCard,
            newCard,
        })
    }, [])

    const setHand = React.useCallback((updatedHand: Cards) => {
        gameStateService.send({ type: 'SET_BASE_DEFENSE_HAND', updatedHand })
    }, [])

    const confirmCardSelections = React.useCallback(() => {
        gameStateService.send({ type: 'BASE_DEFENSE_CONFIRM_CARD_SELECTIONS' })
    }, [])

    const applyEventChoice = React.useCallback((choice: EventChoice) => {
        gameStateService.send({ type: 'APPLY_BASE_DEFENSE_EVENT_CHOICE', choice })
    }, [])

    const isPositioningPhase = state.matches('baseDefenseSelectionPhase')
    const isDiscardPhase = state.matches('baseDefenseDiscardPhase')

    const isEventActive =
        state.matches('baseDefenseResolvePhaseEventOne') ||
        state.matches('baseDefenseResolvePhaseEventTwo') ||
        state.matches('baseDefenseResolvePhaseEventThree') ||
        state.matches('baseDefenseResolvePhaseEventFour') ||
        state.matches('baseDefenseResolvePhaseEventFive')
    const [isEventModalOpen, setIsEventModalOpen] = React.useState(false)
    React.useEffect(() => {
        setIsEventModalOpen(isEventActive)
    }, [isEventActive])

    const cards = baseDefense.slots ? Object.values(baseDefense.slots).map(s => s.card) : []

    const unplayedFetchCardsExist = Object.values(baseDefense.slots).some(slot => {
        const effects = slot.card?.effects[slot.type] as CardEffects
        if (effects && effects.player && 'other' in effects.player) {
            return effects?.player?.other?.fetch && baseDefense.deck.length > 0
        }
        return false
    })

    return (
        <div className="h-[350px] box-border grid grid-cols-12 gap-4 col-start-auto col-span-12 absolute inset-0 m-auto z-50">
            <div className="w-[1350px] m-auto absolute inset-0">
                <Hand
                    cards={cards}
                    player={player}
                    baseHp={base.stats.hp}
                    primaryColor={uiElements.primaryColor}
                    slots={baseDefense.slots}
                    openFetchModal={openFetchModal}
                    setHand={setHand}
                    currentPlayedCard={baseDefense.currentPlayedCard}
                    isDiscardPhase={isDiscardPhase}
                    deckSize={baseDefense.deck.length}
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
                            >
                                CONFIRM CARD POSITIONS
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>

            {selectedFetchSlot && (
                <FetchModal
                    isOpen={isFetchModalOpen}
                    setIsFetchModalOpen={setIsFetchModalOpen}
                    selectedFetchSlot={selectedFetchSlot}
                    openFetchModal={openFetchModal}
                    primaryColor={uiElements.primaryColor}
                    fetchCard={fetchCard}
                    deck={baseDefense.deck}
                />
            )}

            <EventModal
                isOpen={isEventModalOpen}
                setIsEventModalOpen={setIsEventModalOpen}
                event={baseDefense.event}
                applyEventChoice={applyEventChoice}
            />
        </div>
    )
}
