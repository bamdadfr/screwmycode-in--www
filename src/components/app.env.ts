import { isProduction } from './app.env.utils'

export const getBackgroundInitState = (): boolean => {

    if (isProduction ()) return true

    return false

}

export const getApiBaseUrl = (): string => {

    if (isProduction ()) return 'https://api.screwmycode.in/'

    // return 'http://localhost:4000/'
    
    return 'https://api.screwmycode.in/'

}
