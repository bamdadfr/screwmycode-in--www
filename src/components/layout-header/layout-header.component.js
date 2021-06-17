import React, { useState } from 'react'
import { SendToastUtils } from '@/utils/send-toast.utils'
import { IconQuestion, IconToggle, IconRepeat } from './layout-header.icons'
import { StyledContainer } from './layout-header.styles'

export default function LayoutHeaderComponent () {

    const [visible, setVisible] = useState (true)
    const onClick = () => setVisible (!visible)

    return (
        <>
            <StyledContainer>
                <span
                    onClick={() => SendToastUtils ('FAQ coming soon')}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    <IconQuestion/>
                </span>
                <span
                    onClick={() => onClick ()}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    {visible ? <IconToggle.On/> : <IconToggle.Off/>}
                </span>
                <span
                    onClick={() => SendToastUtils ('repeat mode coming soon')}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    <IconRepeat/>
                </span>
            </StyledContainer>
        </>
    )

}