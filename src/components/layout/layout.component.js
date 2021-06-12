import React from 'react'
import PropTypes from 'prop-types'
import LayoutBackgroundComponent from '@/components/layout-background/layout-background.component'
import LayoutHeadComponent from '@/components/layout-head/layout-head.component'
import LayoutMainComponent from '@/components/layout-main/layout-main.component'

const propTypes = {
    'children': PropTypes.node.isRequired,
}

/**
 * @function
 * @name LayoutComponent
 * @description layout: entry point
 * @param {JSX.Element} children
 * @return {JSX.Element}
 */
export default function LayoutComponent ({ children }) {

    return (
        <>
            <LayoutBackgroundComponent/>
            <LayoutHeadComponent/>
            <LayoutMainComponent>
                {children}
            </LayoutMainComponent>
        </>
    )

}

LayoutComponent.propTypes = propTypes