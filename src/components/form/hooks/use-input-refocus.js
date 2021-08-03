import React, { useEffect } from 'react'

/**
 * @description this will not work when cursor outside of viewport
 * @see https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
 * @param {React.Ref} inputRef html element to handle
 */
export function useInputRefocus (inputRef) {

    useEffect (() => {

        if (inputRef.current === null) return

        const input = inputRef.current

        if (!(input instanceof HTMLInputElement)) return

        const listener = () => requestAnimationFrame (() => input.focus ())

        listener ()

        input.addEventListener ('blur', listener)

        return () => input.removeEventListener ('blur', listener)
    
    }, [inputRef])

}
