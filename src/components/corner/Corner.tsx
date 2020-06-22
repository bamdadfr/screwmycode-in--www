import React, { ReactElement } from 'react'
import { Icon } from '@iconify/react'
import questionCircleOutlined from '@iconify/icons-ant-design/question-circle-outlined'
import toggleOff from '@iconify/icons-bi/toggle-off'
import toggleOn from '@iconify/icons-bi/toggle-on'
import repeatOff from '@iconify/icons-mdi/repeat-off'
import envService from '../../services/env'
import { sendToast } from '../toast/Toast'

interface IProps {
    // toggleCB: FunctionStringCallback,
    toggleCB: any,
}

export default (props: IProps): ReactElement => {

    const { toggleCB } = props
    const [toggleState, setToggleState] = React.useState<boolean> (envService.getBackgroundInitState)

    const toggle = {
        'state': {
            'get': toggleState,
            'set': setToggleState,
        },
        'icon': {
            'on': toggleOn,
            'off': toggleOff,
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
                    <Icon
                        icon={toggle.state.get ? toggle.icon.on : toggle.icon.off}
                    />
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
                    <Icon
                        icon={questionCircleOutlined}
                    />
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
                    <Icon
                        icon={repeatOff}
                    />
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
