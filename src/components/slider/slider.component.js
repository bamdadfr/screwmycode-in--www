import React from 'react';
import PropTypes from 'prop-types';
import { Input } from './slider.component.styles';

const propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

/**
 * Component for a slider
 *
 * @param {object} props - Component props
 * @param {number} props.min - Minimum value of the slider
 * @param {number} props.max - Maximum value of the slider
 * @param {number} props.step - Step value of the slider
 * @param {number} props.value - Current value of the slider
 * @param {Function<undefined>} props.onChange - Callback function to be called when the slider value changes
 * @param {string} props.name - Name of the slider
 * @returns {React.ReactElement} - Rendered component
 */
export function SliderComponent ({
  min,
  max,
  step,
  value,
  onChange,
  name,
}) {
  return (
    <>
      <Input
        type="range"
        title={name}
        aria-label={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

SliderComponent.propTypes = propTypes;
