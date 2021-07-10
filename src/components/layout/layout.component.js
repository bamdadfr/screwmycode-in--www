import React from 'react'
import PropTypes from 'prop-types'
import LayoutMetaComponent from '../layout-meta/layout-meta.component'
import LayoutMainComponent from '../layout-main/layout-main.component'
import LayoutHeaderComponent from '../layout-header/layout-header.component'
import ToastComponent from '../toast/toast.component'

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
export default function LayoutComponent ({ children }) {

    return (
        <>
            <LayoutMetaComponent/>
            <LayoutHeaderComponent/>
            <ToastComponent/>
            <LayoutMainComponent>
                {children}
            </LayoutMainComponent>
        </>
    )

}

LayoutComponent.propTypes = propTypes