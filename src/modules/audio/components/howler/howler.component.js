import React, { useEffect, useState } from 'react'
import ReactHowler from 'react-howler'
import axios from 'axios'
import { useRouter } from 'next/router'
import { getUrlWithProxy } from '../../../../utils/get-url-with-proxy/get-url-with-proxy'
import { useHowlerComponent } from './hooks/use-howler-component'

/**
 * @param {object} props react props
 * @param {string} props.url audio url
 * @returns {React.ReactElement} react component
 */
export function HowlerComponent ({ url }) {

    const {
        ref,
        setLoaded,
        isPlaying,
        isRepeating,
        speed,
        volume,
        handleEnd,
    } = useHowlerComponent ()

    // proxy warmup
    const router = useRouter ()
    const [proxyReady, setProxyReady] = useState (false)

    useEffect (() => {

        (async () => {

            const warmup = await axios.head (getUrlWithProxy ('https://www.screwmycode.in/'))

            if (warmup.status !== 200) return

            // todo
            // try {
            //
            //     await axios.head (getUrlWithProxy (url))
            //
            // } catch {
            //
            //     await router.push ('/')
            //
            // }

            setProxyReady (true)

        }) ()

    }, [router, url, setProxyReady])

    if (!proxyReady) return <></>

    return (
        <>
            <ReactHowler
                ref={ref}
                src={getUrlWithProxy (url)}
                playing={isPlaying}
                rate={speed}
                volume={volume}
                loop={isRepeating}
                format={['mp3']}
                onLoad={() => setLoaded (true)}
                onEnd={handleEnd}
            />
        </>
    )

}