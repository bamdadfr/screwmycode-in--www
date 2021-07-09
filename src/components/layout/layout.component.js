import React from 'react'
import PropTypes from 'prop-types'
import LayoutMetaComponent from '../layout-meta/layout-meta.component'
import LayoutMainComponent from '../layout-main/layout-main.component'
import LayoutMenuComponent from '../../layout/menu/layout-menu.component'
import ToastComponent from '../toast/toast.component'

const propTypes = {
    'children': PropTypes.element.isRequired,
}

/**
 * @function
 * @name LayoutComponent
 * @description layout: entry point
 * @param {React.ReactNode} children - children to render
 * @returns {React.ReactNode} - react component
 */
export default function LayoutComponent ({ children }) {

    return (
        <>
            <LayoutMetaComponent
                aria-label="test"
            />
            <LayoutMenuComponent/>
            <ToastComponent/>
            <LayoutMainComponent>
                {children}
            </LayoutMainComponent>
        </>
    )

}

LayoutComponent.propTypes = propTypes