import React from 'react'
import PropTypes from 'prop-types'
import LayoutMetaComponent from '@/components/layout-meta/layout-meta.component'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'
import LayoutHeaderComponent from '@/components/layout-header/layout-header.component'
import ToastComponent from '@/components/toast/toast.component'

const propTypes = {
    'children': PropTypes.node.isRequired,
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