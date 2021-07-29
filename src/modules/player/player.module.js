import React from 'react'
import PropTypes from 'prop-types'
import { isFirefox } from 'react-device-detect'
import { Icon } from '@iconify/react'
import repeat from '@iconify/icons-mdi/repeat'
import play from '@iconify/icons-mdi/play'
import volumeHigh from '@iconify/icons-mdi/volume-high'
import { AudioComponent, AudioHowlerComponent, SliderComponent } from './components'
import { usePlayerModule } from './hooks'
import { Invisible, Container, Button, Time } from './player.module.styles'

const propTypes = {
    'url': PropTypes.string.isRequired,
}

/**
 * @typedef {string} Url
 * @param {{Url}} props react props
 * @returns {React.ReactElement} react component
 */
export function PlayerModule ({ url }) {

    usePlayerModule ()

    return (
        <>
            <Invisible>
                {isFirefox
                    ? <AudioComponent url={url}/>
                    : <AudioHowlerComponent url={url}/>
                }
            </Invisible>

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

PlayerModule.propTypes = propTypes