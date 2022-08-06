import styled from 'styled-components'
import { RED, BLACK } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

import bg02 from '/images/bg_02.png'

export const CombatScreenBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: radial-gradient(
            ellipse at center,
            ${hexToRGBA(RED, 0.35)} 350px,
            ${hexToRGBA(BLACK, 1)}
        ),
        url(${bg02});
    background-blend-mode: screen;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    color: ${RED};
    z-index: 1;
`
