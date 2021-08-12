const providers = {
    'youtube': 'YouTube',
    'soundcloud': 'SoundCloud',
}

/**
 * @param {object} router next.js router
 * @returns {string} provider
 */
export function getProvider (router) {

    return providers[router.pathname.split ('/')[1]]

}