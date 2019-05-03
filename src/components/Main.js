import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

export default function () {

  const [speed, setSpeed] = React.useState(1)
  const [youtubeId, setYoutubeId] = React.useState('7qtrv6KU9MA')
  const [rawUrl, setRawUrl] = React.useState(null)

  // attach to DOM
  const audioRef = React.createRef()

  const getUrl = (Id) => {
    const url = 'http://localhost:5000/' + Id

    console.log(url)

    axios.get(url).then(r => {
      setRawUrl(r.data.res)
    })
  }

  const getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      return match[2]
    } else {
      return 'error'
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setYoutubeId(getId(e.target[0].value))
  }

  // Mounting audio el
  React.useEffect(() => {
    const audio = audioRef.current
    audio.mozPreservesPitch = false
    audio.webkitPreservesPitch = false // Does not work
    audio.playbackRate = speed
  }, [])

  // when speed changes
  React.useEffect(() => {
    const audio = audioRef.current
    audio.playbackRate = speed
  }, [speed])

  // when id change, generate raw audio url calling express server running youtube-dl
  React.useEffect(() => {
    getUrl(youtubeId)
  }, [youtubeId])

  // when raw url is fetched, update the DOM
  React.useEffect(() => {
    if (rawUrl !== null) {
      const audio = audioRef.current
      console.log(rawUrl)
      audio.src = rawUrl
      audio.load()
      audio.playbackRate = speed
      audio.play()
    }
  }, [rawUrl])

  console.log('render')
  return (
    <React.Fragment>
      <div>
        https://www.youtube.com/watch?v=7qtrv6KU9MA
      </div>

      <div>
        https://www.youtube.com/watch?v=b1P8VxEZYCY
      </div>

      <div>
        input:
      </div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" name={'url'} />
        </form>
      </div>

      <div>
        id: {youtubeId}
      </div>

      <div>
        <input
          type="range"
          id="start"
          name="volume"
          value={speed}
          min="0.5"
          max="1.5"
          step="0.01"
          onChange={(e) => setSpeed(e.target.value)}
        />
      </div>

      <div>
        audio el
      </div>
      <AudioDiv>
        <Audio
          ref={audioRef}
          controls
        />
      </AudioDiv>

    </React.Fragment>
  )
}

const Audio = styled.audio`
  width: 100%;
`

const AudioDiv = styled.div`
  width: 500px;
`
