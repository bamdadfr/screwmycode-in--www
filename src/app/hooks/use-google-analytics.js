import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

/**
 * @function
 * @name useGoogleAnalytics
 * @description binds google tag to router events
 * @returns {void}
 */
export function useGoogleAnalytics () {

    const router = useRouter ()

    useEffect (() => {

        const listener = (url) => {

            gtag.pageview (url)

        }

        router.events.on ('routeChangeComplete', listener)

        return () => {

            router.events.off ('routeChangeComplete', listener)

        }

    }, [router.events])

}
