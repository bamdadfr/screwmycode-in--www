/**
 * @function
 * @name IsYoutubeIdValidUtils
 * @description validate a given youtube id
 * @param {string} id - youtube id
 * @returns {boolean} - validity
 */
export function IsYoutubeIdValidUtils (id) {

    const regEx = /^([0-9A-Za-z_-]{11})$/

    return regEx.test (id)

}