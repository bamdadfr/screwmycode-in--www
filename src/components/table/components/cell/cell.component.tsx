import {Icon, IconifyIcon} from '@iconify/react';
import Image from 'next/legacy/image';
import React, {ReactElement} from 'react';
import {CenteredDiv} from 'src/app/shared.styles';

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
      <CenteredDiv>{title}</CenteredDiv>
      <CenteredDiv>
        <Button
          type="button"
          aria-label="provider"
        >
          <Icon icon={icon} />
        </Button>
      </CenteredDiv>
    </Item>
  );
}
