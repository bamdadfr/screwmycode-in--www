import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { getUrlWithProxy } from '../../../../../utils/get-url-with-proxy/get-url-with-proxy'

/**
 * @param {object} params parameters
 * @param {string} params.url audio target url
 * @typedef {boolean} ProxyReady
 * @returns {{ProxyReady}} proxy state
 */
export function useHowlerProxy ({ url }) {

    const router = useRouter ()
    const [proxyReady, setProxyReady] = useState (false)
    const [proxyFailed, setProxyFailed] = useState (false)

    useEffect (() => {

        (async () => {

            try {

                // warmup
                await axios.head (getUrlWithProxy ('https://www.screwmycode.in/'))

                // target
                await axios.head (getUrlWithProxy (url))

                setProxyReady (true)

            } catch (error) {

                setProxyFailed (true)

            }

        }) ()

    }, [router, url, setProxyReady])

    useEffect (() => {

        if (!proxyFailed) return

        (async () => {

            await router.replace ('/')

        }) ()

    }, [proxyFailed, router])

    return {
        proxyReady,
    }

}