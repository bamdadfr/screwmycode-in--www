import {useRouter} from 'next/router';
import speedToSemitones from 'speed-to-semitones';
import {TITLE_SEPARATOR} from 'src/constants';
import {getProviderFromRouter} from 'src/utils/get-provider/get-provider-from-router';

export function usePlayerDocumentTitle(title: string, speed: number = 1) {
  const router = useRouter();
  const provider = getProviderFromRouter(router);
  const semitones = `${speedToSemitones(speed, 1)} st`;

  return `${title} ${TITLE_SEPARATOR} ${provider} ${TITLE_SEPARATOR} ${semitones}`;
}
