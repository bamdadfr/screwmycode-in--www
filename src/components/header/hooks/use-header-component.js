import { useCallback } from 'react'
import { useStore } from '../../../hooks'

/**
 * @function
 * @name useHeaderComponent
 * @description main hook for header-component
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} object
 */
export function useHeaderComponent () {

    const repeat = useStore ((state) => state.repeat)
    const toggleRepeat = useStore (useCallback ((state) => state.toggleRepeat, [repeat]))

    return {
        repeat,
        toggleRepeat,
    }

}
