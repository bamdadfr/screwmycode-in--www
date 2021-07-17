import React from 'react'
import { AudioComponent, IndicatorsComponent, SliderComponent } from './components'
import { usePlayerModule } from './hooks'

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