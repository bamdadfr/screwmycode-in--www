import React, { ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import { detect } from 'detect-browser'

export const AppUtilsRedirectHome = (): ReactElement => {

    return (
        <Redirect to="/" />
    )

}

export const AppUtilsRedirectIfNotFirefox = (): void => {

    const browser: any = detect ()

    if (browser.name !== 'firefox' && window.location.pathname !== '/firefox') {

        window.location.href = `${window.location.origin}/firefox`
    
    }

}