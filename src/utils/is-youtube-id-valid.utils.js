export function IsYoutubeIdValidUtils (id) {

    const regEx = /^([0-9A-Za-z_-]{11})$/

    return regEx.test (id)

}