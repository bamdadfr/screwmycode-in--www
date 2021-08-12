import React from 'react'
import { useAtom } from 'jotai'
import { H2 } from './title.component.styles'
import { audioTitleAtom } from '../../../../atoms/audio-title.atoms'

/**
 * @returns {React.ReactElement} react component
 */
export function TitleComponent () {

    const [audioTitle] = useAtom (audioTitleAtom)

    return (
        <>
            <H2>
                {audioTitle}
            </H2>
        </>
    )

}