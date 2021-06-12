import React, { useEffect, useRef } from 'react'
import { useRecoilState } from 'recoil'
import { playerStateRef } from './player-state'

export const PlayerElement = () => {

    const audioRef = useRef (null)
    const [, setPlayerRef] = useRecoilState (playerStateRef)

    useEffect (() => {

        const audio = audioRef.current

        setPlayerRef (audio)

    }, [setPlayerRef])

    return (
        <>
            <div className="player">
                <audio className="w-100" ref={audioRef} controls>
                    <track kind="captions"/>
                </audio>
            </div>
        </>
    )

}

