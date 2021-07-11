import React from 'react'
import { StyledSlider, StyledContainer } from './slider.styles'

/**
 * @function
 * @name SliderComponent
 * @description component: slider
 * @param {*} props - props
 * @param {number} props.value - default value
 * @param {Function} props.handleValue - function from HOC
 * @returns {React.ReactElement} - react component
 */
export default function SliderComponent ({ value, handleValue }) {

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
                    onChange={(e) => handleValue (e.target.value)}
                />
            </StyledContainer>
        </>
    )

}