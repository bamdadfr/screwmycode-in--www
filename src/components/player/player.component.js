import React from 'react'
import { Icon } from '@iconify/react'
import repeat from '@iconify/icons-mdi/repeat'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import play from '@iconify/icons-mdi/play'
import pause from '@iconify/icons-mdi/pause'
import volumeHigh from '@iconify/icons-mdi/volume-high'
import { SliderComponent } from '../slider'
import { Button, Container, Time } from './player.component.styles'
import { useStore } from '../../store'

/**
 * @returns {React.ReactElement} react component
 */
export function PlayerComponent () {

    const isRepeat = useStore ((state) => state.isRepeat)
    const toggleRepeat = useStore ((state) => state.toggleRepeat)
    const isPlaying = useStore ((state) => state.isPlaying)
    const togglePlayPause = useStore ((state) => state.togglePlayPause)
    const volume = useStore ((state) => state.volume)

    return (
        <>
            <Container>

                <Button onClick={toggleRepeat}>
                    {isRepeat
                        ? <Icon icon={repeat}/>
                        : <Icon icon={repeatOff}/>
                    }
                </Button>

                <Button onClick={togglePlayPause}>
                    {isPlaying
                        ? <Icon icon={pause}/>
                        : <Icon icon={play}/>
                    }
                </Button>

                <SliderComponent/>

                <Time>
                    <span>
                        00:00
                    </span>
                    &nbsp;/&nbsp;08:30
                </Time>

                <Button>
                    <Icon icon={volumeHigh}/>
                </Button>

                <div>
                    {volume}
                    <SliderComponent/>
                </div>

            </Container>
        </>
    )

}