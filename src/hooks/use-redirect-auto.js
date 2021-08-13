import { useEffect } from 'react'
import { useRouter } from 'next/router'

/**
 * @param {string} [target='/'] target url
 * @param {number} [delay=2000] delay before redirect
 */
export function useRedirectAuto (target = '/', delay = 2000) {

    const router = useRouter ()

    useEffect (() => {

        const t1 = setTimeout (async () => {

            await router.push (target)

        }, delay)

        return () => clearTimeout (t1)

    }, [delay, router, target])

}