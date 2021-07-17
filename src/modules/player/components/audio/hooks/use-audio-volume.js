import React, { useEffect } from 'react'
import { useStore } from '../../../../../hooks'

/**
 * @param {React.Ref} ref audio ref
 */
export function useAudioVolume (ref) {

    const volume = useStore ((state) => state.volume)
    const setVolume = useStore ((state) => state.setVolume)

    useEffect (() => {

        const audio = ref.current

        audio.volume = volume

        const listener = () => setVolume (audio.volume)

        audio.addEventListener ('volumechange', listener)

        return () => {

            audio.removeEventListener ('volumechange', listener)
        
        }

    }, [])

}
