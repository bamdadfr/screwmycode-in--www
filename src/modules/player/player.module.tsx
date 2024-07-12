import React, {ReactElement} from 'react';
import {isDesktop} from 'react-device-detect';
import {IndicatorsComponent} from 'src/components/indicators/indicators.component';
import {NativeComponent} from 'src/modules/player/components/artwork/native.component';
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

/**
 * Component to render the player.
 */
export function PlayerModule(): ReactElement {
  return (
    <>
      <ImageContainer>
        {isDesktop ? <WebGlComponent /> : <NativeComponent />}
      </ImageContainer>

      <PlayerContainer>
        <PlayerWrapper>
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
        <SpeedComponent />
      </PlayerContainer>
    </>
  );
}
