'use client';

import {ResizeObserver} from '@juggle/resize-observer';
import clsx from 'clsx';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {Pause, Play, RefreshCw, RefreshCwOff, SkipBack} from 'lucide-react';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import useMeasure from 'react-use-measure';
import styles from 'src/components/app/app-footer.module.scss';
import {AppRange} from 'src/components/app/app-range';
import {
  audioBufferAtom,
  audioDurationAtom,
  audioIsLoadingAtom,
  audioIsPlayingAtom,
  audioIsRepeatAtom,
  audioProgressAtom,
  audioSeekAtom,
  audioVolumeAtom,
} from 'src/components/app/hooks/audio-atoms';
import {LikeButton} from 'src/components/like-button/like-button';
import {useCurrentMedia} from 'src/hooks/use-current-media';
import {useMobile} from 'src/hooks/use-mobile';
import {calculateMinutes} from 'src/utils/time';

export const AppFooter = () => {
  const isLoading = useAtomValue(audioIsLoadingAtom);

  return (
    <footer className={clsx(styles.footer, isLoading && styles.loading)}>
      <FooterImage />
      <div className={styles.player}>
        <FooterTransport />
        <FooterVolume />
      </div>
    </footer>
  );
};

const FooterTransport = () => {
  const [isPlaying, setIsPlaying] = useAtom(audioIsPlayingAtom);
  const [isRepeat, setIsRepeat] = useAtom(audioIsRepeatAtom);
  const progress = useAtomValue(audioProgressAtom);
  const buffer = useAtomValue(audioBufferAtom);
  const setSeek = useSetAtom(audioSeekAtom);
  const {currentMedia} = useCurrentMedia();
  const {isMobileOrTablet} = useMobile();

  const progressMinutes = useMemo(() => calculateMinutes(progress), [progress]);
  const bufferedMinutes = useMemo(() => calculateMinutes(buffer), [buffer]);
  const totalMinutes = useMemo(() => calculateMinutes(buffer), [buffer]);

  const previous = useCallback(() => setSeek(0), [setSeek]);

  return (
    <div className={clsx(styles.transport)}>
      <div>
        <div>
          <span className={styles.singleLine}>{currentMedia?.title}</span>
          <span className={styles.likeContainer}>
            {currentMedia && <LikeButton media={currentMedia} />}
          </span>
          <span>{progressMinutes}</span>
        </div>
        <div>
          <span>{!isMobileOrTablet && bufferedMinutes}</span>
          <span>{totalMinutes}</span>
        </div>
      </div>

      <div className={clsx(styles.buttons)}>
        <button className={clsx(styles.button)}>
          <SkipBack onClick={previous} />
        </button>

        <button className={clsx(styles.button)}>
          {isPlaying ? (
            <Pause onClick={() => setIsPlaying(false)} />
          ) : (
            <Play onClick={() => setIsPlaying(true)} />
          )}
        </button>

        <button className={clsx(styles.button)}>
          {isRepeat ? (
            <RefreshCw onClick={() => setIsRepeat(false)} />
          ) : (
            <RefreshCwOff onClick={() => setIsRepeat(true)} />
          )}
        </button>
      </div>

      <FooterTrack />
    </div>
  );
};

const FooterTrack = () => {
  const progress = useAtomValue(audioProgressAtom);
  const buffer = useAtomValue(audioBufferAtom);
  const setSeek = useSetAtom(audioSeekAtom);
  const duration = useAtomValue(audioDurationAtom);

  const updateSeek = useCallback(
    (position: number) => {
      if (position > buffer - 1) {
        return;
      }

      setSeek(position);
    },
    [buffer, setSeek],
  );

  return (
    <AppRange
      min={0}
      max={duration}
      step={1}
      value={progress}
      buffered={buffer}
      onChange={updateSeek}
    />
  );
};

const FooterImage = () => {
  const {imageUrl} = useCurrentMedia();
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  if (!imageUrl) {
    return <span />;
  }

  return (
    <Link
      href="/"
      ref={ref}
      className={styles.artwork}
    >
      <img
        alt="artwork"
        src={imageUrl}
        width={width}
        height={width}
      />
    </Link>
  );
};

const FooterVolume = () => {
  const [volume, setVolume] = useAtom(audioVolumeAtom);

  return (
    <div className={styles.volume}>
      <AppRange
        onChange={(v) => setVolume(v)}
        value={volume}
        vertical
      />
    </div>
  );
};
