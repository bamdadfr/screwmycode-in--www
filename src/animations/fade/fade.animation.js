import React from 'react'
import PropTypes from 'prop-types'
import { animated, useSpring } from '@react-spring/web'

const propTypes = {
    'children': PropTypes.node.isRequired,
    'delay': PropTypes.number,
}

const defaultProps = {
    'delay': 0,
}

/**
 * @param {object} props react props
 * @param {React.ReactNode} props.children children
 * @param {number} [props.delay=defaultProps.delay] delay
 * @returns {React.ReactElement} react component
 */
export function FadeAnimation ({
    children,
    delay,
}) {

    const props = useSpring ({
        'from': {
            'opacity': 0,
        },
        'to': {
            'opacity': 1,
        },
        'delay': delay,
    })

    return (
        <animated.div style={props}>
            {children}
        </animated.div>
    )

}

FadeAnimation.propTypes = propTypes

FadeAnimation.defaultProps = defaultProps