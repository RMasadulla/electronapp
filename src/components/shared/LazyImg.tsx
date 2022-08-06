import * as React from 'react'

const Img = React.lazy(() => import('./Img'))

type Props = {
    src: string
    alt: string
    w?: number
    h?: number
    r?: number
    l?: number
    b?: number
    className?: string
    dropShadow?: boolean
    shield?: number
    color?: string
}

export function LazyImg({ src, alt, w, h, l, r, b, className, dropShadow, shield, color }: Props) {
    return (
        <React.Suspense
            fallback={
                <div
                    style={{
                        width: w ? `${w}px` : 'auto',
                        height: h ? `${h}px` : 'auto',
                        right: r ? `${r}px` : undefined,
                        left: l ? `${l}px` : undefined,
                        bottom: b ? `${b}px` : undefined,
                    }}
                />
            }
        >
            <Img
                src={src}
                alt={alt}
                w={w}
                h={h}
                r={r}
                l={l}
                b={b}
                className={className}
                dropShadow={dropShadow}
                shield={shield}
                color={color}
            />
        </React.Suspense>
    )
}
