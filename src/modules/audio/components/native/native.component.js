import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useNativeComponent } from './hooks'
import { useStore } from '../../../../store'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @param {object} props props
 * @param {string} props.url url
 * @returns {React.ReactElement} react component
 */
export function NativeComponent ({ url }) {

    const { ref, autoplay } = useNativeComponent (url)
    const setIsLoaded = useStore ((state) => state.setIsLoaded)

    useEffect (() => {

        setTimeout (() => {

            setIsLoaded (true)
        
        }, 5)

    }, [setIsLoaded])

    return (
        <>
            <audio
                ref={ref}
                aria-label="player"
                autoPlay={autoplay}
                controls
            >
                <track kind="captions"/>
            </audio>
        </>
    )

}

NativeComponent.propTypes = propTypes