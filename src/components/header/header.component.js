import React from 'react'
import Link from 'next/link'
import home from '@iconify/icons-mdi/home'
import { Icon } from '@iconify/react'
import { Container } from './header.component.styles'

/**
 * @returns {React.ReactElement} react component
 */
export function HeaderComponent () {

    return (
        <>
            <Container>
                <Link href="/">
                    <button
                        type="button"
                        aria-label="home"
                    >
                        <Icon icon={home}/>
                    </button>
                </Link>
            </Container>
        </>
    )

}