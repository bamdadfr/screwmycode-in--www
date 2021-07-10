import React from 'react'
import { useRecoilValue } from 'recoil'
import speedToPercentage from 'speed-to-percentage'
import speedToSemitones from 'speed-to-semitones'
import { speedAtom } from '../../atoms/speed.atom'
import { StyledContainer } from './indicators.styles'

/**
 * @function
 * @name IndicatorsComponent
 * @description indicators
 * @returns {React.ReactElement} - react element
 */
export default function IndicatorsComponent () {

    const speed = useRecoilValue (speedAtom)

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
                        value={speedToPercentage (speed, 1)}
                    />
                </div>
                <div>
                    <span title="semitones">
                        semitone
                    </span>
                    <input
                        disabled
                        aria-label="semitones value"
                        value={speedToSemitones (speed, 1).toString ()}
                    />
                </div>
            </StyledContainer>
        </>
    )

}