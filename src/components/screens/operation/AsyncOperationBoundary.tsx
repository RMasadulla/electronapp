import * as React from 'react'

import { OperationLoadingScreen } from '@/components/screens/operation/OperationIntroScreen'

type Props = {
    children: React.ReactNode
}

export function AsyncOperationBoundary({ children }: Props) {
    return <React.Suspense fallback={<OperationLoadingScreen />}>{children}</React.Suspense>
}
