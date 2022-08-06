import * as React from 'react'

import { BaseDefenseLoadingScreen } from '@/components/screens/baseDefense/BaseDefenseLoadingScreen'

type Props = {
    children: React.ReactNode
}

export function AsyncBaseDefenseBoundary({ children }: Props) {
    return <React.Suspense fallback={<BaseDefenseLoadingScreen />}>{children}</React.Suspense>
}
