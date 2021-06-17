// http://localhost:3000/youtube/gNUClEERcXI
// https://www.youtube.com/watch?v=gNUClEERcXI

import React, { useEffect } from 'react'
import { IsYoutubeIdValidUtils } from '@/utils/is-youtube-id-valid.utils'
import AudioIndicatorsComponent from '@/components/audio-indicators/audio-indicators.component'
import PlayerSliderComponent from '@/components/audio-slider/audio-slider.component'
import PlayerComponent from '@/components/audio-player/audio-player.component'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { audioUrlAtom } from '@/atoms/audio-url.atom'
import { audioTitleAtom } from '@/atoms/audio-title.atom'

export default function YoutubeIdPage ({ title, url }) {

    const [, setTitle] = useRecoilState (audioTitleAtom)
    const [, setUrl] = useRecoilState (audioUrlAtom)

    useEffect (() => {

        setTitle (title)

        setUrl (url)

    }, [])

    return (
        <>
            <PlayerComponent/>
            <AudioIndicatorsComponent/>
            <PlayerSliderComponent/>
        </>
    )

}

export async function getServerSideProps (context) {

    const { id } = context.params

    const redirectResponse = {
        'redirect': {
            'destination': '/',
            'permanent': false,
        },
    }

    if (!IsYoutubeIdValidUtils (id)) return redirectResponse

    const request = await axios.get (`https://api.screwmycode.in/youtube/${id}`)
    const { 'data': response } = request

    if (!response.success) return redirectResponse

    const { title, url } = response.data

    return {
        'props': {
            title,
            url,
        },
    }

}