import ytdl from 'ytdl-core'

export default async function getYoutubeInfo () {

    const id = 'QtUoBDJA7p0'
    const url = `https://www.youtube.com/watch?v=${id}`

    try {

        let response

        const info = await ytdl.getInfo (url, {
            'filter': 'audio',
        })

        response = {
            'title': info.videoDetails.title,
        }

        const audio = ytdl.chooseFormat (info.formats, {
            'quality': '140',
        })

        response = {
            ...response,
            'url': audio.url,
        }

        // if format is dash, we need an extra step to get the correct url
        // if (audio.isDashMPD) {
        //
        //     const dashUrl = await getDashUrl (url)
        //
        //     response = {
        //         ...response,
        //         'url': dashUrl,
        //         'isDash': true,
        //     }
        //
        // }

        return response

    } catch (error) {

        throw new Error (error)

    }

}