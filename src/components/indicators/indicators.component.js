import React from 'react'
import { Container } from './indicators.component.styles'
import { useIndicatorsComponent } from './hooks'
import { IndicatorComponent } from './components'

/**
 * @returns {React.ReactElement} react element
 */
export function IndicatorsComponent () {

    const { percentage, semitones } = useIndicatorsComponent ()

    return (
        <>
            <Container>
                <IndicatorComponent
                    title="percent"
                    metaName="percentage"
                    value={`${percentage} %`}
                />
                <IndicatorComponent
                    title="semitone"
                    metaName="semitones"
                    value={`${semitones} st`}
                />
            </Container>
        </>
    )

}