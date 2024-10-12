'use client';

import {ResizeObserver} from '@juggle/resize-observer';
import clsx from 'clsx';
import {useAtom} from 'jotai';
import {useAtomValue, useSetAtom} from 'jotai/index';
import {Lightbulb, RotateCcw} from 'lucide-react';
import React, {useCallback, useMemo, useState} from 'react';
import useMeasure from 'react-use-measure';
import speedToPercentage from 'speed-to-percentage';
import speedToSemitones from 'speed-to-semitones';
import styles from 'src/app/page.module.scss';
import {
  audioArtworkAtom,
  audioSpeedAtom,
  audioTitleAtom,
  textureResettingAtom,
} from 'src/atoms';
import {ScrewShare} from 'src/components/_tomove/ScrewShare';
import {AppRange} from 'src/components/app/AppRange';
import {AppLabel, AppValue} from 'src/components/app/AppValue';
import {Artwork} from 'src/components/artwork/Artwork';

const s = 0.013;

export default function IndexPage() {
  const [ref, {width, height}] = useMeasure({polyfill: ResizeObserver});
  const url = useAtomValue(audioArtworkAtom);
  const title = useAtomValue(audioTitleAtom);
  const [speed, setSpeed] = useAtom(audioSpeedAtom);
  const setResetting = useSetAtom(textureResettingAtom);

  const percentages = useMemo<string>(() => {
    return speedToPercentage(speed, 1);
  }, [speed]);

  const semitones = useMemo<string>(() => {
    return speedToSemitones(speed, 1);
  }, [speed]);

  const [light, setLight] = useState<boolean>(false);
  const toggleLight = useCallback(() => setLight((l) => !l), []);

  const reset = () => {
    setResetting(true);
  };

  if (url === null) {
    return <></>;
  }

  return (
    <div
      ref={ref}
      className={clsx('flex', 'expand', styles.container)}
    >
      <Artwork
        url={url}
        width={width * s}
        height={height * s}
      />
      <div className={clsx(styles.title, light && styles.light)}>{title}</div>
      <div className={styles.controls}>
        <div className={clsx(styles.indicators, light && styles.light)}>
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
      <div className={clsx(styles.reset, light && styles.light)}>
        <button onClick={reset}>
          <RotateCcw />
        </button>
      </div>
      <div className={clsx(styles.toggleLight, light && styles.light)}>
        <button onClick={toggleLight}>
          <Lightbulb />
        </button>
      </div>
    </div>
  );
}
