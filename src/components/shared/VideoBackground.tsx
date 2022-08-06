import * as React from 'react'

// import EmbersImg from '/images/mission_overview_bg.jpg'
const LazyVideo = React.lazy(() => import('./LazyVideo'))

type Props = {
    video: string
    opacity?: number
}

export function VideoBackground({ video, opacity }: Props) {
    return (
        <React.Suspense
            fallback={<div className="absolute top-0 left-0 w-full h-full object-cover bg-black" />}
        >
            <LazyVideo video={video} opacity={opacity} />
        </React.Suspense>
    )
}
