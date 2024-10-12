'use client';

import {ResizeObserver} from '@juggle/resize-observer';
import clsx from 'clsx';
import {Pause, Play, RefreshCw, RefreshCwOff, SkipBack} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import useMeasure from 'react-use-measure';
import styles from 'src/components/app/app-footer.module.scss';
import {AppRange} from 'src/components/app/app-range';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {useCurrentItem} from 'src/hooks/use-current-item';
import {calculateMinutes} from 'src/utils/time';

export const AppFooter = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <FooterImage />
      <div className={styles.player}>
        <FooterTransport />
        <FooterVolume />
      </div>
    </footer>
  );
};

const FooterTransport = () => {
  const {
    isRepeat,
    setIsRepeat,
    progress,
    buffer,
    setSeek,
    isPlaying,
    setIsPlaying,
  } = useAudioState();
  const {currentItem} = useCurrentItem();

  const progressMinutes = useMemo(() => calculateMinutes(progress), [progress]);
  const bufferedMinutes = useMemo(() => calculateMinutes(buffer), [buffer]);
  const totalMinutes = useMemo(() => calculateMinutes(buffer), [buffer]);

  const previous = useCallback(() => setSeek(0), [setSeek]);

  return (
    <div className={clsx(styles.transport)}>
      <div>
        <div>
          <span>{currentItem?.title}</span>
          <span>{progressMinutes}</span>
        </div>
        <div>
          <span>{bufferedMinutes}</span>
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
  const {duration, progress, buffer, setSeek} = useAudioState();

  const handleSeek = useCallback(
    (position: number) => {
      if (position > buffer) {
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
      onChange={handleSeek}
    />
  );
};

const FooterImage = () => {
  const {imageUrl} = useCurrentItem();
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
      <Image
        alt="artwork"
        src={imageUrl}
        width={width}
        height={width}
      />
    </Link>
  );
};

const FooterVolume = () => {
  const {volume, setVolume} = useAudioState();

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
