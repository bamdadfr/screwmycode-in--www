import React, { ReactElement } from 'react'
import { IconRepeat } from './icons'
import { sendToast } from './toast.utils'
import { HeaderBlueprint } from './header.blueprint'

export const HeaderRepeat = (): ReactElement => {
    
    const icon = <IconRepeat />
    const onClick = (): void => sendToast ('repeat mode coming soon')
    
    return <HeaderBlueprint icon={icon} onClickFunction={onClick} />

}

