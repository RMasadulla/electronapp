import * as React from 'react'
import styled, { keyframes } from 'styled-components'
import { desaturate } from 'polished'

import { hexToRGBA } from '@/utils/helpers'
import { BLACK, GRAY } from '@/utils/colors'

const pulse = ({ primaryColor, disable }: { primaryColor: string; disable?: boolean }) => keyframes`
	0% {
		transform: ${disable ? `scale(1)` : `scale(0.99)`};
		box-shadow: ${disable ? 'none' : `0px 0px 10px 0 ${hexToRGBA(primaryColor, 0.9)}`},
        0px 0px 10px 0 ${hexToRGBA(primaryColor, 0.9)};
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 5px rgba(0, 0, 0, 0);
	}

	100% {
		transform: ${disable ? `scale(1)` : `scale(0.99)`};
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
`

const ButtonStyles = styled.button<{
    primaryColor: string
    disable?: boolean // hack to avoid disabling all button functionality (i.e. tooltip hover event)
}>`
    background: ${({ primaryColor, disable }) => (disable ? BLACK : primaryColor)};
    color: ${({ disable }) => (disable ? GRAY : '#2b2b2b')};
    border: none;
    padding: 10px 20px;
    width: auto;
    height: 50px;
    margin: 0;
    line-height: 1;
    cursor: pointer;
    box-shadow: ${({ primaryColor, disable }) =>
            disable ? 'none' : `0px 0px 10px 0 ${hexToRGBA(primaryColor, 0.9)}`},
        0px 0px 10px 0 ${props => hexToRGBA(props.primaryColor, 0.9)};
    transition: background 0.25s ease-in-out;
    transform: scale(1);
    animation: ${pulse} 2s infinite;
    font-size: 1.2rem;
    letter-spacing: 1px;

    &:hover {
        background: ${props => (props.disable ? BLACK : desaturate(0.25, props.primaryColor))};
    }
`

type ButtonProps = {
    onClick: () => void
    children: React.ReactNode
    disabled: boolean
    primaryColor: string
    style?: Record<string, string>
}

export function Button({ primaryColor, onClick, children, disabled, style }: ButtonProps) {
    return (
        <ButtonStyles
            type="button"
            onClick={disabled ? undefined : onClick}
            primaryColor={primaryColor}
            disable={disabled}
            style={style}
        >
            {children}
        </ButtonStyles>
    )
}
