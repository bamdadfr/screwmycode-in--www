import React from 'react';
import {Icon} from '@iconify/react';
import volumeOff from '@iconify/icons-mdi/volume-off';
import volumeHigh from '@iconify/icons-mdi/volume-high';
import {useAtom} from 'jotai';
import {Button} from '../../player.module.styles';
import {isMutedAtom} from '../../../../atoms/mute.atoms';
import {volumeAtom} from '../../../../atoms/volume.atoms';

/**
 * Component to toggle the volume
 *
 * @returns {React.ReactElement} - Volume button
 */
export function VolumeButtonComponent() {
  const [volume] = useAtom(volumeAtom);
  const [isMuted] = useAtom(isMutedAtom);

  // todo bind click action
  return (
    <>
      <Button
        aria-label="volume"
      >
        {volume === 0 || isMuted
          ? <Icon icon={volumeOff} />
          : <Icon icon={volumeHigh} />
        }
      </Button>
    </>
  );
}
