import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { CoreLayout } from '..'
import { Container, Title } from './player-layout-styles'
import { MetaComponent } from '../../domains/core'
import { AudioComponent, IndicatorsComponent, SliderComponent } from '../../domains/player'

const propTypes = {
    'description': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
}

/**
 * @param {object} props react props
 * @param {string} props.description audio title drilling to meta
 * @param {string} props.url audio url
 * @param {string} props.title audio title
 * @param {string} props.image audio image drilling to meta
 * @returns {React.ReactElement} react component
 */
export function PlayerLayout ({
    description,
    url,
    title,
    image,
}) {

    return (
        <>
            <Head>
                <title>{description}</title>
            </Head>
            <MetaComponent description={description} image={image}/>
            <CoreLayout meta={false}>
                <Container>
                    <Title>{title}</Title>
                    <AudioComponent url={url}/>
                    <IndicatorsComponent/>
                    <SliderComponent/>
                </Container>
            </CoreLayout>
        </>
    )

}

PlayerLayout.propTypes = propTypes