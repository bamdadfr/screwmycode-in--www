import React from 'react';
import {Container, PlayerContainer} from './player.module.styles';
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

/**
 * Component to render the player.
 *
 * @returns {React.ReactElement} - Player component
 */
export function PlayerModule() {
  return (
    <>
      <Container>
        <ArtworkComponent />
        <PlayerContainer>
          <TitleComponent />
          <RepeatButtonComponent />
          <PlayPauseButtonComponent />
          <SeekComponent />
          <TimeComponent />
          <VolumeButtonComponent />
          <VolumeSliderComponent />
        </PlayerContainer>
      </Container>
    </>
  );
}
