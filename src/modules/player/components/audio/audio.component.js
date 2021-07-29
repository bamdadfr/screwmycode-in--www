import React from 'react'
import PropTypes from 'prop-types'
import { useAudioComponent } from './hooks'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @param {object} props props
 * @param {string} props.url url
 * @returns {React.ReactElement} react component
 */
export function AudioComponent ({ url }) {

    const { ref, autoplay } = useAudioComponent (url)

    return (
        <>
            <audio
                ref={ref}
                aria-label="player"
                controls
                autoPlay={autoplay}
            >
                <track kind="captions"/>
            </audio>
        </>
    )

}

AudioComponent.propTypes = propTypes