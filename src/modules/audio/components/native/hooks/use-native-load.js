import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store'
import { calculateMinutes } from '../../../../../utils'

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

    useEffect (() => {

        if (audio === null) return

        if (url === savedUrl) return

        audio.src = url

        audio.addEventListener ('canplay', () => handleCanPlay ())

        audio.addEventListener ('loadedmetadata', () => {

            setDuration (calculateMinutes (audio.duration))

            setSeekMax (Math.floor (audio.duration))

        })

        setSavedUrl (url)

        return () => {

            audio.removeEventListener ('canplay', () => handleCanPlay ())

        }

    }, [audio, handleCanPlay, savedUrl, setDuration, setSeekMax, url])

}
