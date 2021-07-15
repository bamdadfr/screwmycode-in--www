import React from 'react'
import PropTypes from 'prop-types'
import { MetaComponent } from '../meta/meta.component'
import { ContentComponent } from '../content/content.component'
import { HeaderComponent } from '../header/header.component'

const propTypes = {
    'children': PropTypes.element.isRequired,
}

/**
 * @function
 * @name LayoutComponent
 * @description layout: entry point
 * @param {React.ReactElement} children - children to render
 * @returns {React.ReactElement} - react component
 */
export function LayoutComponent ({ children }) {

    return (
        <>
            <MetaComponent/>
            <HeaderComponent/>
            <ContentComponent>
                {children}
            </ContentComponent>
        </>
    )

}

LayoutComponent.propTypes = propTypes