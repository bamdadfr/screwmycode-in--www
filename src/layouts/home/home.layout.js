import React from 'react'
import PropTypes from 'prop-types'
import { CoreLayout } from '..'
import { Container } from './home.styles'

const propTypes = {
    'children': PropTypes.element.isRequired,
}

/**
 * @function
 * @name HomeLayout
 * @param {object} props - react props
 * @param {React.ReactElement} props.children - react children
 * @returns {React.ReactElement} react component
 */
export function HomeLayout ({ children }) {

    return (
        <>
            <CoreLayout>
                <Container>
                    {children}
                </Container>
            </CoreLayout>
        </>
    )

}

HomeLayout.propTypes = propTypes