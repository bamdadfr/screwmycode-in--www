import React, {ReactElement} from 'react';
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
import {TitleComponent} from './components/title/title.component';
import {
  RepeatButtonComponent,
} from './components/repeat-button/repeat-button.component';
import {
  PlayPauseButtonComponent,
} from './components/play-pause-button/play-pause-button.component';
import {SeekComponent} from './components/seek/seek.component';
import {TimeComponent} from './components/time/time.component';
import {
  VolumeButtonComponent,
} from './components/volume-button/volume-button.component';
import {
  VolumeSliderComponent,
} from './components/volume-slider/volume-slider.component';
import {ArtworkComponent} from './components/artwork/artwork.component';
import {
  IndicatorsComponent,
} from '../../components/indicators/indicators.component';
import {SpeedComponent} from './components/speed/speed.component';

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
