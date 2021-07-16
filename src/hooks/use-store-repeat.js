import { useCallback } from 'react'
import { useStore } from './use-store'

/**
 * @description repeat selector
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} getter + toggle
 */
export function useStoreRepeat () {

    const repeat = useStore (
        useCallback ((state) => state.repeat, []),
    )

    const toggleRepeat = useStore (
        useCallback ((state) => state.toggleRepeat, []),
    )

    return {
        repeat,
        toggleRepeat,
    }

}