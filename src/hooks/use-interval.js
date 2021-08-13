import { useEffect, useRef } from 'react'

/**
 * @description basically setInterval as a hook
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 * @param {Function|null} callback callback function
 * @param {number|null} delay delay to apply
 */
export function useInterval (callback, delay) {

    const savedCallback = useRef ()

    // Remember the latest callback.
    useEffect (() => {

        savedCallback.current = callback

    }, [callback])

    // Set up the interval.
    useEffect (() => {

        const tick = () => savedCallback.current ()

        if (delay !== null) {

            const id = setInterval (tick, delay)

            return () => clearInterval (id)

        }

    }, [delay])

}