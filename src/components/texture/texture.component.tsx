import {Canvas, useFrame} from '@react-three/fiber';
import React, {ReactElement, useMemo} from 'react';
import {mapRange} from 'src/utils/map-range/map-range';
import {ShaderMaterial, TextureLoader} from 'three';

import fragmentShader from './texture.shaders.fragment.glsl';

interface Props {
  image: string;
  dryWet: number;
}

const vertexShader = `
  varying vec2 v_uv;

  void main() {
    v_uv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

function Plane({size, texture, ratio}) {
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

export function TextureComponent({image, dryWet}: Props): ReactElement {
  const texture = new TextureLoader().load(image);
  const size = useMemo(() => 8 * (window.innerWidth / window.innerHeight), []);
  const ratio = 0.005 + mapRange(dryWet, 0.5, 1.5, 1.6, -1.6, true);

  return (
    <Canvas>
      <Plane
        size={size}
        texture={texture}
        ratio={ratio}
      />
    </Canvas>
  );
}
