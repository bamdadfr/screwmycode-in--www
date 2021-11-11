import React from 'react';
import PropTypes from 'prop-types';
import { InputTitle, InputValue, Wrapper } from './indicator.component.styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  metaName: PropTypes.string.isRequired,
};

/**
 * Component for displaying indicator
 *
 * @param {object} props - Component props
 * @param {string} props.title - Indicator title
 * @param {string} props.value - Indicator value
 * @param {string} props.metaName - Indicator meta name
 * @returns {React.ReactElement} - Rendered component
 */
export function IndicatorComponent ({
  title,
  value,
  metaName,
}) {
  return (
    <>
      <Wrapper>
        <InputTitle title={metaName}>
          {title}
        </InputTitle>
        <InputValue
          disabled
          aria-label={metaName}
          value={value}
        />
      </Wrapper>
    </>
  );
}

IndicatorComponent.propTypes = propTypes;
