import repeat from '@iconify/icons-mdi/repeat';
import repeatOff from '@iconify/icons-mdi/repeat-off';
import {Icon} from '@iconify/react';
import {useAtom} from 'jotai';
import React, {ReactElement} from 'react';

import {isRepeatingAtom, toggleRepeatingAtom} from '../../../../atoms/repeat.atoms';
import {PlayerButton} from '../../player.module.styles';

/**
 * Component to toggle repeat mode
 */
export function RepeatButtonComponent(): ReactElement {
  const [isRepeating] = useAtom(isRepeatingAtom);
  const [, toggleRepeating] = useAtom(toggleRepeatingAtom);

  return (
    <PlayerButton
      onClick={toggleRepeating}
      aria-label={(isRepeating ? 'disable' : 'enable') + ' repeat'}
    >
      {isRepeating ? <Icon icon={repeat} /> : <Icon icon={repeatOff} />}
    </PlayerButton>
  );
}
