import React, {useState} from 'react';
import {useInterval} from '../../../../hooks/use-interval';

/**
 * Component for the dots animation
 *
 * @param {object} props - Component props
 * @param {number} props.frequency setInterval - frequency of the animation
 * @returns {React.ReactElement} - Rendered component
 */
export function DotsComponent({frequency = 500}) {
  const [dots, setDots] = useState('');

  useInterval(() => {
    if (dots === '...') {
      return setDots('');
    }
    setDots((s) => s + '.');
  }, frequency);

  return (
    <>
      {dots}
    </>
  );
}
