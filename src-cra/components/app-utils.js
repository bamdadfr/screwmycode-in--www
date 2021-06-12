import React from 'react'
import { Redirect } from 'react-router-dom'
import { detect } from 'detect-browser'

export const AppUtilsIsProduction = () => process.env.NODE_ENV === 'production'

export const AppUtilsRedirectToHome = () => <Redirect to="/"/>

export const AppUtilsIsFirefox = () => {

    const browser = detect ()

    return browser.name === 'firefox'

}

export const AppUtilsGetApiBaseURL = () => {

    if (AppUtilsIsProduction ()) return 'https://api.screwmycode.in/'

    // return 'http://localhost:4000/'

    return 'https://api.screwmycode.in/'

}
