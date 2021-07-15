import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledSlider, StyledContainer } from './slider.styles'

const propTypes = {
    'value': PropTypes.number.isRequired,
    'handleValue': PropTypes.func.isRequired,
}

/**
 * @function
 * @name SliderComponent
 * @description component: slider
 * @param {object} props - props
 * @param {number} props.value - default value
 * @param {Function} props.handleValue - function from HOC
 * @returns {React.ReactElement} - react component
 */
export function SliderComponent ({ 'value': valueFromProps, handleValue }) {

    const [value, setValue] = useState (valueFromProps.toString ())

    /**
     * @function
     * @name onValue
     * @description pass value to the handler
     */
    function onValue () {

        handleValue (value)

    }

    useEffect (onValue, [value])

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
                    onChange={(e) => setValue (e.target.value)}
                />
            </StyledContainer>
        </>
    )

}

SliderComponent.propTypes = propTypes