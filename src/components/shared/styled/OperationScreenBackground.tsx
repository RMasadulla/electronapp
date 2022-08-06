import styled from 'styled-components'
import { YELLOW, BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

import bg01 from '/images/bg_01.png'

export const OperationScreenBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(
            ellipse at center,
            ${hexToRGBA(YELLOW, 0.35)} 350px,
            ${hexToRGBA(BLACK, 1)}
        ),
        url(${bg01});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: screen;
    color: ${YELLOW};
    z-index: 1;
`

export const OperationDotGridOne = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(YELLOW, 0.5)} 2px,
        transparent 0
    );
    background-blend-mode: overlay;
    background-position: center center;
    background-size: 76px 76px;
    z-index: 2;
`

export const OperationDotGridTwo = styled.div`
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
    background-blend-mode: overlay;
    background-position: center center;
    background-size: 77px 77px;
    z-index: 3;
`
