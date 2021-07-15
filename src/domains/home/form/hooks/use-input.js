import { useCallback, useRef, useState } from 'react'

/**
 * @function
 * @name useInput
 * @returns {object} return value
 */
export function useInput () {

    const [value, setValue] = useState ('')
    const ref = useRef (null)

    const onChange = useCallback ((e) => {

        setValue (e.target.value)

    }, [])

    return {
        ref,
        value,
        setValue,
        onChange,
    }

}
