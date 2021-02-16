import React from 'react'
import { IconQuestion } from './icons'
import { ToastUtilsSendToast } from './toast-utils-send-toast'
import { HeaderBlueprint } from './header-blueprint'

export const HeaderFaq = () => {

    const icon = <IconQuestion/>
    const onClick = () => ToastUtilsSendToast ('FAQ coming soon')

    return <HeaderBlueprint icon={icon} onClickFunction={onClick}/>

}

