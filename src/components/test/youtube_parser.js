/* eslint-disable */

import React from 'react'

export default function () {
  // inspired from
  // https://github.com/ytdl-org/youtube-dl/blob/master/youtube_dl/extractor/youtube.py

  /* return target:
  https://r5---sn-n4g-atok.googlevideo.com/videoplayback?id=o-AMItfez3_lukjF0EWzyIIe2kty-Oco9NxBAjbx8eKGYi&itag=140&source=youtube&requiressl=yes&mm=31%2C29&mn=sn-n4g-atok%2Csn-n4g-jqbe7&ms=au%2Crdu&mv=m&pcm2cms=yes&pl=23&ei=D8rRXO2AKsqUV7zptugB&initcwndbps=2233750&mime=audio%2Fmp4&gir=yes&clen=6819309&dur=421.302&lmt=1555004109428522&mt=1557252570&fvip=5&keepalive=yes&c=WEB&txp=5431432&ip=78.121.106.45&ipbits=0&expire=1557274223&sparams=ip%2Cipbits%2Cexpire%2Cid%2Citag%2Csource%2Crequiressl%2Cmm%2Cmn%2Cms%2Cmv%2Cpcm2cms%2Cpl%2Cei%2Cinitcwndbps%2Cmime%2Cgir%2Cclen%2Cdur%2Clmt&key=yt8&signature=EA028BC4AF8B0B7D2EAD08B4B4C544B0A8E4A353.DA55E46C0BE2439F4CC300578A94B094279B0580&ratebypass=yes
   */

  const extractId = (url) => {
    const regExp = /([0-9A-Za-z_-]{11})/
    const match = url.match(regExp)

    try {
      return match[0]
    } catch (err) {
      return new Error('Invalid URL')
    }
  }

  const process = async (url) => {
    const id = extractId(url)
    const videoInfoUrl = `https://www.youtube.com/get_video_info?video_id=${id}`

    const r_raw = await fetch(videoInfoUrl)
    const r_text = await r_raw.text()
    const response = {}

    r_text.split('&').map((el) => {
      const arg = el.split('=')
      response[arg[0]] = arg[1]
    })

    console.log(response)

    let test = response.adaptive_fmts
    // console.log(test)

    const saveme = {}

    test = decodeURIComponent(test).split(',').map((el, i) => {
      const arg = el.split('&')

      saveme[i] = arg
      // console.log(arg)

      // console.log(arg)
    })

    console.log(saveme)

    const stream = {}

    saveme[0].map((el) => {
      const arg = el.split('=')
      stream[arg[0]] = arg[1]
    })

    console.log(stream)
  }

  process('https://www.youtube.com/watch?v=6sv4suk1Me8')

  return (
    <React.Fragment>
      test
    </React.Fragment>
  )
}
