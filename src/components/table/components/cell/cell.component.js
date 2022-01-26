import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from '@iconify/react';
import {Button, Item} from '../../table.component.styles';
import {
  ScrewTextureComponent,
} from '../../../screw-texture/screw-texture.component';

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
 * @returns {React.Component} Table Cell Component
 */
export function CellComponent({
  id,
  image,
  title,
  icon,
  onClick,
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <>
      <Item
        key={id}
        onClick={() => onClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <img src={image} alt="artwork" /> */}
        <ScrewTextureComponent
          image={image}
          dryWet={isHovered ? 100 : 1}
          width={88}
        />
        <span>{title}</span>
        <span>
          <Button type="button" aria-label="youtube">
            <Icon icon={icon} />
          </Button>
        </span>
      </Item>
    </>
  );
}

CellComponent.propTypes = propTypes;
