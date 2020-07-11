import React, { ReactElement } from 'react'
import { getBackgroundInitState } from './app.env'
import { sendToast } from './toast.utils'
import { IHeaderProps } from './header.types'
import './header.styles.css'
import { IconRepeat, IconToggle, IconQuestion } from './icons'

export const Header = (props: IHeaderProps): ReactElement => {

    const { toggleCB } = props
    const [toggleState, setToggleState] = React.useState<boolean> (getBackgroundInitState)

    const toggle = {
        'state': {
            'get': toggleState,
            'set': setToggleState,
        },
        'callback': toggleCB,
        'onClick': (e: boolean): void => toggle.state.set (e),
        'JSX': (): ReactElement => (
            <>
                <span
                    onClick={(): void => toggle.onClick (!toggle.state.get)}
                    onKeyDown={(): void => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    {toggle.state.get ? <IconToggle.on /> : <IconToggle.off />}
                </span>
            </>
        ),
    }

    React.useEffect (() => {

        toggle.callback (toggle.state.get)
    
    }, [toggle])

    const faq = {
        'JSX': (): ReactElement => (
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
        ),
    }

    const repeat = {
        'JSX': (): ReactElement => (
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
        ),
    }

    return (
        <div className="corner-help">
            <faq.JSX />
            <toggle.JSX />
            <repeat.JSX />
        </div>
    )

}
