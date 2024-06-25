import React, {ReactElement} from 'react';
import {Icon} from '@iconify/react';
import pause from '@iconify/icons-mdi/pause';
import play from '@iconify/icons-mdi/play';
import {useAtom} from 'jotai';
import {Button} from '../../player.module.styles';
import {
  isPlayingAtom,
  togglePlayingAtom,
} from '../../../../atoms/play-pause.atoms';

/**
 * Component to render the play/pause button
 */
export function PlayPauseButtonComponent(): ReactElement {
  const [isPlaying] = useAtom(isPlayingAtom);
  const [, togglePlaying] = useAtom(togglePlayingAtom);

  return (
    <Button
      onClick={togglePlaying}
      aria-label={(isPlaying ? 'pause' : 'play')}
    >
      {isPlaying
        ? <Icon icon={pause} />
        : <Icon icon={play} />
      }
    </Button>
  );
}
