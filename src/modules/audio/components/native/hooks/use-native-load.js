import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio element
 * @param {string} url audio url
 */
export function useNativeLoad (audio, url) {

    const [savedUrl, setSavedUrl] = useState ()
    const setIsLoaded = useStore ((state) => state.setIsLoaded)

    const handleCanPlay = useCallback (() => {

        setIsLoaded (true)

    }, [setIsLoaded])

    useEffect (() => {

        if (audio === null) return

        if (url === savedUrl) return

        audio.src = url

        audio.addEventListener ('canplay', () => handleCanPlay ())

        setSavedUrl (url)

        return () => audio.removeEventListener ('canplay', () => handleCanPlay ())

    }, [audio, handleCanPlay, savedUrl, url])

}
