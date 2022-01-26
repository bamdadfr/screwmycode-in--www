import React from 'react';
import {useDotsComponent} from './hooks/use-dots-component';

/**
 * Component for the dots animation
 *
 * @returns {React.ReactElement} - Rendered component
 */
export function DotsComponent() {
  const {dots} = useDotsComponent();

  return (
    <>
      {dots}
    </>
  );
}
