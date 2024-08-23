import {useFrame} from '@react-three/fiber';
import React, {useMemo} from 'react';
import fragmentShader from 'src/components/texture/texture.fragment.glsl';
import vertexShader from 'src/components/texture/texture.vertex.glsl';
import {ShaderMaterial, Texture} from 'three';

interface Props {
  size: number;
  texture: Texture;
  ratio: number;
}

export function PlaneComponent({size, texture, ratio}: Props) {
  const material = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          u_texture: {value: texture},
          u_ratio: {value: ratio},
          u_time: {value: 0},
        },
        vertexShader,
        fragmentShader,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  useFrame(({clock}) => {
    material.uniforms.u_time.value = clock.getElapsedTime();
    material.uniforms.u_ratio.value = ratio;
  });

  return (
    <mesh>
      <planeGeometry args={[size, size]} />
      <shaderMaterial
        attach="material"
        vertexShader={material.vertexShader}
        fragmentShader={material.fragmentShader}
        uniforms={material.uniforms}
      />
    </mesh>
  );
}
