import React from 'react'
import PropTypes from 'prop-types'
import { AudioComponent, IndicatorsComponent, SliderComponent } from './components'
import { usePlayerModule } from './hooks'

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
            <AudioComponent url={url}/>
            <IndicatorsComponent/>
            <SliderComponent/>
        </>
    )

}

PlayerModule.propTypes = propTypes