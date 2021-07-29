import React from 'react'
import { Slider, Container } from './speed.component.styles'
import { useSpeedComponent } from './hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function SpeedComponent () {

    const { value, onChange } = useSpeedComponent ()

    return (
        <>
            <Container>
                <Slider
                    type="range"
                    aria-label="slider"
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