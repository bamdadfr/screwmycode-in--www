import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativePlaybackRate (audio) {

    const speed = useStore ((state) => state.speed)

    useEffect (() => {

        if (audio === null) return

        audio.playbackRate = speed
    
    }, [audio, speed])

}
