import React from 'react'
import PropTypes from 'prop-types'
import { Input } from './slider.component.styles'

const propTypes = {
    'min': PropTypes.number.isRequired,
    'max': PropTypes.number.isRequired,
    'step': PropTypes.number.isRequired,
    'value': PropTypes.number.isRequired,
    'onChange': PropTypes.func.isRequired,
}

/**
 * @param {object} props react props
 * @param {number} props.min slider min
 * @param {number} props.max slider max
 * @param {number} props.step slider step
 * @param {number} props.value slider value
 * @param {Function} props.onChange slider onChange handler function
 * @returns {React.ReactElement} react component
 */
export function SliderComponent ({
    min,
    max,
    step,
    value,
    onChange,
}) {

    return (
        <>
            <Input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
            />
        </>
    )

}

SliderComponent.propTypes = propTypes