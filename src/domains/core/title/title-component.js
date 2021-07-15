import React from 'react'
import Link from 'next/link'
import { Title } from './title-component-styles'

/**
 * @function
 * @name TitleComponent
 * @returns {React.ReactElement} react component
 */
export function TitleComponent () {

    return (
        <>
            <Title>
                <Link href="/">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        screwmycode.in
                    </a>
                </Link>
            </Title>
        </>
    )

}