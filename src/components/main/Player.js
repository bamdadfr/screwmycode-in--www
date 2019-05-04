import React from 'react'
import styled from 'styled-components'
import { FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle } from 'react-icons/fa'

export default function (props) {
  const { player } = props

  const audioRef = React.createRef()

  const startPlayer = () => {
    const audio = audioRef.current
    audio.src = player.url
    audio.load()
    audio.playbackRate = player.speed
    audio.play()
  }

  // when rawUrl is fetched, update the DOM
  React.useEffect(() => {
    if (player.isPlaying) {
      startPlayer()
    }
  }, [player.isPlaying])

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
      <Audio className="w-100" ref={audioRef} controls />

      <ProgressWrapper>
        <ProgressBar />
      </ProgressWrapper>

      {/* <div className="pv2" /> */}

      <AudioButton className="pr2">
        <FaRegPlayCircle />
      </AudioButton>
      <AudioButton className="pr2">
        <FaRegPauseCircle />
      </AudioButton>
      <AudioButton>
        <FaRegStopCircle />
      </AudioButton>
    </React.Fragment>
  )
}

const Audio = styled.audio`
  //background-color: white;
  //color: white;
  //margin: 100px;
`

const ProgressWrapper = styled.div`
  width: 100%;
  height: 10px;
  background: white;
  margin: 20px 0;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
`

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #000411;
  left: 0;
  position: absolute;
  top: 0;
  border-radius: 2px;
`

const AudioButton = styled.span`
  background-color: white;
  font-size: 2rem;
  //color: #efcb68;
  padding-top: 0;
  
  :hover {
    color: red;
  }
`
