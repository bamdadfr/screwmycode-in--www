import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Player } from './player'
import { AppUtilsRedirectToHome } from './app-utils'
import { playerStateSpeed, playerStateSource, playerStateTitle } from './player-state'
import { RoutesYoutubeUtilsGetDataFromAPI, RoutesYoutubeUtilsIsValidID } from './routes-youtube-utils'
import { RoutesLoading } from './routes-loading'

export const RoutesYoutube = (props) => {

    const { match, location } = props
    const [, setPlayerSpeed] = useRecoilState (playerStateSpeed)
    const [, setPlayerSource] = useRecoilState (playerStateSource)
    const [, setPlayerTitle] = useRecoilState (playerStateTitle)
    const [isLoading, setIsLoading] = useState (true)
    const [redirect, setRedirect] = useState (false)
    const params = new URLSearchParams (location.search)
    const speed = parseFloat (params.get ('speed') || '1')

    useEffect (() => {

        const id = match.params.id

        if (RoutesYoutubeUtilsIsValidID (id)) {

            (async () => {

                const response = await RoutesYoutubeUtilsGetDataFromAPI (id)

                if (response.success) {

                    setPlayerSpeed (speed)

                    setPlayerTitle (response.data.title)

                    setPlayerSource (response.data.url)

                    setIsLoading (false)

                } else {

                    setRedirect (true)

                }

            }) ()

        }

    }, [match.params.id])

    if (redirect) return AppUtilsRedirectToHome ()

    if (isLoading) return <RoutesLoading/>

    return <Player/>

}