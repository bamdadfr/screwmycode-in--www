import { useCallback } from 'react'
import { useStore } from './use-store'

/**
 * @function
 * @name useStoreRepeat
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} return value
 */
export function useStoreRepeat () {

    const repeat = useStore ((state) => state.repeat)
    const toggleRepeat = useStore (useCallback ((state) => state.toggleRepeat, [repeat]))

    return {
        repeat,
        toggleRepeat,
    }

}