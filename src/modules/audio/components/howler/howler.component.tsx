import React, {ReactElement} from 'react';
import ReactHowler from 'react-howler';
import {useHowlerComponent} from './hooks/use-howler-component';

interface HowlerComponentProps {
  url: string;
}

/**
 * Component to play audio files using the Howler library
 */
export function HowlerComponent({url}: HowlerComponentProps): ReactElement {
  const {
    ref,
    setLoaded,
    isPlaying,
    isRepeating,
    speed,
    volume,
    handleEnd,
  } = useHowlerComponent();

  return (
    <>
      <ReactHowler
        ref={ref}
        src={url}
        playing={isPlaying}
        rate={speed}
        volume={volume}
        loop={isRepeating}
        format={['mp3']}
        onLoad={() => setLoaded(true)}
        onEnd={handleEnd}
      />
    </>
  );
}
