import {useAtom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';
import {useCallback} from 'react';
import {LOCAL_STORAGE_KEY} from 'src/constants';
import {type MediaDto} from 'src/dtos';

const likesAtom = atomWithStorage<MediaDto[]>(LOCAL_STORAGE_KEY.enum.LIKES, []);

export function useLikes() {
  const [likes, setLikes] = useAtom(likesAtom);

  const add = useCallback(
    (newMedia: MediaDto) => {
      setLikes((prev) => {
        if (prev.some((m) => m.url === newMedia.url)) {
          return prev;
        }

        return [...prev, newMedia];
      });
    },
    [setLikes],
  );

  const remove = useCallback(
    (mediaToRemove: MediaDto) => {
      setLikes((prev) => {
        return prev.filter((m) => m.url !== mediaToRemove.url);
      });
    },
    [setLikes],
  );

  const toggle = useCallback(
    (media: MediaDto) => {
      if (likes.some((m) => m.url === media.url)) {
        remove(media);
        return;
      }

      add(media);
    },
    [likes, add, remove],
  );

  const refresh = useCallback(
    (newMedias: MediaDto[]) => {
      setLikes((prev) => {
        const newLikes: MediaDto[] = [];

        for (const like of prev) {
          const newMedia = newMedias.find((m) => m.url === like.url);

          if (!newMedia) {
            newLikes.push(like);
            continue;
          }

          newLikes.push({
            ...like,
            hits: newMedia.hits,
            audio: newMedia.audio,
            image: newMedia.image,
          });
        }

        return newLikes;
      });
    },
    [setLikes],
  );

  return {
    likes,
    add,
    remove,
    toggle,
    refresh,
  };
}
