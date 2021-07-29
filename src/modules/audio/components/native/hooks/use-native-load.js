import React, { useEffect, useState } from 'react'
import { useAutoplay } from '../../../hooks'

/**
 * @param {React.Ref} ref audio ref
 * @param {string} url audio url
 * @returns {{boolean}} autoplay
 */
export function useNativeLoad (ref, url) {

    const { autoplay } = useAutoplay ()
    const [savedUrl, setSavedUrl] = useState ()

    useEffect (() => {

        if (url === savedUrl) return

        const audio = ref.current

        audio.src = url

        const listener = async () => {

            if (autoplay) await audio.play ()
        
        }

        // 'canplay' === loaded enough
        audio.addEventListener ('canplay', listener)

        setSavedUrl (url)

        return () => audio.removeEventListener ('canplay', listener)

    }, [autoplay, ref, savedUrl, url])

    return { autoplay }

}
