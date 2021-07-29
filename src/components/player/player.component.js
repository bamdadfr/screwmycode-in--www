import React from 'react'
import { Icon } from '@iconify/react'
import repeat from '@iconify/icons-mdi/repeat'
import play from '@iconify/icons-mdi/play'
import volumeHigh from '@iconify/icons-mdi/volume-high'
import { SliderComponent } from '../../modules/audio/components'
import { Button, Container, Time } from './player.component.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function PlayerComponent () {

    return (
        <>
            <Container>

                <Button>
                    <Icon icon={repeat}/>
                </Button>

                <Button>
                    <Icon icon={play}/>
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

                <SliderComponent/>

            </Container>
        </>
    )

}