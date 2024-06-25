import React, {ReactElement} from 'react';
import youtube from '@iconify/icons-mdi/youtube';
import soundcloud from '@iconify/icons-mdi/soundcloud';
import {useTableComponent} from './hooks/use-table-component';
import {Container} from './table.component.styles';
import {
  CellComponent,
  CellComponentProps,
} from './components/cell/cell.component';

export type TableComponentItem = CellComponentProps & {
  type: 'youtube' | 'soundcloud';
};

interface TableComponentProps {
  table: TableComponentItem[];
}

export function TableComponent({table}: TableComponentProps): ReactElement {
  const {onClick} = useTableComponent();

  return (
    <Container>
      {table.map((item) => (
        <CellComponent
          key={item.id}
          image={item.image}
          icon={item.type === 'youtube' ? youtube : soundcloud}
          id={item.id}
          title={item.title}
          onClick={() => onClick(item.type, item.id)}
        />
      ))}
    </Container>
  );
}
