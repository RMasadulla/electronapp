import React from 'react'
import styled from 'styled-components'
import { useActor, useSelector } from '@xstate/react'

import { Hand } from '@/components/shared/Hand'
import { Button } from '@/components/shared/Button'
import { Tooltip } from '@/components/shared/Tooltip'
import { FetchModal } from '@/components/shared/FetchModal'
import { ConfirmationModal } from '@/components/shared/ConfirmationModal'
import { DeathMessageOverlay } from '@/components/screens/combat/DeathMessageOverlay'

import { GameStateContext } from '@/engine/game/context'
import { selectPlayer, selectBase, selectEnemy, selectCombat } from '@/engine/game/selectors'
import { RED, BLACK, MERINGUE, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { UIVariations } from '@/utils/ui'
import { Card, CardEffects, Slot, Cards, Scenes } from '@/types'

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

export function CombatMiddleContent() {
    const uiElements = UIVariations[Scenes.Combat]

    const { gameStateService } = React.useContext(GameStateContext)
    const [state] = useActor(gameStateService)
    const player = useSelector(gameStateService, selectPlayer)
    const enemy = useSelector(gameStateService, selectEnemy)
    const combat = useSelector(gameStateService, selectCombat)
    const base = useSelector(gameStateService, selectBase)

    const [isFetchModalOpen, setIsFetchModalOpen] = React.useState(false)
    const [selectedFetchSlot, setSelectedFetchSlot] = React.useState<Slot | null>(null)
    const openFetchModal = (slot: Slot) => {
        setIsFetchModalOpen(true)
        setSelectedFetchSlot(slot)
    }

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] = React.useState(false)
    const openConfirmationModal = () => setIsConfirmationModalOpen(true)

    const fetchCard = React.useCallback((originalCard: Card, newCard: Card) => {
        gameStateService.send({
            type: 'FETCH_COMBAT_CARD',
            originalCard,
            newCard,
        })
    }, [])

    const setHand = React.useCallback((updatedHand: Cards) => {
        gameStateService.send({ type: 'SET_COMBAT_HAND', updatedHand })
    }, [])

    const confirmCardSelections = React.useCallback(() => {
        gameStateService.send({ type: 'COMBAT_CONFIRM_CARD_SELECTIONS' })
    }, [])

    const isPositioningPhase = state.matches('combatPlayerSelectionPhase')
    const isDiscardPhase = state.matches('combatDiscardPhase')

    const cards = combat.slots ? Object.values(combat.slots).map(s => s.card) : []

    const unplayedFetchCardsExist = Object.values(combat.slots).some(slot => {
        const effects = slot.card?.effects[slot.type] as CardEffects
        if (effects && effects.player && 'other' in effects.player) {
            return effects?.player?.other?.fetch && combat.deck.length > 0
        }
        return false
    })

    const retreatFromCombat = () => {
        gameStateService.send({ type: 'RETREAT_FROM_COMBAT' })
    }

    return (
        <div className="h-[350px] box-border grid grid-cols-12 gap-4 col-start-auto col-span-12 absolute inset-0 m-auto z-50">
            <div className="w-[1350px] m-auto absolute inset-0">
                <Hand
                    cards={cards}
                    player={player}
                    enemy={enemy}
                    baseHp={base.stats.hp}
                    primaryColor={uiElements.primaryColor}
                    slots={combat.slots}
                    openFetchModal={openFetchModal}
                    setHand={setHand}
                    currentPlayedCard={combat.currentPlayedCard}
                    isDiscardPhase={isDiscardPhase}
                    deckSize={combat.deck.length}
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
                        <AbortOpButton onClick={openConfirmationModal}>RETREAT</AbortOpButton>
                    </div>
                </div>
            </div>

            <FetchModal
                isOpen={isFetchModalOpen}
                setIsFetchModalOpen={setIsFetchModalOpen}
                selectedFetchSlot={selectedFetchSlot}
                openFetchModal={openFetchModal}
                primaryColor={uiElements.primaryColor}
                fetchCard={fetchCard}
                deck={combat.deck}
                player={player}
                enemy={enemy}
            />

            <ConfirmationModal
                primaryColor={uiElements.primaryColor}
                finalAction={retreatFromCombat}
                isOpen={isConfirmationModalOpen}
                setIsModalOpen={setIsConfirmationModalOpen}
                scene={uiElements.scene}
            />

            {enemy.variants[enemy.variant].stats.hp <= 0 && <DeathMessageOverlay />}
        </div>
    )
}
