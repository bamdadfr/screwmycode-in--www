import React, { ReactElement } from 'react'
import { Redirect } from 'react-router-dom'
import { detect } from 'detect-browser'

export const isProduction = (): boolean => process.env.NODE_ENV === 'production'

export const RedirectToHome = (): ReactElement => <Redirect to="/" />

export const isFirefox = (): boolean => {

    const browser: any = detect ()

    if (browser.name === 'firefox') return true

    return false

}

export const getApiBaseURL = (): string => {

    if (isProduction ()) return 'https://api.screwmycode.in/'

    // return 'http://localhost:4000/'
    
    return 'https://api.screwmycode.in/'

}
