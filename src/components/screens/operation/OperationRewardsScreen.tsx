import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'
import { desaturate, lighten } from 'polished'
import { isEmpty, sampleSize } from 'lodash'

import { Card } from '@/components/shared/Card'
import { GameSavedMessage } from '@/components/shared/GameSavedMessage'
import {
    OperationScreenBackground,
    OperationDotGridOne,
    OperationDotGridTwo,
} from '@/components/shared/styled/OperationScreenBackground'

import { YELLOW, BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'
import { Card as CardType } from '@/types'
import { selectPlayer, selectOperation, selectCurrentTimelineStep } from '@/engine/game/selectors'

const StyledButton = styled.button`
    background: ${BLACK};
    color: ${WHITE};
    border: none;
    padding: 10px 20px;
    width: 200px;
    height: 50px;
    margin: auto;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0 ${hexToRGBA(YELLOW, 0.65)}, 0px 0px 10px 0 ${hexToRGBA(YELLOW, 0.65)};
    transition: background 0.25s ease-in-out;
    font-size: 1.25rem;

    &:hover {
        background: ${desaturate(0.25, YELLOW)};
    }

    &:disabled {
        background: ${desaturate(0.6, YELLOW)};
        box-shadow: none;
        cursor: not-allowed;
    }
`

const StyledBuyButton = styled.button<{ disabled: boolean }>`
    background: ${YELLOW};
    color: ${BLACK};
    border: 1px solid ${YELLOW};
    border-radius: 2px;
    padding: 5px 10px;
    width: 235px;
    height: 25px;
    margin: 0 auto;
    line-height: 0.75;
    cursor: pointer;
    transition: background 0.25s ease-in-out;
    font-size: 1.25rem;

    &:hover {
        background: ${props => (props.disabled ? desaturate(1, YELLOW) : lighten(0.25, YELLOW))};
        color: ${props => (props.disabled ? YELLOW : BLACK)};
    }

    ${props =>
        props.disabled
            ? `background: ${desaturate(1, YELLOW)};
        box-shadow: none;
        cursor: not-allowed;`
            : ''}
`

const StyledPurchasedMsg = styled.p`
    position: absolute;
    top: -35px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 2rem;
    z-index: 20;
    width: 255px;
    height: 25px;
    color: ${WHITE};
    text-shadow: 0px 0px 20px ${BLACK};
    text-align: center;
    z-index: 500;
`

export function OperationRewardsScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const player = useSelector(gameStateService, selectPlayer)
    const operation = useSelector(gameStateService, selectOperation)
    const currentTimelineStep = useSelector(gameStateService, selectCurrentTimelineStep)
    const { send } = gameStateService

    const cardsToPickFrom = React.useMemo(() => {
        const filteredCards: Array<CardType> = operation.allCards.filter(
            card =>
                currentTimelineStep.cardTiers.includes(card.tier) &&
                !operation.deck.find(c => c.id === card.id),
        )
        return sampleSize(filteredCards, 8)
    }, [])

    const purchaseCard = React.useCallback((card: CardType) => {
        send({ type: 'OPERATION_CARD_PURCHASED', card })
    }, [])

    const skipReward = () => {
        send({ type: 'OPERATION_REWARD_CHOSEN', card: undefined })
        send({ type: 'OPERATION_REWARD_PHASE_ENDS' })
    }

    return (
        <div className="relative bg-black w-full h-full zoom">
            <OperationScreenBackground />
            <OperationDotGridOne />
            <OperationDotGridTwo />
            <div className="box-border relative grid h-full grid-cols-12 gap-4 col-start-auto col-span-12 z-10">
                <div className="col-span-12 pt-0 pb-[50px] mt-[20px] mx-auto mb-auto">
                    <div className="flex">
                        <div className="w-3/4">
                            <p className="text-2xl px-1 py-0 uppercase text-dm-white z-20">
                                As a reward for completing this Operation, you can buy cards to
                                upgrade your Operation Deck.
                                <br />
                                Money: $
                                {(player.stats.money || 0) + (player.stats.gainedMoney || 0)} |{' '}
                                Supplies:{' '}
                                {(player.stats.supplies || 0) + (player.stats.gainedSupplies || 0)}
                            </p>
                        </div>
                        <div className="ml-auto">
                            <StyledButton type="button" onClick={skipReward}>
                                CONTINUE
                            </StyledButton>
                        </div>
                    </div>
                    <div className="w-full gap-8 grid grid-cols-12 col-start-auto col-span-12 crt pt-[3vh] m-auto">
                        {cardsToPickFrom
                            .filter(card => card)
                            .map((card, i) => (
                                <div className="col-span-3 relative" key={card.id}>
                                    <div className="m-auto">
                                        <Card
                                            key={card.id}
                                            card={card}
                                            primaryColor={YELLOW}
                                            index={i}
                                            inStore
                                        />
                                    </div>
                                    {!isEmpty(operation.deck.find(c => c.id === card.id)) && (
                                        <StyledPurchasedMsg>PURCHASED</StyledPurchasedMsg>
                                    )}
                                    <div className="-mt-[-12px] mx-auto mb-0 flex w-[260px]">
                                        <StyledBuyButton
                                            onClick={() => purchaseCard(card)}
                                            disabled={
                                                !isEmpty(
                                                    operation.deck.find(c => c.id === card.id),
                                                ) ||
                                                (card.cost.type === 'money' &&
                                                    (player.stats.money || 0) +
                                                        (player.stats.gainedMoney || 0) <
                                                        card.cost.amount) ||
                                                (card.cost.type === 'supplies' &&
                                                    (player.stats.supplies || 0) +
                                                        (player.stats.gainedSupplies || 0) <
                                                        card.cost.amount)
                                            }
                                        >
                                            BUY{' '}
                                            {card.cost.type === 'money'
                                                ? `$${card.cost.amount}`
                                                : `${card.cost.amount} supplies`}
                                        </StyledBuyButton>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
                <GameSavedMessage />
            </div>
        </div>
    )
}
