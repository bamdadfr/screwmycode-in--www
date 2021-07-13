import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import axios from 'axios'
import * as ytdl from 'ytdl-core'
import { useRouter } from 'next/router'
import { useRecoilState, useRecoilValue } from 'recoil'
import PlayerComponent from '../../../components/player/player.component'
import SliderComponent from '../../../components/slider/slider.component'
import IndicatorsComponent from '../../../components/indicators/indicators.component'
import { StyledContainer, StyledTitle } from '../../../pages-styles/youtube/[id]/[speed].styles'
import { GetYoutubeThumbnailUtils } from '../../../utils/get-youtube-thumbnail.utils'
import { repeatAtom } from '../../../atoms/repeat.atom'
import { volumeAtom } from '../../../atoms/volume.atom'

const propTypes = {
    'title': PropTypes.string.isRequired,
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
    const [speed, setSpeed] = useState (speedFromProps)
    const [description, setDescription] = useState (`${title} - ${speedFromProps} - ScrewMyCode.In`)
    const [autoplay, setAutoplay] = useState (false)
    const repeat = useRecoilValue (repeatAtom)
    const [volume, setVolume] = useRecoilState (volumeAtom)

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

        // eslint-disable-next-line no-self-compare
        const shouldShallow = router.route === router.route && router.query.id === router.query.id

        // eslint-disable-next-line no-console
        console.log ('shouldShallow', shouldShallow)

        setDescription (`${title} - ${speed} - YouTube - ScrewMyCode.In`)

        await router.replace (
            `/youtube/${router.query.id}/${speed}`,
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
