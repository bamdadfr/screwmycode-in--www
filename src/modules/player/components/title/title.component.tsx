import {useAtom} from 'jotai';
import React, {type ReactElement} from 'react';

import {audioTitleAtom} from '../../../../atoms/audio-title.atoms';
import {H2} from './title.component.styles';

/**
 * Component to display the title of the audio
 */
export function TitleComponent(): ReactElement {
  const [audioTitle] = useAtom(audioTitleAtom);

  return <H2>{audioTitle}</H2>;
}
