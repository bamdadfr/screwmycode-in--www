import React, { useEffect } from 'react'

/**
 * @param {React.Ref} ref audio ref
 */
export function useNativeNoWarp (ref) {

    useEffect (() => {

        const audio = ref.current

        audio.mozPreservesPitch = false
    
    }, [ref])

}
