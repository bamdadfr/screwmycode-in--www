import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import './header.styles.css'
import { IconRepeat, IconToggle, IconQuestion } from './icons'
import { sendToast } from './toast.utils'
import { threeStateVisible } from './three.state'

const HeaderBlueprint = (props: any): ReactElement => {

    const { icon, onClickFunction } = props

    return (
        <>
            <span
                onClick={onClickFunction}
                onKeyDown={(): void => undefined}
                role="button"
                tabIndex={-1}
            >
                {icon}
            </span>

        </>
    )

}

const HeaderToggle = (): ReactElement => {

    const [visible, setVisible] = useRecoilState (threeStateVisible)
    const icon = visible ? <IconToggle.on /> : <IconToggle.off />
    const onClick = (): void => setVisible (!visible)
        
    return <HeaderBlueprint icon={icon} onClickFunction={onClick} />

}

const HeaderFaq = (): ReactElement => {

    const icon = <IconQuestion />
    const onClick = (): void => sendToast ('FAQ coming soon')

    return <HeaderBlueprint icon={icon} onClickFunction={onClick} />
    
}

const HeaderRepeat = (): ReactElement => {
    
    const icon = <IconRepeat />
    const onClick = (): void => sendToast ('repeat mode coming soon')
    
    return <HeaderBlueprint icon={icon} onClickFunction={onClick} />

}

export const Header = (): ReactElement => {

    return (
        <div className="corner-help">
            <HeaderFaq />
            <HeaderToggle />
            <HeaderRepeat />
        </div>
    )

}