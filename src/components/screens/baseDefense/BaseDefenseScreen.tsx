import * as React from 'react'

import { BaseDefenseIntroScreen } from '@/components/screens/baseDefense/BaseDefenseIntroScreen'
import { AsyncBaseDefenseBoundary } from './AsyncBaseDefenseBoundary'

const BaseDefenseMain = React.lazy(() => import('./BaseDefenseMain'))

export function BaseDefenseScreen({ showIntro }: { showIntro: boolean }) {
    return (
        <div className="bg-black w-full h-full">
            {showIntro ? (
                <BaseDefenseIntroScreen />
            ) : (
                <AsyncBaseDefenseBoundary>
                    <BaseDefenseMain />
                </AsyncBaseDefenseBoundary>
            )}
        </div>
    )
}
