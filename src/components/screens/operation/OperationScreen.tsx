import * as React from 'react'
import { useSelector } from '@xstate/react'

import {
    OperationDotGridOne,
    OperationDotGridTwo,
} from '@/components/shared/styled/OperationScreenBackground'
import { OperationMiddleContent } from '@/components/screens/operation/OperationMiddleContent'
import { OperationFooter } from '@/components/screens/operation/OperationFooter'
import { OperationScreenHeader } from '@/components/screens/operation/OperationScreenHeader'
import { OperationIntroScreen } from '@/components/screens/operation/OperationIntroScreen'
import { AsyncOperationBoundary } from '@/components/screens/operation//AsyncOperationBoundary'
import { VideoBackground } from '@/components/shared/VideoBackground'

import { GameStateContext } from '@/engine/game/context'
import { selectOperation } from '@/engine/game/selectors'

import opVideoBg from '/images/op_vid_bg.mp4'

const Main = React.lazy(() => import('./Main'))

export function OperationScreen({ showIntro }: { showIntro: boolean }) {
    const { gameStateService } = React.useContext(GameStateContext)
    const operation = useSelector(gameStateService, selectOperation)
    return (
        <div className="bg-black w-full h-full">
            {showIntro ? (
                <OperationIntroScreen />
            ) : (
                <AsyncOperationBoundary>
                    <VideoBackground video={opVideoBg} />
                    <OperationDotGridOne />
                    <OperationDotGridTwo />
                    {/* <VideoBackground opacity={0.5} bw /> */}
                    <div className="relative w-full h-full">
                        <div className="crt zoom z-10 zoom w-full h-full absolute inset-0">
                            <Main>
                                <div className="box-border relative grid h-full grid-cols-12 gap-4 col-start-auto col-span-12">
                                    <OperationScreenHeader operation={operation} />
                                    <OperationMiddleContent operation={operation} />
                                    <OperationFooter operation={operation} />
                                </div>
                            </Main>
                        </div>
                    </div>
                </AsyncOperationBoundary>
            )}
        </div>
    )
}
