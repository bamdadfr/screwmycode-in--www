// http://localhost:3000/youtube/gNUClEERcXI
// https://www.youtube.com/watch?v=gNUClEERcXI

import React from 'react'
import { IsYoutubeIdValidUtils } from '@/utils/is-youtube-id-valid.utils'
import IndicatorsComponent from '@/components/indicators/indicators.component'
import SliderComponent from '@/components/slider/slider.component'
import PlayerComponent from '@/components/player/player.component'
import axios from 'axios'
import { StyledContainer } from '../../pages-styles/youtube/[id].styles'

export default function YoutubeIdPage ({ title, url }) {

    return (
        <>
            <StyledContainer>
                {title}
                <PlayerComponent url={url}/>
                <IndicatorsComponent/>
                <SliderComponent/>
            </StyledContainer>
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