import { isNil } from 'lodash'
import * as React from 'react'

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

export default function Img({
    src,
    alt,
    w,
    h,
    l,
    r,
    b,
    className,
    dropShadow,
    shield,
    color,
}: Props) {
    return (
        <img
            alt={alt}
            src={src}
            style={{
                width: w ? `${w}px` : 'auto',
                height: h ? `${h}px` : 'auto',
                right: r ? `${r}px` : undefined,
                left: l ? `${l}px` : undefined,
                bottom: b ? `${b}px` : undefined,
                maxWidth: 'none',
                filter: dropShadow
                    ? `drop-shadow(0 0 ${!isNil(shield) ? (shield / 25) * 1.1 : 0}rem ${color})`
                    : undefined,
            }}
            className={`${!isNil(className) ? className : ''}`}
        />
    )
}
