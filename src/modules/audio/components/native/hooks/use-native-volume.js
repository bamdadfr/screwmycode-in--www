import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio element
 */
export function useNativeVolume (audio) {

    const volume = useStore ((state) => state.volume)
    const setVolume = useStore ((state) => state.setVolume)

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        audio.volume = volume

        const handleVolumeChange = () => setVolume (audio.volume)

        audio.addEventListener ('volumechange', handleVolumeChange)

        return () => audio.removeEventListener ('volumechange', handleVolumeChange)

    }, [audio, setVolume, volume])

}
