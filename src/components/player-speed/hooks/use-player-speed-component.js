import { useCallback } from 'react'
import { useAtom } from 'jotai'
import { setSpeedAtom, speedAtom } from '../../../atoms/speed.atoms'

/**
 * @returns {{number, Function}} slider attributes
 */
export function usePlayerSpeedComponent () {

    const [speed] = useAtom (speedAtom)
    const [, setSpeed] = useAtom (setSpeedAtom)

    const onChange = useCallback ((e) => {

        setSpeed (e.target.value)
    
    }, [setSpeed])

    return {
        'value': speed,
        onChange,
    }

}