import React from 'react'
import styled from 'styled-components'

export default function (props) {
  const { player } = props

  React.useEffect(() => {
    //
  }, [player.title])

  console.log("Title render")
  return (
    <React.Fragment>
      <PlayingTrack className="normal ma0 lh-title">
        {player.title ? player.title : ' .'}
      </PlayingTrack>

       <div className="pv2" />
    </React.Fragment>
  )
}

const PlayingTrack = styled.h2`
  color: #000411;
  font-size: 1.33rem;
`
