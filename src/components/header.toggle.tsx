import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import { IconToggle } from './icons'
import { threeStateVisible } from './three.state'
import { HeaderBlueprint } from './header.blueprint'

export const HeaderToggle = (): ReactElement => {

    const [visible, setVisible] = useRecoilState (threeStateVisible)
    const icon = visible ? <IconToggle.on /> : <IconToggle.off />
    const onClick = (): void => setVisible (!visible)
        
    return <HeaderBlueprint icon={icon} onClickFunction={onClick} />

}

