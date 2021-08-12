import { useCallback, useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { setDurationAtom } from '../../../../../atoms/duration.atoms'
import { setLoadedAtom } from '../../../../../atoms/load.atoms'

/**
 * @param {HTMLAudioElement} audio element
 * @param {string} url audio url
 */
export function useNativeLoad (audio, url) {

    const [savedUrl, setSavedUrl] = useState ()
    const [, setLoaded] = useAtom (setLoadedAtom)
    const [, setDuration] = useAtom (setDurationAtom)

    const handleCanPlay = useCallback (() => {

        setLoaded (true)

    }, [setLoaded])

    const handleMetadata = useCallback (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        setDuration (audio.duration)

    }, [audio, setDuration])

    useEffect (() => {

        if (!(audio instanceof HTMLAudioElement)) return

        if (url === savedUrl) return

        audio.src = url

        setSavedUrl (url)

        audio.addEventListener ('canplay', () => handleCanPlay ())

        audio.addEventListener ('loadedmetadata', () => handleMetadata ())

        return () => {

            audio.removeEventListener ('canplay', () => handleCanPlay ())

            audio.removeEventListener ('loadedmetadata', () => handleMetadata ())
        
        } 

    }, [audio, handleCanPlay, handleMetadata, savedUrl, setDuration, url])

}