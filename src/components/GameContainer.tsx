import * as React from 'react'

export function GameContainer({ children }: { children: React.ReactNode }) {
    return <div className="w-full h-full">{children}</div>
}
