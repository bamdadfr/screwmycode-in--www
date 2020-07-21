import React, { ReactElement, useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import { AppConstants } from './app.constants'
import { playerStateTitle } from './player.state'

export const AppTitle = (): ReactElement => {

    const appTitle = AppConstants.title
    const playerTitle = useRecoilValue (playerStateTitle)

    useEffect (() => {

        if (playerTitle) {

            document.title = `${appTitle} - ${playerTitle}` 

        } else {

            document.title = appTitle
        
        }
    
    }, [playerTitle, appTitle])

    return (
        <>
        </>
    )

}

