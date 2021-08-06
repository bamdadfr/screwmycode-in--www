import React from 'react'
import PropTypes from 'prop-types'
import { isFirefox } from 'react-device-detect'
import { NativeComponent } from './components/native/native.component'
import { HowlerComponent } from './components/howler/howler.component'
import { useAudioModule } from './hooks/use-audio-module'
import { Invisible } from './audio.module.styles'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @typedef {string} Url
 * @param {{Url}} props react props
 * @returns {React.ReactElement} react component
 */
export function AudioModule ({ url }) {

    useAudioModule ()

    return (
        <>
            <Invisible>
                {isFirefox
                    ? <NativeComponent url={url}/>
                    : <HowlerComponent url={url}/>
                }
            </Invisible>
        </>
    )

}

AudioModule.propTypes = propTypes
