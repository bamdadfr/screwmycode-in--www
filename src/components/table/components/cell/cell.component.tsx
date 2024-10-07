import {Icon} from '@iconify/react';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React, {type ReactElement} from 'react';
import {CenteredDiv} from 'src/app/shared.styles';
import {useCellComponent} from 'src/components/table/components/cell/use-cell-component';
import {type TableComponentItem} from 'src/components/table/table.component';

import {Button, CellContainer} from '../../table.component.styles';

export interface CellComponentProps {
  item: TableComponentItem;
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
