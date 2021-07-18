import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './audio-title.component.styles'

const propTypes = {
    'title': PropTypes.string.isRequired,
}

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

AudioTitleComponent.propTypes = propTypes