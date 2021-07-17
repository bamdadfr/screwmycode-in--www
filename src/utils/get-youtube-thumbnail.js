/**
 * @description get thumbnail from youtube id
 * @param {string} id youtube id
 * @returns {string} thumbnail url
 */
export function getYoutubeThumbnail (id) {

    const prefix = 'https://i.ytimg.com/vi/'
    const suffix = '/maxresdefault.jpg'

    return `${prefix}${id}${suffix}`

}