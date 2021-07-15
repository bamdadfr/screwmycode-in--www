import React from 'react'
import PropTypes from 'prop-types'
import { MetaComponent, HeaderComponent, TitleComponent } from '../../domains/core'
import { Container } from './core-layout-styles'

const propTypes = {
    'children': PropTypes.oneOfType ([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
    'metaTitle': PropTypes.string,
    'metaUrl': PropTypes.string,
    'metaDescription': PropTypes.string,
    'metaImage': PropTypes.string,
}

export const defaultProps = {
    'metaTitle': 'ScrewMyCode.In',
    'metaUrl': 'https://www.screwmycode.in',
    'metaDescription': 'Variable speed pitch control for YouTube',
    'metaImage': 'https://upload.wikimedia.org/wikipedia/en/7/7d/DJ_Screw.jpeg',
}

/**
 * @function
 * @name CoreLayout
 * @param {object} props - react props
 * @param {React.ReactElement} props.children - react children
 * @param {string} props.metaTitle - meta title
 * @param {string} props.metaUrl - meta url
 * @param {string} props.metaDescription - meta description
 * @param {string} props.metaImage - meta image
 * @returns {React.ReactElement} react component
 */
export function CoreLayout ({
    children,
    metaTitle = defaultProps.metaTitle,
    metaUrl = defaultProps.metaUrl,
    metaDescription = defaultProps.metaDescription,
    metaImage = defaultProps.metaImage,
}) {

    return (
        <>
            <MetaComponent
                title={metaTitle}
                url={metaUrl}
                description={metaDescription}
                image={metaImage}
            />
            <HeaderComponent/>
            <Container>
                <TitleComponent/>
                {children}
            </Container>
        </>
    )

}

CoreLayout.propTypes = propTypes

CoreLayout.defaultProps = defaultProps