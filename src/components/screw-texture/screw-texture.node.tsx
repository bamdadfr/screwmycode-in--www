import {Node} from 'gl-react';
import React, {ReactElement} from 'react';
import {mapRange} from 'src/utils/map-range/map-range';

import {shaders} from './screw-texture.shaders';

interface ScrewTextureNodeProps {
  children: ReactElement;
  time: number;
  dryWet: string;
}

export function ScrewTextureNode({
  children: image,
  time: propTime,
  dryWet: propDryWet,
}: ScrewTextureNodeProps): ReactElement {
  const time = propTime / 1000;

  const dryWet =
    0.005 + mapRange(parseFloat(propDryWet), 0.5, 1.5, 1.6, -1.6, true);

  return (
    <Node
      shader={shaders.screw}
      uniforms={{
        image,
        time,
        dryWet,
      }}
    />
  );
}
