'use client';

import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {Card} from 'src/components/card/card';
import styles from 'src/components/card-container/card-container.module.scss';
import {type MediaDto} from 'src/dtos';

interface Props {
  medias: MediaDto[];
  token: string;
}

export function CardContainer({medias}: Props) {
  const {isLoading} = useAudioState();

  return (
    <>
      {isLoading && <div className={styles.overlay} />}
      {medias.map((item) => {
        return (
          <Card
            key={item.url}
            media={item}
          />
        );
      })}
    </>
  );
}
