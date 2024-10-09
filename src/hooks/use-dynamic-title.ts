import {useNextReplaceUrl} from 'next-replace-url';
import {usePlayerContext} from 'src/contexts/player-context';
import {useCache} from 'src/hooks/use-cache';
import {usePlayerDocumentTitle} from 'src/hooks/use-player-document-title';

// todo: rename me
export function useDynamicTitle() {
  const {speed, title} = usePlayerContext();
  const cachedSpeed = useCache(speed, 350);

  useNextReplaceUrl('speed', cachedSpeed.toString());

  const dynamicTitle = usePlayerDocumentTitle(title, cachedSpeed);

  return {
    dynamicTitle,
  };
}
