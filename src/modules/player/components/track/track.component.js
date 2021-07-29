import React from 'react'
import { Icon } from '@iconify/react'
import play from '@iconify/icons-mdi/play'
import repeat from '@iconify/icons-mdi/repeat'
import volumeHigh from '@iconify/icons-mdi/volume-high'
import { Container, Button, Time } from './track.component.styles'
import { SliderNewComponent } from '../slider-new'

/**
 * @returns {React.ReactElement} react component
 */
export function TrackComponent () {

    return (
        <>
            <Container>

                <Button>
                    <Icon icon={repeat}/>
                </Button>

                <Button>
                    <Icon icon={play}/>
                </Button>

                <SliderNewComponent/>

                <Time>
                    <span>
                        00:00
                    </span>
                    &nbsp;/&nbsp;08:30
                </Time>

                <Button>
                    <Icon icon={volumeHigh}/>
                </Button>

                <SliderNewComponent/>

            </Container>
        </>
    )

}