import React from 'react'
import Link from 'next/link'
import { IconRepeat, IconHome } from './header.icons'
import { Container } from './header.styles'
import { useHeaderComponent } from './hooks'

/**
 * @function
 * @name HeaderComponent
 * @description layout menu component
 * @returns {React.ReactElement} - react component
 */
export function HeaderComponent () {

    const { repeat, toggleRepeat } = useHeaderComponent ()

    return (
        <>
            <Container>
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
                    onClick={() => toggleRepeat ()}
                >
                    {repeat ? <IconRepeat.On/> : <IconRepeat.Off/>}
                </button>
            </Container>
        </>
    )

}