import React from 'react'
import { Container } from './speed.component.styles'
import { useSpeedComponent } from './hooks'
import { PlayerSliderComponent } from '../player-slider'

/**
 * @returns {React.ReactElement} react component
 */
export function SpeedComponent () {

    const { value, onChange } = useSpeedComponent ()

    return (
        <>
            <Container>
                <PlayerSliderComponent
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