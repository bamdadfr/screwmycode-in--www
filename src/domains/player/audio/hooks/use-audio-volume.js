import React, { useEffect } from 'react'
import { useStoreVolume } from '../../../../hooks'

/**
 * @function
 * @name useAudioVolume
 * @param {React.Ref} ref - audio ref
 */
export function useAudioVolume (ref) {

    const { volume, setVolume } = useStoreVolume ()

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
