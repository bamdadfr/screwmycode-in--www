import React, { useEffect, useRef, ReactElement } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { createBrowserHistory } from 'history'
import 'react-toastify/dist/ReactToastify.css'
import { PlayerControls } from './player.controls'
import './player.styles.css'
import { playerStateIsPlaying, playerStateSource, playerStateSpeed, playerStateRef } from './player.state'
import { PlayerIcons } from './player.icons'
import { PlayerTitle } from './player.title'
import { PlayerEvents } from './player.events'

const PlayerElement = (): ReactElement => {

    const audioRef: any = useRef (null)
    const [, setPlayerRef] = useRecoilState (playerStateRef)

    useEffect (() => {

        const audio: any = audioRef.current

        setPlayerRef (audio)

    }, [setPlayerRef])

    return (
        <>
            <div className="player">
                <audio className="w-100" ref={audioRef} controls>
                    <track kind="captions" />
                </audio>
            </div>
        </>
    )

}

export const Player = (): ReactElement => {

    const [, setIsPlaying] = useRecoilState (playerStateIsPlaying)
    const playerRef = useRecoilValue (playerStateRef)
    const source = useRecoilValue (playerStateSource)
    const speed = useRecoilValue (playerStateSpeed)

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

    useEffect ((): void => {
        
        const audio: any = playerRef

        audio.playbackRate = speed
        
        const history = createBrowserHistory ()
            
        history.push (`${window.location.pathname}?speed=${audio.playbackRate}`)
        
    }, [speed, playerRef])

    return (
        <>

            <PlayerEvents />
            
            <PlayerTitle />

            <PlayerIcons />

            <PlayerElement />

            <PlayerControls />

        </>
    )

}