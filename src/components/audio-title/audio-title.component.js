import React from 'react'
import { Title } from './audio-title.component.styles'

/**
 * @param {object} props react props
 * @param {string} props.title audio title
 * @returns {React.ReactElement} react component
 */
export function AudioTitleComponent ({ title }) {

    return (
        <>
            <Title>
                {title}
            </Title>
        </>
    )

}