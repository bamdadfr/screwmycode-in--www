import React, { ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import { detect } from 'detect-browser'

export const RedirectToHome = (): ReactElement => <Redirect to="/" />

export const isFirefox = (): boolean => {

    // && window.location.pathname !== '/firefox'
    const browser: any = detect ()

    if (browser.name === 'firefox') return true

    return false

}

const isProduction = (): boolean => process.env.NODE_ENV === 'production'

export const getBackgroundInitState = (): boolean => {

    if (isProduction ()) return true

    return false

}

export const getApiBaseUrl = (): string => {

    if (isProduction ()) return 'https://api.screwmycode.in/'

    // return 'http://localhost:4000/'
    
    return 'https://api.screwmycode.in/'

}
