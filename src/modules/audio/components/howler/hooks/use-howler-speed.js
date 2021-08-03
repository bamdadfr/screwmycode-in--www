import { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { useStore } from '../../../../../store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} speed audio playbackRate
 */
export function useHowlerSpeed (howler) {

    const speed = useStore ((state) => state.speed)

    useEffect (() => {

        if (!(howler instanceof ReactHowler)) return

        howler.rate (speed)
    
    }, [howler, speed])

    return speed

}
