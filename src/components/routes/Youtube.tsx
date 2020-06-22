import React from 'react'
import { Redirect } from 'react-router-dom'
import IconChampSvg from '../../assets/icons/SCRW_CHAMP.svg'
import Player from '../player/Player'
import envService from '../../services/env'

export default (props: any): React.ReactElement => {

    const { match, location } = props
    const [redirectToHome, setRedirectToHome] = React.useState (false)
    const [isLoading, setIsLoading] = React.useState (true)
    const [playerTitle, setPlayerTitle] = React.useState (null)
    const [playerSrc, setPlayerSrc] = React.useState (null)
    const [retries, setRetries] = React.useState (0)
    const queryParams = new URLSearchParams (location.search)

    const getSpeed = (): string => {

        const querySpeed: string|null = queryParams.get ('speed')

        if (querySpeed !== null && parseFloat (querySpeed) >= 0.5 && parseFloat (querySpeed) <= 1.5) {

            return querySpeed
        
        }

        return '1'
    
    }

    const testRegEx = React.useCallback ((inputId: string): void => {

        const fetchUrl = (url: string): void => {

            fetch (url)
                .then ((r) => r.json ())
                .then ((data) => {
    
                    if (data.success) {
    
                        setTimeout (() => {
    
                            setPlayerTitle (data.title)
    
                            setPlayerSrc (data.url)
    
                            setIsLoading (false)
                        
                        }, 1300)
                    
                    } else {
    
                        setRetries (retries + 1)
                    
                    }
                
                })
        
        }
    
        const regEx = /^([0-9A-Za-z_-]{11})$/

        if (regEx.test (inputId)) {

            setIsLoading (true)

            const url: string = envService.getApiBaseUrl () + 'youtube/' + inputId

            fetchUrl (url)
        
        } else {

            setRedirectToHome (true)
        
        }
    
    }, [retries])

    // ask the raw URL to API whenever player.id changes
    React.useEffect (() => {

        testRegEx (match.params.id)
    
    }, [match.params.id, testRegEx])

    React.useEffect (() => {

        if (retries !== 0) {

            testRegEx (match.params.id)
        
        }
    
    }, [retries, match.params.id, testRegEx])

    if (redirectToHome) {

        return (
            <Redirect to="/" />
        )
    
    }

    if (retries === 3) {

        setRedirectToHome (true)
    
    }

    if (isLoading && retries === 0) {

        document.title = 'screwmycode.in'

        return (
            <>
                <div className="player">
                    <img
                        src={IconChampSvg}
                        alt="icon-loading"
                        height={150}
                    />
                </div>
            </>
        )
    
    }

    if (isLoading && retries >= 1) {

        return (
            <>
                <div className="player">
                    retry #
                    {retries}
                    ...
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
