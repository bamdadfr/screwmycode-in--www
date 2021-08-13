import { useEffect } from 'react'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativePitch (audio) {

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        // noinspection JSUndefinedPropertyAssignment
        audio.mozPreservesPitch = false
    
    }, [audio])

}