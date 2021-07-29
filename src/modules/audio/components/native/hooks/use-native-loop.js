import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativeLoop (audio) {

    const isRepeat = useStore ((state) => state.isRepeat)

    useEffect (() => {

        if (audio === null) return

        audio.loop = isRepeat
    
    }, [audio, isRepeat])

}
