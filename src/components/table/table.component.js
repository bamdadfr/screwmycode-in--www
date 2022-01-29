import React from 'react';
import PropTypes from 'prop-types';
import youtube from '@iconify/icons-mdi/youtube';
import soundcloud from '@iconify/icons-mdi/soundcloud';
import {useTableComponent} from './hooks/use-table-component';
import {Container} from './table.component.styles';
import {CellComponent} from './components/cell/cell.component';

const propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.any,
  ).isRequired,
};

/**
 * @param {*} props - React props
 * @param {*[]} props.table - Table data
 * @returns {React.ReactElement} react component
 */
export function TableComponent({table}) {
  const {onClick} = useTableComponent();

  return (
    <>
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
    </>
  );
}

TableComponent.propTypes = propTypes;
