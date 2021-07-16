import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import * as ytdl from 'ytdl-core'
import { useRouter } from 'next/router'
import { GetYoutubeThumbnailUtils } from '../../../app/utils/get-youtube-thumbnail.utils'
import { PlayerLayout } from '../../../layouts'
import { useStoreSpeed } from '../../../hooks'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
}

/**
 * @description /youtube/[id]/[speed]
 * @param {object} props props
 * @param {string} props.title audio title
 * @param {string} props.image audio thumbnail url
 * @param {string} props.url audio url
 * @returns {React.ReactElement} react component
 */
export default function YoutubePage ({
    title,
    image,
    url,
}) {

    const router = useRouter ()
    const { speed } = useStoreSpeed ()

    useEffect (async () => {

        await router.replace (
            `/youtube/${router.query.id}/${speed}`,
            undefined,
            { 'shallow': true },
        )

    }, [speed])

    const description = `${title} - ${speed} - YouTube - ScrewMyCode.In`

    return (
        <>
            <PlayerLayout
                description={description}
                url={url}
                title={title}
                image={image}
            />
        </>
    )

}

YoutubePage.propTypes = propTypes

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

    props.image = GetYoutubeThumbnailUtils (id)

    props.url = response.data.url

    props.speed = parseFloat (speed) || 1

    return { props }

}
