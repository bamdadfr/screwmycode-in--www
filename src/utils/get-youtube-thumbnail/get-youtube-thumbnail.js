export const prefix = 'https://i.ytimg.com/vi/'

export const suffix = '/maxresdefault.jpg'

/**
 * @description get thumbnail from youtube id
 * @param {string} id youtube id
 * @returns {string} thumbnail url
 */
export function getYoutubeThumbnail (id) {

    if (typeof id !== 'string') throw new Error ('id is not a string')

    return `${prefix}${id}${suffix}`

}