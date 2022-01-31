import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {useAtom} from 'jotai';
import {isLoadedAtom} from '../../../atoms/load.atoms';
import {setSpeedAtom} from '../../../atoms/speed.atoms';
import {setAudioTitleAtom} from '../../../atoms/audio-title.atoms';
import {usePlayerLoading} from './use-player-loading';
import {setArtworkAtom} from '../../../atoms/artwork.atoms';
import {setPauseAtom} from '../../../atoms/play-pause.atoms';
import {
  getProviderFromRouter,
} from '../../../utils/get-provider/get-provider-from-router';

/**
 * Entry hook for the player layout
 *
 * @param {object} options - Options
 * @param {string} options.title - TitleWrapper of the audio
 * @param {number} options.speed - Speed of the audio
 * @param {string} options.image - Image of the audio
 * @typedef {string} MetaDescription - Meta description of the audio
 * @typedef {string} MetaUrl - Meta url of the audio
 * @typedef {boolean} IsLoaded - Is the audio loaded
 * @returns {{MetaDescription,MetaUrl,IsLoaded}} - Player layout state
 */
export function usePlayerLayout({
  title,
  speed,
  image,
}) {
  const router = useRouter();

  const [isLoaded] = useAtom(isLoadedAtom);
  const [, setSpeed] = useAtom(setSpeedAtom);
  const [, setAudioTitle] = useAtom(setAudioTitleAtom);
  const [, setArtwork] = useAtom(setArtworkAtom);
  const [, setPause] = useAtom(setPauseAtom);

  const [metaDescription] = useState(`${title} - ${speed} - ${getProviderFromRouter(router)}`);
  const metaUrl = 'https://www.screwmycode.in/' + router.asPath;

  usePlayerLoading();
  useEffect(() => setSpeed(speed), [setSpeed, speed]);
  useEffect(() => setAudioTitle(title), [setAudioTitle, title]);
  useEffect(() => setArtwork(image), [setArtwork, image]);

  useEffect(() => () => {
    setPause();
  });

  return {
    metaDescription,
    metaUrl,
    isLoaded,
  };
}
