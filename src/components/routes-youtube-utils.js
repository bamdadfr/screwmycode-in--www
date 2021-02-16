import { AppUtilsGetApiBaseURL } from './app-utils'

export const RoutesYoutubeUtilsGetIDFromURL = (url) => {

    const youtubeRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match (youtubeRegEx)

    if (match && match[2].length === 11) {

        return match[2]

    }

    return false

}

export const RoutesYoutubeUtilsIsValidID = (id) => {

    const regEx = /^([0-9A-Za-z_-]{11})$/

    return regEx.test (id)

}

export const RoutesYoutubeUtilsGetDataFromAPI = async (id) => {

    const url = AppUtilsGetApiBaseURL () + 'youtube/' + id
    const response = await fetch (url)

    return response.json ()

}
