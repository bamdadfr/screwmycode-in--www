import {Canvas} from '@react-three/fiber';
import {useEffect, useState} from 'react';
import {ArtworkTexture} from 'src/components/artwork/artwork-texture';
import {type Texture, TextureLoader} from 'three';

interface Props {
  url: string;
  width: number;
  height: number;
  freeze0?: boolean;
  scale?: number;
}

export const Artwork = ({url, width, height, freeze0 = false}: Props) => {
  const [texture, setTexture] = useState<Texture | null>(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const onLoad = () => setLoaded(true);
    const t = new TextureLoader().load(url, onLoad);
    setTexture(t);
  }, [url]);

  return (
    <Canvas
      style={{
        opacity: isLoaded ? 1 : 0,
        top: isLoaded ? 0 : '1px',
      }}
    >
      {texture && (
        <ArtworkTexture
          key={JSON.stringify(url)}
          width={width}
          height={height}
          texture={texture}
          f0={freeze0}
        />
      )}
    </Canvas>
  );
};
