import repeat from '@iconify/icons-mdi/repeat';
import repeatOff from '@iconify/icons-mdi/repeat-off';
import {Icon} from '@iconify/react';
import React, {type ReactElement} from 'react';
import {usePlayerContext} from 'src/_old/contexts/player-context';

import {PlayerButton} from '../../player.module.styles';

export function RepeatButtonComponent(): ReactElement {
  const {isRepeating, toggleRepeating} = usePlayerContext();

  return (
    <PlayerButton
      onClick={toggleRepeating}
      aria-label={(isRepeating ? 'disable' : 'enable') + ' repeat'}
    >
      {isRepeating ? <Icon icon={repeat} /> : <Icon icon={repeatOff} />}
    </PlayerButton>
  );
}
