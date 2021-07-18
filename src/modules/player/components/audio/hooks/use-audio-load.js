import React, { useEffect } from 'react'
import { useAutoplay } from './use-autoplay'

/**
 * @param {React.Ref} ref audio ref
 * @param {string} url audio url
 * @returns {{boolean}} autoplay
 */
export function useAudioLoad (ref, url) {

    const { autoplay } = useAutoplay ()

    useEffect (() => {
        
        const audio = ref.current

        audio.src = url

        const listener = async () => {

            if (autoplay) await audio.play ()
        
        }

        // 'canplay' === loaded enough
        audio.addEventListener ('canplay', listener)

        return () => {

            audio.removeEventListener ('canplay', listener)
        
        }
    
    }, [url])

    return { autoplay }

}
