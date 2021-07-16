import React, { useEffect } from 'react'
import { useStoreSpeed } from '../../../../hooks'

/**
 * @param {React.Ref} ref - audio ref
 */
export function useAudioPlaybackRate (ref) {

    const { speed } = useStoreSpeed ()

    useEffect (() => {

        const audio = ref.current

        audio.playbackRate = speed

    }, [speed])

}
