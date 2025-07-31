import clsx from 'clsx';
import {Heart} from 'lucide-react';
import styles from 'src/components/like-button/like-button.module.scss';
import {useLikeButton} from 'src/components/like-button/use-like-button';
import {type MediaDto} from 'src/dtos';

interface Props {
  media: MediaDto;
}

export function LikeButton({media}: Props) {
  const {handleClick, isLiked} = useLikeButton(media);

  return (
    <Heart
      className={clsx(styles.icon, isLiked && styles.iconIsLiked)}
      onClick={handleClick}
    />
  );
}
