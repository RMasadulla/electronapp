import * as React from 'react'
import { sample } from 'lodash'

import { Typer } from '@/components/shared/Typer'

import { DEATH_MESSAGES } from '@/utils/constants'

function DeathMessage() {
    return (
        <div className="absolute flex top-0 bottom-0 left-0 right-0 w-full h-screen z-[999] m-auto bg-black/50">
            <h1 className="m-auto text-9xl bg-black p-4 py-1 leading-none">
                <Typer>{sample(DEATH_MESSAGES)}</Typer>
            </h1>
        </div>
    )
}

export const DeathMessageOverlay = React.memo(DeathMessage)
