import React from 'react'
import { StyledSlider, StyledContainer } from './slider-component-styles'
import { useSliderComponent } from './hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function SliderComponent () {

    const { value, onChange } = useSliderComponent ()

    return (
        <>
            <StyledContainer>
                <StyledSlider
                    type="range"
                    aria-label="slider"
                    min={0.5}
                    max={1.5}
                    step={0.005}
                    value={value}
                    onChange={onChange}
                />
            </StyledContainer>
        </>
    )

}