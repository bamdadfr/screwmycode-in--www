import React from 'react'
import { Container } from './player.module.styles'
import {
    PlayPauseButtonComponent, RepeatButtonComponent,
    SeekComponent,
    TimeComponent, TitleComponent,
    VolumeButtonComponent,
    VolumeSliderComponent,
} from './components'

/**
 * @returns {React.ReactElement} react component
 */
export function PlayerModule () {

    return (
        <>
            <Container>
                <TitleComponent/>
                <RepeatButtonComponent/>
                <PlayPauseButtonComponent/>
                <SeekComponent/>
                <TimeComponent/>
                <VolumeButtonComponent/>
                <VolumeSliderComponent/>
            </Container>
        </>
    )

}