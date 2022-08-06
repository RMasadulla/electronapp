import * as React from 'react'

import { CombatLoadingScreen } from '@/components/screens/combat/CombatLoadingScreen'

type Props = {
    children: React.ReactNode
}

export function AsyncCombatBoundary({ children }: Props) {
    return <React.Suspense fallback={<CombatLoadingScreen />}>{children}</React.Suspense>
}
