import pause from '@iconify/icons-mdi/pause';
import play from '@iconify/icons-mdi/play';
import {Icon} from '@iconify/react';
import React, {type ReactElement} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {PlayerButton} from 'src/modules/player/player.module.styles';

export function PlayPauseButtonComponent(): ReactElement {
  const {isPlaying, togglePlaying} = useAudioPlayerContext();

  return (
    <PlayerButton
      onClick={togglePlaying}
      aria-label={isPlaying ? 'pause' : 'play'}
    >
      {isPlaying ? <Icon icon={pause} /> : <Icon icon={play} />}
    </PlayerButton>
  );
}
