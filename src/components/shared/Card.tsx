import * as React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import produce, { Immutable } from 'immer'
import { Transition, TransitionStatus } from 'react-transition-group'

import { LazyImg } from '@/components/shared/LazyImg'
import darkSolarDefenseAlphaLogo from '/images/dark_solar_defense_logo_with_background_alpha.png'
import {
    BLACK,
    WHITE,
    DARK_GRAY,
    ORANGE,
    LIGHT_GRAY,
    RED,
    DARK_RED,
    VERY_DARK_ORANGE,
} from '@/utils/colors'
import { hexToRGBA, renderCardDescription, getCardTitle } from '@/utils/helpers'
import {
    Card as CardType,
    CardEffects,
    EffectLevels,
    Slot,
    CardEffectFields,
    CardIdentity,
    Player,
    Enemy,
} from '@/types'
import { Tooltip } from '@/components/shared/Tooltip'
import { CARD_IMAGE_MAP } from '@/utils/maps/imageMaps/cards'

type CardComponentProps = Immutable<{
    card: CardType
    player?: Player
    enemy?: Enemy
    baseHp?: number
    primaryColor: string
    effects?: CardEffects
    isSelected?: boolean
    onClick?: () => void
    renderedCardDescription?: { description: string; infoText?: string }
    cardTitle?: string
    inStore?: boolean
}>

type CardProps = Immutable<{
    index: number
    openFetchModal?: (slot: Slot) => void
    isDraggable?: boolean
    slot?: { type: EffectLevels; card: CardType | null }
    fetchCard?: (card: CardType) => void // select card from fetch modal, will replace fetch card in slot
    isDiscardPhase?: boolean
    deckSize?: number
}> &
    CardComponentProps

const StyledCard = styled.div<{
    primaryColor: string
    highlight: string
    isDragging?: boolean
    isSelected?: boolean
    state?: TransitionStatus
    isEnemyCard?: boolean
    isEncounterCard?: boolean
}>`
    box-sizing: border-box;
    padding: 0;
    width: 240px;
    height: 360px;
    display: inline-block;
    background: ${({ isEnemyCard, isEncounterCard }) =>
        isEnemyCard ? DARK_RED : isEncounterCard ? VERY_DARK_ORANGE : DARK_GRAY};
    background-image: radial-gradient(
        circle at 1px 1px,
        ${({ primaryColor }) => hexToRGBA(primaryColor, 0.2)} 1px,
        transparent 0
    );
    background-size: 15px 15px;
    margin: 4px 15px 0;
    border-radius: 10px;
    border: 0px solid ${BLACK};
    border-bottom: 4px solid
        ${({ primaryColor, isEncounterCard }) =>
            isEncounterCard ? hexToRGBA(ORANGE, 0.65) : hexToRGBA(primaryColor, 0.65)};
    box-shadow: ${({ isSelected, highlight }) =>
        isSelected
            ? `0px 0px 12px 0 ${hexToRGBA(highlight, 0.5)}, 0px 0px 12px 0 ${hexToRGBA(
                  highlight,
                  0.5,
              )}, 0px 0px 12px 0 ${hexToRGBA(highlight, 0.5)}, 0px 0px 12px 0 ${hexToRGBA(
                  highlight,
                  0.5,
              )}, 0px 0px 12px 0 ${hexToRGBA(highlight, 0.5)}`
            : `0px 1px 1px rgba(0,0,0,0.2),
                0px 2px 2px rgba(0,0,0,0.2),
                0px 4px 4px rgba(0,0,0,0.2),
                0px 8px 8px rgba(0,0,0,0.2),
                0px 12px 12px rgba(0,0,0,0.2);`};
    position: relative;
    z-index: 50;
    overflow: hidden;
    color: ${({ isEnemyCard }) => (isEnemyCard ? RED : WHITE)};

    opacity: 0;
    transform: translateY(15px);
    will-change: transform, opacity;
    transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;

    opacity: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 1
            case 'entered':
                return 1
            case 'exiting':
                return 1
            case 'exited':
                return 0
            default:
                return 0
        }
    }};

    transform: ${({ state }) => {
        switch (state) {
            case 'entering':
                return 'translateY(0)'
            case 'entered':
                return 'translateY(0)'
            case 'exiting':
                return 'translateY(0)'
            case 'exited':
                return 'translateY(15px)'
            default:
                return 'translateY(15px)'
        }
    }};
`

