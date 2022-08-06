import * as React from 'react'
import styled from 'styled-components'

import { CombatScreenBackground } from '@/components/shared/styled/CombatScreenBackground'
import { Typer } from '@/components/shared/Typer'

import { RED, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

const DotGridOne = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(circle at 1px 1px, ${hexToRGBA(RED, 0.5)} 2px, transparent 0);
    background-position: center center;
    background-size: 76px 76px;
`

const DotGridTwo = styled.div`
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(WHITE, 0.5)} 2px,
        transparent 0
    );
    background-position: center center;
    background-size: 77px 77px;
`

export function CombatLoadingScreen() {
    return (
        <CombatScreenBackground className="crt zoom">
            <DotGridOne>
                <DotGridTwo>
                    <div className="flex items-center justify-center crt w-full h-full">
                        <div className="w-1/2 h-1/2 m-auto uppercase">
                            <Typer>
                                <p
                                    className="text-6xl py-3 mt-12"
                                    style={{ textShadow: `0 0 5px ${RED}` }}
                                >
                                    LOADING…
                                </p>
                            </Typer>
                        </div>
                    </div>
                </DotGridTwo>
            </DotGridOne>
        </CombatScreenBackground>
    )
}
