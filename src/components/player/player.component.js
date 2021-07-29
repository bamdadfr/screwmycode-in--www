import React from 'react'
import { Icon } from '@iconify/react'
import repeat from '@iconify/icons-mdi/repeat'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import play from '@iconify/icons-mdi/play'
import pause from '@iconify/icons-mdi/pause'
import volumeHigh from '@iconify/icons-mdi/volume-high'
import volumeOff from '@iconify/icons-mdi/volume-off'
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
    const isMuted = useStore ((state) => state.isMuted)

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

                <SliderComponent
                    min={0}
                    max={0}
                    value={volume}
                />

                <Time>
                    <span>
                        00:00
                    </span>
                    &nbsp;/&nbsp;08:30
                </Time>

                <Button>
                    {volume === 0 || isMuted
                        ? <Icon icon={volumeOff}/>
                        : <Icon icon={volumeHigh}/>
                    }
                </Button>

                <SliderComponent
                    min={0}
                    max={1}
                    value={volume}
                />

            </Container>
        </>
    )

}