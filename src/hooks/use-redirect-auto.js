import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * @param {string} [target='/'] target url
 * @param {number} [delay=2000] delay before redirect
 */
export function useRedirectAuto (target = '/', delay = 2000) {

    const router = useRouter ()

    useEffect (async () => {

        setTimeout (async () => {

            await router.push (target)

        }, delay)

    }, [])

}
