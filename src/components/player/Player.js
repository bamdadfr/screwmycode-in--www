import React from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

import Controls from './Controls'

export default function (props) {
  const { src, title, speed } = props

  const [isPlaying, setIsPlaying] = React.useState(false)
  const audioRef = React.useRef(null)

  const switchPlayPause = () => {
    const audio = audioRef.current
    isPlaying ? audio.pause() : audio.play()
  }

  // copy to clipboard
  const copyToClipboard = () => {
    const audio = audioRef.current
    const el = document.createElement('textarea')

    el.value = `http://${window.location.host}${window.location.pathname}?speed=${audio.playbackRate}`
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  // handle speed changes
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
    handleSpeed(speed)
    audio.onplay = () => setIsPlaying(true)
    audio.onpause = () => setIsPlaying(false)

    audio.play()
    // audio.ontimeupdate = () => console.log('time', audio.currentTime)
  }, [src, speed])

  console.log('Player render')
  return (
    <React.Fragment>

      <KeyboardEventHandler
        handleKeys={['Space']}
        onKeyEvent={() => switchPlayPause()}
      />

      <div className="player-title">
        {title}
      </div>

      <div
        className="player-title"
      >
        <button
          type="button"
          onClick={() => copyToClipboard()}
        >
          copy
        </button>
      </div>

      <div className="player">
        <audio className="w-100" ref={audioRef} controls>
          <track kind="captions" />
        </audio>
      </div>

      <Controls
        init={speed}
        speedCB={s => handleSpeed(s)}
      />
    </React.Fragment>
  )
}
