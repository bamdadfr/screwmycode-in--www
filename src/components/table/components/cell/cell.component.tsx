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
 * @param root0
 * @param root0.id
 * @param root0.image
 * @param root0.title
 * @param root0.icon
 * @param root0.onClick
 */
export function CellComponent({
  id,
  image,
  title,
  icon,
  onClick,
}: CellComponentProps): ReactElement {
  return (
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
        <Button
          type="button"
          aria-label="provider"
        >
          <Icon icon={icon} />
        </Button>
      </span>
    </Item>
  );
}
