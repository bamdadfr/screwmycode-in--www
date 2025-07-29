import {Canvas} from '@react-three/fiber';
import {useEffect, useMemo, useRef, useState} from 'react';
import {ArtworkTexture} from 'src/components/artwork/artwork-texture';
import {TEXTURE_SCALE} from 'src/constants';
import {type Texture, TextureLoader, WebGLRenderer} from 'three';

interface Props {
  url: string;
  width: number;
  height: number;
  freeze0?: boolean;
  scale?: number;
}

export const Artwork = ({
  url,
  width,
  height,
  freeze0 = false,
  scale = TEXTURE_SCALE,
}: Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const rendererRef = useRef<WebGLRenderer | null>(null);
  const textureRef = useRef<Texture | null>(null);

  // loader
  const texture = useMemo(() => {
    const onLoad = (texture: Texture) => {
      textureRef.current = texture;
      setIsLoaded(true);
    };

    return new TextureLoader().load(url, onLoad);
  }, [url, textureRef]);

  // cleanup
  useEffect(() => {
    return () => {
      if (textureRef.current) {
        textureRef.current.dispose();
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [rendererRef]);

  return (
    <Canvas
      style={{
        opacity: isLoaded ? 1 : 0,
        top: isLoaded ? 0 : '1px',
      }}
      gl={{
        powerPreference: 'low-power',
      }}
      onCreated={({gl}) => {
        rendererRef.current = gl;
      }}
    >
      {texture && (
        <ArtworkTexture
          key={url}
          width={width * scale}
          height={height * scale}
          texture={texture}
          f0={freeze0}
        />
      )}
    </Canvas>
  );
};
