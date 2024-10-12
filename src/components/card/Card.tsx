'use client';

import bandcamp from '@iconify/icons-mdi/bandcamp';
import help from '@iconify/icons-mdi/help';
import soundcloud from '@iconify/icons-mdi/soundcloud';
import youtube from '@iconify/icons-mdi/youtube';
import {Icon} from '@iconify/react';
import {useQuery} from '@tanstack/react-query';
import clsx from 'clsx';
import {useAtom, useSetAtom} from 'jotai';
import {Heart, Rabbit, Snail, TrendingUp} from 'lucide-react';
import Image from 'next/image';
import {useRouter} from 'next/navigation';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  audioArtworkAtom,
  audioLikesAtom,
  audioSlugAtom,
  audioSrcAtom,
  audioTitleAtom,
  audioTypeAtom,
} from 'src/atoms';
import {Artwork} from 'src/components/artwork/Artwork';
import {useAudio} from 'src/hooks/useAudio';
import {fetchAudio} from 'src/queries';
import {type TopDto} from 'src/utils/dtos';

import styles from './Card.module.scss';

interface Props {
  d: TopDto;
}

export const Card = ({d}: Props) => {
  const router = useRouter();
  const setSrc = useSetAtom(audioSrcAtom);
  const setArtwork = useSetAtom(audioArtworkAtom);
  const [audioType, setAudioType] = useAtom(audioTypeAtom);
  const [audioSlug, setAudioSlug] = useAtom(audioSlugAtom);
  const setAudioTitle = useSetAtom(audioTitleAtom);

  const icon = useMemo(() => {
    switch (d.type) {
      case 'youtube': {
        return youtube;
      }
      case 'bandcamp': {
        return bandcamp;
      }
      case 'soundcloud': {
        return soundcloud;
      }
      default: {
        return help;
      }
    }
  }, [d]);

  const [isHover, setHover] = useState(false);
  const isCurrent = useMemo(() => {
    return d.type === audioType && d.slug === audioSlug;
  }, [d, audioType, audioSlug]);

  const {isFetching, data, refetch} = useQuery({
    queryKey: ['card', d.type, d.slug],
    queryFn: () => fetchAudio(d.type, d.slug),
    enabled: false,
  });

  const firstClick = useRef(false);
  const {set} = useAudio();

  const select = useCallback(() => {
    if (!data) {
      return;
    }

    setSrc(data.audio);
    setArtwork(data.image);
    setAudioTitle(d.title);
    setAudioType(d.type);
    setAudioSlug(d.slug);
    set(data);
  }, [
    set,
    d,
    data,
    setSrc,
    setArtwork,
    setAudioTitle,
    setAudioType,
    setAudioSlug,
  ]);

  const [hasLoaded, setLoaded] = useState(typeof data !== 'undefined');
  useEffect(() => {
    if (!data || hasLoaded) {
      return;
    }

    setLoaded(true);
    select();
  }, [data, hasLoaded, setLoaded, select]);

  const [likes, setLikes] = useAtom(audioLikesAtom);
  const isLiked = useMemo(
    () => likes.find((a) => a.type === d.type && a.slug === d.slug),
    [d, likes],
  );

  const addLike = useCallback(() => {
    if (!data) {
      return;
    }

    console.log(likes);

    if (!isLiked) {
      setLikes((lks) => [...lks, data]);
      return;
    }

    setLikes((lks) =>
      lks.filter((a) => !(a.type === d.type && a.slug === d.slug)),
    );
  }, [likes, d, data, setLikes, isLiked]);

  const handleClick = useCallback(() => {
    (async () => {
      if (!firstClick.current) {
        firstClick.current = true;
        await refetch();
      }

      if (isLiked && isCurrent) {
        router.push('/');
        return;
      }

      if (isCurrent) {
        addLike();
        return;
      }

      select();
    })();
  }, [isLiked, isCurrent, select, refetch, router, addLike]);

  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <a
      className={clsx(styles.container, isFetching && styles.loading)}
      onMouseEnter={() => !isHover && setHover(true)}
      onMouseLeave={() => isHover && setHover(false)}
      onClick={handleClick}
    >
      <div className={clsx(styles.imageWrapper, isHover && styles.imageHover)}>
        <Image
          src={d.image}
          alt={d.title}
          width={120}
          height={120}
          onLoad={() => setImageLoaded(true)}
          style={{
            opacity: isImageLoaded ? 1 : 0,
            top: isImageLoaded ? 0 : '3px',
          }}
        />

        {(isCurrent || isHover) && (
          <Artwork
            url={d.image}
            freeze0={!isHover && !isCurrent}
            width={120 * 0.064}
            height={120 * 0.064}
          />
        )}
      </div>
      <div className={clsx('relative', styles.content)}>
        <h3>{d.title}</h3>

        <div className={styles.hits}>
          <TrendingUp />
          {d.hits.toString()}
          {d.hits % 2 === 0 ? <Snail /> : <Rabbit />}
          {d.hits.toString()}
        </div>

        {/* provider */}
        <Icon
          className={clsx(isCurrent && styles.rainbow)}
          icon={icon}
        />

        <div className={clsx(styles.like, isLiked && styles.liked)}>
          <Heart />
        </div>
      </div>
    </a>
  );
};
