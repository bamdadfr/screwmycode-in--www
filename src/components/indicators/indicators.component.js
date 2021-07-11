import React from 'react'
import speedToPercentage from 'speed-to-percentage'
import speedToSemitones from 'speed-to-semitones'
import { StyledContainer } from './indicators.styles'

/**
 * @function
 * @name IndicatorsComponent
 * @description indicators
 * @param {*} props - props
 * @param {number} props.value - value
 * @returns {React.ReactElement} - react element
 */
export default function IndicatorsComponent ({ value = 1 }) {

    return (
        <>
            <StyledContainer>
                <div>
                    <span title="percentage">
                        percent
                    </span>
                    <input
                        disabled
                        aria-label="percentage value"
                        value={speedToPercentage (value, 1)}
                    />
                </div>
                <div>
                    <span title="semitones">
                        semitone
                    </span>
                    <input
                        disabled
                        aria-label="semitones value"
                        value={speedToSemitones (value, 1).toString ()}
                    />
                </div>
            </StyledContainer>
        </>
    )

}