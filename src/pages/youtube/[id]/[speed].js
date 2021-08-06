import axios from 'axios'
import ytdl from 'ytdl-core'
import { getYoutubeThumbnail } from '../../../utils/get-youtube-thumbnail/get-youtube-thumbnail'
import { PlayerLayout } from '../../../layouts/player/player.layout'

/**
 * @description /youtube/[id]/[speed]
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

    const { id, speed } = context.params
    const props = {}
    const redirect = { 'redirect': { 'destination': '/', 'permanent': false }}
    const isValid = ytdl.validateID (id)

    if (!isValid) return redirect

    const request = await axios.get (`https://api.screwmycode.in/youtube/${id}`)
    const response = request.data

    if (!response.success) return redirect

    props.title = response.data.title

    props.image = getYoutubeThumbnail (id)

    props.url = response.data.url

    props.speed = parseFloat (speed) || 1

    return { props }

}