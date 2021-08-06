import { useEffect } from 'react'
import { useStore } from '../../../../../store/use-store'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativePlayPause (audio) {

    const isPlaying = useStore ((state) => state.isPlaying)

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        if (isPlaying) return audio.play ()

        audio.pause ()

    }, [isPlaying, audio])

}
