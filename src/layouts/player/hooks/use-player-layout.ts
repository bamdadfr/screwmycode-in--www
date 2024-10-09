import {useAtom} from 'jotai';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {setArtworkAtom} from 'src/atoms/artwork.atoms';
import {setAudioTitleAtom} from 'src/atoms/audio-title.atoms';
import {isLoadedAtom} from 'src/atoms/load.atoms';
import {setPauseAtom} from 'src/atoms/play-pause.atoms';
import {setSpeedAtom} from 'src/atoms/speed.atoms';

import {usePlayerLoading} from './use-player-loading';

interface UsePlayerLayoutOptions {
  title: string;
  speed: number;
  image: string;
}

interface UsePlayerLayout {
  metaUrl: string;
  isLoaded: boolean;
}

export function usePlayerLayout({
  title,
  speed,
  image,
}: UsePlayerLayoutOptions): UsePlayerLayout {
  const router = useRouter();

  const [isLoaded] = useAtom(isLoadedAtom);
  const [, setSpeed] = useAtom(setSpeedAtom);
  const [, setAudioTitle] = useAtom(setAudioTitleAtom);
  const [, setArtwork] = useAtom(setArtworkAtom);
  const [, setPause] = useAtom(setPauseAtom);

  const metaUrl = 'https://www.screwmycode.in/' + router.asPath;

  usePlayerLoading();

  useEffect(() => {
    setSpeed(speed.toString());
  }, [setSpeed, speed]);

  useEffect(() => {
    setAudioTitle(title);
  }, [setAudioTitle, title]);

  useEffect(() => {
    setArtwork(image);
  }, [setArtwork, image]);

  useEffect(() => () => {
    setPause();
  });

  return {
    metaUrl,
    isLoaded,
  };
}
