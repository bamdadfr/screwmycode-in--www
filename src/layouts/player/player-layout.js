import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { CoreLayout } from '..'
import { Container } from './player-layout-styles'
import { MetaComponent } from '../../domains/core'

const propTypes = {
    'children': PropTypes.oneOfType ([
        PropTypes.element,
        PropTypes.array,
    ]).isRequired,
    'audioDescription': PropTypes.string.isRequired,
    'audioImage': PropTypes.string.isRequired,
}

/**
 * @function
 * @name PlayerLayout
 * @param {object} props - react props
 * @param {React.ReactElement} props.children - react children
 * @param {string} props.audioDescription - audio title drilling to meta
 * @param {string} props.audioImage - audio image drilling to meta
 * @returns {React.ReactElement} react component
 */
export function PlayerLayout ({
    children,
    audioDescription,
    audioImage,
}) {

    return (
        <>
            <Head>
                <title>{audioDescription}</title>
            </Head>
            <MetaComponent description={audioDescription} image={audioImage}/>
            <CoreLayout meta={false}>
                <Container>
                    {children}
                </Container>
            </CoreLayout>
        </>
    )

}

PlayerLayout.propTypes = propTypes