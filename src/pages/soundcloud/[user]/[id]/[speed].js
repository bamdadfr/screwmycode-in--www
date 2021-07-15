import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import SoundcloudScraper from 'soundcloud-scraper'
import { useRouter } from 'next/router'
import { PlayerLayout } from '../../../../layouts'
import { useStoreSpeed } from '../../../../hooks'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
}

/**
 * @function
 * @name SoundcloudPage
 * @description /soundcloud/[user]/[id]/[speed]
 * @param {object} props - props
 * @param {string} props.title - audio title
 * @param {string} props.image - audio thumbnail url
 * @param {string} props.url - audio url
 * @returns {React.ReactElement} - react component
 */
export default function SoundcloudPage ({
    title,
    image,
    url,
}) {

    const router = useRouter ()
    const { speed } = useStoreSpeed ()

    useEffect (async () => {

        await router.replace (
            `/soundcloud/${router.query.user}/${router.query.id}/${speed}`,
            undefined,
            { 'shallow': true },
        )

    }, [speed])

    const description = `${title} - ${speed} - SoundCloud - ScrewMyCode.In`

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