import { useEffect } from 'react'
import { useStore } from '../../../../../store'

/**
 * @param {object} howler react-howler instance (extends AudioContext)
 * @returns {number} volume
 */
export function useHowlerVolume (howler) {

    const volume = useStore ((state) => state.volume)

    useEffect (() => {

        if (howler === null) return

        howler.volume (volume)
    
    }, [howler, volume])

    return volume

}
