import React from 'react'
import { Container } from './time.component.styles'
import { calculateMinutes } from '../../../../utils/calculate-minutes/calculate-minutes'
import { useStore } from '../../../../store/use-store'

/**
 * @returns {React.ReactElement} react component
 */
export function TimeComponent () {

    const duration = useStore ((state) => state.duration)
    const progress = useStore ((state) => state.progress)

    return (
        <>
            <Container>
                <span>
                    {calculateMinutes (progress)}
                </span>
                &nbsp;/&nbsp;{calculateMinutes (duration)}
            </Container>
        </>
    )

}