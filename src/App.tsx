import { AudioPlayerProvider } from 'react-use-audio-player'
import { HashRouter } from 'react-router-dom'

import { GameStateProvider } from '@/engine/game/context'
import Game from '@/Game'

import 'tailwindcss/tailwind.css'
import 'styles/index.css'

export default function App() {
    return (
        <GameStateProvider>
            <AudioPlayerProvider>
                <HashRouter>
                    <Game />
                </HashRouter>
            </AudioPlayerProvider>
        </GameStateProvider>
    )
}
