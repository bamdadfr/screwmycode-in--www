import { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { useAtom } from 'jotai'
import { speedAtom } from '../../../../../atoms/speed.atoms'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} speed audio playbackRate
 */
export function useHowlerSpeed (howler) {

    const [speed] = useAtom (speedAtom)

    useEffect (() => {

        if (!(howler instanceof ReactHowler)) return

        howler.rate (speed)
    
    }, [howler, speed])

    return speed

}