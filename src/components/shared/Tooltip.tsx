import * as React from 'react'
import styled from 'styled-components'

import { BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

const StyledTooltipWrapper = styled.div`
    display: inline-block;
    position: relative;
`

const StyledTooltipTip = styled.div<{ height: number; color: string }>`
    width: 250px;
    position: absolute;
    border-radius: 4px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 12px;
    color: ${WHITE};
    background: ${BLACK};
    font-size: 1.15rem;
    line-height: 1.1;
    z-index: 100;
    white-space: pre-line;
    vertical-align: bottom;
    box-shadow: 0 0 20px ${props => hexToRGBA(props.color, 0.25)},
        0 0 25px ${props => hexToRGBA(props.color, 0.25)},
        0 0 30px ${props => hexToRGBA(props.color, 0.25)};
    border: 1px solid ${props => hexToRGBA(props.color, 0.75)};
    border-bottom: 3px solid ${props => hexToRGBA(props.color, 0.75)};
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    text-align: left;
    background: hexToRGBA(BLACK, 0.5);

    &::before {
        content: ' ';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0 auto;
        height: 0;
        width: 0;
        border: solid transparent;
        pointer-events: none;
        border-width: 6px;
    }

    &.top {
        top: calc((${props => props.height} * -1px) - 10px);

        &::before {
            top: 100%;
            border-top-color: ${props => hexToRGBA(props.color, 0.75)};
        }
    }

    &.bottom {
        &::before {
            bottom: 100%;
            border-bottom-color: ${props => hexToRGBA(props.color, 0.75)};
        }
    }
`

export const Tooltip = React.memo(
    ({
        content,
        direction,
        color,
        children,
        disable = false,
    }: {
        content: string
        direction: 'top' | 'bottom' | 'left' | 'right'
        color: string
        children?: React.ReactNode
        disable?: boolean
    }) => {
        const [height, setHeight] = React.useState(0)
        const ref = React.useRef<HTMLDivElement>(null)
        const [active, setActive] = React.useState(false)

        const setTooltipHeight = React.useCallback(() => {
            if (!ref || !ref.current) return
            setHeight(ref.current.clientHeight)
        }, [ref])

        React.useEffect(() => {
            setTooltipHeight()
        }, [active])

        const showTip = React.useCallback(() => {
            if (disable) return
            setActive(true)
        }, [disable])

        const hideTip = React.useCallback(() => {
            if (disable) return
            setActive(false)
        }, [disable])

        if (disable) return <>{children}</>

        return (
            <StyledTooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
                {children}
                {active && (
                    <StyledTooltipTip ref={ref} className={direction} height={height} color={color}>
                        {content}
                    </StyledTooltipTip>
                )}
            </StyledTooltipWrapper>
        )
    },
)
