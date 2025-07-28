'use client';

import {Icon} from '@iconify/react';
import clsx from 'clsx';
import {Heart, TrendingUp} from 'lucide-react';
import {
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {Artwork} from 'src/components/artwork/artwork';
import styles from 'src/components/card/card.module.scss';
import {type ListItem} from 'src/dtos';
import {useCardIcon} from 'src/hooks/use-card-icon';
import {useCurrentItem} from 'src/hooks/use-current-item';
import {useMediaFetch} from 'src/hooks/use-media-fetch';

interface Props {
  item: ListItem;
}

export function Card({item}: Props) {
  const {icon} = useCardIcon(item);
  const [isHover, setHover] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const {currentItem, updateCurrentItem} = useCurrentItem();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const {fetchMedia} = useMediaFetch();
  const hasFetched = useRef(false);

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

  useEffect(() => {
    if (hasFetched.current) {
      return;
    }

    hasFetched.current = true;

    (async () => {
      const image = await fetchMedia(item.url, 'image');
      setImageUrl(image);
    })();
  }, [fetchMedia, item.url, hasFetched]);

  return (
    <a
      className={clsx(styles.container)}
      onMouseEnter={() => !isHover && setHover(true)}
      onMouseLeave={() => isHover && setHover(false)}
      onClick={handleClick}
    >
      <div
        className={clsx(
          styles.imageWrapper,
          (isHover || isCurrent) && styles.imageHover,
        )}
      >
        {imageUrl && (
          <>
            <img
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

            {(isHover || isCurrent) && (
              <Artwork
                url={imageUrl}
                freeze0={!isHover && !isCurrent}
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
