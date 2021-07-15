import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SoundcloudScraper from 'soundcloud-scraper'
import { useRouter } from 'next/router'
import Head from 'next/head'
import PlayerComponent from '../../../../components/player/player.component'
import { StyledContainer, StyledTitle } from '../../../../pages-styles/youtube/[id]/[speed].styles'
import IndicatorsComponent from '../../../../components/indicators/indicators.component'
import SliderComponent from '../../../../components/slider/slider.component'
import { useRepeat, useVolume } from '../../../../hooks'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired,
}

/**
 * @function
 * @name SoundcloudPage
 * @description /soundcloud/[user]/[id]/[speed]
 * @param {object} props - props
 * @param {string} props.title - audio title
 * @param {string} props.image - audio thumbnail url
 * @param {string} props.url - audio url
 * @param {number} props.speed - audio speed
 * @returns {React.ReactElement} - react component
 */
export default function SoundcloudPage ({
    title,
    image,
    url,
    'speed': speedFromProps,
}) {

    const router = useRouter ()
    const [provider] = useState ('SoundCloud')
    const [speed, setSpeed] = useState (speedFromProps)
    const [description, setDescription] = useState (`${title} - ${speedFromProps} - ${provider} - ScrewMyCode.In`)
    const [autoplay, setAutoplay] = useState (false)
    const { repeat } = useRepeat ()
    const { volume, setVolume } = useVolume ()

    /**
     * @function
     * @name onMount
     * @description setup autoplay capability
     */
    async function onMount () {

        // https://github.com/video-dev/can-autoplay/issues/36
        import ('can-autoplay')
            .then ((module) => module.default.video ())
            .then (({ result }) => {

                if (result === true) {

                    setAutoplay (true)

                } else {

                    setAutoplay (false)

                }

            })

    }

    useEffect (onMount, [])

    /**
     * @function
     * @name onSpeed
     * @description update description + route
     */
    async function onSpeed () {

        setDescription (`${title} - ${speedFromProps} - ${provider} - ScrewMyCode.In`)

        await router.replace (
            `/soundcloud/${router.query.user}/${router.query.id}/${speed}`,
            undefined,
            { 'shallow': true },
        )

    }

    useEffect (onSpeed, [speed])

    return (
        <>
            <Head>

                <title>{description}</title>

                <meta itemProp="description" content={description}/>
                <meta itemProp="image" content={image}/>

                <meta name="twitter:description" content={description}/>
                <meta name="twitter:image" content={image}/>

                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image}/>

            </Head>
            <StyledContainer>

                <StyledTitle>
                    {title}
                </StyledTitle>

                <PlayerComponent
                    url={url}
                    playbackRate={speed}
                    loop={repeat}
                    volume={volume}
                    handleVolume={(v) => setVolume (parseFloat (v))}
                    autoplay={autoplay}
                />

                <IndicatorsComponent
                    value={speed}
                />

                <SliderComponent
                    value={speed}
                    handleValue={(s) => setSpeed (parseFloat (s))}
                />

            </StyledContainer>
        </>
    )

}

SoundcloudPage.propTypes = propTypes

/**
 * @function
 * @name getServerSideProps
 * @description sanitize url parameters + check if id is valid + get data from API
 * @param {object} context - next.js context
 * @returns {object} - props to pass
 */
export async function getServerSideProps (context) {

    const { user, id, speed } = context.query
    const props = {}
    const scraper = new SoundcloudScraper.Client ()
    const soundcloudUrl = `https://soundcloud.com/${user}/${id}`
    const isValid = await SoundcloudScraper.Util.validateURL (soundcloudUrl)

    if (!isValid) return { 'redirect': { 'destination': '/', 'permanent': false }}

    const info = await scraper.getSongInfo (soundcloudUrl)
    const audioUrl = await SoundcloudScraper.Util.fetchSongStreamURL (info.trackURL)

    props.title = info.title

    props.image = info.thumbnail

    props.url = audioUrl

    props.speed = parseFloat (speed) || 1

    return { props }

}