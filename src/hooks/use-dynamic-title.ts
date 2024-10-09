import {useAtom} from 'jotai/index';
import {useRouter} from 'next/router';
import {useNextReplaceUrl} from 'next-replace-url';
import {useMemo} from 'react';
import speedToSemitones from 'speed-to-semitones';
import {audioTitleAtom} from 'src/atoms/audio-title.atoms';
import {speedAtom} from 'src/atoms/speed.atoms';
import {TITLE_SEPARATOR} from 'src/constants';
import {useCache} from 'src/hooks/use-cache';
import {getProviderFromRouter} from 'src/utils/get-provider/get-provider-from-router';

export function useDynamicTitle() {
  const router = useRouter();
  const [audioTitle] = useAtom(audioTitleAtom);
  const [speed] = useAtom(speedAtom);
  const cachedSpeed = useCache(speed, 350);

  useNextReplaceUrl('speed', cachedSpeed.toString());

  const dynamicTitle = useMemo(() => {
    if (!audioTitle) {
      return '';
    }

    const semitones = `${speedToSemitones(cachedSpeed, 1)} st`;
    const provider = getProviderFromRouter(router);
    return `${audioTitle} ${TITLE_SEPARATOR} ${provider} ${TITLE_SEPARATOR} ${semitones}`;
  }, [audioTitle, cachedSpeed, router]);

  return {
    dynamicTitle,
  };
}
