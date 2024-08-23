import {Canvas} from '@react-three/fiber';
import React, {ReactElement, useMemo} from 'react';
import {p} from 'src/app/shared.styles';
import {PlaneComponent} from 'src/components/texture/plane.component';
import {mapRange} from 'src/utils/map-range/map-range';
import {TextureLoader} from 'three';

interface Props {
  image: string;
  dryWet: number;
  width: number;
}

export function TextureComponent({image, dryWet, width}: Props): ReactElement {
  const texture = new TextureLoader().load(image);
  const size = useMemo(() => width / 100 - (p / 100) * 2, [width]);
  const ratio = 0.005 + mapRange(dryWet, 0.5, 1.5, 1.6, -1.6, true);

  return (
    <Canvas>
      <PlaneComponent
        size={size}
        texture={texture}
        ratio={ratio}
      />
    </Canvas>
  );
}
