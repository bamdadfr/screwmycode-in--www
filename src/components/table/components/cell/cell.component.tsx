import React, {ReactElement} from 'react';
import {Icon, IconifyIcon} from '@iconify/react';
import Image from 'next/image';
import {Button, Item} from '../../table.component.styles';

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
  return (
    <>
      <Item
        key={id}
        onClick={() => onClick(id)}
      >
        <Image
          alt={title}
          src={image}
          width={88}
          height={88}
          layout="fixed"
          objectFit="cover"
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
