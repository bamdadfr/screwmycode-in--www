import React from 'react'
import { IconRepeat } from './icons'
import { ToastUtilsSendToast } from './toast-utils-send-toast'
import { HeaderBlueprint } from './header-blueprint'

export const HeaderRepeat = () => {

    const icon = <IconRepeat/>
    const onClick = () => ToastUtilsSendToast ('repeat mode coming soon')

    return <HeaderBlueprint icon={icon} onClickFunction={onClick}/>

}

