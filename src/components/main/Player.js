import React from 'react'

export default function ({ player }) {
  const audioRef = React.createRef()

  const startPlayer = () => {
    const audio = audioRef.current
    audio.src = player.url
    audio.load()
    audio.playbackRate = player.speed
    audio.play()
    audio.ontimeupdate = () => console.log(audio.currentTime)
  }

  // when playing state changes or url changes, update the DOM
  React.useEffect(() => {
    if (player.isPlaying) {
      startPlayer()
    }
  }, [player.isPlaying, player.url])

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
  }, [])

  console.log('Player render')
  return (
    <React.Fragment>
      <div className="player">
        <audio className="w-100" ref={audioRef} controls>
          <track kind="captions" />
        </audio>
      </div>
    </React.Fragment>
  )
}
