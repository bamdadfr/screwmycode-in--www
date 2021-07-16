import React from 'react'
import { StyledContainer } from './indicators-component-styles'
import { useIndicatorsComponent } from './hooks'

/**
 * @returns {React.ReactElement} react element
 */
export function IndicatorsComponent () {

    const { percentage, semitones } = useIndicatorsComponent ()

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
                        value={percentage}
                    />
                </div>
                <div>
                    <span title="semitones">
                        semitone
                    </span>
                    <input
                        disabled
                        aria-label="semitones value"
                        value={semitones}
                    />
                </div>
            </StyledContainer>
        </>
    )

}