import React, { useEffect } from 'react'

/**
 * @param {React.Ref} ref react ref
 * @param {number} delay refocus delay in ms
 */
export function useInputRefocus (ref, delay = 1) {

    useEffect (() => {

        // https://reactjs.org/blog/2020/08/10/react-v17-rc.html#potential-issues
        const instance = ref.current

        const listener = () => {

            setTimeout (() => {

                instance.focus ()

            }, delay)

        }

        listener ()

        instance.addEventListener ('blur', listener)

        return () => {

            instance.removeEventListener ('blur', listener)

        }

    }, [delay, ref])

}
