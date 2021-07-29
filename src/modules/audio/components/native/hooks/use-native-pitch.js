import { useEffect } from 'react'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativePitch (audio) {

    useEffect (() => {

        if (audio === null) return

        audio.mozPreservesPitch = false
    
    }, [audio])

}
