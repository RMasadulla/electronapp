import * as React from 'react'
import styled, { keyframes } from 'styled-components'

import { LIGHT_BLUE, BLACK } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

export const BaseDefenseIntroScreenBackground = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(
        ellipse at center,
        ${hexToRGBA(LIGHT_BLUE, 0.125)} 450px,
        ${hexToRGBA(BLACK, 1)}
    );
    background-repeat: no-repeat;
    color: ${LIGHT_BLUE};
`

const DotGridOne = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(LIGHT_BLUE, 0.5)} 2px,
        transparent 0
    );
    background-size: 76px 76px;
`

const DotGridTwo = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(LIGHT_BLUE, 0.4)} 1px,
        transparent 0
    );
    background-size: 38px 38px;
`

const StyledLoader = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`

const LoaderCenter = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background: ${LIGHT_BLUE};
    margin: auto;
`

const orbit = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`

const StyledOrbit = styled.div`
    background: transparent;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.55);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
`

const planet = styled.div`
    position: absolute;
    z-index: 100;
    border-radius: 50%;
    background: ${LIGHT_BLUE};
`

const StyledPlanet1 = styled(planet)`
    left: 35px;
    height: 10px;
    width: 10px;
`

const StyledPlanet2 = styled(planet)`
    left: 50px;
    height: 12px;
    width: 12px;
`

const StyledPlanet3 = styled(planet)`
    left: 65px;
    height: 7px;
    width: 7px;
`

const StyledPlanet4 = styled(planet)`
    left: 80px;
    height: 12px;
    width: 12px;
`

const StyledPlanet5 = styled(planet)`
    left: 95px;
    height: 5px;
    width: 5px;
`

const StyledPlanet6 = styled(planet)`
    left: 110px;
    height: 7px;
    width: 7px;
`

const StyledPlanet7 = styled(planet)`
    left: 122px;
    height: 5px;
    width: 5px;
`

const StyledOrbit1 = styled(StyledOrbit)`
    height: 50px;
    width: 50px;
    animation: ${orbit} 5s infinite linear;
`

const StyledOrbit2 = styled(StyledOrbit)`
    height: 75px;
    width: 75px;
    animation: ${orbit} 7s infinite linear;
`

const StyledOrbit3 = styled(StyledOrbit)`
    height: 100px;
    width: 100px;
    animation: ${orbit} 10s infinite linear;
`

const StyledOrbit4 = styled(StyledOrbit)`
    height: 125px;
    width: 125px;
    animation: ${orbit} 7s infinite linear;
`

const StyledOrbit5 = styled(StyledOrbit)`
    height: 150px;
    width: 150px;
    animation: ${orbit} 10s infinite linear;
`

const StyledOrbit6 = styled(StyledOrbit)`
    height: 175px;
    width: 175px;
    animation: ${orbit} 12s infinite linear;
`

const StyledOrbit7 = styled(StyledOrbit)`
    height: 200px;
    width: 200px;
    animation: ${orbit} 10s infinite linear;
`

const StyledOrbitOuter = styled(StyledOrbit)`
    height: 225px;
    width: 225px;
    border: 1px solid ${hexToRGBA(LIGHT_BLUE, 0.75)};
`

const StyledLoadingText = styled.p`
    position: absolute;
    top: 275px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90px;
    height: 15px;
    margin: auto;
    font-size: 2rem;
`

export function BaseDefenseLoadingScreen() {
    return (
        <BaseDefenseIntroScreenBackground>
            <DotGridOne>
                <DotGridTwo>
                    <StyledLoader>
                        <LoaderCenter />
                        <StyledOrbit1>
                            <StyledPlanet1 />
                        </StyledOrbit1>
                        <StyledOrbit2>
                            <StyledPlanet2 />
                        </StyledOrbit2>
                        <StyledOrbit3>
                            <StyledPlanet3 />
                        </StyledOrbit3>
                        <StyledOrbit4>
                            <StyledPlanet4 />
                        </StyledOrbit4>
                        <StyledOrbit5>
                            <StyledPlanet5 />
                        </StyledOrbit5>
                        <StyledOrbit6>
                            <StyledPlanet6 />
                        </StyledOrbit6>
                        <StyledOrbit7>
                            <StyledPlanet7 />
                        </StyledOrbit7>
                        <StyledOrbitOuter />
                        <StyledLoadingText>LOADING…</StyledLoadingText>
                    </StyledLoader>
                </DotGridTwo>
            </DotGridOne>
        </BaseDefenseIntroScreenBackground>
    )
}
