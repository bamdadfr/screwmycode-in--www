import React from 'react'
import { Icon } from '@iconify/react'
import repeat from '@iconify/icons-mdi/repeat'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import { Button } from '../../player.module.styles'
import { useStore } from '../../../../store'

/**
 * @returns {React.ReactElement} react component
 */
export function RepeatButtonComponent () {

    const isRepeat = useStore ((state) => state.isRepeat)
    const toggleRepeat = useStore ((state) => state.toggleRepeat)

    return (
        <>
            <Button onClick={toggleRepeat}>
                {isRepeat
                    ? <Icon icon={repeat}/>
                    : <Icon icon={repeatOff}/>
                }
            </Button>
        </>
    )

}