import { useStore } from './use-store'

/**
 * @function
 * @name useVolume
 * @typedef {number} Volume
 * @typedef {Function} SetVolume
 * @returns {{Volume, SetVolume}} return value
 */
export function useVolume () {

    const { volume, setVolume } = useStore (
        (state) => ({
            'volume': state.volume,
            'setVolume': state.setVolume,
        }),
    )

    return {
        volume,
        setVolume,
    }

}
