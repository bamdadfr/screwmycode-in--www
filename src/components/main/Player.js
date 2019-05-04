import React from 'react'
import styled from 'styled-components'
import { FaRegPauseCircle, FaRegPlayCircle, FaRegStopCircle } from 'react-icons/fa'

export default function () {
  return (
    <React.Fragment>
      <PlayingTrack className="normal ma0 lh-title">
        IAM - Demain c'est loin
      </PlayingTrack>

      {/* <div className="pv" /> */}
      {/* <Audio className="w-100" controls /> */}

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

const PlayingTrack = styled.h2`
  color: #000411;
  font-size: 1.33rem;
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
  //background-color: #000411;
  font-size: 2rem;
  //color: #efcb68;
  padding-top: 0;
  
  //:hover {
  //}
`
