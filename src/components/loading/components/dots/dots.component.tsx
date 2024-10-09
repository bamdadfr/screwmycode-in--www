import React, {type ReactElement} from 'react';

import {useDotsComponent} from './hooks/use-dots-component';

/**
 * Component for the dots animation
 */
export function DotsComponent(): ReactElement {
  const {dots} = useDotsComponent();

  return <>{dots}</>;
}
