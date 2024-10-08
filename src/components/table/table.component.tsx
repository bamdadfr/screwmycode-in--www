import React, {type ReactElement} from 'react';

import {CellComponent} from './components/cell/cell.component';
import {TableContainer} from './table.component.styles';

export interface TableComponentItem {
  slug: string;
  image: string;
  title: string;
  onClick: (slug: this['slug']) => void;
  type: 'youtube' | 'soundcloud' | 'bandcamp';
}

interface Props {
  items: TableComponentItem[];
}

export function TableComponent({items}: Props): ReactElement {
  return (
    <TableContainer>
      {items.map((item) => (
        <CellComponent
          key={`${item.type}${item.slug}`}
          item={item}
        />
      ))}
    </TableContainer>
  );
}
