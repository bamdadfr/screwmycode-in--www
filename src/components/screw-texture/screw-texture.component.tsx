import {Surface} from 'gl-react-dom/lib';
import GLImage from 'gl-react-image';
import React, {ReactElement} from 'react';
import {withTimeLoop} from 'src/app/components/with-time-loop/with-time-loop';

import {ScrewTextureNode} from './screw-texture.node';

const AnimatedScrewTextureNode = withTimeLoop(ScrewTextureNode);

interface ScrewTextureComponentProps {
  /** Image URL or blob */
  image: string;
  /** Dry wet ratio */
  dryWet: number;
  /** Width of the texture */
  width: number;
}

export function ScrewTextureComponent({
  image,
  dryWet,
  width,
}: ScrewTextureComponentProps): ReactElement {
  return (
    <Surface
      width={width}
      height={width}
    >
      <AnimatedScrewTextureNode dryWet={dryWet}>
        <GLImage
          source={image}
          resizeMode="cover"
        />
      </AnimatedScrewTextureNode>
    </Surface>
  );
}
