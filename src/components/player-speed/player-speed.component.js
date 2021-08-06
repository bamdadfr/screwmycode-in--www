import React from 'react'
import { Container } from './player-speed.component.styles'
import { usePlayerSpeedComponent } from './hooks/use-player-speed-component'
import { SliderComponent } from '../slider/slider.component'

/**
 * @returns {React.ReactElement} react component
 */
export function PlayerSpeedComponent () {

    const { value, onChange } = usePlayerSpeedComponent ()

    return (
        <>
            <Container>
                <SliderComponent
                    name="speed slider"
                    min={0.5}
                    max={1.5}
                    step={0.005}
                    value={value}
                    onChange={onChange}
                />
            </Container>
        </>
    )

}