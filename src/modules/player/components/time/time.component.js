import React from 'react'
import { Container } from './time.component.styles'
import { calculateMinutes } from '../../../../utils'
import { useStore } from '../../../../store'

/**
 * @returns {React.ReactElement} react component
 */
export function TimeComponent () {

    const duration = useStore ((state) => state.duration)
    const seek = useStore ((state) => state.seek)

    return (
        <>
            <Container>
                <span>
                    {calculateMinutes (seek)}
                </span>
                &nbsp;/&nbsp;{duration}
            </Container>
        </>
    )

}