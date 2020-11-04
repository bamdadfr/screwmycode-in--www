import React, { ReactElement, useCallback, useEffect } from 'react'
import { KeyboardEventHandler } from 'react-keyboard-event-handler'
import { useRecoilValue, useRecoilState } from 'recoil'
import { createBrowserHistory } from 'history'
import { playerStateIsPlaying, playerStateRef, playerStateSpeed, playerStateSource } from './player.state'

export const PlayerEvents = (): ReactElement => {

    return (
        <>
            <PlayerEventsOnKeyboard />
            <PlayerEventsOnSpeedChange />
            <PlayerEventsOnMount />
        </>
    )

}

const PlayerEventsOnKeyboard = (): ReactElement => {

    const isPlaying = useRecoilValue (playerStateIsPlaying)
    const ref = useRecoilValue (playerStateRef)
    
    const switchPlayPause = useCallback ((audio: any) => {

        return isPlaying ? audio.pause () : audio.play ()
    
    }, [isPlaying])

    return (
        <>
            <KeyboardEventHandler
                handleKeys={['Space']}
                onKeyEvent={(): void|Promise<void> => switchPlayPause (ref)}
            />

        </>
    )

}

const PlayerEventsOnSpeedChange = (): ReactElement => {

    const audio = useRecoilValue (playerStateRef)
    const speed = useRecoilValue (playerStateSpeed)

    useEffect (() => {

        audio.playbackRate = speed
        
        const history = createBrowserHistory ()
            
        history.push (`${window.location.pathname}?speed=${speed}`)

    }, [speed, audio, audio.src])

    return <></>

}

const PlayerEventsOnMount = (): ReactElement => {

    const [, setIsPlaying] = useRecoilState (playerStateIsPlaying)
    const playerRef = useRecoilValue (playerStateRef)
    const source = useRecoilValue (playerStateSource)

    useEffect (() => {

        const audio: any = playerRef

        audio.mozPreservesPitch = false
        
        audio.src = source
        
        audio.load ()
        
        audio.onplay = (): void => setIsPlaying (true)
            
        audio.onpause = (): void => setIsPlaying (false)

        return (): void => {

            setIsPlaying (false) 

        }

    }, [source, setIsPlaying, playerRef])

    return <></>

}