import React from 'react'
import Link from 'next/link'
import { IconHome, IconRepeatOff, IconRepeatOn } from './components'
import { Container } from './header.component.styles'
import { useHeaderComponent } from './hooks'

/**
 * @returns {React.ReactElement} react component
 */
export function HeaderComponent () {

    const { isRepeat, toggleRepeat } = useHeaderComponent ()

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
                    value={isRepeat ? 'on' : 'off'}
                >
                    {isRepeat
                        ? <IconRepeatOn/>
                        : <IconRepeatOff/>
                    }
                </button>
            </Container>
        </>
    )

}