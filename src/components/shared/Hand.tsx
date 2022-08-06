import * as React from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { isEqual, startCase } from 'lodash'
import { Immutable, castDraft } from 'immer'

import { Card } from '@/components/shared/Card'
import { Slots, EffectLevels, Card as CardType, Player, Enemy, Slot, Cards } from '@/types'
import { arrayMoveElement, hexToRGBA, uniq } from '@/utils/helpers'
import { BLACK, ORANGE, WHITE } from '@/utils/colors'

type HandProps = Immutable<{
    cards: Cards
    player?: Player
    enemy?: Enemy
    primaryColor: string
    slots?: Slots
    openFetchModal: (slot: Slot) => void
    setHand: (updatedHand: Cards) => void
    currentPlayedCard?: CardType | null
    baseHp?: number
    isDiscardPhase: boolean
    deckSize: number
}>

const StyledSlots = styled.div`
    position: absolute;
    width: 1350px;
    height: 410px;
    top: -40px;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding-top: 4px;
    background-image: linear-gradient(
        45deg,
        ${hexToRGBA(WHITE, 0)} 25%,
        ${hexToRGBA(WHITE, 0.5)} 25%,
        ${hexToRGBA(WHITE, 0.5)} 50%,
        ${hexToRGBA(WHITE, 0)} 50%,
        ${hexToRGBA(WHITE, 0)} 75%,
        ${hexToRGBA(WHITE, 0.5)} 75%,
        ${hexToRGBA(WHITE, 0.5)} 100%
    );
    background-size: 4px 4px;
    border-radius: 10px;
`

const StyledSlotHeader = styled.div<{ color: string }>`
    display: inline-block;
    width: 240px;
    padding: 1px 0px;
    /* border-bottom: 1px solid ${({ color }) => color}; */
    margin: 0 15px;
`

const StyledSlotHeaderText = styled.span<{ color: string }>`
    border: 1px solid ${({ color }) => hexToRGBA(color, 0.65)};
    background: ${({ color }) => hexToRGBA(BLACK, 0.85)};
    /* border-bottom: none; */
    border-radius: 4px;
    padding: 2px 7px;
    position: relative;
    bottom: -5px;
    color: ${({ color }) => color};
    font-size: 1rem;
`

const StyledPlaceholderCardContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const StyledPlaceholderCard = styled.div<{ primaryColor: string }>`
    box-sizing: border-box;
    padding: 15px;
    width: 240px;
    height: 360px;
    display: inline-block;
    background-image: linear-gradient(
        45deg,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0)} 25%,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)} 25%,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)} 50%,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0)} 50%,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0)} 75%,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)} 75%,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)} 100%
    );
    background-size: 4px 4px;
    margin: 0 15px;
    border-radius: 10px;
    /* border: 1px solid ${({ primaryColor }) => primaryColor}; */
    position: relative;
    left: 0px;
    z-index: -1;
    overflow: hidden;
    opacity: 0.5;
`

export function Hand({
    cards,
    player,
    enemy,
    primaryColor,
    slots,
    openFetchModal,
    setHand,
    currentPlayedCard,
    baseHp,
    isDiscardPhase,
    deckSize,
}: HandProps) {
    const onDragEnd = React.useCallback(
        (result: DropResult) => {
            // dropped outside the list
            if (!result.destination) return
            const updatedHand = arrayMoveElement(
                castDraft(cards),
                result.source.index,
                result.destination.index,
            )
            setHand(updatedHand)
        },
        [cards],
    )

    const getColor = React.useCallback((slotType: EffectLevels) => {
        if (
            slotType === EffectLevels.WeakNegativeEffect ||
            slotType === EffectLevels.AverageNegativeEffect ||
            slotType === EffectLevels.DeadlyNegativeEffect
        ) {
            return ORANGE
        }
        return WHITE
    }, [])

    return (
        <div className="box-border w-full h-full col-span-12 relative -mt-[120px]">
            <StyledSlots>
                {slots &&
                    Object.values(slots).map((slot, i) => {
                        const color = getColor(slot.type)
                        return (
                            <StyledSlotHeader color={color} key={`${slot.type}-${i}`}>
                                <StyledSlotHeaderText color={color}>
                                    {startCase(slot.type)}
                                </StyledSlotHeaderText>
                            </StyledSlotHeader>
                        )
                    })}
            </StyledSlots>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable" direction="horizontal">
                    {provided => (
                        <div
                            ref={provided.innerRef}
                            style={{
                                height: '350px',
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                alignContent: 'flex-end',
                                justifyContent: 'flex-end',
                                position: 'relative',
                                zIndex: 2,
                            }}
                            {...provided.droppableProps}
                        >
                            {uniq(cards).map((card, i) => {
                                return slots && card ? (
                                    <Card
                                        key={card.id}
                                        card={card}
                                        player={player}
                                        enemy={enemy}
                                        baseHp={baseHp}
                                        primaryColor={primaryColor}
                                        index={i}
                                        slot={slots[i]}
                                        openFetchModal={openFetchModal}
                                        isSelected={isEqual(currentPlayedCard?.id, card.id)}
                                        isDiscardPhase={isDiscardPhase}
                                        deckSize={deckSize}
                                        isDraggable
                                    />
                                ) : null
                            })}
                            {provided.placeholder}
                            <StyledPlaceholderCardContainer>
                                <StyledPlaceholderCard
                                    primaryColor={slots ? getColor(slots[0].type) : primaryColor}
                                />
                                <StyledPlaceholderCard
                                    primaryColor={slots ? getColor(slots[1].type) : primaryColor}
                                />
                                <StyledPlaceholderCard
                                    primaryColor={slots ? getColor(slots[2].type) : primaryColor}
                                />
                                <StyledPlaceholderCard
                                    primaryColor={slots ? getColor(slots[3].type) : primaryColor}
                                />
                                <StyledPlaceholderCard
                                    primaryColor={slots ? getColor(slots[4].type) : primaryColor}
                                />
                            </StyledPlaceholderCardContainer>
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}
