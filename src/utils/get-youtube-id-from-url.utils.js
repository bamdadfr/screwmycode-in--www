/**
 * @function
 * @name GetYoutubeIdFromUrlUtils
 * @description parse the youtube id from a given url
 * @param {string} url - youtube url
 * @returns {(string | boolean)} - id or false
 */
export function GetYoutubeIdFromUrlUtils (url) {

    const youtubeRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match (youtubeRegEx)

    if (match && match[2].length === 11) {

        return match[2]

    }

    return false

}