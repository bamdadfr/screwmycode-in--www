import React, { useEffect, useRef, ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import 'react-toastify/dist/ReactToastify.css'
import { PlayerControls } from './player.controls'
import './player.styles.css'
import { playerStateRef } from './player.state'
import { PlayerIcons } from './player.icons'
import { PlayerTitle } from './player.title'
import { PlayerEvents } from './player.events'

export const Player = (): ReactElement => {

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