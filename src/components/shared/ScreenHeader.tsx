import * as React from 'react'
import { Immutable } from 'immer'

import { DeckModal } from '@/components/shared/DeckModal'
import { ControlButton } from '@/components/shared/styled/ControlButton'

import { UIVariations } from '@/utils/ui'
import { Card, Scenes } from '@/types'

type ScreenHeaderProps = Immutable<{
    children?: React.ReactNode
    variation: Scenes
    deck: Card[]
    discardPile: Card[]
    drainedPile: Card[]
}>

export function ScreenHeader({
    children,
    variation,
    deck,
    discardPile,
    drainedPile,
}: ScreenHeaderProps) {
    const [isDeckModalOpen, setIsDeckModalOpen] = React.useState(false)
    const [isDiscardPileModalOpen, setIsDiscardPileModalOpen] = React.useState(false)
    const [isDrainedPileModalOpen, setIsDrainedPileModalOpen] = React.useState(false)

    const uiElements = UIVariations[variation]
    const handleOpenDeckModal = React.useCallback(() => setIsDeckModalOpen(true), [])
    const handleOpenDiscardPileModal = React.useCallback(() => setIsDiscardPileModalOpen(true), [])
    const handleOpenDrainedPileModal = React.useCallback(() => setIsDrainedPileModalOpen(true), [])

    return (
        <div className="box-border grid h-[267px] grid-cols-12 gap-x-4 gap-y-5 col-start-auto col-span-12 absolute top-0 left-0 right-0">
            <div className="box-border h-full col-start-auto col-span-3 relative p-2">
                <div className="flex items-start justify-start mt-1">
                    <ControlButton
                        primaryColor={uiElements.primaryColor}
                        // eslint-disable-next-line @typescript-eslint/no-empty-function
                        onClick={() => {}}
                        style={{ marginRight: '10px' }}
                    >
                        LEGENDS: 0
                    </ControlButton>
                    <ControlButton
                        primaryColor={uiElements.primaryColor}
                        onClick={handleOpenDeckModal}
                        style={{ marginRight: '10px' }}
                    >
                        DECK: {deck.length}
                    </ControlButton>
                    <ControlButton
                        primaryColor={uiElements.primaryColor}
                        onClick={handleOpenDiscardPileModal}
                        style={{ marginRight: '10px' }}
                    >
                        DISCARD: {discardPile.length}
                    </ControlButton>
                    <ControlButton
                        primaryColor={uiElements.primaryColor}
                        onClick={handleOpenDrainedPileModal}
                        style={{ marginRight: '10px' }}
                    >
                        DRAINED: {drainedPile.length}
                    </ControlButton>
                </div>
            </div>
            <div className="box-border h-full col-span-6 relative">
                <div className="flex items-center justify-center mb-auto">{children}</div>
            </div>
            <div className="box-border h-full col-span-3 relative" />
            <DeckModal
                isOpen={isDeckModalOpen}
                setIsModalOpen={setIsDeckModalOpen}
                primaryColor={uiElements.primaryColor}
                deck={deck}
            />
            <DeckModal
                isOpen={isDiscardPileModalOpen}
                setIsModalOpen={setIsDiscardPileModalOpen}
                primaryColor={uiElements.primaryColor}
                deck={discardPile}
            />
            <DeckModal
                isOpen={isDrainedPileModalOpen}
                setIsModalOpen={setIsDrainedPileModalOpen}
                primaryColor={uiElements.primaryColor}
                deck={drainedPile}
            />
        </div>
    )
}
