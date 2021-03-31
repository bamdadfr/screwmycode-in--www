import React, { useCallback, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { useRecoilValue, useRecoilState } from 'recoil'
import { createBrowserHistory } from 'history'
import { playerStateIsPlaying, playerStateRef, playerStateSpeed, playerStateSource } from './player-state'

export const PlayerEvents = () => (
    <>
        <PlayerEventsOnKeyboard/>
        <PlayerEventsOnSpeedChange/>
        <PlayerEventsOnMount/>
    </>
)

const PlayerEventsOnKeyboard = () => {

    const isPlaying = useRecoilValue (playerStateIsPlaying)
    const ref = useRecoilValue (playerStateRef)
    const switchPlayPause = useCallback ((audio) => isPlaying ? audio.pause () : audio.play (), [isPlaying])

    return (
        <>
            <KeyboardEventHandler
                handleKeys={['Space']}
                onKeyEvent={() => switchPlayPause (ref)}
            />

        </>
    )

}

const PlayerEventsOnSpeedChange = () => {

    const audio = useRecoilValue (playerStateRef)
    const speed = useRecoilValue (playerStateSpeed)

    useEffect (() => {

        audio.playbackRate = speed

        const history = createBrowserHistory ()

        history.replace (`${window.location.pathname}?speed=${speed}`)

    }, [speed, audio, audio.src])

    return <></>

}

const PlayerEventsOnMount = () => {

    const [, setIsPlaying] = useRecoilState (playerStateIsPlaying)
    const playerRef = useRecoilValue (playerStateRef)
    const source = useRecoilValue (playerStateSource)
    const speed = useRecoilValue (playerStateSpeed)

    useEffect (() => {

        const audio = playerRef

        audio.src = source

        audio.load ()

        audio.mozPreservesPitch = false

        audio.playbackRate = speed

        audio.onplay = () => setIsPlaying (true)

        audio.onpause = () => setIsPlaying (false)

        return () => {

            setIsPlaying (false)

        }

    }, [source, setIsPlaying, playerRef])

    return <></>

}