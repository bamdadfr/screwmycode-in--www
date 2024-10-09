import {ResizeObserver} from '@juggle/resize-observer';
import React, {useEffect, useMemo} from 'react';
import useMeasure from 'react-use-measure';
import {p} from 'src/app/shared.styles';
import {IndicatorsComponent} from 'src/components/indicators/indicators.component';
import {LoadingComponent} from 'src/components/loading/loading.component';
import {useAudioPlayerContext} from 'src/contexts/audio-player-context';
import {WebGlComponent} from 'src/modules/player/components/artwork/web-gl.component';

import {PlayPauseButtonComponent} from './components/play-pause-button/play-pause-button.component';
import {RepeatButtonComponent} from './components/repeat-button/repeat-button.component';
import {SeekComponent} from './components/seek/seek.component';
import {SpeedComponent} from './components/speed/speed.component';
import {TimeComponent} from './components/time/time.component';
import {TitleComponent} from './components/title/title.component';
import {VolumeButtonComponent} from './components/volume-button/volume-button.component';
import {VolumeSliderComponent} from './components/volume-slider/volume-slider.component';
import {
  ImageContainer,
  PlayerContainer,
  PlayerWrapper,
  PlayPauseButtonWrapper,
  RepeatButtonWrapper,
  SeekWrapper,
  TimeWrapper,
  TitleWrapper,
  VolumeButtonWrapper,
  VolumeSliderWrapper,
} from './player.module.styles';

interface Props {
  title: string;
  artwork: string;
}

export function PlayerModule({title, artwork}: Props) {
  const [ref, {width}] = useMeasure({polyfill: ResizeObserver});
  const imageWidth = useMemo(() => width - p * 4, [width]);
  const playerWidth = useMemo(() => width - p * 6, [width]);
  const {isReady, setTitle, setArtwork} = useAudioPlayerContext();

  useEffect(() => {
    setTitle(title);
    setArtwork(artwork);
  }, [title, setTitle, artwork, setArtwork]);

  if (!isReady) {
    return <LoadingComponent />;
  }

  return (
    <>
      <ImageContainer ref={ref}>
        <WebGlComponent width={imageWidth} />
      </ImageContainer>

      <PlayerContainer>
        <PlayerWrapper width={playerWidth}>
          <TitleWrapper>
            <TitleComponent />
          </TitleWrapper>
          <RepeatButtonWrapper>
            <RepeatButtonComponent />
          </RepeatButtonWrapper>
          <PlayPauseButtonWrapper>
            <PlayPauseButtonComponent />
          </PlayPauseButtonWrapper>
          <SeekWrapper>
            <SeekComponent />
          </SeekWrapper>
          <TimeWrapper>
            <TimeComponent />
          </TimeWrapper>
          <VolumeButtonWrapper>
            <VolumeButtonComponent />
          </VolumeButtonWrapper>
          <VolumeSliderWrapper>
            <VolumeSliderComponent />
          </VolumeSliderWrapper>
        </PlayerWrapper>

        <IndicatorsComponent />

        <SpeedComponent width={playerWidth} />
      </PlayerContainer>
    </>
  );
}
