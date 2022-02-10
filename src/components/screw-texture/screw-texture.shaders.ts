import {GLSL, Shaders} from 'gl-react';
import fragmentShader from './screw-texture.shaders.fragment.glsl';

export const shaders = Shaders.create({
  screw: {
    frag: GLSL`${fragmentShader}`,
  },
});
