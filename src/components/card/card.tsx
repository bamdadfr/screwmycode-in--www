'use client';

import {Icon} from '@iconify/react';
import clsx from 'clsx';
import {Heart, TrendingUp} from 'lucide-react';
import {MouseEvent, useCallback, useMemo, useState} from 'react';
import {Artwork} from 'src/components/artwork/artwork';
import styles from 'src/components/card/card.module.scss';
import {type ListItem} from 'src/dtos';
import {useCardIcon} from 'src/hooks/use-card-icon';
import {useCurrentItem} from 'src/hooks/use-current-item';
import {useImageLoader} from 'src/hooks/use-image-loader';

interface Props {
  item: ListItem;
}

export function Card({item}: Props) {
  const {icon} = useCardIcon(item);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const {currentItem, updateCurrentItem, isLoading} = useCurrentItem();
  const {blobUrl} = useImageLoader(item.url);

  const notWip = false;

  const isCurrent = useMemo(
    () => item.url === currentItem?.url,
    [item, currentItem],
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      updateCurrentItem(item).then();
    },
    [item, updateCurrentItem],
  );

  return (
    <a
      className={clsx(styles.container, isLoading && styles.loading)}
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
              alt={item.title}
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
        <h3>{item.title}</h3>

        <div className={styles.hits}>
          <TrendingUp />
          {item.hits.toString()}
          {/*{item.hits % 2 === 0 ? <Snail /> : <Rabbit />}*/}
          {/*{item.hits.toString()}*/}
        </div>

        <Icon
          className={clsx(isCurrent && styles.rainbow)}
          icon={icon}
        />

        {notWip ? (
          <div className={clsx(styles.like)}>
            <Heart />
          </div>
        ) : (
          <span />
        )}
      </div>
    </a>
  );
}
