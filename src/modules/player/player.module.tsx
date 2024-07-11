import React, {ReactElement} from 'react';
import {IndicatorsComponent} from 'src/components/indicators/indicators.component';

import {ArtworkComponent} from './components/artwork/artwork.component';
import {PlayPauseButtonComponent} from './components/play-pause-button/play-pause-button.component';
import {RepeatButtonComponent} from './components/repeat-button/repeat-button.component';
import {SeekComponent} from './components/seek/seek.component';
import {SpeedComponent} from './components/speed/speed.component';
import {TimeComponent} from './components/time/time.component';
import {TitleComponent} from './components/title/title.component';
import {VolumeButtonComponent} from './components/volume-button/volume-button.component';
import {VolumeSliderComponent} from './components/volume-slider/volume-slider.component';
import {
  Container,
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
    <Container>
      <ArtworkComponent />

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
    </Container>
  );
}
