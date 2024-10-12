import {useRouter} from 'next/router';
import speedToSemitones from 'speed-to-semitones';
import {getProviderFromRouter} from 'src/_old/utils/get-provider/get-provider-from-router';
import {TITLE_SEPARATOR} from 'src/constants';

export function usePlayerDocumentTitle(title: string, speed: number = 1) {
  const router = useRouter();
  const provider = getProviderFromRouter(router);
  const semitones = `${speedToSemitones(speed, 1)} st`;

  return `${title} ${TITLE_SEPARATOR} ${provider} ${TITLE_SEPARATOR} ${semitones}`;
}
