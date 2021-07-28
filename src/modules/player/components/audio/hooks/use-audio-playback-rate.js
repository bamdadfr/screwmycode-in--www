import React, { useEffect } from 'react'
import { useStore } from '../../../../../hooks'

/**
 * @param {React.Ref} ref audio ref
 */
export function useAudioPlaybackRate (ref) {

    const speed = useStore ((state) => state.speed)

    useEffect (() => {

        const audio = ref.current

        audio.playbackRate = speed

    }, [ref, speed])

}
