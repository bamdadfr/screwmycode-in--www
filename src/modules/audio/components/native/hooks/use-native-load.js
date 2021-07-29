import React, { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {React.Ref} ref audio ref
 * @param {string} url audio url
 */
export function useNativeLoad (ref, url) {

    const [savedUrl, setSavedUrl] = useState ()
    const setIsLoaded = useStore ((state) => state.setIsLoaded)

    const handleCanPlay = useCallback (() => {

        setIsLoaded (true)

    }, [setIsLoaded])

    useEffect (() => {

        if (url === savedUrl) return

        const audio = ref.current

        audio.src = url

        audio.addEventListener ('canplay', () => handleCanPlay ())

        setSavedUrl (url)

        return () => audio.removeEventListener ('canplay', () => handleCanPlay ())

    }, [handleCanPlay, ref, savedUrl, url])

}
