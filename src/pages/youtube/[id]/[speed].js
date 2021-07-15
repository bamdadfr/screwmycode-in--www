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
 * @function
 * @name YoutubePage
 * @description /youtube/[id]/[speed]
 * @param {object} props - props
 * @param {string} props.title - audio title
 * @param {string} props.image - audio thumbnail url
 * @param {string} props.url - audio url
 * @returns {React.ReactElement} - react component
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
 * @function
 * @name getServerSideProps
 * @description sanitize url parameters + check if id is valid + get data from API
 * @param {object} context - next.js context
 * @returns {object} - props to pass
 */
export async function getServerSideProps (context) {

    const { id, 'speed': speedFromParams } = context.params // todo SSR zustand for speed
    let speed = parseFloat (speedFromParams) || 1

    if (speedFromParams > 1.5) speed = 1.5

    if (speedFromParams < 0.5) speed = 0.5

    const redirectResponse = {
        'redirect': {
            'destination': '/',
            'permanent': false,
        },
    }

    try {

        // throws if `id` is not valid
        ytdl.getVideoID (id)

    } catch {

        return redirectResponse

    }

    const request = await axios.get (`https://api.screwmycode.in/youtube/${id}`)
    const { 'data': response } = request

    if (!response.success) return redirectResponse

    const { title, url } = response.data
    const image = GetYoutubeThumbnailUtils (id)

    return {
        'props': {
            title,
            image,
            url,
            speed,
        },
    }

}
