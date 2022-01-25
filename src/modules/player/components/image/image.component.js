import React from 'react';
import {useAtom} from 'jotai';
import useMeasure from 'react-use-measure';
import {ResizeObserver} from '@juggle/resize-observer';
import {Surface} from 'gl-react-dom/lib';
import {Shaders, Node, GLSL} from 'gl-react';
import GLImage from 'gl-react-image';
import {imageAtom} from '../../../../atoms/image.atoms';
import {speedAtom} from '../../../../atoms/speed.atoms';
import timeLoop from '../../../../utils/time-loop/time-loop';
import {Container} from './image.component.styles';
import {mapRange} from '../../../../utils/map-range/map-range';

/**
 * @returns {React.ReactElement} react component
 */
export function ImageComponent() {
  const [artwork] = useAtom(imageAtom);
  const [speed] = useAtom(speedAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  return (
    <Container ref={ref} speed={speed}>
      <Surface width={width} height={width}>
        <AnimatedImageShader speed={speed}>
          <GLImage
            source={artwork}
            resizeMode="cover"
          />
        </AnimatedImageShader>
      </Surface>
    </Container>
  );
}

const shaders = Shaders.create({
  screw: {
    frag: GLSL`
#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform sampler2D image;
uniform float screw;

varying vec2 uv;

#define NUM_OCTAVES 5

float rand(vec2 n)
{ 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p)
{
    vec2 ip = floor(p);
    vec2 u = fract(p);
    
    u = u * u * (3.0 - 2.0 * u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y
    );
    
    return res*res;
}

float fbm(vec2 x)
{
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    
    for (int i = 0; i < NUM_OCTAVES; ++i)
    {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    
    return v;
}

void main(void)
{
    float bound = 0.6;
    float intensity = 5.0;
    float speed = 0.5;
    vec2 newUv = uv;
        
    vec2 ratio = intensity * newUv + speed * time;
    float value = fbm(ratio);
    float boundedValue = mix(-bound, bound, value);

    vec2 surface = screw * vec2(boundedValue,boundedValue);
    newUv += refract(vec2(0.0, 0.0), surface, 1.0 / 1.333);

    gl_FragColor = texture2D(image, newUv);
}


`,
  },
});

const ImageShader = ({
  children: image,
  time: propTime,
  speed,
}) => {
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
};

const AnimatedImageShader = timeLoop(ImageShader);
