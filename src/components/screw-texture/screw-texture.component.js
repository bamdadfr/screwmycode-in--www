import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import ky from 'ky';
import {Surface} from 'gl-react-dom/lib';
import GLImage from 'gl-react-image';
import Image from 'next/image';
import {withTimeLoop} from '../../app/components/with-time-loop/with-time-loop';
import {ScrewTextureNode} from './screw-texture.node';
import {
  isWebGLAvailable,
} from '../../utils/is-web-gl-available/is-web-gl-available';

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
  const [isImageAvailable, setIsImageAvailable] = useState(false);

  // ky will throw on response other than 2xx
  // mainly used to prevent CORS issues
  useEffect(() => {
    (async () => {
      try {
        await ky.head(image);
        setIsImageAvailable(true);
      } catch {
        setIsImageAvailable(false);
      }
    })();
  }, [image]);

  if (
    typeof image === 'undefined'
    || !isImageAvailable
    || !isWebGLAvailable()
  ) {
    return <></>;
  }

  if (isWebGLAvailable()) {
    return (
      <>
        <Image
          src={image}
          width={width}
          height={width}
          priority="true"
          layout="fixed"
          objectFit="cover"
        />
      </>
    );
  }

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
