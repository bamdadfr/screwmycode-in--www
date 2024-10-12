import React, {type ReactElement} from 'react';
import {type TopDto} from 'src/utils/dtos';

import {CellComponent} from './components/cell/cell.component';
import {TableContainer} from './table.component.styles';

interface Props {
  items: TopDto[];
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
