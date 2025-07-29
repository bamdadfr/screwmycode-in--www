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

  const timeRef = useRef(t0);
  const ratioRef = useRef(r0);
  const materialRef = useRef<ShaderMaterial | null>(null);

  // const s = useMemo(
  //   () =>
  //     isPlaying
  //       ? -0.005 * mapRange(speed, 0.5, 1.5, -1.6, 1.6, true)
  //       : Math.random() * 0.004,
  //   [speed, isPlaying],
  // );

  const material = useMemo(() => {
    if (materialRef.current) {
      materialRef.current.dispose();
    }

    materialRef.current = new ShaderMaterial({
      uniforms: {
        u_texture: {value: texture},
        u_ratio: {value: ratioRef.current},
        u_time: {value: timeRef.current},
      },
      vertexShader,
      fragmentShader,
    });

    return materialRef.current;
  }, [texture]);

  const reset = useCallback(() => {
    timeRef.current = t0;
    ratioRef.current = r0;
  }, [timeRef, ratioRef]);

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
    timeRef.current += x;
    ratioRef.current += x;

    material.uniforms.u_time.value = timeRef.current;
    material.uniforms.u_ratio.value = ratioRef.current;
  });

  // cleanup
  useEffect(() => {
    return () => {
      if (materialRef.current) {
        materialRef.current.dispose();
      }
    };
  }, [materialRef]);

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
