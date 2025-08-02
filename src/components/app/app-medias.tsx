'use client';
import {useEffect} from 'react';
import {type MediaDto} from 'src/dtos';
import {useMedias} from 'src/hooks/use-medias';

export function AppMedias({medias}: {medias: MediaDto[]}) {
  const {setMedias} = useMedias();

  useEffect(() => {
    setMedias(medias);
  }, [medias, setMedias]);

  return null;
}
