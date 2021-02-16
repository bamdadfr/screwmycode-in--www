import React from 'react'
import { useRecoilState } from 'recoil'
import { IconToggle } from './icons'
import { threeStateVisible } from './three-state'
import { HeaderBlueprint } from './header-blueprint'

export const HeaderToggle = () => {

    const [visible, setVisible] = useRecoilState (threeStateVisible)
    const icon = visible ? <IconToggle.On/> : <IconToggle.Off/>
    const onClick = () => setVisible (!visible)

    return <HeaderBlueprint icon={icon} onClickFunction={onClick}/>

}

