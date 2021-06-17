// http://localhost:3000/youtube/gNUClEERcXI
// https://www.youtube.com/watch?v=gNUClEERcXI

import React, { useEffect } from 'react'
import { IsYoutubeIdValidUtils } from '@/utils/is-youtube-id-valid.utils'
import IndicatorsComponent from '@/components/indicators/indicators.component'
import PlayerSliderComponent from '@/components/slider/slider.component'
import PlayerComponent from '@/components/player/player.component'
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
            <IndicatorsComponent/>
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