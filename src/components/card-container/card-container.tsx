'use client';

import {useEffect, useState} from 'react';
import {Card} from 'src/components/card/card';
import styles from 'src/components/card-container/card-container.module.scss';
import {type MediaDto} from 'src/dtos';
import {useAppLoading} from 'src/hooks/use-app-loading';

interface Props {
  medias: MediaDto[];
  token: string;
}

const ID = '#load-more-sentinel';
const L = 10;

export function CardContainer({medias}: Props) {
  const isLoading = useAppLoading();
  const [visibleCards, setVisibleCards] = useState(L);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleCards((prev) => prev + L);
      }
    });

    const sentinel = document.querySelector(ID);

    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isLoading && <div className={styles.overlay} />}
      {medias.slice(0, visibleCards).map((item) => (
        <Card
          key={item.url}
          media={item}
        />
      ))}

      {visibleCards < medias.length && <div id="load-more-sentinel" />}
    </>
  );
}
