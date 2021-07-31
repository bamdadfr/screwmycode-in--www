import React from 'react'
import PropTypes from 'prop-types'
import { H2 } from './player-title.component.styles'

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
            <H2>
                {title}
            </H2>
        </>
    )

}

PlayerTitleComponent.propTypes = propTypes