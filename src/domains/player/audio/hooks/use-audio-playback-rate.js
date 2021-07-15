import React, { useEffect } from 'react'
import { useStoreSpeed } from '../../../../hooks'

/**
 * @function
 * @name useAudioPlaybackRate
 * @param {React.Ref} ref - audio ref
 */
export function useAudioPlaybackRate (ref) {

    const { speed } = useStoreSpeed ()

    useEffect (() => {

        const audio = ref.current

        audio.playbackRate = speed

    }, [speed])

}
