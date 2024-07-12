import pause from '@iconify/icons-mdi/pause';
import play from '@iconify/icons-mdi/play';
import {Icon} from '@iconify/react';
import {useAtom} from 'jotai';
import React, {ReactElement} from 'react';

import {isPlayingAtom, togglePlayingAtom} from '../../../../atoms/play-pause.atoms';
import {PlayerButton} from '../../player.module.styles';

/**
 * Component to render the play/pause button
 */
export function PlayPauseButtonComponent(): ReactElement {
  const [isPlaying] = useAtom(isPlayingAtom);
  const [, togglePlaying] = useAtom(togglePlayingAtom);

  return (
    <PlayerButton
      onClick={togglePlaying}
      aria-label={isPlaying ? 'pause' : 'play'}
    >
      {isPlaying ? <Icon icon={pause} /> : <Icon icon={play} />}
    </PlayerButton>
  );
}
