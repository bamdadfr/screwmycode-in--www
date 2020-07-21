import React, { ReactElement } from 'react'
import { IconQuestion } from './icons'
import { sendToast } from './toast.utils'
import { HeaderBlueprint } from './header.blueprint'

export const HeaderFaq = (): ReactElement => {

    const icon = <IconQuestion />
    const onClick = (): void => sendToast ('FAQ coming soon')

    return <HeaderBlueprint icon={icon} onClickFunction={onClick} />
    
}

