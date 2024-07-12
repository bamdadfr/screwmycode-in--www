import {
  addGap,
  addPaddings,
  addSquareWidths,
  centerFlex,
  maximize,
} from 'src/app/shared.styles';
import {mediaQueries} from 'src/app/styles/breakpoints';
import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: fixed;
  z-index: -1;

  ${centerFlex};
  ${addPaddings};
  ${maximize};
`;

export const PlayerContainer = styled.div`
  ${addPaddings};
  ${maximize};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlayerWrapper = styled.div`
  display: grid;
  ${addGap};
  align-items: center;
  ${addSquareWidths};

  svg {
    font-size: 2em;
  }

  * {
    display: flex;
    user-select: none;
  }

  grid-template-columns: 2em 2em 1fr 8em 2em 6em;

  ${mediaQueries.below.tablet} {
    font-size: 0.9em;
    grid-template-columns: 2em 2em 1fr 6em;
    gap: 0.25em;
  }
`;

export const PlayerButton = styled.button`
  touch-action: manipulation;
  transition: background 0.3s ease;

  &:hover {
    background: ${({theme}) => theme.shadow.opacity};
  }
`;

export const TitleWrapper = styled.span`
  grid-column-start: 1;
  grid-row-start: 1;
  white-space: nowrap;
  transform: translate3d(0.3em, 0.45em, 0);
`;

export const VolumeButtonWrapper = styled.span`
  grid-column-start: 5;
  grid-row-start: 1;
  z-index: 1;

  ${mediaQueries.below.tablet} {
    grid-column-start: 3;
    grid-row-start: 1;
    justify-self: flex-end;
  }
`;

export const VolumeSliderWrapper = styled.span`
  grid-column-start: 6;
  grid-row-start: 1;
  z-index: 1;

  ${mediaQueries.below.tablet} {
    grid-column-start: 4;
    grid-row-start: 1;
  }
`;

export const RepeatButtonWrapper = styled.span`
  grid-column-start: 1;
  grid-row-start: 2;
`;

export const PlayPauseButtonWrapper = styled.span`
  grid-column-start: 2;
  grid-row-start: 2;
`;

export const SeekWrapper = styled.span`
  grid-column-start: 3;
  grid-column-end: 6;
  grid-row-start: 2;

  ${mediaQueries.below.tablet} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
  }
`;

export const TimeWrapper = styled.span`
  grid-column-start: 6;
  grid-column-end: 7;
  grid-row-start: 2;
  justify-self: flex-end;

  ${mediaQueries.below.tablet} {
    grid-column-start: 4;
    grid-row-start: 2;
    justify-self: inherit;
  }
`;
