import React, { ReactElement, useCallback } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { useRecoilValue } from 'recoil'
import { playerStateIsPlaying, playerStateRef } from './player.state'

export const PlayerEvents = (): ReactElement => {

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

