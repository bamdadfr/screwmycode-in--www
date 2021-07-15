import { useCallback } from 'react'
import { useStore } from './use-store'

/**
 * @function
 * @name useRepeat
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} return value
 */
export function useRepeat () {

    const repeat = useStore ((state) => state.repeat)
    const toggleRepeat = useStore (useCallback ((state) => state.toggleRepeat, [repeat]))

    return {
        repeat,
        toggleRepeat,
    }

}