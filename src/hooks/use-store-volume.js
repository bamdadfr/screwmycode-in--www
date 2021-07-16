import { useCallback } from 'react'
import { useStore } from './use-store'

/**
 * @function
 * @name useStoreVolume
 * @typedef {number} Volume
 * @typedef {Function} SetVolume
 * @returns {{Volume, SetVolume}} getter + setter
 */
export function useStoreVolume () {

    const volume = useStore (
        useCallback ((state) => state.volume, []),
    )

    const setVolume = useStore (
        useCallback ((state) => state.setVolume, []),
    )

    return {
        volume,
        setVolume,
    }

}
