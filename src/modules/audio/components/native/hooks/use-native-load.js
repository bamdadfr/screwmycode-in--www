import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio element
 * @param {string} url audio url
 */
export function useNativeLoad (audio, url) {

    const [savedUrl, setSavedUrl] = useState ()
    const setIsLoaded = useStore ((state) => state.setIsLoaded)
    const setDuration = useStore ((state) => state.setDuration)
    const setSeekMax = useStore ((state) => state.setSeekMax)

    const handleCanPlay = useCallback (() => {

        setIsLoaded (true)

    }, [setIsLoaded])

    const handleMetadata = useCallback (() => {

        if (audio !== null) {

            setDuration (audio.duration)
        
        }

    }, [audio, setDuration])

    useEffect (() => {

        if (audio === null) return

        if (url === savedUrl) return

        audio.src = url

        setSavedUrl (url)

        audio.addEventListener ('canplay', () => handleCanPlay ())

        audio.addEventListener ('loadedmetadata', () => handleMetadata ())

        return () => {

            audio.removeEventListener ('canplay', () => handleCanPlay ())

            audio.removeEventListener ('loadedmetadata', () => handleMetadata ())
        
        } 

    }, [audio, handleCanPlay, handleMetadata, savedUrl, setDuration, setIsLoaded, setSeekMax, url])

}
