import { getApiBaseURL } from './app.utils'

export const getIDFromURL = (url: string): string|boolean => {

    const youtubeRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match (youtubeRegEx)

    if (match && match[2].length === 11) {

        return match[2]
    
    }

    return false

}

export const isValidID = (id: string): boolean => {

    const regEx = /^([0-9A-Za-z_-]{11})$/

    if (regEx.test (id)) return true

    return false

}

export const getDataFromAPI = async (id: string): Promise<any> => {

    const url = getApiBaseURL () + 'youtube/' + id
    const response = await fetch (url)
    const json: object = response.json ()

    return json

}
