import React from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { audioLoopAtom } from '../../atoms/audio-loop.atom'
import { IconLoop, IconHome } from './icons'
import { StyledContainer } from './styles'

/**
 * @function
 * @name LayoutMenuComponent
 * @description layout menu component
 * @returns {React.ReactElement} - react
 */
export default function LayoutMenuComponent () {

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