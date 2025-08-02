'use client';

import {useEffect} from 'react';
import {useLikes} from 'src/hooks/use-likes';
import {useMedias} from 'src/hooks/use-medias';

export function AppLikes() {
  const {medias} = useMedias();
  const {refresh} = useLikes();

  useEffect(() => {
    refresh(medias);
  }, [medias, refresh]);

  return null;
}
