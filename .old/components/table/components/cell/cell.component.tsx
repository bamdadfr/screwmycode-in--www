import {Icon} from '@iconify/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React, {type ReactElement} from 'react';
import {CenteredDiv} from 'src/_old/app/shared.styles';
import {useCellComponent} from 'src/_old/components/table/components/cell/use-cell-component';
import {type TopDto} from 'src/utils/dtos';

import {Button, CellContainer} from '../../table.component.styles';

export interface CellComponentProps {
  item: TopDto;
}

export function CellComponent({item}: CellComponentProps): ReactElement {
  const {icon, href} = useCellComponent({item});

  return (
    <Link href={href}>
      <CellContainer>
        <Image
          alt={item.title}
          src={item.image}
          width={88}
          height={88}
          layout="fixed"
          objectFit="cover"
        />
        <CenteredDiv>{item.title}</CenteredDiv>
        <CenteredDiv>
          <Button
            type="button"
            aria-label="provider"
          >
            <Icon icon={icon} />
          </Button>
        </CenteredDiv>
      </CellContainer>
    </Link>
  );
}
