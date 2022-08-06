import styled from 'styled-components'

import { hexToRGBA } from '@/utils/helpers'

export const ControlButton = styled.button<{ primaryColor: string; offset?: number }>`
    position: relative;
    background: none;
    padding: 0 5px;
    line-height: 1;
    vertical-align: bottom;
    border: 2px solid ${({ primaryColor }) => hexToRGBA(primaryColor, 0.625)};
    border-radius: 5px;
    width: auto;
    height: 25px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1.25rem;
    color: ${({ primaryColor }) => hexToRGBA(primaryColor, 0.75)};
`
