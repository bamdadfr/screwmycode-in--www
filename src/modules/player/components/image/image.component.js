import React from 'react';
import {useAtom} from 'jotai';
import useMeasure from 'react-use-measure';
import {ResizeObserver} from '@juggle/resize-observer';
import {Surface} from 'gl-react-dom/lib';
import GLImage from 'gl-react-image';
import {imageAtom} from '../../../../atoms/image.atoms';
import {speedAtom} from '../../../../atoms/speed.atoms';
import {
  withTimeLoop,
} from '../../../../app/components/with-time-loop/with-time-loop';
import {Container} from './image.component.styles';
import {ImageShader} from './image.shader';

const AnimatedImageShader = withTimeLoop(ImageShader);

/**
 * @returns {React.ReactElement} react component
 */
export function ImageComponent() {
  const [artwork] = useAtom(imageAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container ref={ref} speed={speed}>
      <Surface width={width} height={width}>
        <AnimatedImageShader speed={speed}>
          <GLImage source={artwork} resizeMode="cover" />
        </AnimatedImageShader>
      </Surface>
    </Container>
  );
}
