import { useCallback } from 'react'
import { useStoreSpeed } from '../../../../hooks'

/**
 * @returns {{number, Function}} slider attributes
 */
export function useSliderComponent () {

    const { speed, setSpeed } = useStoreSpeed ()

    const onChange = useCallback ((e) => {

        setSpeed (e.target.value)
    
    }, [])

    return {
        'value': speed,
        onChange,
    }

}
