'use client';

import {ResizeObserver} from '@juggle/resize-observer';
import clsx from 'clsx';
import {useAtom} from 'jotai';
import {RotateCcw} from 'lucide-react';
import React, {useMemo} from 'react';
import useMeasure from 'react-use-measure';
import speedToPercentage from 'speed-to-percentage';
import speedToSemitones from 'speed-to-semitones';
import styles from 'src/app/page.module.scss';
import {ScrewShare} from 'src/components/_tomove/screw-share';
import {AppRange} from 'src/components/app/app-range';
import {AppLabel, AppValue} from 'src/components/app/app-value';
import {audioSpeedAtom} from 'src/components/app/hooks/audio-atoms';
import {Artwork} from 'src/components/artwork/artwork';
import {TEXTURE_SCALE} from 'src/constants';
import {useArtworkReset} from 'src/hooks/use-artwork-reset';
import {useCurrentMedia} from 'src/hooks/use-current-media';

export default function IndexPage() {
  const [ref, {width, height}] = useMeasure({polyfill: ResizeObserver});
  const [speed, setSpeed] = useAtom(audioSpeedAtom);
  const {currentMedia, imageUrl} = useCurrentMedia();
  const {reset} = useArtworkReset();

  const percentages = useMemo<string>(() => {
    return speedToPercentage(speed, 1);
  }, [speed]);

  const semitones = useMemo<string>(() => {
    return speedToSemitones(speed, 1);
  }, [speed]);

  if (!currentMedia) {
    return <></>;
  }

  return (
    <div
      ref={ref}
      className={clsx('flex', 'expand', styles.container)}
    >
      {imageUrl && (
        <Artwork
          url={imageUrl}
          width={width}
          height={height}
          scale={(TEXTURE_SCALE / (1.414 * 2)) * (width / height)}
        />
      )}
      <div className={clsx(styles.title)}>{currentMedia.title}</div>
      <div className={styles.controls}>
        <div className={clsx(styles.indicators)}>
          <AppLabel>percentages</AppLabel>
          <AppValue>{percentages}</AppValue>
          <AppLabel>semitones</AppLabel>
          <AppValue>{semitones}</AppValue>
        </div>

        <div className={styles.pitch}>
          <AppRange
            onChange={(newSpeed) => setSpeed(newSpeed)}
            value={speed}
            min={0.5}
            max={1.5}
            step={0.005}
            vertical
          />
        </div>
      </div>

      <div className={styles.share}>
        <ScrewShare scale={0.4} />
      </div>

      <div className={clsx(styles.reset)}>
        <button onClick={reset}>
          <RotateCcw />
        </button>
      </div>
    </div>
  );
}
