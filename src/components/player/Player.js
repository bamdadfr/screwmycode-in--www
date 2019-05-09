import React from 'react'

import Controls from './Controls'

export default function (props) {
  const { src, title } = props

  const audioRef = React.useRef(null)

  const handleSpeed = (s) => {
    const audio = audioRef.current
    audio.playbackRate = s
  }

  // Mounting audio el
  React.useEffect(() => {
    const audio = audioRef.current
    audio.mozPreservesPitch = false
    audio.webkitPreservesPitch = false // Does not work
    audio.src = src
    audio.load()
    // audio.play()
    // audio.ontimeupdate = () => console.log('time', audio.currentTime)
  }, [src])

  console.log('Player render')
  return (
    <React.Fragment>

      <div className="player-title">
        {title}
      </div>

      <div className="player">
        <audio className="w-100" ref={audioRef} controls>
          <track kind="captions" />
        </audio>
      </div>

      <Controls speedCB={s => handleSpeed(s)} />
    </React.Fragment>
  )
}
