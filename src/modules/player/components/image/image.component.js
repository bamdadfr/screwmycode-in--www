import React from 'react';
import {useAtom} from 'jotai';
import useMeasure from 'react-use-measure';
import {ResizeObserver} from '@juggle/resize-observer';
import {imageAtom} from '../../../../atoms/image.atoms';
import {Image} from './image.component.styles';
import {speedAtom} from '../../../../atoms/speed.atoms';

/**
 * @returns {React.ReactElement} react component
 */
export function ImageComponent() {
  const [artwork] = useAtom(imageAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <>
      <Image
        ref={ref}
        src={artwork}
        speed={speed}
        width={width}
        alt="artwork"
      />
    </>
  );
}
