import React from 'react'
import { Container, Wrapper, InputTitle, InputValue } from './indicators.component.styles'
import { useIndicatorsComponent } from './hooks'

/**
 * @returns {React.ReactElement} react element
 */
export function IndicatorsComponent () {

    const { percentage, semitones } = useIndicatorsComponent ()

    return (
        <>
            <Container>
                <Wrapper>
                    <InputTitle title="percentage">
                        percent
                    </InputTitle>
                    <InputValue
                        disabled
                        aria-label="percentage value"
                        value={`${percentage} %`}
                    />
                </Wrapper>
                <Wrapper>
                    <InputTitle title="semitones">
                        semitone
                    </InputTitle>
                    <InputValue
                        disabled
                        aria-label="semitones value"
                        value={`${semitones} st`}
                    />
                </Wrapper>
            </Container>
        </>
    )

}