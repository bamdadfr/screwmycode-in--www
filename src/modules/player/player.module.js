import React from 'react'
import PropTypes from 'prop-types'
import { isFirefox } from 'react-device-detect'
import { AudioComponent, IndicatorsComponent, SliderComponent, AudioHowlerComponent } from './components'
import { usePlayerModule } from './hooks'
import { AudioContainer } from './player.module.styles'
import { TrackComponent } from './components/track/track.component'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @typedef {string} Url
 * @param {{Url}} props react props
 * @returns {React.ReactElement} react component
 */
export function PlayerModule ({ url }) {

    usePlayerModule ()

    return (
        <>
            <TrackComponent/>
            <AudioContainer>
                {isFirefox
                    ? <AudioComponent url={url}/>
                    : <AudioHowlerComponent url={url}/>
                }
            </AudioContainer>
            <IndicatorsComponent/>
            <SliderComponent/>
        </>
    )

}

PlayerModule.propTypes = propTypes