import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Player } from './player'
import { RedirectToHome } from './app.utils'
import { playerStateSpeed, playerStateSource, playerStateTitle } from './player.state'
import { getDataFromAPI, isValidID } from './routes.youtube.utils'
import { RoutesLoading } from './routes.loading'

export const RoutesYoutube = (props: any): React.ReactElement => {

    const { match, location } = props
    const [, setPlayerSpeed] = useRecoilState (playerStateSpeed)
    const [, setPlayerSource] = useRecoilState (playerStateSource)
    const [, setPlayerTitle] = useRecoilState (playerStateTitle)
    const [isLoading, setIsLoading] = useState (true)
    const [redirect, setRedirect] = useState (false)
    const params = new URLSearchParams (location.search)
    const speed: number = parseFloat (params.get ('speed') || '1')

    useEffect (() => {

        const id = match.params.id

        if (isValidID (id)) {

            (async (): Promise<any> => {

                const response = await getDataFromAPI (id)
    
                if (response.success) {

                    setPlayerSpeed (speed)
    
                    setPlayerSource (response.url)
    
                    setPlayerTitle (response.title)
    
                    setIsLoading (false)
                
                } else {
                    
                    setRedirect (true)
                
                }
            
            }) ()
    
        }

    }, [match.params.id])

    if (redirect) return RedirectToHome ()

    if (isLoading) return <RoutesLoading />

    return <Player />

}