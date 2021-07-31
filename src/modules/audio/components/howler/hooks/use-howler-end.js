import { useCallback, useEffect, useState } from 'react'
import { useStore } from '../../../../../store'

/**
 * @returns {Function} handleEnd (useCallback function)
 */
export function useHowlerEnd () {

    const [eventFired, setEventFired] = useState (false)
    const isRepeat = useStore ((state) => state.isRepeat)
    const isPlaying = useStore ((state) => state.isPlaying)
    const togglePlayPause = useStore ((state) => state.togglePlayPause)

    const handleEnd = useCallback (() => {

        setEventFired (true)

    }, [])

    useEffect (() => {

        if (!eventFired) return

        setEventFired (false)

        if (isRepeat) return

        if (!isPlaying) return

        togglePlayPause ()

    }, [eventFired, isRepeat, isPlaying, togglePlayPause])

    return handleEnd

}
