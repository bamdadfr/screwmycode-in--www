import volumeHigh from '@iconify/icons-mdi/volume-high';
import volumeOff from '@iconify/icons-mdi/volume-off';
import {Icon} from '@iconify/react';
import {useAtom} from 'jotai';
import React, {type ReactElement} from 'react';

import {isMutedAtom} from '../../../../atoms/mute.atoms';
import {volumeAtom} from '../../../../atoms/volume.atoms';
import {PlayerButton} from '../../player.module.styles';

/**
 * Component to toggle the volume
 */
export function VolumeButtonComponent(): ReactElement {
  const [volume] = useAtom(volumeAtom);
  const [isMuted] = useAtom(isMutedAtom);

  // todo bind click action
  return (
    <PlayerButton aria-label="volume">
      {volume === 0 || isMuted ? (
        <Icon icon={volumeOff} />
      ) : (
        <Icon icon={volumeHigh} />
      )}
    </PlayerButton>
  );
}
