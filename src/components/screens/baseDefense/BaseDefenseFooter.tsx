import * as React from 'react'
import { useSelector } from '@xstate/react'
import styled from 'styled-components'
import { upperCase } from 'lodash'

import { StyledStatBars } from '@/components/shared/styled/StyledStatBars'
import { Tooltip } from '@/components/shared/Tooltip'

import { GameStateContext } from '@/engine/game/context'
import { selectPlayer, selectBase } from '@/engine/game/selectors'
import { UIVariations } from '@/utils/ui'
import { hexToRGBA } from '@/utils/helpers'
import { LIGHT_BLUE, WHITE } from '@/utils/colors'
import { Scenes, Status as StatusType } from '@/types'

const StyledStatus = styled.div<{ primaryColor: string }>`
    height: 20px;
    width: auto;
    flex-basis: auto;
    margin: 2px 5px;
    padding: 1px 4px;
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
    justify-content: center;
    flex-wrap: wrap-reverse;
    width: 100%;
    text-align: ${props => props.alignment};
    height: auto;
    padding: 10px 10px 5px;
    margin-top: 2rem;
    margin-left: ${props => (props.alignment === 'left' ? '-20px' : '30px')};
    margin-right: ${props => (props.alignment === 'right' ? '-20px' : '30px')};
    color: ${props => props.primaryColor};
`

const statusesDict: Record<string, string> = {
    burning:
        'While BURNING is active, your base will not receive repairs for {x} rounds for {x} rounds..',
    badWeather:
        'While BAD WEATHER is active, base attackers do 50% less damage and base repairs are reduced by 50% for {x} rounds..',
    overwhelmed:
        'While OVERWHELMED is active, base attackers do 50% more damage and base repairs are reduced by 50% for {x} rounds..',
    protected:
        'While PROTECTED is active, take 50% less damage from base attackers for {x} rounds..',
    surrounded:
        'While SURROUNDED is active, take 50% more damage from base attackers for {x} rounds..',
}

const Status = ({ primaryColor, k, v }: { primaryColor: string; k: string; v: number }) => (
    <StyledStatus key={`status-${k}`} primaryColor={primaryColor}>
        <Tooltip
            key={`status-${k}-tooltip`}
            content={statusesDict[k] ? statusesDict[k].replace(/{x}/, v.toString()) : ''}
            direction="top"
            color={primaryColor}
        >
            <W>
                {upperCase(k)} {v}
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

export function BaseDefenseFooter() {
    const uiElements = UIVariations[Scenes.BaseDefense]

    const { gameStateService } = React.useContext(GameStateContext)
    const player = useSelector(gameStateService, selectPlayer)
    const base = useSelector(gameStateService, selectBase)

    return (
        <div className="h-[165px] box-border grid grid-cols-12 gap-4 col-start-auto col-span-12 absolute inset-x-0 bottom-0 mt-auto">
            <div className="w-[900px] absolute left-0 right-0 mx-auto mb-0">
                <StyledStatBars
                    primaryColor={LIGHT_BLUE}
                    characterColor={LIGHT_BLUE}
                    hp={base.stats.hp}
                    maxHp={base.stats.maxHp}
                    name="FORWARD OPERATING BASE"
                    alignment="center"
                    barks={base.barks}
                    isBase
                />

                <div className="mx-auto -mt-[5px] w-full flex items-start justify-center">
                    <div className="z-[100] my-0 mx-auto bottom-0">
                        <Tooltip
                            key="base-money-tooltip"
                            content="Money can be used to buy and remove operation and combat cards."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                MONEY ${(player.stats.money || 0) + (player.stats.gainedMoney || 0)}
                            </StyledStat>
                        </Tooltip>
                        <Tooltip
                            key="base-supplies-tooltip"
                            content="Supplies are used to repair your base and buy and remove base defense cards. 25 supplies are depleted each round during base defense in order to repair your base."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                SUPPLIES{' '}
                                {(player.stats.supplies || 0) + (player.stats.gainedSupplies || 0)}
                            </StyledStat>
                        </Tooltip>
                        <Tooltip
                            key="personnel-tooltip"
                            content="PERSONNEL determines how much your base is repaired each round."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                PERSONNEL {base.stats.personnel || 0}
                            </StyledStat>
                        </Tooltip>
                        <Tooltip
                            key="morale-tooltip"
                            content="MORALE is added to PERSONNEL when determining how much your base is repaired each round."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                MORALE {base.stats.morale || 0}
                            </StyledStat>
                        </Tooltip>
                        <Tooltip
                            key="fortifications-tooltip"
                            content="When a base attacker deals any damage to your base, FORTIFICATIONS absorbs damage equal to the current value."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                FORTIFICATIONS {base.stats.fortifications || 0}
                            </StyledStat>
                        </Tooltip>
                        <Tooltip
                            key="anti-air-tooltip"
                            content="When a base attacker deals AIR damage to your base, ANTI-AIR absorbs damage equal to the current value."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                ANTI-AIR {base.stats.antiAir || 0}
                            </StyledStat>
                        </Tooltip>
                        <Tooltip
                            key="anti-ground-tooltip"
                            content="When a base attacker deals GROUND damage to your base, ANTI-GROUND absorbs damage equal to the current value."
                            direction="top"
                            color={uiElements.primaryColor}
                        >
                            <StyledStat primaryColor={LIGHT_BLUE}>
                                ANTI-GROUND {base.stats.antiGround || 0}
                            </StyledStat>
                        </Tooltip>
                    </div>
                </div>
                <div className="col-span-8 h-[25px] -mt-[1.75rem] mx-auto mb-0">
                    <StyledStatusesContainer
                        primaryColor={uiElements.primaryColor}
                        alignment="left"
                    >
                        <StatusList
                            statuses={Object.entries(base.statuses)}
                            color={uiElements.primaryColor}
                        />
                    </StyledStatusesContainer>
                </div>
            </div>
        </div>
    )
}
