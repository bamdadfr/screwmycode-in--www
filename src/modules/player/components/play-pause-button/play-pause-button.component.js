import React from 'react'
import { Icon } from '@iconify/react'
import pause from '@iconify/icons-mdi/pause'
import play from '@iconify/icons-mdi/play'
import { Button } from '../../player.module.styles'
import { useStore } from '../../../../store'

/**
 * @returns {React.ReactElement} react component
 */
export function PlayPauseButtonComponent () {

    const isPlaying = useStore ((state) => state.isPlaying)
    const togglePlayPause = useStore ((state) => state.togglePlayPause)

    return (
        <>
            <Button
                onClick={togglePlayPause}
                aria-label={(isPlaying ? 'pause' : 'play')}
            >
                {isPlaying
                    ? <Icon icon={pause}/>
                    : <Icon icon={play}/>
                }
            </Button>
        </>
    )

}