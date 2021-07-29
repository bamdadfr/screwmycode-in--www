import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { AudioTitleComponent, IndicatorsComponent, MetaComponent, SpeedComponent } from '../../components'
import { DefaultLayout } from '../default'
import { PlayerModule } from '../../modules'
import { useStore } from '../../store'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired,
}

/**
 * @param {object} props props
 * @param {string} props.title audio title
 * @param {string} props.image audio thumbnail url
 * @param {string} props.url audio url
 * @param {number} props.speed audio initial speed
 * @returns {React.ReactElement} react component
 */
export function PlayerLayout ({
    title,
    image,
    url,
    speed,
}) {

    const router = useRouter ()
    const setSpeed = useStore ((state) => state.setSpeed)
    const setAudioTitle = useStore ((state) => state.setAudioTitle)
    const [description] = useState (`${title} - ${speed} - YouTube - ScrewMyCode.In`)

    useEffect (() => setSpeed (speed), [setSpeed, speed])

    useEffect (() => setAudioTitle (title), [setAudioTitle, title])

    return (
        <>
            <Head>
                <title>{description}</title>
            </Head>
            <MetaComponent
                customTitle
                description={description}
                image={image}
                url={'https://www.screwmycode.in' + router.asPath}
            />
            <DefaultLayout customMeta>
                <AudioTitleComponent title={title}/>
                <PlayerModule url={url}/>
                <IndicatorsComponent/>
                <SpeedComponent/>
            </DefaultLayout>
        </>
    )

}

PlayerLayout.propTypes = propTypes