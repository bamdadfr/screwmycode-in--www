import {type MouseEvent, useCallback, useMemo} from 'react';
import {type MediaDto} from 'src/dtos';
import {useLikes} from 'src/hooks/use-likes';

export function useLikeButton(media: MediaDto) {
  const {toggle, likes} = useLikes();

  const isLiked = useMemo(
    () => likes.find((m) => m.url === media.url),
    [likes, media],
  );

  const handleClick = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      e.preventDefault();
      e.stopPropagation();

      toggle(media);
    },
    [toggle, media],
  );

  return {
    isLiked,
    handleClick,
  };
}
