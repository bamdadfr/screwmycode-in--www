import React from 'react';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';

import {H2} from './title.component.styles';

export function TitleComponent() {
  const {title} = useAudioPlayerContext();
  return <H2>{title}</H2>;
}
