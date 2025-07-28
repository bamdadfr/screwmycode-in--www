import React, {type ReactElement} from 'react';
import {SliderComponent} from 'src/_old/components/slider/slider.component';
import styled from 'styled-components';

import {useSpeedComponent} from './hooks/use-speed-component';

interface Props {
  width: number;
}

const Container = styled.div<Props>`
  display: flex;
  width: ${(props) => props.width}px;
`;

export function SpeedComponent({width}: Props): ReactElement {
  const {value, onChange} = useSpeedComponent();

  return (
    <Container width={width}>
      <SliderComponent
        name="speed slider"
        min={0.5}
        max={1.5}
        step={0.005}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}
