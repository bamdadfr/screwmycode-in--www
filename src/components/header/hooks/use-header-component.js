import { useStore } from '../../../store'

/**
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} object
 */
export function useHeaderComponent () {

    const repeat = useStore ((state) => state.repeat)
    const toggleRepeat = useStore ((state) => state.toggleRepeat)

    return {
        repeat,
        toggleRepeat,
    }

}
