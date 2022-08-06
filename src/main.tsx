import { render } from 'react-dom'
import { ErrorBoundary } from 'react-error-boundary'

import App from './App'

import 'styles/index.css'

function ErrorFallback({ error }) {
    return (
        <div role="alert" className="w-full h-full flex items-center justify-center zoom">
            <div className="w-2/3 text-lg text-dm-light-blue [text-shadow:0_0_25px_#4bb8e7] text-center">
                <h1 className="text-dm-orange">THE GAME HAS CRASHED!</h1>
                <p className="m-1">
                    YOU ARE NOT SUPPOSE TO SEE THIS ... SORRY ABOUT THAT. WE WILL TRY BETTER NEXT
                    TIME.
                </p>
                <p className="m-1">
                    PLEASE EMAIL THE DEVELOPER AT{' '}
                    <span className="text-dm-yellow">email@unusualundertaking.com</span> ...
                </p>
                <p className="m-1">
                    OR TELL SOMEONE AT{' '}
                    <span className="text-dm-yellow">BONUS STAGE PUBLISHING</span> THAT THE DINO
                    MERCS DEVELOPER BROKE THEIR GAME AGAIN.
                </p>
                <p className="m-1">
                    PLEASE COPY &amp; PASTE THE BELOW ERROR (WHITE TEXT) INTO THE EMAIL SO WE CAN
                    DETERMINE A FIX (CLICKING THE TEXT WILL AUTO COPY IT TO YOUR CLIPBOARD):
                </p>
                <p
                    className="m-4 p-2 text-slate-300 bg-slate-900 text-left text-sm"
                    onClick={() => {
                        navigator.clipboard.writeText(error.message)
                    }}
                >
                    {error.message}
                </p>
                <p className="m-1 text-dm-orange">
                    THANK YOU FOR YOUR HELP AND FOR BEING PATIENT WHILE WE FIX THE GAME.
                </p>
            </div>
        </div>
    )
}

const container = document.getElementById('root')
render(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
        <App />
    </ErrorBoundary>,
    container,
)

window.removeLoading()
