import React, { useEffect } from 'react'

/**
 * @param {React.Ref} ref - audio ref
 */
export function useAudioNoWarp (ref) {

    useEffect (() => {

        const audio = ref.current

        audio.mozPreservesPitch = false
    
    }, [])

}
