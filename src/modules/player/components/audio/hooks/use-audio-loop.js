import React, { useEffect } from 'react'
import { useStore } from '../../../../../hooks'

/**
 * @param {React.Ref} ref audio ref
 */
export function useAudioLoop (ref) {

    const repeat = useStore ((state) => state.repeat)

    useEffect (() => {

        const audio = ref.current

        audio.loop = repeat
    
    }, [ref, repeat])

}
