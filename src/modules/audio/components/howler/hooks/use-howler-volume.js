import { useEffect } from 'react'
import ReactHowler from 'react-howler'
import { useStore } from '../../../../../store/use-store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} volume
 */
export function useHowlerVolume (howler) {
    
    const volume = useStore ((state) => state.volume)

    useEffect (() => {

        if (!(howler instanceof ReactHowler)) return

        howler.volume (volume)
    
    }, [howler, volume])

    return volume

}
