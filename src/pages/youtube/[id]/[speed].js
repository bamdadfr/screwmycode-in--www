// noinspection JSUnusedGlobalSymbols

import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import ytdl from 'ytdl-core'
import { getYoutubeThumbnail } from '../../../utils'
import { PlayerLayout } from '../../../layouts'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired,
}

/**
 * @description /youtube/[id]/[speed]
 * @param {object} props props
 * @param {string} props.title audio title
 * @param {string} props.image audio thumbnail url
 * @param {string} props.url audio url
 * @param {number} props.speed audio initial speed
 * @returns {React.ReactElement} react component
 */
export default function YoutubePage ({
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

    const { id, speed } = context.params
    const props = {}
    const redirect = { 'redirect': { 'destination': '/', 'permanent': false }}
    const isValid = ytdl.validateID (id)

    if (!isValid) return redirect

    const request = await axios.get (`https://api.screwmycode.in/youtube/${id}`)
    const response = request.data

    if (!response.success) return redirect

    props.title = response.data.title

    props.image = getYoutubeThumbnail (id)

    props.url = response.data.url

    props.speed = parseFloat (speed) || 1

    return { props }

}

YoutubePage.propTypes = propTypes