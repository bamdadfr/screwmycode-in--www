'use strict'

const extractId = (url) => {
  const regExp = /([0-9A-Za-z_-]{11})/
  const match = url.match(regExp)

  try {
    return match[0]
  } catch (err) {
    return new Error('Invalid URL')
  }
}

module.exports = (url) => {
  const id = extractId(url)

  const videoInfoUrl = 'https://www.youtube.com/get_video_info?video_id=' + id

  return videoInfoUrl
}
