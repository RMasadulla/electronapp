import React from 'react'
import Modal from '@mui/material/Modal'
import styled from 'styled-components'
import { Immutable } from 'immer'

import { Card } from '@/components/shared/Card'
import { Card as CardType, Enemy, Player } from '@/types'

const GradientOverlay = styled.div`
    position: sticky;
    bottom: -1px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, transparent 0%, black 100%);
    z-index: 25;
`

type DeckModalProps = Immutable<{
    isOpen: boolean
    setIsModalOpen: (isOpen: boolean) => void
    deck: CardType[]
    primaryColor: string
    player?: Player
    enemy?: Enemy
}>

export function DeckModal({
    isOpen,
    setIsModalOpen,
    primaryColor,
    deck,
    player,
    enemy,
}: DeckModalProps) {
    const handleCloseModal = React.useCallback(() => setIsModalOpen(false), [])

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
                    <div className="box-border grid grid-cols-12 h-full gap-x-4 gap-y-5 col-start-auto col-span-12 relative crt p-0">
                        <button
                            type="button"
                            onClick={handleCloseModal}
                            style={{
                                position: 'absolute',
                                right: 0,
                                top: '-5px',
                                padding: '10px',
                                background: 'none',
                                border: 'none',
                                color: '#fff',
                                fontSize: '1.75rem',
                                cursor: 'pointer',
                                zIndex: 999,
                            }}
                        >
                            &#10006;
                        </button>

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
                                            player={player}
                                            enemy={enemy}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                    <GradientOverlay />
                </div>
            </div>
        </Modal>
    )
}
