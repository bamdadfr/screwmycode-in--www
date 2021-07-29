import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './player-title.component.styles'

const propTypes = {
    'title': PropTypes.string.isRequired,
}

/**
 * @param {object} props react props
 * @param {string} props.title audio title
 * @returns {React.ReactElement} react component
 */
export function PlayerTitleComponent ({ title }) {

    return (
        <>
            <Title>
                {title}
            </Title>
        </>
    )

}

PlayerTitleComponent.propTypes = propTypes