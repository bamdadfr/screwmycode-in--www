import { useCallback } from 'react'
import { useStore } from './use-store'

/**
 * @function
 * @name useStoreSpeed
 * @typedef {number} Speed
 * @typedef {Function} SetSpeed
 * @returns {{Speed, SetSpeed}} getter + setter
 */
export function useStoreSpeed () {

    const speed = useStore (
        useCallback ((state) => state.speed, []),
    )

    const setSpeed = useStore (
        useCallback ((state) => state.setSpeed, []),
    )

    return {
        speed,
        setSpeed,
    }

}