const CardImage = styled(LazyImg)`
    display: block;
    margin: 0 auto;
    border-radius: 7px 7px 0px 0px;
    /* mask-image: linear-gradient(rgba(0, 0, 0, 1), transparent); */
    border: 1px solid ${BLACK};
    border-bottom: 2px solid ${BLACK};
`

const CardTitleContainer = styled.div<{ primaryColor: string }>`
    text-align: center;
    margin: -8px auto 0;
`

const CardTitle = styled.p<{ primaryColor: string; isEncounterCard?: boolean }>`
    width: auto;
    height: auto;
    display: inline-block;
    text-align: center;
    padding: 3px 6px;
    margin: 0 auto 3px;
    line-height: 1;
    font-size: 1.2rem;
    text-shadow: 0px 0px 5px
            ${({ primaryColor, isEncounterCard }) =>
                isEncounterCard ? hexToRGBA(ORANGE, 0.5) : hexToRGBA(primaryColor, 0.5)},
        0px 0px 5px
            ${({ primaryColor, isEncounterCard }) =>
                isEncounterCard ? hexToRGBA(ORANGE, 0.5) : hexToRGBA(primaryColor, 0.5)};
    text-transform: uppercase;
    background: ${BLACK};
    color: ${({ primaryColor, isEncounterCard }) =>
        isEncounterCard ? ORANGE : hexToRGBA(primaryColor, 1)};
`

const CardDescription = styled.div<{ primaryColor: string; isEncounterCard?: boolean }>`
    padding: 2px 8px 5px;
    margin: 0;
    text-align: center;
    font-size: 1.125rem;

    p {
        margin: 0;
        strong {
            color: ${({ primaryColor, isEncounterCard }) =>
                isEncounterCard ? ORANGE : primaryColor};
        }
    }
`

const StyledCardIdentity = styled.p<{ isEnemyCard?: boolean }>`
    position: absolute;
    bottom: -4px;
    left: 0;
    color: ${props => (props.isEnemyCard ? RED : hexToRGBA(LIGHT_GRAY, 0.8))};
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 8px;
`

const StyledCardContainer = styled.div`
    position: relative;
    flex: '0 0 225px';
    z-index: 50;
`

const FetchButton = styled.button<{ primaryColor: string }>`
    position: absolute;
    bottom: 1px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 234px;
    color: ${BLACK};
    background-color: ${({ primaryColor }) => primaryColor};
    z-index: 3;
    cursor: pointer;
    border-radius: 0 0 7px 7px;
    border: none;
    font-size: 1rem;
    letter-spacing: 1px;
`

export const CardComponent = ({
    card,
    primaryColor,
    isSelected,
    onClick,
    renderedCardDescription = { description: '', infoText: '' },
    cardTitle = '',
    inStore = false,
}: CardComponentProps) => {
    return (
        <Transition in timeout={500}>
            {state => (
                <Tooltip
                    key={`${card.id}-info-text-tooltip`}
                    content={
                        renderedCardDescription.infoText ? renderedCardDescription.infoText : ''
                    }
                    direction="bottom"
                    color={primaryColor}
                    disable={!renderedCardDescription.infoText}
                >
                    <StyledCard
                        key={card.id}
                        primaryColor={primaryColor}
                        isSelected={isSelected}
                        onClick={onClick}
                        highlight={primaryColor}
                        state={state}
                    >
                        <div className="">
                            <CardImage
                                src={CARD_IMAGE_MAP.get(card.key) ?? darkSolarDefenseAlphaLogo}
                                alt={`card illustration for ${cardTitle}`}
                                w={238}
                                h={238}
                            />
                            <CardTitleContainer primaryColor={primaryColor}>
                                <CardTitle primaryColor={primaryColor}>{cardTitle}</CardTitle>
                            </CardTitleContainer>
                            {renderedCardDescription && (
                                <CardDescription primaryColor={primaryColor}>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {inStore
                                            ? card.storeDescription
                                            : renderedCardDescription.description}
                                    </ReactMarkdown>
                                </CardDescription>
                            )}
                            {card.identity && (
                                <StyledCardIdentity>{card.identity}</StyledCardIdentity>
                            )}
                        </div>
                    </StyledCard>
                </Tooltip>
            )}
        </Transition>
    )
}

