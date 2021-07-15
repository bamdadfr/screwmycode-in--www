import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import * as ytdl from 'ytdl-core'
import { useRouter } from 'next/router'
import { PlayerComponent } from '../../../domains/player/player/player-component'
import { SliderComponent } from '../../../domains/player/slider/slider-component'
import { IndicatorsComponent } from '../../../domains/player/indicators'
import { StyledTitle } from '../../../pages-styles/youtube/[id]/[speed].styles'
import { GetYoutubeThumbnailUtils } from '../../../app/utils/get-youtube-thumbnail.utils'
import { useAutoplay, useStoreRepeat, useStoreVolume } from '../../../hooks'
import { PlayerLayout } from '../../../layouts'

const propTypes = {
    'title': PropTypes.string.isRequired,
    'image': PropTypes.string.isRequired,
    'url': PropTypes.string.isRequired,
    'speed': PropTypes.number.isRequired,
}

/**
 * @function
 * @name YoutubePage
 * @description /youtube/[id]/[speed]
 * @param {object} props - props
 * @param {string} props.title - audio title
 * @param {string} props.image - audio thumbnail url
 * @param {string} props.url - audio url
 * @param {number} props.speed - audio speed
 * @returns {React.ReactElement} - react component
 */
export default function YoutubePage ({
    title,
    image,
    url,
    'speed': speedFromProps,
}) {

    const router = useRouter ()
    const [provider] = useState ('YouTube')
    const [speed, setSpeed] = useState (speedFromProps)
    const [description, setDescription] = useState (`${title} - ${speedFromProps} - ${provider} - ScrewMyCode.In`)
    const { autoplay } = useAutoplay ()
    const { repeat } = useStoreRepeat ()
    const { volume, setVolume } = useStoreVolume ()

    /**
     * @function
     * @name onSpeed
     * @description update description + route
     */
    async function onSpeed () {

        setDescription (`${title} - ${speedFromProps} - ${provider} - ScrewMyCode.In`)

        await router.replace (
            `/youtube/${router.query.id}/${speed}`,
            undefined,
            { 'shallow': true },
        )

    }

    useEffect (onSpeed, [speed])

    return (
        <>
            <PlayerLayout
                audioDescription={description}
                audioImage={image}
            >
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
            </PlayerLayout>
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

    const { id, 'speed': speedFromParams } = context.params
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
