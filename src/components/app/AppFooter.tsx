'use client';

import {ResizeObserver} from '@juggle/resize-observer';
import clsx from 'clsx';
import {useAtomValue, useSetAtom} from 'jotai';
import {useAtom} from 'jotai/index';
import {Pause, Play, RefreshCw, RefreshCwOff, SkipBack} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {useCallback, useMemo} from 'react';
import useMeasure from 'react-use-measure';
import {calculateMinutes} from 'src/_old/utils/calculate-minutes/calculate-minutes';
import {
  audioArtworkAtom,
  audioBufferAtom,
  audioDurationAtom,
  audioPlayingAtom,
  audioProgressAtom,
  audioRepeatingAtom,
  audioSeekAtom,
  audioTitleAtom,
  audioVolumeAtom,
} from 'src/atoms';
import {AppRange} from 'src/components/app/AppRange';

import styles from './AppFooter.module.scss';

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
  const progress = useAtomValue(audioProgressAtom);
  const buffer = useAtomValue(audioBufferAtom);
  const [isPlaying, setPlaying] = useAtom(audioPlayingAtom);
  const [isRepeating, setRepeating] = useAtom(audioRepeatingAtom);
  const setSeek = useSetAtom(audioSeekAtom);
  const audioTitle = useAtomValue(audioTitleAtom);

  const progressMinutes = useMemo(() => calculateMinutes(progress), [progress]);
  const bufferedMinutes = useMemo(() => calculateMinutes(buffer), [buffer]);
  const totalMinutes = useMemo(() => calculateMinutes(buffer), [buffer]);

  const previous = useCallback(() => setSeek(0), [setSeek]);
  const play = useCallback(() => setPlaying(true), [setPlaying]);
  const pause = useCallback(() => setPlaying(false), [setPlaying]);
  const repeatOn = useCallback(() => setRepeating(true), [setRepeating]);
  const repeatOff = useCallback(() => setRepeating(false), [setRepeating]);

  return (
    <div className={clsx(styles.transport)}>
      <div>
        <div>
          <span>{audioTitle}</span>
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
          {isPlaying ? <Pause onClick={pause} /> : <Play onClick={play} />}
        </button>

        <button className={clsx(styles.button)}>
          {isRepeating ? (
            <RefreshCw onClick={repeatOff} />
          ) : (
            <RefreshCwOff onClick={repeatOn} />
          )}
        </button>
      </div>

      <FooterTrack />
    </div>
  );
};

const FooterTrack = () => {
  const duration = useAtomValue(audioDurationAtom);
  const progress = useAtomValue(audioProgressAtom);
  const buffered = useAtomValue(audioBufferAtom);
  const setSeek = useSetAtom(audioSeekAtom);

  const handleSeek = useCallback(
    (position: number) => {
      if (position > buffered) {
        return;
      }

      setSeek(position);
    },
    [buffered, setSeek],
  );

  return (
    <AppRange
      min={0}
      max={duration}
      step={1}
      value={progress}
      buffered={buffered}
      onChange={handleSeek}
    />
  );
};

const FooterImage = () => {
  const url = useAtomValue(audioArtworkAtom);
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});

  if (url === null) {
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
        src={url}
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
