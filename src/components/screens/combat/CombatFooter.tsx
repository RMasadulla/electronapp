import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'
import { upperCase } from 'lodash'

import { StyledStatBars } from '@/components/shared/styled/StyledStatBars'
import { Tooltip } from '@/components/shared/Tooltip'

import { GameStateContext } from '@/engine/game/context'
import {
    selectPlayer,
    selectBase,
    selectEnemy,
    selectEnemyArt,
    selectEnemyArtDimensions,
} from '@/engine/game/selectors'
import { UIVariations } from '@/utils/ui'
import { Scenes, Status as StatusType } from '@/types'
import { getSupportPoints, hexToRGBA } from '@/utils/helpers'
import { ORANGE, WHITE, YELLOW } from '@/utils/colors'

import allosaurusCharacter from '/images/allosaurus.gif'
import { STATUSES_DICT } from '../../../engine/game/constants'

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
    margin-top: auto;
    margin-left: ${props => (props.alignment === 'left' ? '-20px' : '10px')};
    margin-right: ${props => (props.alignment === 'right' ? '-20px' : '10px')};
    margin-bottom: 0;
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

export function CombatFooter() {
    const uiElements = UIVariations[Scenes.Combat]

    const { gameStateService } = React.useContext(GameStateContext)
    const player = useSelector(gameStateService, selectPlayer)
    const enemy = useSelector(gameStateService, selectEnemy)
    const enemyArt = useSelector(gameStateService, selectEnemyArt)
    const enemyArtDimensions = useSelector(gameStateService, selectEnemyArtDimensions)
    const base = useSelector(gameStateService, selectBase)

    return (
        <div className="h-[165px] box-border grid grid-cols-12 gap-4 col-start-auto col-span-12 absolute inset-x-0 bottom-0 mt-auto">
            <div className="col-span-6 mt-auto">
                <div className="box-border grid grid-cols-12 gap-4 col-start-auto col-span-12">
                    <div className="col-span-6">
                        <StyledStatBars
                            primaryColor={ORANGE}
                            characterColor={ORANGE}
                            hp={enemy.variants[enemy.variant].stats.hp}
                            maxHp={enemy.variants[enemy.variant].stats.maxHp}
                            shield={enemy.variants[enemy.variant].stats.shield || 0}
                            maxShield={enemy.variants[enemy.variant].stats.maxShield || 0}
                            name={enemy.name}
                            characterAnimation={player.character.animationState}
                            barks={enemy.barks}
                            alignment="left"
                            characterImage={enemyArt}
                            mutilation={player.statuses.mutilated?.value ?? 0}
                            w={enemyArtDimensions.width}
                            l={enemyArtDimensions.left}
                            b={enemyArtDimensions.bottom}
                        />
                    </div>
                    <div className="col-span-6 mt-auto mb-[7px] z-50">
                        <StyledStatusesContainer alignment="left" primaryColor={ORANGE}>
                            <StatusList
                                statuses={Object.entries(enemy.variants[enemy.variant].statuses)}
                                color={ORANGE}
                            />
                        </StyledStatusesContainer>
                    </div>
                </div>
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
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                marginLeft: 'auto',
                                justifyContent: 'flex-end',
                            }}
                        >
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
                            {base.stats.hp && (
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
                            )}
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
