const getIsProduction = (): boolean => process.env.NODE_ENV === 'production'

const getBackgroundInitState = (): boolean => {

    const isProduction = getIsProduction ()

    if (isProduction) {

        return true
    
    }

    return false

}

const getApiBaseUrl = (): string => {

    const isProduction = getIsProduction ()

    if (isProduction) {
        
        return 'https://api.screwmycode.in/'
    
    }
    
    return 'https://api.screwmycode.in/'
    // return 'http://localhost:4000/'

}

export default {
    getBackgroundInitState,
    getApiBaseUrl,
}