import React from 'react'
import PropTypes from 'prop-types'
import { Container } from './audio.component.styles'
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

    if (typeof url === 'undefined') return <>no URL</>

    const { ref, autoplay } = useAudioComponent (url)

    return (
        <>
            <Container>
                <audio
                    ref={ref}
                    aria-label="player"
                    controls
                    autoPlay={autoplay}
                >
                    <track kind="captions"/>
                </audio>
            </Container>
        </>
    )

}

AudioComponent.propTypes = propTypes