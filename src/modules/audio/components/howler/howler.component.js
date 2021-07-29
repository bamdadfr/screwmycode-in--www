import React, { useEffect, useRef } from 'react'
import ReactHowler from 'react-howler'
import { useStore } from '../../../../store'
import { getUrlWithProxy } from '../../../../utils'

/**
 * @param {object} props react props
 * @param {string} props.url audio url
 * @returns {React.ReactElement} react component
 */
export function HowlerComponent ({ url }) {

    const speed = useStore ((state) => state.speed)
    const howler = useRef (null)
    const setIsLoaded = useStore ((state) => state.setIsLoaded)
    const isPlaying = useStore ((state) => state.isPlaying)

    useEffect (() => howler.current.rate (speed), [speed])

    return (
        <>
            <ReactHowler
                ref={howler}
                src={getUrlWithProxy (url)}
                playing={isPlaying}
                rate={0.5}
                format={['mp3']}
                onLoad={() => setIsLoaded (true)}
            />
        </>
    )

}