import bandcamp from '@iconify/icons-mdi/bandcamp';
import help from '@iconify/icons-mdi/help';
import soundcloud from '@iconify/icons-mdi/soundcloud';
import youtube from '@iconify/icons-mdi/youtube';
import {useMemo} from 'react';
import {type MediaDto} from 'src/dtos';

export function useCardIcon(item: MediaDto) {
  const icon = useMemo(() => {
    if (item.url.includes('youtube.com')) {
      return youtube;
    }

    if (item.url.includes('soundcloud.com')) {
      return soundcloud;
    }

    if (item.url.includes('bandcamp.com')) {
      return bandcamp;
    }

    return help;
  }, [item]);

  return {
    icon,
  };
}
