import React, { useState } from 'react'
import { SendToastUtils } from '@/utils/send-toast.utils'
import { useRecoilState } from 'recoil'
import { audioLoopAtom } from '@/atoms/audio-loop.atom'
import { IconQuestion, IconToggle, IconLoop } from './layout-header.icons'
import { StyledContainer } from './layout-header.styles'

export default function LayoutHeaderComponent () {

    const [visible, setVisible] = useState (true)
    const onClick = () => setVisible (!visible) // TODO
    const [audioLoop, setAudioLoop] = useRecoilState (audioLoopAtom)

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
                    onClick={() => setAudioLoop (!audioLoop)}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    {audioLoop ? <IconLoop.On/> : <IconLoop.Off/>}
                </span>
            </StyledContainer>
        </>
    )

}