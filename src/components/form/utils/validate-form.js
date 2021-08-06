import { validateURL } from 'soundcloud-scraper'
import { getURLVideoID } from 'ytdl-core'

/**
 * @param {string} value form input value
 * @typedef {(boolean|undefined)} IsValid
 * @typedef {(string|undefined)} Path
 * @returns {{IsValid,Path}} validation data
 */
export function validateForm (value) {

    const response = {
        'isValid': undefined,
        'path': undefined,
    }

    try {

        // soundcloud
        if (validateURL (value)) {

            const userAndId = value.replace ('https://soundcloud.com/', '')

            response.isValid = true

            response.path = `/soundcloud/${userAndId}/1`

            return response

        }

        // youtube
        const id = getURLVideoID (value)

        response.isValid = true

        response.path = `/youtube/${id}/1`

        return response

    } catch {

        response.isValid = false

        return response

    }

}