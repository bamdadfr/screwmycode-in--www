import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio audio element
 */
export function useNativeSeek (audio) {

    const seek = useStore ((state) => state.seek)

    useEffect (() => {

        if (audio !== null) {

            audio.currentTime = seek
            
        }

    }, [audio, seek])

}
