import React, {type ReactElement} from 'react';

import {CellComponent} from './components/cell/cell.component';
import {TableContainer} from './table.component.styles';

export interface TableComponentItem {
  id: string;
  image: string;
  title: string;
  onClick: (id: this['id']) => void;
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
          key={`${item.type}${item.id}`}
          item={item}
        />
      ))}
    </TableContainer>
  );
}
