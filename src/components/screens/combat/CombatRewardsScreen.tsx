import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'
import { desaturate } from 'polished'
import { sampleSize, isEmpty } from 'lodash'

import { Card } from '@/components/shared/Card'
import { GameSavedMessage } from '@/components/shared/GameSavedMessage'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { RED, BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'
import { GameStateContext } from '@/engine/game/context'
import { Card as CardType } from '@/types'
import { selectPlayer, selectCombat, selectCurrentTimelineStep } from '@/engine/game/selectors'

import combatVideoBg from '/images/combat_vid_bg.mp4'

const DotGridOne = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(circle at 1px 1px, ${hexToRGBA(RED, 0.5)} 2px, transparent 0);
    background-position: center center;
    background-size: 76px 76px;
    background-blend-mode: overlay;
    z-index: 2;
`

const DotGridTwo = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(WHITE, 0.5)} 2px,
        transparent 0
    );
    background-position: center center;
    background-size: 77px 77px;
    background-blend-mode: overlay;
    z-index: 3;
`

const StyledButton = styled.button`
    background: ${BLACK};
    color: ${WHITE};
    border: none;
    padding: 10px 20px;
    width: 235px;
    height: 50px;
    margin: auto;
    line-height: 1;
    cursor: pointer;
    box-shadow: 0px 0px 10px 0 ${hexToRGBA(RED, 0.65)}, 0px 0px 10px 0 ${hexToRGBA(RED, 0.65)};
    transition: background 0.25s ease-in-out;
    font-size: 1.25rem;

    &:hover {
        background: ${desaturate(0.25, RED)};
    }

    &:disabled {
        background: ${desaturate(0.6, RED)};
        box-shadow: none;
        cursor: not-allowed;
    }
`

const StyledBuyButton = styled.button<{ disabled: boolean }>`
    background: ${RED};
    color: ${RED};
    border: 1px solid ${RED};
    border-radius: 2px;
    padding: 5px 10px;
    width: 235px;
    height: 25px;
    margin: 0 auto;
    line-height: 0.75;
    cursor: pointer;
    transition: background 0.25s ease-in-out;
    font-size: 1.25rem;
    position: relative;
    color: ${BLACK};
    z-index: 10;

    &:hover {
        background: ${WHITE};
        color: ${props => (props.disabled ? WHITE : BLACK)};
    }

    ${props =>
        props.disabled
            ? `background: ${desaturate(1, RED)};
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

export function CombatRewardsScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const player = useSelector(gameStateService, selectPlayer)
    const combat = useSelector(gameStateService, selectCombat)
    const currentTimelineStep = useSelector(gameStateService, selectCurrentTimelineStep)

    const cardsToPickFrom = React.useMemo(() => {
        const filteredCards: Array<CardType> = combat.allCards.filter(
            card =>
                currentTimelineStep.cardTiers.includes(card.tier) &&
                !combat.deck.find(c => c.id === card.id),
        )
        return sampleSize(filteredCards, 8)
    }, [])

    const purchaseCard = React.useCallback((card: CardType) => {
        gameStateService.send({ type: 'COMBAT_CARD_PURCHASED', card })
    }, [])

    const skipReward = () => {
        gameStateService.send({
            type: 'COMBAT_REWARD_CHOSEN',
            card: undefined,
        })
        gameStateService.send({ type: 'COMBAT_REWARD_PHASE_ENDS' })
    }

    return (
        <div className="relative bg-black w-full h-full zoom">
            <VideoBackground video={combatVideoBg} />
            <DotGridOne />
            <DotGridTwo />
            <div className="w-full box-border relative grid h-full grid-cols-12 gap-4 col-start-auto col-span-12 z-10">
                <div className="col-span-12 pt-0 pb-[50px] mt-[20px] mx-auto mb-auto">
                    <div className="flex">
                        <div className="w-3/4">
                            <p className="text-2xl px-1 py-0 uppercase text-dm-white z-10">
                                As a reward for defeating another enemy, you can buy cards to
                                upgrade your combat Deck.
                                <br />
                                Money: $
                                {(player.stats.money || 0) + (player.stats.gainedMoney || 0)} |
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
                                            primaryColor={RED}
                                            index={i}
                                            inStore
                                        />
                                    </div>
                                    {!isEmpty(combat.deck.find(c => c.id === card.id)) && (
                                        <StyledPurchasedMsg>PURCHASED</StyledPurchasedMsg>
                                    )}
                                    <div className="mt-2 mx-auto mb-0 flex w-[260px] relative">
                                        <StyledBuyButton
                                            onClick={() => purchaseCard(card)}
                                            disabled={
                                                !isEmpty(combat.deck.find(c => c.id === card.id)) ||
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
