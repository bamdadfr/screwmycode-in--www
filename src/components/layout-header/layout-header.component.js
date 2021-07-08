import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { audioLoopAtom } from '@/atoms/audio-loop.atom'
import Link from 'next/link'
import { IconToggle, IconLoop, IconHome } from './layout-header.icons'
import { StyledContainer } from './layout-header.styles'

/**
 * @function
 * @name LayoutHeaderComponent
 * @description layout: header component
 * @returns {React.ReactNode} - react component
 */
export default function LayoutHeaderComponent () {

    const [visible, setVisible] = useState (true)
    const onClick = () => setVisible (!visible) // TODO
    const [audioLoop, setAudioLoop] = useRecoilState (audioLoopAtom)

    return (
        <>
            <StyledContainer>
                <Link href="/">
                    <a>
                        <IconHome/>
                    </a>
                </Link>
                <span
                    onClick={() => setAudioLoop (!audioLoop)}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    {audioLoop ? <IconLoop.On/> : <IconLoop.Off/>}
                </span>
                <span
                    onClick={() => onClick ()}
                    onKeyDown={() => undefined}
                    role="button"
                    tabIndex={-1}
                >
                    {visible ? <IconToggle.On/> : <IconToggle.Off/>}
                </span>
            </StyledContainer>
        </>
    )

}