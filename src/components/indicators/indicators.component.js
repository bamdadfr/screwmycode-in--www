import React from 'react'
import { useRecoilValue } from 'recoil'
import speedToPercentage from 'speed-to-percentage'
import speedToSemitones from 'speed-to-semitones'
import { audioSpeedAtom } from '../../atoms/audio-speed.atom'
import { StyledContainer, StyledTitle, StyledValue } from './indicators.styles'

/**
 * @function
 * @name IndicatorsComponent
 * @description indicators
 * @returns {React.ReactElement} - react element
 */
export default function IndicatorsComponent () {

    const speed = useRecoilValue (audioSpeedAtom)

    return (
        <>
            <StyledContainer>
                <div>
                    <StyledTitle
                        aria-label="percentage title"
                    >
                        percent
                    </StyledTitle>
                    <StyledValue
                        aria-label="percentage value"
                    >
                        {speedToPercentage (speed, 1).toString ()}
                    </StyledValue>
                </div>
                <div>
                    <StyledTitle
                        aria-label="semitones title"
                    >
                        semitone
                    </StyledTitle>
                    <StyledValue
                        aria-label="semitones value"
                    >
                        {speedToSemitones (speed, 1).toString ()}
                    </StyledValue>
                </div>
            </StyledContainer>
        </>
    )

}