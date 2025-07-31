import clsx from 'clsx';
import {Heart} from 'lucide-react';
import {type MouseEvent, useCallback, useMemo} from 'react';
import styles from 'src/components/card/card-like.module.scss';
import {type MediaDto} from 'src/dtos';
import {useLikes} from 'src/hooks/use-likes';

interface Props {
  media: MediaDto;
}

export function CardLike({media}: Props) {
  const {toggle, likes} = useLikes();

  const isLiked = useMemo(
    () => likes.find((m) => m.url === media.url),
    [likes, media],
  );

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      toggle(media);
    },
    [toggle, media],
  );

  return (
    <div
      className={clsx(styles.container)}
      onClick={handleClick}
    >
      <Heart className={clsx(styles.icon, isLiked && styles.iconIsLiked)} />
    </div>
  );
}
