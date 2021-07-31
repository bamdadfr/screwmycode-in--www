import React from 'react'
import ReactHowler from 'react-howler'
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