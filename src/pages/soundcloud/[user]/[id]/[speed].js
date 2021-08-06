import { PlayerLayout } from '../../../../layouts/player/player.layout'

/**
 * @description /soundcloud/[user]/[id]/[speed]
 */
export default PlayerLayout

/**
 * @param {object} context next.js context
 * @typedef {string} Title
 * @typedef {string} Image
 * @typedef {string} Url
 * @typedef {number} Speed
 * @returns {{Title, Image, Url, Speed}} passing props
 */
export async function getServerSideProps (context) {

    const { user, id, speed } = context.query
    const props = {}
    const SoundcloudScraper = (await import ('soundcloud-scraper')).default
    const scraper = new SoundcloudScraper.Client ()
    const soundcloudUrl = `https://soundcloud.com/${user}/${id}`
    const isValid = SoundcloudScraper.Util.validateURL (soundcloudUrl)

    if (!isValid) return { 'redirect': { 'destination': '/', 'permanent': false }}

    const info = await scraper.getSongInfo (soundcloudUrl)
    const audioUrl = await SoundcloudScraper.Util.fetchSongStreamURL (info.trackURL, undefined)

    props.title = info.title

    props.image = info.thumbnail

    props.url = audioUrl

    props.speed = parseFloat (speed) || 1

    return { props }

}