export const Card = React.memo(
    ({
        card,
        player,
        enemy,
        baseHp,
        primaryColor,
        slot,
        index,
        openFetchModal,
        isDraggable,
        fetchCard,
        isSelected,
        isDiscardPhase,
        deckSize,
        inStore = false,
    }: CardProps) => {
        const [animate, setAnimate] = React.useState(false)
        const [renderedCardDescription, setRenderedCardDescription] = React.useState<{
            description: string
            infoText: string
        }>({ description: '', infoText: '' })

        const handleShowCard = React.useCallback(() => setTimeout(() => setAnimate(true), 500), [])

        const handleHideCard = React.useCallback(() => setTimeout(() => setAnimate(false), 100), [])

        React.useEffect(() => {
            const timer = handleShowCard()
            return () => {
                clearTimeout(timer)
            }
        }, [])

        React.useEffect(() => {
            if (isDiscardPhase) {
                const timer = handleHideCard()
                return () => {
                    clearTimeout(timer)
                }
            }
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            return () => {}
        }, [isDiscardPhase])

        const slotType = slot?.type || EffectLevels.AverageEffect
        const effects = card.effects[slotType]

        const renderCardTitle = React.useCallback(
            () => getCardTitle(effects, card.title),
            [effects, card],
        )
        const cardTitle = renderCardTitle()

        const handleSetCardDescription = React.useCallback(
            () =>
                setRenderedCardDescription(
                    produce(draft => {
                        draft.description = ''
                        draft.infoText = ''
                        const cardEffects: {
                            target: keyof CardEffects
                            targetEffects: CardEffectFields
                        }[] = Object.entries(effects).map(([key, value]) => ({
                            target: key as keyof CardEffects,
                            targetEffects: value,
                        }))
                        cardEffects.forEach(({ target, targetEffects }) => {
                            if (player && enemy) {
                                const { description, infoText } = renderCardDescription(
                                    targetEffects,
                                    player,
                                    enemy,
                                    slotType,
                                    baseHp,
                                    target,
                                )
                                draft.description = draft.description.includes(description)
                                    ? draft.description
                                    : draft.description.concat(`\n ${description}`)
                                draft.infoText = draft.infoText.includes(infoText)
                                    ? draft.infoText
                                    : draft.infoText.concat(` ${infoText || ''}`)
                            } else {
                                draft.description = targetEffects.description
                                draft.infoText = targetEffects.infoText || ''
                            }
                        })
                    }),
                ),
            [effects, player, enemy, baseHp],
        )

        React.useEffect(() => {
            if (!effects) return
            handleSetCardDescription()
        }, [effects, player, enemy, baseHp])

        const handleOnClick = React.useCallback(() => {
            if (!fetchCard) return
            fetchCard(card)
        }, [fetchCard])

        const getHighlightColor = React.useCallback(() => {
            if (
                slotType === EffectLevels.WeakNegativeEffect ||
                slotType === EffectLevels.AverageNegativeEffect ||
                slotType === EffectLevels.DeadlyNegativeEffect
            ) {
                return ORANGE
            }
            return WHITE
        }, [slotType])

        const isFetchCard = React.useCallback(() => {
            if (effects && effects.player && 'other' in effects.player) {
                return effects?.player?.other?.fetch && !!deckSize
            }
            return false
        }, [effects, deckSize])

        const handleOpenFetchModal = React.useCallback(() => {
            if (slot && openFetchModal) openFetchModal(slot)
        }, [slot, openFetchModal])

        if (!isDraggable) {
            return (
                <CardComponent
                    card={card}
                    player={player}
                    enemy={enemy}
                    primaryColor={primaryColor}
                    isSelected={isSelected}
                    effects={effects}
                    onClick={handleOnClick}
                    renderedCardDescription={renderedCardDescription}
                    cardTitle={cardTitle}
                    inStore={inStore}
                />
            )
        }

        return (
            <Draggable key={card.id} draggableId={card.id} index={index}>
                {(draggableProvided, draggableSnapshot) => (
                    <Transition in={animate} timeout={500}>
                        {state => (
                            // <div className="transition-transform duration-200 ease-in-out hover:scale-105 hover:z-50">
                            <StyledCardContainer
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.draggableProps}
                                {...draggableProvided.dragHandleProps}
                                style={{ ...draggableProvided.draggableProps.style }}
                            >
                                <Tooltip
                                    key={`${card.id}-info-text-tooltip`}
                                    content={
                                        renderedCardDescription.infoText
                                            ? renderedCardDescription.infoText
                                            : ''
                                    }
                                    direction="bottom"
                                    color={primaryColor}
                                    disable={!renderedCardDescription.infoText}
                                >
                                    <StyledCard
                                        key={card.id}
                                        state={state}
                                        primaryColor={primaryColor}
                                        isSelected={isSelected}
                                        isDragging={draggableSnapshot.isDragging}
                                        onClick={handleOnClick}
                                        highlight={getHighlightColor()}
                                        isEnemyCard={
                                            card.identity === CardIdentity.EnemyAttack ||
                                            card.identity === CardIdentity.EnemyDefense
                                        }
                                        isEncounterCard={card.identity === CardIdentity.Encounter}
                                        className="card"
                                    >
                                        <CardImage
                                            src={
                                                CARD_IMAGE_MAP.get(card.key) ??
                                                darkSolarDefenseAlphaLogo
                                            }
                                            alt={`card illustration for ${cardTitle}`}
                                            w={238}
                                            h={238}
                                        />
                                        <CardTitleContainer primaryColor={primaryColor}>
                                            <CardTitle
                                                primaryColor={primaryColor}
                                                isEncounterCard={
                                                    card.identity === CardIdentity.Encounter
                                                }
                                            >
                                                {cardTitle}
                                            </CardTitle>
                                        </CardTitleContainer>
                                        {renderedCardDescription && (
                                            <CardDescription
                                                primaryColor={primaryColor}
                                                isEncounterCard={
                                                    card.identity === CardIdentity.Encounter
                                                }
                                            >
                                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                                    {inStore
                                                        ? card.storeDescription
                                                        : renderedCardDescription.description}
                                                </ReactMarkdown>
                                            </CardDescription>
                                        )}
                                        {card.identity && (
                                            <StyledCardIdentity
                                                isEnemyCard={
                                                    card.identity === CardIdentity.EnemyAttack ||
                                                    card.identity === CardIdentity.EnemyDefense
                                                }
                                            >
                                                {card.identity}
                                            </StyledCardIdentity>
                                        )}
                                        {isFetchCard() && openFetchModal && (
                                            <FetchButton
                                                primaryColor={primaryColor}
                                                onClick={handleOpenFetchModal}
                                            >
                                                FETCH CARD
                                            </FetchButton>
                                        )}
                                    </StyledCard>
                                </Tooltip>
                            </StyledCardContainer>
                            // </div>
                        )}
                    </Transition>
                )}
            </Draggable>
        )
    },
)
