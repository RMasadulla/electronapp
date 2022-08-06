import * as React from 'react'
import styled from 'styled-components'

import { CombatMiddleContent } from '@/components/screens/combat/CombatMiddleContent'
import { CombatFooter } from '@/components/screens/combat/CombatFooter'
import { CombatScreenHeader } from '@/components/screens/combat/CombatScreenHeader'
import { CombatIntroScreen } from '@/components/screens/combat/CombatIntroScreen'
import { AsyncCombatBoundary } from '@/components/screens/combat/AsyncCombatBoundary'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { RED, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

import combatVideoBg from '/images/combat_vid_bg.mp4'

const CombatMain = React.lazy(() => import('./CombatMain'))

const DotGridOne = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(circle at 1px 1px, ${hexToRGBA(RED, 0.5)} 2px, transparent 0);
    background-position: center center;
    background-size: 76px 76px;
    background-blend-mode: overlay;
    z-index: 2;
`

const DotGridTwo = styled.div`
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
    background-position: center center;
    background-size: 77px 77px;
    background-blend-mode: overlay;
    z-index: 3;
`

export function CombatScreen({ showIntro }: { showIntro: boolean }) {
    return (
        <div className="bg-black w-full h-full zoom">
            {showIntro ? (
                <CombatIntroScreen />
            ) : (
                <AsyncCombatBoundary>
                    <VideoBackground video={combatVideoBg} />
                    <DotGridOne />
                    <DotGridTwo />
                    <div className="relative w-full h-full">
                        <div className="crt z-10 w-full h-full absolute inset-0">
                            <CombatMain>
                                <div className="box-border relative grid h-full grid-cols-12 gap-4 col-start-auto col-span-12">
                                    <CombatScreenHeader />
                                    <CombatMiddleContent />
                                    <CombatFooter />
                                </div>
                            </CombatMain>
                        </div>
                    </div>
                </AsyncCombatBoundary>
            )}
        </div>
    )
}
