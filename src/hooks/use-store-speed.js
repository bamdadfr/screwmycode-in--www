import { useStore } from './use-store'

/**
 * @function
 * @name useStoreSpeed
 * @typedef {number} Speed
 * @typedef {Function} SetSpeed
 * @returns {{Speed, SetSpeed}} getter + setter
 */
export function useStoreSpeed () {

    const { speed, setSpeed } = useStore (
        (state) => ({
            'speed': state.speed,
            'setSpeed': state.setSpeed,
        }),
    )

    return {
        speed,
        setSpeed,
    }

}
