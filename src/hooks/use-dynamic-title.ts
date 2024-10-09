import {useRouter} from 'next/router';
import {useNextReplaceUrl} from 'next-replace-url';
import {useMemo} from 'react';
import speedToSemitones from 'speed-to-semitones';
import {TITLE_SEPARATOR} from 'src/constants';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {useCache} from 'src/hooks/use-cache';
import {getProviderFromRouter} from 'src/utils/get-provider/get-provider-from-router';

export function useDynamicTitle() {
  const router = useRouter();
  const {speed, title} = useAudioPlayerContext();
  const cachedSpeed = useCache(speed, 350);

  useNextReplaceUrl('speed', cachedSpeed.toString());

  const dynamicTitle = useMemo(() => {
    if (!title) {
      return '';
    }

    const semitones = `${speedToSemitones(cachedSpeed, 1)} st`;
    const provider = getProviderFromRouter(router);
    return `${title} ${TITLE_SEPARATOR} ${provider} ${TITLE_SEPARATOR} ${semitones}`;
  }, [title, cachedSpeed, router]);

  return {
    dynamicTitle,
  };
}
