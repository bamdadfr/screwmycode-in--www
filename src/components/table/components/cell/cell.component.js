import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';
import Image from 'next/image';
import {useAtom} from 'jotai';
import {Button, Item} from '../../table.component.styles';
import {
  ScrewTextureComponent,
} from '../../../screw-texture/screw-texture.component';
import {
  isWebGlAvailableAtom,
} from '../../../../atoms/is-web-gl-available.atoms';
import {useRemoteAccessible} from '../../../../hooks/use-remote-accessible';

const propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * Table Cell Component
 *
 * @param {*} props - Component props
 * @param {string} props.id - Cell id
 * @param {string} props.image - Cell image
 * @param {string} props.title - Cell title
 * @param {object} props.icon - Cell icon
 * @param {Function} props.onClick - Click handler
 * @returns {React.ReactElement} - Table cell component
 */
export function CellComponent({
  id,
  image,
  title,
  icon,
  onClick,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [width] = useState(88);
  const [isWebGlAvailable] = useAtom(isWebGlAvailableAtom);
  const isAccessible = useRemoteAccessible(image);

  return (
    <>
      {
        isAccessible &&
        (
          <Item
            key={id}
            onClick={() => onClick(id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {
              isWebGlAvailable
                ? (
                  <ScrewTextureComponent
                    image={image}
                    dryWet={isHovered ? 100 : 1}
                    width={width}
                  />
                )
                : (
                  <Image
                    src={image}
                    width={width}
                    height={width}
                    priority="true"
                    layout="fixed"
                    objectFit="cover"
                  />
                )
            }
            <span>{title}</span>
            <span>
              <Button type="button" aria-label="youtube">
                <Icon icon={icon} />
              </Button>
            </span>
          </Item>
        )
      }
    </>
  );
}

CellComponent.propTypes = propTypes;
