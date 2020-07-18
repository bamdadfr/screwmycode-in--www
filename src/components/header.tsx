import React, { ReactElement } from 'react'
import { sendToast } from './toast.utils'
import './header.styles.css'
import { IconRepeat, IconToggle, IconQuestion } from './icons'
import { stateMap } from './state.map'

const HeaderToggle = stateMap ((props: any): ReactElement => {

    const { three, setStateThreeVisible } = props
    const onClick = (e: boolean): void => setStateThreeVisible (e)

    return (
        <>
            <span
                onClick={(): void => onClick (!three.visible)}
                onKeyDown={(): void => undefined}
                role="button"
                tabIndex={-1}
            >
                {three.visible ? <IconToggle.on /> : <IconToggle.off />}
            </span>
        </>
    )

})

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