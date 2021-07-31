import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 */
export function useHowlerDuration (howler) {

    const setDuration = useStore ((state) => state.setDuration)
    const duration = Math.floor (howler?.duration ()) || 0

    useEffect (() => {

        if (howler === null) return

        setDuration (duration)
    
    }, [duration, howler, setDuration])

}
