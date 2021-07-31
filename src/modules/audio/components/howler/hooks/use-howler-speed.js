import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} speed audio playbackRate
 */
export function useHowlerSpeed (howler) {

    const speed = useStore ((state) => state.speed)

    useEffect (() => {

        if (howler === null) return

        howler.rate (speed)
    
    }, [howler, speed])

    return speed

}
