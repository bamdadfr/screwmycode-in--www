import bandcamp from '@iconify/icons-mdi/bandcamp';
import help from '@iconify/icons-mdi/help';
import soundcloud from '@iconify/icons-mdi/soundcloud';
import youtube from '@iconify/icons-mdi/youtube';
import {useMemo} from 'react';
import {type CellComponentProps} from 'src/components/table/components/cell/cell.component';

export function useCellComponent({item}: CellComponentProps) {
  const icon = useMemo(() => {
    switch (item.type) {
      case 'youtube': {
        return youtube;
      }
      case 'bandcamp': {
        return bandcamp;
      }
      case 'soundcloud': {
        return soundcloud;
      }
      default: {
        return help;
      }
    }
  }, [item]);

  const href = useMemo(() => `/${item.type}/${item.slug}/1`, [item]);

  return {
    icon,
    href,
  };
}
