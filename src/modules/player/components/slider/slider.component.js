import React from 'react'
import { Slider, Container } from './slider.component.styles'
import { useSliderComponent } from './hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function SliderComponent () {

    const { value, onChange } = useSliderComponent ()

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