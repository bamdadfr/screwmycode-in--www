import React from 'react'
import PropTypes from 'prop-types'
import { InputTitle, InputValue, Wrapper } from './indicator.component.styles'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'value': PropTypes.string.isRequired,
    'metaName': PropTypes.string.isRequired,
}

/**
 * @param {object} props react props
 * @param {string} props.title indicator title
 * @param {string} props.value indicator value
 * @param {string} props.metaName indicator meta name
 * @returns {React.ReactElement} react component
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
    )

}

IndicatorComponent.propTypes = propTypes