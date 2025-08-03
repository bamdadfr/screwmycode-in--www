'use client';

import {ResizeObserver} from '@juggle/resize-observer';
import clsx from 'clsx';
import {atom, useAtom} from 'jotai';
import {RotateCcw} from 'lucide-react';
import React, {useCallback, useEffect, useMemo} from 'react';
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
import {useToken} from 'src/hooks/use-token';
import {createMedia} from 'src/utils';

const isFirstLoadAtom = atom<boolean>(true);

export default function IndexPage() {
  const [ref, {width, height}] = useMeasure({polyfill: ResizeObserver});
  const [speed, setSpeed] = useAtom(audioSpeedAtom);
  const {currentMedia, imageUrl, update} = useCurrentMedia();
  const {reset} = useArtworkReset();
  const [isFirstLoad, setIsFirstLoad] = useAtom(isFirstLoadAtom);
  const {token} = useToken();

  const percentages = useMemo<string>(() => {
    return speedToPercentage(speed, 1);
  }, [speed]);

  const semitones = useMemo<string>(() => {
    return speedToSemitones(speed, 1);
  }, [speed]);

  useEffect(() => {
    if (!isFirstLoad || !token) {
      return;
    }

    setIsFirstLoad(false);

    const currentParams = new URLSearchParams(window.location.search);
    const mediaString = currentParams.get('media');
    const speedString = currentParams.get('speed');

    if (!mediaString) {
      return;
    }

    createMedia(token, mediaString).then((media) => {
      update(media).then(() => {
        if (!speedString) {
          return;
        }

        const s = Number(speedString);
        setSpeed(s);
      });
    });
  }, [isFirstLoad, setIsFirstLoad, setSpeed, token, update]);

  useEffect(() => {
    if (!currentMedia) {
      return;
    }

    const params = new URLSearchParams();
    params.append('media', currentMedia.url);
    params.append('speed', speed.toString());
    const queryString = params.toString();
    const newUrl = window.location.pathname + '?' + queryString;
    window.history.pushState({}, '', newUrl);
  }, [currentMedia, speed]);

  const handleShare = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      console.log('copied');
    });
  }, []);

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

      <div
        className={styles.share}
        onClick={handleShare}
      >
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
