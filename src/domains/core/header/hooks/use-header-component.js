import { useStoreRepeat } from '../../../../hooks'

/**
 * @typedef {boolean} Repeat
 * @typedef {Function} ToggleRepeat
 * @returns {{Repeat, ToggleRepeat}} object
 */
export function useHeaderComponent () {

    const { repeat, toggleRepeat } = useStoreRepeat ()

    return {
        repeat,
        toggleRepeat,
    }

}
