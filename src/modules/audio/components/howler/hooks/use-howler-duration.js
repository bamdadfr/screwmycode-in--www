import { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { useStore } from '../../../../../store/use-store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} duration in seconds
 */
export function useHowlerDuration (howler) {

    const setDuration = useStore ((state) => state.setDuration)
    const duration = Math.floor (howler?.duration ()) || 0

    useEffect (() => {

        if (!(howler instanceof ReactHowler)) return

        setDuration (duration)
    
    }, [duration, howler, setDuration])

    return duration

}
