import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import './header.styles.css'
import { IconRepeat, IconToggle, IconQuestion } from './icons'
import { sendToast } from './toast.utils'
import { threeStateVisible } from './three.state'

const HeaderToggle = (): ReactElement => {

    const [visible, setVisible] = useRecoilState (threeStateVisible)
    const onClick = (): void => setVisible (!visible)

    return (
        <>
            <span
                onClick={(): void => onClick ()}
                onKeyDown={(): void => undefined}
                role="button"
                tabIndex={-1}
            >
                {true ? <IconToggle.on /> : <IconToggle.off />}
            </span>
        </>
    )

}

const HeaderFaq = (): ReactElement => {

    return (
        <>
            <span
                onClick={(): void => sendToast ('FAQ coming soon')}
                onKeyDown={(): void => undefined}
                role="button"
                tabIndex={-1}
            >
                <IconQuestion />
            </span>

        </>
    )

}

const HeaderRepeat = (): ReactElement => {

    return (
        <>
            <span
                onClick={(): void => sendToast ('repeat mode coming soon')}
                onKeyDown={(): void => undefined}
                role="button"
                tabIndex={-1}
            >
                <IconRepeat />
            </span>
        </>

    )

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