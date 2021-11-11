import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { isLoadedAtom } from '../../../atoms/load.atoms';
import { setSpeedAtom } from '../../../atoms/speed.atoms';
import { setAudioTitleAtom } from '../../../atoms/audio-title.atoms';
import { getProvider } from '../../../utils/get-provider/get-provider';
import { usePlayerLoading } from './use-player-loading';

/**
 * Entry hook for the player layout
 *
 * @param {object} options - Options
 * @param {string} options.title - Title of the audio
 * @param {number} options.speed - Speed of the audio
 * @typedef {string} MetaDescription - Meta description of the audio
 * @typedef {string} MetaUrl - Meta url of the audio
 * @typedef {boolean} IsLoaded - Is the audio loaded
 * @returns {{MetaDescription,MetaUrl,IsLoaded}} - Player layout state
 */
export function usePlayerLayout ({
  title,
  speed,
}) {
  const router = useRouter ();

  const [isLoaded] = useAtom (isLoadedAtom);
  const [, setSpeed] = useAtom (setSpeedAtom);
  const [, setAudioTitle] = useAtom (setAudioTitleAtom);

  const [metaDescription] = useState (`${title} - ${speed} - ${getProvider (router)} - ScrewMyCode.In`);
  const metaUrl = 'https://www.screwmycode.in/' + router.asPath;

  usePlayerLoading ();
  useEffect (() => setSpeed (speed), [setSpeed, speed]);
  useEffect (() => setAudioTitle (title), [setAudioTitle, title]);

  return {
    metaDescription,
    metaUrl,
    isLoaded,
  };
}
