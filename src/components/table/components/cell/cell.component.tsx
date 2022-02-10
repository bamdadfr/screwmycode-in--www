import React, {ReactElement, useMemo, useState} from 'react';
import {Icon, IconifyIcon} from '@iconify/react';
import Image from 'next/image';
import {isDesktop} from 'react-device-detect';
import {Button, Item} from '../../table.component.styles';
import {
  ScrewTextureComponent,
} from '../../../screw-texture/screw-texture.component';

export interface CellComponentProps {
  id: string;
  image: string;
  title: string;
  icon: string | IconifyIcon;
  onClick: (id: this['id']) => void;
}

/**
 * Table Cell Component
 */
export function CellComponent({
  id,
  image,
  title,
  icon,
  onClick,
}: CellComponentProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);
  const [width] = useState(88);

  const dryWet = useMemo(() => {
    if (isHovered) {
      return 100;
    }

    return 1;
  }, [isHovered]);

  return (
    <>
      <Item
        key={id}
        onClick={() => onClick(id)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {
          isDesktop
            ? (
              <ScrewTextureComponent
                image={image}
                dryWet={dryWet}
                width={width}
              />
            )
            : (
              <Image
                src={image}
                width={width}
                height={width}
                layout="fixed"
                objectFit="cover"
                priority
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
    </>
  );
}
