import React from 'react';
import { useAtom } from 'jotai';
import { H2 } from './title.component.styles';
import { audioTitleAtom } from '../../../../atoms/audio-title.atoms';

/**
 * Component to display the title of the audio
 *
 * @returns {React.ReactElement} - Title of the audio
 */
export function TitleComponent () {
  const [audioTitle] = useAtom (audioTitleAtom);

  return (
    <>
      <H2>
        {audioTitle}
      </H2>
    </>
  );
}
