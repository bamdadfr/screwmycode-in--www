'use client';

import {Icon} from '@iconify/react';
import {useQueryClient} from '@tanstack/react-query';
import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import {TrendingUp} from 'lucide-react';
import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {audioIsErrorAtom} from 'src/components/app/hooks/audio-atoms';
import {Artwork} from 'src/components/artwork/artwork';
import styles from 'src/components/card/card.module.scss';
import {LikeButton} from 'src/components/like-button/like-button';
import {type MediaDto} from 'src/dtos';
import {useAppLoading} from 'src/hooks/use-app-loading';
import {useCardIcon} from 'src/hooks/use-card-icon';
import {useCurrentMedia} from 'src/hooks/use-current-media';
import {useImageLoader} from 'src/hooks/use-image-loader';

interface Props {
  media: MediaDto;
}

export function Card({media}: Props) {
  const {icon} = useCardIcon(media);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isAudioError = useAtomValue(audioIsErrorAtom);
  const {currentMedia, update} = useCurrentMedia();
  const {blobUrl} = useImageLoader(media);
  const isAppLoading = useAppLoading();

  const isLoading = useMemo(() => {
    const isSame = media.url === currentMedia?.url;

    if (!isSame) {
      return false;
    }

    return isAppLoading;
  }, [media, currentMedia, isAppLoading]);

  const isError = useMemo(() => {
    const isSame = media.url === currentMedia?.url;

    if (!isSame) {
      return false;
    }

    return isAudioError;
  }, [isAudioError, media, currentMedia]);

  const isCurrent = useMemo(
    () => media.url === currentMedia?.url,
    [media, currentMedia],
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      update(media).then();
    },
    [media, update],
  );

  const queryClient = useQueryClient();
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Prefetch the image
          queryClient
            .prefetchQuery({
              queryKey: ['image', media.image],
              queryFn: async () => {
                const response = await fetch(media.image);
                const blob = await response.blob();
                return URL.createObjectURL(blob);
              },
              staleTime: Infinity,
            })
            .then();
        }
      },
      {rootMargin: '100px'}, // Start loading 100px before visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [media.image, queryClient]);

  return (
    <a
      ref={ref}
      className={clsx(
        styles.container,
        isLoading && styles.loading,
        isError && styles.error,
      )}
      onMouseEnter={() => !isImageHovered && setIsImageHovered(true)}
      onMouseLeave={() => isImageHovered && setIsImageHovered(false)}
      onClick={handleClick}
    >
      <div
        className={clsx(
          styles.imageWrapper,
          (isImageHovered || isCurrent) && styles.imageHover,
        )}
      >
        {blobUrl ? (
          <>
            <img
              src={blobUrl}
              alt={media.title}
              width={120}
              height={120}
              onLoad={() => setIsImageLoaded(true)}
              style={{
                opacity: isImageLoaded ? 1 : 0,
                top: isImageLoaded ? 0 : '3px',
              }}
            />

            {(isImageHovered || isCurrent) && (
              <Artwork
                url={blobUrl}
                freeze0={!isImageHovered && !isCurrent}
                width={120}
                height={120}
              />
            )}
          </>
        ) : (
          <div className={styles.imageSkeleton} />
        )}
      </div>
      <div className={clsx('relative', styles.content)}>
        <h3>{media.title}</h3>

        <div className={styles.hits}>
          <TrendingUp />
          {media.hits.toString()}
          {/*{item.hits % 2 === 0 ? <Snail /> : <Rabbit />}*/}
          {/*{item.hits.toString()}*/}
        </div>

        <Icon
          className={clsx(isCurrent && styles.rainbow)}
          icon={icon}
        />

        <div className={styles.iconContainer}>
          <LikeButton media={media} />
        </div>
      </div>
    </a>
  );
}
