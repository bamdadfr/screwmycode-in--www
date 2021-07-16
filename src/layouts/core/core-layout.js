import React from 'react'
import PropTypes from 'prop-types'
import { MetaComponent, HeaderComponent, TitleComponent } from '../../domains/core'
import { Container } from './core-layout-styles'

const propTypes = {
    'children': PropTypes.oneOfType ([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
    'customMeta': PropTypes.bool,
}

const defaultProps = {
    'customMeta': false,
}

/**
 * @param {object} props react props
 * @param {React.ReactElement} props.children react children
 * @param {boolean} [props.customMeta] have your own meta?
 * @returns {React.ReactElement} react component
 */
export function CoreLayout ({
    children,
    customMeta = defaultProps.customMeta,
}) {

    return (
        <>
            {!customMeta && <MetaComponent/>}
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