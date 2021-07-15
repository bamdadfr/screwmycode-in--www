import React from 'react'
import PropTypes from 'prop-types'
import { CoreLayout } from '..'

const propTypes = {
    'children': PropTypes.element.isRequired,
}

/**
 * @function
 * @name PlayerLayout
 * @param {object} props - react props
 * @param {React.ReactElement} props.children - react children
 * @returns {React.ReactElement} react component
 */
export function PlayerLayout ({ children }) {

    return (
        <>
            <CoreLayout>
                {children}
            </CoreLayout>
        </>
    )

}

PlayerLayout.propTypes = propTypes