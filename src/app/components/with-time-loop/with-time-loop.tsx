/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import raf from 'raf';
import hoistNonReactStatics from 'hoist-non-react-statics';

/**
 * @see https://github.com/gre/gl-react/blob/master/packages/cookbook/src/HOC/timeLoop.js
 */
export function withTimeLoop(C: JSXElementConstructor<any>, {refreshRate = 60} = {}): JSXElementConstructor<any> {
  function TimeLoop({...props}): ReactElement {
    const [time, setTime] = useState(0);
    const [tick, setTick] = useState(0);
    const savedRequestAnimationFrame = useRef(null);

    useEffect(() => {
      let startTime;
      let lastTime;

      const interval = 1000 / refreshRate;

      lastTime = -interval;

      const loop = (currentTime) => {
        savedRequestAnimationFrame.current = raf(loop);

        if (!startTime) {
          startTime = currentTime;
        }

        if (currentTime - lastTime > interval) {
          setTime(currentTime - startTime);
          setTick((t) => t + 1);
          lastTime = currentTime;
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
        <C {...props} time={time} tick={tick} />
      </>
    );
  }

  hoistNonReactStatics(TimeLoop, C);

  return TimeLoop;
}
