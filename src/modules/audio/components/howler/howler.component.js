import React, { useEffect, useState } from 'react'
import ReactHowler from 'react-howler'
import axios from 'axios'
import { useRouter } from 'next/router'
import { getUrlWithProxy } from '../../../../utils'
import { useHowlerComponent } from './hooks'

/**
 * @param {object} props react props
 * @param {string} props.url audio url
 * @returns {React.ReactElement} react component
 */
export function HowlerComponent ({ url }) {

    const {
        ref,
        setIsLoaded,
        isPlaying,
        isRepeat,
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

            const audio = await axios.head (getUrlWithProxy (url))

            if (audio.status !== 200) return await router.push ('/')

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
                loop={isRepeat}
                format={['mp3']}
                onLoad={() => setIsLoaded (true)}
                onEnd={handleEnd}
            />
        </>
    )

}