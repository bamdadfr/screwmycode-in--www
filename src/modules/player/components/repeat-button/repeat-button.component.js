import React from 'react'
import { Icon } from '@iconify/react'
import repeat from '@iconify/icons-mdi/repeat'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import { useAtom } from 'jotai'
import { Button } from '../../player.module.styles'
import { isRepeatingAtom, toggleRepeatingAtom } from '../../../../atoms/repeat.atoms'

/**
 * @returns {React.ReactElement} react component
 */
export function RepeatButtonComponent () {

    const [isRepeating] = useAtom (isRepeatingAtom)
    const [, toggleRepeating] = useAtom (toggleRepeatingAtom)

    return (
        <>
            <Button
                onClick={toggleRepeating}
                aria-label={(isRepeating ? 'disable' : 'enable') + ' repeat'}
            >
                {isRepeating
                    ? <Icon icon={repeat}/>
                    : <Icon icon={repeatOff}/>
                }
            </Button>
        </>
    )

}