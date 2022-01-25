import React, {useEffect} from 'react';
import {useAtom} from 'jotai';
import {imageAtom} from '../../../../atoms/image.atoms';
import {Image} from './image.component.styles';
import {speedAtom} from '../../../../atoms/speed.atoms';

/**
 * @returns {React.ReactElement} react component
 */
export function ImageComponent() {
  const [artwork] = useAtom(imageAtom);
  const [speed] = useAtom(speedAtom);

  useEffect(() => {
  }, []);

  return (
    <>
      <Image src={artwork} speed={speed} alt="artwork" />
    </>
  );
}
