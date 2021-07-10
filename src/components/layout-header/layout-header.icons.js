import React from 'react'
import { Icon } from '@iconify/react'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import repeat from '@iconify/icons-mdi/repeat'
import home from '@iconify/icons-mdi/home'

export const IconRepeat = {
    'On': () => <Icon icon={repeat}/>,
    'Off': () => <Icon icon={repeatOff}/>,
}

export const IconHome = () => <Icon icon={home}/>