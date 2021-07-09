import React from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { audioLoopAtom } from '../../atoms/audio-loop.atom'
import { IconLoop, IconHome } from './layout-header.icons'
import { StyledContainer } from './layout-header.styles'

/**
 * @function
 * @name LayoutHeaderComponent
 * @description layout: header component
 * @returns {React.ReactNode} - react component
 */
export default function LayoutHeaderComponent () {

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
            </StyledContainer>
        </>
    )

}