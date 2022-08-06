import React from 'react'
import Modal from '@mui/material/Modal'
import { Immutable } from 'immer'

import { Card } from '@/components/shared/Card'
import { ORANGE } from '@/utils/colors'
import { Card as CardType, Slot, Player, Enemy } from '@/types'

type OperationFetchModalProps = Immutable<{
    isOpen: boolean
    setIsFetchModalOpen: (isOpen: boolean) => void
    deck: CardType[]
    selectedFetchSlot: Slot | null
    openFetchModal: (slot: Slot) => void
    primaryColor: string
    fetchCard: (originalCard: CardType, newCard: CardType) => void
    player?: Player
    enemy?: Enemy
}>

function FModal({
    isOpen,
    setIsFetchModalOpen,
    selectedFetchSlot,
    openFetchModal,
    primaryColor,
    fetchCard,
    deck,
    player,
    enemy,
}: OperationFetchModalProps) {
    const [selectedCard, setSelectedCard] = React.useState<CardType | null>(null)

    const handleConfirmSelection = React.useCallback(() => {
        if (!selectedFetchSlot || !selectedFetchSlot.card || !selectedCard) return
        fetchCard(selectedFetchSlot.card, selectedCard)
        setIsFetchModalOpen(false)
    }, [selectedCard, selectedFetchSlot?.card])

    const handleCloseModal = React.useCallback(() => setIsFetchModalOpen(false), [])

    if (!selectedFetchSlot || !selectedFetchSlot.card) return null

    return (
        <Modal
            open={isOpen}
            onClose={handleCloseModal}
            onBackdropClick={handleCloseModal}
            aria-labelledby="Fetch card"
            aria-describedby="Fetch a card from your operation deck"
            className="zoom"
        >
            <div className="flex h-full w-full">
                <div
                    className="m-auto w-[1200px] h-[775px] relative bg-dm-dark-gray crt border border-opacity-20 border-dm-orange rounded-lg overflow-hidden"
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
                    <div className="box-border flex sticky h-[60px] w-full grid-cols-12 col-start-auto col-span-12 -top-4 left-0 right-0 px-1 py-1 z-10 bg-dm-dark-gray rounded-t-lg">
                        <p
                            style={{
                                margin: 'auto',
                                marginRight: 'auto',
                                marginLeft: '2.3rem',
                                padding: '13px',
                                fontSize: '1.25rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            Select one card from your Operation deck
                        </p>
                        <button
                            type="button"
                            onClick={handleConfirmSelection}
                            style={{
                                marginLeft: 'auto',
                                height: '30px',
                                width: '155px',
                                margin: 'auto',
                                marginRight: '2.3rem',
                                border: `2px solid ${ORANGE}`,
                                color: ORANGE,
                                background: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            CONFIRM SELECTION
                        </button>
                    </div>
                    <div className="h-full gap-8 grid grid-cols-12 col-start-auto col-span-12 crt pt-[3vh] px-[2vw] pb-[200px] mt-0 mx-0 rounded-b-lg overflow-scroll">
                        {deck
                            .filter(card => card)
                            .map((card, i) => (
                                <div className="col-span-3" key={card.id}>
                                    <Card
                                        key={card.id}
                                        card={card}
                                        primaryColor={primaryColor}
                                        index={i}
                                        slot={selectedFetchSlot}
                                        openFetchModal={openFetchModal}
                                        fetchCard={setSelectedCard}
                                        isSelected={card.id === selectedCard?.id}
                                        player={player}
                                        enemy={enemy}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export const FetchModal = React.memo(FModal)
