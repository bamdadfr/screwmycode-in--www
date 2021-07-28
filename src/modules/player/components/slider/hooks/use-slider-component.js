import { useCallback } from 'react'
import { useStore } from '../../../../../hooks'

/**
 * @returns {{number, Function}} slider attributes
 */
export function useSliderComponent () {

    const speed = useStore ((state) => state.speed)
    const setSpeed = useStore ((state) => state.setSpeed)

    const onChange = useCallback ((e) => {

        setSpeed (e.target.value)
    
    }, [setSpeed])

    return {
        'value': speed,
        onChange,
    }

}
