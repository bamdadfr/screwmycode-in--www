import React, { useEffect } from 'react'
import { IconChamp } from './icons'
import { Player } from './player'
import { RedirectToHome } from './app.utils'
import { stateMap } from './state.map'

export const Youtube = stateMap ((props: any): React.ReactElement => {

    const { match,
        location,
        player,
        setStatePlayerSpeed,
        setStatePlayerData,
        setStatePlayerInit } = props

    const params = new URLSearchParams (location.search)
    const speed: number = parseFloat (params.get ('speed') || '1')

    useEffect (() => {
    
        setStatePlayerSpeed (speed)
            
    }, [speed, setStatePlayerSpeed])

    useEffect (() => {

        const id = match.params.id

        setStatePlayerData (id)

    }, [match.params.id, setStatePlayerData])

    if (player.isError) {

        setStatePlayerInit ()

        return RedirectToHome ()
    
    }

    if (player.isLoading) {

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

})