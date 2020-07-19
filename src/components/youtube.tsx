import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { IconChamp } from './icons'
import { Player } from './player'
import { RedirectToHome } from './app.utils'
import { playerStateSpeed, playerStateSource, playerStateTitle } from './player.state'
import { getDataFromAPI, isValidID } from './youtube.utils'

export const Youtube = (props: any): React.ReactElement => {

    const { match, location } = props
    const [, setPlayerSpeed] = useRecoilState (playerStateSpeed)
    const [, setPlayerSource] = useRecoilState (playerStateSource)
    const [, setPlayerTitle] = useRecoilState (playerStateTitle)
    const [isLoading, setIsLoading] = useState (true)
    const [redirect, setRedirect] = useState (false)
    const params = new URLSearchParams (location.search)
    const speed: number = parseFloat (params.get ('speed') || '1')

    useEffect (() => {
    
        setPlayerSpeed (speed)
            
    }, [speed, setPlayerSpeed])

    useEffect (() => {

        const id = match.params.id

        if (isValidID (id)) {

            (async (): Promise<any> => {

                const response = await getDataFromAPI (id)
    
                if (response.success) {
    
                    setPlayerSource (response.url)
    
                    setPlayerTitle (response.title)
    
                    setIsLoading (false)
                
                } else {
                    
                    setRedirect (true)
                
                }
            
            }) ()
    
        }

    }, [match.params.id, setPlayerSource, setPlayerTitle])

    if (redirect) return RedirectToHome ()

    if (isLoading) {

        document.title = 'screwmycode.in'

        return (
            <>
                <div className="player">
                    <img
                        src={IconChamp}
                        alt="icon-loading"
                        height={150}
                    />
                </div>
            </>
        )
    
    }

    return (
        <>
            <Player />
        </>
    )

}