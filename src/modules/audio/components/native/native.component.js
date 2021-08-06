import React from 'react'
import PropTypes from 'prop-types'
import { useNativeComponent } from './hooks/use-native-component'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @param {object} props props
 * @param {string} props.url url
 * @returns {React.ReactElement} react component
 */
export function NativeComponent ({ url }) {

    const { ref } = useNativeComponent (url)

    return (
        <>
            <audio
                ref={ref}
                aria-label="player"
                // controls
            >
                <track kind="captions"/>
            </audio>
        </>
    )

}

NativeComponent.propTypes = propTypes