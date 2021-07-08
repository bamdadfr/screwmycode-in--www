import React from 'react'
import { Icon } from '@iconify/react'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import repeat from '@iconify/icons-mdi/repeat'
import toggleOn from '@iconify/icons-bi/toggle-on'
import toggleOff from '@iconify/icons-bi/toggle-off'
import home from '@iconify/icons-mdi/home'

export const IconLoop = {
    'On': () => <Icon icon={repeat}/>,
    'Off': () => <Icon icon={repeatOff}/>,
}

export const IconToggle = {
    'On': () => <Icon icon={toggleOn}/>,
    'Off': () => <Icon icon={toggleOff}/>,
}

export const IconHome = () => <Icon icon={home}/>