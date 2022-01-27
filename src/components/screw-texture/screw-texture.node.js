import React from 'react';
import PropTypes from 'prop-types';
import {Node} from 'gl-react';
import {mapRange} from '../../utils/map-range/map-range';
import {shaders} from './screw-texture.shaders.js';

const propTypes = {
  children: PropTypes.node.isRequired,
  time: PropTypes.number.isRequired,
  dryWet: PropTypes.number.isRequired,
};

/**
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Component children (image)
 * @param {number} props.time - Component time
 * @param {number} props.dryWet - Dry/wet ratio
 * @returns {React.ReactNode} - Texture Node
 */
export function ScrewTextureNode({
  children: image,
  time: propTime,
  dryWet: propDryWet,
}) {
  const time = propTime / 1000;

  const dryWet = 0.005 + mapRange(
    propDryWet,
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
          dryWet,
        }}
      />
    </>
  );
}

ScrewTextureNode.propTypes = propTypes;
