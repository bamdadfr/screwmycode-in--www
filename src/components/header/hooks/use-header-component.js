import { useStore } from '../../../store'

/**
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} object
 */
export function useHeaderComponent () {

    const isRepeat = useStore ((state) => state.isRepeat)
    const toggleRepeat = useStore ((state) => state.toggleRepeat)

    return {
        isRepeat,
        toggleRepeat,
    }

}
