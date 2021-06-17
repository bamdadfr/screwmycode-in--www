export function GetYoutubeIdFromUrlUtils (url) {

    const youtubeRegEx = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match (youtubeRegEx)

    if (match && match[2].length === 11) {

        return match[2]

    }

    return false

}