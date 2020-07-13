import React from 'react'
import { IconChamp } from './icons'
import { Player } from './player'
import { RedirectToHome } from './app.utils'
import { isValidID, getDataFromAPI } from './youtube.utils'

export const Youtube = (props: any): React.ReactElement => {

    const { match, location } = props
    const [isLoading, setIsLoading] = React.useState (true)
    const [playerTitle, setPlayerTitle] = React.useState (null)
    const [playerSrc, setPlayerSrc] = React.useState (null)
    const [retries, setRetries] = React.useState (0)
    const queryParams = new URLSearchParams (location.search)

    const getSpeed = (): string => {

        const speed: string|null = queryParams.get ('speed')

        if (speed !== null && parseFloat (speed) >= 0.5 && parseFloat (speed) <= 1.5) {

            return speed
        
        }

        return '1'
    
    }

    const getData = React.useCallback (async (id: string): Promise<void> => {

        if (isValidID (id)) {

            setIsLoading (true)

            const response = await getDataFromAPI (id)

            if (!response.success) setRetries (retries + 1)

            setPlayerTitle (response.title)

            setPlayerSrc (response.url)

            setIsLoading (false)
        
        }

    }, [retries])

    React.useEffect (() => {

        getData (match.params.id)
    
    }, [match.params.id, retries, getData])

    if (retries === 3) return RedirectToHome ()

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
            <Player
                title={playerTitle}
                src={playerSrc}
                speed={getSpeed ()}
            />
        </>
    )

}
