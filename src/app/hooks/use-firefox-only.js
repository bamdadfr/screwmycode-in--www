import { useEffect } from 'react'
import { isFirefox } from 'react-device-detect'
import { useRouter } from 'next/router'

/**
 * @description redirect if browser is not firefox
 * @param {string} [target='/firefox'] target url
 */
export function useFirefoxOnly (target = '/firefox') {

    const router = useRouter ()

    useEffect (() => {

        if (router.asPath === target) return

        (async () => {

            if (!isFirefox) await router.push (target)

        }) ()

    }, [router, target])

}
