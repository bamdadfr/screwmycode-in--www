import React from 'react'
import { Redirect } from 'react-router-dom'

import PlayerTitle from './_PlayerTitle'
import PlayerControls from './_PlayerControls'

export default function ({ player }) {
  if (player.url === null) {
    return <Redirect to="/" />
  }

  const audioRef = React.useRef(null)

  // when speed changes
  React.useEffect(() => {
    const audio = audioRef.current
    audio.playbackRate = player.speed
  }, [player.speed])

  // Mounting audio el
  React.useEffect(() => {
    const audio = audioRef.current
    audio.mozPreservesPitch = false
    audio.webkitPreservesPitch = false // Does not work
    audio.src = player.url
    audio.load()
    audio.play()
    audio.ontimeupdate = () => console.log(audio.currentTime)
  }, [player.url])

  console.log('Player render')
  return (
    <React.Fragment>

      <PlayerTitle />

      <div className="player">
        <audio className="w-100" ref={audioRef} controls>
          <track kind="captions" />
        </audio>
      </div>

      <PlayerControls />
    </React.Fragment>
  )
}
