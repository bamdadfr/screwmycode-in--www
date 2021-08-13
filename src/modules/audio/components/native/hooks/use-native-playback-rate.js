import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { speedAtom } from '../../../../../atoms/speed.atoms'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativePlaybackRate (audio) {

    const [speed] = useAtom (speedAtom)

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        audio.playbackRate = speed
    
    }, [audio, speed])

}