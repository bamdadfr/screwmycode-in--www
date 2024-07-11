import bandcamp from '@iconify/icons-mdi/bandcamp';
import soundcloud from '@iconify/icons-mdi/soundcloud';
import youtube from '@iconify/icons-mdi/youtube';
import React, {ReactElement} from 'react';

import {
  CellComponent,
  CellComponentProps,
} from './components/cell/cell.component';
import {useTableComponent} from './hooks/use-table-component';
import {Container} from './table.component.styles';

export type TableComponentItem = CellComponentProps & {
  type: 'youtube' | 'soundcloud' | 'bandcamp';
};

interface TableComponentProps {
  table: TableComponentItem[];
}

export function TableComponent({table}: TableComponentProps): ReactElement {
  const {onClick} = useTableComponent();

  return (
    <Container>
      <div>
        {table.map((item) => {
          let icon = youtube;

          if (item.type === 'soundcloud') {
            icon = soundcloud;
          } else if (item.type === 'bandcamp') {
            icon = bandcamp;
          }

          return (
            <CellComponent
              key={item.id}
              image={item.image}
              icon={icon}
              id={item.id}
              title={item.title}
              onClick={() => onClick(item.type, item.id)}
            />
          );
        })}
      </div>
    </Container>
  );
}
