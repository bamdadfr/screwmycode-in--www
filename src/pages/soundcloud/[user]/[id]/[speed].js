// noinspection JSUnusedGlobalSymbols

import React from 'react'
import PropTypes from 'prop-types'
import SoundcloudScraper from 'soundcloud-scraper'
import { PlayerLayout } from '../../../../layouts'

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

    return (
        <>
            <PlayerLayout
                title={title}
                image={image}
                url={url}
                speed={speed}
            />
        </>
    )

}

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
    const isValid = SoundcloudScraper.Util.validateURL (soundcloudUrl)

    if (!isValid) return { 'redirect': { 'destination': '/', 'permanent': false }}

    const info = await scraper.getSongInfo (soundcloudUrl)
    const audioUrl = await SoundcloudScraper.Util.fetchSongStreamURL (info.trackURL, undefined)

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

SoundcloudPage.propTypes = propTypes