import { useEffect, useState } from 'react'
import { useInterval } from '../../../hooks/use-interval'

/**
 * @description cache a value and refresh it on a given interval
 *      useful for slowing down renders
 * @param {*} value value to cache
 * @param {number} delay used to run the interval
 * @returns {number} cached value
 */
export function useCache (value, delay) {

    const [cachedValue, setCachedValue] = useState (value)
    const [isRunning, setIsRunning] = useState (false)

    // detect when interval needs to run
    useEffect (() => {

        if (value === cachedValue) return setIsRunning (false)

        setIsRunning (true)

    }, [value, cachedValue])

    // setup interval
    useInterval (() => {

        if (value === cachedValue) return

        setCachedValue (value)
    
    }, isRunning ? delay : null)

    return cachedValue

}
