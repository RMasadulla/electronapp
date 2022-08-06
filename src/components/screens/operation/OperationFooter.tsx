import * as React from 'react'
import styled from 'styled-components'
import { upperCase } from 'lodash'
import { useSelector } from '@xstate/react'

import { LazyImg } from '@/components/shared/LazyImg'
import { StyledStatBars } from '@/components/shared/styled/StyledStatBars'
import { Tooltip } from '@/components/shared/Tooltip'

import { GameStateContext } from '@/engine/game/context'
import { selectPlayer, selectBase } from '@/engine/game/selectors'
import { UIVariations } from '@/utils/ui'
import { OperationContext, Scenes, Status as StatusType } from '@/types'
import { getSupportPoints, hexToRGBA } from '@/utils/helpers'
import { WHITE, YELLOW } from '@/utils/colors'
import { Barks } from '@/components/shared/Barks'
import { STATUSES_DICT } from '@/engine/game/constants'

import allosaurusCharacter from '/images/allosaurus.gif'
import vtolImg from '/images/VTOL.png'

const StyledStatus = styled.div<{ primaryColor: string }>`
    height: 20px;
    width: auto;
    flex-basis: auto;
    margin: 2px 5px;
    padding: 1px 4px;
    /* text-shadow: 0 0 5px ${({ primaryColor }) => hexToRGBA(primaryColor, 0.5)}; */
    box-shadow: 0 0 10px ${({ primaryColor }) => hexToRGBA(primaryColor, 0.5)};
    font-size: 1.1rem;
    border: 1px solid ${({ primaryColor }) => hexToRGBA(primaryColor, 0.95)};
    border-radius: 2px;
    line-height: 0.95;
    position: relative;
`

const StyledStat = styled.div<{ primaryColor: string }>`
    height: 20px;
    width: auto;
    flex-basis: auto;
    margin: 2px 5px;
    padding: 0px 4px;
    font-size: 1.2rem;
    background: ${({ primaryColor }) => hexToRGBA(primaryColor, 0.8)};
    color: #000;
    mix-blend-mode: screen;
    border-radius: 2px;
    line-height: 1.1;
    position: relative;
`

const W = styled.span`
    /* color: ${WHITE}; */
`

const StyledStatusesContainer = styled.div<{ alignment: 'left' | 'right'; primaryColor: string }>`
    display: flex;
    align-items: flex-end;
    align-content: flex-end;
    justify-content: ${props => (props.alignment === 'left' ? 'flex-start' : 'flex-end')};
    flex-wrap: wrap-reverse;
    width: 100%;
    text-align: ${props => props.alignment};
    height: auto;
    padding: 10px 10px 5px;
    margin-top: 10px;
    margin-bottom: 5px;
    margin-left: ${props => (props.alignment === 'left' ? '10px' : '12px')};
    margin-right: ${props => (props.alignment === 'right' ? '10px' : '12px')};
    color: ${props => props.primaryColor};
`

const Status = ({ primaryColor, k, v }: { primaryColor: string; k: string; v: number }) => (
    <StyledStatus key={`status-${k}`} primaryColor={primaryColor}>
        <Tooltip
            key={`status-${k}-tooltip`}
            content={
                STATUSES_DICT[k] ? STATUSES_DICT[k].description.replace(/{x}/, v.toString()) : ''
            }
            direction="top"
            color={primaryColor}
        >
            <W>
                {upperCase(STATUSES_DICT[k].title)}_{v}
            </W>
        </Tooltip>
    </StyledStatus>
)

const StatusList = ({
    statuses,
    color,
}: {
    statuses: Array<[string, StatusType]>
    color: string
}) => (
    <>
        {statuses
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, { value }]) => value)
            .map(([k, { value }]) => (
                <Status key={`${k}-${value}`} primaryColor={color} k={k} v={value} />
            ))}{' '}
    </>
)

export function OperationFooter({ operation }: { operation: OperationContext }) {
    const uiElements = UIVariations[Scenes.Operation]

    const { gameStateService } = React.useContext(GameStateContext)
    const player = useSelector(gameStateService, selectPlayer)
    const base = useSelector(gameStateService, selectBase)

    if (!operation) return null

    return (
        <div className="h-[165px] box-border grid grid-cols-12 gap-4 col-start-auto col-span-12 absolute inset-x-0 bottom-0 mt-auto">
            <div className="col-span-6 mt-auto">
                <Barks barks={operation.barks} color={uiElements.primaryColor} alignment="left" />
                <LazyImg
                    src={vtolImg}
                    alt="VTOL"
                    w={565}
                    h={565}
                    className="z-[1] absolute bottom-0 left-0"
                />
            </div>

            <div className="col-span-6 mt-auto">
                <div className="box-border grid grid-cols-12 gap-2 col-start-auto col-span-12">
                    <div className="col-span-6 mt-auto mb-[10px] z-50">
                        <StyledStatusesContainer
                            alignment="right"
                            primaryColor={uiElements.primaryColor}
                        >
                            <StatusList
                                statuses={Object.entries(player.statuses)}
                                color={uiElements.primaryColor}
                            />
                        </StyledStatusesContainer>
                        <div className="flex items-end ml-auto justify-end">
                            <Tooltip
                                key="money-stat-tooltip"
                                content="Money can be used to buy and remove operation and combat cards."
                                direction="top"
                                color={uiElements.primaryColor}
                            >
                                <StyledStat primaryColor={uiElements.primaryColor}>
                                    MONEY $
                                    {(player.stats.money || 0) + (player.stats.gainedMoney || 0)}
                                </StyledStat>
                            </Tooltip>
                            <Tooltip
                                key="supplies-stat-tooltip"
                                content="Supplies are used to repair your base and buy and remove base defense cards."
                                direction="top"
                                color={uiElements.primaryColor}
                            >
                                <StyledStat primaryColor={uiElements.primaryColor}>
                                    SUPPLIES{' '}
                                    {(player.stats.supplies || 0) +
                                        (player.stats.gainedSupplies || 0)}
                                </StyledStat>
                            </Tooltip>

                            <Tooltip
                                key="support-points-stat-tooltip"
                                content="Support points are used to power support cards. For every 100 HP your base has, you get 1 support point."
                                direction="top"
                                color={uiElements.primaryColor}
                            >
                                <StyledStat primaryColor={uiElements.primaryColor}>
                                    SUPPORT {getSupportPoints(base.stats.hp)}
                                </StyledStat>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="col-span-6 flex">
                        <StyledStatBars
                            primaryColor={uiElements.primaryColor}
                            characterColor={YELLOW}
                            hp={player.stats.hp}
                            maxHp={player.stats.maxHp}
                            shield={player.stats.shield || 0}
                            maxShield={player.stats.maxShield || 0}
                            name={player.character.name}
                            characterAnimation={player.character.animationState}
                            barks={player.barks}
                            alignment="right"
                            characterImage={allosaurusCharacter}
                            mutilation={player.statuses.mutilated?.value ?? 0}
                            w={800}
                            r={-163}
                            b={-343}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
