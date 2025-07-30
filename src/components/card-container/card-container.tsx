'use client';

import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {Card} from 'src/components/card/card';
import styles from 'src/components/card-container/card-container.module.scss';
import {type ListItem} from 'src/dtos';

interface Props {
  items: ListItem[];
}

export function CardContainer({items}: Props) {
  const {isLoading} = useAudioState();
  return (
    <>
      {isLoading && <div className={styles.overlay} />}
      {items.map((item) => {
        return (
          <Card
            key={item.url}
            item={item}
          />
        );
      })}
    </>
  );
}
