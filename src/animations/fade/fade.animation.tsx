import React, {ReactElement} from 'react';
import {animated, useSpring} from '@react-spring/web';

interface FadeAnimationProps {
  children: string | ReactElement;
  delay?: number;
}

/**
 * Component that animates the opacity of a child component
 * @param root0
 * @param root0.children
 * @param root0.delay
 */
export function FadeAnimation({
  children,
  delay = 0,
}: FadeAnimationProps): ReactElement {
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
