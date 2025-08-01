'use client';

import {useEffect} from 'react';
import {type MediaDto} from 'src/dtos';
import {useLikes} from 'src/hooks/use-likes';

interface Props {
  medias: MediaDto[];
}

export function AppLikes({medias}: Props) {
  const {update} = useLikes();

  useEffect(() => {
    update(medias);
  }, [medias, update]);

  return null;
}
