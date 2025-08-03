import {useAtomValue} from 'jotai';
import {audioIsLoadingAtom} from 'src/components/app/hooks/audio-atoms';
import {currentIsLoadingAtom} from 'src/hooks/use-current-media';

export function useAppLoading() {
  const isAudioLoading = useAtomValue(audioIsLoadingAtom);
  const isMediaLoading = useAtomValue(currentIsLoadingAtom);

  return isAudioLoading || isMediaLoading;
}
