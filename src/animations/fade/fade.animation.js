import React from 'react';
import PropTypes from 'prop-types';
import {animated, useSpring} from '@react-spring/web';

const propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

const defaultProps = {
  delay: 0,
};

/**
 * Component that animates the opacity of a child component
 *
 * @param {object} props - Component props
 * @param {React.ReactNode} props.children - Child component
 * @param {number} [props.delay=defaultProps.delay] - Delay before animation
 * @returns {React.ReactElement} - Rendered component
 */
export function FadeAnimation({
  children,
  delay,
}) {
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay,
  });

  return (
    <animated.div style={props}>
      {children}
    </animated.div>
  );
}

FadeAnimation.propTypes = propTypes;
FadeAnimation.defaultProps = defaultProps;
