import styled from 'styled-components'

import BaseDefenseContent from '@/components/screens/baseDefense/BaseDefenseContent'
import { BaseDefenseCardOverlay } from '@/components/screens/baseDefense/BaseDefenseCardOverlay'
import { BaseDefenseFooter } from '@/components/screens/baseDefense/BaseDefenseFooter'
import { BaseDefenseHeader } from '@/components/screens/baseDefense/BaseDefenseHeader'
import { BaseDefenseMiddleContent } from '@/components/screens/baseDefense/BaseDefenseMiddleContent'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { LIGHT_BLUE, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

import baseDefenseVideoBg from '/images/bd_vid_bg.mp4'

const DotGridOne = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background-image: radial-gradient(
        circle at 1px 1px,
        ${hexToRGBA(LIGHT_BLUE, 0.5)} 2px,
        transparent 0
    );
    background-position: center center;
    background-blend-mode: overlay;
    background-size: 76px 76px;
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
    background-blend-mode: overlay;
    background-size: 77px 77px;
    z-index: 3;
`

export default function BaseDefenseMain() {
    return (
        <>
            <VideoBackground video={baseDefenseVideoBg} />
            <DotGridOne />
            <DotGridTwo />
            <div className="relative w-full h-full">
                <div className="crt zoom z-10 w-full h-full absolute inset-0">
                    <BaseDefenseContent>
                        <BaseDefenseCardOverlay />

                        <div className="box-border relative grid h-full grid-cols-12 gap-4 col-start-auto col-span-12">
                            <BaseDefenseHeader />

                            <BaseDefenseMiddleContent />

                            <BaseDefenseFooter />
                        </div>
                    </BaseDefenseContent>
                </div>
            </div>
        </>
    )
}
