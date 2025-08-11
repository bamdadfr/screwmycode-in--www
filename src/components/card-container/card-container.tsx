'use client';
import {useEffect, useRef, useState} from 'react';
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
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clean up previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && visibleCards < medias.length) {
            setVisibleCards((prev) => Math.min(prev + L, medias.length));
          }
        });
      },
      {
        threshold: [0, 0.1],
        rootMargin: '50px 0px',
        root: null,
      },
    );

    observerRef.current = observer;

    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      const sentinel = document.getElementById(ID);
      if (sentinel && observer) {
        observer.observe(sentinel);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleCards, medias.length]);

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
            height: '1px',
            width: '100%',
            minHeight: '1px',
            display: 'block',
          }}
        />
      )}
    </>
  );
}
