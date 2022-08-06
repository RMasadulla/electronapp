import styled from 'styled-components'
import { LIGHT_BLUE, BLACK } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

import bg03 from '/images/bg_03.png'

export const BaseDefenseScreenBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(
            ellipse at center,
            ${hexToRGBA(LIGHT_BLUE, 0.35)} 350px,
            ${hexToRGBA(BLACK, 1)}
        ),
        url(${bg03});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-blend-mode: screen;
    color: ${LIGHT_BLUE};
    z-index: 1;
`
