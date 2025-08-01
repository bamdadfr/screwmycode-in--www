'use client';

import {Icon} from '@iconify/react';
import clsx from 'clsx';
import {TrendingUp} from 'lucide-react';
import {MouseEvent, useCallback, useMemo, useState} from 'react';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {Artwork} from 'src/components/artwork/artwork';
import styles from 'src/components/card/card.module.scss';
import {LikeButton} from 'src/components/like-button/like-button';
import {type MediaDto} from 'src/dtos';
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
  const {isLoading: isAudioLoading, isError: isAudioError} = useAudioState();
  const {currentMedia, update} = useCurrentMedia();
  const {blobUrl} = useImageLoader(media);

  const isLoading = useMemo(() => {
    const isSame = media.url === currentMedia?.url;

    if (!isSame) {
      return false;
    }

    if (isAudioLoading) {
      return true;
    }

    return false;
  }, [isAudioLoading, media, currentMedia]);

  const isError = useMemo(() => {
    const isSame = media.url === currentMedia?.url;

    if (!isSame) {
      return false;
    }

    if (isAudioError) {
      return true;
    }

    return false;
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

  return (
    <a
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
        {blobUrl && (
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
