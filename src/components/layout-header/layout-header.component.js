import React from 'react'
import { useRecoilState } from 'recoil'
import Link from 'next/link'
import { repeatAtom } from '../../atoms/repeat.atom'
import { IconRepeat, IconHome } from './layout-header.icons'
import { StyledContainer } from './layout-header.styles'

/**
 * @function
 * @name LayoutHeaderComponent
 * @description layout menu component
 * @returns {React.ReactElement} - react
 */
export default function LayoutHeaderComponent () {

    const [repeat, setRepeat] = useRecoilState (repeatAtom)

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
                    onClick={() => setRepeat (!repeat)}
                    onKeyDown={() => undefined}
                >
                    {repeat ? <IconRepeat.On/> : <IconRepeat.Off/>}
                </button>
            </StyledContainer>
        </>
    )

}