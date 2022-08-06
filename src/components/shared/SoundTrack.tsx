import React, {useState} from 'react';
import { useAudioPlayer } from 'react-use-audio-player'
import { isNil } from 'lodash'

import { GameStateContext } from '@/engine/game/context'

import CombatTrack from '@/audio/COMBAT.wav'
import { Tracks, Audio } from '@/types'

type Props = {
    track: Audio['track']
    currentVolume: Audio['volume']
    muted: Audio['muted']
    fadeout: Audio['fadeout']
}

const SoundTrack = ({ track, currentVolume, muted, fadeout }: Props) => {
    const { gameStateService } = React.useContext(GameStateContext)
    const { send } = gameStateService

    const [wavFile, setWavFile] = useState(null) // React.useState<string | null>(null)
     const [id, setId] = useState(null) //React.useState<number | null>(null)

    React.useEffect(() => {
        if (!track) return
        switch (track) {
            case Tracks.Combat:
                setWavFile(CombatTrack)
                if (isNil(id) && !playing && ready) {
                    const playId = play()
                    const id = typeof playId === 'number' ? playId : null
                    console.log('INIT AFTER SETTING SOUND TRACK :: ID: ', id)
                    setId(id)
                    send({ type: 'PLAY_SOUND_TRACK' })
                }
                break
            default:
                setWavFile(null)
        }
    }, [track])

    const { play, ready, playing, mute, volume, stop, fade } = useAudioPlayer({
        src: wavFile,
        format: 'wav',
        autoplay: false,
        loop: true,
        // onend: () => console.log('sound has ended!'),
        onfade: () => {
            console.log('FADING')
        },
    })

    React.useEffect(() => {
        console.log('ID meow meow: ', id)
    }, [id])

    // INIT
    React.useEffect(() => {
        console.log('IDDDDD: ', id, playing)
        if (!ready || playing || id) return
        if (track !== Tracks.None && isNil(id)) {
            const playId = play()
            const id = typeof playId === 'number' ? playId : null
            console.log('INIT :: ID: ', id)
            setId(id)
            send({ type: 'PLAY_SOUND_TRACK' })
        }
    }, [ready])

    // STOP IF PLAYING WHEN IT SHOULD NOT BE
    React.useEffect(() => {
        if (!playing || id) return
        if (track === Tracks.None && isNil(id) && playing) {
            stop()
            setId(null)
            console.log('STOPPING THE MUSIC')
            send({ type: 'PLAY_SOUND_TRACK' })
        }
    }, [playing, track, id, stop])

    React.useEffect(() => {
        if (isNil(currentVolume)) return
        if (!isNil(volume)) volume(currentVolume)
    }, [currentVolume])

    React.useEffect(() => {
        if (isNil(muted)) return
        if (!isNil(muted)) mute(muted)
    }, [muted])

    // FADE OUT TRACK
    React.useEffect(() => {
        if (!fade || !fadeout) return
        if (fadeout && fade) {
            fade(currentVolume, 0, 1000, id)
            setTimeout(() => {
                stop()
                setId(null)
                send({ type: 'PLAY_SOUND_TRACK' })
                send({ type: 'SET_TRACK', track: Tracks.None })
            }, 1001)
        }
    }, [fadeout, fade, stop])

    return <></>
}

export default React.memo(SoundTrack)
