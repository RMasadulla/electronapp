import * as React from 'react'
import styled from 'styled-components'

import { LIGHT_BLUE, BLUE, BLACK, WHITE } from '@/utils/colors'
import { hexToRGBA } from '@/utils/helpers'

import { GameStateContext } from '../../engine/game/context'

const IntroScreenBackground = styled.div`
    height: 100%;
    width: 100%;
    background: radial-gradient(
        ellipse at center,
        ${hexToRGBA(BLUE, 0.35)} 450px,
        ${hexToRGBA(BLACK, 1)}
    );
    background-repeat: no-repeat;
    color: ${WHITE};
    display: flex;
    align-items: center;
    justify-content: center;
`

const IntroScreenContent = styled.div`
    max-width: 50%;
    font-size: 1.4rem;
    line-height: 1.3;
    text-shadow: 0px 0px 15px ${hexToRGBA(LIGHT_BLUE, 0.95)};
`

export function IntroScreen() {
    const { gameStateService } = React.useContext(GameStateContext)
    const [introStep, setIntroStep] = React.useState(0)

    return (
        <IntroScreenBackground className="crt">
            {introStep === 0 && (
                <IntroScreenContent>
                    <h2>WELCOME</h2>
                    <p>
                        First off, thank you for being an alpha tester. Video games cannot be made
                        without the help of inidividuals like yourself who are willing to play games
                        before they are finished and well-balanced. I&apos;m glad you&apos;re here
                        and excited to see, with your help, how the game will grow and develop over
                        time. Before you start playing, take some time to read through the next few
                        pages:
                    </p>
                    <p>
                        DINO MERCS is a roguelike deckbuilding game where you take on the role of a
                        veteran member of Dark Solar Defense, a shadowy private military
                        corporation. You&apos;ve just been assigned to what at first seems like a
                        straightforward mission on a newly found planet. However, you quickly
                        disinCover that the planet holds a dark secret and multiple forces fighting
                        for control of it. To survive, you&apos;ll need to go on operations, engage
                        in fierce combat, and defend your forward operating base from attackers.
                    </p>
                    <button type="button" onClick={() => setIntroStep(1)}>
                        NEXT
                    </button>
                </IntroScreenContent>
            )}
            {introStep === 1 && (
                <IntroScreenContent>
                    <p>
                        If you&apos;re not familiar with roguelike deckbuilding games, I&apos;d
                        highly recommend you play Slay the Spire before playing this game, to help
                        give you a frame of reference (Monster Train, Roguebook, and Griftlands are
                        a few other great examples to check out). If you don&apos;t have time to
                        play Slay the Spire, please watch this gameplay video before playing the
                        alpha: https://youtu.be/OqLbG5O8dag
                    </p>
                    <p>
                        Roguelike deckbuilding games are a bit different than most popular video
                        games out there. &ldquo;Roguelike&rdquo; means that you when you die in the
                        game, you start over from the beginning. This is expected and allows the
                        player to try new strategies the next run. &ldquo;Deckbuilding&rdquo; means
                        that instead of fighting with a static, fixed set of moves or a selection of
                        weapons, you build up a deck over time, made up of cards that each have
                        their own unique effects.
                    </p>
                    <button type="button" onClick={() => setIntroStep(2)}>
                        NEXT
                    </button>
                </IntroScreenContent>
            )}
            {introStep === 2 && (
                <IntroScreenContent>
                    <p>
                        As an alpha tester, you play a critical role in the game dev process.
                        Developing a game is very tough: it takes a great deal of time and testing
                        to make things somewhat close to perfect. Based on your feedback, the game
                        will change in a number of ways, some dramatic, some minor. For Alpha
                        release 0.2.0, I need your feedback to help answer this question:
                    </p>
                    <p style={{ color: LIGHT_BLUE }}>
                        In what ways does the gameplay (cards, positioning, phases, etc.) of DINO
                        MERCS need to be balanced, adjusted, and/or overhauled to be A: fun, B:
                        fluid, and C: challenging? (A, B, C are all equally important)
                    </p>
                    <p>
                        The game is still in a very rough, unfinished, and unbalanced state. Right
                        now, I want to focus on making the core of the game feel like a solid,
                        promising roguelike deckbuilding game. Here are the things that should be
                        focused on during alpha testing:
                    </p>
                    <ul>
                        <li>
                            Is there synergy between cards? Can you play runs of cards that feel
                            satisfying?
                        </li>
                        <li>
                            Are cards balanced? Do you take too much damage or not enough? Are
                            enemies too weak or overpowered? Etc.
                        </li>
                        <li>
                            Are there any bugs I missed? Anything that just feels
                            &ldquo;weird&rdquo;?
                        </li>
                    </ul>
                    <button type="button" onClick={() => setIntroStep(3)}>
                        NEXT
                    </button>
                </IntroScreenContent>
            )}
            {introStep === 3 && (
                <IntroScreenContent>
                    <p>
                        In the early state of the game, I need little to no feedback on these
                        things:
                    </p>
                    <ul>
                        <li>
                            UI, art, and general look of the game. There&apos;s lots of placeholder
                            art and unfinished UI. It&apos;s real rough right now. That&apos;s
                            intentional.
                        </li>
                        <li>
                            Animations, transitions, etc. Those will be added throughout the game
                            soon.
                        </li>
                        <li>
                            Story, character progression, playing as different characters. The game
                            will have all of this, but none of that is currently implemented.
                        </li>
                    </ul>
                    <button
                        type="button"
                        onClick={() => gameStateService.send({ type: 'INTRO_COMPLETED' })}
                    >
                        Finish intro
                    </button>
                </IntroScreenContent>
            )}
        </IntroScreenBackground>
    )
}
