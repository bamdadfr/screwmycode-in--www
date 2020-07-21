import React, { useEffect, useRef, ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { playerStateRef } from './player.state'

export const PlayerElement = (): ReactElement => {

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

