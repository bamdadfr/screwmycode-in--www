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

const ID = 'load-more-sentinel';
const L = 1;

export function CardContainer({medias}: Props) {
  const isLoading = useAppLoading();
  const [visibleCards, setVisibleCards] = useState(L);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCards < medias.length) {
          setVisibleCards((prev) => prev + L);
        }
      },
      {
        // Add some threshold and rootMargin for better triggering
        threshold: 0.1,
        rootMargin: '100px', // Trigger when sentinel is 100px from viewport
      },
    );

    const sentinel = document.getElementById(ID);
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, [visibleCards, medias.length]); // Re-run when visibleCards changes

  return (
    <>
      {isLoading && <div className={styles.overlay} />}
      {medias.slice(0, visibleCards).map((item) => (
        <Card
          key={item.url}
          media={item}
        />
      ))}
      {visibleCards < medias.length && (
        <div
          id={ID}
          style={{
            height: '20px',
            margin: '20px 0',
          }} // Ensure it has some height
        />
      )}
    </>
  );
}
