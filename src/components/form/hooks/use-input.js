import React, { useCallback, useRef, useState } from 'react'

/**
 * @param {string} [defaultValue=''] input default value
 * @typedef {React.Ref} Ref
 * @typedef {number} Value
 * @typedef {Function} OnChange
 * @typedef {Function} ResetValue
 * @returns {{Ref, Value, OnChange, ResetValue}} input attributes + reset
 */
export function useInput (defaultValue = '') {

    const [value, setValue] = useState (defaultValue)
    const ref = useRef (null)

    const onChange = useCallback ((e) => {

        setValue (e.target.value)

    }, [])

    const resetValue = useCallback (() => {

        setValue (defaultValue)
    
    }, [defaultValue])

    return {
        ref,
        value,
        onChange,
        resetValue,
    }

}