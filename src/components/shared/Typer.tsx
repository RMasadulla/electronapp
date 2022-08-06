import * as React from 'react'
import Typist from 'react-typist'
import { YELLOW } from '@/utils/colors'

export function Typer({ children }: { children: React.ReactNode }) {
    return (
        <Typist avgTypingDelay={10} stdTypingDelay={10}>
            {children}
        </Typist>
    )
}

export function TyperLooping({ word }: { word: string }) {
    return (
        <p className="text-3xl py-3" style={{ textShadow: `0 0 5px ${YELLOW}` }}>
            <Typist>
                <span>{word}</span>
                <Typist.Backspace count={8} delay={100} />
                <span>{word}</span>
                <Typist.Backspace count={8} delay={100} />
                <span>{word}</span>
                <Typist.Backspace count={8} delay={100} />
                <span>{word}</span>
                <Typist.Backspace count={8} delay={100} />
            </Typist>
        </p>
    )
}
