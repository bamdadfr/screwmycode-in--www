import pause from '@iconify/icons-mdi/pause';
import play from '@iconify/icons-mdi/play';
import {Icon} from '@iconify/react';
import React, {type ReactElement} from 'react';
import {usePlayerContext} from 'src/contexts/player-context';
import {PlayerButton} from 'src/modules/player/player.module.styles';

export function PlayPauseButtonComponent(): ReactElement {
  const {isPlaying, togglePlaying} = usePlayerContext();

  return (
    <PlayerButton
      onClick={togglePlaying}
      aria-label={isPlaying ? 'pause' : 'play'}
    >
      {isPlaying ? <Icon icon={pause} /> : <Icon icon={play} />}
    </PlayerButton>
  );
}
