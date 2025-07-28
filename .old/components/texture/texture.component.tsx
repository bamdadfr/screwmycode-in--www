import {Canvas} from '@react-three/fiber';
import React from 'react';
import {ArtworkTexture} from 'src/components/artwork/artwork-texture';
import {TextureLoader} from 'three';

interface Props {
  image: string;
  dryWet: number;
  width: number;
}

export function TextureComponent({image, width}: Props) {
  const texture = new TextureLoader().load(image);

  return (
    <Canvas>
      <ArtworkTexture
        width={width}
        height={width}
        texture={texture}
      />
    </Canvas>
  );
}
