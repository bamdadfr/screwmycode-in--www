import React from 'react'
import PropTypes from 'prop-types'
import { CoreLayout } from '..'
import { Container } from './player-layout-styles'

const propTypes = {
    'children': PropTypes.oneOfType ([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
    'metaDescription': PropTypes.string.isRequired,
    'metaImage': PropTypes.string.isRequired,
}

/**
 * @function
 * @name PlayerLayout
 * @param {object} props - react props
 * @param {React.ReactElement} props.children - react children
 * @param {string} props.metaDescription - audio title drilling to meta
 * @param {string} props.metaImage - audio image drilling to meta
 * @returns {React.ReactElement} react component
 */
export function PlayerLayout ({
    children,
    metaDescription,
    metaImage,
}) {

    return (
        <>
            <CoreLayout
                metaDescription={metaDescription}
                metaImage={metaImage}
            >
                <Container>
                    {children}
                </Container>
            </CoreLayout>
        </>
    )

}

PlayerLayout.propTypes = propTypes