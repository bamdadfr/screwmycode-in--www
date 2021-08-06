import { useEffect } from 'react'
import { useStore } from '../../../../../store/use-store'

/**
 * @param {HTMLAudioElement} audio audio element
 */
export function useNativeProgress (audio) {

    const isPlaying = useStore ((state) => state.isPlaying)
    const setProgress = useStore ((state) => state.setProgress)
    const fps = 10

    useEffect (() => {

        let i1 = undefined

        if (!(audio instanceof HTMLAudioElement)) return

        if (isPlaying) {

            i1 = setInterval (() => {

                setProgress (Math.floor (audio.currentTime))
            
            }, 1000 / fps)
        
        }

        return () => clearInterval (i1)

    }, [audio, isPlaying, setProgress])

}
