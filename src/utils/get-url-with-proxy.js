/**
 * @param {string} url pure url
 * @returns {string} proxy url
 */
export function getUrlWithProxy (url) {

    if (typeof url !== 'string') throw new Error ('url is not a string')

    const isProduction = process.env.NODE_ENV === 'production'
    let proxy = 'https://screwmycode-in--cors.herokuapp.com'

    if (!isProduction) proxy = 'http://localhost:8080'

    return `${proxy}/${url}`

}