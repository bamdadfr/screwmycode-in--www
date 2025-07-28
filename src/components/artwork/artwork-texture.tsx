import {useFrame} from '@react-three/fiber';
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import fragmentShader from 'src/components/artwork/texture.fragment.glsl';
import vertexShader from 'src/components/artwork/texture.vertex.glsl';
import {useArtworkReset} from 'src/hooks/use-artwork-reset';
import {ShaderMaterial, Texture} from 'three';

interface Props {
  width: number;
  height: number;
  texture: Texture;
  f0?: boolean;
}

const t0 = 0;
const r0 = 0;

export const ArtworkTexture = ({width, height, texture, f0 = false}: Props) => {
  const {isReset, setIsReset} = useArtworkReset();

  const t = useRef(t0);
  const r = useRef(r0);

  // const s = useMemo(
  //   () =>
  //     isPlaying
  //       ? -0.005 * mapRange(speed, 0.5, 1.5, -1.6, 1.6, true)
  //       : Math.random() * 0.004,
  //   [speed, isPlaying],
  // );

  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          u_texture: {value: texture},
          u_ratio: {value: r.current},
          u_time: {value: t.current},
        },
        vertexShader,
        fragmentShader,
      }),
    [texture],
  );

  const reset = useCallback(() => {
    t.current = t0;
    r.current = r0;
  }, [t, r]);

  useEffect(() => {
    if (!isReset) {
      return;
    }

    reset();
    setIsReset(false);
  }, [isReset, setIsReset, reset]);

  useFrame(() => {
    if (f0) {
      return;
    }

    const x = Math.random() * 0.004;
    t.current += x;
    r.current += x;

    material.uniforms.u_time.value = t.current;
    material.uniforms.u_ratio.value = r.current;
  });

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <shaderMaterial
        attach="material"
        vertexShader={material.vertexShader}
        fragmentShader={material.fragmentShader}
        uniforms={material.uniforms}
      />
    </mesh>
  );
};
