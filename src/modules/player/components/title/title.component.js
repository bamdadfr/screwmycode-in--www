import React from 'react'
import { useStore } from '../../../../store/use-store'
import { H2 } from './title.component.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function TitleComponent () {

    const audioTitle = useStore ((state) => state.audioTitle)

    return (
        <>
            <H2>
                {audioTitle}
            </H2>
        </>
    )

}