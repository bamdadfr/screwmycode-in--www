import React from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { audioLoopAtom } from '../../atoms/audio-loop.atom'
import { IconLoop, IconHome } from './layout-header.icons'
import { StyledContainer } from './layout-header.styles'

/**
 * @function
 * @name LayoutHeaderComponent
 * @description layout menu component
 * @returns {React.ReactElement} - react
 */
export default function LayoutHeaderComponent () {

    const [audioLoop, setAudioLoop] = useRecoilState (audioLoopAtom)

    return (
        <>
            <StyledContainer>
                <Link href="/">
                    <button
                        type="button"
                        aria-label="home"
                    >
                        <IconHome/>
                    </button>
                </Link>
                <button
                    type="button"
                    aria-label="repeat"
                    tabIndex={-1}
                    onClick={() => setAudioLoop (!audioLoop)}
                    onKeyDown={() => undefined}
                >
                    {audioLoop ? <IconLoop.On/> : <IconLoop.Off/>}
                </button>
            </StyledContainer>
        </>
    )

}