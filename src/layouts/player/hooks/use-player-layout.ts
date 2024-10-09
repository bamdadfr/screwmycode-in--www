import {useAtom} from 'jotai';
import {useRouter} from 'next/router';
import {useEffect} from 'react';
import {setArtworkAtom} from 'src/atoms/artwork.atoms';
import {setAudioTitleAtom} from 'src/atoms/audio-title.atoms';
import {useAudioUrlContext} from 'src/contexts/audio-url-context';
import {type PlayerLayoutProps} from 'src/layouts/player/player.layout';

interface UsePlayerLayout {
  metaUrl: string;
}

export function usePlayerLayout({
  title,
  audio,
  image,
}: PlayerLayoutProps): UsePlayerLayout {
  const router = useRouter();

  // const [isLoaded] = useAtom(isLoadedAtom);
  const [, setAudioTitle] = useAtom(setAudioTitleAtom);
  const [, setArtwork] = useAtom(setArtworkAtom);

  const metaUrl = 'https://www.screwmycode.in/' + router.asPath;

  const {setUrl} = useAudioUrlContext();

  useEffect(() => {
    setUrl(audio);
  }, [audio, setUrl]);

  // usePlayerLoading();

  useEffect(() => {
    setAudioTitle(title);
  }, [setAudioTitle, title]);

  useEffect(() => {
    setArtwork(image);
  }, [setArtwork, image]);

  // todo: pause on url change
  // useEffect(() => () => {
  //   setPause();
  // });

  return {
    metaUrl,
  };
}
