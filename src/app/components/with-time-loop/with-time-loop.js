import React, {useEffect, useRef, useState} from 'react';
import raf from 'raf';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * @param {React.ComponentType<*>} Component - React component to wrap
 * @param {*} options - Options
 * @param {number} [options.refreshRate] - Refresh rate in hertz
 * @returns {React.ReactNode} - Wrapped component
 */
export function withTimeLoop(Component, {refreshRate = 60} = {}) {
  /**
   * @param {*} props - Component props
   * @returns {React.ReactElement} - React element
   */
  function TimeLoop({...props}) {
    const [time, setTime] = useState(0);
    const [tick, setTick] = useState(0);
    const savedRequestAnimationFrame = useRef(null);

    useEffect(() => {
      let startTime;
      let lastTime;

      const interval = 1000 / refreshRate;

      lastTime = -interval;

      const loop = (t) => {
        savedRequestAnimationFrame.current = raf(loop);

        if (!startTime) {
          startTime = t;
        }

        if (t - lastTime > interval) {
          setTime(t - startTime);
          setTick((tick) => tick + 1);
          lastTime = t;
        }
      };

      savedRequestAnimationFrame.current = raf(loop);

      return () => {
        raf.cancel(savedRequestAnimationFrame.current);
      };
    }, []);

    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} time={time} tick={tick} />
      </>
    );
  }

  hoistNonReactStatics(TimeLoop, Component);

  return TimeLoop;
}
