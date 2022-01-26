import {GLSL, Node, Shaders} from 'gl-react';
import React from 'react';
import {mapRange} from '../../../../utils/map-range/map-range';
import imageFragmentShader from './image.fragment.glsl';

const shaders = Shaders.create({screw: {frag: GLSL`${imageFragmentShader}`}});

/**
 * @param {*} props - Component props
 * @param {string} props.children - Component children corresponding to the image
 * @param {number} props.time - Current time
 * @param {number} props.speed - Speed of the animation
 * @returns {React.ReactElement} - React component
 */
export function ImageShader({
  children: image,
  time: propTime,
  speed,
}) {
  const time = propTime / 1000;

  const screw = 0.005 + mapRange(
    speed,
    0.5,
    1.5,
    1.6,
    -1.6,
    true,
  );

  return (
    <>
      <Node
        shader={shaders.screw}
        uniforms={{
          image,
          time,
          screw,
        }}
      />
    </>
  );
}
