import React from 'react'
import PropTypes from 'prop-types'
import { MetaComponent, HeaderComponent, TitleComponent } from '../../domains/core'
import { Container } from './core-layout-styles'

const propTypes = {
    'children': PropTypes.oneOfType ([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
    'meta': PropTypes.bool,
}

const defaultProps = {
    'meta': true,
}

/**
 * @function
 * @name CoreLayout
 * @param {object} props - react props
 * @param {React.ReactElement} props.children - react children
 * @param {boolean} props.meta - render meta?
 * @returns {React.ReactElement} react component
 */
export function CoreLayout ({
    children,
    meta = defaultProps.meta,
}) {

    return (
        <>
            {meta && <MetaComponent/>}
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