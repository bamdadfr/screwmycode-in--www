import React from 'react';
import {usePlayerContext} from 'src/contexts/player-context';

import {H2} from './title.component.styles';

export function TitleComponent() {
  const {title} = usePlayerContext();
  return <H2>{title}</H2>;
}
