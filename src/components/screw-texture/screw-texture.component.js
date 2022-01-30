import React from 'react';
import PropTypes from 'prop-types';
import {Surface} from 'gl-react-dom/lib';
import GLImage from 'gl-react-image';
import {withTimeLoop} from '../../app/components/with-time-loop/with-time-loop';
import {ScrewTextureNode} from './screw-texture.node';

const AnimatedScrewTextureNode = withTimeLoop(ScrewTextureNode);

const propTypes = {
  image: PropTypes.string.isRequired,
  dryWet: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

/**
 * @param {object} props - Component props.
 * @param {string} props.image - Image URL.
 * @param {number} props.dryWet - Dry/wet ratio.
 * @param {number} props.width - Width of the texture.
 * @returns {React.ReactElement} react component
 */
export function ScrewTextureComponent({image, dryWet, width}) {
  return (
    <>
      <Surface width={width} height={width}>
        <AnimatedScrewTextureNode dryWet={dryWet}>
          <GLImage source={image} resizeMode="cover" />
        </AnimatedScrewTextureNode>
      </Surface>
    </>
  );
}

ScrewTextureComponent.propTypes = propTypes;
