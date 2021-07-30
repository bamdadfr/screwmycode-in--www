import { useEffect, useRef } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {HTMLAudioElement} audio audio element
 */
export function useNativePlaying (audio) {

    const requestRef = useRef ()
    const setSeek = useStore ((state) => state.setSeek)

    const animate = () => {

        if (audio === null) return

        setSeek (audio.currentTime)

        requestRef.current = requestAnimationFrame (animate)
    
    }

    // todo improve performance
    useEffect (() => {

        if (audio === null) return

        if (audio.paused) cancelAnimationFrame (requestRef.current)

        requestRef.current = requestAnimationFrame (animate)

        return () => cancelAnimationFrame (requestRef.current)

    },
    // eslint-disable-next-line
        [audio]
    )

}
