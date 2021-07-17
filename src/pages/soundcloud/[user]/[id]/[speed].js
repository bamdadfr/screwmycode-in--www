import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import SoundcloudScraper from 'soundcloud-scraper'
import Head from 'next/head'
import { useStore } from '../../../../hooks'
import { MetaComponent, AudioTitleComponent } from '../../../../components'
import { DefaultLayout } from '../../../../layouts'
import { PlayerModule } from '../../../../modules'

/**
 * @param {object} context next.js context
 * @typedef {string} Title
 * @typedef {string} Image
 * @typedef {string} Url
 * @typedef {number} Speed
 * @returns {{Title, Image, Url, Speed}} passing props
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

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired,
}

/**
 * @description /soundcloud/[user]/[id]/[speed]
 * @param {object} props props
 * @param {string} props.title audio title
 * @param {string} props.image audio thumbnail url
 * @param {string} props.url audio url
 * @param {number} props.speed audio initial speed
 * @returns {React.ReactElement} react component
 */
export default function SoundcloudPage ({
    title,
    image,
    url,
    speed,
}) {

    const setSpeed = useStore ((state) => state.setSpeed)
    const [description] = useState (`${title} - ${speed} - SoundCloud - ScrewMyCode.In`)

    useEffect (() => setSpeed (speed), [])

    return (
        <>
            <Head>
                <title>{description}</title>
            </Head>
            <MetaComponent customTitle description={description} image={image}/>
            <DefaultLayout customMeta>
                <AudioTitleComponent title={title}/>
                <PlayerModule url={url}/>
            </DefaultLayout>
        </>
    )

}

SoundcloudPage.propTypes = propTypes