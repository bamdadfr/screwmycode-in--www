'use client';

import {Icon} from '@iconify/react';
import clsx from 'clsx';
import {Heart, TrendingUp} from 'lucide-react';
import Image from 'next/image';
import {MouseEvent, useCallback, useMemo, useState} from 'react';
import {Artwork} from 'src/components/artwork/artwork';
import styles from 'src/components/card/card.module.scss';
import {type ListItem} from 'src/dtos';
import {useCardIcon} from 'src/hooks/use-card-icon';
import {useCurrentItem} from 'src/hooks/use-current-item';
import {useMediaToken} from 'src/hooks/use-media-token';

interface Props {
  item: ListItem;
}

export function Card({item}: Props) {
  const {icon} = useCardIcon(item);
  const [isHover, setHover] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const {currentItem, setCurrentItem} = useCurrentItem();

  const {
    url: imageUrl,
    loading: imageLoading,
    error: imageError,
  } = useMediaToken(item.url, 'image');

  const isCurrent = useMemo(
    () => item.url === currentItem?.url,
    [item, currentItem],
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      setCurrentItem(item);
    },
    [item, setCurrentItem],
  );

  return (
    <a
      className={clsx(styles.container)}
      onMouseEnter={() => !isHover && setHover(true)}
      onMouseLeave={() => isHover && setHover(false)}
      onClick={handleClick}
    >
      <div className={clsx(styles.imageWrapper, isHover && styles.imageHover)}>
        {!imageLoading && !imageError && imageUrl && (
          <>
            <Image
              src={imageUrl}
              alt={item.title}
              width={120}
              height={120}
              onLoad={() => setLoaded(true)}
              style={{
                opacity: isLoaded ? 1 : 0,
                top: isLoaded ? 0 : '3px',
              }}
            />

            {isHover && (
              <Artwork
                url={imageUrl}
                freeze0={!isHover}
                width={120 * 0.064}
                height={120 * 0.064}
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

        <div className={clsx(styles.like)}>
          <Heart />
        </div>
      </div>
    </a>
  );
}
