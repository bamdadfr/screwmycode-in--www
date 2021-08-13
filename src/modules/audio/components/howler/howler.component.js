import React from 'react'
import PropTypes from 'prop-types'
import ReactHowler from 'react-howler'
import { getUrlWithProxy } from '../../../../utils/get-url-with-proxy/get-url-with-proxy'
import { useHowlerComponent } from './hooks/use-howler-component'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

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
        proxyReady,
    } = useHowlerComponent ({ url })

    return (
        <>
            {proxyReady &&
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
            }
        </>
    )

}

HowlerComponent.propTypes = propTypes