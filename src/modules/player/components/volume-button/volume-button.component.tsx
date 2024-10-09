import volumeHigh from '@iconify/icons-mdi/volume-high';
import volumeOff from '@iconify/icons-mdi/volume-off';
import {Icon} from '@iconify/react';
import React, {type ReactElement} from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';

import {PlayerButton} from '../../player.module.styles';

export function VolumeButtonComponent(): ReactElement {
  const {volume} = useAudioPlayerContext();

  return (
    <PlayerButton aria-label="volume">
      {volume === 0 ? <Icon icon={volumeOff} /> : <Icon icon={volumeHigh} />}
    </PlayerButton>
  );
}
