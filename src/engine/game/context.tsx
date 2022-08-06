import * as React from 'react'
import { InterpreterFrom } from 'xstate'
import { useInterpret } from '@xstate/react'

import { gameMachine } from './machine'

type GameStateContextType = { gameStateService: InterpreterFrom<typeof gameMachine> }

export const GameStateContext = React.createContext<GameStateContextType>(
    {} as GameStateContextType,
)

export const GameStateProvider = ({ children }: { children: React.ReactNode }) => {
    const gameStateService = useInterpret(gameMachine)

    return (
        <GameStateContext.Provider value={{ gameStateService }}>
            {children}
        </GameStateContext.Provider>
    )
}
