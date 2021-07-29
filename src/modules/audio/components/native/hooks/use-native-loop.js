import React, { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {React.Ref} ref audio ref
 */
export function useNativeLoop (ref) {

    const isRepeat = useStore ((state) => state.isRepeat)

    useEffect (() => {

        const audio = ref.current

        audio.loop = isRepeat
    
    }, [ref, isRepeat])

}
