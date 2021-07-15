import { useStoreRepeat } from '../../../../hooks'

/**
 * @function
 * @name useHeaderComponent
 * @description main hook for header-component
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
