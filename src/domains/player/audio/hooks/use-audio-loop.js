import React, { useEffect } from 'react'
import { useStoreRepeat } from '../../../../hooks'

/**
 * @param {React.Ref} ref - audio ref
 */
export function useAudioLoop (ref) {

    const { repeat } = useStoreRepeat ()

    useEffect (() => {

        const audio = ref.current

        audio.loop = repeat
    
    }, [repeat])

}
